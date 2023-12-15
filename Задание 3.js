function createEmptyObject() {
  return Object.create(null);
}

const emptyObject = createEmptyObject();
console.log(emptyObject);

console.log(Object.getPrototypeOf(emptyObject));