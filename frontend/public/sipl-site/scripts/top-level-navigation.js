(function () {
  document.addEventListener("click", function (event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    var anchor = event.target.closest("a[href]");
    if (
      !anchor ||
      anchor.target === "_blank" ||
      anchor.hasAttribute("download") ||
      window.top === window
    ) {
      return;
    }

    var href = anchor.getAttribute("href");
    if (!href || !href.startsWith("/") || href.startsWith("//")) return;

    var destination = new URL(href, window.location.href);
    if (destination.origin !== window.location.origin) return;

    event.preventDefault();
    window.top.location.assign(destination.href);
  });
})();
