import { TreeNode } from "./TreeNode";

function preorderTraversal(root: TreeNode | null): number[] {
  let preorder = Array<number>();
   if (root === null) {
    return preorder;
  }
  let st = Array<TreeNode>();
  st.push(root);
  while (st.length !== 0) {
    root = st.pop()!;
    preorder.push(root.val);
    if (root.right !== null) {
      st.push(root.right);
    }
    if (root.left !== null) {
      st.push(root.left);
    }
  }
  return preorder;
}
