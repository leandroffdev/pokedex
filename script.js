// Get the container from html
const container = document.querySelector('.container');
// Class Pokemon
class Pokemon {
  // Constructor
  constructor(id, name, xp, svgimage, gifimage, hp, attack, defense, weight, speed, type) {
    this.id = id;
    this.name = name;
    this.xp = xp;
    this.svgimage = svgimage;
    this.gifimage = gifimage;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.weight = weight;
    this.speed = speed;
    this.type = type;
  }
  // Getters
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getXP() {
    return this.xp;
  }
  getSvgImage() {
    return this.svgimage;
  }
  getGifImage() {
    return this.gifimage;
  }
  getHp() {
    return this.hp;
  }
  getAttack() {
    return this.attack;
  }
  getDefense() {
    return this.defense;
  }
  getWeight() {
    return this.weight;
  }
  getSpeed() {
    return this.speed;
  }
  getType() {
    return this.type;
  }
  // Setters
  setId(id) {
    this.id = id;
  }
  setName(name) {
    this.name = name;
  }
  setXP(xp) {
    this.xp = xp;
  }
  setSvgImage(svgimage) {
    this.svgimage = svgimage;
  }
  setGifImage(gifimage) {
    this.gifimage = gifimage;
  }
  setHp(hp) {
    this.hp = hp;
  }
  setAttack(attack) {
    this.attack = attack;
  }
  setDefense(defense) {
    this.defense = defense;
  }
  setWeight(weight) {
    this.weight = weight;
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  setType(type) {
    this.type = type;
  }
}
// Create a empty list of pokemons objects
const pokemonList = [];
const list = [];
// Define the number of results
const limit = 50;
// Render list on screen
const renderList = (list) => {
  // Clear the container
  container.innerHTML = '';
  // Loop through the list
  list.forEach((pokemon) => {
    container.innerHTML += `
                                <div class="card">
                                  <span class="id">${pokemon.getId()}</span>
                                  <div class="types"></div>
                                  <div class="info">
                                    <div class="main">
                                      <span class="xp">${pokemon.getXP()}xp</span>
                                      <img class="svg" src="${pokemon.getSvgImage()}" alt="${pokemon.getName()}">
                                      <img class="gif" src="${pokemon.getGifImage()}" alt="${pokemon.getName()}">
                                    </div>
                                    <h2 class="name">${pokemon.getName()}</h2>
                                    <span class="hp">
                                      <span class="hp-value" style="width: ${pokemon.getHp()}px"></span>
                                    </span>
                                    <div class="status">
                                      <div class="attack">
                                        <span class="atk">ATK</span>
                                        <span>${pokemon.getAttack()}</span>
                                      </div>
                                      <div class="defense">
                                        <span class="def">DEF</span>
                                        <span>${pokemon.getDefense()}</span>
                                      </div>
                                      <div class="weight">
                                        <span class="wht">WHT</span>
                                        <span>${pokemon.getWeight()}</span>
                                      </div>
                                      <div class="speed">
                                        <span class="spd">SPD</span>
                                        <span>${pokemon.getSpeed()}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `
  });
}
// Get the pokemon information
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
  // console.log(data);
}
//  Get the specific number of pokemons
const getPokemons = async () => {
  for(let i = 1; i <= limit; i++) {
    const pokemon = new Pokemon();
    const res = await getPokemon(i);
    pokemon.setId(res.id);
    pokemon.setName(res.name);
    pokemon.setXP(res.base_experience)
    pokemon.setSvgImage(res.sprites.other.dream_world.front_default);
    pokemon.setGifImage(res.sprites.other.showdown.front_default);
    pokemon.setHp(res.stats[0].base_stat);
    pokemon.setAttack(res.stats[1].base_stat);
    pokemon.setDefense(res.stats[2].base_stat);
    pokemon.setWeight(res.weight);
    pokemon.setSpeed(res.stats[5].base_stat)
    pokemon.setType(res.types);
    list.push(pokemon);
  }
}
getPokemons()
.then(() => {
  renderList(list);
  // console.log(list);
});