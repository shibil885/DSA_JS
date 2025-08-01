function sortedInsertion(stack, element) {
    if (!stack.length || stack[stack.length -1] <= element) {
        stack.push(element);
        return;
    }
    let top = stack.pop();
    sortedInsertion(stack, element);
    stack.push(top);
}
function sort(stack) {
    if(!stack.length) return;
    let top = stack.pop();
    sort(stack);
    sortedInsertion(stack, top)
    return stack
}

console.log(sort([2,4,1,3,5]));
