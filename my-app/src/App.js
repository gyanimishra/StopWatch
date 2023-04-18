import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Stopwatch/>
      <Counter/>
    </div>
  );
}

export default App;
