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

import {TreeNode} from './TreeNode';

function maxAncestorDiff(root: TreeNode | null): number {
    let res : number = 0;
    const dfs = (node: TreeNode | null ,max : number, min : number ) => {
        if(node===null){
            res = Math.max(res, Math.abs(max-min));
            return;
        }
        max = Math.max(node.val, max);
        min = Math.min(node.val, min);
        dfs(node.left, max, min);
        dfs(node.right, max, min);
    }
    dfs(root, root!.val , root!.val);
    return res;
};