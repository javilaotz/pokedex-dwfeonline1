const API = 'https://pokeapi.co/api/v2/';

const getData = (url) => {
  const result = fetch(url)
  .then(response => response.json())
  .then(data => data)

  return result
}

const getFirst100 = () => {
  const url = `${API}pokemon?limit=100&offset=100`
  const result = getData(url)

  return result
}

const Pokemon = {
  getPokemons: getFirst100,
  getPokemon: (url) => getData(url)
}

export default Pokemon

