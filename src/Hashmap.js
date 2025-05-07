class Hashmap {
  constructor() {
    this.loadFactor = 0.8;
    this.capacity = 16;
  }

  get loadFactor() {
    return this._loadFactor;
  }

  set loadFactor(value) {
    this._loadFactor = value;
  }

  get capacity() {
    return this._capacity;
  }

  set capacity(value) {
    this._capacity = value;
  }
}

export default Hashmap;
