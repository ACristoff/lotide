const findKey = (objectparam, callback) => {
  for (let keys in objectparam) {
    if (callback(objectparam[keys])) {
      return keys
    }
  }
}


// //findKeyByValue function
// const findKeyByValue = (showlist, show) => {
//   for (let genres in showlist) {
//     if (show === showlist[genres] ) {
//       return genres
//     }
//   }
// }


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"
