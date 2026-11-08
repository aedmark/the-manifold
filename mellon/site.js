/**
 * Mellon Documentation Suite: site.js
 * Offline-first interactivity:
 * 1. Lexicon search and instant filtering (Plain English / Middle-earth / Vedic)
 * 2. Quick-Reference Cheat Sheet tab switching
 * 3. Copy-to-clipboard actions
 * 4. Rail navigation scroll tracking
 *
 * Invariant INV-006: Zero em dashes in code or comments.
 */

(function () {
    "use strict";

    // 1. Lexicon Search and Instant Filtering
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

    // 2. Cheat Sheet Tab Switching
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

    // 3. Copy to Clipboard
    function setupCopy() {
        const copyBtns = document.querySelectorAll(".copy-btn");
        copyBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const textToCopy = btn.getAttribute("data-copy") || btn.parentElement.querySelector("code")?.textContent;
                if (!textToCopy) return;

                navigator.clipboard.writeText(textToCopy).then(function () {
                    const originalText = btn.textContent;
                    btn.textContent = "COPIED";
                    btn.style.color = "var(--ega-bgreen)";
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

    // 4. Rail Navigation Scrollspy
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

    function init() {
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
