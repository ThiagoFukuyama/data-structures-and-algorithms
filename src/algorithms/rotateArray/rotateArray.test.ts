import { rotateArray } from "./rotateArray";

let array: string[];

beforeEach(() => {
    array = ["A", "B", "C", "D", "E"];
});

describe("rotateArray", () => {
    it("Should rotate the array to the right the given times", () => {
        rotateArray(array, 8);
        expect(array).toEqual(["C", "D", "E", "A", "B"]);
    });

    it("Should rotate the array to the left the given times", () => {
        rotateArray(array, -2);
        expect(array).toEqual(["C", "D", "E", "A", "B"]);
    });

    it("Should not rotate the array with 0 steps", () => {
        rotateArray(array, 0);
        expect(array).toEqual(["A", "B", "C", "D", "E"]);
    });

    it("Should not rotate the array when steps equal the number of elements", () => {
        rotateArray(array, 5);
        expect(array).toEqual(["A", "B", "C", "D", "E"]);
    });

    it("Should not rotate the array when steps is a multiple of the number of elements", () => {
        rotateArray(array, 10);
        expect(array).toEqual(["A", "B", "C", "D", "E"]);
    });

    it("Should return an empty array", () => {
        const emptyArray: number[] = [];
        rotateArray(emptyArray, 15);
        expect(emptyArray).toEqual([]);
    });
});
