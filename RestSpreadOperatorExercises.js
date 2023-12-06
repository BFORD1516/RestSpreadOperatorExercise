//function filterOutOdds() {
//var nums = Array.prototype.slice.call(arguments);
//return nums.filter(function(num) {
//return num % 2 === 0
// });
//}

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

//findMin(1,4,12,-3) // -3
//findMin(1,-1) // -1
//findMin(3,1) // 1

function findMin(...args) {
  if (args.length === 0) {
    return undefined;
  }

  return Math.min(...args);
}

//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
function mergeObjects(obj1, obj2) {
  const mergedObject = {};

  for (const key in obj1) {
    mergedObject[key] = obj1[key];
  }

  for (const key in obj2) {
    mergedObject[key] = obj2[key];
  }

  return mergedObject;
}

//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]
function doubleAndReturnArgs(arr, ...args) {
  // Double each value in the original array
  const doubledArray = arr.map((value) => value * 2);

  // Double each additional argument and concatenate with the original array
  const resultArray = [...doubledArray, ...args.map((value) => value * 2)];

  return resultArray;
}

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
  from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({ ...obj, [key]: val });
