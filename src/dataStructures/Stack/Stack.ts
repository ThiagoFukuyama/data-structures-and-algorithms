class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow Error");
        }

        return this.items.pop();
    }

    peek(): T {
        return this.items[this.items.length - 1];
    }

    search(cb: (item: T) => boolean): number {
        const index = this.items.findIndex(cb);
        return index >= 0 ? index + 1 : index;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    toString(): string {
        let string = "";
        this.items.forEach((item, i) => {
            string += i !== this.items.length - 1 ? `${item}, ` : item;
        });

        return "[" + string + "]";
    }
}

export default Stack;
