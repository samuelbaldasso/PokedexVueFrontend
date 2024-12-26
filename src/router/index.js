import Vue from 'vue';
import Router from 'vue-router';
import PokemonList from '@/components/PokemonList.vue';
import PokemonDetails from '@/components/PokemonDetails.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PokemonList,
    },
    {
      path: '/pokemon/:id',
      name: 'PokemonDetails',
      component: PokemonDetails
    }
  ]
});