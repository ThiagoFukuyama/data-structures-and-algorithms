import { ArrayList } from "./ArrayList";

describe("ArrayList Class", () => {
    describe("#constructor", () => {
        it("Should create a new ArrayList with the default capacity", () => {
            const arrayList = new ArrayList<number>();

            expect(arrayList).toBeInstanceOf(ArrayList);
            expect(arrayList.size()).toBe(0);
        });

        it("Should create a new ArrayList with the given capacity", () => {
            const arrayList = new ArrayList(25);

            expect(arrayList).toBeInstanceOf(ArrayList);
            expect(arrayList.getCurrentCapacity()).toBe(25);
        });
    });

    describe("#from", () => {
        it("Should create a new ArrayList with the given elements", () => {
            const arrayList = ArrayList.from(1, 2, 3);
            const expectedArrayList = new ArrayList<number>();
            expectedArrayList.add(1);
            expectedArrayList.add(2);
            expectedArrayList.add(3);

            expect(arrayList).toBeInstanceOf(ArrayList);
            expect(arrayList).toEqual(expectedArrayList);
        });

        it("Should create a new empty ArrayList", () => {
            const arrayList = ArrayList.from();

            expect(arrayList).toBeInstanceOf(ArrayList);
            expect(arrayList).toEqual(new ArrayList<number>());
        });
    });

    describe("#add", () => {
        it("Should add the first element to the ArrayList", () => {
            const arrayList = new ArrayList<number>();
            arrayList.add(500);

            expect(arrayList.get(0)).toBe(500);
            expect(arrayList.size()).toBe(1);
        });

        it("Should add the element to the end of the ArrayList", () => {
            const arrayList = ArrayList.from(1, 2, 3);
            arrayList.add(500);

            expect(arrayList.get(3)).toBe(500);
            expect(arrayList.size()).toBe(4);
        });
    });

    describe("#insert", () => {
        it("Should insert the element at the given index", () => {
            const arrayList = ArrayList.from(1, 2, 3);
            arrayList.insert(1, 500);

            expect(arrayList.get(1)).toBe(500);
            expect(arrayList.get(2)).toBe(2);
        });

        it("Should insert the first element on the ArrayList", () => {
            const arrayList = new ArrayList<number>();
            arrayList.insert(0, 500);

            expect(arrayList.get(0)).toBe(500);
            expect(arrayList.size()).toBe(1);
        });

        it("Should throw an error when the index is less than 0", () => {
            const arrayList = ArrayList.from(1, 2, 3);

            expect(() => arrayList.insert(-2, 500)).toThrow();
            expect(arrayList.size()).toBe(3);
        });

        it("Should throw an error when the index is bigger than the current capacity", () => {
            const arrayList = ArrayList.from(1, 2, 3);

            expect(() => arrayList.insert(50, 500)).toThrow();
            expect(arrayList.size()).toBe(3);
        });
    });

    describe("#delete", () => {
        it("Should delete the element at the given index", () => {
            const arrayList = ArrayList.from(1, 2, 3, 4, 5);
            arrayList.delete(2);
            const expectedArrayList = ArrayList.from(1, 2, 4, 5);

            expect(arrayList).toEqual(expectedArrayList);
            expect(arrayList.size()).toBe(4);
        });

        it("Should throw an error when the index is less than 0", () => {
            const arrayList = ArrayList.from(1, 2, 3);

            expect(() => arrayList.delete(-2)).toThrow();
            expect(arrayList.size()).toBe(3);
        });

        it("Should throw an error when the index is bigger than the current capacity", () => {
            const arrayList = ArrayList.from(1, 2, 3);

            expect(() => arrayList.delete(50)).toThrow();
            expect(arrayList.size()).toBe(3);
        });
    });

    describe("#get", () => {
        it("Should return the element at the given index", () => {
            const arrayList = ArrayList.from(1, 2, 3);

            expect(arrayList.get(1)).toBe(2);
        });

        it("Should return undefined", () => {
            const arrayList = new ArrayList<number>();

            expect(arrayList.get(10)).toBeUndefined();
        });
    });

    describe("#search", () => {
        it("Should return the index of the matching element", () => {
            const arrayList = ArrayList.from(1, 3, 6);
            const index = arrayList.search((number) => number % 2 === 0);

            expect(index).toBe(2);
        });

        it("Should return -1 when none of the elements match the condition", () => {
            const arrayList = ArrayList.from(1, 2, 3);
            const index = arrayList.search((number) => number === 5);

            expect(index).toBe(-1);
        });
    });

    describe("#size", () => {
        it("Should return 0 for an empty ArrayList", () => {
            const arrayList = new ArrayList<number>();
            expect(arrayList.size()).toBe(0);
        });

        it("Should return the correct size after adding elements to the ArrayList", () => {
            const arrayList = new ArrayList<number>();
            arrayList.add(100);
            arrayList.add(200);
            expect(arrayList.size()).toBe(2);
        });
    });

    describe("#getCurrentCapacity", () => {
        it("Should return the current capacity of the ArrayList", () => {
            const arrayList = new ArrayList<number>(52);
            expect(arrayList.getCurrentCapacity()).toBe(52);
        });
    });

    describe("#isEmpty", () => {
        it("Should return the empty status of the ArrayList", () => {
            const arrayList = new ArrayList<number>();
            expect(arrayList.isEmpty()).toBe(true);

            arrayList.add(100);
            expect(arrayList.isEmpty()).toBe(false);
        });
    });

    describe("#toString", () => {
        it("Should return the stringified version of the ArrayList", () => {
            const arrayList = ArrayList.from(1, 2, 3);
            expect(arrayList.toString()).toBe("[1, 2, 3]");

            arrayList.add(400);
            expect(arrayList.toString()).toBe("[1, 2, 3, 400]");
        });

        it("Should return an empty representation of the ArrayList", () => {
            const arrayList = new ArrayList<number>();
            expect(arrayList.toString()).toBe("[]");
        });
    });
});
