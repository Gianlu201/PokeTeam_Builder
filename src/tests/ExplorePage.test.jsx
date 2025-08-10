import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ExplorePage from '../pages/ExplorePage';
import { MemoryRouter } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import teamsSlice from '../features/teams/teamsSlice';

import { pokemonList, evolutionChains } from './datas';

// stores da passare per il render che fornisce struttura dati coerente a quelli nella memoria globale di Redux
const emptyStoreLoading = configureStore({
  reducer: { pokemon: pokemonReducer, teams: teamsSlice },
  preloadedState: {
    pokemon: {
      list: [],
      evolutionChains: [],
      loading: true,
      error: null,
    },
    teams: {
      currentTeam: {
        teamName: '',
        team: [null, null, null, null, null, null],
        savedDate: '',
      },
      enemyTeam: [],
      savedTeams: [],
    },
  },
});

const emptyStoreLoaded = configureStore({
  reducer: { pokemon: pokemonReducer, teams: teamsSlice },
  preloadedState: {
    pokemon: {
      list: [],
      evolutionChains: [],
      loading: false,
      error: null,
    },
    teams: {
      currentTeam: {
        teamName: '',
        team: [null, null, null, null, null, null],
        savedDate: '',
      },
      enemyTeam: [],
      savedTeams: [],
    },
  },
});

const store = configureStore({
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
        team: [null, null, null, null, null, null],
        savedDate: '',
      },
      enemyTeam: [],
      savedTeams: [],
    },
  },
});

// --------------------------------------------------------------------------------------------------------

const renderComponentWrapped = (memory) => {
  return (
    <Provider store={memory}>
      <MemoryRouter initialEntries={['/']}>
        <ExplorePage />
      </MemoryRouter>
    </Provider>
  );
};

// fase di montaggio
describe('ExplorePage mounting phase', () => {
  // Montaggio dei bottoni di menù (4 bottoni)
  it('Menu buttons appear in page', () => {
    render(renderComponentWrapped(emptyStoreLoading));

    const buttons = screen.getAllByTestId(/menu-button/i);

    expect(buttons.length === 4);
  });

  // Montaggio della barra di ricerca
  it('Searchbar appears in page', () => {
    render(renderComponentWrapped(emptyStoreLoading));

    expect(screen.getByTestId(/poke-searchbar/i)).toBeInTheDocument();
  });

  // Montaggio della select per filtri
  it('Searchbar appears in page', () => {
    render(renderComponentWrapped(emptyStoreLoading));

    expect(screen.getByTestId(/pokeType-filter/i)).toBeInTheDocument();
  });

  // Montaggio del tasto per pulire la ricerca
  it('Searchbar appears in page', () => {
    render(renderComponentWrapped(emptyStoreLoading));

    expect(screen.getByTestId(/cleanSearch-button/i)).toBeInTheDocument();
  });

  // Componente PokemonBox non si monta se i Pokémon non vengono trovati
  it('PokeBox appears in page when Pokémon were founded', () => {
    render(renderComponentWrapped(emptyStoreLoaded));

    const pokeBox = screen.queryByTestId(/pokemonBox/i);

    expect(pokeBox).toBeNull();
  });

  // Montaggio del loader quando si avvia la pagina
  it('PokeLoader appears in page at start', () => {
    render(renderComponentWrapped(emptyStoreLoading));

    expect(screen.getByTestId(/poke-loader/i)).toBeInTheDocument();
  });

  // Montaggio della modale per informazioni sul Pokémon ma non visibile
  it('PokeInfo modal is NOT visible initially', () => {
    render(renderComponentWrapped(emptyStoreLoaded));

    const modalTitle = screen.queryByTestId(/pokemonInfo-modal/i);

    expect(modalTitle).toBeNull();
  });

  // Montaggio della modale multifunzionale ma non visibile
  it('Multifunctional modal is NOT visible initially', () => {
    render(renderComponentWrapped(emptyStoreLoaded));

    const modalTitle = screen.queryByTestId(/multifunctional-modal/i);

    expect(modalTitle).toBeNull();
  });

  // Montaggio della modale di combattimento ma non visibile
  it('Fight modal is NOT visible initially', () => {
    render(renderComponentWrapped(emptyStoreLoaded));

    const modalTitle = screen.queryByTestId(/fight-modal/i);

    expect(modalTitle).toBeNull();
  });

  // Smontaggio del loader quando i Pokémon vengono trovati
  it('PokeLoader disappears from page when Pokémons were founded', () => {
    render(renderComponentWrapped(store));

    expect(screen.queryByTestId(/poke-loader/i)).toBeNull();
  });

  // Montaggio componente PokemonBox se i Pokémon vengono trovati
  it('PokeBox appears in page when Pokémon were founded', () => {
    render(renderComponentWrapped(store));

    expect(screen.getByTestId(/pokemonBox/i)).toBeInTheDocument();
  });

  // Montaggio componente PokemonCard se i Pokémon vengono trovati
  it('PokeCard appears in page when Pokémon were founded', async () => {
    render(renderComponentWrapped(store));

    const pokeCards = await screen.findAllByTestId(/pokemon-card/i);
    expect(pokeCards.length).toBeGreaterThan(0);
  });
});

