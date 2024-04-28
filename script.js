let letters = "abcdefghijklmnopqrstuvwxyz"

let Arrayfletter = Array.from(letters)

let hangman_litters = document.querySelector(".hangman-litters")

Arrayfletter.forEach(letters => {
    
    let span = document.createElement("span")
    span.className = "letter-box"
    let theletter = document.createTextNode(letters)

    span.appendChild(theletter)
    
    hangman_litters.appendChild(span)
})


const words = {
    programming:["java","javaScript","css","html","ruby","C","c++","c##"],
    movies:[
        "java","javaScript","css","html","ruby","C","c++","c##",
        "Inception",
        "The Matrix",
        "Schindler's List",
        "Fight Club"
],
    persin:[
        "John Doe",
        "Jane Smith",
        "David Johnson",
        "Emily Brown",
        "Michael Davis",
        "Sarah Wilson",
        "Daniel Martinez",
        "Jennifer Taylor",
        "Christopher Anderson",
        "Amanda Thomas"],
    countries:[
        "United States",
        "Canada",
        "Brazil",
        "Australia",
        "Japan",
        "France",
        "Germany",
        "India",
        "South Africa",
        "Russia"
      ]
}

let allkeys = Object.keys(words);

let randomNamber = Math.floor(Math.random() * allkeys.length)
let randomProName = allkeys[randomNamber]
let randomProValue = words[randomProName]

let randomProValueNamber = words[randomProName]
let randomValueNamber = Math.floor(Math.random() * randomProValueNamber.length)
let randomVALUEvalue = randomProValue[randomNamber]

document.querySelector(".game-info .categor span").innerHTML = randomProName ;





let letterGuessContainer = document.querySelector('.letter-guess')
let letterGuessinArray = Array.from(randomVALUEvalue)

letterGuessinArray.forEach(letters => {
    let emptyspan = document.createElement("span")
    
    if(letters === " "){
        emptyspan.className = "width-box"
    }
    letterGuessContainer.appendChild(emptyspan);
})



let guessall = document.querySelectorAll(".letter-guess span")

let wrongletters= 0;
let theDraw =  document.querySelector(".hangman-draw")

document.addEventListener("click",(e)=>{
    let theStatus = false;
    if(e.target.className === "letter-box"){
        e.target.classList.add("cliked")

        let theclickLetters = e.target.innerHTML.toLowerCase()
        
        letterGuessinArray.forEach((choseletters, index)=>{
            
            if(choseletters == theclickLetters){
            

                theStatus = true


                guessall.forEach((span,spanindex) =>{
                    if(index === spanindex){
                        span.innerHTML = theclickLetters
                    }
                })
            
            }
        })
        if(theStatus !== true ){
            wrongletters++;

            theDraw.classList.add(`wrong-${wrongletters}`)
            document.getElementById("fail").play()

            if(wrongletters === 9){
                endGamelose()

                hangman_litters.classList.add("finshed")
            } 
            
        }
        
        else{

            document.getElementById("success").play()

        }
        
    } 
})
function endGamelose(){
    let div = document.createElement("div")

    let divtext = document.createTextNode(`Game over ,The word is ${randomVALUEvalue}`)

    div.appendChild(divtext)
    
    div.className = "alertlose"

    document.body.appendChild(div)
}
function endGamewiner(){
    let div = document.createElement("div")

    let divtext = document.createTextNode(`Great jab ,You Winner exslent`)

    div.appendChild(divtext)
    
    div.className = "alertwinnter"

    document.body.appendChild(div)
}