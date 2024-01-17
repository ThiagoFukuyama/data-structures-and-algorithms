import { binarySearch } from "./binarySearch";

let array: number[];

beforeEach(() => {
    array = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
});

describe("binarySearch", () => {
    it("Should return the index that matches the given element", () => {
        const index = binarySearch(array, 10);
        expect(index).toEqual(9);
    });

    it("Should return the index of the first element", () => {
        const index = binarySearch(array, 1);
        expect(index).toEqual(0);
    });

    it("Should return the index of the last element", () => {
        const index = binarySearch(array, 20);
        expect(index).toEqual(19);
    });

    it("Should return -1 when no element is matched", () => {
        const index = binarySearch(array, 500);
        expect(index).toEqual(-1);
    });
});
