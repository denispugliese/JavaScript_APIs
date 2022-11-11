console.log("Hello World!\n==========\n");

const MY_API_KEY = "XYoN9ZS2FWMbTN5l7tu4TUvauuET2Edf";

// Exercise 1 Section

let feedbackParagraphElement = document.querySelector("#feedbackParagraph");
let inputSearchElement = document.querySelector("#searchWord");
let searchButtonElement = document.querySelector("#submitSearch");
let resultImageElement = document.querySelector("#imageContainer > img");


searchButtonElement.addEventListener("click", (event) => {
    console.log(inputSearchElement.value);
    let searchTerm = inputSearchElement.value;


    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${MY_API_KEY}&s=${searchTerm}`)
    .then((resolvedValue) => {
        return resolvedValue.json()
    })
    .then((res) => {
        // console.log(res);
        resultImageElement.src = res.data.images.original.url;
        inputSearchElement.value = "";
    }) 
    .catch((failState) => {
        console.log(failState);
        feedbackParagraphElement.textContent = failState.message;
    })
});

