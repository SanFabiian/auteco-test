const Carousel = () => {
  const bannerCarousel = document.querySelector(".banner-wrap");
  const banner = [...document.querySelectorAll(".banner")];
  let width = banner[0].clientWidth;
  let count = 1;
  let interval = 3000;

  window.addEventListener("resize", function () {
    let width = banner[0].clientWidth;
  });

  const slide = () => {
    bannerCarousel.style.transform = "translate(" + -width * count + "px)";
    bannerCarousel.style.transition = "transform .8s";
    count++;
    if (count == banner.length) {
      setTimeout(function () {
        bannerCarousel.style.transform = "translate(0px)";
        bannerCarousel.style.transition = "transform .80s";
        count = 1;
      }, 1500);
    }
  };

  setInterval(slide, interval);
};

export default Carousel;
