export function reverseArray<T>(
    array: T[],
    start: number = 0,
    end: number = array.length - 1
): T[] {
    if (array.length === 0) return array;

    if (start > end)
        throw new Error(
            "Invalid indices: Start index must be less than or equal to the end index."
        );

    if (indicesAreOutOfBounds(array, start, end))
        throw new Error(
            `Invalid start or end index. Expected indices between 0 and ${
                array.length - 1
            }.`
        );

    let left = start;
    let right = end;

    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }

    return array;
}

export function toReversedArray<T>(
    array: T[],
    start: number = 0,
    end: number = array.length - 1
): T[] {
    return reverseArray([...array], start, end);
}

export function indicesAreOutOfBounds<T>(
    array: T[],
    start: number,
    end: number
): boolean {
    return (
        start < 0 ||
        end < 0 ||
        start > array.length - 1 ||
        end > array.length - 1
    );
}
