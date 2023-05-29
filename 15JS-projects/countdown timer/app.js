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
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2023,5,2,13,20,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let days = futureDate.getDay();
days = weekdays[days]
const date=futureDate.getDate()
giveaway.textContent = `giveaway ends on ${date} ${days} ${month} ${year} ${hours}:${minutes}am`

//future time in ms
const futureTime=futureDate.getTime();

function getRemainingTime() {
const today=new Date().getTime();
const t=futureTime-today;
console.log(t)
//1s=1000ms
//1m=60s
//1hr=60m
//1day=24hr


//values in ms
const OneDay=24*60*60*1000;
const OneHour=60*60*1000;
const OneMin=60*1000;
//calculate all values

let days=t/OneDay;
days=Math.floor(days)
console.log(days)



}
getRemainingTime()