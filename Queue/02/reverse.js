function reverseQueue(queue) {
    let stack = [];

    while (queue.length) {
        stack.push(queue.shift())
    }
    while (stack.length) {
        queue.push(stack.pop())
    }
    return queue
}


// console.log(reverseQueue([1,2,3,4,5]));


function recursionToReverseQ(queue) {
    if (!queue.length) return;
    let front = queue.shift();
    recursionToReverseQ(queue);
    queue.push(front);
    return queue;
}

console.log(recursionToReverseQ([1,2,3,4,5,6]));

