//\\\\

function BinarySearchTree() {
  var Node = function(key) {
    // Helper class to instantiate each node on the tree with pointers to the left and right
    this.key = key; // Call it a key for proper terminology
    this.left = null;
    this.right = null;
  };

  var root = null; //Start the root as null

  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      //If the new node's key is less than the current node key, then we need to check the left child of the node
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
}

//
// Tests

var tree = new BinarySearchTree();
tree.insert(11);
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

function printNode(value) {
  //just print each nodes key
  console.log(value);
}
console.log('============IN============');
tree.inOrderTraverse(printNode); // use the print node function as the callback
console.log('============PRE============');
tree.preOrderTraverse(printNode);
console.log('============POST============');
tree.postOrderTraverse(printNode);
