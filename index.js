function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
  }

function findOrAdd(rootNode, newNode) {
    if (rootNode.data === newNode.data) { return true }
    if (rootNode.data > newNode.data) {
        if (rootNode.left) {
            return findOrAdd(rootNode.left, newNode)
        } else {
            rootNode.left = newNode
        }
    } else {
        if (rootNode.right) {
            return findOrAdd(rootNode.right, newNode)
        } else {
            rootNode.right = newNode
        }
    }
}

function max(rootNode) {
    if (rootNode.right) {
        return max(rootNode.right)
    } else {
        return rootNode
    }
}

function min(rootNode) {
    if (rootNode.left) {
        return min(rootNode.left)
    } else {
        return rootNode
    }
}