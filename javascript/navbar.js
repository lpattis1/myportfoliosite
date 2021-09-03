// Hamburger menu open
const openSlidingNav = function () {
  const hamburgerMenu = document.querySelector(".fa-bars");
  const sideMenu = document.querySelector(".sliding-nav");

  hamburgerMenu.addEventListener("click", function (e) {
    sideMenu.classList.add("open-sliding-nav");
  });
};

// Hamburger menu close
const closeSlidingNav = function (e) {
  const sideMenu = document.querySelector(".sliding-nav");
  const closeMenu = document.querySelector(".sliding-nav-close");
  const listLinks = document.querySelectorAll(".list-item");

  closeMenu.addEventListener("click", function (e) {
    sideMenu.classList.remove("open-sliding-nav");
  });

  listLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      sideMenu.classList.remove("open-sliding-nav");
    });
  });
};

// Sliding link hover animation
const showHoveredSlideLinkState = function (e) {
  const listLinks = document.querySelectorAll(".list-item");

  listLinks.forEach((link) => {
    link.addEventListener("mouseenter", function (e) {
      e.preventDefault();
      link.children[0].classList.add("hover-state--show");
      link.children[1].classList.add("list-link--hover");
    });

    link.addEventListener("mouseleave", function (e) {
      e.preventDefault();
      link.children[0].classList.remove("hover-state--show");
      link.children[1].classList.remove("list-link--hover");
    });
  });
};

openSlidingNav();
closeSlidingNav();
showHoveredSlideLinkState();
