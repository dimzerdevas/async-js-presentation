import { renderPokemonCards } from "./helpers.js";

// Setting our API url
const pokeAPI = "http://localhost:3000/pokemon";

async function handleRequest() {
  const response = await fetch(pokeAPI);
  const pokemonData = await response.json();
  renderPokemonCards(pokemonData);
}

handleRequest();

// Chaining
function oldHandleRequest() {
  fetch(pokeAPI)
    .then((res) => res.json())
    .then((pokemonData) => renderPokemonCards(pokemonData));
}

oldHandleRequest();
