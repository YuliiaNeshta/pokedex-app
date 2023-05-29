import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { PokemonData } from '../components/Pokemon/types.ts';
import { TagListProps } from '../components/TagList/types.ts';
import { API_SOURCE } from '../constants/constants';

interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}
interface PokemonListResponse {
  results: {
    name: string;
    url: string;
  }[];
}

export const useFetchPokemon = (initialLimit: number) => {
  const [cardsList, setCardsList] = useState<PokemonData[]>([]);
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response: AxiosResponse<PokemonListResponse> = await axios.get(`${API_SOURCE}?limit=${limit}`);
        const results = response.data.results;

        if (results && results.length > 0) {
          const updatedCardsList: any[] = await Promise.all(
            results.map(async pokemon => {
              const pokemonResponse: AxiosResponse<any> = await axios.get(pokemon.url);
              const imageUrl: string = pokemonResponse.data.sprites.front_default;
              const types: TagListProps[] = pokemonResponse.data.types;
              const stats: PokemonStat[] = pokemonResponse.data.stats;

              return {
                name: pokemon.name,
                image: imageUrl,
                types: types,
                stats: stats,
              };
            }),
          );
          setCardsList(updatedCardsList);
        }
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonDetails();
  }, [limit]);

  const fetchMorePokemon = () => {
    setLimit(prevLimit => prevLimit + 12);
  };

  return { cardsList, fetchMorePokemon };
};
