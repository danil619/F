// ============================== Возведение в степень ==============================
// let num1 = +prompt('Введите любое число');
// let num2 = +prompt('Введите любое число');
// function pow(a, n) {
//     let b = a;
//     for (let i = 1; i < n; i++) {
//         b *= a;
//     }
//     return b;
// }
// alert(pow(num1, num2));

// ============================== Факториал ==============================
// let num1 = +prompt('Введите любое число');
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
//   alert( factorial(num1) );

// ============================== Рандомные примеры ==============================
function myRandom(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

// myChar это список элем-тов
myChar = ['/', '*', '+', '-', '%'];

let userMin = 0;
let userMax = 10;

let ask = +prompt('Введите кол-во примеров')
for (let i = 0; i < ask; i++) {
    let num1 = myRandom(userMin, userMax),
        num2 = myRandom(userMin, userMax);
        myCharRandom = myRandom(0, 4);
    let ans = +prompt('Решите ' + num1 + myChar[myCharRandom] + num2 + '?');

    if (myChar[myCharRandom] == "+") {
        ans == (num1 + num2);
    }

    if (myChar[myCharRandom] == "-") {
        ans == (num1 - num2);
    }

    if (myChar[myCharRandom] == "*") {
        ans == (num1 * num2);
    }

    if (myChar[myCharRandom] == "/") {
        ans == (num1 / num2);
    }

    if (myChar[myCharRandom] == "%") {
        ans == (num1 % num2);
    }

    if (ans == (num1 + num2) && myChar[myCharRandom] == "+" || 
    (ans == (num1 - num2) && myChar[myCharRandom] == "-" || 
    (ans == (num1 * num2) && myChar[myCharRandom] == "*" ||
    (ans == (num1 / num2) && myChar[myCharRandom] == "/" || 
    (ans == (num1 % num2) && myChar[myCharRandom] == "%")))))
    {
        alert('Правильно');
    }
    else {
        alert('Неправильно');
    }
}

// function myRandom(min, max) {
//     return (Math.floor(Math.random() * (max - min + 1) + min));
// }

// let userMin = +prompt('Введите минимальное число');
// let userMax = +prompt('Введите максимальное число');

// for(let i = 0; i < 5; i++){
//     let num1 = myRandom(userMin, userMax),
//     num2 = myRandom(userMin, userMax);
//     let ans = +prompt('Решите '+num1+' +' +num2+ '?');
//     if (ans == (num1 + num2)){
//         alert('Правильно');
//     }
//     else{
//         alert('Неправильно');
//     }
// }