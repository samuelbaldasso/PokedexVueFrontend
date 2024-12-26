<template>
  <div class="header">
    <img src="../assets/pokeapi_256.png" alt="Pokedex Logo"/>
    <input v-model="localPokemonName" @input="updatePokemonName" placeholder="Enter Pokémon name" />
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data(){
    return {
      localPokemonName: this.pokemonName,
    }
  },
  props: {
    pokemonName: {
      type: String,
      required: true
    },
    pokemonList: {
      type: Array,
      required: true
    }
  },
  watch: {
    pokemonName(newVal) {
      this.localPokemonName = newVal;
    }
  },
  methods: {
    updatePokemonName() {
      this.$emit('update:pokemonName', this.localPokemonName);
    }
  },
};
</script>

<style scoped>
img {
  height: 150px;
  width: 300px;
}
.header{
  background-color: #000;
  display: flex;
  border-radius: 8px;
  height: 200px;
  position: absolute;
  inset: 0 10px 10px 10px;
  position: fixed;
  align-items: center;
  justify-content: center;
  gap: 48px;
}
input{
  width: 800px;
  height: 10px;
  padding: 20px;
  border-radius: 24px;
  margin-bottom: 20px;
}

input::placeholder{
  font-weight: 700;
}
</style>