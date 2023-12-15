function checkProperty(str, obj) {
  return str in obj;
}

const person = {
  name: 'Вася',
  age: 25,
  city: 'Saint-Petersburg'
};

console.log(checkProperty('name', person));
console.log(checkProperty('position', person)); 