export function quickSort(
    array: number[],
    start: number = 0,
    end: number = array.length - 1
): number[] {
    if (end <= start) return array;

    const pivot = partition(array, start, end);

    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);

    return array;
}

function partition(
    array: number[],
    start: number = 0,
    end: number = array.length - 1
): number {
    const pivot = array[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    i++;
    [array[i], array[end]] = [array[end], array[i]];

    return i;
}
