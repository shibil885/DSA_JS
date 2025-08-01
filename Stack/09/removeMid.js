function removeMid(stack) {
    let n = stack.length;
    let removeMidIndex = (stack,curr, mid) => {
        if (!stack.length || curr == mid) {
            stack.pop();
            return;
        }
        let top = stack.pop()
        removeMidIndex(stack,curr + 1,mid);
        stack.push(top)
    }

    let midIndex = Math.floor(n/2);
    removeMidIndex(stack,0, midIndex)
    return stack
}

console.log(removeMid([1,2,3,4,5,6,7]));
