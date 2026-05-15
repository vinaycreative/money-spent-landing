export function ThemeScript() {
  const script = `
(function() {
  var DARK_BG = "#0d0e0c";
  var LIGHT_BG = "#f7f7f4";
  var root = document.documentElement;
  function syncBody(bg) {
    if (document.body) document.body.style.backgroundColor = bg;
  }
  function paint(dark) {
    var bg = dark ? DARK_BG : LIGHT_BG;
    root.classList.toggle("dark", dark);
    root.style.backgroundColor = bg;
    syncBody(bg);
    if (!document.body) {
      document.addEventListener("DOMContentLoaded", function onReady() {
        document.removeEventListener("DOMContentLoaded", onReady);
        syncBody(bg);
      });
    }
  }
  try {
    var t = localStorage.getItem("theme");
    if (t === "light") paint(false);
    else if (t === "dark") paint(true);
    else if (t === "system") paint(window.matchMedia("(prefers-color-scheme: dark)").matches);
    else paint(true);
  } catch (e) {
    paint(true);
  }
})();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
