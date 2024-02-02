import { Hashtable } from "./Hashtable";

let hashtable: Hashtable<string, number>;
let emptyHashtable: Hashtable<string, number>;

beforeEach(() => {
    hashtable = Hashtable.from(["John", 1500], ["Glenn", 2700], ["Jane", 1950]);
    emptyHashtable = new Hashtable();
});

describe("Hashtable", () => {
    describe("#get", () => {
        it("Should return the value based on the given key", () => {
            const value = hashtable.get("Glenn");
            expect(value).toBe(2700);
        });

        it("Should return undefined when no corresponding key is found", () => {
            const value = hashtable.get("William");
            expect(value).toBeUndefined();
        });
    });

    describe("#set", () => {
        it("Should add new entries to the Hashtable", () => {
            hashtable.set("Brock", 8000);

            expect(hashtable.get("Brock")).toBe(8000);
            expect(hashtable.size).toEqual(4);
        });

        it("Should rewrite the value of the given key", () => {
            hashtable.set("Jane", 278);
            expect(hashtable.get("Jane")).toBe(278);
        });
    });

    describe("#from", () => {
        it("Should create a new Hashtable based on the given entries", () => {
            const expectedHashtable = new Hashtable<string, boolean>();
            expectedHashtable.set("Charles", true);
            expectedHashtable.set("James", false);

            const hashtableFrom = Hashtable.from<string, boolean>(
                ["Charles", true],
                ["James", false]
            );

            expect(hashtableFrom).toEqual(expectedHashtable);
        });

        it("Should create an empty Hashtable", () => {
            const emptyFromHashtable = Hashtable.from();
            expect(emptyFromHashtable.isEmpty()).toBe(true);
        });
    });

    describe("#remove", () => {
        it("Should remove the entry of the given key", () => {
            hashtable.remove("John");

            expect(hashtable.get("John")).toBeUndefined();
            expect(hashtable.size).toBe(2);
        });

        it("Should not remove anything when no key matches", () => {
            hashtable.remove("Peterson");
            expect(hashtable.size).toBe(3);
        });
    });

    describe("#clear", () => {
        it("Should clear all the entries from the Hashtable", () => {
            hashtable.clear();
            expect(hashtable).toEqual(emptyHashtable);
        });

        it("Should maintain the Hashtable empty", () => {
            emptyHashtable.clear();
            expect(emptyHashtable.isEmpty()).toBe(true);
        });
    });

    describe("#get size", () => {
        it("Should return the current size of the Hashtable", () => {
            expect(hashtable.size).toBe(3);
        });
    });

    describe("#isEmpty", () => {
        it("Should return false when there's at least one item in the Hashtable", () => {
            expect(hashtable.isEmpty()).toBe(false);
        });

        it("Should return true when the Hashtable has no elements", () => {
            expect(emptyHashtable.isEmpty()).toBe(true);
        });
    });

    describe("#toString", () => {
        it("Should return a stringified version of the Hashtable", () => {
            const stringifiedHashtable = hashtable.toString();
            expect(stringifiedHashtable).toBe(
                `[\n  Glenn => 2700\n  Jane => 1950\n  John => 1500\n]`
            );
        });

        it("Should return an empty representation of the Hashtable", () => {
            expect(new Hashtable().toString()).toBe("[]");
        });
    });
});
