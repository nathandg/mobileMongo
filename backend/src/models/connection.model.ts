export default interface Connection {
  userId: string;
  name: string;
  mongoUri: string;
  isFavorite: boolean;
}