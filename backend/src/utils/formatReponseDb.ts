export const collectionsFormatFromDb = (collections: any) => {
  const collectionsNames: string[] = [];
  for (const collection of collections) {
    collectionsNames.push(collection.name);
  }
  return collectionsNames;
};
