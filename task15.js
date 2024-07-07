// 15. Напишите функцию, которая принимает массив строк и возвращает новую строку,
// состоящую из элементов массива, соединенных через запятую.

const makeStr = (arr) => {
    let newStr = '';
    arr.forEach(elem => {
        newStr += elem + ','
    });
    return newStr
}

console.log(makeStr(['adin', 'dwa', 'tri']));