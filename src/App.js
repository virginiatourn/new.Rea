import logo from './logo.svg';
import './App.css';
import navbarra from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera Tienda!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <navbarra/>
    </div>
  );
}

export default App;