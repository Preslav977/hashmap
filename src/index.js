import HashMap from "./HashMap.js";

const hashmap = new HashMap();

hashmap.hash("preslaw");

hashmap.hash("Rama");

hashmap.hash("rama");

hashmap.hash("Sita");

hashmap.hash("sita");

// console.log(hashmap.set("preslaw", "test"));

// console.log(hashmap.set("Sita", "new sita value"));

// console.log(hashmap.set("Rama", "rama value"));

// console.log(hashmap.set("rama", "rama with lower case r"));

console.log(hashmap.set("Sita", "sita value"));

console.log(hashmap.set("sita", "sita with lower case s"));

// console.log(hashmap.set("Sita", "sita value"));

console.log(hashmap.set("rama", "rama with lower case r"));

console.log(hashmap.set("Rama", "rama value"));

// console.log(hashmap.get("preslaw"));

// console.log(hashmap.has("preslaw"));

console.log(hashmap.get("Rama"));

console.log(hashmap.remove("Sita"));

console.log(hashmap.get("Rama"));
