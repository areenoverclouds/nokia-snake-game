import React from 'react';
import './index.css';
import Game from './Game';

export default function App() {

  const [game, setGame] = React.useState(false);
  const [selected, setSelected] = React.useState('new-game');
  const [menu, setMenu] = React.useState(false);

  const startGame = () => {
    setGame(prev => true);
  }

  const endGame = () => {
    setGame(prev => false);
  }

  const toggleMenu = () => {
    setMenu(prev => !prev);
  }

  const handleKeyPress = (e) => {
    switch (e.key) {
      case ' ':
      case 'Spacebar':
        if(!game && !menu) {
          selected === 'new-game' ? startGame() : toggleMenu();
        }
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
      {menu && <div className='screen'>hi</div>}
      {!game && !menu && 
        <>
          <div className='screen'>
             <div className='menu'>
                <div className='snake-game-text'> S N A K E </div>
                <div className={selected === 'new-game' ? 'new-game-text-selected' : 'new-game-text'}> New Game </div>
                <div className={selected === 'settings' ? 'settings-text-selected' : 'settings-text'}> Settings </div>
              </div>
          </div>
          <button className='space' onClick={() => (selected === 'new-game' ? startGame() : toggleMenu())}></button>
          <button className='upar' onClick={() => (setSelected(prev => 'new-game'))}></button>
          <button className='neeche' onClick={() => (setSelected(prev => 'settings'))}></button>
        </>
      }
    </div>
  )
}

