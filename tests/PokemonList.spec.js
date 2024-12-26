/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import PokemonList from '../src/components/PokemonList.vue';
import HeaderView from '../src/components/HeaderView.vue';

describe('PokemonList.vue', () => {
  it('renders HeaderView and passes props', () => {
    const wrapper = shallowMount(PokemonList);
    const headerView = wrapper.findComponent(HeaderView);
    expect(headerView.exists()).toBe(true);
    expect(headerView.props().pokemonList).toEqual(wrapper.vm.pokemonList);
    expect(headerView.props().pokemonName).toBe(wrapper.vm.pokemonName);
  });

  it('filters pokemonList based on pokemonName', async () => {
    const wrapper = shallowMount(PokemonList, {
      data() {
        return {
          pokemonName: 'bulbasaur',
          pokemonList: [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }]
        };
      }
    });
    expect(wrapper.vm.filteredPokemonList.length).toBe(1);
    expect(wrapper.vm.filteredPokemonList[0].name).toBe('Bulbasaur');
  });
});