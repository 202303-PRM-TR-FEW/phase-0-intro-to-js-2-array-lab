const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function appendCat(name) {
  let newArr = [...cats];
  newArr.push(name);
  return newArr;
}
function prependCat(name) {
    let newArr = [...cats];
    newArr.unshift(name);
    return newArr;
  }

  function removeLastCat(name) {
    let newArr = [...cats];
    newArr.pop(name);
    return newArr;
  }
  function removeFirstCat(name) {
    let newArr = [...cats];
    newArr.shift(name);
    return newArr;
  }