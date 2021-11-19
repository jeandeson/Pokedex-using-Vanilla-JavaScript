//construtor do pokemon
class Pokemon {
  constructor(id, name, types, height, weight, image, abilities) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.height = height;
    this.weight = weight;
    this.image = image;
    this.image = image;
    this.abilities = abilities;
  }
  //faz a requisição do pokemon para a api
  async getPokemon(indice) {
    const url = `https://pokeapi.co/api/v2/pokemon/${indice}`;
    picture.innerText = "Loading...";
    await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const pokemon = new Pokemon(
          response.id,
          response.name,
          response.types,
          response.height,
          response.weight,
          response.sprites.other.dream_world.front_default,
          response.abilities
        );
        picture.innerHTML = "";
        this.setPokemon(pokemon);
      });
  }
  //recebe o pokemon e faz a impressão dele na página
  async setPokemon(pokemon) {
    const picture = document.getElementById("picture");
    const abilities = document.getElementById("abilities");
    const type = document.getElementById("type");
    const name = document.getElementById("name");
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    const img = document.createElement("img");
    img.src = pokemon.image;

    picture.children.length != 0 ? (picture.innerHTML = "") : null;
    type.innerHTML.length != 0 ? (type.innerHTML = "<strong>Type</strong>: ") : null;
    pokemon.abilities.length != 0 ? (abilities.innerHTML = "") : null;

    picture.append(img);
    pokemon.types.forEach((indice) => {
      type.innerHTML += ` ${toCapitalize(indice.type.name)} `;
    });

    pokemon.abilities.forEach((indice) => {
      abilities.innerHTML += `<span class="abilitie">${toCapitalize(indice.ability.name)}</span>`;
    });

    height.innerHTML = `<strong>Heigth:</strong>  ${pokemon.height}`;
    name.innerHTML = `<strong>Name:</strong> ${toCapitalize(pokemon.name)}`;
    weight.innerHTML = `<strong>Weight:</strong>: ${pokemon.weight}`;
  }
}

//Lida com os indicies e salva o atual no localstorage
function handleIndice(setIndice, botao) {
  if (botao != undefined) {
    const handlebotao = document.getElementById(`${botao}`);
    handlebotao.className = "press";
    setTimeout(() => {
      handlebotao.className = "";
    }, 100);
  }
  const picture = document.getElementById("picture");
  if (picture.innerText === "Loading...") {
    return;
  }
  if (localStorage.getItem("indice") == null) {
    localStorage.setItem("indice", 1);
  }
  let indice = parseInt(localStorage.getItem("indice"));
  if (setIndice != undefined) {
    indice > 150 ? (indice = 1) : (indice += setIndice);
    localStorage.setItem("indice", indice);
  }
  const pokemon = new Pokemon();
  pokemon.getPokemon(indice);
}

//função para colocar a primeira letra em maisculo
function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
