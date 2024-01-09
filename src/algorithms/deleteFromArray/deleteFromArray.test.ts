import { deleteFromArray } from "./deleteFromArray";

let array: string[];

beforeEach(() => {
    array = ["A", "B", "C", "D", "E"];
});

describe("deleteFromArray", () => {
    it("Should delete the element at the given index", () => {
        deleteFromArray(array, 2);
        expect(array).toEqual(["A", "B", "D", "E"]);
    });

    it("Should delete the element at the first index", () => {
        deleteFromArray(array, 0);
        expect(array).toEqual(["B", "C", "D", "E"]);
    });

    it("Should delete the element at the end of the array", () => {
        deleteFromArray(array, array.length - 1);
        expect(array).toEqual(["A", "B", "C", "D"]);
    });

    it("Should delete the only element of the array", () => {
        const onlyOneArray: string[] = ["A"];
        deleteFromArray(onlyOneArray, 0);
        expect(onlyOneArray).toEqual([]);
    });

    it("Should return the the empty array", () => {
        const emptyArray: string[] = [];
        deleteFromArray(emptyArray, 0);
        expect(emptyArray).toEqual([]);
    });

    it("Should return the array as it is when index is out of bounds", () => {
        deleteFromArray(array, 25);
        expect(array).toEqual(["A", "B", "C", "D", "E"]);

        deleteFromArray(array, -5);
        expect(array).toEqual(["A", "B", "C", "D", "E"]);
    });
});
