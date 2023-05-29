export interface TagListProps {
  tags?: Tag[];
}

export interface Tag {
  slot?: number;
  type: {
    name: string;
    url?: string;
  };
}
