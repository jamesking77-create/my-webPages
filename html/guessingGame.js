
let random;
let guessButton = document.querySelector(".guess");
let playbutton = document.querySelector(".play");


let generateRandom = () =>{
   playbutton.disabled = true;
   guessButton.addEventListener("click", checkWinning);
   random = Math.floor((Math.random() * 100) + 1);
  document.querySelector(".display-game").innerHTML = " Guess a number from ( 0 - 100 )"
}

playbutton.addEventListener("click", generateRandom);

let clearInput = () => {
return input =  document.querySelector(".input").value = " ";
}
 
let enablePlayButton = () => {
 return playbutton.disabled = false;
}



 let checkWinning = () => { 

  let input = document.querySelector(".input").value;
        clearInput();

        if(input == random){
          guessButton.disabled = false;
          document.querySelector(".output").innerHTML = `congratulation you win!!!, the lucky number is  ${random}`;  
        }
    
        if(input != random){
          guessButton.disabled = false;
          document.querySelector(".output").innerHTML = `try again, the lucky number is ${random}`;
          generateRandom()
        }
        else{
        guessButton.disabled = true;
        document.querySelector(".display-game").innerHTML = "Wrong input please enter a number:";
      }
        
    }

    
   
    input.addEventListener("click", clearInput);


   let exitButton = document.querySelector(".exit");

   exitButton.addEventListener("click", enablePlayButton );

 
  