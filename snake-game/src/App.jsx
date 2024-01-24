import React from 'react';
import './index.css';
import Game from './Game';

export default function App() {

  const [game, setGame] = React.useState(false);

  const startGame = () => {
    setGame(prev => true);
  }
  const endGame = () => {
    setGame(prev => false);
  }
  const handleKeyPress = (e) => {
    switch (e.key) {
      case ' ':
      case 'Spacebar':
        console.log('Spacebar key pressed!');
        startGame();
        break;
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='nokia'>
      {game && <Game endGame={endGame} />}
      {!game && 
        <>
          <div className='screen'>
             <div className='menu'>
                <div> Snake Game </div>
                <p> New Game </p>
              </div>
          </div>
          <button className='space' onClick={startGame}></button>
          <button className='top'></button>
          <button className='down'></button>
          <button className='right'></button>
          <button className='left'></button>
        </>
      }
    </div>
  )
}

