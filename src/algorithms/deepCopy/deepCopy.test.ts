import { deepCopy } from "./deepCopy";

describe("deepCopy", () => {
    it("Should create a copy of the original object", () => {
        const object = { id: 500, name: "John Doe", isAdmin: false };
        const objectCopy = deepCopy(object);

        expect(objectCopy).toEqual({
            id: 500,
            name: "John Doe",
            isAdmin: false,
        });
    });

    it("Should create a copy of the original array", () => {
        const array = [1, 2, 3, 4, 5];
        const arrayCopy = deepCopy(array);

        expect(arrayCopy).toEqual([1, 2, 3, 4, 5]);
    });

    it("Should create a copy of the original Set", () => {
        const set = new Set<number>([1, 2, 3]);
        const setCopy = new Set(deepCopy([...set]));

        expect(setCopy).toEqual(set);
    });

    it("Should return null when passed null", () => {
        const value = null;
        const valueCopy = deepCopy(value);

        expect(valueCopy).toBeNull();
    });

    it("Should return the original value when it's not an object", () => {
        const value = 255;
        const valueCopy = deepCopy(value);

        expect(valueCopy).toBe(255);
    });
});
