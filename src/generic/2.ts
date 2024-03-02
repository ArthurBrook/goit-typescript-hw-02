type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends AllType, U extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Використання
const topObj = { name: 'ObjectA', position: 1, color: 'Red', weight: 10 };
const bottomObj = { name: 'ObjectB', position: 2, color: 'Blue', weight: 20 };

const result: AllType = compare(topObj, bottomObj);
console.log(result);

export {};
