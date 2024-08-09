class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                        // 왼쪽으로 이동 후 null을 만날까지 계속 이동
                    }
                } else if(value > current.value){
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right; 
                    }
                }
            }
        }
    }
    find(value){
        var current = this.root,found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                return found = true;
            }
        }
        return {
            found,
            value:current.value;
        };
    }
     bfs() {
            var node = this.root
              , queue = []
              , data = [];
            queue.push(node);
            while (queue.length) {
                node = queue.shift();
                data.push(node.value);
                if (node.left)
                    queue.push(node.left);
                if (node.right)
                    queue.push(node.right);
            }
            return data;
        }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(14);
tree.insert(5);
tree.insert(8);
tree.insert(25);

