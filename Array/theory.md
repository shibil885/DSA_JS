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
```
Accessing a missing index returns undefined, but the length still includes it.
</details>

---
<details> <summary>3. What is the difference between Homogeneous and Heterogeneous Arrays?</summary>
Answer:

A homogeneous array contains elements of the same data type.

Example: [1, 2, 3, 4] (all numbers)

A heterogeneous array contains elements of different data types.

Example (in JavaScript): [1, "hello", true, null]

Language-specific behavior:

In strongly typed languages like C++, Java, or C#, arrays are usually homogeneous.

In dynamically typed languages like JavaScript or Python, arrays can be heterogeneous.

Homogeneous arrays are faster and more memory efficient due to predictable type layouts.

</details>

---

<details> <summary>4. What is a Jagged Array?</summary>
Answer:

A jagged array (also called an array of arrays) is a multi-dimensional array where inner arrays can have different lengths.

Unlike a regular 2D array (matrix), jagged arrays do not require all rows to have the same number of columns.

Common in languages like C# and Java.

🔸 Example (JavaScript-style):
```js
const jagged = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
console.log(jagged[1][1]); // Output: 5
```
🔸 Visual Structure:
```css
Copy
Edit
Row 0 → [1, 2, 3]
Row 1 → [4, 5]
Row 2 → [6, 7, 8, 9]
```
Useful when the data varies in size for each row (e.g., number of students in different classes).

</details>

---

<details> <summary>5. What is a Squash (Flattened) Array?</summary>
Answer:

A squash array (or flattened array) is a one-dimensional version of a multi-dimensional or nested array.

The process of converting a nested array into a flat array is called flattening or squashing.

🔸 Example:
```js

const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(2);  // [1, 2, 3, 4, 5, 6]
```
In the above, .flat(2) flattens the array up to 2 levels deep.

🔸 Without .flat() (manual approach):
```js
function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
```
This technique is useful when:

Dealing with deeply nested JSON structures.

Working with UI components like tree views.

Normalizing data for processing or storage.

</details>