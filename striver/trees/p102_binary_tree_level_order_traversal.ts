import { TreeNode } from "./TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  let ans = Array<Array<number>>();
  let queue = Array<TreeNode>();

  queue.push(root);

  while (queue.length !== 0) {
    let level = Array<number>();

    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift();

      level.push(current?.val);
      if (current?.left) queue.push(current.left);
      if (current?.right) queue.push(current.right);
    }
    ans.push(level);
  }

  return ans;
}
