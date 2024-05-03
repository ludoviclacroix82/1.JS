import { setItem, getItem } from './localStorage.js';

const dateElem = document.querySelector('.date');
const headerElem = dateElem.querySelector('.header');
const contentElem = dateElem.querySelector('.content');
const footerElem = dateElem.querySelector('.footer');
const timeElem = document.querySelector('.times');
const hourTimeElem = timeElem.querySelector('.hour');
const minTimeElem = timeElem.querySelector('.minutes');
const secTimeElem = timeElem.querySelector('.seconde');


const dayElem = document.createElement('p');
const monthElem = document.createElement('p');

contentElem.append(dayElem); 
contentElem.append(monthElem); 

const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


let interval;
const currentDate = new Date();

date(currentDate);
hours(currentDate,setItem('timeZone','en-GB'));

interval = setInterval(showdDate,1000);

/**
 * formate la date et l'ajouter dans des element html
 * @param {*} date 
 */
function date(date){
    let year,month,day,day2;

    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    day2 = date.getDay();


    footerElem.innerHTML=year;
    headerElem.innerHTML = dayArray[day2];
    dayElem.innerHTML = day;
    monthElem.innerHTML = monthArray[month];

}
/**
 * format heure en fonction de  ca timezone
 * @param {*} date 
 * @param {*} zone timezone
 */
function hours(date,zone){

    let hours,minutes,secondes;
    date.toLocaleString(zone);

    console.log(date);

    hours = date.getHours();

    minutes = (date.getMinutes() >9)?date.getMinutes():'0'+date.getMinutes();
    secondes = (date.getSeconds() >9)?date.getSeconds() : '0'+date.getSeconds();

    hourTimeElem.innerHTML = hours;
    minTimeElem.innerHTML = minutes;
    secTimeElem.innerHTML = secondes;
}
/**
 * fonction appeler par un setInterval
 */
function showdDate(){
    const date = new Date();
    hours(date,getItem('timeZone'));

    console.log(getItem('timeZone'));
}

/**
 * Losrque d'un click sur la zone times en html celui le convertit via la timezone
 */
timeElem.addEventListener('click',event =>{
    if(getItem('timeZone') === 'en-GB'){
        setItem('timeZone','ko-KR');
    }else{
        setItem('timeZone','en-GB');
    }    
});



