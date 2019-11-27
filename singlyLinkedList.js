class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value){
        const newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    removeFromHead(){
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
    reverse(linkedlist) {
        var node = linkedlist;
        var previous = null;

        while(node) {
            // save next
            var save = node.next;
            // reverse pointer
            node.next = previous;
            // increment previous to current node
            previous = node;
            // increment node to next node or null at end of list
            node = save;
        }
        return previous;
    }
    reverseRecurse(head){
        if (!head || !head.next) {
            return head;
        }
        let temp = this.reverseRecurse(head.next);
        head.next.next = head;
        head.next = undefined;
        return temp;
    }
}
const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');

console.log(list);
console.log(list.find('second'));
console.log(list);

console.log('------');
var reversed = list.reverse(list.head);
console.log(reversed);

const list2 = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');

console.log('------');
var recursedReversed = list2.reverseRecurse(list.head);
console.log(recursedReversed);

