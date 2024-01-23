export class Stack<T> {
    private items: T[];
    private top: number = 0;

    constructor() {
        this.items = [];
    }

    push(item: T): void {
        this.items[this.top] = item;
        this.top++;
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow Error");
        }

        const itemToRemove = this.items[this.top - 1];
        this.items.length--;
        this.top--;

        return itemToRemove;
    }

    peek(): T {
        return this.items[this.top - 1];
    }

    search(cb: (item: T) => boolean): number {
        for (let i = 0; i < this.items.length; i++) {
            if (cb(this.items[i])) return i + 1;
        }

        return -1;
    }

    isEmpty(): boolean {
        return this.top === 0;
    }

    toString(): string {
        if (this.isEmpty()) return "[]";

        let string = "";
        for (let i = 0; i < this.items.length; i++) {
            string += `${this.items[i]}, `;
        }

        return "[" + string.slice(0, string.length - 2) + "]";
    }
}
