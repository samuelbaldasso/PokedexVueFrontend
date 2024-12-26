/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import HeaderView from '../src/components/HeaderView.vue';

describe('HeaderView.vue', () => {
  it('renders props.pokemonList when passed', () => {
    const pokemonList = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }];
    const pokemonName = "";
    const wrapper = shallowMount(HeaderView, {
      propsData: { pokemonList, pokemonName }
    });
    expect(wrapper.findAll('input').exists()).toBe(true);
    expect(wrapper.vm.localPokemonName).toBe(pokemonName);
    expect(wrapper.vm.pokemonList).toEqual(pokemonList);
  });
  
  it('emits update:pokemonName event when input value changes', async () => {
    const pokemonList = [];
    const wrapper = shallowMount(HeaderView, {
      propsData: { pokemonList, pokemonName: '' }
    });
    const input = wrapper.find('input');
    await input.setValue('Pikachu');
    expect(wrapper.emitted()['update:pokemonName'][0]).toEqual(['Pikachu']);
  });
});