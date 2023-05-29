import { FC } from 'react';
import styles from './CharacterList.module.scss';
import { CharacterListProps, Stat } from './types.ts';

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className={styles.stats}>
      {characters &&
        characters.map((stat: Stat, i: number) => (
          <div key={i} className={styles.characterLine}>
            <div className={styles.stat}>{stat.stat.name}</div>
            <div className={styles.value}>{stat.base_stat}</div>
          </div>
        ))}
    </div>
  );
};

export default CharacterList;
