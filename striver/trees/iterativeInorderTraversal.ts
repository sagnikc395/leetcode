import { TreeNode } from "./TreeNode";

function iterativeInorderTraversal(root: TreeNode | null): number[] {
  let inorder = new Array<number>();
  if (root == null) {
    return inorder;
  }

  let st = new Array<TreeNode>();
  st.push(root);
  let node: TreeNode | null = root;
  while (true) {
    if (node !== null) {
      st.push(node);
      node = node.left;
    } else {
      if (st.length === 0) {
        break;
      }
      node = st?.pop();
      inorder.push(node!.val);
      node = node?.right;
    }
  }
  return inorder;
}
