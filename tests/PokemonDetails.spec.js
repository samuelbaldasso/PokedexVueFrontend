/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import PokemonDetails from '../src/components/PokemonDetails.vue';

describe('PokemonDetails.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonDetails, {
      mocks: {
        $route: {
          params: {
            id: '1',
          },
        },
      },
    });
  });

  it('fetches Pokémon details on created', async () => {
    const mockPokemonData = {
      name: 'Bulbasaur',
      sprites: {
        front_default: 'https://example.com/bulbasaur.png',
      },
      height: 7,
      weight: 69,
      types: [
        { type: { name: 'grass' } },
        { type: { name: 'poison' } },
      ],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPokemonData),
      })
    );

    await wrapper.vm.fetchPokemonDetails();
    expect(wrapper.vm.pokemon).toEqual(mockPokemonData);
  });

  it('renders Pokémon details correctly', async () => {
    const mockPokemonData = {
      name: 'Bulbasaur',
      sprites: {
        front_default: 'https://example.com/bulbasaur.png',
      },
      height: 7,
      weight: 69,
      types: [
        { type: { name: 'grass' } },
        { type: { name: 'poison' } },
      ],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPokemonData),
      })
    );

    await wrapper.vm.fetchPokemonDetails();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toContain('BULBASAUR');
    expect(wrapper.html()).toContain('Height: 7 cm');
    expect(wrapper.html()).toContain('Weight: 69 kg');
    expect(wrapper.html()).toContain('Types: GRASS');
    expect(wrapper.find('img').attributes('src')).toBe(mockPokemonData.sprites.front_default);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});