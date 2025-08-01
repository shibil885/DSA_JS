function sort(array) {
    let stack = [];
    let temp = [];

    for (const element of array) {
        while (stack.length && stack[stack.length -1] > element) {
            temp.push(stack.pop());
        }
        stack.push(element);

        while (temp.length) {
            stack.push(temp.pop());
        }
    }
    return 
}

console.log(sort([3,2,5,4,1]));
