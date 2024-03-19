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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  //swap pointers
  let temp = root;
  invertTree(temp.left);
  invertTree(temp.right);

  temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}
