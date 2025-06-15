# 📘 Array - Theory Question (Day X)

## ❓ Question

**What is the time complexity of searching in a sorted array?**

---

## 📖 Answer

The time complexity of searching in a **sorted array** depends on the algorithm used:

### 1. 🔍 **Linear Search**

- **Description**: Start from the beginning and check each element one by one.
- **Time Complexity**: `O(n)`
- **Use Case**: When the array is small or unsorted.

### 2. 🧮 **Binary Search**

- **Description**: Repeatedly divide the sorted array in half to find the target.
- **Time Complexity**: `O(log n)`
- **Conditions**:
  - Array must be **sorted**.
  - Works efficiently for large datasets.
- **Space Complexity**:
  - Iterative: `O(1)`
  - Recursive: `O(log n)` due to call stack

---

## ✅ Example

```text
Sorted Array: [1, 3, 5, 7, 9, 11]
Target: 9

Step 1: mid = 3 → array[3] = 7 → 9 > 7 → search right half
Step 2: mid = 4 → array[4] = 9 → ✅ found
```
