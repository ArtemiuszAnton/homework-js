// 13. Напишите функцию, которая принимает строку и возвращает true, если строка является
// палиндромом, и false в противном случае.

const palindrome = (str) => str.toLowerCase() == str.toLowerCase().split('').reverse().join('') ? true : false;
console.log(palindrome('hannh'));