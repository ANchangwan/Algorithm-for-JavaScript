class TreeNode<T>{
    value:T;
    right:TreeNode<T> | null;
    left:TreeNode<T> | null;
    constructor(value:T){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BFS<T>{
    root : TreeNode<T> | null | undefined

    constructor(){
        this.root = null;
    }
   bfs(): T[] {
        if (!this.root) return []; // Return an empty array if the tree is empty

        const queue: TreeNode<T>[] = [];
        const data: T[] = [];
        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();
            if (node) {
                data.push(node.value);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return data;
    }
}


class BinaryTree<T> extends BFS<T>{
    root:TreeNode<T> | null | undefined;
    constructor(){
        super();
    }
    insert(value:T){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            return;
        }else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        return;
                    }else{
                        current = current.left;
                    }
                }else{
                    if(value > current.value){
                        if(!current.right){
                            current.right = newNode;
                            return;
                        }else{
                            current = current.right;
                        }
                    }

                }
            }
        }
    }
    find(value:T){
        let current = this.root 
        let found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){                
                current = current.right;
            }else{
                found = true;
            }
        }
        return {
            found,
            value:current?.value
        }

    }
}
