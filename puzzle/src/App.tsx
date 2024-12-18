import './App.css';
import { Board } from './components/Board';
import { usePuzzle } from './hooks/usePuzzle';

function App() {
  const { generateTiles, randomizeOrder } = usePuzzle();
  const word = randomizeOrder("FIFTIES");
  return (
    <>
      <Board>
        {generateTiles(word)}
      </Board>
    </>
  );
}

export default App;
