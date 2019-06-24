/**
 * Merge Sort example
 */

function mergeSort(array: Array<number>, start: number = 0, end: number = array.length-1){
    if (start < end) {
        let mid = Math.floor((start + end) / 2)
        mergeSort(array, start, mid)
        mergeSort(array, mid + 1, end)
        merge(array, start, mid, end)
    }
}


function merge(array: Array<number>, start: number, mid: number, end: number) {
    let n = end - start + 1
    let tmpArray = []
    let i = start
    let j = mid + 1
    let index = 0

    while ((i <= mid) && (j <= end))
        tmpArray[index++] = (array[i] < array[j]) ? array[i++] : array[j++]

    while (i <= mid)
        tmpArray[index++] = array[i++];

    while (j <= end)
        tmpArray[index++] = array[j++];

    for (i = start; i <= end; i++)
        array[i] = tmpArray[i - start];
}


let arr = [3, 2, 4, 4, 5, 1, 0, 2, 9, 5, 4, 6, 3]
console.log(arr)
mergeSort(arr)
console.log(arr)