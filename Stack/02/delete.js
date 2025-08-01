function deleteValue(stack, target) {
    let tempStack = [];
    while (stack.length > 0) {
        let top = stack.pop();
        if (top == target) break;
        tempStack.push(top);
    }
    while (tempStack.length > 0) {
        stack.push(tempStack.pop())
    }
    return stack
}

console.log(deleteValue([1,2,3,4,5,6], 1));
