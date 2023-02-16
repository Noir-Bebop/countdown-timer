const months = [
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
  "December",
];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 1, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
let month = futureDate.getMonth();
let weekday = futureDate.getDay();

giveaway.textContent = `giveaway end on ${weekdays[weekday]}, ${date} ${months[month]} ${year}  ${hour}:${minutes}am`;

//futer time in ms
const futureTime = futureDate.getTime();
console.log({ futureTime });

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log({ t });
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = values[index];
    console.log(item);
  });
};

getRemainingTime();
