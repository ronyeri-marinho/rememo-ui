export interface Deck {
  uuid: string;
  name: string;
  description: string;
  cardsCount?: number | 0;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
