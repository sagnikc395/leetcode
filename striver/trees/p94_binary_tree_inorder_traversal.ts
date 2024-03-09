import { TreeNode } from "./TreeNode";

function inorder(root: TreeNode | null, res: Array<number>) {
  if (root === null) {
    return;
  }
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
}

function inorderTraversal(root: TreeNode | null): number[] {
  let ans: number[] = [];
  inorder(root, ans);
  return ans;
}
