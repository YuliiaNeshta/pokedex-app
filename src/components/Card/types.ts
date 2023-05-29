import { Tag } from '../TagList/types.ts';

export interface CardProps {
  name: string;
  imageSource: string;
  tags?: Tag[];
}
