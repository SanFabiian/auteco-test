const burgerMenu = document.querySelector(".header-nav");

function hideShow() {
  if (burgerMenu.classList.contains("is-active")) {
    burgerMenu.classList.remove("is-active");
  } else {
    burgerMenu.classList.add("is-active");
  }
}
burgerMenu.addEventListener("click", hideShow);
export default hideShow;
