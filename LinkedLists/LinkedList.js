function LinkedList() {
  let Node = function(element) {
    // items we add will be nodes
    this.element = element;
    this.next = null;
  };
  let length = 0; // Stores the length
  let head = null; // First node

  this.append = function(element) {
    let node = new Node(element),
      current; //Current head
    if (head === null) {
      //first node on list
      head = node;
    } else {
      current = head; //Get the head to start
      //loop the list until find last item
      while (current.next) {
        current = current.next;
      }
      //get last item and assign next to node to make the link
      current.next = node;
    }
    length++; //update size of list
  };
  this.insert = function(position, element) {
    //check for out-of-bounds values
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        //add on first position
        node.next = current; //Slides in before the head
        head = node;
      } else {
        while (index++ < position) {
          //Loop through untill the desired index is reached
          previous = current;
          current = current.next;
        }
        node.next = current; //Place node inbetween the current and previous nodes by setting their next values
        previous.next = node;
      }
      length++; //update size of list
      return true;
    } else {
      return false; //Return false if the entered position is invalid
    }
  };
  this.removeAt = function(position) {
    //check for out-of-bounds values
    if (position > -1 && position < length) {
      let current = head, //Start at the head
        previous, // Previous element
        index = 0; // Internal index
      //removing first item
      if (position === 0) {
        // To remove the first index simply re-assign the head to the next element
        head = current.next;
      } else {
        while (index++ < position) {
          // Iterate through the list until the position is reached
          previous = current; // previous block becomes the current node
          current = current.next; // current node becomes the next node
        }
        //link previous with current's next to skip over the current node and delete it -- works for the last node and anything in the middle
        previous.next = current.next;
      }
      length--; // reduce the lists length
      return current.element; // This will be the prev node
    } else {
      return null; // if position is invalid return null
    }
  };
  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.indexOf = function(element) {
    let current = head, //{1}
      index = -1;
    while (current) {
      //While there is an element inside current node
      index++; //Add one to the index and set current to the next node to continue on the loop
      if (element === current.element) {
        return index; //If specified element matches then return the index
      }
      current = current.next;
    }
    return -1;
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
      string += current.element + (current.next ? 'n' : '');
      current = current.next; //Iterate next element
    }
    return string;
  };
  this.getHead = function() {
    return head;
  };
}
module.exports = LinkedList;

let list = new LinkedList();
list.append(13);
list.append(10);
list.append(15);
list.append(11);
console.log(list.toString());
list.insert(2, 66);
console.log(list.getHead());
