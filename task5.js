// 6. Напишите функцию, которая принимает массив чисел и возвращает среднее значение всех
// элементов.


const arr = [1, 2, 3, 5, 6, 4, 7, 9, 5]
const avgArr = arr.reduce((sum, el) => sum + el) / arr.length;

console.log(avgArr);