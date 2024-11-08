let spin = document.querySelectorAll(".casino-advantages_spins");
let popUp = document.querySelectorAll(".casino-popup");
for (let i = 0; i < spin.length; i++) {
  spin[i].onclick = function openPopUp() {
    spin[i].classList.add("active-spin");
    popUp[i].classList.add("show-popup");
  };
}
let closeIcon = document.querySelectorAll(".casino-popuop_close");
for (let i = 0; i < closeIcon.length; i++) {
  closeIcon[i].onclick = function closePopUp() {
    spin[i].classList.remove("active-spin");
    popUp[i].classList.remove("show-popup");
    copyCode[i].classList.remove("copied");
  };
}
let copyBtn = document.querySelectorAll(".casino-popup_promo");
let copyCode = document.querySelectorAll(".casino-popup_copy");
for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].onclick = function openCode() {
    copyCode[i].classList.toggle("copied");
  };
}
let showBtn = document.getElementById("load-btn");
let casinoItem = document.getElementsByClassName("casino-item");
showBtn.onclick = function showItems() {
  for (let i = 0; i < casinoItem.length; i++) {
    casinoItem[i].classList.add("show-casino");
  }
  showBtn.style.display = "none";
};
