import { WINNER_COMBOS } from "../assets/contants"

export const checkWinner = (boardToCheck) => {
    //recorremos array con las combinaciones ganadoras
     for (const combo of WINNER_COMBOS) {
       const [a,b,c] = combo
       if(
         boardToCheck[a]&& 
         boardToCheck[a] === boardToCheck[b] &&
         boardToCheck[a] === boardToCheck[c]
         )
         {
           return(boardToCheck[a])
         }
       }
     //por si no hay ganador
     return null
  }

  //corroborar si se el juego quedo empatado
 export const checkEndGame = (newBoard) => {
    // se corrobora si no hay espacios vacios
    return newBoard.every((square) => square !== null)
   }