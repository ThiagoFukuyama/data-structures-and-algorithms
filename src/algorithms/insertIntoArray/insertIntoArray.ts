export function insertIntoArray<T>(array: T[], data: T, index: number): T[] {
    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1];
    }

    array[index] = data;

    return array;
}
