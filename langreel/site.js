document.querySelectorAll(".lang-toggle button").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    document.querySelectorAll(".lang-toggle button").forEach((item) => {
      item.classList.toggle("active", item.dataset.lang === lang);
    });
    document.querySelectorAll(".lang-pane").forEach((pane) => {
      pane.hidden = pane.dataset.lang !== lang;
    });
    document.documentElement.lang = lang;
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
