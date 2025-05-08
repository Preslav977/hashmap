import LinkedList from "./LinkedList.js";

const buckets = new LinkedList();

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
    const checkIfKeyExists = buckets.contains(key);

    if (!checkIfKeyExists) {
      buckets.prepend(key, value);
    } else {
      const findAndReplaceTheValueOfExistingKey = buckets.at(key);
      findAndReplaceTheValueOfExistingKey.value = value;
      return findAndReplaceTheValueOfExistingKey;
    }
  }
}

export default HashMap;
