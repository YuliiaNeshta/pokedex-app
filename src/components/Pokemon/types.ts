import { Tag } from '../TagList/types.ts';

export interface PokemonData {
  name: string;
  image: string;
  types: Tag[];
  stats: any[];
}

export interface PokemonProps {
  selectedPokemon: PokemonData;
  onClose: () => void;
}
