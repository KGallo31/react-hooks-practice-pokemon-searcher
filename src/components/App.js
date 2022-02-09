import React,{useEffect,useState} from "react";
import PokemonPage from "./PokemonPage";
const API = 'http://localhost:3001/pokemon'
function App() {
  const [pokemans,setPokemans] = useState([])

  const changePokemans = (pokeman) => {
    setPokemans(pokeman)
  }

  useEffect(() => {
    fetch(API).then(r=>r.json()).then(changePokemans)
  },[])



  const addNewPoke = (newPoke) => {
    const newPokemans = [...pokemans,newPoke]
    setPokemans(newPokemans)
  }


  return (
    <div className="App">
      <PokemonPage pokemans={pokemans} addNewPoke={addNewPoke}/>
    </div>
  );
}

export default App;
