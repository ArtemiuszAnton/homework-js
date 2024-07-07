// 17. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только уникальные значения.


const doUniq = (arr) => {
    const uniqArr = arr.filter(el => !uniqArr.includes(el))
    return uniqArr
}
console.log(doUniq([1, 2, 3, 4, 3, 4, 5, 6, 77, 7, 7, 8, 1, 2]));
