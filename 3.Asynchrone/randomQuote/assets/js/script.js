const apiUrl = "https://thatsthespir.it/api";
const apiUrl2 = 'https://api.agify.io/?name=' + name;

const section = document.querySelector('section');
const article = document.querySelector('article');
const figure = document.querySelector('figure');
const btn = section.querySelector('button');


let intervaltiming;

btn.addEventListener('click', () => {

    article.innerHTML = '';
    figure.innerHTML = '';

    cpt = 30;
    setInterval(timing,1000)

    showQuote();
});

showQuote();

async function showQuote() {
    try {
        const responseQuote = await fetch(apiUrl);
        const dataQuote = await responseQuote.json();

        const quote = dataQuote.quote;
        const author = dataQuote.author;
        const photoAuthor = dataQuote.photo;

        const responseAge = await fetch(apiUrl2 + encodeURIComponent(author));
        const dataAge = await responseAge.json();

        const quoteElem = document.createElement('h2');
        const authorElem = document.createElement('h3');
        const imgAuthor = document.createElement('img');

        article.appendChild(quoteElem);
        quoteElem.innerHTML = quote;
        article.appendChild(authorElem);
        authorElem.innerHTML = author + '[' + dataAge.age + ']';
        
        if(photoAuthor != ''){
            figure.appendChild(imgAuthor);
            imgAuthor.src = photoAuthor;
            console.log(photoAuthor != '');
        }
        

        // Do something with data2 if needed

    } catch (error) {
        console.log("There was an error!", error);
    }
}
let cpt = 30;
function timing(){

    const time = btn.querySelector('span')

    if(cpt >0){
        time.innerHTML = cpt +' s'
    }else{
        showQuote();
        clearInterval(intervalChrono);
        
    } 
    
    cpt--;
}
intervaltiming = setInterval(timing,1000)