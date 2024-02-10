/**
 * Kinda complex recursions ahead o.O
 */
export class BinarySearchTree {
    private root: Node | null = null;
    private _size = 0;

    constructor(...data: number[]) {
        data.forEach((number) => this.insert(number));
    }

    public insert(data: number) {
        this.root = this._insertHelper(this.root, data);
        this._size++;
    }

    private _insertHelper(root: Node | null, data: number): Node {
        if (root === null) {
            return new Node(data);
        }

        if (data < root.data) {
            root.left = this._insertHelper(root.left, data);
        } else {
            root.right = this._insertHelper(root.right, data);
        }

        return root;
    }

    public contains(data: number): boolean {
        return this._containsHelper(this.root, data);
    }

    private _containsHelper(root: Node | null, data: number): boolean {
        if (root === null) return false;

        if (data < root.data) {
            return this._containsHelper(root.left, data);
        }

        if (data > root.data) {
            return this._containsHelper(root.right, data);
        }

        return root.data === data;
    }

    public remove(data: number) {
        if (!this.contains(data)) return;

        this._removeHelper(this.root, data);
        this._size--;
    }

    private _removeHelper(root: Node | null, data: number): Node | null {
        if (root === null) return root;

        if (data < root.data) {
            root.left = this._removeHelper(root.left, data);
            return root;
        }

        if (data > root.data) {
            root.right = this._removeHelper(root.right, data);
            return root;
        }

        if (root.left === null && root.right === null) {
            return null;
        }

        if (root.right !== null) {
            root.data = this.successor(root).data;
            root.right = this._removeHelper(root.right, root.data);
        } else {
            root.data = this.predecessor(root).data;
            root.left = this._removeHelper(root.left, root.data);
        }

        return root;
    }

    public get size() {
        return this._size;
    }

    public toString(): string {
        if (this.root === null) return "{ }";

        const stringifiedTree = this._toStringHelper(this.root);

        return stringifiedTree.slice(0, stringifiedTree.length - 1);
    }

    private _toStringHelper(root: Node | null, _depth = 0): string {
        if (root === null) return "";

        let string = `${" ".repeat(_depth)} | ${root.data}\n`;

        string += this._toStringHelper(root.left, _depth + 1);
        string += this._toStringHelper(root.right, _depth + 1);

        return string;
    }

    private successor(node: Node): Node {
        let current = node.right;

        if (current === null) return node;

        while (current.left !== null) {
            current = current.left;
        }

        return current;
    }

    private predecessor(node: Node): Node {
        let current = node.left;

        if (current === null) return node;

        while (current.right !== null) {
            current = current.right;
        }

        return current;
    }
}

class Node {
    public data: number;
    public left: Node | null = null;
    public right: Node | null = null;

    constructor(data: number) {
        this.data = data;
    }
}
