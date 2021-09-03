const loadingPage = document.querySelector(".loading-page");
const loadingBar = document.querySelector(".loading-bar");
const loadingPercent = document.querySelector(".load");
let width = 0;

const loadPage = function (e) {
  let timer = setInterval(() => {
    const portfolio = document.querySelector("#portfolio");
    loadingPercent.style.width = `${width}%`;
    portfolio.style.display = "none";
    width++;

    if (width > 100) {
      clearInterval(timer);
      loadingPage.classList.remove("loading-page--visible");
      portfolio.style.display = "block";
    }
  }, 25);
};

loadPage();
