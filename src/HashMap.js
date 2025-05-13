import LinkedList from "./LinkedList.js";

const buckets = [];

for (let i = 0; i < 16; i++) {
  const linkedList = new LinkedList();

  buckets.push(linkedList);
}

class HashMap {
  loadFactor = 0.8;

  capacity = 16;

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

    if (!buckets[index].contains(key)) {
      return buckets[index].prepend(key, value);
    } else {
      buckets[index].head.value = value;

      return buckets[index].head;
    }
  }
}

export default HashMap;
