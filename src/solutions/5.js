/**
 * Solution for Problem 5
 *
 * Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order) such that the result is always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
 * Created by BonDoQ on 06/06/15.
 */

'use strict';

/**
 * return All branches for the Problem
 * @returns {Array}  branches that fulfill the solution
 */
let getAllBranches = () => {
    let branches = [['']];
    var tmpBranches = [];
    for (var digit = 1; digit < 10; digit++) {
        tmpBranches = [];
        for (var index = 0; index < branches.length; index++) {

            var positiveBranch = branches[index].slice(0);
            positiveBranch.push(digit);
            tmpBranches.push(positiveBranch);

            var negativeBranch = branches[index].slice(0);
            negativeBranch.push(digit * -1);
            tmpBranches.push(negativeBranch);

            var concatBranch = branches[index].slice(0);
            concatBranch[concatBranch.length - 1] = parseInt(concatBranch[concatBranch.length - 1].toString() + digit.toString());
            tmpBranches.push(concatBranch);
        }
        branches = tmpBranches.slice(0);
    }
    return branches.filter((item) => {
        return item.reduce((sum, value) => sum + value, 0) === 100;
    }).map((item) => {
        return item.reduce((result, number) => {
            let sign = number < 1 || number.toString()[0] === '1' ? '' : '+';
            return result + sign + number.toString();
        }, '');

    });
};

export {getAllBranches};
