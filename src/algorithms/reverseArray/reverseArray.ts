export function reverseArray<T>(array: T[]): T[] {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }

    return array;
}

export function toReversedArray<T>(array: T[]): T[] {
    return reverseArray([...array]);
}
