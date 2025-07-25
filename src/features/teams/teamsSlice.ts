import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokeTeam, SavedTeam } from '../../types/myTypes';
import { saveToLocalStorage } from '../../utils/localStorage';

interface TeamsState {
  currentTeam: PokeTeam;
  enemyTeam: PokeTeam;
  savedTeams: SavedTeam[];
}

const initialState: TeamsState = {
  currentTeam: [null, null, null, null, null, null],
  enemyTeam: [null, null, null, null, null, null],
  savedTeams: [],
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
    addTeamToSaved(state, action: PayloadAction<SavedTeam>) {
      state.savedTeams.push(action.payload);
      saveToLocalStorage('savedTeams', JSON.stringify(state.savedTeams));
    },
    removeSavedTeam(state, action: PayloadAction<SavedTeam>) {
      let index: number = -1;
      const tempArr: SavedTeam[] = [];

      state.savedTeams.forEach((team, i) => {
        tempArr.push(team);

        if (
          team.teamName === action.payload.teamName &&
          team.savedDate === action.payload.savedDate
        ) {
          index = i;
        }
      });

      if (index >= 0) {
        tempArr.splice(index, 1);
      }

      state.savedTeams = tempArr;
      saveToLocalStorage('savedTeams', JSON.stringify(state.savedTeams));
    },
  },
});

export const {
  setCurrentTeam,
  cleanCurrentTeam,
  setEnemyTeam,
  addTeamToSaved,
  removeSavedTeam,
} = teamsSlice.actions;
export default teamsSlice.reducer;
