'use strict';

import {forLoop, whileLoop, recSumCal} from './solutions/1.js';
let list = [1, 2, 3, 4, 5, 6];
console.log(forLoop(list));
console.log(whileLoop(list));
console.log(recSumCal(list));

import {mergeTwoArrays} from './solutions/2.js';
let list2 = ['a', 'b', 'c', 'd'];
console.log(mergeTwoArrays(list, list2));

import {fib} from './solutions/3.js';

console.log(fib(5));

import {getBiggestNumber} from './solutions/4.js';

console.log(getBiggestNumber(list));

import {getAllBranches} from './solutions/5.js';

console.log(getAllBranches());
