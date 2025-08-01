function reverseStr(str) {
    if (str == '') return '';
   return reverseStr(str.slice(1)) + str[0]
}
console.log(
    reverseStr('shibil')
);
