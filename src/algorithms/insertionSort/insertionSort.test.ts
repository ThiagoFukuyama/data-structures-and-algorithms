import { insertionSort } from "./insertionSort";

let array: number[];
const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

beforeEach(() => {
    array = [3, 8, 5, 2, 4, 7, 6, 1, 10, 9];
});

describe("insertionSort", () => {
    it("Should sort the array of numbers", () => {
        insertionSort(array);
        expect(array).toEqual(sortedArray);
    });

    it("Should maintain an empty array", () => {
        const emptyArray: number[] = [];
        insertionSort(emptyArray);

        expect(emptyArray).toEqual([]);
    });

    it("Should maintain the array if it is already sorted", () => {
        const alreadySortedArray = [...sortedArray];
        insertionSort(alreadySortedArray);

        expect(alreadySortedArray).toEqual(sortedArray);
    });
});
