let quotes = document.getElementById('quotes')
let author = document.getElementById('author')
let btn = document.getElementById('btn')
let twitBtn = document.getElementById('twitBtn')

let realData = "";
let quotesData = "";

const twitThis = () => {
    let twitPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(twitPost)
}

const getNewQuotes = () => {
    let randomNo = Math.floor(Math.random() * 20);
    // console.log(realData[randomNo]);
    quotesData = realData[randomNo]
    quotes.innerHTML = `<h1>${quotesData.text}</h1>`;
    if(randomNo%2 == 0) {
        quotes.innerHTML = `<h1 style="color:white">${quotesData.text}</h1>`;
    }
    if(quotesData.author == null) {
        author.innerHTML =  `<h3>Unknown</h3>`;
    }
    else {
        author.innerHTML = `<h3>By : ${quotesData.author}</h3>`;
    }
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        // console.log(realData[0])
    } catch (error) {
        
    }
}
twitBtn.addEventListener('click', twitThis);
btn.addEventListener('click', getNewQuotes)
getQuotes();