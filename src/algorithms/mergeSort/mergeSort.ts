export function mergeSort(array: number[]): number[] {
    const length = array.length;

    if (length <= 1) return array;

    const middle = Math.floor(length / 2);

    const leftHalf: number[] = [];
    const rightHalf: number[] = [];

    for (let i = 0; i < middle; i++) {
        leftHalf[i] = array[i];
    }

    for (let i = middle; i < length; i++) {
        rightHalf[i - middle] = array[i];
    }

    mergeSort(leftHalf);
    mergeSort(rightHalf);

    return merge(array, leftHalf, rightHalf);
}

function merge(
    array: number[],
    leftHalf: number[],
    rightHalf: number[]
): number[] {
    const leftLength = leftHalf.length;
    const rightLength = rightHalf.length;

    let i = 0,
        l = 0,
        r = 0;

    while (l < leftLength && r < rightLength) {
        if (leftHalf[l] < rightHalf[r]) {
            array[i] = leftHalf[l];
            l++;
        } else {
            array[i] = rightHalf[r];
            r++;
        }
        i++;
    }

    while (l < leftLength) {
        array[i] = leftHalf[l];
        l++;
        i++;
    }

    while (r < rightLength) {
        array[i] = rightHalf[r];
        r++;
        i++;
    }

    return array;
}
