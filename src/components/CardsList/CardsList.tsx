import { FC } from 'react';
import Card from '../Card';
import { PokemonData } from '../Pokemon/types.ts';
import styles from './CardsList.module.scss';
import { CardsListProps } from './types.ts';

const CardsList: FC<CardsListProps> = ({ cardsList, onCardClick }) => {
  return (
    <ul className={styles.list}>
      {cardsList.map((pokemon: PokemonData) => (
        <li key={pokemon.name} onClick={() => onCardClick(pokemon)}>
          <Card name={pokemon.name} imageSource={pokemon.image} tags={pokemon.types} />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
