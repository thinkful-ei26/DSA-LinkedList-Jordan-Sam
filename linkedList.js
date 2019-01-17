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
    console.log('here I am')
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

  insertAfter(newItem, item){

  }

  insertBefore(newItem, refItem){
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode) {
      if (currNode.next === refItem ){
        return previousNode.next = new _Node(newItem, refItem);
      }
      previousNode = currNode;
      currNode = currNode.next;
    }
  }



}

// const display = (SLL) => {

// }


function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  //   SLL.insertBefore('Athena', 'Boomer');
  //   SLL.remove('squirrel');
  //   console.log(SLL.find(3));
  SLL.insertAt('Kat', 3);
  console.log(SLL);
//   console.log('ive ran in main');
}

main();

