function PriorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    // Create special queue element with a priority
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for (let i = 0; i < items.length; i++) {
      // Looop through the queue
      if (queueElement.priority < items[i].priority) {
        //Compare priority
        items.splice(i, 0, queueElement); // Insert the element at the specified index
        added = true;
        break; // Stop looping
      }
    }
    if (!added) {
      items.push(queueElement); //If the queue is empty or the element has the lowest priority add it to the end
    }
  };
  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element}  -  ${items[i].priority}`);
    }
  };
  this.dequeue = function() {
    return items.shift();
  };
  this.peek = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };
}
