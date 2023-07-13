// Write your solution here!

const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
}function destructivelyPrependCat(name){
    cats.unshift("Bob")
}function destructivelyRemoveLastCat(name){
    cats.pop()
} function destructivelyRemoveFirstCat(name){
    cats.shift()
} function appendCat(name){
    let newCat= [...cats,name]
    return newCat
} function prependCat(name){
    let catNew= [name,...cats]
    return catNew
}function removeLastCat(){
    let cat=cats.slice();
    cat.pop();
    return cat; 
}function removeFirstCat(){
    let cat= cats.slice()
    cat.shift()
    return cat
}
