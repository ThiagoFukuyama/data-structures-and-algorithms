class LinkedList<T> {
    private head: Node<T> | null = null;
    private length: number = 0;

    public preppend(data: T): void {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    public append(data: T): void {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            const lastNode = this.getLastNode() as Node<T>;
            lastNode.next = newNode;
        }
        this.length++;
    }

    public removeFirst() {
        if (this.head == null) return;

        this.head = this.head.next;
        this.length--;
    }

    public removeLast() {
        if (this.isEmpty()) return;

        const penultimeNode = this.getNode(this.length - 2);

        if (penultimeNode == null) {
            this.head = null;
            this.length--;
            return;
        }

        penultimeNode.next = null;
        this.length--;
    }

    public getFirst(): T | undefined {
        return this.getFirstNode()?.data;
    }

    public getLast(): T | undefined {
        return this.getLastNode()?.data;
    }

    public get(index: number): T | undefined {
        return this.getNode(index)?.data;
    }

    public insertAt(index: number, data: T) {
        if (index === 0) return this.preppend(data);
        if (index >= this.length) return this.append(data);

        const prevNode = this.getNode(index - 1);
        if (prevNode == null) return;

        const newNode = new Node(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;

        this.length++;
    }

    public delete(index: number) {
        if (index === 0) return this.removeFirst();

        const prevNode = this.getNode(index - 1);
        if (prevNode == null || prevNode.next == null) return;

        const nodeToDelete = prevNode.next;
        prevNode.next = nodeToDelete.next;
        this.length--;
    }

    public search(cb: (value: T) => boolean): number {
        if (this.head == null) return -1;

        let current = this.head;
        let index = 0;
        while (current.next) {
            if (cb(current.data)) return index;
            current = current.next;
            index++;
        }

        return -1;
    }

    public contains(cb: (data: T) => boolean) {
        if (this.head == null) return false;
        let current = this.head;

        while (current.next) {
            if (cb(current.data)) return true;
            current = current.next;
        }

        return false;
    }

    public size() {
        return this.length;
    }

    public isEmpty() {
        return this.length === 0;
    }

    public toString() {
        if (this.head == null) return "[]";

        let string = ``;
        let current: Node<T> | null = this.head;
        let i = 0;

        while (current) {
            string += `${current.data}${i !== this.length - 1 ? ", " : ""}`;
            i++;
            current = current.next;
        }
        return "[" + string + "]";
    }

    public static from<T>(...data: T[]) {
        const linkedList = new LinkedList<T>();
        data.forEach((element) => linkedList.append(element));

        return linkedList;
    }

    private getFirstNode(): Node<T> | undefined {
        if (this.head == null) return;
        return this.head;
    }

    private getLastNode(): Node<T> | undefined {
        if (this.head == null) return;

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    private getNode(index: number): Node<T> | undefined {
        if (this.head == null) return;
        if (index < 0 || index >= this.length) return;

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next as Node<T>;
        }

        return current;
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.data;
            current = current.next;
        }
    }
}

class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export default LinkedList;
