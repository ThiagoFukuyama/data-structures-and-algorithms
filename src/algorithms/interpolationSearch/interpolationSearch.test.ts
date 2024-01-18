import { interpolationSearch } from "./interpolationSearch";

let array: number[];

beforeEach(() => {
    array = [
        3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57,
        60,
    ];
});

describe("interpolationSearch", () => {
    it("Should return the index that matches the given element", () => {
        const index = interpolationSearch(array, 39);
        expect(index).toEqual(12);
    });

    it("Should return the index of the first element", () => {
        const index = interpolationSearch(array, 3);
        expect(index).toEqual(0);
    });

    it("Should return the index of the last element", () => {
        const index = interpolationSearch(array, 60);
        expect(index).toEqual(19);
    });

    it("Should return -1 when no element is matched", () => {
        const index = interpolationSearch(array, 500);
        expect(index).toEqual(-1);
    });
});
