export interface IConnection {
  userId: string;
  name: string;
  mongoUri: string;
  isFavorite: boolean;
}

export interface IConnectionInfo {
  dataBase: string;
  collections: string[];
}
