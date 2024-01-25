import { selectionSort } from "./selectionSort";

let array: number[];
const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

beforeEach(() => {
    array = [3, 8, 5, 2, 4, 7, 6, 1, 10, 9];
});

describe("selectionSort", () => {
    it("Should sort the array of numbers", () => {
        selectionSort(array);
        expect(array).toEqual(sortedArray);
    });

    it("Should maintain an empty array", () => {
        const emptyArray: number[] = [];
        selectionSort(emptyArray);

        expect(emptyArray).toEqual([]);
    });

    it("Should maintain the array if it is already sorted", () => {
        const alreadySortedArray = [...sortedArray];
        selectionSort(alreadySortedArray);

        expect(alreadySortedArray).toEqual(sortedArray);
    });
});
