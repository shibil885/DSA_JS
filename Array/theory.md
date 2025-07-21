# 📊 Array – Questions & Answers

Welcome to the array section! Below you'll find a curated list of theory questions with collapsible answers for quick revision and learning. 🚀

---

## 📘 Theory Questions

<details>
  <summary>1. What is the difference between an array and a list?</summary>

**Answer:**

- **Array** is a collection of elements stored in contiguous memory locations.
- **List** (like a Linked List) can be dynamic and non-contiguous.
- Arrays provide fast access (O(1)), while lists provide faster insertion/deletion (O(1) at head).

</details>

---

<details>
  <summary>2. What is the time complexity of basic array operations?</summary>

**Answer:**

| Operation     | Time Complexity |
|---------------|-----------------|
| Access        | O(1)            |
| Insert/Delete at End | O(1) (amortized) |
| Insert/Delete at Middle | O(n) |

</details>

---

## 💻 Coding Questions

<details>
  <summary>1. Two Sum</summary>

**Problem:**  
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Approach:**

- Use a HashMap to store value and index.
- For each element, check if `target - current` exists in the map.

```ts
function twoSum(nums: number[], target: number): number[] {
  co
