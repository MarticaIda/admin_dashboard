// Get the modal
const modal = document.querySelector(".modal");
const readMore = document.querySelector(".open-modal");
const readLess = document.querySelector(".close");

// When the user clicks on the button, open the modal
readMore.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (Read less), close the modal
readLess.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
