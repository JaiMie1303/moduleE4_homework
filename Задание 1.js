function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
}

let person = {
  name: "Петя",
  age: 19,
  city: "San Francisco"
};

printOwnProperties(person);