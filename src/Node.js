class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get nextNode() {
    return this._nextNode;
  }

  set nextNode(value) {
    this._nextNode = value;
  }
}

export default Node;
