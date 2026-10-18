/* Apply the saved theme before first paint to avoid a flash. */
(function () {
  try {
    var saved = localStorage.getItem("tgz-theme");
    var theme = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) { /* storage blocked: keep default */ }
})();
