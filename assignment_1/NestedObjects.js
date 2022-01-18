let nestedObject = {
  data: {
    items: {
      name: "akash",
      age: 21,
      address: {
        state: "uttarakhand",
        city: "khatima",
        pincode: 262308,
      },
    },
  },
  status: "live",
};

// CLONING OBJECTS
// In JS objects are passed by reference not by value.

// WAY 1: (Shallow copy)
let clonedObjectUsingAssign = Object.assign({}, nestedObject);
clonedObjectUsingAssign.data.items.address.city = "udhampur";

console.log("Original object : ");
console.log(JSON.stringify(nestedObject));
console.log("cloned Object Assigned : ");
console.log(JSON.stringify(clonedObjectUsingAssign));

// WAY 2: (Shallow copy)
let clonedObjectUsingSpread = { ...nestedObject };
clonedObjectUsingSpread.data.items.address.state = "JAMMU";
console.log("Original object : ");
console.log(JSON.stringify(nestedObject));
console.log("cloned Object using Spread : ");
console.log(JSON.stringify(clonedObjectUsingSpread));

// WAY 3: (when you have nested object use this way) (Deep copy)
// Here we are serializing and deserializing object, heavy process better to use some recursive method.
let clonedObjectUsingJSON = JSON.parse(JSON.stringify(nestedObject));
clonedObjectUsingJSON.data.items.address = "NOT AVAILABLE";

console.log("Original object : ");
console.log(nestedObject);
console.log("cloned Object using JSON : ");
console.log(clonedObjectUsingJSON);

// JSON.stringify/parse only work with Number and String and Object literal without function or Symbol properties.
// deepClone work with all types, function and Symbol are copied by reference.

// const arrOfFunction = [
//     () => 2,
//     {
//       test: () => 3,
//     },
//     Symbol('4'),
//   ];

// console.log(arrOfFunction)
// console.log(JSON.stringify(arrOfFunction)) // JSON replace function with null and function in object with undefined
// // deepClone copy by refence function and Symbol
// // console.log(_.cloneDeep(arrOfFunction));
