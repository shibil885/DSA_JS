# 🗃️ Hash Table - Theory Question (Day 1)

## ❓ Question

**How do collisions work in hash tables?**

---

## 📖 Answer

In a **hash table**, each key is mapped to an index in an array using a **hash function**.  
A **collision** happens when **two different keys produce the same index**.

---

## 🧨 What is a Collision?

- Suppose:
  ```js
  hash("apple") → index 3
  hash("grape") → index 3
  ```
- Both keys hash to the same index → Collision occurs.

## ⚙️ How to Handle Collisions

There are two main strategies:

### 1. 🔗 Chaining (Separate Chaining)

- Each index holds a list (linked list or array) of key-value pairs.
- Multiple entries at the same index are stored in a bucket (list).

```text
Index 3 → [ ("apple", 10) → ("grape", 22) ]
```

✅ Pros:

- Easy to implement
- Doesn’t require resizing the array immediately

❌ Cons:

- Can degrade to O(n) time if too many collisions

### 2. 📦 Open Addressing

- If a collision occurs, find another empty slot using a probing method.

Types:

- Linear Probing: Check next index (i+1, i+2, ...)
- Quadratic Probing: Check i+1², i+2², ...
- Double Hashing: Use a second hash function

```text
Index 3 → "apple"
Index 4 → "grape" (because 3 was taken)
```

✅ Pros:

- No extra memory needed for lists

❌ Cons:

- Clustering can occur (many elements close together)
- More complex insert/search logic
