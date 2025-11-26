export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
}

export enum GameGenre {
  ACTION = 'Action',
  RPG = 'RPG',
  STRATEGY = 'Strategy',
  SPORTS = 'Sports',
  INDIE = 'Indie'
}