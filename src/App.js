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
      <div className="our-mission">
        <subtitle>Our Misson</subtitle>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default App;
