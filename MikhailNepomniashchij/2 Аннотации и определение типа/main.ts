// union
let score: number | string;

// псевдоним типа (алиас)
type Score = number | string
const myScore: Score = 7;

// когда явно понятен тип, нотацию указывать не нужно
let x = 6;

// когда функция возвращает тип any и мы хотим уточнить значение
let y: number = JSON.parse('5');
let w: string = JSON.parse('apple');

// когда объявление переменной и присвоение ей значения происходят на разных строках
let isOdd: boolean;

if (x % 2 === 0) {
    isOdd = false;
} else {
    isOdd = true;
}

// когда мы хотим, чтобы тип был сложносоставной и не определялся автоматически
let myScore0: number | string = 10;











