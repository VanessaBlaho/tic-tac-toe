import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import { useState} from "react";

function App() {
  const [activePlayer,setActivePlayer]= useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
  }
  return <main>
      <div id="game-container" className="highlight-player">
        <ol id="players">
        <Player
        initialName="Player 1"
        symbol="X"
        isActive = {activePlayer === 'X'}
        />
           <Player
        initialName="Player 2"
        symbol="O"
        isActive = {activePlayer === 'O'}
        />
        </ol>
      <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
      LOG
      </main>;
  
}

export default App
