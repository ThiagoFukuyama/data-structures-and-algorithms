import { reverseArray } from "../reverseArray/reverseArray";

export function rotateArray<T>(array: T[], steps: number) {
    const k = Math.floor(Math.abs(steps)) % array.length;

    if (k === 0 || isNaN(k)) {
        return array;
    }

    const direction = steps > 0 ? "right" : "left";

    reverseArray(array);

    if (direction === "right") {
        reverseArray(array, 0, k - 1);
        reverseArray(array, k, array.length - 1);
    } else {
        reverseArray(array, 0, array.length - 1 - k);
        reverseArray(array, array.length - k, array.length - 1);
    }

    return array;
}
