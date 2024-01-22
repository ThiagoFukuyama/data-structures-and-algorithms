/*
 **  Arrays em JavaScript são dinâmicos por padrão.
 **  Implementação com fins de aprendizagem.
 */

export class ArrayList<T> {
    private readonly DEFAULT_CAPACITY = 10;
    private capacity: number;
    private arraySize: number = 0;
    private array: T[];

    constructor(capacity: number = 10) {
        this.capacity = capacity < 0 ? this.DEFAULT_CAPACITY : capacity;
        this.array = new Array<T>(this.capacity);
    }

    public add(data: T): void {
        if (this.arraySize >= this.capacity) {
            this.grow();
        }
        this.array[this.arraySize] = data;
        this.arraySize++;
    }

    public insert(index: number, data: T): void {
        if (index < 0 || index >= this.arraySize + 1)
            throw new Error("Index Out of Bounds Error");

        if (this.arraySize >= this.capacity) {
            this.grow();
        }

        for (let i = this.arraySize; i > index; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[index] = data;
        this.arraySize++;
    }

    public delete(index: number): void {
        if (index < 0 || index >= this.arraySize)
            throw new Error("Index Out of Bounds Error");

        for (let i = index; i < this.arraySize; i++) {
            this.array[i] = this.array[i + 1];
        }

        this.arraySize--;

        if (this.arraySize <= Math.floor(this.capacity / 3)) {
            this.shrink();
        }
    }

    public get(index: number): T | undefined {
        return this.array[index];
    }

    public search(cb: (item: T) => boolean): number {
        for (let i = 0; i < this.arraySize; i++) {
            if (cb(this.array[i])) return i;
        }

        return -1;
    }

    public size(): number {
        return this.arraySize;
    }

    public getCurrentCapacity(): number {
        return this.capacity;
    }

    public isEmpty(): boolean {
        return this.arraySize === 0;
    }

    public toString(): string {
        if (this.isEmpty()) return "[]";

        let string = "";

        for (let i = 0; i < this.arraySize; i++) {
            string += `${this.array[i]}, `;
        }

        string = "[" + string.slice(0, string.length - 2) + "]";

        return string;
    }

    public static from<T>(...data: T[]): ArrayList<T> {
        const arrayList = new ArrayList<T>();
        data.forEach((element) => arrayList.add(element));
        return arrayList;
    }

    private grow(): void {
        const newCapacity = this.capacity * 2;
        const newArray = new Array(newCapacity);

        for (let i = 0; i < this.arraySize; i++) {
            newArray[i] = this.array[i];
        }

        this.capacity = newCapacity;
        this.array = newArray;
    }

    private shrink(): void {
        const newCapacity = Math.floor(this.capacity / 2);
        const newArray = new Array(newCapacity);

        for (let i = 0; i < this.arraySize; i++) {
            newArray[i] = this.array[i];
        }

        this.capacity = newCapacity;
        this.array = newArray;
    }
}
