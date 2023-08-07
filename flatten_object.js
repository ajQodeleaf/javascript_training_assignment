// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)

function flatten(unflatObject) {
  // An empty object named result, which will store the flattened key-value pairs.
  let result = {};

  // The function uses a for...in loop to iterate through the properties of the unflatObject.
  for (const i in unflatObject) {
    // For each property (referred to as i in the loop), it checks if the value associated with the property is of type "object" using the typeof operator. If the value is an object, it means the property is nested.
    if (typeof unflatObject[i] === "object") {
      // If the property is nested, the function recursively calls itself (flatten(unflatObject[i])) with the nested object as an argument. The result of the recursive call is stored in a variable named temp.
      const temp = flatten(unflatObject[i]);

      // The function then uses another for...in loop to iterate through the key-value pairs in the temp object, which contains the flattened representation of the nested object.
      for (const j in temp) {
        // Inside the inner loop, the function constructs the flattened keys by concatenating the parent key i with a dot and the child key j, resulting in keys like "parentKey.childKey".
        // The corresponding value for each flattened key is assigned from the temp object to the result object.
        result[i + "." + j] = temp[j];
      }
    } else {
      // If the property value is not an object (i.e., a primitive type like boolean, string, number, etc.), the function simply assigns the value directly to the result object with the original key i.
      result[i] = unflatObject[i];
    }
  }

  // After processing all properties in the unflatObject, the function returns the result object, which now contains the flattened representation of the input object.
  return result;
}

console.log(
  "Flattened object = ",
  flatten({
    flatJSON: false,
    i: { am: { not: { so: { flat: true, unflat: false } }, a: "tree" } },
    dates: [{ day: 1 }, { day: 8947 }],
  })
);
