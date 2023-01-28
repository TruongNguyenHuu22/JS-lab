function createBinarySearchTree(initKeyList) {
    let root = null;

    if (Array.isArray(initKeyList) && initKeyList.length > 0) {
        const initKeySet = new Set(initKeyList);
        [...initKeySet].forEach((key) => {
            root = insert(root, key);
        });
    }
    function insert(node, key) {
        let newNode = {
            key: key,
            right: null,
            left: null,
        };
        if (node === null) return newNode;
        if (node.key > key) {
            node.left = insert(node.left, key);
        }
        if (node.key < key) {
            node.right = insert(node.right, key);
        }
        return node;
    }
    function findMin(node) {
        if (node === null) return null;
        let minNode = node;
        while (minNode.left !== null) {
            minNode = minNode.left;
        }
        return minNode;
    }
    function search(node, key) {
        if (!node) return null;
        if (key > node.key) {
            return search(node.right, key);
        }
        if (key < node.key) {
            return search(node.left, key);
        }

        return node;
    }

    function getMaxNodesCount(node) {
        if (!node) {
            return 0;
        }
        const leftHeight = getMaxNodesCount(node.left);
        const rightHeight = getMaxNodesCount(node.right);

        return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
    }

    function getHeight() {
        const height = getMaxNodesCount(root);
        return height > 0 ? height - 1 : 0;
    }
    return { root, insert, findMin, search, getHeight };
}

const binarySearchTree = createBinarySearchTree([10, 7, 15, 6, 8, 9, 23, 5]);

// console.log(binarySearchTree.search(binarySearchTree.root, 15));
console.log(binarySearchTree.getHeight());
