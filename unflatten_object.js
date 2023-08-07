// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format

function unflatten(flatObject) {
  // An empty object named unflatObject, which will store the unflattened nested representation.
  const unflatObject = {};

  // The function uses a for...in loop to iterate through the properties of the flatObject.
  for (const key in flatObject) {
    // For each property, it extracts the value and the dot-separated keys by using the key.split('.') method.
    if (flatObject.hasOwnProperty(key)) {
      const value = flatObject[key];
      const keys = key.split(".");

      let currentObj = unflatObject;

      // To recreate the nested structure, the function uses a loop that iterates through all the keys except the last one. It ensures that each intermediate object exists in the unflatObject hierarchy.
      for (let i = 0; i < keys.length - 1; i++) {
        const currentKey = keys[i];
        // Inside the loop, it checks if the current key exists in the currentObj.
        if (!currentObj.hasOwnProperty(currentKey)) {
          // If it doesn't, it creates an empty object or an empty array based on whether the next key is a numeric index (indicating an array) or not.
          const nextKey = keys[i + 1];
          currentObj[currentKey] = !isNaN(parseInt(nextKey)) ? [] : {};
        }

        // It then moves the currentObj reference one level deeper based on the current key.
        currentObj = currentObj[currentKey];
      }

      const lastKey = keys[keys.length - 1];

      // After creating the necessary nested structure, the function assigns the value to the last key in the currentObj.
      currentObj[lastKey] = value;
    }
  }

  return unflatObject;
}

// Test the function
const flattenedObject = {
  flatJSON: false,
  "i.am.not.so.flat": true,
  "i.am.not.so.unflat": false,
  "i.a": "tree",
  "dates.0.day": 1,
  "dates.1.day": 8947,
};

const unflattenedObject = unflatten(flattenedObject);
console.log(unflattenedObject);
