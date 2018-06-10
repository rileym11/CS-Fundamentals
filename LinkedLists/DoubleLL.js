function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };
  let length = 0;
  let head = null;
  let tail = null;

  this.insert = function(position, element) {
    //check for out-of-bounds values
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        //add on first position
        if (!head) {
          //if the list is empty point the head and tail to the new node
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; //otherwise set the new nodes next to the current head and the current heads prev to the new node
          head = node;
        }
      } else if (position === length) {
        //last item
        current = tail; // set current node to the tail
        current.next = node; //make current tails next equal to the new node
        node.prev = current; //set new nodes prev to the tail
        tail = node; //mark the new node as the tail
      } else {
        while (index++ < position) {
          //Loop through the list until the index specified is reached
          previous = current;
          current = current.next;
        }
        node.next = current; //Link up the new node with the next and prevs of the node infront and behind
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++; //update size of list
      return true;
    } else {
      return false;
    }
  };
  this.removeAt = function(position) {
    //look for out-of-bounds values
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;
      //removing first item
      if (position === 0) {
        head = current.next; //The head will now either be null if it was the only node or equal the next node
        //if there is only one item, update tail
        if (length === 1) {
          // if there is only one node remaining set the tail to null
          tail = null;
        } else {
          head.prev = null; // otherwise set the new heads prev to null
        }
      } else if (position === length - 1) {
        //last item
        current = tail; // Start at the tail
        tail = current.prev; // set the new tail to the old tails prev
        tail.next = null; // set the new tails next to null
      } else {
        while (index++ < position) {
          // Loop the list to the right position
          previous = current;
          current = current.next;
        }
        //link previous with current's next - skip it
        //Current is the node we want to delete
        previous.next = current.next;
        current.next.prev = previous; //Set the node infronts prev to the previous node
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
  this.isEmpty = function() {
    return length === 0;
  };
  this.size = function() {
    return length;
  };
  this.toString = function() {
    let current = head, //Starting point for the loop
      string = ''; //Used as the end concatenated string
    while (current) {
      //While there is an element inside current node
      string +=
        (current.prev ? '-p' : '') +
        current.element +
        (current.next ? 'n-' : '');
      current = current.next; //Iterate next element
    }
    return string;
  };
}

let list = new DoublyLinkedList();
list.insert(0, 13);
list.insert(1, 10);
list.insert(2, 15);
list.insert(3, 11);
console.log(list.toString());
list.insert(list.size(), 3311);
console.log(list.toString());

// console.log(list.size());
