import { fibonacci } from "./fibonacci";

describe("fibonacci", () => {
    it("Should return 2 for index 3", () => {
        const result = fibonacci(3);
        expect(result).toBe(2);
    });

    it("Should return 21 for index 8", () => {
        const result = fibonacci(8);
        expect(result).toBe(21);
    });

    it("Should return 144 for index 12", () => {
        const result = fibonacci(12);
        expect(result).toBe(144);
    });

    it("Should return 1 for indexes 1 and 2", () => {
        const result1 = fibonacci(1);
        expect(result1).toBe(1);

        const result2 = fibonacci(2);
        expect(result2).toBe(1);
    });
});
