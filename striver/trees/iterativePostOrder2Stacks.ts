import { TreeNode } from "./TreeNode";

function iterativePostOrder(root: TreeNode | null): number[] {
  let st1 = Array<TreeNode>();
  let st2 = Array<TreeNode>();
  let postOrder = Array<number>();

  if (root == null) {
    return postOrder;
  }

  st1.push(root);
  while (st1.length !== 0) {
    root = st1.pop();
    st2.push(root!);
    if (root!.left !== undefined) {
      st1.push(root!.left);
    }
    if (root!.right !== undefined) {
      st2.push(root!.right);
    }
  }
  while (st2.length !== 0) {
    postOrder.push(st2.pop()?.val);
  }

  return postOrder;
}
