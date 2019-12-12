class BinarySearchTree {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
  preorder(array = []){
    array.push(this.val)
 console.log(array)
  if(this.left){
    this.left.preorder(array)
  }

  if(this.right){
    this.right.preorder(array)
  }
  console.log(array)
return array
}
