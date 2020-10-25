// let name = 'Генератор захисного поля';  //зыдание 1
// let price = 1000;

// console.log('Обрано «Генератор захисного поля», ціна за штуку 1000 кредитів');

// price = ('2000');

// console.log('Обрано «Генератор захисного поля», ціна за штуку 2000 кредитів');



//задание 2

// const total = 100;
// const ordered = 50;

// if (total >= ordered) {
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
// } else {
//     console.log("На складі недостатньо товарів!");
// }


//задание 3

// const ADMIN_PASSWORD = "sobakanekot";

// message = prompt("password");

// if (ADMIN_PASSWORD === message) {
//     message = ('Ласкаво просимо!');
// } else if (message === null) {
//     message = ('Скасовано користувачем!');
// } else {
//     message = ('Доступ заборонений, невірний пароль!');
// }

// alert(message); 

// задане 4

// let credits = 23580;
// let pricePerDroid = 3000;
// let number = prompt("Введіть кількість");
// let totalPrice = (pricePerDroid * number);

// if (credits < totalPrice) {
//     alert('Недостатньо коштів на рахунку!');
// } else if (credits > totalPrice) {
//     alert("Ви купил " + number + " дроїдів, на рахунку залишилося "+ (credits - totalPrice) + " кредитів.");
// }



// задание 4 

// let country = prompt("країна");

// country = (country.toUpperCase());


// switch (country) {
//     case "Китай":
//       alert( 'доставка в Китай буде коштувати 100 кредитів' );
//       break;
//     case "Чилі":
//       alert( 'доставка в Чилі буде коштувати 250 кредитів' );
//       break;
//     case "Австралія ":
//       alert( 'доставка в Австралію буде коштувати 170 кредитів' );
//       break;
//     case "Індія":
//       alert( 'доставка в Індія буде коштувати 80 кредитів' );
//       break;
//     case "Ямайка":
//       alert( 'доставка в Ямайка буде коштувати 120 кредитів' );
//       break;
//     default:
//       alert( 'у вашій країні доставка недоступна' );
//   }