class PriorityQueue {
    constructor(maxSize) {
        if (isNaN(maxSize)) {
            maxSize = 10;
        }
        this.maxSize = maxSize;
        this.container = [];
    }
    display() {
        console.log(this.container);
    }
    isEmpty() {
        return this.container.length === 0;
    }
    isFull() {
        return this.container.length >= this.maxSize;
    }
    enqueue(data, priority) {
        if (this.isFull()) {
            console.log("Queue Overflow!");
            return;
        }
        let currElem = new this.Element(data, priority);
        let addedFlag = false;
        // Since we want to add elements to end, we'll just push them.
        for (let i = 0; i < this.container.length; i++) {
            if (currElem.priority < this.container[i].priority) {
                this.container.splice(i, 0, currElem);
                addedFlag = true; break;
            }
        }
        if (!addedFlag) {
            this.container.push(currElem);
        }
    }
    dequeue() {
        // Check if empty
        if (this.isEmpty()) {
            console.log("Queue Underflow!");
            return;
        }
        return this.container.pop();
    }
    peek() {
        if (isEmpty()) {
            console.log("Queue Underflow!");
            return;
        }
        return this.container[this.container.length - 1];
    }
    clear() {
        this.container = [];
    }
}
// Create an inner class that we'll use to create new nodes in the queue
// Each element has some data and a priority
PriorityQueue.prototype.Element = class {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
};

var priorQueue = new PriorityQueue(10);
priorQueue.enqueue(3,3);
priorQueue.enqueue(10,10);
priorQueue.enqueue(4,4);
priorQueue.enqueue(5,5);
priorQueue.enqueue(2,2);
priorQueue.enqueue(9,9);

priorQueue.display();
console.log(priorQueue.dequeue());
