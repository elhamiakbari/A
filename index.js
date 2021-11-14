let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let month = months[now.getMonth()];

let date = now.getDate();

let year = now.getFullYear();

let heading = document.querySelector("h1");
heading.innerHTML = `Today is ${day}, ${month} ${date}, ${year}`;

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentTime = document.querySelector(".time");
currentTime.innerHTML = `${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector(".city");
  city.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function changeUnit(event) {
  event.preventDefault();
  let temp = document.querySelector(".current-temp");
  temp.innerHTML = "66°F";
  unit.innerHTML = "°C";
}

let unit = document.querySelector(".unit");

unit.addEventListener("click", changeUnit);
