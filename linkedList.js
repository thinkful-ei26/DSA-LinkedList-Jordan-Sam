'use strict';

class _Node {
  constructor(value, next) {
    this.value=value;
    this.next=next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) { 
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item 
    while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item){ 
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

//each time it goes through the while loop:
//previous is set to current
//current is set to next

  insertAt(data, index){
    let count = 0;
    let previous = this.head;
    let current = this.head;

    while(current){
      if(count === (index)){
        previous.next = new _Node(data, current)
        return; 
      }

      previous = current;
      current = current.next;
      count = count + 1
    }
  }

  insertAfter(newItem, refItem){
    let current = this.head;
    let previous = this.head;
    while (current) {
      if (current.value === refItem ){
        current.next = new _Node(newItem, current.next)
        return;
      }
      previous = current;
      current = current.next;
    }
  }

//traverse to insertion point (find refItem)
//create the new node (newItem)
//set the newItem's next pointer to the refItem
  insertBefore(newItem, refItem){
    let current = this.head;
    let previous = this.head;
    while (current) {
      if (current.value === refItem ){
        previous.next = new _Node(newItem, current)
        return;
      }
      previous = current;
      current = current.next;
    }
  }

}

const SLL = new LinkedList();

function main() {
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  //   SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  // console.log(SLL);
  display(SLL)
  return main;
}
main()

//display the links list
function display(list){
  let current = list.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  } 
}

//initiate a count
//pass in the linked list
//if list exists, loop through each item and increment
//return 

function size(list){
  let count = 0
  let current = list.head;
  if (current != null){
    return count;
  }
  else{
    count++
  }
  while(!(current.next == null)){
    count++;
    current = current.next
  }
  return count;        
}


// function isEmpty(SLL){
// if (SLL === undefined || null)
// console.log('The List is empty')   
// return           
// }

// function findPrevious(node){
// main
// }


