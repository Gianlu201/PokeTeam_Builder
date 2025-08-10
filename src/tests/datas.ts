import type { EvolutionChain, Pokemon } from '../types/APITypes';

export const pokemonList: Pokemon[] = [
  // bulbasaur
  {
    height: 7,
    weight: 69,
    name: 'bulbasaur',
    id: 1,
    pokemon_species_id: 1,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'grass',
          id: 12,
        },
      },
      {
        pokemon_v2_type: {
          name: 'poison',
          id: 4,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 45,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 49,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 49,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 68,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 65,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 45,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 65,
        id: 1,
        pokemon_v2_ability: {
          name: 'overgrow',
        },
      },
      {
        ability_id: 34,
        id: 2,
        pokemon_v2_ability: {
          name: 'chlorophyll',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
        pokemon_id: 1,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'grass',
      },
      evolution_chain_id: 1,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // ivysaur
  {
    height: 10,
    weight: 130,
    name: 'ivysaur',
    id: 2,
    pokemon_species_id: 2,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'grass',
          id: 12,
        },
      },
      {
        pokemon_v2_type: {
          name: 'poison',
          id: 4,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 60,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 62,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 63,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 80,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 80,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 60,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 65,
        id: 3,
        pokemon_v2_ability: {
          name: 'overgrow',
        },
      },
      {
        ability_id: 34,
        id: 4,
        pokemon_v2_ability: {
          name: 'chlorophyll',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg',
        pokemon_id: 2,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'grass',
      },
      evolution_chain_id: 1,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // venusaur
  {
    height: 20,
    weight: 1000,
    name: 'venusaur',
    id: 3,
    pokemon_species_id: 3,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'grass',
          id: 12,
        },
      },
      {
        pokemon_v2_type: {
          name: 'poison',
          id: 4,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 80,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 82,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 83,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 100,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 100,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 80,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 65,
        id: 5,
        pokemon_v2_ability: {
          name: 'overgrow',
        },
      },
      {
        ability_id: 34,
        id: 6,
        pokemon_v2_ability: {
          name: 'chlorophyll',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg',
        pokemon_id: 3,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'grass',
      },
      evolution_chain_id: 1,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // charmander
  {
    height: 6,
    weight: 85,
    name: 'charmander',
    id: 4,
    pokemon_species_id: 4,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'fire',
          id: 10,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 39,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 52,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 43,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 60,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 50,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 65,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 66,
        id: 7,
        pokemon_v2_ability: {
          name: 'blaze',
        },
      },
      {
        ability_id: 94,
        id: 8,
        pokemon_v2_ability: {
          name: 'solar-power',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg',
        pokemon_id: 4,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'red',
      },
      evolution_chain_id: 2,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // charmeleon
  {
    height: 11,
    weight: 190,
    name: 'charmeleon',
    id: 5,
    pokemon_species_id: 5,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'fire',
          id: 10,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 58,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 64,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 58,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 80,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 65,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 80,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 66,
        id: 9,
        pokemon_v2_ability: {
          name: 'blaze',
        },
      },
      {
        ability_id: 94,
        id: 10,
        pokemon_v2_ability: {
          name: 'solar-power',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/5.ogg',
        pokemon_id: 5,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'red',
      },
      evolution_chain_id: 2,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // charizard
  {
    height: 17,
    weight: 905,
    name: 'charizard',
    id: 6,
    pokemon_species_id: 6,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'fire',
          id: 10,
        },
      },
      {
        pokemon_v2_type: {
          name: 'flying',
          id: 3,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 78,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 84,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 78,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 109,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 85,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 100,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 66,
        id: 11,
        pokemon_v2_ability: {
          name: 'blaze',
        },
      },
      {
        ability_id: 94,
        id: 12,
        pokemon_v2_ability: {
          name: 'solar-power',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg',
        pokemon_id: 6,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'red',
      },
      evolution_chain_id: 2,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // squirtle
  {
    height: 5,
    weight: 90,
    name: 'squirtle',
    id: 7,
    pokemon_species_id: 7,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'water',
          id: 11,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 44,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 48,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 65,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 50,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 64,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 43,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 67,
        id: 13,
        pokemon_v2_ability: {
          name: 'torrent',
        },
      },
      {
        ability_id: 44,
        id: 14,
        pokemon_v2_ability: {
          name: 'rain-dish',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg',
        pokemon_id: 7,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'blue',
      },
      evolution_chain_id: 3,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // wartortle
  {
    height: 10,
    weight: 225,
    name: 'wartortle',
    id: 8,
    pokemon_species_id: 8,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'water',
          id: 11,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 59,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 63,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 80,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 65,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 80,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 58,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 67,
        id: 15,
        pokemon_v2_ability: {
          name: 'torrent',
        },
      },
      {
        ability_id: 44,
        id: 16,
        pokemon_v2_ability: {
          name: 'rain-dish',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/8.ogg',
        pokemon_id: 8,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'blue',
      },
      evolution_chain_id: 3,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // blastoise
  {
    height: 16,
    weight: 855,
    name: 'blastoise',
    id: 9,
    pokemon_species_id: 9,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'water',
          id: 11,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 79,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 83,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 100,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 85,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 105,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 78,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 67,
        id: 17,
        pokemon_v2_ability: {
          name: 'torrent',
        },
      },
      {
        ability_id: 44,
        id: 18,
        pokemon_v2_ability: {
          name: 'rain-dish',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg',
        pokemon_id: 9,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'blue',
      },
      evolution_chain_id: 3,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // pikachu
  {
    height: 4,
    weight: 60,
    name: 'pikachu',
    id: 25,
    pokemon_species_id: 25,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'electric',
          id: 13,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 35,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 55,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 40,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 50,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 50,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 90,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 9,
        id: 54,
        pokemon_v2_ability: {
          name: 'static',
        },
      },
      {
        ability_id: 31,
        id: 55,
        pokemon_v2_ability: {
          name: 'lightning-rod',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg',
        pokemon_id: 25,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'yellow',
      },
      evolution_chain_id: 10,
    },
    pokemon_v2_pokemonmoves: null,
  },
  // raichu
  {
    height: 8,
    weight: 300,
    name: 'raichu',
    id: 26,
    pokemon_species_id: 26,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: 'electric',
          id: 13,
        },
      },
    ],
    pokemon_v2_pokemonstats: [
      {
        pokemon_v2_stat: {
          id: 1,
          name: 'hp',
        },
        base_stat: 60,
      },
      {
        pokemon_v2_stat: {
          id: 2,
          name: 'attack',
        },
        base_stat: 90,
      },
      {
        pokemon_v2_stat: {
          id: 3,
          name: 'defense',
        },
        base_stat: 55,
      },
      {
        pokemon_v2_stat: {
          id: 4,
          name: 'special-attack',
        },
        base_stat: 90,
      },
      {
        pokemon_v2_stat: {
          id: 5,
          name: 'special-defense',
        },
        base_stat: 80,
      },
      {
        pokemon_v2_stat: {
          id: 6,
          name: 'speed',
        },
        base_stat: 110,
      },
    ],
    pokemon_v2_pokemonsprites: [
      {
        front_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
        back_sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png',
      },
    ],
    pokemon_v2_pokemonabilities: [
      {
        ability_id: 9,
        id: 56,
        pokemon_v2_ability: {
          name: 'static',
        },
      },
      {
        ability_id: 31,
        id: 57,
        pokemon_v2_ability: {
          name: 'lightning-rod',
        },
      },
    ],
    pokemon_v2_pokemoncries: [
      {
        cries:
          'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/26.ogg',
        pokemon_id: 26,
      },
    ],
    pokemon_v2_pokemonspecy: {
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      pokemon_v2_pokemoncolor: {
        name: 'yellow',
      },
      evolution_chain_id: 10,
    },
    pokemon_v2_pokemonmoves: null,
  },
];

export const evolutionChains: EvolutionChain[] = [
  // bulbasaur - ivysaur - venusaur
  {
    id: 1,
    pokemon_v2_pokemonspecies: [
      {
        id: 1,
        evolution_chain_id: 1,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'bulbasaur',
              id: 1,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'ivysaur',
              id: 2,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'venusaur',
              id: 3,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 3,
        evolution_chain_id: 1,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'bulbasaur',
              id: 1,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'ivysaur',
              id: 2,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'venusaur',
              id: 3,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 2,
        evolution_chain_id: 1,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'bulbasaur',
              id: 1,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'ivysaur',
              id: 2,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'venusaur',
              id: 3,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
  // charmender - charmeleon - charizard
  {
    id: 2,
    pokemon_v2_pokemonspecies: [
      {
        id: 4,
        evolution_chain_id: 2,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'charmander',
              id: 4,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'charmeleon',
              id: 5,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'charizard',
              id: 6,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 5,
        evolution_chain_id: 2,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'charmander',
              id: 4,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'charmeleon',
              id: 5,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'charizard',
              id: 6,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 6,
        evolution_chain_id: 2,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'charmander',
              id: 4,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'charmeleon',
              id: 5,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'charizard',
              id: 6,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
  // squirtle - wartortle - blastoise
  {
    id: 3,
    pokemon_v2_pokemonspecies: [
      {
        id: 7,
        evolution_chain_id: 3,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'squirtle',
              id: 7,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'wartortle',
              id: 8,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'blastoise',
              id: 9,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 8,
        evolution_chain_id: 3,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'squirtle',
              id: 7,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'wartortle',
              id: 8,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'blastoise',
              id: 9,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 9,
        evolution_chain_id: 3,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'squirtle',
              id: 7,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'wartortle',
              id: 8,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'blastoise',
              id: 9,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
  // pikachu - raichu
  {
    id: 10,
    pokemon_v2_pokemonspecies: [
      {
        id: 25,
        evolution_chain_id: 10,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'pichu',
              id: 172,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'pikachu',
              id: 25,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites: 'null',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10160.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'raichu',
              id: 26,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 26,
        evolution_chain_id: 10,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'pichu',
              id: 172,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'pikachu',
              id: 25,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites: 'null',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10160.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'raichu',
              id: 26,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 172,
        evolution_chain_id: 10,
        is_legendary: false,
        is_mythical: false,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: 'pichu',
              id: 172,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'pikachu',
              id: 25,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites: 'null',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10160.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'raichu',
              id: 26,
              pokemon_v2_pokemons: [
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
                    },
                  ],
                },
                {
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  },
];
