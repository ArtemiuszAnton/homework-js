// 3. Напишите функцию, которая принимает строку и возвращает ее, но все буквы переведены
// в верхний регистр.


const bigReg = () => {
    const str = 'artem';
    const strBig = str.split('').map(el => el.toUpperCase()).join('')
    return strBig
}

console.log(bigReg());