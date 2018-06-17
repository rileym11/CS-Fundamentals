//\\\\

function BinarySearchTree() {
  var Node = function(key) {
    // Helper class to instantiate each node on the tree with pointers to the left and right
    this.key = key; // Call it a key for proper terminology
    this.left = null;
    this.right = null;
  };

  var root = null; //Start the root as null

  // ==============================================================================================================================================================================

  // Methods

  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      //If the new node's key is less than the current node key, then check the left child of the node
      if (node.left === null) {
        //if there is no node to the left then add the new node there
        node.left = newNode;
      } else {
        insertNode(node.left, newNode); //otherwise recursively call this function again using the left node instead
      }
    } else {
      //If the new nodes key is more than the current node key then check right
      if (node.right === null) {
        //if there is no node to the right then add the new node there
        node.right = newNode;
      } else {
        insertNode(node.right, newNode); ////otherwise recursively call this function again using the right node instead
      }
    }
  };

  this.insert = function(key) {
    var newNode = new Node(key);
    if (root === null) {
      //if the tree is empty then the new node will be the root
      root = newNode;
    } else {
      insertNode(root, newNode); //if not then pass the root node and the new node into the helper function
    }
  };

  // ==============================================================================================================================================================================
  // ==============================================================================================================================================================================

  this.remove = function(key) {
    root = removeNode(root, key); //Call remove node function with the specified key and original root node as args
    // set the new root value to the return of this function to update it
  };
  var findMinNode = function(node) {
    //Return the minimum node
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };
  var removeNode = function(node, key) {
    if (node === null) {
      //stop point that checks if the node is valid
      return null;
    }
    if (key < node.key) {
      // if the key is less, go left
      node.left = removeNode(node.left, key); //recursively call with left node
      // ^^^^^ set the return value to the nodes left value so that if something is deleted(returns null) or is updated then the pointer/updated will be erased as well
      return node; //return the node with the updated left value
    } else if (key > node.key) {
      //otherwise if its more, go right //recursively call with right node
      node.right = removeNode(node.right, key);
      // ^^^^^ set the return value to the nodes right value so that if something is deleted(returns null) or is updated then the pointer will be erased/updated as well
      return node; //return the node with the updated right value
    } else {
      //lastly if the key is equal to node.key

      //case 1 - a leaf node
      if (node.left === null && node.right === null) {
        //if the node is a leaf node (no children)
        node = null;
        return node; //returning null will set the node to null and the parents pointer will be updated
      }

      //case 2 - a node with only 1 child
      if (node.left === null) {
        //if there is no left pointer we will change the reference of the node to its right child
        node = node.right;
        return node; // return the updated node
      } else if (node.right === null) {
        //if there is no right pointer we will change the reference of the node to its left child
        node = node.left;
        return node; // return the updated node
      }

      //case 3 - a node with 2 children
      var aux = findMinNode(node.right); //find the min node on the right
      node.key = aux.key; //replace the nodes key we want to delete with the lowest right nodes key
      node.right = removeNode(node.right, aux.key); //set the old min right node to null because we switched it up
      return node; //return the updated node
    }
  };

  // ==============================================================================================================================================================================
  // ==============================================================================================================================================================================

  //   Traversing

  this.inOrderTraverse = function(callback) {
    //practical use could be to sort a tree.
    inOrderTraverseNode(root, callback); //Call the helper function with the root node and the callback function
  };
  var inOrderTraverseNode = function(node, callback) {
    // Returns all keys in order from lowest to highest

    //Each time this function is called through recursion, a new instance of it is created so once for ex.
    //if it is on the left most leaf node with no right or left values, that instance of the function will
    //cease but there will still be instances of it running higher up on the tree
    if (node !== null) {
      //If the node doesnt exist then stop the recursion
      inOrderTraverseNode(node.left, callback); //visit all the way down left and call again recursively on each node (lower)
      callback(node.key); // once there is no node to the left use the callback function on the key(this case is console.log) before going right as the parent node will be lower than the nodes on the right
      inOrderTraverseNode(node.right, callback); //visit right and call recursively (higher)
    }
  };

  // ==============================================================================================================================================================================

  this.preOrderTraverse = function(callback) {
    //practical use could be to print a structured document.
    preOrderTraverseNode(root, callback);
  };
  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      //If the node doesnt exist then stop the recursion

      callback(node.key); //perform callback function first (console.log the key)
      preOrderTraverseNode(node.left, callback); //then go left and repeat callback until there is no more left values
      preOrderTraverseNode(node.right, callback); ///go back up the tree and go right for each node
    }
  };

  // ==============================================================================================================================================================================

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };
  var postOrderTraverseNode = function(node, callback) {
    // practical use could be computing the space used by a file in a directory and its subdirectories
    if (node !== null) {
      //stop recursion when there are no more nodes
      postOrderTraverseNode(node.left, callback); //go all the way left and recursively run this function on each node down the tree
      postOrderTraverseNode(node.right, callback); //then go right and recursively run this function on each node down the tree
      callback(node.key); //finally run the callback function once there are either no left/right nodes or this function already ran to the left and right children
    }
  };

  // ==============================================================================================================================================================================
  // ==============================================================================================================================================================================

  // Min Max and Specific searches

  this.min = function() {
    return minNode(root); //Call helper function with root as the arg
  };

  var minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left; // Iterate the left edge of the tree until the last node is found
      }
      return node.key; //once the left most leaf node is found, return its key
    }
    return null; // if the node is invalid
  };

  // ==============================================================================================================================================================================

  this.max = function() {
    return maxNode(root); //Call helper function with root as the arg
  };
  var maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        //same as min but go right instead
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  // ==============================================================================================================================================================================

  this.search = function(key) {
    return searchNode(root, key); //Call helper function with root and specified key as the args
  };
  var searchNode = function(node, key) {
    if (node === null) {
      return false; // if node is invalid
    }
    if (key < node.key) {
      //if the arg key is smaller than the current nodes key, continue search to the left
      return searchNode(node.left, key);
    } else if (key > node.key) {
      //if the arg key is bigger than the current nodes key, continue search to the right
      return searchNode(node.right, key);
    } else {
      return true; //Otherwise, the arg key is equal to the current nodes key, so return true to indicate that it was found
    }
  };
}

//
// Tests

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(7);

tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
console.log(tree.max());
console.log(tree.min());

function printNode(value) {
  //just print each nodes key
  console.log(value);
}
console.log('============IN=ORDER============');
tree.inOrderTraverse(printNode); // use the print node function as the callback
console.log('============PRE=ORDER============');
tree.preOrderTraverse(printNode);
console.log('============POST=ORDER============');
tree.postOrderTraverse(printNode);

tree.remove(7);
console.log('============DEL=PRE=ORDER============');
tree.preOrderTraverse(printNode);
