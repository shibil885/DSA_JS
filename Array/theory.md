# 📊 Array – Questions & Answers

Welcome to the array section! Below you'll find a curated list of theory questions with collapsible answers for quick revision and learning. 🚀

---

## 📘 Theory Questions

<details>
<summary>1. What is a Multi-Dimensional Array?</summary>
Answer:

A multi-dimensional array is an array where each element is itself another array.

It allows data to be stored in tables (2D), cubes (3D), or higher dimensions.

Common use cases include: matrices, grids, image pixels, and game boards.

Example of a 2D array:

```js
const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6
```
</details>

---

<details> <summary>2. What is a Sparse Array?</summary>
Answer:

A sparse array is an array in which most of the elements are empty, undefined, or default values (like 0 or null).

It saves memory by not allocating space for all indices.

Common in situations where the data is mostly empty or sparse, like storing pixel data, graph adjacency matrices, or index-based caches.

In JavaScript, a sparse array can be created like this:

```js

const arr = [];
arr[10] = 'hello';
console.log(arr);         // [ <10 empty items>, 'hello' ]
console.log(arr.length);  // 11
Accessing a missing index returns undefined, but the length still includes it.
```
</details>
