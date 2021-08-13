interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | null;
    size(): number;
}


class Queue<T> extends Collection<T> implements IQueue<T> {
    constructor(private capacity: number = Infinity) {
        super();
    }
    enqueue(item: T): void {
        if (this.isFull()) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        // In the derived class, we can access protected properties of the abstract class
        this.storage.push(item);
    }
    dequeue(): T | null {
        if (!this.isEmpty()) {
            return this.storage.shift();
        }
        return null;
    }

    // Implementation of the abstract method
    isFull(): boolean {
        return this.capacity === this.size();
    }
}