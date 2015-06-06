/**
 * Solution for problem 1
 *
 * Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
 * Created by BonDoQ on 09/05/15.
 */

'use strict';
/**
 * For Loop Sum Calculation for Array
 * @param {Array} list array of Numbers
 * @returns {number} Sum of Array
 */
let forLoop = (list) => {
    let sum = 0;
    for (var item of list) {
        sum += item;
    }
    return sum;
};

/**
 * While Loop Sum Calculation for Array
 * @param {Array} list array of Numbers
 * @returns {number} Sum of Array
 */
let whileLoop = (list) => {
    let index = 0;
    let sum = 0;
    while (index < list.length) {
        sum += parseInt(list[index]);
        index++;
    }
    return sum;
};

/**
 * Recursive Function for Sum Calculation of Array
 * @param {Array} list array of Numbers
 * @param {Number} index Index of Element Default = 0
 * @returns {number} Sum of Array
 */
let recSumCal = function (list, index = 0) {
    if (index === list.length - 1) {
        return list[index];
    } else {
        return list[index] + recSumCal(list, index + 1);
    }
};

export {forLoop, whileLoop, recSumCal};
