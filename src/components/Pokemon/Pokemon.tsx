import { FC } from 'react';
import CharacterList from '../CharacterList';
import TagList from '../TagList';
import styles from './Pokemon.module.scss';
import { PokemonProps } from './types';

const Pokemon: FC<PokemonProps> = ({ selectedPokemon, onClose }) => {
  const handlePopupClose = () => {
    onClose();
  };

  return (
    <div className={styles.pokemon}>
      <button className={styles.buttonClose} onClick={handlePopupClose}>
        X
      </button>
      <img className={styles.image} src={selectedPokemon.image} alt={selectedPokemon.name} />
      <h2 className={styles.heading}>{selectedPokemon.name}</h2>
      <div className={styles.content}>
        <TagList tags={selectedPokemon.types} />
        <CharacterList characters={selectedPokemon.stats} />
      </div>
    </div>
  );
};

export default Pokemon;
