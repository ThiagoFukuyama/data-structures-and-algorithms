import { Queue } from "./Queue";

let queue: Queue<number>;

beforeEach(() => {
    queue = new Queue<number>();
});

describe("Queue Class", () => {
    describe("#enqueue", () => {
        it("Should enqueue the elements to the tail of the Queue", () => {
            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.peek()).toBe(1);
        });
    });

    describe("#dequeue", () => {
        it("Should dequeue the elements from the head of the Queue", () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);

            const dequeuedElement = queue.dequeue();
            const secondDequeuedElement = queue.dequeue();

            expect(dequeuedElement).toBe(1);
            expect(secondDequeuedElement).toBe(2);

            expect(queue.peek()).toBe(3);
        });

        it("Should throw an error when the Queue is empty", () => {
            expect(queue.dequeue).toThrow();
        });
    });

    describe("#peek", () => {
        it("Should return the element on the head of the Queue", () => {
            queue.enqueue(1);
            queue.enqueue(2);

            expect(queue.peek()).toBe(1);
        });

        it("Should return undefined when the Queue is empty", () => {
            expect(queue.peek()).toBeUndefined();
        });
    });

    describe("#contains", () => {
        it("Should return true while one of the elements matches the given condition", () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            const result = queue.contains((item) => item % 2 === 0);

            expect(result).toBe(true);
        });

        it("Should return false while none of the elements match the given condition", () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            const result = queue.contains((item) => item === 5);

            expect(result).toBe(false);
        });
    });

    describe("#isEmpty", () => {
        it("Should return the empty status of the Queue", () => {
            queue.enqueue(1);
            expect(queue.isEmpty()).toBe(false);
            queue.dequeue();
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe("#toString", () => {
        it("Should return the stringified version of the Queue", () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);

            expect(queue.toString()).toBe("[1, 2, 3]");
        });

        it("Should return an empty representation of the Queue", () => {
            expect(queue.toString()).toBe("[]");
        });
    });
});
