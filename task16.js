// 16. Напишите функцию, которая принимает число и возвращает сумму его цифр.

const sumNums = (num) => num.toString().split('').reduce((sum, el) => sum += parseInt(el), 0);;


console.log(sumNums(456));