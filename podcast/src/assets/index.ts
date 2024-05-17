import { RESPONSE_DATA_TYPE } from "../types";

const startApp : (e:RESPONSE_DATA_TYPE[])=> void = (e) => {
  console.info("Begin app listen & read");
 

  let t = document.getElementById("js-audio");
  let n = document.getElementById("audio-error-message");
  let o = document.querySelectorAll(".js-transcript-text");
  let a = {};
  let s = {};
  let i = {};
  let c = "bi-pause-circle";
  let l = "bi-play-circle";
  let r = document.querySelector(".js-top-text");
  let d = document.querySelector(".js-top-translation");
  let u = document.querySelector(".js-btn-prev");
  let m = document.querySelector(".js-btn-next");
  let f = document.querySelector(".js-show-transcript");
  let g = document.querySelector(".js-transcript");
  let v = document.querySelector(".js-current-position");
  let L = null;
  let b = null;
  let y = -1;
  let E = !1;

  function p() {
    if (L) {
      var e = L.parentElement.querySelector(".js-translation"),
        t = e.querySelector(".js-btn-edit-trans");
      if (((d.innerHTML = e.textContent), t)) {
        var n = d.parentElement.querySelector(".js-btn-edit-trans");
        [
          "data-translation-id",
          "data-challenge-id",
          "data-add-suggestion-url",
        ].forEach(function (e) {
          n.setAttribute(e, t.getAttribute(e));
        }),
          n.classList.remove("d-none");
      }
    }
  }

  function h() {
    t.blur(),
      t.paused && t.play(),
      y < e.length &&
        ((t.currentTime = y < 1 ? i[1] - 0.4 : i[y + 1] - 0.4), t.play());
  }

  function S() {
    t.blur(),
      t.paused && t.play(),
      y > 1 && ((t.currentTime = i[y - 1] - 0.4), t.play());
  }
  e.forEach(function (e) {
    i[e.position] = e.timeStart;
  }),
    o.forEach(function (e) {
      var n = parseInt(e.getAttribute("data-position")),
        o = document.getElementById("btn-play-".concat(n));
      (a[n] = e),
        (s[n] = o),
        o.addEventListener("click", function () {
          console.info("btn play #".concat(n, " is clicked")),
            o.classList.contains(c)
              ? (t.pause(), o.classList.add(l), o.classList.remove(c))
              : ((t.currentTime = i[n] - 0.4),
                t.play(),
                o.classList.add(c),
                o.classList.remove(l));
        }),
        o.addEventListener("focus", function () {
          o.blur();
        });
    }),
    t.addEventListener("timeupdate", function () {
      for (var n = t.currentTime + 0.5, o = 0; o < e.length; o++) {
        var i = e[o],
          d = i.position,
          u = i.timeStart,
          m = i.timeEnd;
        if (n >= u && n < m) {
          if (y === d) return;
          return (
            (y = d),
            L && L.classList.remove("active"),
            b && (b.classList.add(l), b.classList.remove(c)),
            (L = a[d]),
            (b = s[d]),
            L &&
              (L.classList.add("active"),
              L && (r.innerHTML = L.innerHTML),
              y > 0 && (v.innerHTML = y),
              p()),
            void (b && (b.classList.add(c), b.classList.remove(l)))
          );
        }
      }
    }),
    t.addEventListener("loadstart", function () {
      console.log("starting to load audio");
    }),
    t.addEventListener("ended", function () {
      L && (L.classList.remove("active"), (L = null)), (y = -1);
    }),
    t.addEventListener("pause", function () {
      b && (b.classList.add(l), b.classList.remove(c));
    }),
    t.addEventListener("play", function () {
      b && (b.classList.add(c), b.classList.remove(l));
    }),
    t.addEventListener("loadeddata", function () {
      n.classList.add("d-none"), console.info("Audio loaded");
    }),
    t.addEventListener("canplay", function () {
      console.info("Audio can be played");
    }),
    t.addEventListener("error", function () {
      n.classList.remove("d-none"), console.error("Error when loading audio");
    }),
    t.load(),
    document.addEventListener("keydown", function (e) {
      document.activeElement === document.body &&
        ("Space" === e.code
          ? (t.blur(), e.preventDefault(), t.paused ? t.play() : t.pause())
          : "ArrowLeft" === e.code
          ? S()
          : "ArrowRight" === e.code && h());
    }),
    u.addEventListener("click", function (e) {
      S(), e.currentTarget.blur();
    }),
    m.addEventListener("click", function (e) {
      h(), e.currentTarget.blur();
    }),
    r.addEventListener("click", function () {
      !E && t.paused && (t.play(), (r.innerHTML = "..."), (E = !0));
    }),
    f.addEventListener("click", function () {
      g.classList.remove("d-none"), f.classList.add("d-none");
    });
  var w = document.getElementById("select-translation");
  if (w) {
    var T = function (e) {
        j ||
          ((j = !0),
          w.setAttribute("disabled", "disabled"),
          x.classList.remove("d-none"),
          console.info(
            'Starting to fetch translation with code "'.concat(e, '"')
          ),
          fetch(
            window.getLessonTranslationsUrl +
              "?languageCode=".concat(e, "&translateIfNotExisted=1")
          )
            .then(function (e) {
              if (e.ok)
                return (
                  console.info("Successfully fetched translation"), e.json()
                );
            })
            .then(function (e) {
              var n, o, a, s;
              Object.keys(e).forEach(function (t) {
                var n = e[t],
                  o = n.id,
                  a = n.text,
                  s = n.addSuggestionUrl,
                  i = document.getElementById(
                    "challenge-".concat(t, "-translation")
                  ),
                  c =
                    '\n            <button\n             class="btn btn-sm text-muted p-0 ms-1 me-2 fs-6 js-btn-edit-trans" \n             style="line-height: 0"\n             data-translation-id="'
                      .concat(o, '" \n             data-challenge-id="')
                      .concat(t, '"\n             data-add-suggestion-url="')
                      .concat(
                        s,
                        '"\n             title="Edit this translation"\n            >\n              <i class="bi bi-pencil-square"></i>\n            </button>\n          '
                      );
                i.classList.remove("d-none"),
                  (i.innerHTML = c + a),
                  p(),
                  d.parentElement.classList.remove("d-none");
              }),
                (n = document.querySelectorAll(".js-btn-edit-trans")),
                (o = document.getElementById("edit-translation-modal")),
                (s = document.getElementById("translation-origin-text")),
                n.forEach(function (e) {
                  e.addEventListener("click", function () {
                    console.log("edit btn clicked"), t.pause();
                    var n = e.getAttribute("data-challenge-id"),
                      o = document.getElementById(
                        "challenge-".concat(n, "-content")
                      ),
                      i = document.getElementById(
                        "challenge-".concat(n, "-translation")
                      );
                    (s.innerHTML = o.innerText),
                      (A.value = i.innerText.trim()),
                      k.classList.add("d-none"),
                      q.classList.add("d-none"),
                      (document.body.style.height = "auto"),
                      a.show();
                  });
                }),
                o.addEventListener("shown.bs.modal", function () {
                  A.focus();
                });
            })
            .catch(function (e) {
              console.error("Failed to fetch translation. Error: " + e);
            })
            .finally(function () {
              (j = !1),
                w.removeAttribute("disabled"),
                x.classList.add("d-none");
            }));
      },
      j = !1,
      A = document.getElementById("edit-translation-input"),
      k = document.getElementById("submit-success-message"),
      q = document.getElementById("submit-error-message"),
      x = document.getElementById("translation-loading-icon");
    var M = (function () {
      try {
        return window.localStorage.getItem("translationLanguageCode");
      } catch (e) {
        console.error("Error when getting from localStorage: " + e);
      }
      return null;
    })();
    console.info('saved translation language code: "'.concat(M, '"')),
      M && M.length > 0 && ((w.value = M), T(M)),
      w.addEventListener("change", function () {
        console.info(
          'Translation select changed, new value: "'.concat(w.value, '"')
        );
        var e = w.value;
          document.querySelectorAll(".js-translation").forEach(function (e) {
            e.classList.add("d-none");
          }),
          e.length > 0 ? T(e) : d.parentElement.classList.add("d-none");
      });
  }
  console.log("Initiated app listen & read.");
};
export { startApp };
