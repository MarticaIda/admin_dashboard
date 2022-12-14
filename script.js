const modal = document.querySelector(".modal");
const readMore = document.querySelector(".open-modal");
const readLess = document.querySelector(".close");

readMore.addEventListener("click", function () {
  modal.style.display = "block";
});

readLess.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
