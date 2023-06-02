let images = document.querySelectorAll(".gallery img");

let popup = document.querySelector(".popup");
let popupimg = document.querySelector(".popup img");

for (img of images) {
  img.onClick = function () {
    popup.style.display = "block";
    popupimg.src = this.getAttribute("src");
  };
}

document.querySelector(".popup span").onClick = function () {
  popup.style.display = "none";
};
