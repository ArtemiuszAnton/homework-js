// 10. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только четные числа.


const filtArr = (arr) => {
    const filter = arr.filter(el => el % 2 == 0);
    return filter
}

console.log(filtArr([1, 2, 3, 5, 7, 6, 8, 9, 22]));