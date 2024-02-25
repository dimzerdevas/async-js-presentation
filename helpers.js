const pokedex = document.querySelector("#pokedex");

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function createPokemonCard(pokemonData, id) {
  console.log(pokemonData);
  const { name } = pokemonData;
  const formattedName = capitalizeFirstLetter(name);

  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");

  pokemonCard.innerHTML = `<div>#${id} - ${formattedName}</div>`;
  return pokemonCard;
}

export function appendPokemonElements(data) {
  data.map((pokemon, index) => {
    pokedex.appendChild(createPokemonCard(pokemon, index + 1));
  });
}