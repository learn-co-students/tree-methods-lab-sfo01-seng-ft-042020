function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }

  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(rootNode, newNode) {
  if (rootNode.data == newNode.data) {
    return true;
  }
  if (newNode.data < rootNode.data) {
    if (rootNode.left) {
      return findOrAdd(rootNode.left, newNode);
    } else {
      return (rootNode.left = newNode);
    }
  }
  if (newNode.data > rootNode.data) {
    if (rootNode.right) {
      return findOrAdd(rootNode.right, newNode);
    } else {
      return (rootNode.right = newNode);
    }
  }
}

function max(node) {
  return node.right ? max(node.right) : node;
}

function min(node) {
  return node.left ? min(node.left) : node;
}
