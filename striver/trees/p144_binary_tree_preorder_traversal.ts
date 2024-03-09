/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorder(root: TreeNode | null, res: number[]) {
  if (root === null) {
    return;
  }
  res.push(root.val);
  preorder(root.left, res);
  preorder(root.right, res);
}

function preorderTraversal(root: TreeNode | null): number[] {
  let ans: number[] = [];
  preorder(root, ans);
  return ans;
}
