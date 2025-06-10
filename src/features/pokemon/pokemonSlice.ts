import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon } from '../../types/pokemon';

interface PokemonState {
  list: Pokemon[];
  selectedPokemonInfos: Pokemon | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  selectedPokemonInfos: null,
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
  },
});

export const { setReduxPokemonList, setLoading, setError } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
