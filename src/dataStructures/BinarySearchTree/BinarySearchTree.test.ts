import { BinarySearchTree } from "./BinarySearchTree";

let tree: BinarySearchTree;

beforeEach(() => {
    tree = new BinarySearchTree(8, 3, 10, 6, 13, 4, 1, 14, 7);
});

describe("BinarySearchTree", () => {
    describe("#contains", () => {
        it("Should return true when the tree contains the given value", () => {
            const result = tree.contains(4);
            expect(result).toBe(true);
        });

        it("Should return false when it does not contain the given value", () => {
            const result = tree.contains(5);
            expect(result).toBe(false);
        });
    });

    describe("#insert", () => {
        it("Insert a new node into the tree", () => {
            expect(tree.contains(50)).toBe(false);

            tree.insert(50);

            expect(tree.contains(50)).toBe(true);
        });
    });

    describe("#get size", () => {
        it("Should return the current number of nodes", () => {
            expect(tree.size).toBe(9);
            tree.insert(-3);
            expect(tree.size).toBe(10);
        });
    });

    describe("#remove", () => {
        it("Should remove the node that matches the given value", () => {
            expect(tree.contains(3)).toBe(true);

            tree.remove(3);

            expect(tree.contains(3)).toBe(false);
        });

        it("Should not remove anything when no node matches the given value", () => {
            const size = tree.size;
            tree.remove(22);

            expect(tree.size).toBe(size);
        });
    });

    describe("#toString", () => {
        it("Should return a string representation of the tree", () => {
            const stringifiedTree = tree.toString();
            const expected = ` | 8
  | 3
   | 1
   | 6
    | 4
    | 7
  | 10
   | 13
    | 14`;

            expect(stringifiedTree).toContain(expected);
        });

        it("Should return an empty representation of the tree", () => {
            const emptyTree = new BinarySearchTree();
            expect(emptyTree.toString()).toBe("{ }");
        });
    });
});
