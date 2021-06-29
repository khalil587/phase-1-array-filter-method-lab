function findMatching(collection, drivers){
    return collection.filter( possibleMatch => possibleMatch.toLowerCase() === drivers.toLowerCase ()
    )
}
function fuzzyMatch(collection, drivers) {
    return collection.filter( tunaFight=>
      tunaFight.toLowerCase().indexOf(drivers.toLowerCase()) === 0
    )
  }

function matchName(name, drivers){
    return name.filter(possibleMatch => possibleMatch.name === drivers);
}