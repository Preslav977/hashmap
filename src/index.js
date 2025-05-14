import HashMap from "./HashMap.js";

const hashmap = new HashMap();

console.log(hashmap.hash("preslaw"));

console.log(hashmap.hash("Rama"));

console.log(hashmap.hash("Sita"));

console.log(hashmap.set("preslaw", "test"));

console.log(hashmap.set("Sita", "sita value"));

// console.log(hashmap.set("Sita", "new sita value"));

console.log(hashmap.set("Rama", "rama value"));

// console.log(hashmap.set("Rama", "new rama value"));

// console.log(hashmap.get("preslaw"));

// console.log(hashmap.has("preslaw"));

console.log(hashmap.remove("Rama"));

// console.log(hashmap.get("preslaw"));

// console.log(hashmap.remove("tupanQ"));

// console.log(hashmap.get("tupanq"));

// console.log(hashmap.set("preslaw", "test123"));

// console.log(hashmap.set("preslaw", "testing"));
