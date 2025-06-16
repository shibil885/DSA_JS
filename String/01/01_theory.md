# 📘 String - Theory Question (Day 1)

## ❓ Question

**What is string immutability?**

---

## 📖 Answer

**String immutability** means that **once a string is created, it cannot be changed or modified**.  
Any operation that seems to modify a string actually creates a **new string** object.

---

## 📦 Example

```js
let str = "hello";
str[0] = "H";        // ❌ This has no effect
console.log(str);    // ➡️ "hello"

let newStr = str.toUpperCase();
console.log(newStr); // ➡️ "HELLO"
