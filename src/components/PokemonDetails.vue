<template> 
    <div class="pokemons" v-if="pokemon">
      <div class="pokemon">
      <h1>{{ pokemon.name.toUpperCase() }}</h1>
      <img :src="pokemon.sprites.front_default" alt="pokemon.name">
      <p>Height: {{ pokemon.height }} cm</p>
      <p>Weight: {{ pokemon.weight }} kg</p>
      <p>Types: {{ pokemon.types[0].type.name.toUpperCase() }}</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'PokemonDetails',
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.fetchPokemonDetails();
  },
  methods: {
    async fetchPokemonDetails() {
      const id = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:3000/pokemon/${id}`);
        const data = await response.json();
        this.pokemon = data;
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    },
  }
};
</script>

<style scoped>
.pokemon img {
  width: 200px;
  height: 200px;
}
input{
  width: 80vw;
  height: 10px;
  padding: 20px;
  border-radius: 24px;
  margin-bottom: 20px;
}

input::placeholder{
  font-weight: 700;
}

.pokemons{
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>