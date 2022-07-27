const fn1: (num: number) => string = (num: number) => {
    return String(num);
};

const fn2 = (num: number) => {
    return String(num);
};

// рекомендуемый вариант
const fn3 = (num: number): string => {
    return String(num);
};

function fn4(cb: () => string) {
}

type Callback = () => string

function fn5(cb: Callback) {
}

type Callback2 = (num: number) => string


function fn6(cb?: Callback2) {
    if (cb === undefined) cb = String;
    cb(12);
}

function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x, y];
}

function fn7(...nums: number[]): string {
    return nums.join('-');
}


interface Printable {
    label: string;
}

function printReport(obj: Printable): void {
    console.log(obj.label);
}

const drink = {
    label: 'pepsi',
    price: 90
};

const phone = {
    label: 'Nokia',
    price: 11000
};

printReport(drink);
printReport(phone);
// printReport({label: 'Huawei', price: 10000});


// перегрузки
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: { suit: string; card: number }[]): number;
// function pickCard(x: number | { suit: string; card: number }[]): { suit: string; card: number } | number {}

function pickCard(x): any {
    if (typeof x === 'object') {
        return Math.floor(Math.random() * x.length);
    }

    if (typeof x === 'number') {
        return {suit: 'cde', card: x % 13};
    }
}

pickCard([{suit: 'abc', card: 5}])

//
//
//
//
//
//
//
//
//
//
//