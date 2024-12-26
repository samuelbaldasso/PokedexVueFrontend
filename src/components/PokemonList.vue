<template>
  <div class="scroll-container">
    <HeaderView :pokemonList="pokemonList" :pokemonName="pokemonName"
    @update:pokemonName="pokemonName = $event"
    />

    <div class="scrolled">
      <div v-if="filteredPokemonList.length">
      <h2>All Pokémon</h2>
      <ul>
        <li v-for="pokemon in filteredPokemonList" :key="pokemon.name" @click="fetchPokemonById(pokemon.url)">
          <router-link :to="{ name: 'PokemonDetails', params: { id: getIdFromUrl(pokemon.url) }}">{{ pokemon.name.toUpperCase() }}</router-link>
        </li>
      </ul>
    </div>

    <div v-if="pokemon" >
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <router-link :to="{ name: 'PokemonDetails', params: { id:getIdFromUrl(pokemon.url) }}">{{ pokemon.name.toUpperCase() }}</router-link>
    </div>
    </div>

    <div v-if="loading" class="loading">
      Loading more Pokémon...
    </div>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue';

export default {
  name: 'PokemonList',
  components: {
    HeaderView
  },
  data() {
    return {
      pokemonName: '',
      pokemon: null,
      pokemonList: [],
      loading: false,
      offset: 0,
      limit: 10
    };
  },
  async created() {
    await this.fetchPokemonList();
  },
  computed: {
    filteredPokemonList() {
      if (!this.pokemonName) {
        return this.pokemonList;
      }
      return this.pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.pokemonName.toLowerCase())
      );
    }
  },
  methods: {
    getIdFromUrl(url) {
      if(!url) return null;
      return url.split('/').filter(Boolean).pop();
    },

    async fetchPokemonList() {
      if (this.loading) return;
      this.loading = true;
      try {
        const response = await fetch(`http://localhost:3000/pokemon?offset=${this.offset}&limit=${this.limit}`);
        const data = await response.json();
        this.pokemonList = [...this.pokemonList, ...data];
        this.offset += this.limit;
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPokemonById(url) {
      try {
        const response = await fetch(`http://localhost:3000/pokemon/${this.getIdFromUrl(url)}`);
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
img {
  width: 150px;
  height: 150px;
}

.container{
  display: flex;
  flex-direction: column;
}

:link{
  text-decoration: none;
  color: #000;

}

.scroll-container {
  margin-top: 240px;
  height: 600px;
}

.loading {
  text-align: center;
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  cursor: pointer;
  margin: 5px 0;
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
li:hover {
  background-color: #e0e0e0;
}
</style>