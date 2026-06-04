(function () {
  var buttons = document.querySelectorAll(".lang-toggle button");
  var panes = document.querySelectorAll(".lang-pane");

  function setLang(lang) {
    panes.forEach(function (pane) {
      pane.hidden = pane.getAttribute("data-lang") !== lang;
    });
    buttons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    document.documentElement.lang = lang;
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
