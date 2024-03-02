function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

// Використання
const mergedObj = merge({ name: 'John', age: 30 }, { city: 'New York' });
console.log(mergedObj);

export {};
