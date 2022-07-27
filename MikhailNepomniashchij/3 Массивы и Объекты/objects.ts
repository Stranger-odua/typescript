const obj1 = {
    a: 1,
    b: 2,
    c: 'str'
};

const obj2: {
    a: number;
    b: number;
    c: string
} = {a: 1, b: 2, c: 'str'};


type MyType3 = {
    a: number;
    b: number;
    c: string
}

const obj3: MyType3 = {a: 1, b: 2, c: 'str'};


const obj4: object = {};


interface MyObject {
    readonly a: number;
    b: number;
    c?: string; // опциональный элемент
    // print1(): number; // метод, который должен вернуть число, нельзя сделать опциональным
    // print2?: () => number; // метод, который должен вернуть число, можно сделать опциональным
    [key: string]: string | number;  // могут быть еще ключи их сколько угодно
}

const obj5: MyObject = {a: 1, b: 2, c: 'str'};

const obj6: MyObject = {
    a: 1,
    b: 2
    // c: 'str'
};

// объединение интерфейсов
interface IPerson {
    name: string;
}

interface IPerson {
    age: number;
}

interface IAccount {
    email: string;
    login: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level?: string;
}

const john: IDeveloper = {
    name: 'John',
    age: 25,
    email: 'bla@mail.com',
    login: '',
    active: false,
    skills: ['JS', 'TS']
};


// объединение типов
type myPerson = {}
type myAccount = {}
type myDeveloper = {}

type FrontendDeveloper = myPerson & myAccount & myDeveloper


const devArr: FrontendDeveloper[] = []




