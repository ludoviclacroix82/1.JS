const section = document.querySelector('section');
const circles = section.querySelector('.circles');

let score = 0;
let intervalMole;
let intervalMoleDelete;

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
    const circleRandom = Math.floor((Math.random() * 12)+1);
    const circle = circles.querySelectorAll('.circle');    
    
    for (const circleMole of circle) {
        if(circleMole.id == circleRandom ){
            console.log("circle:" + circleMole.id);
            console.log("randoom : " + circleRandom);
            circleMole.appendChild(createMole());
            setTimeout(removeMoleOnCircle, 2500,circleMole.id);

            const moleClick = circleMole.querySelector('.mole');
            console.log(moleClick);
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
    const scoreElem = section.querySelector('.score');
    scoreElem.innerHTML = "Score : " + numScore;
}

/**
 * lancement du jeu
 */
function Game(){   

    if(score < 12){
        addMoleOnCircle();
     }else{
        
        const scoreElem = section.querySelector('.score');
        scoreElem.innerHTML = "You Win !!!";
        clearInterval(intervalMole);
        playGame();
    }

}


function playGame(){
    if(score === 0){
        const scoreElem = section.querySelector('.score');
        scoreElem.innerHTML = "Play Game";
        scoreElem.addEventListener('click',event =>{
            createCirlce(12);
            intervalMole = setInterval(Game,2500);
        });
    }else{
        scoreView(score);
    }
}
playGame();



