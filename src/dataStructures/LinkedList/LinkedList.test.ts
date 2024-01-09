import LinkedList from "./LinkedList";

let linkedList: LinkedList<number>;

beforeEach(() => {
    linkedList = LinkedList.from(1, 2, 3);
});

describe("LinkedList Class", () => {
    describe("#from", () => {
        it("Should create a LinkedList based on the given data", () => {
            const expectedList = new LinkedList<number>();
            expectedList.preppend(3);
            expectedList.preppend(2);
            expectedList.preppend(1);

            expect(linkedList).toBeInstanceOf(LinkedList);
            expect(linkedList).toEqual(expectedList);
        });
    });

    describe("#get", () => {
        it("Should return the element in the given index", () => {
            expect(linkedList.get(1)).toBe(2);
        });

        it("Should return undefined", () => {
            expect(linkedList.get(5)).toBeUndefined();
        });
    });

    describe("#getFirst", () => {
        it("Should return the first element", () => {
            expect(linkedList.getFirst()).toBe(1);
        });

        it("Should return undefined", () => {
            const emptyLinkedList = new LinkedList<number>();
            expect(emptyLinkedList.getFirst()).toBeUndefined();
        });
    });

    describe("#getLast", () => {
        it("Should return the last element", () => {
            expect(linkedList.getLast()).toBe(3);
        });

        it("Should return undefined", () => {
            const emptyLinkedList = new LinkedList<number>();
            expect(emptyLinkedList.getLast()).toBeUndefined();
        });
    });

    describe("#prepend", () => {
        it("Should preppend the given data to the head of the LinkedList", () => {
            linkedList.preppend(0);
            expect(linkedList.getFirst()).toBe(0);
        });
    });

    describe("#append", () => {
        it("Should append the given element at the end of the LinkedList", () => {
            linkedList.append(4);
            expect(linkedList.getLast()).toBe(4);
        });
    });

    describe("#insertAt", () => {
        it("Should insert the given element at the specified index", () => {
            linkedList.insertAt(1, 500);
            const expectedList = LinkedList.from(1, 500, 2, 3);
            expect(linkedList).toEqual(expectedList);
        });
    });

    describe("#removeFirst", () => {
        it("Should remove the head element", () => {
            linkedList.removeFirst();
            expect(linkedList.getFirst()).toBe(2);
        });

        it("Should not remove anything the head element", () => {
            linkedList.removeFirst();
            expect(linkedList.getFirst()).toBe(2);
        });
    });

    describe("#removeLast", () => {
        it("Should remove the last element", () => {
            linkedList.removeLast();
            expect(linkedList.getLast()).toBe(2);
        });

        it("Should remove the head element if it's the only one", () => {
            const onlyOne = LinkedList.from(1);
            onlyOne.removeLast();
            expect(onlyOne.isEmpty()).toBe(true);
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
            const result = linkedList.search((data) => data % 2 === 0);
            expect(result).toBe(1);
        });

        it("Should return -1 when none of the elements match the given condition", () => {
            const result = linkedList.search((data) => data === 5);
            expect(result).toBe(-1);
        });

        it("Should return -1 when the LinkedList is empty", () => {
            const emptyLinkedList = new LinkedList<number>();
            const result = emptyLinkedList.search((data) => data === 5);
            expect(result).toBe(-1);
        });
    });

    describe("#contains", () => {
        it("Should return true when at least one of the elements matches the given condition", () => {
            const result = linkedList.contains((data) => data % 2 === 0);
            expect(result).toBe(true);
        });

        it("Should return false when none of the elements match the given condition", () => {
            const result = linkedList.contains((data) => data === 5);
            expect(result).toBe(false);
        });

        it("Should return false when the LinkedList is empty", () => {
            const emptyLinkedList = new LinkedList<number>();
            const result = emptyLinkedList.contains((data) => data === 5);
            expect(result).toBe(false);
        });
    });

    describe("#reverse", () => {
        it("Should reverse the LinkedList in place", () => {
            linkedList.reverse();
            expect(linkedList).toEqual(LinkedList.from(3, 2, 1));
        });
    });

    describe("#toReversed", () => {
        it("Should create a new reversed LinkedList", () => {
            const reversedLinkedList = linkedList.toReversed();

            expect(reversedLinkedList).toEqual(LinkedList.from(3, 2, 1));
            expect(reversedLinkedList).not.toBe(linkedList);
        });

        it("Should return an empty LinkedList when the original one is empty", () => {
            const emptyLinkedList = new LinkedList<number>();
            const reversedLinkedList = emptyLinkedList.toReversed();

            expect(reversedLinkedList).toEqual(emptyLinkedList);
            expect(reversedLinkedList).not.toBe(emptyLinkedList);
        });
    });

    describe("#size", () => {
        it("Should return the size of the LinkedList", () => {
            const newLinkedList = new LinkedList<number>();
            expect(newLinkedList.size()).toBe(0);

            newLinkedList.preppend(100);
            newLinkedList.preppend(200);
            expect(newLinkedList.size()).toBe(2);
        });
    });

    describe("#isEmpty", () => {
        it("Should return the empty status of the LinkedList", () => {
            expect(linkedList.isEmpty()).toBe(false);

            linkedList.removeFirst();
            linkedList.removeFirst();
            linkedList.removeFirst();

            expect(linkedList.isEmpty()).toBe(true);
        });
    });

    describe("#toString", () => {
        it("Should return the stringified version of the LinkedList", () => {
            expect(linkedList.toString()).toBe("[1, 2, 3]");
        });

        it("Should return an empty representation of the LinkedList", () => {
            const emptyLinkedList = new LinkedList<number>();
            expect(emptyLinkedList.toString()).toBe("[]");
        });
    });
});
