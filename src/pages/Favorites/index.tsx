import { useEffect } from 'react';

import Character from '../../components/Character';
import { useFavorites } from '../../context/favorites';
import { useRouterContext } from '../../context/route';
import { Container } from './styles';

function Favorites() {
  const { favorites } = useFavorites();
  const { setCurrentRoute } = useRouterContext();

  useEffect(() => {
    setCurrentRoute('favorite');
  }, [setCurrentRoute]);

  return (
    <Container>
      <main>
        {Object.values(favorites).map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </main>
    </Container>
  );
}

export default Favorites;
