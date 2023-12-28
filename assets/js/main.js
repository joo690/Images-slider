/*============================= bars =============================*/
let bars = document.querySelector(".bars");
let links = document.querySelector(".links");

bars.addEventListener("click", () => {
  if (links.style.height == false) {
    links.style.height = `${links.scrollHeight}px`;
  } else {
    links.style.height = null;
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    links.style.height = null;
  }
});
/*============================= slider =============================*/
let sliderImgs = document.querySelectorAll(".slider-img");
let buttons = document.querySelectorAll(".slider-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].classList.contains("slider-next")) {
      let current;
      for (let j = 0; j < sliderImgs.length; j++) {
        if (sliderImgs[j].classList.contains("slider-visible")) {
          current = j;
          sliderImgs[j].classList.remove("slider-visible");
        }
      }
      if (current == sliderImgs.length - 1) {
        current = 0;
        sliderImgs[current].classList.add("slider-visible");
      } else {
        sliderImgs[++current].classList.add("slider-visible");
      }
    } else {
      let current;
      for (let j = 0; j < sliderImgs.length; j++) {
        if (sliderImgs[j].classList.contains("slider-visible")) {
          current = j;
          sliderImgs[j].classList.remove("slider-visible");
        }
      }
      if (current == 0) {
        current = sliderImgs.length - 1;
        sliderImgs[current].classList.add("slider-visible");
      } else {
        sliderImgs[--current].classList.add("slider-visible");
      }
    }
  });
}
/*============================= loader =============================*/
let loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("loader-hide");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});
