import Stack from "./Stack";

let stack: Stack<number>;

beforeEach(() => {
    stack = new Stack<number>();
});

describe("Stack Class", () => {
    describe("#push", () => {
        it("Should push the elements to the top of the Stack", () => {
            stack.push(1);
            stack.push(2);

            expect(stack.peek()).toBe(2);
        });
    });

    describe("#pop", () => {
        it("Should pop the elements from the top of the Stack", () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            const poppedElement = stack.pop();
            const secondPoppedElement = stack.pop();

            expect(poppedElement).toBe(3);
            expect(secondPoppedElement).toBe(2);

            expect(stack.peek()).toBe(1);
        });

        it("Should throw an error when the Stack is empty", () => {
            expect(stack.pop).toThrow();
        });
    });

    describe("#peek", () => {
        it("Should return the element on the top of the Stack", () => {
            stack.push(1);
            stack.push(2);

            expect(stack.peek()).toBe(2);
        });

        it("Should return undefined when the Stack is empty", () => {
            expect(stack.peek()).toBeUndefined();
        });
    });

    describe("#search", () => {
        it("Should return the index of the matching element on the Stack, starting from 1", () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            const searchIndex = stack.search((item) => item % 2 === 0);

            expect(searchIndex).toBe(2);
        });

        it("Should return -1", () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            const searchIndex = stack.search((item) => item === 5);

            expect(searchIndex).toBe(-1);
        });
    });

    describe("#isEmpty", () => {
        it("Should return the empty status of the Stack", () => {
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
            stack.pop();
            expect(stack.isEmpty()).toBe(true);
        });
    });

    describe("#toString", () => {
        it("Should return the stringified version of the Stack", () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.toString()).toBe("[1, 2, 3]");
        });

        it("Should return an empty representation of the Stack", () => {
            expect(stack.toString()).toBe("[]");
        });
    });
});
