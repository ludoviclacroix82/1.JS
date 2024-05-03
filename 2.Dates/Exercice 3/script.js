const inputHour = document.querySelector('#hours');
const labelDate = document.querySelector('#date');

let currentDate = new Date();

inputHour.addEventListener('change',event =>{
    const hourSup = parseInt(event.target.value);
    const isInteger = Number.isInteger(hourSup);
    console.log(isInteger);

    if(isInteger){
        const futurDate = dateAddHours(hourSup, currentDate);
        const textHours = (hourSup > 1)?"heures":"heure";
        labelDate.innerHTML = 'Dans ' + hourSup + ' ' + textHours + ', nous serons le ' +dateFormat(futurDate) ;
    }else{

        alert('Veuillez entrer un nombre!')
    }

    
})
/**
 * Ajouter des heures dans la date current en fonction la variable
 * @param {*} hours  valeur de l'input
 * @param {*} date la date dont nous allonsa ajouter les heures
 * @returns retourne la nouvelle avec les heures ajoutées.
 */
function dateAddHours(hours,date){
    let newDate = new Date(date);
    newDate.setHours(newDate.getHours() + parseInt(hours));
    return newDate;
}

/**
 * Formatage de date
 * @param {*} date la date a formater
 * @returns un format de date predefinis Day/Month/Year  hours:minutes
 */
function dateFormat(date){
    
    let hours,minutes;
    let year,month,day;

    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();

    return day + '/' + month + '/' + year + '  ' + hours + ':' + minutes;
}