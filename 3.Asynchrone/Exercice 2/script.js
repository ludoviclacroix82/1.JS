const jsondata = (name,country) => fetch('https://api.agify.io/?name=' + name +'&country='+country);

const section =  document.querySelector('section');
const btnSearch = section.querySelector('button')

const resultElem = section.querySelector('.result')
const divElem = document.createElement('div');

const selectElem = document.querySelector('#country');
const result = [];
/**
 * 
 */
btnSearch.addEventListener('click',()=>{
    const inputName = section.querySelector('#name');
    const value = inputName.value;
    const countryValue = selectElem.value;
    search(value,countryValue);
})

/**
 * Recherche dans Api les valeurs encodées pas l'user
 * @param {*} name le nom a rechercher
 * @param {*} country le pays 
 */
function search(name,country){
    jsondata(name, country)
	.then((response) => response.json())
	.then((data) => {
       const  result = getItem('search');
        const newSearch = {name:name,age:data.age,country:country}
        result.push(newSearch)
        setItem('search',result)
        showResult();
        
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});
}
/**
 * affiche les recherche stocker dans localStorage
 */
function showResult(){
    const resultArray = getItem('search');
    resultElem.innerHTML='';
    for (const result of resultArray) {  
        const pElem = document.createElement('p'); 
        resultElem.appendChild(pElem);

        pElem.innerHTML= result.name + ' is '+ result.age+'  years old on: '+result.country;
       
    } console.log(resultArray);
}

showResult();

/**
 * Ajout l'info dans le localStorage
 * @param {*} name nom de ta task
 * @param {*} value detail de la task
 */
function setItem(name,value){
    return localStorage.setItem(name,JSON.stringify(value));
}
/**
 * recupere l'info dans le LocalStorage
 * @param {*} title 
 */
function getItem(title){
    const checkItem = localStorage.getItem(title);
    
    // check si il existe ou pas 
    if( checkItem !== null)
        return  JSON.parse(localStorage.getItem(title));
    else
        setItem(title,'');
        return  JSON.parse(localStorage.getItem(title));

}

