interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const stringKeyValuePair: KeyValuePair<string, number> = {
  key: 'example',
  value: 42,
};

const numberKeyValuePair: KeyValuePair<number, boolean> = {
  key: 123,
  value: true,
};

export {};