import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import HeroComponent from '../components/HeroComponent';
import { MemoryRouter, useLocation } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonReducer from '../features/pokemon/pokemonSlice';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid='location-display'>{location.pathname}</div>;
}

// store da passare per il render che fornisce struttura dati coerente a quelli nella memoria globale di Redux
const store = configureStore({
  reducer: { pokemon: pokemonReducer },
  preloadedState: {
    pokemon: {
      list: [],
      evolutionChains: [],
      loading: false,
      error: null,
    },
  },
});

const renderComponentWrapped = () => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <HeroComponent />
      </MemoryRouter>
    </Provider>
  );
};

//fase di montaggio
describe('HeroComponent mounting phase', () => {
  // Montaggio del titolo del componente
  it('Component appears in the page', () => {
    render(renderComponentWrapped());

    expect(screen.getByText(/PokeTeam Builder/i)).toBeInTheDocument();
  });

  // Montaggio del bottone per pagina Explore
  it('Explore button appears in the page', () => {
    render(renderComponentWrapped());

    expect(screen.getByTestId(/explore-button/i)).toBeInTheDocument();
  });

  // Montaggio del bottone per pagina Team
  it('Team button appears in the page', () => {
    render(renderComponentWrapped());

    expect(screen.getByTestId(/team-button/i)).toBeInTheDocument();
  });

  // Montaggio del bottone per pagina SavedTeams
  it('SavedTeam button appears in the page', () => {
    render(renderComponentWrapped());

    expect(screen.getByTestId(/saved-button/i)).toBeInTheDocument();
  });
});

//fase interazione utente
describe('HeroComponent interaction phase', async () => {
  // Controllo funzionamento al click del bottone Explore
  it('Explore button click test', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/team']}>
          <HeroComponent />
          <LocationDisplay />
        </MemoryRouter>
      </Provider>
    );

    const exploreButton = screen.getByTestId(/explore-button/i);
    await userEvent.click(exploreButton);

    expect(screen.getByTestId('location-display')).toHaveTextContent('/');
  });

  // Controllo funzionamento al click del bottone Team
  it('Team button click test', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <HeroComponent />
          <LocationDisplay />
        </MemoryRouter>
      </Provider>
    );

    const teamButton = screen.getByTestId(/team-button/i);
    await userEvent.click(teamButton);

    expect(screen.getByTestId('location-display')).toHaveTextContent('/team');
  });

  // Controllo funzionamento al click del bottone SavedTeam
  it('SavedTeam button click test', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <HeroComponent />
          <LocationDisplay />
        </MemoryRouter>
      </Provider>
    );

    const savedTeamButton = screen.getByTestId(/saved-button/i);
    await userEvent.click(savedTeamButton);

    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/saved-teams'
    );
  });
});
