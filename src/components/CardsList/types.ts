import { PokemonData } from '../Pokemon/types.ts';

export interface CardsListProps {
  cardsList: PokemonData[];
  onCardClick: (pokemon: PokemonData) => void;
}
