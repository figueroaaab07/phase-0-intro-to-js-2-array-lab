// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
    return;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return;
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat(name) {
    return cats.slice(0,-1);
}

function removeFirstCat(name) {
    return cats.slice(1);
}
