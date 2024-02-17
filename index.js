const initSlider = () => {
  const imageList = document.querySelector(".image-list");
  const slideButtons = document.querySelectorAll(".slide-button");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // Slide images according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

const initSlider2 = () => {
  const cardList = document.querySelector(".card-list");
  const slideButtons = document.querySelectorAll(".slide-button");
  const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = cardList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display = cardList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider);
window.addEventListener("load", initSlider2);
