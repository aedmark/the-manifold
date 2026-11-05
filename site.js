/* The Manifold: small enhancements for the field manual.
   No dependencies, no network, no build step. */

(function () {
    'use strict';

    /* ---------- Copy buttons ---------- */

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text).then(function () {
                return true;
            }).catch(function () {
                return fallbackCopy(text);
            });
        }
        return Promise.resolve(fallbackCopy(text));
    }

    function fallbackCopy(text) {
        var area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.top = '-1000px';
        area.style.left = '-1000px';
        document.body.appendChild(area);
        area.select();

        var ok = false;
        try {
            ok = document.execCommand('copy');
        } catch (error) {
            ok = false;
        }
        area.remove();
        return ok;
    }

    function statusFor(button) {
        var scope = button.closest('.copy-card, .code-foot');
        return scope ? scope.querySelector('.copy-status') : null;
    }

    function wireCopyButtons() {
        var buttons = document.querySelectorAll('[data-copy-target]');
        Array.prototype.forEach.call(buttons, function (button) {
            button.addEventListener('click', function () {
                var target = document.getElementById(button.getAttribute('data-copy-target'));
                if (!target) return;

                var text = target.textContent
                    .split('\n')
                    .map(function (line) { return line.replace(/^\$\s?/, ''); })
                    .join('\n')
                    .trim();

                var status = statusFor(button);
                var label = button.textContent;

                copyText(text).then(function (ok) {
                    button.textContent = ok ? 'Copied' : 'Select & copy';
                    if (status) {
                        status.textContent = ok
                            ? 'Copied to the clipboard.'
                            : 'Copy was blocked. Select the text and copy it manually.';
                    }
                    window.setTimeout(function () {
                        button.textContent = label;
                    }, 1800);
                });
            });
        });
    }

    /* ---------- Where does this fact live? ---------- */

    var facts = {
        choice: {
            path: 'docs/DECISIONS.md',
            tag: 'WHY / APPEND',
            owns: 'A durable choice, the alternatives that were rejected, the consequence, the tensions still being held, and the open questions that still block work.',
            update: 'a consequential choice is accepted, reversed, a tension is held or resolved, or an open question is answered.',
            link: '#doc-decisions'
        },
        state: {
            path: 'docs/HANDOFF.md',
            tag: 'STATE / REWRITE',
            owns: 'What is true right now, what remains unverified, the next steps, and the last ten session entries.',
            update: 'work pauses or the current state changes materially.',
            link: '#doc-handoff'
        },
        plan: {
            path: 'ROADMAP.md',
            tag: 'PLAN / STABLE',
            owns: 'Planned, active, finished, and dropped work with permanent IDs, plus the evidence behind each status.',
            update: 'planned status or scope changes.',
            link: '#doc-roadmap'
        },
        proof: {
            path: 'docs/TESTING.md',
            tag: 'PROOF / AS NEEDED',
            owns: 'The commands, what each suite proves and does not prove, the limits, and the pitfalls already hit.',
            update: 'a suite, command, requirement, or known limitation changes.',
            link: '#doc-testing'
        },
        rule: {
            path: 'AGENTS.md',
            tag: 'RULE / CORE',
            owns: 'Standing working rules, authority, maintainer preferences, protected areas, and the repository map.',
            update: 'a durable workflow rule or maintainer preference changes.',
            link: '#doc-agents'
        }
    };

    function wireFactRouter() {
        var result = document.getElementById('fact-result');
        if (!result) return;

        var buttons = document.querySelectorAll('[data-fact]');
        var path = result.querySelector('[data-fact-path]');
        var tag = result.querySelector('[data-fact-tag]');
        var owns = result.querySelector('[data-fact-owns]');
        var update = result.querySelector('[data-fact-update]');
        var link = result.querySelector('[data-fact-link]');

        function show(key) {
            var fact = facts[key];
            if (!fact) return;

            path.textContent = fact.path;
            tag.textContent = fact.tag;
            owns.textContent = fact.owns;
            update.textContent = fact.update;
            link.setAttribute('href', fact.link);

            Array.prototype.forEach.call(buttons, function (button) {
                button.setAttribute('aria-pressed', String(button.getAttribute('data-fact') === key));
            });
        }

        Array.prototype.forEach.call(buttons, function (button) {
            button.addEventListener('click', function () {
                show(button.getAttribute('data-fact'));
            });
        });

        show('state');
    }

    /* ---------- Contents rail ---------- */

    function wireContentsRail() {
        var links = Array.prototype.slice.call(document.querySelectorAll('.rail-nav a'));
        var sections = links.map(function (link) {
            return document.querySelector(link.getAttribute('href'));
        }).filter(Boolean);

        if (!links.length || !sections.length) return;

        var ticking = false;

        function setCurrent() {
            var marker = window.scrollY + 140;
            var current = sections[0];

            sections.forEach(function (section) {
                var top = section.getBoundingClientRect().top + window.scrollY;
                if (top <= marker) current = section;
            });

            links.forEach(function (link) {
                if (link.getAttribute('href') === '#' + current.id) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(setCurrent);
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        setCurrent();
    }

    wireCopyButtons();
    wireFactRouter();
    wireContentsRail();
})();
