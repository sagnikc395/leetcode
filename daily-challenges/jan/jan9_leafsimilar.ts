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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
function dfs(root: TreeNode| null, leaves: number[]): void {
    if(root == null){
        return;
    }
    if(root.left == null && root.right == null){
        leaves.push(root.val);
        return;
    }
    dfs(root.left,leaves);
    dfs(root.right,leaves);
}    
let leaves1: number[] = [];
let leaves2: number[] = [];
dfs(root1,leaves1);
dfs(root2,leaves2);
//deep check if every elements present and same length or not 
return (leaves1.length === leaves2.length) && 
leaves1.every((val,idx) => val == leaves2[idx]);

};

