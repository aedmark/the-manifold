/**
 * Vedas Documentation Suite: site.js
 * Offline-first interactivity:
 * 1. Audio pronunciation synthesis (Web Speech API)
 * 2. Lexicon search and instant filtering
 * 3. Epistemic Cheat Sheet tab switching
 * 4. Copy-to-clipboard actions
 * 5. Rail navigation scroll tracking
 *
 * Invariant INV-006: Zero em dashes in code or comments.
 */

(function () {
    "use strict";

    // 1. Audio Pronunciation Synthesis via Web Speech API
    function setupPronunciation() {
        if (!("speechSynthesis" in window)) {
            console.warn("SpeechSynthesis API not supported in this browser.");
            return;
        }

        const buttons = document.querySelectorAll(".audio-btn");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const phrase = btn.getAttribute("data-pronounce");
                if (!phrase) return;

                window.speechSynthesis.cancel();

                // Format phrase into natural speech phonetics
                const cleanPhrase = phrase
                    .replace(/-/g, " ")
                    .toLowerCase();

                const utterance = new SpeechSynthesisUtterance(cleanPhrase);
                utterance.rate = 0.85;
                utterance.pitch = 1.0;
                utterance.lang = "en-US";

                // Visual feedback during speech
                buttons.forEach(function (b) { b.classList.remove("playing"); });
                btn.classList.add("playing");

                utterance.onend = function () {
                    btn.classList.remove("playing");
                };

                utterance.onerror = function () {
                    btn.classList.remove("playing");
                };

                window.speechSynthesis.speak(utterance);
            });
        });
    }

    // 2. Lexicon Search and Instant Filtering
    function setupLexiconFilter() {
        const searchInput = document.getElementById("lexicon-search");
        const tableBody = document.querySelector("#lexicon-table tbody");
        if (!searchInput || !tableBody) return;

        const rows = tableBody.querySelectorAll("tr");

        searchInput.addEventListener("input", function () {
            const query = searchInput.value.trim().toLowerCase();

            rows.forEach(function (row) {
                if (!query) {
                    row.style.display = "";
                    return;
                }
                const text = row.textContent.toLowerCase();
                if (text.indexOf(query) !== -1) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }

    // 3. Epistemic Cheat Sheet Tab Switching
    function setupTabs() {
        const tabBtns = document.querySelectorAll(".tab-btn");
        const tabPanels = document.querySelectorAll(".tab-panel");
        if (!tabBtns.length || !tabPanels.length) return;

        tabBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const targetId = btn.getAttribute("data-tab");
                if (!targetId) return;

                tabBtns.forEach(function (b) { b.classList.remove("active"); });
                tabPanels.forEach(function (p) { p.classList.remove("active"); });

                btn.classList.add("active");
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    targetPanel.classList.add("active");
                }
            });
        });
    }

    // 4. Copy to Clipboard
    function setupCopy() {
        const copyBtns = document.querySelectorAll(".copy-btn");
        copyBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const textToCopy = btn.getAttribute("data-copy") || btn.parentElement.querySelector("code")?.textContent;
                if (!textToCopy) return;

                navigator.clipboard.writeText(textToCopy).then(function () {
                    const originalText = btn.textContent;
                    btn.textContent = "COPIED";
                    btn.style.color = "var(--vedic-green)";
                    setTimeout(function () {
                        btn.textContent = originalText;
                        btn.style.color = "";
                    }, 1500);
                }).catch(function (err) {
                    console.error("Clipboard copy failed: ", err);
                });
            });
        });
    }

    // 5. Rail Navigation Scrollspy
    function setupScrollspy() {
        const navLinks = document.querySelectorAll(".rail-nav a");
        const chapters = document.querySelectorAll(".chapter");
        if (!navLinks.length || !chapters.length) return;

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(function (link) {
                        if (link.getAttribute("href") === "#" + id) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        }, observerOptions);

        chapters.forEach(function (chapter) {
            observer.observe(chapter);
        });
    }

    // Initialize all modules on DOM ready
    function init() {
        setupPronunciation();
        setupLexiconFilter();
        setupTabs();
        setupCopy();
        setupScrollspy();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
