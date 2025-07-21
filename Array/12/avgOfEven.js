function avgOfEvenNumbers(arr) {
    let sum = 0;
    let count = 0;      //avg = sum/ count

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i]
            count++
        }
    }
    return sum / count
}
console.log(avgOfEvenNumbers([1, 2, 3, 4, 6, 7, 8]));
