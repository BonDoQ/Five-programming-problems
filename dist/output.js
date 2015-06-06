(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _solutions1Js = require('./solutions/1.js');

var _solutions2Js = require('./solutions/2.js');

var _solutions3Js = require('./solutions/3.js');

var _solutions4Js = require('./solutions/4.js');

var _solutions5Js = require('./solutions/5.js');

var list = [1, 2, 3, 4, 5, 6];
console.log((0, _solutions1Js.forLoop)(list));
console.log((0, _solutions1Js.whileLoop)(list));
console.log((0, _solutions1Js.recSumCal)(list));

var list2 = ['a', 'b', 'c', 'd'];
console.log((0, _solutions2Js.mergeTwoArrays)(list, list2));

console.log((0, _solutions3Js.fib)(5));

console.log((0, _solutions4Js.getBiggestNumber)(list));

console.log((0, _solutions5Js.getAllBranches)());

},{"./solutions/1.js":2,"./solutions/2.js":3,"./solutions/3.js":4,"./solutions/4.js":5,"./solutions/5.js":6}],2:[function(require,module,exports){
/**
 * Solution for problem 1
 *
 * Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
 * Created by BonDoQ on 09/05/15.
 */

'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
/**
 * For Loop Sum Calculation for Array
 * @param {Array} list array of Numbers
 * @returns {number} Sum of Array
 */
var forLoop = function forLoop(list) {
    var sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            sum += item;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum;
};

/**
 * While Loop Sum Calculation for Array
 * @param {Array} list array of Numbers
 * @returns {number} Sum of Array
 */
var whileLoop = function whileLoop(list) {
    var index = 0;
    var sum = 0;
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
var recSumCal = function recSumCal(list) {
    var index = arguments[1] === undefined ? 0 : arguments[1];

    if (index === list.length - 1) {
        return list[index];
    } else {
        return list[index] + recSumCal(list, index + 1);
    }
};

exports.forLoop = forLoop;
exports.whileLoop = whileLoop;
exports.recSumCal = recSumCal;

},{}],3:[function(require,module,exports){
/**
 * Solution for Problem 2
 *
 * Write a function that combines two lists by alternatively taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
 * Created by BonDoQ on 09/05/15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
/**
 * Merge two Arrays by taking one element from each respectively
 *
 * @param {Array} listA First list
 * @param {Array} listB Second List
 * @returns {Array} merged Arrays
 */
var mergeTwoArrays = function mergeTwoArrays(listA, listB) {
    var result = [],
        sList = [],
        bList = [];
    if (listA.length < listB.length) {
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

exports.mergeTwoArrays = mergeTwoArrays;

},{}],4:[function(require,module,exports){
/**
 * Solution for Problem 3
 *
 * Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
 * Created by BonDoQ on 06/06/15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * Calculate Fibonacci Sequence till Index
 *
 * @param {Number} endIndex last Index
 * @returns {Array} Fibonacci Sequence
 */
var fib = function fib(endIndex) {
  var list = [0, 1];
  for (var index = 2; index <= endIndex; index++) {
    list.push(list[index - 1] + list[index - 2]);
  }
  return list;
};

exports.fib = fib;

},{}],5:[function(require,module,exports){
/**
 * Solution for Problem 4
 *
 * Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.
 * Created by BonDoQ on 06/06/15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var getBiggestNumber = function getBiggestNumber(list) {
  return list.sort(function (a, b) {
    return a.toString()[0] < b.toString()[0];
  }).reduce(function (result, num) {
    return result + num.toString();
  });
};

exports.getBiggestNumber = getBiggestNumber;

},{}],6:[function(require,module,exports){
/**
 * Solution for Problem 5
 *
 * Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order) such that the result is always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
 * Created by BonDoQ on 06/06/15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
/**
 * return All branches for the Problem
 * @returns {Array}  branches that fulfill the solution
 */
var getAllBranches = function getAllBranches() {
    var branches = [['']];
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
    return branches.filter(function (item) {
        return item.reduce(function (sum, value) {
            return sum + value;
        }, 0) === 100;
    }).map(function (item) {
        return item.reduce(function (result, number) {
            var sign = number < 1 || number.toString()[0] === '1' ? '' : '+';
            return result + sign + number.toString();
        }, '');
    });
};

exports.getAllBranches = getAllBranches;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQm9uRG9RL0RvY3VtZW50cy9TcGVjaWFsL0NvZGUvSlMvZml2ZS1wcm9ibGVtcy9zcmMvaW5kZXguanMiLCIvVXNlcnMvQm9uRG9RL0RvY3VtZW50cy9TcGVjaWFsL0NvZGUvSlMvZml2ZS1wcm9ibGVtcy9zcmMvc29sdXRpb25zLzEuanMiLCIvVXNlcnMvQm9uRG9RL0RvY3VtZW50cy9TcGVjaWFsL0NvZGUvSlMvZml2ZS1wcm9ibGVtcy9zcmMvc29sdXRpb25zLzIuanMiLCIvVXNlcnMvQm9uRG9RL0RvY3VtZW50cy9TcGVjaWFsL0NvZGUvSlMvZml2ZS1wcm9ibGVtcy9zcmMvc29sdXRpb25zLzMuanMiLCIvVXNlcnMvQm9uRG9RL0RvY3VtZW50cy9TcGVjaWFsL0NvZGUvSlMvZml2ZS1wcm9ibGVtcy9zcmMvc29sdXRpb25zLzQuanMiLCIvVXNlcnMvQm9uRG9RL0RvY3VtZW50cy9TcGVjaWFsL0NvZGUvSlMvZml2ZS1wcm9ibGVtcy9zcmMvc29sdXRpb25zLzUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7OzRCQUUrQixrQkFBa0I7OzRCQU1qQyxrQkFBa0I7OzRCQUk3QixrQkFBa0I7OzRCQUlMLGtCQUFrQjs7NEJBSXBCLGtCQUFrQjs7QUFqQi9DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUZKLE9BQU8sRUFFSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBSEssU0FBUyxFQUdKLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFKZ0IsU0FBUyxFQUlmLElBQUksQ0FBQyxDQUFDLENBQUM7O0FBRzdCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFGSixjQUFjLEVBRUssSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7O0FBSXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBRkosR0FBRyxFQUVLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBSXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBRkosZ0JBQWdCLEVBRUssSUFBSSxDQUFDLENBQUMsQ0FBQzs7QUFJcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFGSixjQUFjLEdBRU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDZjlCLFlBQVksQ0FBQzs7Ozs7Ozs7O0FBTWIsSUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQUksSUFBSSxFQUFLO0FBQ3BCLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQzs7Ozs7O0FBQ1osNkJBQWlCLElBQUksOEhBQUU7Z0JBQWQsSUFBSTs7QUFDVCxlQUFHLElBQUksSUFBSSxDQUFDO1NBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxXQUFPLEdBQUcsQ0FBQztDQUNkLENBQUM7Ozs7Ozs7QUFPRixJQUFJLFNBQVMsR0FBRyxTQUFaLFNBQVMsQ0FBSSxJQUFJLEVBQUs7QUFDdEIsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osV0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUN4QixXQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQUssRUFBRSxDQUFDO0tBQ1g7QUFDRCxXQUFPLEdBQUcsQ0FBQztDQUNkLENBQUM7Ozs7Ozs7O0FBUUYsSUFBSSxTQUFTLEdBQUcsU0FBWixTQUFTLENBQWEsSUFBSSxFQUFhO1FBQVgsS0FBSyxnQ0FBRyxDQUFDOztBQUNyQyxRQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUMzQixlQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QixNQUFNO0FBQ0gsZUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDbkQ7Q0FDSixDQUFDOztRQUVNLE9BQU8sR0FBUCxPQUFPO1FBQUUsU0FBUyxHQUFULFNBQVM7UUFBRSxTQUFTLEdBQVQsU0FBUzs7Ozs7Ozs7OztBQzNDckMsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7QUFTYixJQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFjLENBQUksS0FBSyxFQUFFLEtBQUssRUFBSztBQUNuQyxRQUFJLE1BQU0sR0FBRyxFQUFFO1FBQUUsS0FBSyxHQUFHLEVBQUU7UUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hDLFFBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFDO0FBQzVCLGFBQUssR0FBRyxLQUFLLENBQUM7QUFDZCxhQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2pCLE1BQU07QUFDSCxhQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2QsYUFBSyxHQUFHLEtBQUssQ0FBQztLQUNqQjs7QUFFRCxTQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUMvQyxjQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzFCLGNBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDN0I7O0FBRUQsVUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFbEQsV0FBTyxNQUFNLENBQUM7Q0FDakIsQ0FBQzs7UUFHTSxjQUFjLEdBQWQsY0FBYzs7Ozs7Ozs7OztBQzlCdEIsWUFBWSxDQUFDOzs7Ozs7Ozs7OztBQVFiLElBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFhLFFBQVEsRUFBRTtBQUMxQixNQUFJLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQixPQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQzVDLFFBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDaEQ7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNmLENBQUM7O1FBRU0sR0FBRyxHQUFILEdBQUc7Ozs7Ozs7Ozs7QUNoQlgsWUFBWSxDQUFDOzs7OztBQUViLElBQUksZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQWdCLENBQWEsSUFBSSxFQUFFO0FBQ25DLFNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1dBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7R0FBQSxDQUFDLENBQ3hELE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxHQUFHO1dBQUssTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUU7R0FBQSxDQUFDLENBQUM7Q0FDekQsQ0FBQzs7UUFFTSxnQkFBZ0IsR0FBaEIsZ0JBQWdCOzs7Ozs7Ozs7O0FDUHhCLFlBQVksQ0FBQzs7Ozs7Ozs7O0FBTWIsSUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBYyxHQUFTO0FBQ3ZCLFFBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLFFBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUNyQixTQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ3JDLG1CQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGFBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztBQUVsRCxnQkFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QywwQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQix1QkFBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFakMsZ0JBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsMEJBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsdUJBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRWpDLGdCQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLHdCQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDdEgsdUJBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEM7QUFDRCxnQkFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkM7QUFDRCxXQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDN0IsZUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7bUJBQUssR0FBRyxHQUFHLEtBQUs7U0FBQSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztLQUM5RCxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ2IsZUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUNuQyxnQkFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDakUsbUJBQU8sTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDNUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUVWLENBQUMsQ0FBQztDQUNOLENBQUM7O1FBRU0sY0FBYyxHQUFkLGNBQWMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2Zvckxvb3AsIHdoaWxlTG9vcCwgcmVjU3VtQ2FsfSBmcm9tICcuL3NvbHV0aW9ucy8xLmpzJztcbmxldCBsaXN0ID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xuY29uc29sZS5sb2coZm9yTG9vcChsaXN0KSk7XG5jb25zb2xlLmxvZyh3aGlsZUxvb3AobGlzdCkpO1xuY29uc29sZS5sb2cocmVjU3VtQ2FsKGxpc3QpKTtcblxuaW1wb3J0IHttZXJnZVR3b0FycmF5c30gZnJvbSAnLi9zb2x1dGlvbnMvMi5qcyc7XG5sZXQgbGlzdDIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXTtcbmNvbnNvbGUubG9nKG1lcmdlVHdvQXJyYXlzKGxpc3QsIGxpc3QyKSk7XG5cbmltcG9ydCB7ZmlifSBmcm9tICcuL3NvbHV0aW9ucy8zLmpzJztcblxuY29uc29sZS5sb2coZmliKDUpKTtcblxuaW1wb3J0IHtnZXRCaWdnZXN0TnVtYmVyfSBmcm9tICcuL3NvbHV0aW9ucy80LmpzJztcblxuY29uc29sZS5sb2coZ2V0QmlnZ2VzdE51bWJlcihsaXN0KSk7XG5cbmltcG9ydCB7Z2V0QWxsQnJhbmNoZXN9IGZyb20gJy4vc29sdXRpb25zLzUuanMnO1xuXG5jb25zb2xlLmxvZyhnZXRBbGxCcmFuY2hlcygpKTtcbiIsIi8qKlxuICogU29sdXRpb24gZm9yIHByb2JsZW0gMVxuICpcbiAqIFdyaXRlIHRocmVlIGZ1bmN0aW9ucyB0aGF0IGNvbXB1dGUgdGhlIHN1bSBvZiB0aGUgbnVtYmVycyBpbiBhIGdpdmVuIGxpc3QgdXNpbmcgYSBmb3ItbG9vcCwgYSB3aGlsZS1sb29wLCBhbmQgcmVjdXJzaW9uLlxuICogQ3JlYXRlZCBieSBCb25Eb1Egb24gMDkvMDUvMTUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBGb3IgTG9vcCBTdW0gQ2FsY3VsYXRpb24gZm9yIEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IGFycmF5IG9mIE51bWJlcnNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFN1bSBvZiBBcnJheVxuICovXG5sZXQgZm9yTG9vcCA9IChsaXN0KSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yICh2YXIgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIHN1bSArPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufTtcblxuLyoqXG4gKiBXaGlsZSBMb29wIFN1bSBDYWxjdWxhdGlvbiBmb3IgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgYXJyYXkgb2YgTnVtYmVyc1xuICogQHJldHVybnMge251bWJlcn0gU3VtIG9mIEFycmF5XG4gKi9cbmxldCB3aGlsZUxvb3AgPSAobGlzdCkgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgd2hpbGUgKGluZGV4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGxpc3RbaW5kZXhdKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn07XG5cbi8qKlxuICogUmVjdXJzaXZlIEZ1bmN0aW9uIGZvciBTdW0gQ2FsY3VsYXRpb24gb2YgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgYXJyYXkgb2YgTnVtYmVyc1xuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IEluZGV4IG9mIEVsZW1lbnQgRGVmYXVsdCA9IDBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFN1bSBvZiBBcnJheVxuICovXG5sZXQgcmVjU3VtQ2FsID0gZnVuY3Rpb24gKGxpc3QsIGluZGV4ID0gMCkge1xuICAgIGlmIChpbmRleCA9PT0gbGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBsaXN0W2luZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGlzdFtpbmRleF0gKyByZWNTdW1DYWwobGlzdCwgaW5kZXggKyAxKTtcbiAgICB9XG59O1xuXG5leHBvcnQge2Zvckxvb3AsIHdoaWxlTG9vcCwgcmVjU3VtQ2FsfTtcbiIsIi8qKlxuICogU29sdXRpb24gZm9yIFByb2JsZW0gMlxuICpcbiAqIFdyaXRlIGEgZnVuY3Rpb24gdGhhdCBjb21iaW5lcyB0d28gbGlzdHMgYnkgYWx0ZXJuYXRpdmVseSB0YWtpbmcgZWxlbWVudHMuIEZvciBleGFtcGxlOiBnaXZlbiB0aGUgdHdvIGxpc3RzIFthLCBiLCBjXSBhbmQgWzEsIDIsIDNdLCB0aGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBbYSwgMSwgYiwgMiwgYywgM10uXG4gKiBDcmVhdGVkIGJ5IEJvbkRvUSBvbiAwOS8wNS8xNS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTWVyZ2UgdHdvIEFycmF5cyBieSB0YWtpbmcgb25lIGVsZW1lbnQgZnJvbSBlYWNoIHJlc3BlY3RpdmVseVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RBIEZpcnN0IGxpc3RcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RCIFNlY29uZCBMaXN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IG1lcmdlZCBBcnJheXNcbiAqL1xubGV0IG1lcmdlVHdvQXJyYXlzID0gKGxpc3RBLCBsaXN0QikgPT4ge1xuICAgIGxldCByZXN1bHQgPSBbXSwgc0xpc3QgPSBbXSwgYkxpc3QgPSBbXTtcbiAgICBpZiAobGlzdEEubGVuZ3RoIDwgbGlzdEIubGVuZ3RoKXtcbiAgICAgICAgc0xpc3QgPSBsaXN0QTtcbiAgICAgICAgYkxpc3QgPSBsaXN0QjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzTGlzdCA9IGxpc3RCO1xuICAgICAgICBiTGlzdCA9IGxpc3RBO1xuICAgIH1cblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc0xpc3RbaW5kZXhdKTtcbiAgICAgICAgcmVzdWx0LnB1c2goYkxpc3RbaW5kZXhdKTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGJMaXN0LnNsaWNlKHNMaXN0Lmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuZXhwb3J0IHttZXJnZVR3b0FycmF5c307IiwiLyoqXG4gKiBTb2x1dGlvbiBmb3IgUHJvYmxlbSAzXG4gKlxuICogV3JpdGUgYSBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIHRoZSBsaXN0IG9mIHRoZSBmaXJzdCAxMDAgRmlib25hY2NpIG51bWJlcnMuIEJ5IGRlZmluaXRpb24sIHRoZSBmaXJzdCB0d28gbnVtYmVycyBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIGFyZSAwIGFuZCAxLCBhbmQgZWFjaCBzdWJzZXF1ZW50IG51bWJlciBpcyB0aGUgc3VtIG9mIHRoZSBwcmV2aW91cyB0d28uIEFzIGFuIGV4YW1wbGUsIGhlcmUgYXJlIHRoZSBmaXJzdCAxMCBGaWJvbm5hY2kgbnVtYmVyczogMCwgMSwgMSwgMiwgMywgNSwgOCwgMTMsIDIxLCBhbmQgMzQuXG4gKiBDcmVhdGVkIGJ5IEJvbkRvUSBvbiAwNi8wNi8xNS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIEZpYm9uYWNjaSBTZXF1ZW5jZSB0aWxsIEluZGV4XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZEluZGV4IGxhc3QgSW5kZXhcbiAqIEByZXR1cm5zIHtBcnJheX0gRmlib25hY2NpIFNlcXVlbmNlXG4gKi9cbmxldCBmaWIgPSBmdW5jdGlvbiAoZW5kSW5kZXgpIHtcbiAgICBsZXQgbGlzdCA9IFswLCAxXTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDI7IGluZGV4IDw9IGVuZEluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGxpc3QucHVzaChsaXN0W2luZGV4IC0gMV0gKyBsaXN0W2luZGV4IC0gMl0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbn07XG5cbmV4cG9ydCB7ZmlifTtcbiIsIi8qKlxuICogU29sdXRpb24gZm9yIFByb2JsZW0gNFxuICpcbiAqIFdyaXRlIGEgZnVuY3Rpb24gdGhhdCBnaXZlbiBhIGxpc3Qgb2Ygbm9uIG5lZ2F0aXZlIGludGVnZXJzLCBhcnJhbmdlcyB0aGVtIHN1Y2ggdGhhdCB0aGV5IGZvcm0gdGhlIGxhcmdlc3QgcG9zc2libGUgbnVtYmVyLiBGb3IgZXhhbXBsZSwgZ2l2ZW4gWzUwLCAyLCAxLCA5XSwgdGhlIGxhcmdlc3QgZm9ybWVkIG51bWJlciBpcyA5NTAyMS5cbiAqIENyZWF0ZWQgYnkgQm9uRG9RIG9uIDA2LzA2LzE1LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubGV0IGdldEJpZ2dlc3ROdW1iZXIgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgIHJldHVybiBsaXN0LnNvcnQoKGEsIGIpID0+IGEudG9TdHJpbmcoKVswXSA8IGIudG9TdHJpbmcoKVswXSlcbiAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBudW0pID0+IHJlc3VsdCArIG51bS50b1N0cmluZygpKTtcbn07XG5cbmV4cG9ydCB7Z2V0QmlnZ2VzdE51bWJlcn07XG4iLCIvKipcbiAqIFNvbHV0aW9uIGZvciBQcm9ibGVtIDVcbiAqXG4gKiBXcml0ZSBhIHByb2dyYW0gdGhhdCBvdXRwdXRzIGFsbCBwb3NzaWJpbGl0aWVzIHRvIHB1dCArIG9yIC0gb3Igbm90aGluZyBiZXR3ZWVuIHRoZSBudW1iZXJzIDEsIDIsIC4uLiwgOSAoaW4gdGhpcyBvcmRlcikgc3VjaCB0aGF0IHRoZSByZXN1bHQgaXMgYWx3YXlzIDEwMC4gRm9yIGV4YW1wbGU6IDEgKyAyICsgMzQg4oCTIDUgKyA2NyDigJMgOCArIDkgPSAxMDAuXG4gKiBDcmVhdGVkIGJ5IEJvbkRvUSBvbiAwNi8wNi8xNS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogcmV0dXJuIEFsbCBicmFuY2hlcyBmb3IgdGhlIFByb2JsZW1cbiAqIEByZXR1cm5zIHtBcnJheX0gIGJyYW5jaGVzIHRoYXQgZnVsZmlsbCB0aGUgc29sdXRpb25cbiAqL1xubGV0IGdldEFsbEJyYW5jaGVzID0gKCkgPT4ge1xuICAgIGxldCBicmFuY2hlcyA9IFtbJyddXTtcbiAgICB2YXIgdG1wQnJhbmNoZXMgPSBbXTtcbiAgICBmb3IgKHZhciBkaWdpdCA9IDE7IGRpZ2l0IDwgMTA7IGRpZ2l0KyspIHtcbiAgICAgICAgdG1wQnJhbmNoZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGJyYW5jaGVzLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICB2YXIgcG9zaXRpdmVCcmFuY2ggPSBicmFuY2hlc1tpbmRleF0uc2xpY2UoMCk7XG4gICAgICAgICAgICBwb3NpdGl2ZUJyYW5jaC5wdXNoKGRpZ2l0KTtcbiAgICAgICAgICAgIHRtcEJyYW5jaGVzLnB1c2gocG9zaXRpdmVCcmFuY2gpO1xuXG4gICAgICAgICAgICB2YXIgbmVnYXRpdmVCcmFuY2ggPSBicmFuY2hlc1tpbmRleF0uc2xpY2UoMCk7XG4gICAgICAgICAgICBuZWdhdGl2ZUJyYW5jaC5wdXNoKGRpZ2l0ICogLTEpO1xuICAgICAgICAgICAgdG1wQnJhbmNoZXMucHVzaChuZWdhdGl2ZUJyYW5jaCk7XG5cbiAgICAgICAgICAgIHZhciBjb25jYXRCcmFuY2ggPSBicmFuY2hlc1tpbmRleF0uc2xpY2UoMCk7XG4gICAgICAgICAgICBjb25jYXRCcmFuY2hbY29uY2F0QnJhbmNoLmxlbmd0aCAtIDFdID0gcGFyc2VJbnQoY29uY2F0QnJhbmNoW2NvbmNhdEJyYW5jaC5sZW5ndGggLSAxXS50b1N0cmluZygpICsgZGlnaXQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0bXBCcmFuY2hlcy5wdXNoKGNvbmNhdEJyYW5jaCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJhbmNoZXMgPSB0bXBCcmFuY2hlcy5zbGljZSgwKTtcbiAgICB9XG4gICAgcmV0dXJuIGJyYW5jaGVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSA9PT0gMTAwO1xuICAgIH0pLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZWR1Y2UoKHJlc3VsdCwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2lnbiA9IG51bWJlciA8IDEgfHwgbnVtYmVyLnRvU3RyaW5nKClbMF0gPT09ICcxJyA/ICcnIDogJysnO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArIHNpZ24gKyBudW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgfSwgJycpO1xuXG4gICAgfSk7XG59O1xuXG5leHBvcnQge2dldEFsbEJyYW5jaGVzfTtcbiJdfQ==
