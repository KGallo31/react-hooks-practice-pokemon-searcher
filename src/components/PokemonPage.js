import React,{useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemans,addNewPoke}) {

  const [search,setSearch] = useState('')
  const changeSearch = (e) => setSearch(e.target.value)

  const newPokemans = pokemans.filter(poke => {
    return poke.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPoke}/>
      <br />
      <Search changeSearch={changeSearch}/>
      <br />
      <PokemonCollection pokemans={newPokemans} />
    </Container>
  );
}

export default PokemonPage;
