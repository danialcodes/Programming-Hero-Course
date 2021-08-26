const getQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quote => readQuote(quote))
};

const readQuote = quote => {
    const quoteBox = document.getElementById('quote');
    // quote.forEach(e => {
        quoteBox.innerHTML += quote.quote+ '</br>';
    // });
}