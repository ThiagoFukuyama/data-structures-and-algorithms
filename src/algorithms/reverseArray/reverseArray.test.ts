import { reverseArray, toReversedArray } from "./reverseArray";

describe("reverseArray", () => {
    it("Should reverse the array in place", () => {
        const array = [1, 2, 3, 4, 5];
        reverseArray(array);

        expect(array).toEqual([5, 4, 3, 2, 1]);
    });

    it("Should maintain the empty array", () => {
        const array: number[] = [];
        reverseArray(array);

        expect(array).toEqual([]);
    });

    it("Should reverse the tuple in place", () => {
        const tuple = [1, "Dois", true, { id: 200 }];
        reverseArray(tuple);

        expect(tuple).toEqual([{ id: 200 }, true, "Dois", 1]);
    });
});

describe("toReversedArray", () => {
    it("Should create a new reversed array", () => {
        const array = [1, 2, 3, 4, 5];
        const reversedArray = toReversedArray(array);

        expect(array).toEqual([1, 2, 3, 4, 5]);
        expect(reversedArray).toEqual([5, 4, 3, 2, 1]);
    });

    it("Should return a new empty array", () => {
        const array: number[] = [];
        const reversedArray = toReversedArray(array);

        expect(reversedArray).toEqual([]);
    });

    it("Should create a new reversed tuple", () => {
        const tuple = [1, "Dois", true, { id: 200 }];
        const reversedTuple = toReversedArray(tuple);

        expect(reversedTuple).toEqual([{ id: 200 }, true, "Dois", 1]);
    });
});
