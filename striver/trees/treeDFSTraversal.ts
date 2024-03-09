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
