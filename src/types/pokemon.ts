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
  sprites: Sprites;
}

export interface Sprites {
  other: Other;
  versions: Versions;
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
}

export interface Other {
  home: Home;
  showdown: Showdown;
  dream_world: DreamWorld;
  'official-artwork': OfficialArtwork;
}

export interface Home {
  front_shiny: string | null;
  front_female: string | null;
  front_default: string | null;
  front_shiny_female: string | null;
}

export interface Showdown {
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
}

export interface DreamWorld {
  front_female: string | null;
  front_default: string | null;
}

export interface OfficialArtwork {
  front_shiny: string | null;
  front_default: string | null;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-v': GenerationV;
  'generation-ii': GenerationIi;
  'generation-iv': GenerationIv;
  'generation-vi': GenerationVi;
  'generation-iii': GenerationIii;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface GenerationI {
  yellow: Yellow;
  'red-blue': RedBlue;
}

export interface Yellow {
  back_gray: string | null;
  front_gray: string | null;
  back_default: string | null;
  front_default: string | null;
  back_transparent: string | null;
  front_transparent: string | null;
}

export interface RedBlue {
  back_gray: string | null;
  front_gray: string | null;
  back_default: string | null;
  front_default: string | null;
  back_transparent: string | null;
  front_transparent: string | null;
}

export interface GenerationV {
  'black-white': BlackWhite;
}

export interface BlackWhite {
  animated: Animated;
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
}

export interface Animated {
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationIi {
  gold: Gold;
  silver: Silver;
  crystal: Crystal;
}

export interface Gold {
  back_shiny: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_default: string | null;
  front_transparent: string | null;
}

export interface Silver {
  back_shiny: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_default: string | null;
  front_transparent: string | null;
}

export interface Crystal {
  back_shiny: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_default: string | null;
  back_transparent: string | null;
  front_transparent: string | null;
  back_shiny_transparent: string | null;
  front_shiny_transparent: string | null;
}

export interface GenerationIv {
  platinum: Platinum;
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartgoldSoulsilver;
}

export interface Platinum {
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
}

export interface DiamondPearl {
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
}

export interface HeartgoldSoulsilver {
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVi {
  'x-y': XY;
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
}

export interface XY {
  front_shiny: string | null;
  front_female: string | null;
  front_default: string | null;
  front_shiny_female: string | null;
}

export interface OmegarubyAlphasapphire {
  front_shiny: string | null;
  front_female: string | null;
  front_default: string | null;
  front_shiny_female: string | null;
}

export interface GenerationIii {
  emerald: Emerald;
  'ruby-sapphire': RubySapphire;
  'firered-leafgreen': FireredLeafgreen;
}

export interface Emerald {
  front_shiny: string | null;
  front_default: string | null;
}

export interface RubySapphire {
  back_shiny: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_default: string | null;
}

export interface FireredLeafgreen {
  back_shiny: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_default: string | null;
}

export interface GenerationVii {
  icons: Icons;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

export interface Icons {
  front_female: string | null;
  front_default: string | null;
}

export interface UltraSunUltraMoon {
  front_shiny: string | null;
  front_female: string | null;
  front_default: string | null;
  front_shiny_female: string | null;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Icons2 {
  front_female: string | null;
  front_default: string | null;
}

export interface PokemonAbility {
  ability_id: number;
  id: number;
  pokemonAbility: PokemonV2Ability;
}

export interface PokemonV2Ability {
  name: string;
}

export interface PokemonCry {
  cries: Cries;
  pokemon_id: number;
}

export interface Cries {
  latest: string | null;
  legacy: string | null;
}

export interface PokemonSpecy {
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  pokemon_color_id: number;
  pokemon_v2_pokemoncolor: PokemonColor;
}

export interface PokemonColor {
  name: string;
}
