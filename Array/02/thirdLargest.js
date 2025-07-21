//THis only works for distinct Array
function thirdLargestElem(arr) {
    let largest = -Infinity;
    let secLargest = -Infinity;
    let thirLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            thirLargest = secLargest;
            secLargest = largest;
            largest = arr[i]
        } else if (arr[i] > secLargest) {
            thirLargest = secLargest
            secLargest = arr[i];
        } else if (arr[i] > thirLargest) {
            thirLargest = arr[i];
        }
    }
    return thirLargest
    /*
    - o(n) time
    - on(1) space
     */
}


// More Generic One:

function generic(array) {
    let firstMax = null;
    let secondMax = null;
    let thirdMax = null;

    for (const num of array) {
        if (num === firstMax || num === secondMax || num === thirdMax) continue;
        if (firstMax === null || num > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;
        }
        else if (secondMax === null || num > secondMax) {
            thirdMax = secondMax;
            secondMax = num;
        }
        else if (thirdMax === null || num > thirdMax) {
            thirdMax = num;
        }

        return thirdMax ?? firstMax;
    };
}
console.log(generic([3, 2, 3, 2, 1, 2, 1]));