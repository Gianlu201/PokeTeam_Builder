import { BrowserRouter, Route, Routes } from 'react-router';
import HeroComponent from './components/HeroComponent';
import ExplorePage from './pages/ExplorePage';
import TeamPage from './pages/TeamPage';
import SavedTeamsPage from './pages/SavedTeamsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeroComponent />
        <Routes>
          <Route path='/' element={<ExplorePage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/saved-teams' element={<SavedTeamsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
