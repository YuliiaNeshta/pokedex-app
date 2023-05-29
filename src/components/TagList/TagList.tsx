import cn from 'classnames';
import { FC } from 'react';
import { POKEMON_TYPES_COLORS } from '../../constants/constants';
import styles from './TagList.module.scss';
import { Tag, TagListProps } from './types';

const TagList: FC<TagListProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags &&
        tags.map((tag: Tag, i: number) => (
          <span
            key={i}
            className={cn(styles.tagWrapper, styles[tag.type?.name])}
            style={{ backgroundColor: POKEMON_TYPES_COLORS[tag.type.name] }}
          >
            {tag.type.name}
          </span>
        ))}
    </div>
  );
};

export default TagList;
