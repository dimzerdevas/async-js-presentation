const pokedex = document.querySelector("#pokedex");

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function createPokemonCard(pokemonData, id) {
  const { name, image, type } = pokemonData;
  const formattedName = capitalizeFirstLetter(name);

  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");

  pokemonCard.innerHTML = `
    <img src=${image} />
    <div>#${id} - ${formattedName}</div>
  `;

  const typesContainer = document.createElement("div");
  typesContainer.classList.add("types");
  pokemonCard.append(typesContainer);

  const types = type.split(", ");
  types.forEach((type) => {
    const typeChip = document.createElement("div");
    typeChip.classList.add("type");
    typeChip.textContent = type;
    typesContainer.append(typeChip);
  });

  return pokemonCard;
}

export function renderPokemonCards(pokemonData) {
  pokemonData.map((pokemon, index) => {
    pokedex.appendChild(createPokemonCard(pokemon, index + 1));
  });
}
