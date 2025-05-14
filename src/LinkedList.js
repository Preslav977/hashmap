import Node from "./Node.js";

class LinkedList {
  head = null;

  tail = null;

  countNodes = 0;

  append(key, value) {
    if (!this.head) {
      const newNode = new Node(key, value);

      this.countNodes += 1;

      this.head = newNode;

      return this.head;
    } else {
      this.tail = new Node(key, value);

      this.head.nextNode = this.tail;

      this.countNodes += 1;

      return this.head;
    }
  }

  prepend(key, value) {
    if (!this.head) {
      this.head = new Node(key, value);

      this.countNodes += 1;

      return this.head;
    } else {
      const newNode = new Node(key, value);

      newNode.nextNode = this.head;

      this.head = newNode;

      this.countNodes += 1;

      return this.head;
    }
  }

  size() {
    return this.countNodes;
  }

  findHead() {
    if (this.head) {
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

  at(key) {
    let searchForNode = this.head;

    if (searchForNode === null) {
      return null;
    }

    if (searchForNode.key === key) {
      return searchForNode;
    }

    while (searchForNode.key !== key) {
      searchForNode = searchForNode.nextNode;

      if (searchForNode === null) {
        return null;
      }

      if (searchForNode.key === key) {
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

  contains(key) {
    let searchValue = this.head;

    if (searchValue === null) {
      return false;
    }

    if (searchValue.key === key) {
      return true;
    }

    while (searchValue.key !== key) {
      searchValue = searchValue.nextNode;

      if (searchValue === null) {
        return false;
      }

      if (searchValue.key === key) {
        return true;
      }
    }
  }

  findKey(key) {
    let nodePosition = 0;
    let searchNodeIndex = this.head;

    if (searchNodeIndex.key === key && nodePosition === 0) {
      // console.log(nodePosition);
      return nodePosition;
    }

    while (searchNodeIndex.key !== key) {
      nodePosition += 1;
      searchNodeIndex = searchNodeIndex.nextNode;
      if (searchNodeIndex.key === key) {
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

  removeNode(key) {
    const headOfList = this.head;
    let removeNextNodeAfterHead = this.head;

    if (this.head.key === key && this.head.nextNode === null) {
      this.head = this.head.nextNode;

      return true;
    } else {
      while (removeNextNodeAfterHead !== null) {
        if (
          removeNextNodeAfterHead.key === key &&
          removeNextNodeAfterHead.nextNode !== null
        ) {
          removeNextNodeAfterHead.nextNode = null;

          return headOfList;
        }

        removeNextNodeAfterHead = removeNextNodeAfterHead.nextNode;
      }
    }
  }
}

export default LinkedList;
