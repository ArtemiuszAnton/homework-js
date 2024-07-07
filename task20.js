// 20. Напишите функцию, которая принимает массив строк и возвращает массив тех строк,
// которые начинаются с буквы 'A'.

const findA = (arr) => arr.filter(el => el[0] == 'a');
console.log(findA(['artem', 'alina', 'dima', 'valera']));