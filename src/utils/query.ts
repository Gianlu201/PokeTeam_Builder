export const getAllPokemonsQuery = `
        query {
          pokemon_v2_pokemon(where: {is_default: {_eq: true}}) {
            height
            weight
            name
            id
            pokemon_species_id
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                  id
                }
              }
            pokemon_v2_pokemonstats {
              pokemon_v2_stat {
                id
                name
              }
              base_stat
            }
            pokemon_v2_pokemonsprites {
              sprites(path: "front_default")
            }
            pokemon_v2_pokemonabilities {
              ability_id
              id
              pokemon_v2_ability {
                name
              }
            }
            pokemon_v2_pokemoncries {
              cries(path: "latest")
              pokemon_id
            }
            pokemon_v2_pokemonspecy {
              is_baby
              is_legendary
              is_mythical
              pokemon_v2_pokemoncolor {
                name
              }
              evolution_chain_id
            }
          }
        }
`;

export const getAllEvolutionChainsQuery = `
  query {
    pokemon_v2_evolutionchain {
      id
      pokemon_v2_pokemonspecies {
        id
        evolution_chain_id
        is_legendary
        is_mythical
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies(order_by: {order: asc}) {
            name
            id
            pokemon_v2_pokemons {
              pokemon_v2_pokemonsprites {
                sprites(path: "front_default")
              }
            }
          }
        }
      }
    }
  }
`;

export const getSelectedPokemonsMoves = (idsArr: number[]) => `
  query GetMovesForMultiplePokemon {
    pokemon_v2_pokemon(where: {id: {_in: [${idsArr}]}}) {
      id
      name
      pokemon_v2_pokemonmoves(
        where: {pokemon_v2_move: {power: {_is_null: false}}}
        order_by: {pokemon_v2_move: {power: desc_nulls_last}}
        limit: 30
      ) {
        pokemon_v2_move {
          id
          name
          power
          accuracy
          pp
          priority
        }
      }
    }
  }
`;
