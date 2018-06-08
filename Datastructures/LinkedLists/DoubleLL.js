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
          current.prev = node; //NEW {2}
          head = node;
        }
      } else if (position === length) {
        //last item //NEW
        current = tail; // {3}
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          //{4}
          previous = current;
          current = current.next;
        }
        node.next = current; //{5}
        previous.next = node;
        current.prev = node; //NEW
        node.prev = previous; //NEW
      }
      length++; //update size of list
      return true;
    } else {
      return false;
    }
  };
}
