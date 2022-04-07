import logo from './logo.svg';
import './App.css';

function MoneyManager() {
  return (
    <div className="MoneyManager">
      <header className="MoneyManager-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MONEY MANAGER
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default MoneyManager;