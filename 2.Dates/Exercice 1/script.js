const elemDate = document.querySelector('.date');
const elemDateNow = document.createElement('p');
const elemDateAncrage = document.createElement('p');
const elemDateReykjavik = document.createElement('p');
const elemDateSaintPétersbourg= document.createElement('p');


let currentDate = new Date();

elemDate.appendChild(elemDateNow);
elemDateNow.innerHTML = 'Bruxelle : ' + dateFormat(currentDate,0,null);
elemDate.appendChild(elemDateAncrage);
elemDateAncrage.innerHTML = 'Ancrage (États-Unis) : '+  dateFormat(currentDate,6,'-');
elemDate.appendChild(elemDateReykjavik);
elemDateReykjavik.innerHTML = 'Reykjavik (Islande) :' + dateFormat(currentDate,2,'-');
elemDate.appendChild(elemDateSaintPétersbourg);
elemDateSaintPétersbourg.innerHTML='Saint-Pétersbourg (Russie) :' + dateFormat(currentDate,2,'+');

function dateFormat(date,fHours,operation){
    
    let hours,minutes;
    let year,month,day;

    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate();

    switch (operation) {
        case '-':
            hours = date.getHours()-fHours;
            break;
        case '+':
            hours = date.getHours()+fHours;
            break;    
        default:
            hours = date.getHours();
            break;
    }
    minutes = date.getMinutes();

    return day + '/' + month + '/' + year + '  ' + hours + ':' + minutes;
}