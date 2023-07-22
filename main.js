let btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

const openModalBtn = document.querySelector(".open-modal-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("dark-theme")) {
    modal.classList.add("dark-theme");
  } else {
    modal.classList.remove("dark-theme");
  }
});
