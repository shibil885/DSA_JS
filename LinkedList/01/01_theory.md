# 🔗 Linked List - Theory Question (Day 1)

## ❓ Question

**What is the difference between a singly linked list and a doubly linked list?**

---

## 📖 Answer

A **linked list** is a linear data structure where each element (node) points to the next one.  
There are two common types:

---

### 1. 👉 Singly Linked List

- Each node has **2 parts**:
  - `data`: The value
  - `next`: A pointer to the **next node**
- You can only **traverse forward**

```text
[10 | next] → [20 | next] → [30 | null]
```

✅ Advantages:
 - Simple to implement
 - Uses less memory than doubly

❌ Limitations:
 - Can't traverse backward
 - Deletion is slower for non-head nodes (needs previous node)


### 2. 🔁 Doubly Linked List
- Each node has **3 parts**:
  - `prev`: A pointer to the previous node
  - `data`: The value
  - `next`: A pointer to the **next node**
- Can traverse both forward **and backward**
```text
  null ← [10 | prev | next] ↔ [20 | prev | next] ↔ [30 | prev | null]
```

✅ Advantages:
- Bidirectional traversal
- Easier deletion and insertion (no need to track previous node)

❌ Limitations:
- Uses more memory (extra pointer)
- Slightly more complex logic
