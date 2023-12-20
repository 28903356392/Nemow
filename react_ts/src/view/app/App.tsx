import logo from '../../img/logo.svg';
import './App.css';
import Home from '../home/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </header>
    </div>
  );
}

export default App;
