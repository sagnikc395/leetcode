type QNode<T> = {
    value: T;
    next?: QNode<T> | undefined;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>;
        this.length++;
        //go to tail this time , instead of head
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        // swapping pointers
        this.tail.next = node;
        // update tail to the end of the queue.
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return undefined
        this.length--;

        //swapping pointers
        const head = this.head;
        this.head = this.head.next;
        // free here for non GC
        head.next = undefined;

        return head.value;
    }
    peek(): T | undefined {
        // get the top element of the head. if doesnt exist 
        // return undefined.
        return this.head?.value;
    }
}
