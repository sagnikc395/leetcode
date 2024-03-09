type BinaryTreeNodeType = {
  left: BinaryTreeNodeType | null;
  data: number;
  right: BinaryTreeNodeType | null;
};

function preOrder(node: BinaryTreeNodeType) {
  if (node === null) {
    return;
  }
  console.log(node.data);
  preOrder(node.left!);
  preOrder(node.right!);
}

function inOrder(node: BinaryTreeNodeType) {
  if (node === null) {
    return;
  }
  inOrder(node.left!);
  console.log(node.data);
  inOrder(node.right!);
}

function postOrder(node: BinaryTreeNodeType) {
  if (node === null) {
    return;
  }
  postOrder(node.left!);
  postOrder(node.right!);
  console.log(node.data);
}
