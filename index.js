//write solution here

const cats = [
    "Milo",
    "Otis",
    "Garfield"
]
console.log (cats);

function destructivelyAppendCat (name){
    cats.push("Ralph");
}

function destructivelyPrependCat (name){
    cats.unshift("Bob");
}


function destructivelyRemoveLastCat (name){
    cats.pop(2);
}

function destructivelyRemoveFirstCat (name){
    cats.shift(0);
}


function appendCat(name){
    const newArray = [...cats];
    newArray.push(name)
    return newArray
  }
appendCat ("Ralph");

function prependCat(name){
    const newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}
prependCat ("Bob");

function removeLastCat(){
    const newArray = [...cats];
    newArray.splice(-1);
    return newArray;
}
removeLastCat();


function removeFirstCat(){
    const newArray = [...cats];
    newArray.splice(0,1);
    return newArray;
}
removeFirstCat ();