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
import { TreeNode } from "./TreeNode";
function postorder(root: TreeNode | null, arr: Array<number>) {
  if (root == null) {
    return;
  }
  postorder(root.left, arr);
  postorder(root.right, arr);
  arr.push(root.val);
}

function postorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  postorder(root, res);
  return res;
}
