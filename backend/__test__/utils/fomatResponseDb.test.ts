import { collectionsFormatFromDb } from "../../src/utils/formatReponseDb";

describe("format reponse from database", () => {

  const collections = [
    {
      name: 'connections',
      type: 'collection',
      options: {},
      info: {
        readOnly: false,
      },
      idIndex: { v: 2, key: [Object], name: '_id_' }
    },
    {
      name: 'users',
      type: 'collection',
      options: {},
      info: {
        readOnly: false,
      },
      idIndex: { v: 2, key: [Object], name: '_id_' }
    }
  ];

  it("should return an array of collections", () => {
    expect(collectionsFormatFromDb(collections)).toEqual(['connections', 'users']);
  });

});