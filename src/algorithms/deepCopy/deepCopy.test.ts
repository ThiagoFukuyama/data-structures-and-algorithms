import { deepCopy } from "./deepCopy";

describe("deepCopy", () => {
    it("Should create a recursive copy of the original object", () => {
        const object = {
            id: 500,
            name: "John Doe",
            grades: { "1st": 9.0, "2nd": 9.5 },
        };
        const objectCopy = deepCopy(object);

        expect(objectCopy).toEqual(object);
        expect(objectCopy).not.toBe(object);

        expect(objectCopy.grades).toEqual(object.grades);
        expect(objectCopy.grades).not.toBe(object.grades);
    });

    it("Should create a recursive copy of the original array", () => {
        const array = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        const arrayCopy = deepCopy(array);

        expect(arrayCopy).toEqual(array);
        expect(arrayCopy).not.toBe(array);

        expect(arrayCopy[0]).toEqual(array[0]);
        expect(arrayCopy[0]).not.toBe(array[0]);
    });

    it("Should return null when passed null", () => {
        const value = null;
        const valueCopy = deepCopy(value);

        expect(valueCopy).toBeNull();
    });

    it("Should return the original value when it's not an object", () => {
        const value = 255;
        const valueCopy = deepCopy(value);

        expect(valueCopy).toBe(value);
    });
});
