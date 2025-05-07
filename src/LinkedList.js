import Node from "./Node";

class LinkedList {
  head;

  tail;

  countNodes = 0;

  append(value) {
    if (!this.head) {
      const newNode = new Node(value);
      this.head = newNode;
      console.log(this.head);
      this.countNodes += 1;
    } else {
      this.tail = new Node(value);
      this.head.nextNode = this.tail;
      console.log(this.head);
      this.countNodes += 1;
    }
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      console.log(this.head);
      this.countNodes += 1;
    } else {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      console.log(this.head);
      this.countNodes += 1;
    }
  }

  size() {
    console.log(this.countNodes);
    return this.countNodes;
  }

  findHead() {
    if (this.head) {
      // console.log(this.head);
      return this.head;
    }
  }

  findTail() {
    let searchForLastNode = this.head;
    while (searchForLastNode !== null) {
      searchForLastNode = searchForLastNode.nextNode;
      if (searchForLastNode.nextNode === null) {
        // console.log(searchForLastNode);
        return searchForLastNode;
      }
    }
  }

  at(index) {
    let nodePosition = 0;
    let searchForNode = this.head;

    if (nodePosition === 0 && index === 0) {
      // console.log(searchForNode);
      return searchForNode;
    }

    while (searchForNode !== index) {
      nodePosition += 1;
      searchForNode = searchForNode.nextNode;
      // console.log("This is the the wanted index", index);
      // console.log("This is the node position", nodePosition);
      if (index === nodePosition) {
        return searchForNode;
      }
    }
  }

  pop() {
    const headOfList = this.head;

    let previousNodeBeforeTail = this.head;

    if (headOfList.nextNode === null) {
      throw new Error("You cannot delete the head");
    } else {
      while (previousNodeBeforeTail !== null) {
        if (
          previousNodeBeforeTail.nextNode !== null &&
          previousNodeBeforeTail.nextNode.nextNode === null
        ) {
          previousNodeBeforeTail.nextNode = null;
          return headOfList;
        }

        previousNodeBeforeTail = previousNodeBeforeTail.nextNode;
      }
    }
  }

  contains(value) {
    let searchValue = this.head;

    if (searchValue.value === value) {
      return true;
    }

    while (searchValue.value !== value) {
      searchValue = searchValue.nextNode;

      if (searchValue.value === value) {
        return true;
      }

      if (searchValue.nextNode === null) {
        // console.log(searchValue.value);
        // console.log(value);
        return false;
      }
    }
  }

  findValue(value) {
    let nodePosition = 0;
    let searchNodeIndex = this.head;

    if (searchNodeIndex.value === value && nodePosition === 0) {
      // console.log(nodePosition);
      return nodePosition;
    }

    while (searchNodeIndex.value !== value) {
      nodePosition += 1;
      searchNodeIndex = searchNodeIndex.nextNode;
      if (searchNodeIndex.value === value) {
        // console.log(nodePosition);
        return nodePosition;
      }

      if (searchNodeIndex.nextNode === null) {
        return null;
      }
    }
  }

  toString() {
    let startFromHead = this.head;
    let convertToStringsLists = "";
    convertToStringsLists += `(${startFromHead.value}) -> `;
    while (startFromHead !== null) {
      startFromHead = startFromHead.nextNode;

      if (startFromHead !== null) {
        convertToStringsLists += `(${startFromHead.value}) -> `;
      }
    }
    convertToStringsLists += " null";
    return convertToStringsLists;
  }
}

export default LinkedList;
