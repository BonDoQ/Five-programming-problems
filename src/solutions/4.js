/**
 * Solution for Problem 4
 *
 * Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.
 * Created by BonDoQ on 06/06/15.
 */

'use strict';

let getBiggestNumber = function (list) {
    return list.sort((a, b) => a.toString()[0] < b.toString()[0])
        .reduce((result, num) => result + num.toString());
};

export {getBiggestNumber};
