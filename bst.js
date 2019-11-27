class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    insert(data)
    {
        var newNode = new Node(data);

        if(this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode)
    {
        if(newNode.data < node.data) {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right,newNode);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if(node === null)
            return null;

        else if(key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        else if(key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if(node.left === null) {
                node = node.right;
                return node;
            }

            else if(node.right === null) {
                node = node.left;
                return node;
            }


            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    inorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node) {  //DF search
        if(node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node) {
        if(node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    findMinNode(node){
        if(node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    getRootNode() {
        return this.root;
    }
    search(node, data) {
        if(node === null)
            return null;
        else if(data < node.data)
            return this.search(node.left, data);
        else if(data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }
    getHeight(node){
        if(node == null)
            return -1;

        var left = this.getHeight(node.left);
        var right = this.getHeight(node.right);

        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }
    findMinHeight(root) {
        // empty tree.
        if(root === null) {
            return -1;
        }
        // leaf node.
        if(root.left === null && root.right === null) {
            return 0;
        }
        if(root.left === null){
            return this.findMinHeight(root.right) + 1;
        }
        if(root.right === null){
            return this.findMinHeight(root.left) + 1;
        }
        const lHeight = this.findMinHeight(root.left);
        const rHeight = this.findMinHeight(root.right);
        return Math.min(lHeight, rHeight) + 1;
    };

    level_order(root, nodes) {
        var queue = [root];
        while (queue.length > 0) {
            // front of queue is at element 0 and we push elements to back of queue
            var n = queue.shift();

            nodes.push(n.data);
            if (n.left !== null) { queue.push(n.left); }
            if (n.right !== null) { queue.push(n.right); }
        }
        return nodes;
    }
    depth_first(root,nodes){
        var stack = [root];
        while(stack.length > 0){
            var n = stack.pop();
            nodes.push(n.data);
            if(n.right !== null) stack.push(n.right);
            if(n.left !== null) stack.push(n.left);
        }
        return nodes;
    }
}

var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

var root = BST.getRootNode();

// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with no children
BST.remove(5);


//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17


var root = BST.getRootNode();

// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with one children
BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17


var root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with two children
BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

var root = BST.getRootNode();
console.log("inorder traversal");

// prints 9 10 13 17 22 25 27
BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);

// BST.insert(6);
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//     /
//    6

var height = BST.getHeight(root);
var minHeight = BST.findMinHeight(root);
console.log("The Max height");
console.log(height);
console.log("The Min height");
console.log(minHeight);

var levelOrder = BST.level_order(root, []);
console.log("Level Order Traversal");
console.log(levelOrder);

var preDF = BST.depth_first(root, []);
console.log("DF Order Traversal");
console.log(preDF);

// console.log("Root");
// console.log(root);