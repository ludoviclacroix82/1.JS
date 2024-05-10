const apiUrl = "https://thatsthespir.it/api";
const apiUrl2 = 'https://api.agify.io/?name=' + name;

const section = document.querySelector('section');
const article = document.querySelector('article');
const figure = document.querySelector('figure');

section.querySelector('button').addEventListener('click', () => {

    article.innerHTML = '';
    figure.removeChild(figure.querySelector('img'));

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
        figure.appendChild(imgAuthor);
        imgAuthor.src = photoAuthor;

        // Do something with data2 if needed

    } catch (error) {
        console.log("There was an error!", error);
    }
}

