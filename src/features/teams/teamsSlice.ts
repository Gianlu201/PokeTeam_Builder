import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokeTeam } from '../../types/myTypes';

interface TeamsState {
  currentTeam: PokeTeam;
  enemyTeam: PokeTeam;
}

const initialState: TeamsState = {
  currentTeam: [null, null, null, null, null, null],
  enemyTeam: [null, null, null, null, null, null],
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setCurrentTeam(state, action: PayloadAction<PokeTeam>) {
      state.currentTeam = action.payload;
    },
    cleanCurrentTeam(state) {
      state.currentTeam = [null, null, null, null, null, null];
    },
    setEnemyTeam(state, action: PayloadAction<PokeTeam>) {
      state.enemyTeam = action.payload;
    },
  },
});

export const { setCurrentTeam, cleanCurrentTeam, setEnemyTeam } =
  teamsSlice.actions;
export default teamsSlice.reducer;
