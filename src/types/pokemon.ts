export interface Pokemon {
  height: number;
  weight: number;
  name: string;
  id: number;
  pokemon_species_id: number;
  pokemon_v2_pokemontypes: PokemonType[];
  pokemon_v2_pokemonstats: PokemonStat[];
  pokemon_v2_pokemonsprites: PokemonSprite[];
  pokemon_v2_pokemonabilities: PokemonAbility[];
  pokemon_v2_pokemoncries: PokemonCry[];
  pokemon_v2_pokemonspecy: PokemonSpecy;
}

export interface PokemonType {
  pokemon_v2_type: {
    name: string;
    id: number;
  };
}

export interface PokemonStat {
  pokemon_v2_stat: PokemonV2Stat;
  base_stat: number;
}

export interface PokemonV2Stat {
  id: number;
  name: string;
}

export interface PokemonSprite {
  sprites: string | null;
}

export interface PokemonAbility {
  ability_id: number;
  id: number;
  pokemon_v2_ability: PokemonV2Ability;
}

export interface PokemonV2Ability {
  name: string;
}

export interface PokemonCry {
  cries: string | null;
  pokemon_id: number;
}

export interface PokemonSpecy {
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  pokemon_v2_pokemoncolor: PokemonColor;
  evolution_chain_id: number;
}

export interface PokemonColor {
  name: string;
}

// Evolution chain

export interface EvolutionChain {
  id: number;
  pokemon_v2_pokemonspecies: PokemonV2Pokemonspecy[];
}

export interface PokemonV2Pokemonspecy {
  id: number;
  evolution_chain_id: number;
  is_legendary: boolean;
  is_mythical: boolean;
  pokemon_v2_evolutionchain: PokemonV2Evolutionchain;
}

export interface PokemonV2Evolutionchain {
  pokemon_v2_pokemonspecies: PokemonV2Pokemonspecy2[];
}

export interface PokemonV2Pokemonspecy2 {
  name: string;
  id: number;
  pokemon_v2_pokemons: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface PokemonV2Pokemonsprite {
  sprites: string;
}
