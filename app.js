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

let futureDate = new Date(2023, 4, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
let month = futureDate.getMonth();
let weekday = futureDate.getDay();

giveaway.textContent = `giveaway end on ${weekdays[weekday]}, ${date} ${months[month]} ${year}  ${hour}:${minutes}am`;

//futer time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
};

getRemainingTime();
