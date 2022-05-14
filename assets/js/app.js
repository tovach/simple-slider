const sliderItems = document.querySelectorAll(".slider__item");
const prevBtn = document.querySelector(".controls__prev");
const nextBtn = document.querySelector(".controls__next");
const pagination = document.querySelector(".slider__pagination");
let paginationDots;

let currentIndex = 0;

const preparePagination = () => {
  const pagintionDot = `<button class="button button--secondary pagination__dot"></button>`;
  const paginationDots = [...Array(sliderItems.length)]
    .map((el) => pagintionDot)
    .join("\n");
  pagination.insertAdjacentHTML("afterbegin", paginationDots);
};

const setActiveSlide = (index) => {
  showActiveElement(index);
  setActiveDot(index);
};

const showActiveElement = (index) => {
  for (const item of sliderItems) {
    item.classList.remove("active");
  }

  sliderItems[index].classList.add("active");
};

const setActiveDot = (index) => {
  for (const item of paginationDots) {
    item.classList.remove("active");
  }
  paginationDots[index].classList.add("active");
};

const switchNext = () => {
  if (currentIndex === sliderItems.length - 1) {
    currentIndex = 0;
    setActiveSlide(currentIndex);
  } else {
    currentIndex++;
    setActiveSlide(currentIndex);
  }
};

const switchPrev = () => {
  if (currentIndex === 0) {
    currentIndex = sliderItems.length - 1;
    setActiveSlide(currentIndex);
  } else {
    currentIndex--;
    setActiveSlide(currentIndex);
  }
};

const init = () => {
  preparePagination();
  paginationDots = document.querySelectorAll(".pagination__dot");
  setActiveSlide(currentIndex);
};

init();

nextBtn.addEventListener("click", switchNext);
prevBtn.addEventListener("click", switchPrev);
paginationDots.forEach((el, index) => {
  el.addEventListener("click", () => setActiveSlide(index));
});
