class BinaryTreeNode {
    data: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(data: number) {
        this.data = data;
    }
}

const node = new BinaryTreeNode(1);
node.left = new BinaryTreeNode(2);
node.right = new BinaryTreeNode(3);
//...