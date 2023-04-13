import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className= "container">
      <Weather defaultCity="Vienna" />

      <footer>
      Open-sourced code on<a href="https://github.com/Allafleur/react-weather" target="_blank" rel="noreferrer">  GitHub </a>
        and was coded by <a href="https://radiant-marigold-d76534.netlify.app/" target="_blank" rel="noreferrer"> Alla Sydorenko </a>
      </footer>
  
      </div>
    </div>
  );
}


