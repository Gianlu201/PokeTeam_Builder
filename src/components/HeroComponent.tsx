import { useLocation, useNavigate } from 'react-router';
import { Button } from './ui/button';

const HeroComponent = () => {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <div
        className='min-h-[200px] h-[50vh] bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: 'url(/images/wallpaper.jpg)' }}
      >
        <div className='w-full h-full flex flex-col items-center justify-center bg-black/50'>
          <h1 className='text-7xl font-black text-red-600'>PokeTeam Builder</h1>
          <p className='text-white text-xl font-medium max-w-[500px]'>
            Explore the Pokémon world, discover new creatures and build the
            perfect team for your adventure!
          </p>
          <div className='bg-white/20 text-white rounded-lg p-0.5'>
            <Button
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              className='my-0.5 ms-0.5'
              onClick={() => navigate('/')}
            >
              Explore
            </Button>
            <Button
              variant={location.pathname === '/team' ? 'default' : 'ghost'}
              className='my-0.5'
              onClick={() => navigate('/team')}
            >
              Team
            </Button>
            <Button
              variant={
                location.pathname === '/saved-teams' ? 'default' : 'ghost'
              }
              className='my-0.5 me-0.5'
              onClick={() => navigate('/saved-teams')}
            >
              Saved
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
