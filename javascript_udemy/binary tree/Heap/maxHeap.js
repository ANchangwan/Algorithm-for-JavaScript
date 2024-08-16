class MaxHeap{
    constructor(){
        this.heap = [];
    }
    size(){
        return this.heap.length;
    }
    swap(idx, idx2){
        [this.heap[idx], this.heap[idx2]] = [this.heap[idx2], this.heap[idx]];
    }
    add(value){
        this.heap.push(value);
        bubbleUp();
    }
    bubbleUp(){
        let idx = this.heap.length - 1;
        let current = this.heap[idx];
        while(idx > 0){
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parnetIdx];
            if(current <= parent ) break;
            this.swap(idx, parentIdx);
            idx = parentIdx;
        }
    }
    extractMax(){
        if(this.size() === 0) return null;
        if(this.size === 1) return this.heap.pop();
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return value;
    }
    bubbleDown(index){
        const length = this.heap.length;
        const current = this.heap[index];
        while(true){
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let leftChild, rightChild;
            let swapIndex = null;
            if(leftchildIndex < length){
                leftChild = this.heap[leftChildIndex];
                if(leftChild > current){
                    swapIndex = leftchildIndex;
                }
            }
            if(rightchildIndex < length){
                rightChild = this.heap[rightchildIndex];
                if(swapIndex === null && rightChild > current || swapIndex !== null && rightChild > leftChild){
                    swapIndex = rightChildIndex;
                }
                if (swapIndex === null) break;

                this.swap(index, swapIndex);
                index = swapIndex;
            }
        }
    }
}
