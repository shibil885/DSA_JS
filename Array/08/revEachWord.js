function revEachWord(array) {
    console.log('actual', array);
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        let reversed = '';

        for (let j = word.length - 1; j >= 0; j--) {
            reversed += word[j];
        }

        array[i] = reversed; // replace original word
    }

    return array;

    // return array.map((elem) => {

    //     return elem.split('').reverse('').join('')
    // })


}
console.log(revEachWord(['123', '456', '789']));
