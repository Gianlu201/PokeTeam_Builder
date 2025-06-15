import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokeTeam } from '../../types/myTypes';

interface TeamsState {
  currentTeam: PokeTeam;
}

const initialState: TeamsState = {
  currentTeam: [null, null, null, null, null, null],
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setCurrentTeam(state, action: PayloadAction<PokeTeam>) {
      state.currentTeam = action.payload;
    },
  },
});

export const { setCurrentTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
