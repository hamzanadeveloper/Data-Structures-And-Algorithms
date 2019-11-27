class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this[head] = null;
        this[tail] = null;
    }

    add(data) {
        const newNode = new DoublyLinkedListNode(data);
        if (this[head] === null) {
            this[head] = newNode;
        } else {
            this[tail].next = newNode;
            newNode.previous = this[tail];
        }
        this[tail] = newNode;
    }
    get(index) {
        if (index > -1) {
            let current = this[head];
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    }

    remove(index) {
        if ((this[head] === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
        if (index === 0) {
            const data = this[head].data;
            this[head] = this[head].next;
            if (this[head] === null) {
                this[tail] = null;
            } else {
                this[head].previous = null;
            }
            return data;
        }

        let current = this[head];
        let i = 0;

        while ((current !== null) && (i < index)) {
            current = current.next;
            i++;
        }

        if (current !== null) {
            current.previous.next = current.next;
            if (this[tail] === current) {
                this[tail] = current.previous;
            } else {
                current.next.previous = current.previous;
            }

            return current.data;
        }

        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

}