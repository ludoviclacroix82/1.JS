const elemDiv = document.querySelector('.chrono');
let intervalChrono;
let cpt= 1;
let minute = 0;
let minuteInnerhtml = "";
let tempCpt = 1;

function chrono() {     
    console.log(cpt);

    if (cpt <= 120) {

        if(tempCpt >59){
            minute += 1 
            tempCpt = 0;            
        }
        if(minute > 0 )
             minuteInnerhtml = minute + " min ";

        if(tempCpt > 0 )
            elemDiv.innerHTML = minuteInnerhtml + tempCpt;
        else
            elemDiv.innerHTML = minuteInnerhtml;

        cpt++;
        tempCpt ++;

    } else {
        clearInterval(intervalChrono);
    }
}

intervalChrono = setInterval(chrono,1000);



