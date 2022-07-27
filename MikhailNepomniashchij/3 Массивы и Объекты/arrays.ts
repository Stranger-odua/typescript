// СПИСКИ
const arr = ['a', 'b', 'c'];
const arr1: string[] = [];
const arr2: Array<string> = [];

// список списков
const arr3: string[][] = [];
arr3.push(['a', 'b', 'c']);

const arr4: (string | number)[] = [];
// или
type MyType = string | number
const arr5: MyType[] = [];
//
//
//
//
//
//
//
//
// КОРТЕЖИ (tuple)
const tuple1: [string, boolean, number] = ['abc', true, 4];

// csv
const example: [string, string, number][] = [['str', 'str2', 32]];
// или
type SimpleCsv = [string, string, number]
const example2: SimpleCsv[] = [['str', 'str2', 32]];
