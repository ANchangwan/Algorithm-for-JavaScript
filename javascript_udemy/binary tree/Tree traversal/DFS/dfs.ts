class TreeNode<T>{
    value: T;
    right:TreeNode<T>  | null
    left : TreeNode<T> | null;
    constructor(value:T){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class DFS<T>{
    root:TreeNode<T> | null;
    constructor(){
        this.root = null;
    }

    dfs_pre_order():T[]{
        if(!this.root) return [];
        const data:T[] = [];
        function preOrder(node:TreeNode<T>):void{
            data.push(node.value);
            if(node.left) preOrder(node.left);
            if(node.right) preOrder(node.right);
        }
        preOrder(this.root);
        return data;
    }

    dfs_post_order():T[]{
        if(!this.root) return [];
        var data:T[] = [];
        function postOrder(node:TreeNode<T>){
            if(node.left) postOrder(node.left);
            if(node.right) postOrder(node.right);
            data.push(node.value);
        }
        postOrder(this.root);
        return data;
    }
    dfs_in_order():T[]{
        if(!this.root) return [];
        var data:T[] = [];
        function postOrder(node:TreeNode<T>){
            if(node.left) postOrder(node.left);
            data.push(node.value);
            if(node.right) postOrder(node.right);
        }
        postOrder(this.root);
        return data;
    }
}

