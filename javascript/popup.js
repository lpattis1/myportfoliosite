const socialModalBg = document.querySelector(".socials-modal");
const closeSocialModal = document.querySelector(".socials-modal-close");
const exitSocialModal = document.querySelector(".social-exit");

const loadModal = function (e) {
  window.onload = function () {
    let modalState = false;
    setInterval(() => {
      if (modalState === false) {
        socialModalBg.classList.add("socials-modal--visible");
        modalState = true;
      }
    }, 7000);
  };
};

const closeModal = function (e) {
  closeSocialModal.addEventListener("click", function (e) {
    socialModalBg.classList.remove("socials-modal--visible");
  });
};

const exitModal = function (e) {
  exitSocialModal.addEventListener("click", function (e) {
    socialModalBg.classList.remove("socials-modal--visible");
  });
};

loadModal();
closeModal();
exitModal();
