const elemDate = document.querySelector('.date');
let myDate = new Date('1982-08-16');

elemDate.innerHTML = myDate.getTime()/(1000*60*60*24) +'jrs ecoulés entre '+ myDate +'= 1/1/1970';

