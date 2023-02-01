"use strict";

async function getData() {
  const response = await fetch("./data.json");
  const allData = await response.json();

  addBars(allData);
}

function addBars(allData) {
  for (const obj of allData) {
    const bar = document.querySelector(`#${obj.day}`);
    bar.style.height = `${obj.amount}px`;
    bar.dataset.amount = `$${obj.amount}`;
  }
}

const dayIndex = (new Date().getDay() - 1 + 7) % 7;
const currentBar = document.querySelectorAll(".bar")[dayIndex];
currentBar.style.backgroundColor = "hsl(186, 34%, 60%)";

getData();
