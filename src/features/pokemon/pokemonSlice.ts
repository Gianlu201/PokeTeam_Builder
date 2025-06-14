import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { EvolutionChain, Pokemon } from '../../types/pokemon';

interface PokemonState {
  list: Pokemon[];
  evolutionChains: EvolutionChain[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  evolutionChains: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setReduxPokemonList(state, action: PayloadAction<Pokemon[]>) {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setReduxPokemonEvolutionChains(
      state,
      action: PayloadAction<EvolutionChain[]>
    ) {
      state.evolutionChains = action.payload;
    },
  },
});

export const {
  setReduxPokemonList,
  setReduxPokemonEvolutionChains,
  setLoading,
  setError,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
