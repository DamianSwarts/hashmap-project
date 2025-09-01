import { HashMap } from './hashmap.js';

const test = new HashMap(16, 0.75);

// Initial population
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("Initial length:", test.length());
console.log("Initial capacity:", test.capacity);

// Overwrite existing keys
test.set('apple', 'green apple');
test.set('banana', 'ripe banana');
test.set('dog', 'golden retriever');

console.log("Length after overwrite:", test.length());

// Trigger resize
test.set('moon', 'silver');

console.log("Length after resize:", test.length());
console.log("New capacity after resize:", test.capacity);

// Overwrite after resize
test.set('moon', 'crescent');
test.set('lion', 'king');

console.log("Get moon:", test.get('moon'));
console.log("Get lion:", test.get('lion'));

// Test other methods
console.log("Has kite:", test.has('kite'));
console.log("Remove kite:", test.remove('kite'));
console.log("Has kite after removal:", test.has('kite'));
console.log("Length after removal:", test.length());

console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

test.clear();
console.log("Length after clear:", test.length());
console.log("Keys after clear:", test.keys());
