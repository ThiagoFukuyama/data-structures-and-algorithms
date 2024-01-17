import { linearSearch } from "./linearSearch";

let array: { name: string; age: number }[];

beforeEach(() => {
    array = [
        { name: "John", age: 18 },
        { name: "Jane", age: 25 },
        { name: "William", age: 13 },
    ];
});

describe("linearSearch", () => {
    it("Should return the index that matches the given element", () => {
        const index = linearSearch(array, (item) => item.name === "Jane");
        expect(index).toEqual(1);
    });

    it("Should return the index of the first element", () => {
        const index = linearSearch(array, (item) => item.name === "John");
        expect(index).toEqual(0);
    });

    it("Should return the index of the last element", () => {
        const index = linearSearch(array, (item) => item.age < 18);
        expect(index).toEqual(2);
    });

    it("Should return -1 when no element is matched", () => {
        const index = linearSearch(array, (item) => item.name === "Philips");
        expect(index).toEqual(-1);
    });
});
