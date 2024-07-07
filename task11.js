// 11. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.



const sumNums = (arr) => arr.reduce((sum, el) => sum += el, 0) 
console.log(sumNums([1,2,4,6]));