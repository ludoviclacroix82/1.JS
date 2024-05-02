const section = document.querySelector('section');
const circles = section.querySelector('.circles');
const scoreElem = section.querySelector('.score');

let intervalMole;
let intervalTime;

let numberCicrle = 12
let score = 0;
let times = 30;
let finsihTime = times;
let scorage = 15;

/**
 * Creation des cercle 
 * @param {*} number de cercle a  ajouter
 */
function createCirlce(number){
    for (let i = 1; i <=number; i++) {
        
        const circle = document.createElement('div');
        circles.appendChild(circle);
        circle.classList.add('circle');
        circle.id = i; 
    }   
}
/**
 * Refresh la zone des cercle
 */
function RefreshCirlce(){       
    const circle = circles.querySelectorAll('.circle');
    for (const circleDel of circle) {
        circles.removeChild(circleDel); 
        const moleDelete = circles.querySelector('.mole'); 
        if (moleDelete) { 
            circleDel.removeChild(moleDelete);                 
        }  
    }   
} 

/**
 * Cration du Mole 
 * @returns element créer
 */
function createMole(){
    const mole = document.createElement('div');
    mole.classList.add('mole');    
    const parentMole = mole.parentNode;    
    return mole;
}
/**
 * Ajout du Mole dans un cercle pris aleatourement.
 */
function addMoleOnCircle(){
    const circleRandom = Math.floor((Math.random() * numberCicrle)+1);
    const circle = circles.querySelectorAll('.circle'); 
    
    for (const circleMole of circle) {
        if(circleMole.id == circleRandom ){
            //console.log("circle:" + circleMole.id);
            //console.log("randoom : " + circleRandom);
            circleMole.appendChild(createMole());
            setTimeout(removeMoleOnCircle, 1500,circleMole.id);

            const moleClick = circleMole.querySelector('.mole');
            moleClick.addEventListener('click',event =>{
                score += 1;
                scoreView(score)                
                removeMoleOnCircle(circleMole.id);
            });
        }
    }
}
/**
 * Supression du mole dans le cercle
 * @param {*} id du cercle 
 */
function removeMoleOnCircle(id){
    const circle = circles.querySelectorAll('.circle');  
    for (const circleMole of circle) {
        if (circleMole.id === id) {
            const moleDelete = circleMole.querySelector('.mole'); 
            if (moleDelete) { 
                circleMole.removeChild(moleDelete);                 
            }           
        }
    } 
}
/**
 * Affichage du score
 * @param {*} numScore le scoreUser
 */
function scoreView(numScore){
    scoreElem.innerHTML = 'Score : ' + numScore + '/' + scorage;
}
/**
 * decompte temps de la Game
 */
function time(){
    if (finsihTime >= 0) {
        const timeView = section.querySelector('.time')
        timeView.innerHTML = finsihTime;
        finsihTime--;
    } else {
        clearInterval(intervalTime);
        clearInterval(intervalMole);

        if(parseInt(score) != parseInt(scorage)){     
            scoreElem.innerHTML = 'You Lose :(';
            console.log('You Lose :(');
            clearInterval(intervalMole);
            clearInterval(intervalTime);
            finsihTime = times;
            setTimeout(playGame,5000);  
        }
    }
}

/**
 * Game
 */
function Game(){  
    scoreView(score);
    console.log(score+'/'+scorage);

    if(parseInt(score) < parseInt(scorage)){
        addMoleOnCircle();        
    }else if(parseInt(score) == parseInt(scorage)){        
        scoreElem.innerHTML = 'You Win :)';
        console.log('You Win :)');
        clearInterval(intervalMole); 
        clearInterval(intervalTime);
        finsihTime = times;
        score = 0;
        setTimeout( playGame,5000);       
    } 
}
/**
 * lancement du Game
 */
function playGame(){ 
    scoreElem.innerHTML = "Play Game";
    RefreshCirlce();
    createCirlce(numberCicrle); 
    scoreElem.addEventListener('click',event =>{  
        
        if(scoreElem.innerHTML =='Play Game' ){
        finsihTime = times;        
        scoreView(score);
        intervalMole = setInterval(Game,1500);
        intervalTime = setInterval(time,1000); 
        }  
    });
}

playGame();
