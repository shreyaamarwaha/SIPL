(function () {
    var intro = document.getElementById("intro");
    if (!intro) return;

    var hero = intro.closest(".hero");
    var lines = Array.prototype.slice.call(intro.querySelectorAll(".intro-line"));
    var bar = document.getElementById("introBar");
    var skip = document.getElementById("introSkip");
    var holdTimes = [2800, 2800, 3000, 3000, 3000, 3000, 3200, 3400, 4500];
    var gap = 550;
    var timers = [];

    function finish() {
      timers.forEach(clearTimeout);
      intro.classList.add("hide");
      intro.setAttribute("aria-hidden", "true");
      if (hero) hero.classList.remove("intro-playing");
      if (bar) bar.style.width = "100%";
    }

    function play() {
      if (!lines.length) {
        finish();
        return;
      }

      timers.forEach(clearTimeout);
      timers = [];
      lines.forEach(function (line) { line.classList.remove("on", "pinned"); });
      intro.classList.remove("hide");
      intro.removeAttribute("aria-hidden");
      if (hero) hero.classList.add("intro-playing");
      if (bar) bar.style.width = "0%";

      var t = 300;
      var last = lines.length - 1;

      lines.forEach(function (line, i) {
        timers.push(setTimeout(function () {
          line.classList.add("on");
          if (bar) bar.style.width = ((i + 1) / lines.length) * 100 + "%";
        }, t));

        t += holdTimes[i] || 1200;

        if (i === 0) {
          timers.push(setTimeout(function () { line.classList.add("pinned"); }, t));
        } else if (i !== last) {
          timers.push(setTimeout(function () { line.classList.remove("on"); }, t));
        }
        t += gap;
      });

      timers.push(setTimeout(finish, t + 150));
    }

    if (skip) skip.addEventListener("click", finish);

    document.addEventListener("click", function (event) {
      var target = event.target;
      var replayButton = target && target.closest ? target.closest("#introReplay") : null;
      if (replayButton) play();
    });

    window.__showSiplFinal = function () {
      window.__siplFinalHome = true;
      finish();
    };
    function onReady() {
      if (window.__siplFinalHome) {
        finish();
      } else if (!hero || !hero.classList.contains("intro-playing")) {
        play();
      }
    }

    /* Keep the existing SIPL page-router compatible with this intro. */
    window.__playSiplIntro = play;

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }
  })();
