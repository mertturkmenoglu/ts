/**
 * QuickSort example
 */

function quickSort(array: Array<number>, begin: number = 0, end: number = array.length-1) {
    if (begin < end) {
        let pIndex = partition(array, begin, end)
        quickSort(array, begin, pIndex - 1)
        quickSort(array, pIndex + 1, end)
    }
}

function partition(array: Array<number>, begin: number, end: number): number {
    let pivot = array[end]
    let i = begin - 1

    for (let j = begin; j <= end - 1; j++) {
        if (array[j] <= pivot) {
            i++
            let tmp = array[i]
            array[i] = array[j]
            array[j] = tmp
        }
    }

    i++

    let tmp = array[i]
    array[i] = array[end]
    array[end] = tmp

    return i
}


let arr_qs = [3, 2, 4, 4, 5, 1, 0, 2, 9, 5, 4, 6, 3]
console.log(arr_qs)
quickSort(arr_qs)
console.log(arr_qs)

