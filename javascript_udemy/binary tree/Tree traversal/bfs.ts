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
