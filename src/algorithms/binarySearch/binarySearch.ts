export function binarySearch(array: number[], value: number): number {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);

        if (value === array[middle]) {
            return middle;
        }

        if (value < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}
