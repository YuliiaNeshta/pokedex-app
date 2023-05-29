export interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface CharacterListProps {
  characters: Stat[] | undefined;
}
