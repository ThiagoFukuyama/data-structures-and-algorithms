import LinkedList from "./LinkedList";

describe("LinkedList Class", () => {
    describe("#from", () => {
        it("Should create a LinkedList based on the given data", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            expect(linkedList).toBeInstanceOf(LinkedList);
        });
    });

    describe("#get", () => {
        it("Should return the element in the given index", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            expect(linkedList.get(1)).toBe(2);
        });

        it("Should return undefined", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            expect(linkedList.get(5)).toBeUndefined();
        });
    });

    describe("#getFirst", () => {
        it("Should return the first element", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            expect(linkedList.getFirst()).toBe(1);
        });

        it("Should return undefined", () => {
            const linkedList = new LinkedList<number>();
            expect(linkedList.getFirst()).toBeUndefined();
        });
    });

    describe("#getLast", () => {
        it("Should return the last element", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            expect(linkedList.getLast()).toBe(3);
        });

        it("Should return undefined", () => {
            const linkedList = new LinkedList<number>();
            expect(linkedList.getLast()).toBeUndefined();
        });
    });

    describe("#prepend", () => {
        it("Should preppend the given data to the head of the LinkedList", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            linkedList.preppend(0);
            expect(linkedList.getFirst()).toBe(0);
        });
    });

    describe("#append", () => {
        it("Should append the given element at the end of the LinkedList", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            linkedList.append(4);
            expect(linkedList.getLast()).toBe(4);
        });
    });

    describe("#insertAt", () => {
        it("Should insert the given element at the specified index", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            linkedList.insertAt(1, 500);
            expect(linkedList.get(1)).toBe(500);
            expect(linkedList.get(2)).toBe(2);
        });
    });

    describe("#removeFirst", () => {
        it("Should remove the head element", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            linkedList.removeFirst();
            expect(linkedList.getFirst()).toBe(2);
        });
    });

    describe("#removeLast", () => {
        it("Should remove the last element", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            linkedList.removeLast();
            expect(linkedList.getLast()).toBe(2);
        });
    });

    describe("#delete", () => {
        it("Should delete the element at the given index", () => {
            const linkedList = LinkedList.from(1, 2, 3, 4, 5);
            linkedList.delete(3);
            expect(linkedList.get(3)).toBe(5);
        });
    });

    describe("#search", () => {
        it("Should return the index of the matching element", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            const result = linkedList.search((data) => data % 2 === 0);
            expect(result).toBe(1);
        });

        it("Should return -1 when none of the elements match the given condition", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            const result = linkedList.search((data) => data === 5);
            expect(result).toBe(-1);
        });
    });

    describe("#contains", () => {
        it("Should return true when at least one of the elements matches the given condition", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            const result = linkedList.contains((data) => data % 2 === 0);
            expect(result).toBe(true);
        });

        it("Should return false when none of the elements match the given condition", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            const result = linkedList.contains((data) => data === 5);
            expect(result).toBe(false);
        });
    });

    describe("#size", () => {
        it("Should return the size of the LinkedList", () => {
            const linkedList = new LinkedList<number>();
            expect(linkedList.size()).toBe(0);

            linkedList.preppend(100);
            linkedList.preppend(200);
            expect(linkedList.size()).toBe(2);
        });
    });

    describe("#isEmpty", () => {
        it("Should return the empty status of the LinkedList", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            expect(linkedList.isEmpty()).toBe(false);

            linkedList.removeFirst();
            linkedList.removeFirst();
            linkedList.removeFirst();

            expect(linkedList.isEmpty()).toBe(true);
        });
    });

    describe("#toString", () => {
        it("Should return the stringified version of the LinkedList", () => {
            const linkedList = LinkedList.from(1, 2, 3);
            expect(linkedList.toString()).toBe("[1, 2, 3]");
        });
    });
});
