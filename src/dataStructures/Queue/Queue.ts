class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T {
        return this.items[0];
    }

    contains(cb: (item: T) => boolean): boolean {
        return this.items.some(cb);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    toString(): string {
        let string = "";
        this.items.forEach((item, i) => {
            string += i !== this.items.length - 1 ? `${item}, ` : item;
        });

        return "[" + string + "]";
    }
}

export default Queue;
