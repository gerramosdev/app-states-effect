import { useState } from 'react'
import './css/App.css'
import './css/index.css'

const TURNS = {
  X:'x',
  O:'o'
}


const Square = ({children, isSelected, updateBoard, index}) => {
  const className=`square ${isSelected} ? 'is-selected' : ''`
  return(
    <div onClick={handleClick} className={className}>
        {children}
    </div>
  )
}
const handleClick = () => {
  updateBoard()
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  }
  

  return (
   <main className='board'>
      <h1>Triqui - Game</h1>
      <section className='game'>
        {
          board.map((cell,index)=>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSSelected={turn === TURNS.X}>
        {TURNS.O}</Square>

      </section>
   </main>
  )
}

export default App
