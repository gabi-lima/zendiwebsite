modal = document.querySelector("#modal");
inputText = document.getElementById("rate");
function OpenModal() {
  modal.showModal();
  inputText.value = "";
}
function CloseModal() {
  modal.close();
  inputText.value = "";
}

const stars = document.querySelectorAll(".stars a");
const stars2 = document.querySelectorAll(".stars2 a");
const stars3 = document.querySelectorAll(".stars3 a");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("text-yellow-500")
        : star.classList.remove("text-yellow-500");
    });
  });
});

stars2.forEach((star2, index1) => {
  star2.addEventListener("click", () => {
    stars2.forEach((star2, index2) => {
      index1 >= index2
        ? star2.classList.add("text-yellow-500")
        : star2.classList.remove("text-yellow-500");
    });
  });
});
stars3.forEach((star3, index1) => {
  star3.addEventListener("click", () => {
    stars3.forEach((star3, index2) => {
      index1 >= index2
        ? star3.classList.add("text-yellow-500")
        : star3.classList.remove("text-yellow-500");
    });
  });
});
