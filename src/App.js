import { useState } from 'react';
import './App.css';
import HeroCard from './components/HeroCard';
import HeroForm from './components/HeroForm';

function App() {
    const [heroi, setHeroi] = useState(null)

  return (
    <div className="App">
        <HeroForm setHeroi={setHeroi}/>
        {heroi && <HeroCard heroi={heroi}/>}
    </div>
  );
}

export default App;
