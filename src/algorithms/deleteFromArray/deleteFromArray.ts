export function deleteFromArray<T>(array: T[], index: number): T[] {
    if (array.length === 0 || index > array.length - 1 || index < 0) {
        return array;
    }

    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }

    array.length--;

    return array;
}
