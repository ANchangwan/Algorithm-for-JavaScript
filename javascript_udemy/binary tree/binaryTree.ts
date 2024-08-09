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

class BinaryTree<T>{
    root:TreeNode<T> | null;
    constructor(){
        this.root = null;
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
}
