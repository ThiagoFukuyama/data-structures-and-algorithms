export function linearSearch<T>(array: T[], cb: (value: T) => boolean): number {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            return i;
        }
    }

    return -1;
}
