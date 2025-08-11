import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import TeamPage from '../pages/TeamPage';
import { MemoryRouter } from 'react-router';
import { configureStore, type EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import teamsSlice from '../features/teams/teamsSlice';

import { pokemonList, evolutionChains } from './datas';
import { getTeamComponentsCount } from '../utils/mainUtils';
import type { PokeTeam } from '../types/myTypes';

const emptyTeam: PokeTeam = [null, null, null, null, null, null];
const myTeam: PokeTeam = [
  pokemonList[0],
  pokemonList[1],
  pokemonList[2],
  null,
  null,
  null,
];
const enemyTeam: PokeTeam = [
  pokemonList[3],
  pokemonList[4],
  pokemonList[5],
  pokemonList[6],
  null,
  null,
];

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
        teamName: 'Test Team',
        team: myTeam,
        savedDate: '',
      },
      enemyTeam: enemyTeam,
      savedTeams: [],
    },
  },
});

// --------------------------------------------------------------------------------------------------------

const renderComponentWrapped = (memory: EnhancedStore) => {
  return (
    <Provider store={memory}>
      <MemoryRouter initialEntries={['/team']}>
        <TeamPage />
      </MemoryRouter>
    </Provider>
  );
};

// fase di montaggio
describe('TeamPage mounting phase', () => {
  // Montaggio TeamBox per mio team
  it('TeamBox appears in page for my team', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const teamBox = screen.getByTestId(/team-box-current/i);
    expect(teamBox).toBeInTheDocument();
  });

  // Montaggio 6 slot vuoti con currentTeam vuoto
  it('Empty slots appears in page for my team when empty', async () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const teamBox = screen.getByTestId(/team-box-current/i);
    const emptySlots = await within(teamBox).findAllByTestId(
      /pokemon-emptySlot/i
    );
    expect(emptySlots.length).toBe(6);
  });

  // TeamStats NON viene montato con currentTeam vuoto
  it('TeamStats NOT appears when currentTeam is empty', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const teamStats = screen.queryByTestId(/team-stats/i);
    expect(teamStats).not.toBeInTheDocument();
  });

  // TeamAnalysis NON viene montato con currentTeam vuoto
  it('TeamAnalysis NOT appears when currentTeam is empty', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const teamAnalysis = screen.queryByTestId(/team-analysis/i);
    expect(teamAnalysis).not.toBeInTheDocument();
  });

  // SaveTeamComponent NON viene montato con currentTeam vuoto
  it('SaveTeamComponent NOT appears when currentTeam is empty', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const saveTeam = screen.queryByTestId(/save-team/i);
    expect(saveTeam).not.toBeInTheDocument();

    const saveTeamEmpty = screen.getByTestId(/team-empty/i);
    expect(saveTeamEmpty).toBeInTheDocument();
  });

  // Montaggio SelectEnemyComponent
  it('SelectEnemyComponent appears in page', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const selectEnemy = screen.getByTestId(/select-enemy/i);
    expect(selectEnemy).toBeInTheDocument();
  });

  // Montaggio TeamBox per team avversario
  it('TeamBox appears in page for enemy team', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const teamBox = screen.getByTestId(/team-box-enemy/i);
    expect(teamBox).toBeInTheDocument();
  });

  // Montaggio 6 slot vuoti con enemyTeam vuoto
  it('Empty slots appears in page for enemy team when empty', async () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const teamBox = screen.getByTestId(/team-box-enemy/i);
    const emptySlots = await within(teamBox).findAllByTestId(
      /pokemon-emptySlot/i
    );
    expect(emptySlots.length).toBe(6);
  });

  // SuggestedTeam NON viene montato con enemyTeam vuoto
  it('SuggestedTeam NOT appears when enemyTeam is empty', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const suggestedTeam = screen.queryByTestId(/suggested-team/i);
    expect(suggestedTeam).not.toBeInTheDocument();
  });

  // PokemonSlot viene montato con currentTeam impostato
  it('PokemonSlots appear in page for my team', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const teamBox = screen.getByTestId(/team-box-current/i);
    const pokeSlots = await within(teamBox).findAllByTestId(/pokemon-slot/i);

    const teamCount = getTeamComponentsCount(
      storeWithTeams.getState().teams.currentTeam.team
    );

    expect(pokeSlots.length).toBe(teamCount);

    const emptySlots = await within(teamBox).findAllByTestId(
      /pokemon-emptySlot/i
    );
    expect(emptySlots.length).toBe(6 - teamCount);
  });

  // PokemonSlot viene montato con enemyTeam impostato
  it('PokemonSlots appear in page for enemy team', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const teamBox = screen.getByTestId(/team-box-enemy/i);
    const pokeSlots = await within(teamBox).findAllByTestId(/pokemon-slot/i);

    const teamCount = getTeamComponentsCount(
      storeWithTeams.getState().teams.enemyTeam
    );

    expect(pokeSlots.length).toBe(teamCount);

    const emptySlots = await within(teamBox).findAllByTestId(
      /pokemon-emptySlot/i
    );
    expect(emptySlots.length).toBe(6 - teamCount);
  });

  // TeamStats viene montato con currentTeam impostato
  it('TeamStats appears when currentTeam is setted', () => {
    render(renderComponentWrapped(storeWithTeams));
    const teamStats = screen.queryByTestId(/team-stats/i);
    expect(teamStats).toBeInTheDocument();
  });

  // TeamAnalysis viene montato con currentTeam impostato
  it('TeamAnalysis appears when currentTeam is setted', () => {
    render(renderComponentWrapped(storeWithTeams));
    const teamAnalysis = screen.queryByTestId(/team-analysis/i);
    expect(teamAnalysis).toBeInTheDocument();
  });

  // SaveTeamComponent viene montato con currentTeam impostato
  it('SaveTeamComponent appears when currentTeam is setted', () => {
    render(renderComponentWrapped(storeWithTeams));
    const saveTeam = screen.queryByTestId(/save-team/i);
    expect(saveTeam).toBeInTheDocument();
  });

  // SuggestedTeam viene montato con enemyTeam impostato
  it('SuggestedTeam appears when enemyTeam is setted', () => {
    render(renderComponentWrapped(storeWithTeams));
    const suggestedTeam = screen.queryByTestId(/suggested-team/i);
    expect(suggestedTeam).toBeInTheDocument();
  });
});

