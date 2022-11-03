// Merges two already sorted arrays
function merge(arr1, arr2:number[]) {
  let results:number[] = [];
  let i:number = 0;
  let j:number = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    }else{
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j])
    j++;
  }
  return results;
}

function mergeSort(arr:number[]=[]){
  if(arr.length <=1) return arr;
  let mid:number[] = Math.floor(arr.length/2);
  let left:number[] = mergeSort(arr.slice(0, mid));
  let right:number[] = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([5,1,3,8,7]))
                   
