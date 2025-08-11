import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import SavedTeamsPage from '../pages/SavedTeamsPage';
import { MemoryRouter } from 'react-router';
import { configureStore, type EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import teamsSlice from '../features/teams/teamsSlice';

import { pokemonList, evolutionChains } from './datas';
import type { PokeTeam, SavedTeam } from '../types/myTypes';

const emptyTeam: PokeTeam = [null, null, null, null, null, null];
const team1: PokeTeam = [
  pokemonList[0],
  pokemonList[1],
  pokemonList[2],
  null,
  null,
  null,
];
const team2: PokeTeam = [
  pokemonList[3],
  pokemonList[4],
  pokemonList[5],
  null,
  null,
  null,
];

const savedTeam1: SavedTeam = {
  teamName: 'Team Leaf',
  team: team1,
  savedDate: new Date().toISOString(),
};
const savedTeam2: SavedTeam = {
  teamName: 'Team Fire',
  team: team2,
  savedDate: new Date().toISOString(),
};

// stores da passare per il render che fornisce struttura dati coerente a quelli nella memoria globale di Redux
const emptyStoreLoaded = configureStore({
  reducer: { pokemon: pokemonReducer, teams: teamsSlice },
  preloadedState: {
    pokemon: {
      list: [...pokemonList],
      evolutionChains: [...evolutionChains],
      loading: false,
      error: null,
    },
    teams: {
      currentTeam: {
        teamName: '',
        team: emptyTeam,
        savedDate: '',
      },
      enemyTeam: emptyTeam,
      savedTeams: [],
    },
  },
});

const storeWithTeams = configureStore({
  reducer: { pokemon: pokemonReducer, teams: teamsSlice },
  preloadedState: {
    pokemon: {
      list: [...pokemonList],
      evolutionChains: [...evolutionChains],
      loading: false,
      error: null,
    },
    teams: {
      currentTeam: {
        teamName: '',
        team: emptyTeam,
        savedDate: '',
      },
      enemyTeam: emptyTeam,
      savedTeams: [savedTeam1, savedTeam2],
    },
  },
});

// --------------------------------------------------------------------------------------------------------

const renderComponentWrapped = (memory: EnhancedStore) => {
  return (
    <Provider store={memory}>
      <MemoryRouter initialEntries={['/saved-teams']}>
        <SavedTeamsPage />
      </MemoryRouter>
    </Provider>
  );
};

// fase di montaggio
describe('TeamPage mounting phase', () => {
  // SavedTeamComponent NON vengono renderizzati se non ci sono team salvati
  it('No SavedTeamComponent rendered if no saved teams', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const savedTeamsSection = screen.getByTestId(/savedTeams-title/i);
    expect(savedTeamsSection).toBeInTheDocument();

    const savedTeamComponent = screen.queryAllByTestId(/saved-team-component/i);
    expect(savedTeamComponent.length).toBe(0);

    const noSavedTeamsMessage = screen.getByText(/No saved teams found!/i);
    expect(noSavedTeamsMessage).toBeInTheDocument();
  });

  // Se ci sono team salvati, vengono renderizzati i componenti SavedTeamComponent
  it('SavedTeamComponent rendered saved teams are present', () => {
    render(renderComponentWrapped(storeWithTeams));
    const savedTeamsSection = screen.getByTestId(/savedTeams-title/i);
    expect(savedTeamsSection).toBeInTheDocument();

    const savedTeamComponents =
      screen.queryAllByTestId(/saved-team-component/i);
    expect(savedTeamComponents.length).toBe(
      storeWithTeams.getState().teams.savedTeams.length
    );

    const noSavedTeamsMessage = screen.queryByText(/No saved teams found!/i);
    expect(noSavedTeamsMessage).not.toBeInTheDocument();
  });
});

// fase interazione utente
describe('TeamPage interaction phase', () => {
  // Al click sul bottone UploadTeam, il team corrente viene impostato come team attuale
  it('SavedTeam uploaded as currentTeam at UploadTeam button click', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const savedTeamComponents =
      screen.queryAllByTestId(/saved-team-component/i);
    expect(savedTeamComponents.length).toBe(
      storeWithTeams.getState().teams.savedTeams.length
    );

    const uploadButton = within(savedTeamComponents[0]).getByRole('button', {
      name: /Upload/i,
    });
    expect(uploadButton).toBeInTheDocument();

    await userEvent.click(uploadButton);

    const newCurrentTeam = storeWithTeams.getState().teams.currentTeam;
    expect(newCurrentTeam).toEqual(savedTeam1);
  });

  // Al click sul bottone RemoveTeam, il team viene rimosso dalla lista dei team salvati
  it('SavedTeam removed from saved teams at RemoveTeam button click', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const savedTeamComponents =
      screen.queryAllByTestId(/saved-team-component/i);
    expect(savedTeamComponents.length).toBe(
      storeWithTeams.getState().teams.savedTeams.length
    );

    const removeButton = within(savedTeamComponents[0]).getByTestId(
      'removeTeam'
    );
    expect(removeButton).toBeInTheDocument();

    await userEvent.click(removeButton);

    const updatedsavedTeamComponents =
      screen.queryAllByTestId(/saved-team-component/i);

    expect(updatedsavedTeamComponents.length).toBe(
      savedTeamComponents.length - 1
    );
  });

  // Rimuovendo tutti i team salvati, non vengono più renderizzati i componenti SavedTeamComponent
  it('No SavedTeamComponent rendered if all saved teams removed', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const savedTeamComponents =
      screen.queryAllByTestId(/saved-team-component/i);

    if (savedTeamComponents.length > 0) {
      for (const team of savedTeamComponents) {
        const removeButton = within(team).getByTestId('removeTeam');
        expect(removeButton).toBeInTheDocument();
        await userEvent.click(removeButton);
      }
    }

    const updatedsavedTeamComponents =
      screen.queryAllByTestId(/saved-team-component/i);
    expect(updatedsavedTeamComponents.length).toBe(0);

    const noSavedTeamsMessage = screen.getByText(/No saved teams found!/i);
    expect(noSavedTeamsMessage).toBeInTheDocument();
  });
});
