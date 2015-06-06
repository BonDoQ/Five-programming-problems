/**
 * Solution for Problem 2
 *
 * Write a function that combines two lists by alternatively taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
 * Created by BonDoQ on 09/05/15.
 */

'use strict';

/**
 * Merge two Arrays by taking one element from each respectively
 *
 * @param {Array} listA First list
 * @param {Array} listB Second List
 * @returns {Array} merged Arrays
 */
let mergeTwoArrays = (listA, listB) => {
    let result = [], sList = [], bList = [];
    if (listA.length < listB.length){
        sList = listA;
        bList = listB;
    } else {
        sList = listB;
        bList = listA;
    }

    for (var index = 0; index < sList.length; index++) {
        result.push(sList[index]);
        result.push(bList[index]);
    }

    result = result.concat(bList.slice(sList.length));

    return result;
};


export {mergeTwoArrays};