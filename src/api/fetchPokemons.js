import axios from "./axios";

const fetchPokemons = async (limit, offset) => {
  try {
    const { data } = await axios.get(
      `/pokemon?limit=${limit}&offset=${offset}`
    );

    return data;
  } catch (error) {
    console.log(error + "Fetch Pokemon");
  }
};

const fetchPokemon = async (name) => {
  try {
    const { data } = await axios(`pokemon/${name}`);

    return { ...data };
  } catch (error) {
    console.log(error + "FetchPokemon failed");
  }
};

export { fetchPokemons, fetchPokemon };
