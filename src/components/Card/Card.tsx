import { FC } from 'react';
import TagList from '../TagList';
import styles from './Card.module.scss';
import { CardProps } from './types.ts';

const Card: FC<CardProps> = ({ name, imageSource, tags }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageSource} title={name} alt={name} />
      <div className={styles.content}>
        <h2 className={styles.header}>{name}</h2>
        {tags && <TagList tags={tags} />}
      </div>
    </div>
  );
};

export default Card;
