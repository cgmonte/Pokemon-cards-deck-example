console.log("início do script");

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((response) => renderPokemonCards(response.results));

const renderPokemonCards = (pokemons) => {
  const deck = document.getElementById("deck");

  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    const name = pokemon.name;

    card.className = "card";
    card.innerHTML = name[0].toUpperCase() + name.slice(1);

    deck.appendChild(card);

    console.log(pokemon);
  });
};
