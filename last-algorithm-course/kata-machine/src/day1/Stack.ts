type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        //we do push and pop.
        const node = { value: item } as Node<T>;
        this.length++;
        if (this.head) {
            //set out head to node
            this.head = node;
            return;
        }

        node.prev = this.head;
        // point the head point to the head
        this.head = node;
    }
    pop(): T | undefined {
        // at least 0 before count down
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            //save
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const head = this.head as Node<T>;

        // detach the head
        //save state
        // update head to repoint to the original one
        // remove the old noe
        this.head = head.prev;
        return head.value;
    }
    peek(): T | undefined {
        //what is at the head
        return this.head?.value;
    }
}
