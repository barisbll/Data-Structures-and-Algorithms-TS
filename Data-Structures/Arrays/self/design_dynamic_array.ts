class DynamicArray {
    dynamicArray: number[];
    capacity: number;
    length: number;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        if (capacity < 1) {
            throw new Error("Capacity can't be smaller than 1");
        }

        this.dynamicArray = Array(capacity).fill(0);
        this.capacity = capacity;
        this.length = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.dynamicArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.dynamicArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.dynamicArray[this.length] = n;
        this.length += 1;
    }

    /**
     * @returns {number}
     */
    popback(): number | undefined {
        if (this.length > 0) {
            this.length -= 1;
        }
        return this.dynamicArray[this.length];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newArray = Array(this.capacity).fill(0);
        for (let i = 0; i < this.dynamicArray.length; i++) {
            newArray[i] = this.dynamicArray[i];
        }
        this.dynamicArray = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
