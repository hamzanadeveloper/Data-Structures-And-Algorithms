class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.push(value);
    }

    push(value){
        const newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    find(val){
        let thisNode = this.head;

        while(thisNode){
            if(thisNode.value === val){
                return thisNode;
            }
            thisNode = thisNode.next;
        }
        return thisNode;
    }

    remove(val) {
        if(this.length === 0) {
            return undefined;
        }

        if (this.head.value === val) {
            return this.removeFromHead();
        }

        let previousNode = this.head;
        let thisNode = previousNode.next;

        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
        }

        if (thisNode === null) {
            return undefined;
        }

        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}
const list = new LinkedList('first')
    .push('second')
    .push('third');

console.log(list);
console.log(list.find('second'));
list.pop('second');
console.log(list);



