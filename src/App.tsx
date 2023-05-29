import React, { useState } from 'react';
import styles from './App.module.scss';
import Button from './components/Button';
import CardsList from './components/CardsList';
import Pokemon from './components/Pokemon';
import { PokemonData } from './components/Pokemon/types.ts';
import { useFetchPokemon } from './hooks/useFetchData';

const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(null);
  const { cardsList, fetchMorePokemon } = useFetchPokemon(12);

  const handlePopupClose = () => {
    setSelectedPokemon(null);
  };

  const handleCardClick = (pokemon: PokemonData) => {
    setSelectedPokemon(pokemon);
  };

  if (!cardsList.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Pokedex</h2>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <CardsList onCardClick={handleCardClick} cardsList={cardsList} />
          <Button onClick={fetchMorePokemon} className={styles.buttonMore}>
            Load more
          </Button>
        </div>
        <div className={styles.pokemonsContainer}>
          {selectedPokemon && <Pokemon selectedPokemon={selectedPokemon} onClose={handlePopupClose} />}
        </div>
      </div>
    </div>
  );
};

export default App;
