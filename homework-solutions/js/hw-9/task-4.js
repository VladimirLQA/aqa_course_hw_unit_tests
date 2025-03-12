1;
/*
 Objective:
 Write a function that extracts specific properties from an object
 and returns a new object containing only those properties with their corresponding values.
*/
const user = {
  name: "a",
  age: 2,
  channel: "new",
};

function getObjValues(obj, arrayOfValues) {
  const entries = [];
  for (let value of arrayOfValues) {
    entries.push([value, obj[value]]);
  }
  return Object.fromEntries(entries);
}

console.log(getObjValues(user, ["name", "age"])); // { name: 'a', age: 2 }

2;
/**
 * Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
 */

function strCount(obj) {
  let counter = 0;
  const arrValues = Object.values(obj);

  while (arrValues.length) {
    const element = arrValues.shift();
    if (typeof element === "string") {
      counter++;
    }
    if (Array.isArray(element)) {
      arrValues.unshift(...element);
      continue;
    }
    if(typeof element === "object" && !Array.isArray(element) && element !== null) {
      arrValues.unshift(Object.values(element))
    }
  }
  return counter;
}

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, "3", 4],
    fifth: "null",
    tr: {
      dream: "32",
    },
  })
); //returns 6

3;
/*
 * The function giveMeFive accepts 1 parameter, obj, which is an object.
 * Create an array (which you will eventually return).
 * Then, traverse obj, checking each key and value.
 * If the length of the key is equal to 5, then push the key to your array.
 * Separately, if the length of the value is equal to 5, then push the value to your array.
 * At the end, return your array.
 */

function giveMeFive(obj) {
  const entriesFromObj = Object.entries(obj).flat();
  return entriesFromObj.filter((element) => element.length === 5);
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" })); // ["earth","world"]
console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })); // ["Ihave","money","model"]
console.log(giveMeFive({ Pears: "than", apple: "sweet" })); //["Pears","apple","sweet"])