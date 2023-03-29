import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className= "container">
      <Weather defaultCity="Vienna" />

      <footer>
        <a href="https://github.com/Allafleur/react-weather" target="_blank" rel="noreferrer">Open-sourced code </a>
        by Alla Sydorenko
      </footer>
  
      </div>
    </div>
  );
}


