const word = "Hello keller";
const elemWord = document.querySelector('.word');
let intervalWord;
let cpt= 0;

function typeWriter(word) {
    if (cpt < word.length) {
        elemWord.innerHTML += word.charAt(cpt);
        cpt++;
    } else {
        clearInterval(intervalWord);
    }
}

intervalWord = setInterval(typeWriter,1000,word);



