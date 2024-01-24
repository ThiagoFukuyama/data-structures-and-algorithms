import { validateFileName } from ".";

describe("validateFileName", () => {
    it("Should return true if it is a valid folder/file name", () => {
        const isValid = validateFileName("reverseList");
        expect(isValid).toBe(true);
    });

    it("Should return false if it contains file traversing characters", () => {
        const isValid = validateFileName("../reverseList/");
        expect(isValid).toBe(false);
    });

    it("Should return false if its length is 0", () => {
        const isValid = validateFileName("");
        expect(isValid).toBe(false);
    });
});
