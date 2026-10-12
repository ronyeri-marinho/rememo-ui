export interface Deck {
  uuid: string;
  name: string;
  description: string;
  cardsCount: number;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
