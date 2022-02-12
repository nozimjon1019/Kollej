const hodisa = document.querySelector(".hodisa");
let OpenM = document.querySelector("#card-modal");
let madalka = document.querySelector(".madalka");
let madalYozuv = document.querySelector(".madalYozuv");
const sonli = document.querySelector(".sonli");

function AddStyle() {
  hodisa.classList.toggle("hover");
  hodisa.classList.toggle("tush");
}

function AddStyle() {
  madalka.classList.toggle("salom");
  madalYozuv.classList.toggle("tezlash");
}

function OpenModal() {
  OpenM.classList.add("open");
}

function CloseModal() {
  OpenM.classList.add("open");
}

setTimeout(CloseModal, 5000);

var loader = document.getElementById("loader"),
  load = document.getElementById("loading"),
  myTime,
  newTime = 0;

function loading() {
  "use strict";

  newTime = newTime + 1;

  if (newTime > 100) {
    newTime = 0;
    // load.style.transition = '1s all';
    // load.style.opacity = '0';
    // clearInterval(myTime);
  } else {
    loader.textContent = newTime + "%";
  }
}

myTime = setInterval(loading, 48);
