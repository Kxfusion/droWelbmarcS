import './App.css';
import { Board } from './components/Board';
import { usePuzzle } from './hooks/usePuzzle';

function App() {
  const { randomizeOrder } = usePuzzle();
  const word = randomizeOrder("FIFTIES");
  return (
    <>
      <Board word={word} />
    </>
  );
}

export default App;
