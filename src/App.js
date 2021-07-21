import './App.css';
import CounterButton from './CounterButton.js';
import SetKeyCounterButton from './SetKeyCounterButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterButton id="varKey"/>
      </header>
      <div className="title-and-icon">
        <title>Welcome to Project Purple Cow</title>
        <img src="/icon.jpeg" />
      </div>
      <div className="button-display">
        <div className="zero-start">
          <p>Hit the button to increase the count, starting from 0</p>
          <CounterButton />
        </div>
        <div className="mid-start">
          <p>Hit the button to increase the count, starting from where the set key left off</p>
          <SetKeyCounterButton />
        </div>
      </div>
    </div>
  );
}

export default App;
