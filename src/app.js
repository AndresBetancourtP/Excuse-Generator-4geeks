/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#la-excusa").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  return "Mi perro se comió mi tarea";
};
