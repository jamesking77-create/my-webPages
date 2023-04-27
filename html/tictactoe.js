
let fillBoard = ()=>{
   // for (let i = 0; i < columns.length; i++) {
   //   columns[i].addEventListener('click', function(){
   //    for (let j = 0; j < players.length; j++) {
   //       document.querySelector(".restext").innerHTML = `player ${j+1} it your turn to play`,
   //       console.log(j)
   //       if(j == 0){
   //          columns[i].innerHTML = x;
   //       }
   //       if(j == 1){
   //          columns[i].innerHTML = o;
   //       }
   //    }     
   //   })
   //  }
}












// let checkTie = () =>{
//    columns.forEach(element => {
//       // console.log(element.innerHTML)
//    if(element.innerHTML !== '.'){
//       restext.innerHTML = "OOPS IT'S A TIE!!!"; 
//    }
// });
// }


let isWon = () =>{
   return iswon
}

let playButton = document.querySelector(".play");
 

 const x = "X";

 const o = "O";
   
let players = [
   {
      name: "player 1",
      symbol: "X"
   
   },
   
   {
      name: "player 2",
      symbol: "O"
   
   }
]


let currentPlayer = 0;

function getCurrentPlayerName(){
   return players[currentPlayer].name;
}

function resetCurrentPlayer(){
   currentPlayer++;
   if(currentPlayer == players.length) currentPlayer = 0;
}

function getCurrentSymbol(){
   return players[currentPlayer].symbol;
}


let columns = document.querySelectorAll(".column");

let playbutton = document.querySelector(".play");

let restext = document.querySelector(".restext");


function checkForWinner(columns){
 var divArray = [];
  for (var i = 0; i < columns.length; i += 1) {
      divArray.push(columns[i].innerHTML);
            
         if(divArray[0] == x && divArray[1] == x && divArray[2] == x ||
             divArray[0] == o && divArray[1] == o && divArray[2] == o ){
               restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`;  
                  
         }
      
         if(divArray[0] == x && divArray[3] == x && divArray[6] == x ||
             divArray[0] == o && divArray[3] == o && divArray[6] == o ){
            restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`; 
             
         }
      
         if(divArray[0] == x && divArray[3] == x && divArray[6] == x ||
             divArray[0] == o && divArray[3] == o && divArray[6] == o ){
            restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`;
            
         }
      
         if(divArray[6] == x && divArray[7] == x && divArray[8] == x ||
             divArray[6] == o && divArray[7] == o && divArray[8] == o ){
            restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`;
           
         }
      
         if(divArray[2] == x && divArray[5] == x && divArray[8] == x ||
             divArray[2] == o && divArray[5] == o && divArray[8] == o ){
            restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`;
         
         }
      
         if(divArray[1] == x && divArray[4] == x && divArray[7] == x ||
             divArray[1] == o && divArray[4] == o && divArray[7] == o ){
            restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`;
          
         }
      
      
         if(divArray[0] == x && divArray[4] == x && divArray[8] == x || 
            divArray[0] == o && divArray[4] == o && divArray[8] == o ){
            restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`;
          
         }
      
         if(divArray[2] == x && divArray[4] == x && divArray[6] == x ||
             divArray[2] == o && divArray[4] == o && divArray[6] == o ){
            restext.innerHTML = ` ${getCurrentPlayerName()} won!!!`;
         
         }


         if(divArray[3] == x && divArray[4] == x && divArray[5] == x ||
             divArray[3] == o && divArray[4] == o && divArray[5] == o ){
            restext.innerHTML = `${getCurrentPlayerName()} won!!!`;  
             
         }
   }
}



let startGame =()=> {
   isWon = false;
   playButton.disable = true;
   document.querySelector(".restext").innerHTML = "START GAME!!!";
   columns.forEach(element => {
      
      element.addEventListener("click", function(event){
         element.innerHTML = getCurrentSymbol();
         
         restext.innerHTML = `${getCurrentPlayerName()} has played (it's next turn to play)`; 
         resetCurrentPlayer();
      }); 
   });
}



// let disableElement = ()=>{
//    startGame.disabled = true;
// }

playButton.addEventListener("click", startGame);



 
 
 
