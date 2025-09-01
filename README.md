# hashmap-project
# Custom HashMap Implementation in JavaScript

This project is a full-featured implementation of a `HashMap` data structure in vanilla JavaScript. It was built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

The goal is to understand how hashmaps work under the hood — including hashing, collision handling, dynamic resizing, and efficient key-value storage — by building one from scratch.

---

## Features

- Custom hash function with overflow protection
- Collision handling via chaining (arrays in buckets)
- Dynamic resizing when load factor is exceeded
- Full CRUD operations:
  - `set(key, value)`
  - `get(key)`
  - `has(key)`
  - `remove(key)`
- Utility methods:
  - `length()`
  - `clear()`
  - `keys()`
  - `values()`
  - `entries()`

---

## File Structure

```plaintext
├── hashmap.js         # Contains the HashMap class
└── testHashMap.js     # Test suite to verify functionality
