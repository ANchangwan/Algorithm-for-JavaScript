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
                found = true;
            }
            
            return false;
        }
    }

}
