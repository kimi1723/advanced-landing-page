const collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
};

const updateRecord = ([id, prop, val]) => {
  const record = collection[id];

  if (!val) return delete record[prop];

  if (prop !== 'tracks') {
    record[prop] = val;
    return;
  }

  if (!record[prop]) record[prop] = [];

  record[prop].push(val);
};

export const updateRecords = (...data) => {
  updateRecord(data);

  const collectionCopy = JSON.parse(JSON.stringify(collection));

  return collectionCopy;
};
