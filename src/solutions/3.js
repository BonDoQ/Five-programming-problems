/**
 * Solution for Problem 3
 *
 * Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
 * Created by BonDoQ on 06/06/15.
 */

'use strict';

/**
 * Calculate Fibonacci Sequence till Index
 *
 * @param {Number} endIndex last Index
 * @returns {Array} Fibonacci Sequence
 */
let fib = function (endIndex) {
    let list = [0, 1];
    for (var index = 2; index <= endIndex; index++) {
        list.push(list[index - 1] + list[index - 2]);
    }
    return list;
};

export {fib};
