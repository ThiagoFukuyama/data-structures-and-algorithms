export class Queue<T> {
    private items: Record<number, T>;
    private head: number = 0;
    private tail: number = 0;

    constructor() {
        this.items = {};
    }

    enqueue(item: T): void {
        this.items[this.tail] = item;
        this.tail++;
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error(
                "Queue Empty: Unable to dequeue from an empty queue"
            );
        }

        const itemToDequeue = this.items[this.head];
        delete this.items[this.head];
        this.head++;

        return itemToDequeue;
    }

    peek(): T | undefined {
        return this.items[this.head];
    }

    contains(cb: (item: T) => boolean): boolean {
        let result = false;

        Object.values(this.items).forEach((value) => {
            if (cb(value)) result = true;
        });

        return result;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this.tail - this.head;
    }

    toString(): string {
        if (this.isEmpty()) return "[]";

        const string = Object.values(this.items).reduce((acc, curr) => {
            return acc + `${curr}, `;
        }, "");

        return "[" + string.slice(0, string.length - 2) + "]";
    }
}