// fase interazione utente
describe('TeamPage interaction phase', () => {
  // Bottone SaveTeam disabilitato se non è inserito un nome di almeno 3 caratteri
  it('SaveTeam button disabled if NO team name setted, almost 3 characters', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const saveTeamButton = screen.getByTestId('saveTeam-button');

    const teamNameField = screen.getByTestId('teamName-field');
    await userEvent.clear(teamNameField);

    expect(saveTeamButton).toBeDisabled();
  });

  // Bottone SaveTeam abilitato se è inserito un nome di almeno 3 caratteri
  it('SaveTeam button enabled if team name setted with almost 3 characters', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const saveTeamButton = screen.getByTestId('saveTeam-button');

    const teamNameField = screen.getByTestId('teamName-field');

    await userEvent.clear(teamNameField);
    await userEvent.type(teamNameField, 'a');
    expect(saveTeamButton).toBeDisabled();

    await userEvent.type(teamNameField, 'b');
    expect(saveTeamButton).toBeDisabled();

    await userEvent.type(teamNameField, 'c');
    expect(saveTeamButton).not.toBeDisabled();
  });

  // Rimozione Pokémon dal mio team al click su icona cestino
  it('Remove Pokémon from my team on click trash icon', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const teamBox = screen.getByTestId(/team-box-current/i);
    const pokeSlots = await within(teamBox).findAllByTestId(/pokemon-slot/i);

    const teamCount = getTeamComponentsCount(
      storeWithTeams.getState().teams.currentTeam.team
    );

    expect(pokeSlots.length).toBe(teamCount);

    const trashIcon = within(pokeSlots[0]).getByTestId('pokemon-remove');
    await userEvent.click(trashIcon);

    const updatedPokeSlots = await within(teamBox).findAllByTestId(
      /pokemon-slot/i
    );
    expect(updatedPokeSlots.length).toBe(teamCount - 1);
  });

  // Salvataggio del team al click su bottone SaveTeam
  it('Save new team at SaveTeam button click', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const saveTeamButton = screen.getByTestId('saveTeam-button');

    const teamNameField = screen.getByTestId('teamName-field');

    await userEvent.clear(teamNameField);
    await userEvent.type(teamNameField, 'New Team Name');
    expect(saveTeamButton).toBeEnabled();

    const savedTeamsCount = storeWithTeams.getState().teams.savedTeams.length;
    expect(savedTeamsCount).toBe(0);

    await userEvent.click(saveTeamButton);

    const savedTeams = storeWithTeams.getState().teams.savedTeams;
    expect(savedTeams.length).toBe(savedTeamsCount + 1);
    expect(savedTeams[0].teamName).toBe('New Team Name');
  });

  // Apparizione toast di avviso se il nome del team esiste già
  it('Shows advice toast if team name already exists on saving', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const saveTeamButton = screen.getByTestId('saveTeam-button');

    const teamNameField = screen.getByTestId('teamName-field');

    const savedTeams = storeWithTeams.getState().teams.savedTeams;
    expect(savedTeams.length).toBe(1);

    await userEvent.clear(teamNameField);
    await userEvent.type(teamNameField, savedTeams[0].teamName);
    expect(saveTeamButton).toBeEnabled();

    await userEvent.click(saveTeamButton);

    const toast = await screen.findAllByTestId(/overwriteTeam/i);
    expect(toast.length).greaterThanOrEqual(1);
  });

  // Sovrascrittura del team al click su bottone OverwriteTeam del toast
  it('Overwrite team at OverwriteTeam button click', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const saveTeamButton = screen.getByTestId('saveTeam-button');

    const teamNameField = screen.getByTestId('teamName-field');

    const teamBox = screen.getByTestId(/team-box-current/i);

    const savedTeams = storeWithTeams.getState().teams.savedTeams;
    expect(savedTeams.length).toBe(1);

    const pokeTeamCount = getTeamComponentsCount(savedTeams[0].team);

    const pokeSlots = await within(teamBox).findAllByTestId(/pokemon-slot/i);
    expect(pokeSlots.length).toBe(pokeTeamCount);

    // Rimuovo il primo Pokémon dal team
    const trashIcon = within(pokeSlots[0]).getByTestId('pokemon-remove');
    await userEvent.click(trashIcon);

    const updatedPokeSlots = await within(teamBox).findAllByTestId(
      /pokemon-slot/i
    );
    expect(updatedPokeSlots.length).toBe(pokeTeamCount - 1);

    await userEvent.clear(teamNameField);

    await userEvent.type(teamNameField, savedTeams[0].teamName);
    expect(saveTeamButton).toBeEnabled();

    await userEvent.click(saveTeamButton);

    const overwriteButtons = await screen.findAllByTestId('action-confirm');

    const actionButton = overwriteButtons[overwriteButtons.length - 1];

    expect(actionButton).toBeInTheDocument();
    expect(actionButton).toBeEnabled();

    await userEvent.click(actionButton);

    const updatedSavedTeams = storeWithTeams.getState().teams.savedTeams;
    expect(updatedSavedTeams.length).toBe(1);
    expect(updatedSavedTeams[0].teamName).toBe(savedTeams[0].teamName);
    expect(getTeamComponentsCount(updatedSavedTeams[0].team)).toBe(
      pokeTeamCount - 1
    );
  });

  // Pulizia del team al click su bottone CleanTeam
  it('Clean team at CleanTeam button click', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const cleanTeamButton = screen.getByTestId('cleanTeam-button');

    const teamBox = screen.getByTestId(/team-box-current/i);
    const pokeSlots = await within(teamBox).findAllByTestId(/pokemon-slot/i);

    const teamCount = getTeamComponentsCount(
      storeWithTeams.getState().teams.currentTeam.team
    );

    expect(pokeSlots.length).toBe(teamCount);

    await userEvent.click(cleanTeamButton);

    const updatedPokeSlots = within(teamBox).queryAllByTestId(/pokemon-slot/i);
    expect(updatedPokeSlots.length).toBe(0);

    const teamNameField = screen.queryByTestId('teamName-field');
    expect(teamNameField).toBeNull();
  });

  // Bottone AddEnemy disabilitato se non è selezionato un Pokémon
  it('AddEnemy button disabled if NO Pokémon selected', () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const enemySelect = screen.getByTestId('enemy-selector');
    expect(enemySelect).toBeInTheDocument();

    const enemySelectValue = within(enemySelect).getByText('Select a Pokémon');
    expect(enemySelectValue).toBeInTheDocument();

    const addEnemyButton = screen.getByTestId('addEnemy-button');
    expect(addEnemyButton).toBeDisabled();
  });

  // Bottone AddEnemy abilitato se è selezionato un Pokémon
  it('AddEnemy button enabled if Pokémon selected', async () => {
    render(renderComponentWrapped(emptyStoreLoaded));
    const enemySelect = screen.getByTestId('enemy-selector');
    expect(enemySelect).toBeInTheDocument();

    await userEvent.click(within(enemySelect).getByRole('button'));
    // dalla lista di Pokémon, seleziono Charizard
    await userEvent.click(within(enemySelect).getByText(pokemonList[5].name));

    const addEnemyButton = screen.getByTestId('addEnemy-button');
    expect(addEnemyButton).toBeEnabled();
  });

  // Aggiunta Pokémon al team avversario al click su bottone AddEnemy
  it('Pokémon added to enemy team by AddEnemy button click', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const enemySelect = screen.getByTestId('enemy-selector');
    expect(enemySelect).toBeInTheDocument();

    await userEvent.click(within(enemySelect).getByRole('button'));
    // dalla lista di Pokémon, seleziono Charizard
    await userEvent.click(within(enemySelect).getByText(pokemonList[5].name));

    const addEnemyButton = screen.getByTestId('addEnemy-button');
    expect(addEnemyButton).toBeEnabled();

    const teamBox = screen.getByTestId(/team-box-enemy/i);
    expect(teamBox).toBeInTheDocument();

    const pokeSlots = await within(teamBox).findAllByTestId(/pokemon-slot/i);
    console.log(pokeSlots.length);

    await userEvent.click(addEnemyButton);

    const updatedPokeSlots = await within(teamBox).findAllByTestId(
      /pokemon-slot/i
    );
    console.log(updatedPokeSlots.length);
    expect(updatedPokeSlots.length).toBe(pokeSlots.length + 1);
  });

  // Rimozione Pokémon dal team avversario al click su icona cestino
  it('Remove Pokémon from enemy team on click trash icon', async () => {
    render(renderComponentWrapped(storeWithTeams));
    const teamBox = screen.getByTestId(/team-box-enemy/i);
    const pokeSlots = await within(teamBox).findAllByTestId(/pokemon-slot/i);

    const teamCount = getTeamComponentsCount(
      storeWithTeams.getState().teams.enemyTeam
    );

    expect(pokeSlots.length).toBe(teamCount);

    const trashIcon = within(pokeSlots[0]).getByTestId('pokemon-remove');
    await userEvent.click(trashIcon);

    const updatedPokeSlots = await within(teamBox).findAllByTestId(
      /pokemon-slot/i
    );
    expect(updatedPokeSlots.length).toBe(teamCount - 1);
  });
});
