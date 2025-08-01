function unshift(stack, item) {
    if (!stack.length) {
        stack.push(item);
        return
    }

    let top = stack.pop();
    unshift(stack,item)
    stack.push(top);
}

function reverse(stack) {
    if (!stack.length) return;

    let top = stack.pop()
    reverse(stack)
    unshift(stack, top)
    return stack
}

console.log(reverse([1,2,3,4,5]));
