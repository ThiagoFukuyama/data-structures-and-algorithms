import { quickSort } from "./quickSort";

let array: number[];
const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

beforeEach(() => {
    array = [3, 8, 5, 2, 4, 7, 6, 1, 10, 9];
});

describe("quickSort", () => {
    it("Should sort the array of numbers", () => {
        quickSort(array);
        expect(array).toEqual(sortedArray);
    });

    it("Should sort the selected area of the array", () => {
        quickSort(array, 3, 8);
        expect(array).toEqual([3, 8, 5, 1, 2, 4, 6, 7, 10, 9]);
    });

    it("Should maintain an empty array", () => {
        const emptyArray: number[] = [];
        quickSort(emptyArray);

        expect(emptyArray).toEqual([]);
    });

    it("Should maintain the array if it is already sorted", () => {
        const alreadySortedArray = [...sortedArray];
        quickSort(alreadySortedArray);

        expect(alreadySortedArray).toEqual(sortedArray);
    });

    it("Should maintain the array if the end is lower than the start", () => {
        quickSort(array, 4, 1);
        expect(array).toEqual([3, 8, 5, 2, 4, 7, 6, 1, 10, 9]);
    });
});
