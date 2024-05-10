const jsonData = "horses.json";
const section = document.querySelector('section');
const btnViewJson = document.querySelector('button');

btnViewJson.addEventListener('click',()=>{
    viewJson(jsonData);
})


function viewJson(jsonData){
    fetch(jsonData)
    .then((response) => response.json())
    .then(data => {

        const ulElem = document.createElement('ul');
        section.appendChild(ulElem);

        data.horses.forEach(horse => {
            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);

            liElem.textContent = horse.name;           
        });
    })
    .catch((error) => {
        console.log("There was an error!", error);
    });
}
