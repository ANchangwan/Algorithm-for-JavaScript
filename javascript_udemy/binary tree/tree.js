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
    class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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
          } else {
            current = current.left;
          }
        } else {
          if (value > current.value) {
            if (!current.right) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }
  find(value){
    var current = this.root;
    var found = false;
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
      current:current.value,
      found
    }
  }
  delete(value) {
    var current = this.root;
    var parent = null;

    while (current) {
        if (value < current.value) {
            parent = current;
            current = current.left;
        } else if (value > current.value) {
            parent = current;
            current = current.right;
        } else {
            // Node to be deleted is found

            // Case 1: Node has no children (leaf node)
            if (!current.left && !current.right) {
                if (current === this.root) {
                    this.root = null;
                } else if (current === parent.left) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
            // Case 2: Node has one child
            else if (!current.left) { // Node has only right child
                if (current === this.root) {
                    this.root = current.right;
                } else if (current === parent.left) {
                    parent.left = current.right;
                } else {
                    parent.right = current.right;
                }
            } else if (!current.right) { // Node has only left child
                if (current === this.root) {
                    this.root = current.left;
                } else if (current === parent.left) {
                    parent.left = current.left;
                } else {
                    parent.right = current.left;
                }
            }
            // Case 3: Node has two children
            else {
                // Find the minimum value node in the right subtree
                var successor = this.findMinNode(current.right);

                // Copy the successor's value to the current node
                current.value = successor.value;

                // Delete the successor node
                this.deleteNode(current.right, successor.value);
            }

            return; // Node is deleted, exit the loop
        }
    }
}

// Helper function to find the minimum node in a subtree
findMinNode(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}

// Helper function to delete a node
deleteNode(root, value) {
    if (!root) {
        return null;
    }
    if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
        return root;
    } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
        return root;
    } else {
        if (!root.left && !root.right) {
            return null;
        } else if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            var successor = this.findMinNode(root.right);
            root.value = successor.value;
            root.right = this.deleteNode(root.right, successor.value);
            return root;
        }
    }
 }
}

var tree = new BinarySearchTree();
tree.insert(4);
tree.insert(5);
tree.insert(3);

console.log(tree);


}
