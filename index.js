let unsortedArray = [2, 1, 3, 8, 0, 7, 5, 9, 4, 6]

function findMinAndRemove(firstHalf, secondHalf) {
    let minfirstHalf = firstHalf[0]
    let minsecondHalf = secondHalf[0]
   
    if (minfirstHalf < minsecondHalf){
      return firstHalf.shift()
    } else {
      return secondHalf.shift()
    }
}

function merge(firstHalf, secondHalf){
    let sorted = []
    while (firstHalf.length != 0 && secondHalf.length != 0) {
      let currentMin = findMinAndRemove(firstHalf, secondHalf)
      sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
    let midpoint = array.length /  2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array
    } else {
        merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}

console.log(mergeSort(unsortedArray))