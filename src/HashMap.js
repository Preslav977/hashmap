import LinkedList from "./LinkedList.js";

class HashMap {
  loadFactor = 0.8;

  capacity = 16;

  constructor() {
    this.buckets = [];

    for (let i = 0; i < this.capacity; i++) {
      const linkedList = new LinkedList();

      this.buckets.push(linkedList);
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * (hashCode + key.charCodeAt(i))) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (this.capacity * this.loadFactor > 12.8) {
      console.log("The capacity is filled!");
    } else {
      if (!this.buckets[index].contains(key)) {
        return this.buckets[index].append(key, value);
        // const getEntriesFromHashMap = this.entries().flat();

        // console.log(getEntriesFromHashMap);

        // const test = getEntriesFromHashMap.forEach((list) => this.hash(list));

        // console.log(this.buckets);

        // return test;
      } else {
        let findNodeWithThatKey = this.buckets[index].at(key);
        findNodeWithThatKey.value = value;
        return findNodeWithThatKey;
      }
    }
  }

  get(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const findIfHashExistsWithThatKey = this.buckets[index].at(key);

    if (findIfHashExistsWithThatKey === null) {
      return null;
    }

    findIfHashExistsWithThatKey.key === key;

    return findIfHashExistsWithThatKey;
  }

  has(key) {
    const index = this.hash(key);

    if (this.buckets[index].contains(key)) {
      return true;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);

    if (this.buckets[index].removeNode(key) !== null) {
      return true;
    } else {
      return false;
    }
  }

  length() {
    const findStoredKeys = this.buckets.filter(
      (bucket) => bucket.countNodes !== 0,
    );

    if (findStoredKeys.length === 0) {
      return 0;
    } else {
      const countAllNodes = findStoredKeys.reduce(
        (a, b) => a + b.countNodes,
        0,
      );

      return countAllNodes;
    }
  }

  clear() {
    const findKeys = this.buckets.filter(
      (bucket) => bucket.head !== null || bucket.tail !== null,
    );

    findKeys.map((bucket) => {
      bucket.head = null;

      bucket.countNodes = 0;
    });

    // console.log(buckets);
  }

  keys() {
    const pushKeys = [];

    const createCopyOfBuckets = [...this.buckets];

    const filterKeysIfExist = createCopyOfBuckets.filter(
      (buckets) => buckets.head !== null,
    );

    filterKeysIfExist.filter((bucket) => {
      const copyOfBuckets = Object.assign({}, bucket);

      while (copyOfBuckets.head !== null) {
        pushKeys.push(copyOfBuckets.head.key);

        copyOfBuckets.head = copyOfBuckets.head.nextNode;
      }
    });

    return pushKeys;
  }

  values() {
    const pushValues = [];

    const createCopyOfBuckets = [...buckets];

    const filterValuesIfExist = createCopyOfBuckets.filter(
      (buckets) => buckets.head !== null,
    );

    filterValuesIfExist.filter((bucket) => {
      const copyOfBuckets = Object.assign({}, bucket);

      while (copyOfBuckets.head !== null) {
        pushValues.push(copyOfBuckets.head.value);

        copyOfBuckets.head = copyOfBuckets.head.nextNode;
      }
    });

    return pushValues;
  }

  entries() {
    const pushKeyWithValue = [];

    const filterKeyWithValue = this.buckets.filter(
      (buckets) => buckets.head !== null,
    );

    filterKeyWithValue.filter((bucket) => {
      const copyOfBuckets = Object.assign({}, bucket);

      while (copyOfBuckets.head !== null) {
        pushKeyWithValue.push([
          copyOfBuckets.head.key,

          copyOfBuckets.head.value,
        ]);

        copyOfBuckets.head = copyOfBuckets.head.nextNode;
      }
    });

    return pushKeyWithValue;
  }
}

export default HashMap;
