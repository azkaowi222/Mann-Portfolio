const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const burgerMenu = document.querySelector(".burger-menu");
const closeBtn = document.querySelector(".menu-container span");

const ActivateMenu = () => {
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.classList.add("active");
};

const destroyMenu = () => {
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.classList.remove("active");
};

burgerMenu.addEventListener("click", ActivateMenu);
closeBtn.addEventListener("click", destroyMenu);

const text = document.querySelector(".text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Development";
  }, 0);
  setTimeout(() => {
    text.textContent = "Frontend Development";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Backend Development";
  }, 16000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 24000);

const sendMail = () => {
  const email = document.querySelector("input[name=email]");
  const body = document.querySelector("input[name=body]");
  const subject = "Bussines";
  const submit = document.getElementById("submit");
  submit.setAttribute(
    "href",
    `mailto: ${email.value}/?&subject=${subject}&body=${body.value}`
  );
  email.value = "";
  body.value = "";
};

document.getElementById("submit").addEventListener("click", sendMail);
document
  .querySelector("nav h1")
  .addEventListener("click", () => (window.location.href = "/"));
