import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokeTeam, SavedTeam } from '../../types/myTypes';
import { saveToLocalStorage } from '../../utils/localStorage';

interface TeamsState {
  currentTeam: SavedTeam;
  enemyTeam: PokeTeam;
  savedTeams: SavedTeam[];
}

const initialState: TeamsState = {
  currentTeam: {
    teamName: '',
    team: [null, null, null, null, null, null],
    savedDate: '',
  },
  enemyTeam: [null, null, null, null, null, null],
  savedTeams: [],
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setCurrentTeam(state, action: PayloadAction<SavedTeam>) {
      state.currentTeam = {
        teamName: action.payload.teamName,
        team: action.payload.team,
        savedDate: action.payload.savedDate,
      };
    },
    cleanCurrentTeam(state) {
      state.currentTeam = initialState.currentTeam;
    },
    setEnemyTeam(state, action: PayloadAction<PokeTeam>) {
      state.enemyTeam = action.payload;
    },
    addTeamToSaved(state, action: PayloadAction<SavedTeam>) {
      state.savedTeams.push(action.payload);
      saveToLocalStorage('savedTeams', JSON.stringify(state.savedTeams));
    },
    updateSavedTeam(state, action: PayloadAction<SavedTeam>) {
      state.savedTeams.forEach((team) => {
        if (
          team.teamName.toLowerCase() === action.payload.teamName.toLowerCase()
        ) {
          team.teamName = action.payload.teamName;
          team.team = action.payload.team;
          team.savedDate = action.payload.savedDate;
        }
      });
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
  updateSavedTeam,
  removeSavedTeam,
} = teamsSlice.actions;
export default teamsSlice.reducer;
