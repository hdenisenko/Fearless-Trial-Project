import './App.css';
import CounterButton from './CounterButton.js';
import SetKeyCounterButton from './SetKeyCounterButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SetKeyCounterButton id="setKey"/>
        <CounterButton id="varKey"/>
      </header>
      <CounterButton/>
    </div>
  );
}

export default App;