// fase interazione utente
describe('ExplorePage interaction phase', async () => {
  // Apertura modale informazioni Pokémon al click di una card
  it('PokeInfo modal appears in page when PokeCard clicked', async () => {
    render(renderComponentWrapped(store));

    const pokeCards = await screen.findAllByTestId(/pokemon-card/i);

    expect(pokeCards.length).greaterThan(0);

    await userEvent.click(pokeCards[0]);

    expect(screen.getByTestId(/pokemonInfo-modal/i)).toBeInTheDocument();
  });

  // Aggiunta del Pokémon al team al click del pulsante nella card
  it('Pokémon added in currentTeam when button on card clicked', async () => {
    render(renderComponentWrapped(store));

    const pokeCards = await screen.findAllByTestId(/pokemon-card/i);

    if (pokeCards.length === 0) {
      expect(false);
    }

    const addButton = within(pokeCards[0]).getByRole('button');

    await userEvent.click(addButton);

    expect(store.getState().teams.currentTeam.team[0]).not.toBeNull();
  });

  // Ricerca Pokémon tramite barra di ricerca (1 risultato esatto)
  it('Search bulbasaur to obtain exactly 1 result', async () => {
    render(renderComponentWrapped(store));

    const searchBar = screen.getByTestId(/poke-searchbar/i);

    await userEvent.type(searchBar, 'bulbasaur');

    const pokeCards = await screen.findAllByTestId(/pokemon-card/i);

    expect(pokeCards.length).toBe(1);
  });

  // Ricerca Pokémon tramite barra di ricerca (ricerca senza risultati)
  it('Search qwerty to obtain no result', async () => {
    render(renderComponentWrapped(store));

    const searchBar = screen.getByTestId(/poke-searchbar/i);

    await userEvent.type(searchBar, 'qwerty');

    const pokeCards = screen.queryAllByTestId(/pokemon-card/i);

    expect(pokeCards.length).toBe(0);
  });

  // Ricerca Pokémon per tipi tramite filtro (ricerca fruttuosa)
  it('Search Pokémons by type "grass" to obtain results', async () => {
    render(renderComponentWrapped(store));

    const typeSelect = screen.getByTestId(/pokeType-filter/i);
    await userEvent.click(within(typeSelect).getByRole('button'));

    await userEvent.click(within(typeSelect).getByText('grass'));

    const pokeCards = await screen.findAllByTestId(/pokemon-card/i);

    expect(pokeCards.length).toBeGreaterThan(0);
  });

  // Ricerca Pokémon per tipi tramite filtro (ricerca infruttuosa)
  it('Search Pokémons by type "dragon" to obtain NO results', async () => {
    render(renderComponentWrapped(store));

    const typeSelect = screen.getByTestId(/pokeType-filter/i);
    await userEvent.click(within(typeSelect).getByRole('button'));

    await userEvent.click(within(typeSelect).getByText('dragon'));

    const pokeCards = screen.queryAllByTestId(/pokemon-card/i);

    expect(pokeCards.length).toBe(0);
  });

  // Pulizia ricerca tramite pulsante apposito
  it('Clean search by click CleanSearch button', async () => {
    render(renderComponentWrapped(store));

    const typeSelect = screen.getByTestId(/pokeType-filter/i);
    await userEvent.click(within(typeSelect).getByRole('button'));
    await userEvent.click(within(typeSelect).getByText('grass'));

    const searchBar = screen.getByTestId(/poke-searchbar/i);
    await userEvent.type(searchBar, 'bulbasaur');

    expect(
      (await screen.findAllByTestId(/pokemon-card/i)).length
    ).greaterThanOrEqual(1);

    const cleanSearch = screen.getByTestId(/cleanSearch-button/i);
    await userEvent.click(cleanSearch);

    expect((await screen.findAllByTestId(/pokemon-card/i)).length).toBe(
      pokemonList.length
    );
  });

  // Apertura modale al click del bottone per Pokémon Random
  it('PokeInfo modal appears in page when RandomPokemon button clicked', async () => {
    render(renderComponentWrapped(store));

    expect(screen.queryByTestId(/pokemonInfo-modal/i)).not.toBeInTheDocument();

    const randomButton = screen.getByText(/Random Pokémon/i);

    await userEvent.click(randomButton);

    expect(screen.getByTestId(/pokemonInfo-modal/i)).toBeInTheDocument();
  });

  // Apertura modale multifunzionale (quiz) al click del proprio bottone
  it('Quiz modal appears in page when Quiz-button clicked', async () => {
    render(renderComponentWrapped(store));

    expect(
      screen.queryByTestId(/multifunctional-modal/i)
    ).not.toBeInTheDocument();

    const quizButton = screen.getByText(/Pokè Quiz/i);

    await userEvent.click(quizButton);

    const modal = await screen.findByTestId(/multifunctional-modal/i);

    expect(modal).toBeInTheDocument();
  });

  // Apertura modale multifunzionale (efficacia tipi) al click del proprio bottone
  it('Type effectiveness modal appears in page when TypeEffectiveness-button clicked', async () => {
    render(renderComponentWrapped(store));

    expect(
      screen.queryByTestId(/multifunctional-modal/i)
    ).not.toBeInTheDocument();

    const typeEffectivenessButton = screen.getByText(/Types Effectiveness/i);

    await userEvent.click(typeEffectivenessButton);

    const modal = await screen.findByTestId(/multifunctional-modal/i);

    expect(modal).toBeInTheDocument();
  });

  // Apertura modale Combattimento al click del proprio bottone
  it('FightModal appears in page when Fight-button clicked', async () => {
    render(renderComponentWrapped(store));

    expect(screen.queryByTestId(/fight-modal/i)).not.toBeInTheDocument();

    const fightButton = screen.getByText(/Fight/i);

    await userEvent.click(fightButton);

    const modal = await screen.findByTestId(/fight-modal/i);

    expect(modal).toBeInTheDocument();
  });
});
