"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberTheory = void 0;
const Argument_1 = require("../Argument");
const Expression_1 = require("../Expression");
const mXparserConstants_1 = require("../mXparserConstants");
const mXparser_1 = require("../mXparser");
const ConstantValue_1 = require("../parsertokens/ConstantValue");
const ParserSymbol_1 = require("../parsertokens/ParserSymbol");
const PrimesCache_1 = require("./PrimesCache");
const MathFunctions_1 = require("./MathFunctions");
const BooleanAlgebra_1 = require("./BooleanAlgebra");
const BinaryRelations_1 = require("./BinaryRelations");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
const bignumber_js_1 = require("bignumber.js/bignumber.js");
/**
 * NumberTheory - summation / products etc...
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.4.2
 * @class
 */
class NumberTheory {
    static TO_FRACTION_INIT_SEARCH_SIZE_$LI$() { if (NumberTheory.TO_FRACTION_INIT_SEARCH_SIZE == null) {
        NumberTheory.TO_FRACTION_INIT_SEARCH_SIZE = NumberTheory.DEFAULT_TO_FRACTION_INIT_SEARCH_SIZE;
    } return NumberTheory.TO_FRACTION_INIT_SEARCH_SIZE; }
    /**
     * Sets initial search size for the toFraction method
     *
     * @param {number} n initial search size, has to be non-zero positive.
     * @see NumberTheory#toFraction(double)
     */
    static setToFractionInitSearchSize(n) {
        if (n >= 0)
            NumberTheory.TO_FRACTION_INIT_SEARCH_SIZE = n;
    }
    /**
     * Gets initial search size used by the toFraction method
     *
     * @return {number} initial search size used by the toFraction method
     * @see NumberTheory#toFraction(double)
     */
    static getToFractionInitSearchSize() {
        return NumberTheory.TO_FRACTION_INIT_SEARCH_SIZE_$LI$();
    }
    static min$double$double(a, b) {
        if ( /* isNaN */isNaN(a) || /* isNaN */ isNaN(b))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        return Math.min(a, b);
    }
    static min$double_A(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let min = j4ts_1.javaemul.internal.DoubleHelper.POSITIVE_INFINITY;
        for (let index124 = 0; index124 < numbers.length; index124++) {
            let number = numbers[index124];
            {
                if ( /* isNaN */isNaN(number))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if (number < min)
                    min = number;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        return min;
    }
    /**
     * Arg-Min function.
     *
     * @param      {double[]} numbers             the a function parameter
     *
     * @return     {number} Returns the index of the first smallest number,
     * otherwise returns Double.NaN.
     */
    static argmin(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let min = j4ts_1.javaemul.internal.DoubleHelper.POSITIVE_INFINITY;
        let minIndex = -1;
        for (let i = 0; i < numbers.length; i++) {
            {
                const number = numbers[i];
                if ( /* isNaN */isNaN(number))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if (BinaryRelations_1.BinaryRelations.lt(number, min) === BooleanAlgebra_1.BooleanAlgebra.TRUE) {
                    min = number;
                    minIndex = i;
                }
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
            ;
        }
        return minIndex + 1;
    }
    static max$double$double(a, b) {
        if ( /* isNaN */isNaN(a) || /* isNaN */ isNaN(b))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        return Math.max(a, b);
    }
    static max$double_A(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let max = j4ts_1.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY;
        for (let index125 = 0; index125 < numbers.length; index125++) {
            let number = numbers[index125];
            {
                if ( /* isNaN */isNaN(number))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if (number > max)
                    max = number;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        return max;
    }
    /**
     * Arg-Max function.
     *
     * @param      {double[]} numbers             the a function parameter
     *
     * @return     {number} Returns the index of the first biggest number,
     * otherwise returns Double.NaN.
     */
    static argmax(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let max = j4ts_1.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY;
        let maxIndex = -1;
        for (let i = 0; i < numbers.length; i++) {
            {
                const number = numbers[i];
                if ( /* isNaN */isNaN(number))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if (BinaryRelations_1.BinaryRelations.gt(number, max) === BooleanAlgebra_1.BooleanAlgebra.TRUE) {
                    max = number;
                    maxIndex = i;
                }
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
            ;
        }
        return maxIndex + 1;
    }
    static sortAsc$double_A$int_A$int$int(array, initOrder, leftIndex, rightIndex) {
        let i = leftIndex;
        let j = rightIndex;
        const x = array[((leftIndex + rightIndex) / 2 | 0)];
        let w;
        let v;
        do {
            {
                while ((BinaryRelations_1.BinaryRelations.lt(array[i], x) === BooleanAlgebra_1.BooleanAlgebra.TRUE)) {
                    {
                        i++;
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return;
                    }
                }
                ;
                while ((BinaryRelations_1.BinaryRelations.gt(array[j], x) === BooleanAlgebra_1.BooleanAlgebra.TRUE)) {
                    {
                        j--;
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return;
                    }
                }
                ;
                if (i <= j) {
                    w = array[i];
                    array[i] = array[j];
                    array[j] = w;
                    v = initOrder[i];
                    initOrder[i] = initOrder[j];
                    initOrder[j] = v;
                    i++;
                    j--;
                }
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return;
            }
        } while ((i <= j));
        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
            return;
        if (leftIndex < j)
            NumberTheory.sortAsc$double_A$int_A$int$int(array, initOrder, leftIndex, j);
        if (i < rightIndex)
            NumberTheory.sortAsc$double_A$int_A$int$int(array, initOrder, i, rightIndex);
    }
    /**
     * Sorting array - ascending - quick sort algorithm.
     * @param {double[]} array         Array to be sorted
     * @param {int[]} initOrder     Array to be swapped together with sorted array
     * @param {number} leftIndex     Starting left index.
     * @param {number} rightIndex    Starting right index.
     * @return              {void} Initial ordering swapped according to sorting order.
     * @private
     */
    static sortAsc(array, initOrder, leftIndex, rightIndex) {
        if (((array != null && array instanceof Array && (array.length == 0 || array[0] == null || (typeof array[0] === 'number'))) || array === null) && ((initOrder != null && initOrder instanceof Array && (initOrder.length == 0 || initOrder[0] == null || (typeof initOrder[0] === 'number'))) || initOrder === null) && ((typeof leftIndex === 'number') || leftIndex === null) && ((typeof rightIndex === 'number') || rightIndex === null)) {
            return NumberTheory.sortAsc$double_A$int_A$int$int(array, initOrder, leftIndex, rightIndex);
        }
        else if (((array != null && array instanceof Array && (array.length == 0 || array[0] == null || (typeof array[0] === 'number'))) || array === null) && initOrder === undefined && leftIndex === undefined && rightIndex === undefined) {
            return NumberTheory.sortAsc$double_A(array);
        }
        else
            throw new Error('invalid overload');
    }
    static sortAsc$double_A(array) {
        if (array == null)
            return null;
        const initOrder = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(array.length);
        for (let i = 0; i < array.length; i++) {
            {
                initOrder[i] = i;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return initOrder;
            }
            ;
        }
        if (array.length < 2)
            return initOrder;
        NumberTheory.sortAsc$double_A$int_A$int$int(array, initOrder, 0, array.length - 1);
        return initOrder;
    }
    /**
     * Returns list of distinct values found in a given array.
     * @param {double[]} array The array
     * @param {boolean} returnOrderByDescFreqAndAscOrigPos Indicator whether to apply final ordering based
     * on descending value frequency and ascending initial position.
     * @return {double[][]} List of values in the form of: first index - value index, second index: 0 - value, 1 - value count,
     * 2 - minimal value position in original array
     */
    static getDistValues(array, returnOrderByDescFreqAndAscOrigPos) {
        if (array == null)
            return null;
        const value = 0;
        const count = 1;
        const initPosFirst = 2;
        if (array.length * 3 >= j4ts_1.javaemul.internal.IntegerHelper.MAX_VALUE)
            return (function (dims) { let allocate = function (dims) { if (dims.length === 0) {
                return 0;
            }
            else {
                let array = [];
                for (let i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([0, 3]);
        const distVal = (function (dims) { let allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            let array = [];
            for (let i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([array.length, 3]);
        if (array.length === 0)
            return distVal;
        if (array.length === 1) {
            distVal[0][value] = array[0];
            distVal[0][count] = 1;
            distVal[0][initPosFirst] = 0;
            return distVal;
        }
        const initPos = NumberTheory.sortAsc$double_A(array);
        let unqValue = array[0];
        let unqValCnt = 1;
        let unqValMinPos = initPos[0];
        let unqCnt = 0;
        for (let i = 1; i < array.length; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    break;
                if (BinaryRelations_1.BinaryRelations.eq(unqValue, array[i]) === BooleanAlgebra_1.BooleanAlgebra.TRUE) {
                    unqValCnt++;
                    if (initPos[i] < unqValMinPos)
                        unqValMinPos = initPos[i];
                }
                if ((BinaryRelations_1.BinaryRelations.eq(unqValue, array[i]) === BooleanAlgebra_1.BooleanAlgebra.FALSE) && (i < array.length - 1)) {
                    distVal[unqCnt][value] = unqValue;
                    distVal[unqCnt][count] = unqValCnt;
                    distVal[unqCnt][initPosFirst] = unqValMinPos;
                    unqCnt++;
                    unqValue = array[i];
                    unqValCnt = 1;
                    unqValMinPos = initPos[i];
                }
                else if ((BinaryRelations_1.BinaryRelations.eq(unqValue, array[i]) === BooleanAlgebra_1.BooleanAlgebra.FALSE) && (i === array.length - 1)) {
                    distVal[unqCnt][value] = unqValue;
                    distVal[unqCnt][count] = unqValCnt;
                    distVal[unqCnt][initPosFirst] = unqValMinPos;
                    unqCnt++;
                    distVal[unqCnt][value] = array[i];
                    distVal[unqCnt][count] = 1;
                    distVal[unqCnt][initPosFirst] = initPos[i];
                    unqCnt++;
                }
                else if (i === array.length - 1) {
                    distVal[unqCnt][value] = unqValue;
                    distVal[unqCnt][count] = unqValCnt;
                    distVal[unqCnt][initPosFirst] = unqValMinPos;
                    unqCnt++;
                }
            }
            ;
        }
        const distValFinal = (function (dims) { let allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            let array = [];
            for (let i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([unqCnt, 3]);
        let maxBase = 0;
        for (let i = 0; i < unqCnt; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    break;
                distValFinal[i][value] = distVal[i][value];
                distValFinal[i][count] = distVal[i][count];
                distValFinal[i][initPosFirst] = distVal[i][initPosFirst];
                if (distVal[i][count] > maxBase)
                    maxBase = distVal[i][count];
                if (distVal[i][initPosFirst] > maxBase)
                    maxBase = distVal[i][initPosFirst];
            }
            ;
        }
        if (returnOrderByDescFreqAndAscOrigPos === false)
            return distValFinal;
        maxBase++;
        const key = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(unqCnt);
        for (let i = 0; i < unqCnt; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    break;
                key[i] = (maxBase - distVal[i][count] - 1) * maxBase + distVal[i][initPosFirst];
            }
            ;
        }
        const keyInitOrder = NumberTheory.sortAsc$double_A(key);
        for (let i = 0; i < unqCnt; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    break;
                distValFinal[i][value] = distVal[keyInitOrder[i]][value];
                distValFinal[i][count] = distVal[keyInitOrder[i]][count];
                distValFinal[i][initPosFirst] = distVal[keyInitOrder[i]][initPosFirst];
            }
            ;
        }
        return distValFinal;
    }
    /**
     * Returns number of unique values found the list of numbers
     * @param {double[]} numbers    The list of numbers
     * @return           {number} Number of unique values. If list is null or any Double.NaN
     * is found then Double.NaN is returned.
     */
    static numberOfDistValues(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return 0;
        for (let index126 = 0; index126 < numbers.length; index126++) {
            let v = numbers[index126];
            {
                if ( /* isNaN */isNaN(v))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        if (numbers.length === 1)
            return 1;
        return NumberTheory.getDistValues(numbers, false).length;
    }
    static gcd$long$long(a, b) {
        if (a < 0)
            a = -a;
        if (b < 0)
            b = -b;
        if ((a === 0) && (b !== 0))
            return b;
        if ((a !== 0) && (b === 0))
            return a;
        if (a === 0)
            return -1;
        if (b === 0)
            return -1;
        if (a === b)
            return a;
        let quotient;
        while ((b !== 0)) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return (n => n < 0 ? Math.ceil(n) : Math.floor(n))(j4ts_1.javaemul.internal.DoubleHelper.NaN);
                if (a > b) {
                    quotient = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(a / b) - 1;
                    if (quotient > 0)
                        a -= b * quotient;
                    else
                        a -= b;
                }
                else {
                    quotient = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(b / a) - 1;
                    if (quotient > 0)
                        b -= a * quotient;
                    else
                        b -= a;
                }
            }
        }
        ;
        return a;
    }
    /**
     * Greatest common divisor (GCD)
     *
     * @param      {number} a                   the a function parameter
     * @param      {number} b                   the b function parameter
     * @return     {number} GCD(a,b)
     */
    static gcd(a, b) {
        if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null)) {
            return NumberTheory.gcd$long$long(a, b);
        }
        else if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null)) {
            return NumberTheory.gcd$double$double(a, b);
        }
        else if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'number'))) || a === null) && b === undefined) {
            return NumberTheory.gcd$long_A(...a);
        }
        else if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'number'))) || a === null) && b === undefined) {
            return NumberTheory.gcd$double_A(...a);
        }
        else
            throw new Error('invalid overload');
    }
    static gcd$double$double(a, b) {
        if ( /* isNaN */isNaN(a) || /* isNaN */ isNaN(a))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (a < 0)
            a = -a;
        if (b < 0)
            b = -b;
        a = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(a));
        b = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(b));
        if ((a === 0) && (b !== 0))
            return b;
        if ((a !== 0) && (b === 0))
            return a;
        if (a === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (b === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (a === b)
            return a;
        let quotient;
        while ((b !== 0.0)) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if (a > b) {
                    quotient = Math.floor(a / b) - 1;
                    if (quotient > 0)
                        a = Math.floor(a - b * quotient);
                    else
                        a = Math.floor(a - b);
                }
                else {
                    quotient = Math.floor(b / a) - 1;
                    if (quotient > 0)
                        b = Math.floor(b - a * quotient);
                    else
                        b = Math.floor(b - a);
                }
            }
        }
        ;
        return a;
    }
    static gcd$long_A(...numbers) {
        if (numbers == null)
            return -1;
        if (numbers.length === 0)
            return -1;
        if (numbers.length === 1)
            if (numbers[0] >= 0)
                return numbers[0];
            else
                return -numbers[0];
        if (numbers.length === 2)
            return NumberTheory.gcd$long$long(numbers[0], numbers[1]);
        for (let i = 1; i < numbers.length; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return (n => n < 0 ? Math.ceil(n) : Math.floor(n))(j4ts_1.javaemul.internal.DoubleHelper.NaN);
                numbers[i] = NumberTheory.gcd$long$long(numbers[i - 1], numbers[i]);
            }
            ;
        }
        return numbers[numbers.length - 1];
    }
    static gcd$double_A(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1)
            return MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(numbers[0]));
        if (numbers.length === 2)
            return NumberTheory.gcd$double$double(numbers[0], numbers[1]);
        for (let i = 1; i < numbers.length; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                numbers[i] = NumberTheory.gcd$double$double(numbers[i - 1], numbers[i]);
            }
            ;
        }
        return numbers[numbers.length - 1];
    }
    static lcm$long$long(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        if ((a === 0) || (b === 0))
            return 0;
        return (n => n < 0 ? Math.ceil(n) : Math.floor(n))((a * b) / NumberTheory.gcd$long$long(a, b));
    }
    /**
     * Latest common multipliedBy (LCM)
     *
     * @param      {number} a                   the a function parameter
     * @param      {number} b                   the b function parameter
     *
     * @return     {number} LCM(a,b)
     */
    static lcm(a, b) {
        if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null)) {
            return NumberTheory.lcm$long$long(a, b);
        }
        else if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null)) {
            return NumberTheory.lcm$double$double(a, b);
        }
        else if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'number'))) || a === null) && b === undefined) {
            return NumberTheory.lcm$long_A(...a);
        }
        else if (((a != null && a instanceof Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'number'))) || a === null) && b === undefined) {
            return NumberTheory.lcm$double_A(...a);
        }
        else
            throw new Error('invalid overload');
    }
    static lcm$double$double(a, b) {
        if ( /* isNaN */isNaN(a) || /* isNaN */ isNaN(a))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        a = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(a));
        b = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(b));
        return (a * b) / NumberTheory.gcd$double$double(a, b);
    }
    static lcm$long_A(...numbers) {
        if (numbers == null)
            return -1;
        if (numbers.length === 0)
            return -1;
        if (numbers.length === 1)
            if (numbers[0] >= 0)
                return numbers[0];
            else
                return -numbers[0];
        if (numbers.length === 2)
            return NumberTheory.lcm$long$long(numbers[0], numbers[1]);
        for (let i = 1; i < numbers.length; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return (n => n < 0 ? Math.ceil(n) : Math.floor(n))(j4ts_1.javaemul.internal.DoubleHelper.NaN);
                numbers[i] = NumberTheory.lcm$long$long(numbers[i - 1], numbers[i]);
            }
            ;
        }
        return numbers[numbers.length - 1];
    }
    static lcm$double_A(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1)
            MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(numbers[0]));
        if (numbers.length === 2)
            return NumberTheory.lcm$double$double(numbers[0], numbers[1]);
        for (let i = 1; i < numbers.length; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                numbers[i] = NumberTheory.lcm$double$double(numbers[i - 1], numbers[i]);
            }
            ;
        }
        return numbers[numbers.length - 1];
    }
    /**
     * Adding numbers.
     *
     * @param      {double[]} numbers             the numbers
     *
     * @return     {number} if each number from numbers &lt;&gt; Double.NaN returns
     * sum(a_1,...,a_n) a_1,...,a_n in numbers,
     * otherwise returns Double.NaN.
     */
    static sum(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1)
            return numbers[0];
        if (mXparserConstants_1.mXparserConstants.checkIfCanonicalRounding()) {
            let dsum = new bignumber_js_1.BigNumber(0);
            for (let index127 = 0; index127 < numbers.length; index127++) {
                let xi = numbers[index127];
                {
                    if ( /* isNaN */isNaN(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    dsum = dsum.plus(new bignumber_js_1.BigNumber(xi));
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
            }
            return dsum.toNumber();
        }
        else {
            let sum = 0;
            for (let index128 = 0; index128 < numbers.length; index128++) {
                let xi = numbers[index128];
                {
                    if ( /* isNaN */isNaN(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    sum += xi;
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
            }
            return sum;
        }
    }
    /**
     * Numbers multiplication.
     *
     * @param      {double[]} numbers             the numbers
     *
     * @return     {number} if each number from numbers &lt;&gt; Double.NaN returns
     * prod(a_1,...,a_n) a_1,...,a_n in numbers,
     * otherwise returns Double.NaN.
     */
    static prod(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1)
            return numbers[0];
        if (mXparserConstants_1.mXparserConstants.checkIfCanonicalRounding()) {
            let dprod = new bignumber_js_1.BigNumber(1);
            for (let index129 = 0; index129 < numbers.length; index129++) {
                let xi = numbers[index129];
                {
                    if ( /* isNaN */isNaN(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    dprod = dprod.multipliedBy(new bignumber_js_1.BigNumber(xi));
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
            }
            return dprod.toNumber();
        }
        else {
            let prod = 1;
            for (let index130 = 0; index130 < numbers.length; index130++) {
                let xi = numbers[index130];
                {
                    if ( /* isNaN */isNaN(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(xi))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    prod *= xi;
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
            }
            return prod;
        }
    }
    static primeTest$long(n) {
        if (n === 2)
            return true;
        if (n % 2 === 0)
            return false;
        if (n <= 1)
            return false;
        const top = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(Math.sqrt(n));
        let primesCacheOddEnd = 3;
        if (mXparser_1.mXparser.primesCache != null)
            if (mXparser_1.mXparser.primesCache.cacheStatus === PrimesCache_1.PrimesCache.CACHING_FINISHED) {
                if (n <= mXparser_1.mXparser.primesCache.maxNumInCache)
                    return mXparser_1.mXparser.primesCache.isPrime[(n | 0)];
                else {
                    const topCache = Math.min(top, mXparser_1.mXparser.primesCache.maxNumInCache);
                    let i;
                    for (i = 3; i <= topCache; i += 2) {
                        {
                            if (mXparser_1.mXparser.primesCache.isPrime[(i | 0)] === true)
                                if (n % i === 0)
                                    return false;
                            if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                                return false;
                        }
                        ;
                    }
                    primesCacheOddEnd = i;
                }
            }
        for (let i = primesCacheOddEnd; i <= top; i += 2) {
            {
                if (n % i === 0)
                    return false;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return false;
            }
            ;
        }
        return true;
    }
    /**
     * Prime test
     *
     * @param {number} n           The number to be tested.
     *
     * @return {boolean} true if number is prime, otherwise false
     */
    static primeTest(n) {
        if (((typeof n === 'number') || n === null)) {
            return NumberTheory.primeTest$long(n);
        }
        else if (((typeof n === 'number') || n === null)) {
            return NumberTheory.primeTest$double(n);
        }
        else
            throw new Error('invalid overload');
    }
    static primeTest$double(n) {
        if ( /* isNaN */isNaN(n))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const isPrime = NumberTheory.primeTest$long((n => n < 0 ? Math.ceil(n) : Math.floor(n))(n));
        if (isPrime === true)
            return 1;
        else
            return 0;
    }
    static primeCount$long(n) {
        if (n <= 1)
            return 0;
        if (n === 2)
            return 1;
        let numberOfPrimes = 1;
        for (let i = 3; i <= n; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return (n => n < 0 ? Math.ceil(n) : Math.floor(n))(j4ts_1.javaemul.internal.DoubleHelper.NaN);
                if (NumberTheory.primeTest$long(i) === true)
                    numberOfPrimes++;
            }
            ;
        }
        return numberOfPrimes;
    }
    /**
     * Prime counting function
     *
     * @param {number} n number
     *
     * @return {number} Number of primes below or equal x
     */
    static primeCount(n) {
        if (((typeof n === 'number') || n === null)) {
            return NumberTheory.primeCount$long(n);
        }
        else if (((typeof n === 'number') || n === null)) {
            return NumberTheory.primeCount$double(n);
        }
        else
            throw new Error('invalid overload');
    }
    static primeCount$double(n) {
        return NumberTheory.primeCount$long((n => n < 0 ? Math.ceil(n) : Math.floor(n))(n));
    }
    /**
     * Summation operator (SIGMA FROM i = a, to b,  f(i) by delta
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} index               the name of index argument
     * @param      {number} from                FROM index = form
     * @param      {number} to                  TO index = to
     * @param      {number} delta               BY delta
     *
     * @return     {number} summation operation (for empty summation operations returns 0).
     */
    static sigmaSummation(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let fval;
        let i;
        if (mXparserConstants_1.mXparserConstants.checkIfCanonicalRounding()) {
            let dresult = new bignumber_js_1.BigNumber(0);
            if ((to >= from) && (delta > 0)) {
                for (i = from; i < to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        dresult = dresult.plus(new bignumber_js_1.BigNumber(fval));
                    }
                    ;
                }
                if (delta - (i - to) > 0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    dresult = dresult.plus(new bignumber_js_1.BigNumber(fval));
                }
            }
            else if ((to <= from) && (delta < 0)) {
                for (i = from; i > to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        dresult = dresult.plus(new bignumber_js_1.BigNumber(fval));
                    }
                    ;
                }
                if (-delta - (to - i) > -0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    dresult = dresult.plus(new bignumber_js_1.BigNumber(fval));
                }
            }
            else if (from === to) {
                fval = mXparser_1.mXparser.getFunctionValue(f, index, from);
                if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                dresult = dresult.plus(new bignumber_js_1.BigNumber(fval));
            }
            return dresult.toNumber();
        }
        else {
            let result = 0;
            if ((to >= from) && (delta > 0)) {
                for (i = from; i < to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        result += fval;
                    }
                    ;
                }
                if (delta - (i - to) > 0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    result += fval;
                }
            }
            else if ((to <= from) && (delta < 0)) {
                for (i = from; i > to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        result += fval;
                    }
                    ;
                }
                if (-delta - (to - i) > -0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    result += fval;
                }
            }
            else if (from === to) {
                fval = mXparser_1.mXparser.getFunctionValue(f, index, from);
                if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                result += fval;
            }
            return result;
        }
    }
    /**
     * Product operator
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} index               the name of index argument
     * @param      {number} from                FROM index = form
     * @param      {number} to                  TO index = to
     * @param      {number} delta               BY delta
     *
     * @return     {number} product operation (for empty product operations returns 1).
     *
     * @see        Expression
     * @see        Argument
     */
    static piProduct(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let fval;
        let i;
        if (mXparserConstants_1.mXparserConstants.checkIfCanonicalRounding()) {
            let dresult = new bignumber_js_1.BigNumber(1);
            if ((to >= from) && (delta > 0)) {
                for (i = from; i < to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        dresult = dresult.multipliedBy(new bignumber_js_1.BigNumber(fval));
                    }
                    ;
                }
                if (delta - (i - to) > 0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    dresult = dresult.multipliedBy(new bignumber_js_1.BigNumber(fval));
                }
            }
            else if ((to <= from) && (delta < 0)) {
                for (i = from; i > to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        dresult = dresult.multipliedBy(new bignumber_js_1.BigNumber(fval));
                    }
                    ;
                }
                if (-delta - (to - i) > -0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    dresult = dresult.multipliedBy(new bignumber_js_1.BigNumber(fval));
                }
            }
            else if (from === to) {
                fval = mXparser_1.mXparser.getFunctionValue(f, index, from);
                if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                dresult = dresult.multipliedBy(new bignumber_js_1.BigNumber(fval));
            }
            return dresult.toNumber();
        }
        else {
            let result = 1;
            if ((to >= from) && (delta > 0)) {
                for (i = from; i < to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        result *= fval;
                    }
                    ;
                }
                if (delta - (i - to) > 0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    result *= fval;
                }
            }
            else if ((to <= from) && (delta < 0)) {
                for (i = from; i > to; i += delta) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        fval = mXparser_1.mXparser.getFunctionValue(f, index, i);
                        if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        result *= fval;
                    }
                    ;
                }
                if (-delta - (to - i) > -0.5 * delta) {
                    fval = mXparser_1.mXparser.getFunctionValue(f, index, to);
                    if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    result *= fval;
                }
            }
            else if (from === to) {
                fval = mXparser_1.mXparser.getFunctionValue(f, index, from);
                if ( /* isNaN */isNaN(fval) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(fval))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                result *= fval;
            }
            return result;
        }
    }
    static min$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let min = j4ts_1.javaemul.internal.DoubleHelper.POSITIVE_INFINITY;
        let v;
        if ((to >= from) && (delta > 0)) {
            for (let i = from; i < to; i += delta) {
                {
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    v = mXparser_1.mXparser.getFunctionValue(f, index, i);
                    if (v < min)
                        min = v;
                }
                ;
            }
            v = mXparser_1.mXparser.getFunctionValue(f, index, to);
            if (v < min)
                min = v;
        }
        else if ((to <= from) && (delta < 0)) {
            for (let i = from; i > to; i += delta) {
                {
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    v = mXparser_1.mXparser.getFunctionValue(f, index, i);
                    if (v < min)
                        min = v;
                }
                ;
            }
            v = mXparser_1.mXparser.getFunctionValue(f, index, to);
            if (v < min)
                min = v;
        }
        else if (from === to)
            min = mXparser_1.mXparser.getFunctionValue(f, index, from);
        return min;
    }
    /**
     * Minimum value - iterative operator.
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} index               the name of index argument
     * @param      {number} from                FROM index = form
     * @param      {number} to                  TO index = to
     * @param      {number} delta               BY delta
     *
     * @return     {number} product operation (for empty product operations returns 1).
     *
     * @see        Expression
     * @see        Argument
     */
    static min(f, index, from, to, delta) {
        if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((index != null && index instanceof Argument_1.Argument) || index === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null) && ((typeof delta === 'number') || delta === null)) {
            return NumberTheory.min$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta);
        }
        else if (((typeof f === 'number') || f === null) && ((typeof index === 'number') || index === null) && from === undefined && to === undefined && delta === undefined) {
            return NumberTheory.min$double$double(f, index);
        }
        else if (((f != null && f instanceof Array && (f.length == 0 || f[0] == null || (typeof f[0] === 'number'))) || f === null) && index === undefined && from === undefined && to === undefined && delta === undefined) {
            return NumberTheory.min$double_A(...f);
        }
        else
            throw new Error('invalid overload');
    }
    static max$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let max = j4ts_1.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY;
        let v;
        if ((to >= from) && (delta > 0)) {
            for (let i = from; i < to; i += delta) {
                {
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    v = mXparser_1.mXparser.getFunctionValue(f, index, i);
                    if (v > max)
                        max = v;
                }
                ;
            }
            v = mXparser_1.mXparser.getFunctionValue(f, index, to);
            if (v > max)
                max = v;
        }
        else if ((to <= from) && (delta < 0)) {
            for (let i = from; i > to; i += delta) {
                {
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    v = mXparser_1.mXparser.getFunctionValue(f, index, i);
                    if (v > max)
                        max = v;
                }
                ;
            }
            v = mXparser_1.mXparser.getFunctionValue(f, index, to);
            if (v > max)
                max = v;
        }
        else if (from === to)
            max = mXparser_1.mXparser.getFunctionValue(f, index, from);
        return max;
    }
    /**
     * Maximum value - iterative operator.
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} index               the name of index argument
     * @param      {number} from                FROM index = form
     * @param      {number} to                  TO index = to
     * @param      {number} delta               BY delta
     *
     * @return     {number} product operation (for empty product operations returns 1).
     *
     * @see        Expression
     * @see        Argument
     */
    static max(f, index, from, to, delta) {
        if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((index != null && index instanceof Argument_1.Argument) || index === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null) && ((typeof delta === 'number') || delta === null)) {
            return NumberTheory.max$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta);
        }
        else if (((typeof f === 'number') || f === null) && ((typeof index === 'number') || index === null) && from === undefined && to === undefined && delta === undefined) {
            return NumberTheory.max$double$double(f, index);
        }
        else if (((f != null && f instanceof Array && (f.length == 0 || f[0] == null || (typeof f[0] === 'number'))) || f === null) && index === undefined && from === undefined && to === undefined && delta === undefined) {
            return NumberTheory.max$double_A(...f);
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Return regular expression representing number literal
     * string in given numeral system with base between 1 and 36.
     *
     * @param {number} numeralSystemBase    Base of numeral system, base between 1 and 36
     * @return        {string} Regular expression string if base between 1 and 36,
     * otherwise empty string "" is returned.
     * @private
     */
    /*private*/ static getRegExpForNumeralSystem(numeralSystemBase) {
        switch ((numeralSystemBase)) {
            case 1:
                return ParserSymbol_1.ParserSymbol.BASE1_REG_EXP_$LI$();
            case 2:
                return ParserSymbol_1.ParserSymbol.BASE2_REG_EXP_$LI$();
            case 3:
                return ParserSymbol_1.ParserSymbol.BASE3_REG_EXP_$LI$();
            case 4:
                return ParserSymbol_1.ParserSymbol.BASE4_REG_EXP_$LI$();
            case 5:
                return ParserSymbol_1.ParserSymbol.BASE5_REG_EXP_$LI$();
            case 6:
                return ParserSymbol_1.ParserSymbol.BASE6_REG_EXP_$LI$();
            case 7:
                return ParserSymbol_1.ParserSymbol.BASE7_REG_EXP_$LI$();
            case 8:
                return ParserSymbol_1.ParserSymbol.BASE8_REG_EXP_$LI$();
            case 9:
                return ParserSymbol_1.ParserSymbol.BASE9_REG_EXP_$LI$();
            case 10:
                return ParserSymbol_1.ParserSymbol.BASE10_REG_EXP_$LI$();
            case 11:
                return ParserSymbol_1.ParserSymbol.BASE11_REG_EXP_$LI$();
            case 12:
                return ParserSymbol_1.ParserSymbol.BASE12_REG_EXP_$LI$();
            case 13:
                return ParserSymbol_1.ParserSymbol.BASE13_REG_EXP_$LI$();
            case 14:
                return ParserSymbol_1.ParserSymbol.BASE14_REG_EXP_$LI$();
            case 15:
                return ParserSymbol_1.ParserSymbol.BASE15_REG_EXP_$LI$();
            case 16:
                return ParserSymbol_1.ParserSymbol.BASE16_REG_EXP_$LI$();
            case 17:
                return ParserSymbol_1.ParserSymbol.BASE17_REG_EXP_$LI$();
            case 18:
                return ParserSymbol_1.ParserSymbol.BASE18_REG_EXP_$LI$();
            case 19:
                return ParserSymbol_1.ParserSymbol.BASE19_REG_EXP_$LI$();
            case 20:
                return ParserSymbol_1.ParserSymbol.BASE20_REG_EXP_$LI$();
            case 21:
                return ParserSymbol_1.ParserSymbol.BASE21_REG_EXP_$LI$();
            case 22:
                return ParserSymbol_1.ParserSymbol.BASE22_REG_EXP_$LI$();
            case 23:
                return ParserSymbol_1.ParserSymbol.BASE23_REG_EXP_$LI$();
            case 24:
                return ParserSymbol_1.ParserSymbol.BASE24_REG_EXP_$LI$();
            case 25:
                return ParserSymbol_1.ParserSymbol.BASE25_REG_EXP_$LI$();
            case 26:
                return ParserSymbol_1.ParserSymbol.BASE26_REG_EXP_$LI$();
            case 27:
                return ParserSymbol_1.ParserSymbol.BASE27_REG_EXP_$LI$();
            case 28:
                return ParserSymbol_1.ParserSymbol.BASE28_REG_EXP_$LI$();
            case 29:
                return ParserSymbol_1.ParserSymbol.BASE29_REG_EXP_$LI$();
            case 30:
                return ParserSymbol_1.ParserSymbol.BASE30_REG_EXP_$LI$();
            case 31:
                return ParserSymbol_1.ParserSymbol.BASE31_REG_EXP_$LI$();
            case 32:
                return ParserSymbol_1.ParserSymbol.BASE32_REG_EXP_$LI$();
            case 33:
                return ParserSymbol_1.ParserSymbol.BASE33_REG_EXP_$LI$();
            case 34:
                return ParserSymbol_1.ParserSymbol.BASE34_REG_EXP_$LI$();
            case 35:
                return ParserSymbol_1.ParserSymbol.BASE35_REG_EXP_$LI$();
            case 36:
                return ParserSymbol_1.ParserSymbol.BASE36_REG_EXP_$LI$();
        }
        return "\\b\\B";
    }
    /**
     * Digit index based on digit character for numeral systems with
     * base between 1 and 36.
     *
     * @param {string} digitChar   Digit character (lower or upper case) representing digit in numeral
     * systems with base between 1 and 36. Digits:
     * 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8,
     * 9:9, 10:A, 11:B, 12:C, 13:D, 14:E, 15:F, 16:G,
     * 17:H, 18:I, 19:J, 20:K, 21:L, 22:M, 23:N, 24:O,
     * 25:P, 26:Q, 27:R, 28:S, 29:T, 30:U, 31:V, 32:W,
     * 33:X, 34:Y, 35:Z
     * @return            {number} Returns digit index if digit char was recognized,
     * otherwise returns -1.
     */
    static digitIndex(digitChar) {
        switch ((digitChar).charCodeAt(0)) {
            case 48 /* '0' */:
                return 0;
            case 49 /* '1' */:
                return 1;
            case 50 /* '2' */:
                return 2;
            case 51 /* '3' */:
                return 3;
            case 52 /* '4' */:
                return 4;
            case 53 /* '5' */:
                return 5;
            case 54 /* '6' */:
                return 6;
            case 55 /* '7' */:
                return 7;
            case 56 /* '8' */:
                return 8;
            case 57 /* '9' */:
                return 9;
            case 65 /* 'A' */:
                return 10;
            case 66 /* 'B' */:
                return 11;
            case 67 /* 'C' */:
                return 12;
            case 68 /* 'D' */:
                return 13;
            case 69 /* 'E' */:
                return 14;
            case 70 /* 'F' */:
                return 15;
            case 71 /* 'G' */:
                return 16;
            case 72 /* 'H' */:
                return 17;
            case 73 /* 'I' */:
                return 18;
            case 74 /* 'J' */:
                return 19;
            case 75 /* 'K' */:
                return 20;
            case 76 /* 'L' */:
                return 21;
            case 77 /* 'M' */:
                return 22;
            case 78 /* 'N' */:
                return 23;
            case 79 /* 'O' */:
                return 24;
            case 80 /* 'P' */:
                return 25;
            case 81 /* 'Q' */:
                return 26;
            case 82 /* 'R' */:
                return 27;
            case 83 /* 'S' */:
                return 28;
            case 84 /* 'T' */:
                return 29;
            case 85 /* 'U' */:
                return 30;
            case 86 /* 'V' */:
                return 31;
            case 87 /* 'W' */:
                return 32;
            case 88 /* 'X' */:
                return 33;
            case 89 /* 'Y' */:
                return 34;
            case 90 /* 'Z' */:
                return 35;
            case 97 /* 'a' */:
                return 10;
            case 98 /* 'b' */:
                return 11;
            case 99 /* 'c' */:
                return 12;
            case 100 /* 'd' */:
                return 13;
            case 101 /* 'e' */:
                return 14;
            case 102 /* 'f' */:
                return 15;
            case 103 /* 'g' */:
                return 16;
            case 104 /* 'h' */:
                return 17;
            case 105 /* 'i' */:
                return 18;
            case 106 /* 'j' */:
                return 19;
            case 107 /* 'k' */:
                return 20;
            case 108 /* 'l' */:
                return 21;
            case 109 /* 'm' */:
                return 22;
            case 110 /* 'n' */:
                return 23;
            case 111 /* 'o' */:
                return 24;
            case 112 /* 'p' */:
                return 25;
            case 113 /* 'q' */:
                return 26;
            case 114 /* 'r' */:
                return 27;
            case 115 /* 's' */:
                return 28;
            case 116 /* 't' */:
                return 29;
            case 117 /* 'u' */:
                return 30;
            case 118 /* 'v' */:
                return 31;
            case 119 /* 'w' */:
                return 32;
            case 120 /* 'x' */:
                return 33;
            case 121 /* 'y' */:
                return 34;
            case 122 /* 'z' */:
                return 35;
        }
        return -1;
    }
    /**
     * Character representing digit for numeral systems with base
     * between 1 and 36.
     *
     * @param {number} digitIndex   Digit index between 0 and 35
     * @return             {string} Digit character representing digit
     * for numeral systems with base between 1 and 36.
     * Digits: 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7,
     * 8:8, 9:9, 10:A, 11:B, 12:C, 13:D, 14:E, 15:F,
     * 16:G, 17:H, 18:I, 19:J, 20:K, 21:L, 22:M, 23:N,
     * 24:O, 25:P, 26:Q, 27:R, 28:S, 29:T, 30:U, 31:V,
     * 32:W, 33:X, 34:Y, 35:Z. If digit index is put of range
     * '?' is returned.
     */
    static digitChar(digitIndex) {
        switch ((digitIndex)) {
            case 0:
                return '0';
            case 1:
                return '1';
            case 2:
                return '2';
            case 3:
                return '3';
            case 4:
                return '4';
            case 5:
                return '5';
            case 6:
                return '6';
            case 7:
                return '7';
            case 8:
                return '8';
            case 9:
                return '9';
            case 10:
                return 'A';
            case 11:
                return 'B';
            case 12:
                return 'C';
            case 13:
                return 'D';
            case 14:
                return 'E';
            case 15:
                return 'F';
            case 16:
                return 'G';
            case 17:
                return 'H';
            case 18:
                return 'I';
            case 19:
                return 'J';
            case 20:
                return 'K';
            case 21:
                return 'L';
            case 22:
                return 'M';
            case 23:
                return 'N';
            case 24:
                return 'O';
            case 25:
                return 'P';
            case 26:
                return 'Q';
            case 27:
                return 'R';
            case 28:
                return 'S';
            case 29:
                return 'T';
            case 30:
                return 'U';
            case 31:
                return 'V';
            case 32:
                return 'W';
            case 33:
                return 'X';
            case 34:
                return 'Y';
            case 35:
                return 'Z';
        }
        return '?';
    }
    /**
     * Recognition of numeral system base in which number literal represents
     * number.
     * Examples: 2 for b2.1001 or b.1001, 1 for b1.111, 23 for b23.123afg
     * 16 for b16.123acdf or h.123acdf.
     *
     * @param {string} numberLiteral Number literal string.
     *
     * Base format: b1. b2. b. b3. b4. b5. b6. b7. b8. o. b9. b10. b11. b12.
     * b13. b14. b15. b16. h. b17. b18. b19. b20. b21. b22. b23. b24. b25. b26.
     * b27. b28. b29. b30. b31. b32. b33. b34. b35. b36.
     *
     * Digits: 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:A, 11:B, 12:C,
     * 13:D, 14:E, 15:F, 16:G, 17:H, 18:I, 19:J, 20:K, 21:L, 22:M, 23:N, 24:O, 25:P,
     * 26:Q, 27:R, 28:S, 29:T, 30:U, 31:V, 32:W, 33:X, 34:Y, 35:Z
     *
     * @return  {number} If number literal fits numeral system definition then numeral
     * system base is returned (base between 1 and 36), otherwise
     * -1 is returned.
     */
    static getNumeralSystemBase(numberLiteral) {
        for (let b = 0; b <= 36; b++) {
            if (mXparserConstants_1.mXparserConstants.regexMatch(numberLiteral, NumberTheory.getRegExpForNumeralSystem(b)))
                return b;
            ;
        }
        return -1;
    }
    static convOthBase2Decimal$java_lang_String$int(numberLiteral, numeralSystemBase) {
        if (numberLiteral == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        numberLiteral = numberLiteral.trim();
        if (numberLiteral.length === 0) {
            if (numeralSystemBase === 1)
                return 0;
            else
                return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        }
        if (numeralSystemBase < 1)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numeralSystemBase > 36)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const signChar = numberLiteral.charAt(0);
        let sign = 1.0;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(signChar) == '-'.charCodeAt(0)) {
            sign = -1.0;
            numberLiteral = numberLiteral.substring(1);
        }
        else if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(signChar) == '+'.charCodeAt(0)) {
            sign = 1.0;
            numberLiteral = numberLiteral.substring(1);
        }
        const length = numberLiteral.length;
        let decValue = 0;
        let digit;
        for (let i = 0; i < length; i++) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                digit = NumberTheory.digitIndex(numberLiteral.charAt(i));
                if (numeralSystemBase > 1) {
                    if ((digit >= 0) && (digit < numeralSystemBase))
                        decValue = numeralSystemBase * decValue + digit;
                    else
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
                else {
                    if (digit === 1)
                        decValue = numeralSystemBase * decValue + digit;
                    else
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
            }
            ;
        }
        return sign * decValue;
    }
    /**
     * Other base (base between 1 and 36) number literal conversion to decimal number.
     *
     * @param {string} numberLiteral    Number literal in given numeral system with base between
     * 1 and 36. Digits: 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7,
     * 8:8, 9:9, 10:A, 11:B, 12:C, 13:D, 14:E, 15:F, 16:G, 17:H,
     * 18:I, 19:J, 20:K, 21:L, 22:M, 23:N, 24:O, 25:P, 26:Q, 27:R,
     * 28:S, 29:T, 30:U, 31:V, 32:W, 33:X, 34:Y, 35:Z
     * @param {number} numeralSystemBase             Numeral system base, between 1 and 36
     * @return                 {number} Decimal number after conversion. If conversion was not
     * possible the Double.NaN is returned.
     */
    static convOthBase2Decimal(numberLiteral, numeralSystemBase) {
        if (((typeof numberLiteral === 'string') || numberLiteral === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null)) {
            return NumberTheory.convOthBase2Decimal$java_lang_String$int(numberLiteral, numeralSystemBase);
        }
        else if (((typeof numberLiteral === 'number') || numberLiteral === null) && ((numeralSystemBase != null && numeralSystemBase instanceof Array && (numeralSystemBase.length == 0 || numeralSystemBase[0] == null || (typeof numeralSystemBase[0] === 'number'))) || numeralSystemBase === null)) {
            return NumberTheory.convOthBase2Decimal$int$int_A(numberLiteral, ...numeralSystemBase);
        }
        else if (((typeof numberLiteral === 'number') || numberLiteral === null) && ((numeralSystemBase != null && numeralSystemBase instanceof Array && (numeralSystemBase.length == 0 || numeralSystemBase[0] == null || (typeof numeralSystemBase[0] === 'number'))) || numeralSystemBase === null)) {
            return NumberTheory.convOthBase2Decimal$double$double_A(numberLiteral, ...numeralSystemBase);
        }
        else if (((typeof numberLiteral === 'string') || numberLiteral === null) && numeralSystemBase === undefined) {
            return NumberTheory.convOthBase2Decimal$java_lang_String(numberLiteral);
        }
        else if (((numberLiteral != null && numberLiteral instanceof Array && (numberLiteral.length == 0 || numberLiteral[0] == null || (typeof numberLiteral[0] === 'number'))) || numberLiteral === null) && numeralSystemBase === undefined) {
            return NumberTheory.convOthBase2Decimal$int_A(numberLiteral);
        }
        else if (((numberLiteral != null && numberLiteral instanceof Array && (numberLiteral.length == 0 || numberLiteral[0] == null || (typeof numberLiteral[0] === 'number'))) || numberLiteral === null) && numeralSystemBase === undefined) {
            return NumberTheory.convOthBase2Decimal$double_A(numberLiteral);
        }
        else
            throw new Error('invalid overload');
    }
    static convOthBase2Decimal$java_lang_String(numberLiteral) {
        if (numberLiteral == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        numberLiteral = numberLiteral.trim();
        const numberLiteralStrLenght = numberLiteral.length;
        if (numberLiteralStrLenght < 2)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const numeralSystemBase = NumberTheory.getNumeralSystemBase(numberLiteral);
        if (numeralSystemBase === -1)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const dotPos = numberLiteral.indexOf('.');
        if (dotPos === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const signChar = numberLiteral.charAt(0);
        let sign = 1.0;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(signChar) == '-'.charCodeAt(0))
            sign = -1;
        let finalLiteral = "";
        if (numberLiteralStrLenght > dotPos + 1)
            finalLiteral = numberLiteral.substring(dotPos + 1);
        return sign * NumberTheory.convOthBase2Decimal$java_lang_String$int(finalLiteral, numeralSystemBase);
    }
    static convOthBase2Decimal$int$int_A(numeralSystemBase, ...digits) {
        if (numeralSystemBase < 1)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (digits == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const length = digits.length;
        if (length === 0) {
            if (numeralSystemBase === 1)
                return 0;
            else
                return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        }
        let decValue = 0;
        let digit;
        for (let i = 0; i < length; i++) {
            {
                digit = digits[i];
                if (numeralSystemBase > 1) {
                    if ((digit >= 0) && (digit < numeralSystemBase))
                        decValue = numeralSystemBase * decValue + digit;
                    else
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
                else {
                    if (digit === 1)
                        decValue = numeralSystemBase * decValue + digit;
                    else
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
            ;
        }
        return decValue;
    }
    static convOthBase2Decimal$double$double_A(numeralSystemBase, ...digits) {
        if (numeralSystemBase < 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(numeralSystemBase))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const numeralSystemBaseInt = (MathFunctions_1.MathFunctions.floor(numeralSystemBase) | 0);
        if (digits == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const length = digits.length;
        if (length === 0) {
            if (numeralSystemBaseInt === 1)
                return 0;
            else
                return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        }
        const digitsInt = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(length);
        let digit;
        for (let i = 0; i < length; i++) {
            {
                digit = digits[i];
                if ( /* isNaN */isNaN(digit))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                digitsInt[i] = (digit | 0);
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
            ;
        }
        return NumberTheory.convOthBase2Decimal$int$int_A.apply(this, [numeralSystemBaseInt].concat(digitsInt));
    }
    static convOthBase2Decimal$int_A(baseAndDigits) {
        if (baseAndDigits == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (baseAndDigits.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const numeralSystemBase = baseAndDigits[0];
        const digits = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(baseAndDigits.length - 1);
        for (let i = 1; i < baseAndDigits.length; i++) {
            {
                digits[i - 1] = baseAndDigits[i];
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
            ;
        }
        return NumberTheory.convOthBase2Decimal$int$int_A.apply(this, [numeralSystemBase].concat(digits));
    }
    static convOthBase2Decimal$double_A(baseAndDigits) {
        if (baseAndDigits == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (baseAndDigits.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const numeralSystemBase = baseAndDigits[0];
        const digits = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(baseAndDigits.length - 1);
        for (let i = 1; i < baseAndDigits.length; i++) {
            {
                digits[i - 1] = baseAndDigits[i];
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
            ;
        }
        return NumberTheory.convOthBase2Decimal$double$double_A.apply(this, [numeralSystemBase].concat(digits));
    }
    static convDecimal2OthBase$double$int(decimalNumber, numeralSystemBase) {
        if ( /* isNaN */isNaN(decimalNumber))
            return "NaN";
        if (numeralSystemBase < 1)
            return "NaN";
        if (numeralSystemBase > 36)
            return "NaN";
        if (decimalNumber === 0.0) {
            if (numeralSystemBase > 1)
                return "0";
            else
                return "";
        }
        const intPart = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(decimalNumber));
        const sign = MathFunctions_1.MathFunctions.sgn(decimalNumber);
        let signChar = "";
        if (sign < 0)
            signChar = "-";
        if (intPart < numeralSystemBase)
            return signChar + NumberTheory.digitChar((intPart | 0));
        let numberLiteral = "";
        let quotient = intPart;
        let reminder;
        if (numeralSystemBase > 1) {
            while ((quotient >= 1.0)) {
                reminder = ((quotient % numeralSystemBase) | 0);
                quotient = MathFunctions_1.MathFunctions.floor(quotient / numeralSystemBase);
                numberLiteral = NumberTheory.digitChar(reminder) + numberLiteral;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return "NaN";
            }
        }
        else {
            const repeat = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })((intPart | 0));
            j4ts_2.java.util.Arrays.fill(repeat, '1');
            numberLiteral = new String(repeat);
        }
        return signChar + numberLiteral;
    }
    static convDecimal2OthBase$double$int$int(decimalNumber, numeralSystemBase, format) {
        if ( /* isNaN */isNaN(decimalNumber))
            return "NaN";
        if (numeralSystemBase < 1)
            return "NaN";
        if (numeralSystemBase > 36)
            return "NaN";
        let prefix = "";
        if ((format === 1) || (format === 2))
            prefix = "b" + numeralSystemBase + ".";
        if (format === 2) {
            if (numeralSystemBase === 2)
                prefix = "b.";
            if (numeralSystemBase === 8)
                prefix = "o.";
            if (numeralSystemBase === 16)
                prefix = "h.";
        }
        let sign = "";
        if (decimalNumber < 0)
            sign = "-";
        return sign + prefix + NumberTheory.convDecimal2OthBase$double$int(MathFunctions_1.MathFunctions.abs(decimalNumber), numeralSystemBase);
    }
    /**
     * Decimal number to other numeral system conversion with base
     * between 1 and 36.
     *
     * @param {number} decimalNumber    Decimal number
     * @param {number} numeralSystemBase       Numeral system base between 1 and 36
     * @param {number} format     If 1 then always bxx. is used, i.e. b1. or b16.
     * If 2 then for binary b. is used, for octal o. is used,
     * for hexadecimal h. is used, otherwise bxx. is used
     * where xx is the numeral system base specification.
     *
     * @return           {string} Number literal representing decimal number in
     * given numeral numeral system.
     *
     * Base format: b1. b2. b. b3. b4. b5. b6. b7. b8. o. b9. b10. b11. b12.
     * b13. b14. b15. b16. h. b17. b18. b19. b20. b21. b22. b23. b24. b25. b26.
     * b27. b28. b29. b30. b31. b32. b33. b34. b35. b36.
     *
     * Digits: 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:A, 11:B, 12:C,
     * 13:D, 14:E, 15:F, 16:G, 17:H, 18:I, 19:J, 20:K, 21:L, 22:M, 23:N, 24:O, 25:P,
     * 26:Q, 27:R, 28:S, 29:T, 30:U, 31:V, 32:W, 33:X, 34:Y, 35:Z
     *
     * If conversion was not possible the "NaN" string is returned.
     */
    static convDecimal2OthBase(decimalNumber, numeralSystemBase, format) {
        if (((typeof decimalNumber === 'number') || decimalNumber === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null) && ((typeof format === 'number') || format === null)) {
            return NumberTheory.convDecimal2OthBase$double$int$int(decimalNumber, numeralSystemBase, format);
        }
        else if (((typeof decimalNumber === 'number') || decimalNumber === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null) && format === undefined) {
            return NumberTheory.convDecimal2OthBase$double$int(decimalNumber, numeralSystemBase);
        }
        else
            throw new Error('invalid overload');
    }
    static numberOfDigits$long(number) {
        if (number < 0)
            number = -number;
        if (number < 10)
            return 1;
        else if (number < 100)
            return 2;
        else if (number < 1000)
            return 3;
        else if (number < 10000)
            return 4;
        else if (number < 100000)
            return 5;
        else if (number < 1000000)
            return 6;
        else if (number < 10000000)
            return 7;
        else if (number < 100000000)
            return 8;
        else if (number < 1000000000)
            return 9;
        else
            return 10;
    }
    static numberOfDigits$double(number) {
        if ( /* isNaN */isNaN(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(number))
            return j4ts_1.javaemul.internal.DoubleHelper.POSITIVE_INFINITY;
        if (number < 0.0)
            number = -number;
        number = MathFunctions_1.MathFunctions.floor(number);
        if (number < 10.0)
            return 1;
        else if (number < 100.0)
            return 2;
        else if (number < 1000.0)
            return 3;
        else if (number < 10000.0)
            return 4;
        else if (number < 100000.0)
            return 5;
        else if (number < 1000000.0)
            return 6;
        else if (number < 1.0E7)
            return 7;
        else if (number < 1.0E8)
            return 8;
        else if (number < 1.0E9)
            return 9;
        else if (number < 1.0E10)
            return 10;
        else if (number < 1.0E11)
            return 11;
        else if (number < 1.0E12)
            return 12;
        else if (number < 1.0E13)
            return 13;
        else if (number < 1.0E14)
            return 14;
        else if (number < 1.0E15)
            return 15;
        else if (number < 1.0E16)
            return 16;
        else if (number < 1.0E17)
            return 17;
        else if (number < 1.0E18)
            return 18;
        else if (number < 1.0E19)
            return 19;
        else if (number < 1.0E20)
            return 20;
        else if (number < 1.0E21)
            return 21;
        else if (number < 1.0E22)
            return 22;
        else if (number < 9.999999999999999E22)
            return 23;
        else if (number < 1.0E24)
            return 24;
        else if (number < 1.0E25)
            return 25;
        else if (number < 1.0E26)
            return 26;
        else if (number < 1.0E27)
            return 27;
        else if (number < 1.0E28)
            return 28;
        else if (number < 1.0E29)
            return 29;
        else if (number < 1.0E30)
            return 30;
        else if (number < 1.0E31)
            return 31;
        else if (number < 1.0E32)
            return 32;
        else if (number < 1.0E33)
            return 33;
        else if (number < 1.0E34)
            return 34;
        else if (number < 1.0E35)
            return 35;
        else if (number < 1.0E36)
            return 36;
        else if (number < 1.0E37)
            return 37;
        else if (number < 1.0E38)
            return 38;
        else if (number < 1.0E39)
            return 39;
        else if (number < 1.0E40)
            return 40;
        else if (number < 1.0E41)
            return 41;
        else if (number < 1.0E42)
            return 42;
        else if (number < 1.0E43)
            return 43;
        else if (number < 1.0E44)
            return 44;
        else if (number < 1.0E45)
            return 45;
        else if (number < 1.0E46)
            return 46;
        else if (number < 1.0E47)
            return 47;
        else if (number < 1.0E48)
            return 48;
        else if (number < 1.0E49)
            return 49;
        else if (number < 1.0E50)
            return 50;
        else if (number < 1.0E51)
            return 51;
        else if (number < 1.0E52)
            return 52;
        else if (number < 1.0E53)
            return 53;
        else if (number < 1.0E54)
            return 54;
        else if (number < 1.0E55)
            return 55;
        else if (number < 1.0E56)
            return 56;
        else if (number < 1.0E57)
            return 57;
        else if (number < 1.0E58)
            return 58;
        else if (number < 1.0E59)
            return 59;
        else if (number < 1.0E60)
            return 60;
        else if (number < 1.0E61)
            return 61;
        else if (number < 1.0E62)
            return 62;
        else if (number < 1.0E63)
            return 63;
        else if (number < 1.0E64)
            return 64;
        else if (number < 1.0E65)
            return 65;
        else if (number < 1.0E66)
            return 66;
        else if (number < 1.0E67)
            return 67;
        else if (number < 1.0E68)
            return 68;
        else if (number < 1.0E69)
            return 69;
        else if (number < 1.0E70)
            return 70;
        else if (number < 1.0E71)
            return 71;
        else if (number < 1.0E72)
            return 72;
        else if (number < 1.0E73)
            return 73;
        else if (number < 1.0E74)
            return 74;
        else if (number < 1.0E75)
            return 75;
        else if (number < 1.0E76)
            return 76;
        else if (number < 1.0E77)
            return 77;
        else if (number < 1.0E78)
            return 78;
        else if (number < 1.0E79)
            return 79;
        else if (number < 1.0E80)
            return 80;
        else if (number < 1.0E81)
            return 81;
        else if (number < 1.0E82)
            return 82;
        else if (number < 1.0E83)
            return 83;
        else if (number < 1.0E84)
            return 84;
        else if (number < 1.0E85)
            return 85;
        else if (number < 1.0E86)
            return 86;
        else if (number < 1.0E87)
            return 87;
        else if (number < 1.0E88)
            return 88;
        else if (number < 1.0E89)
            return 89;
        else if (number < 1.0E90)
            return 90;
        else if (number < 1.0E91)
            return 91;
        else if (number < 1.0E92)
            return 92;
        else if (number < 1.0E93)
            return 93;
        else if (number < 1.0E94)
            return 94;
        else if (number < 1.0E95)
            return 95;
        else if (number < 1.0E96)
            return 96;
        else if (number < 1.0E97)
            return 97;
        else if (number < 1.0E98)
            return 98;
        else if (number < 1.0E99)
            return 99;
        else if (number < 1.0E100)
            return 100;
        else if (number < 1.0E101)
            return 101;
        else if (number < 1.0E102)
            return 102;
        else if (number < 1.0E103)
            return 103;
        else if (number < 1.0E104)
            return 104;
        else if (number < 1.0E105)
            return 105;
        else if (number < 1.0E106)
            return 106;
        else if (number < 1.0E107)
            return 107;
        else if (number < 1.0E108)
            return 108;
        else if (number < 1.0E109)
            return 109;
        else if (number < 1.0E110)
            return 110;
        else if (number < 1.0E111)
            return 111;
        else if (number < 1.0E112)
            return 112;
        else if (number < 1.0E113)
            return 113;
        else if (number < 1.0E114)
            return 114;
        else if (number < 1.0E115)
            return 115;
        else if (number < 1.0E116)
            return 116;
        else if (number < 1.0E117)
            return 117;
        else if (number < 1.0E118)
            return 118;
        else if (number < 1.0E119)
            return 119;
        else if (number < 1.0E120)
            return 120;
        else if (number < 1.0E121)
            return 121;
        else if (number < 1.0E122)
            return 122;
        else if (number < 1.0E123)
            return 123;
        else if (number < 1.0E124)
            return 124;
        else if (number < 1.0E125)
            return 125;
        else if (number < 1.0E126)
            return 126;
        else if (number < 1.0E127)
            return 127;
        else if (number < 1.0E128)
            return 128;
        else if (number < 1.0E129)
            return 129;
        else if (number < 1.0E130)
            return 130;
        else if (number < 1.0E131)
            return 131;
        else if (number < 1.0E132)
            return 132;
        else if (number < 1.0E133)
            return 133;
        else if (number < 1.0E134)
            return 134;
        else if (number < 1.0E135)
            return 135;
        else if (number < 1.0E136)
            return 136;
        else if (number < 1.0E137)
            return 137;
        else if (number < 1.0E138)
            return 138;
        else if (number < 1.0E139)
            return 139;
        else if (number < 1.0E140)
            return 140;
        else if (number < 1.0E141)
            return 141;
        else if (number < 1.0E142)
            return 142;
        else if (number < 1.0E143)
            return 143;
        else if (number < 1.0E144)
            return 144;
        else if (number < 1.0E145)
            return 145;
        else if (number < 1.0E146)
            return 146;
        else if (number < 1.0E147)
            return 147;
        else if (number < 1.0E148)
            return 148;
        else if (number < 1.0E149)
            return 149;
        else if (number < 1.0E150)
            return 150;
        else if (number < 1.0E151)
            return 151;
        else if (number < 1.0E152)
            return 152;
        else if (number < 1.0E153)
            return 153;
        else if (number < 1.0E154)
            return 154;
        else if (number < 1.0E155)
            return 155;
        else if (number < 1.0E156)
            return 156;
        else if (number < 1.0E157)
            return 157;
        else if (number < 1.0E158)
            return 158;
        else if (number < 1.0E159)
            return 159;
        else if (number < 1.0E160)
            return 160;
        else if (number < 1.0E161)
            return 161;
        else if (number < 1.0E162)
            return 162;
        else if (number < 1.0E163)
            return 163;
        else if (number < 1.0E164)
            return 164;
        else if (number < 1.0E165)
            return 165;
        else if (number < 1.0E166)
            return 166;
        else if (number < 1.0E167)
            return 167;
        else if (number < 1.0E168)
            return 168;
        else if (number < 1.0E169)
            return 169;
        else if (number < 1.0E170)
            return 170;
        else if (number < 1.0E171)
            return 171;
        else if (number < 1.0E172)
            return 172;
        else if (number < 1.0E173)
            return 173;
        else if (number < 1.0E174)
            return 174;
        else if (number < 1.0E175)
            return 175;
        else if (number < 1.0E176)
            return 176;
        else if (number < 1.0E177)
            return 177;
        else if (number < 1.0E178)
            return 178;
        else if (number < 1.0E179)
            return 179;
        else if (number < 1.0E180)
            return 180;
        else if (number < 1.0E181)
            return 181;
        else if (number < 1.0E182)
            return 182;
        else if (number < 1.0E183)
            return 183;
        else if (number < 1.0E184)
            return 184;
        else if (number < 1.0E185)
            return 185;
        else if (number < 1.0E186)
            return 186;
        else if (number < 1.0E187)
            return 187;
        else if (number < 1.0E188)
            return 188;
        else if (number < 1.0E189)
            return 189;
        else if (number < 1.0E190)
            return 190;
        else if (number < 1.0E191)
            return 191;
        else if (number < 1.0E192)
            return 192;
        else if (number < 1.0E193)
            return 193;
        else if (number < 1.0E194)
            return 194;
        else if (number < 1.0E195)
            return 195;
        else if (number < 1.0E196)
            return 196;
        else if (number < 1.0E197)
            return 197;
        else if (number < 1.0E198)
            return 198;
        else if (number < 1.0E199)
            return 199;
        else if (number < 1.0E200)
            return 200;
        else if (number < 1.0E201)
            return 201;
        else if (number < 1.0E202)
            return 202;
        else if (number < 1.0E203)
            return 203;
        else if (number < 1.0E204)
            return 204;
        else if (number < 1.0E205)
            return 205;
        else if (number < 1.0E206)
            return 206;
        else if (number < 1.0E207)
            return 207;
        else if (number < 1.0E208)
            return 208;
        else if (number < 1.0E209)
            return 209;
        else if (number < 1.0E210)
            return 210;
        else if (number < 1.0E211)
            return 211;
        else if (number < 1.0E212)
            return 212;
        else if (number < 1.0E213)
            return 213;
        else if (number < 1.0E214)
            return 214;
        else if (number < 1.0E215)
            return 215;
        else if (number < 1.0E216)
            return 216;
        else if (number < 1.0E217)
            return 217;
        else if (number < 1.0E218)
            return 218;
        else if (number < 1.0E219)
            return 219;
        else if (number < 1.0E220)
            return 220;
        else if (number < 1.0E221)
            return 221;
        else if (number < 1.0E222)
            return 222;
        else if (number < 1.0E223)
            return 223;
        else if (number < 1.0E224)
            return 224;
        else if (number < 1.0E225)
            return 225;
        else if (number < 1.0E226)
            return 226;
        else if (number < 1.0E227)
            return 227;
        else if (number < 1.0E228)
            return 228;
        else if (number < 1.0E229)
            return 229;
        else if (number < 1.0E230)
            return 230;
        else if (number < 1.0E231)
            return 231;
        else if (number < 1.0E232)
            return 232;
        else if (number < 1.0E233)
            return 233;
        else if (number < 1.0E234)
            return 234;
        else if (number < 1.0E235)
            return 235;
        else if (number < 1.0E236)
            return 236;
        else if (number < 1.0E237)
            return 237;
        else if (number < 1.0E238)
            return 238;
        else if (number < 1.0E239)
            return 239;
        else if (number < 1.0E240)
            return 240;
        else if (number < 1.0E241)
            return 241;
        else if (number < 1.0E242)
            return 242;
        else if (number < 1.0E243)
            return 243;
        else if (number < 1.0E244)
            return 244;
        else if (number < 1.0E245)
            return 245;
        else if (number < 1.0E246)
            return 246;
        else if (number < 1.0E247)
            return 247;
        else if (number < 1.0E248)
            return 248;
        else if (number < 1.0E249)
            return 249;
        else if (number < 1.0E250)
            return 250;
        else if (number < 1.0E251)
            return 251;
        else if (number < 1.0E252)
            return 252;
        else if (number < 1.0E253)
            return 253;
        else if (number < 1.0E254)
            return 254;
        else if (number < 1.0E255)
            return 255;
        else if (number < 1.0E256)
            return 256;
        else if (number < 1.0E257)
            return 257;
        else if (number < 1.0E258)
            return 258;
        else if (number < 1.0E259)
            return 259;
        else if (number < 1.0E260)
            return 260;
        else if (number < 1.0E261)
            return 261;
        else if (number < 1.0E262)
            return 262;
        else if (number < 1.0E263)
            return 263;
        else if (number < 1.0E264)
            return 264;
        else if (number < 1.0E265)
            return 265;
        else if (number < 1.0E266)
            return 266;
        else if (number < 1.0E267)
            return 267;
        else if (number < 1.0E268)
            return 268;
        else if (number < 1.0E269)
            return 269;
        else if (number < 1.0E270)
            return 270;
        else if (number < 1.0E271)
            return 271;
        else if (number < 1.0E272)
            return 272;
        else if (number < 1.0E273)
            return 273;
        else if (number < 1.0E274)
            return 274;
        else if (number < 1.0E275)
            return 275;
        else if (number < 1.0E276)
            return 276;
        else if (number < 1.0E277)
            return 277;
        else if (number < 1.0E278)
            return 278;
        else if (number < 1.0E279)
            return 279;
        else if (number < 1.0E280)
            return 280;
        else if (number < 1.0E281)
            return 281;
        else if (number < 1.0E282)
            return 282;
        else if (number < 1.0E283)
            return 283;
        else if (number < 1.0E284)
            return 284;
        else if (number < 1.0E285)
            return 285;
        else if (number < 1.0E286)
            return 286;
        else if (number < 1.0E287)
            return 287;
        else if (number < 1.0E288)
            return 288;
        else if (number < 1.0E289)
            return 289;
        else if (number < 1.0E290)
            return 290;
        else if (number < 1.0E291)
            return 291;
        else if (number < 1.0E292)
            return 292;
        else if (number < 1.0E293)
            return 293;
        else if (number < 1.0E294)
            return 294;
        else if (number < 1.0E295)
            return 295;
        else if (number < 1.0E296)
            return 296;
        else if (number < 1.0E297)
            return 297;
        else if (number < 1.0E298)
            return 298;
        else if (number < 1.0E299)
            return 299;
        else if (number < 1.0E300)
            return 300;
        else if (number < 1.0E301)
            return 301;
        else if (number < 1.0E302)
            return 302;
        else if (number < 1.0E303)
            return 303;
        else if (number < 1.0E304)
            return 304;
        else if (number < 1.0E305)
            return 305;
        else if (number < 1.0E306)
            return 306;
        else if (number < 1.0E307)
            return 307;
        else if (number < 1.0E308)
            return 308;
        else
            return 309;
    }
    static numberOfDigits$long$long(number, numeralSystemBase) {
        if (numeralSystemBase < 1)
            return -1;
        if (number < 0)
            number = -number;
        if (numeralSystemBase === 10)
            return NumberTheory.numberOfDigits$long(number);
        if (numeralSystemBase === 1)
            return (number | 0);
        if (number < numeralSystemBase)
            return 1;
        let quotient = number;
        let digitsNum = 0;
        while ((quotient >= 1)) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return (n => n < 0 ? Math.ceil(n) : Math.floor(n))(j4ts_1.javaemul.internal.DoubleHelper.NaN);
                quotient = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(quotient / numeralSystemBase);
                digitsNum++;
            }
        }
        ;
        return digitsNum;
    }
    /**
     * Number of digits needed to represent given number in numeral system with given base.
     * @param {number} number              The number
     * @param {number} numeralSystemBase   Numeral system base above 0
     * @return                    {number} Returns number of digits. In case when numeralSystemBase is lower than
     * 1 then -1 is returned.
     */
    static numberOfDigits(number, numeralSystemBase) {
        if (((typeof number === 'number') || number === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null)) {
            return NumberTheory.numberOfDigits$long$long(number, numeralSystemBase);
        }
        else if (((typeof number === 'number') || number === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null)) {
            return NumberTheory.numberOfDigits$double$double(number, numeralSystemBase);
        }
        else if (((typeof number === 'number') || number === null) && numeralSystemBase === undefined) {
            return NumberTheory.numberOfDigits$long(number);
        }
        else if (((typeof number === 'number') || number === null) && numeralSystemBase === undefined) {
            return NumberTheory.numberOfDigits$double(number);
        }
        else
            throw new Error('invalid overload');
    }
    static numberOfDigits$double$double(number, numeralSystemBase) {
        if ( /* isNaN */isNaN(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(numeralSystemBase))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(numeralSystemBase))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numeralSystemBase < 1.0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(number))
            return j4ts_1.javaemul.internal.DoubleHelper.POSITIVE_INFINITY;
        if (number < 0.0)
            number = -number;
        number = MathFunctions_1.MathFunctions.floor(number);
        numeralSystemBase = MathFunctions_1.MathFunctions.floor(numeralSystemBase);
        if (numeralSystemBase === 10.0)
            return NumberTheory.numberOfDigits$double(number);
        if (numeralSystemBase === 1.0)
            return (number | 0);
        if (number < numeralSystemBase)
            return 1;
        let quotient = number;
        let digitsNum = 0;
        while ((quotient >= 1.0)) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                quotient = MathFunctions_1.MathFunctions.floor(quotient / numeralSystemBase);
                digitsNum++;
            }
        }
        ;
        return digitsNum;
    }
    static digitAtPosition$long$int$int(number, position, numeralSystemBase) {
        if (numeralSystemBase < 1)
            return -1;
        if (number < 0)
            number = -number;
        const digitsNum = (NumberTheory.numberOfDigits$long$long(number, numeralSystemBase) | 0);
        if (position <= -digitsNum) {
            if (numeralSystemBase > 1)
                return 0;
            else
                return -1;
        }
        if (position > digitsNum)
            return -1;
        if (numeralSystemBase === 1)
            return 1;
        const digits = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(digitsNum);
        let quotient = number;
        let digit;
        let digitIndex = digitsNum;
        while ((quotient >= 1)) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return (j4ts_1.javaemul.internal.DoubleHelper.NaN | 0);
                digit = (quotient | 0) % numeralSystemBase;
                quotient = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(quotient / numeralSystemBase);
                digitIndex--;
                digits[digitIndex] = digit;
            }
        }
        ;
        if (position >= 1)
            return digits[position - 1];
        else
            return digits[digitsNum + position - 1];
    }
    /**
     * Digit at position - numeral system with given base
     *
     * @param {number} number              The number
     * @param {number} position            Position from 1 ... n (left to right) or from 0 ... -(n-1) (right to left).
     * @param {number} numeralSystemBase   Base of numeral system - above 0
     * @return                    {number} Return digit at given position. If digit finding was not possible then -1 is returned.
     */
    static digitAtPosition(number, position, numeralSystemBase) {
        if (((typeof number === 'number') || number === null) && ((typeof position === 'number') || position === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null)) {
            return NumberTheory.digitAtPosition$long$int$int(number, position, numeralSystemBase);
        }
        else if (((typeof number === 'number') || number === null) && ((typeof position === 'number') || position === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null)) {
            return NumberTheory.digitAtPosition$double$double$double(number, position, numeralSystemBase);
        }
        else if (((typeof number === 'number') || number === null) && ((typeof position === 'number') || position === null) && numeralSystemBase === undefined) {
            return NumberTheory.digitAtPosition$long$int(number, position);
        }
        else if (((typeof number === 'number') || number === null) && ((typeof position === 'number') || position === null) && numeralSystemBase === undefined) {
            return NumberTheory.digitAtPosition$double$double(number, position);
        }
        else
            throw new Error('invalid overload');
    }
    static digitAtPosition$long$int(number, position) {
        return NumberTheory.digitAtPosition$long$int$int(number, position, 10);
    }
    static digitAtPosition$double$double$double(number, position, numeralSystemBase) {
        if ( /* isNaN */isNaN(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(position))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(numeralSystemBase))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(position))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(numeralSystemBase))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numeralSystemBase < 1.0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (number < 0)
            number = -number;
        number = MathFunctions_1.MathFunctions.floor(number);
        numeralSystemBase = MathFunctions_1.MathFunctions.floor(numeralSystemBase);
        const digitsNum = (NumberTheory.numberOfDigits$double$double(number, numeralSystemBase) | 0);
        if (position <= -digitsNum) {
            if (numeralSystemBase > 1.0)
                return 0;
            else
                return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        }
        if (position > digitsNum)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numeralSystemBase === 1.0)
            return 1.0;
        const digits = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(digitsNum);
        let quotient = number;
        let digit;
        let digitIndex = digitsNum;
        while ((quotient >= 1.0)) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                digit = MathFunctions_1.MathFunctions.floor(quotient % numeralSystemBase);
                quotient = MathFunctions_1.MathFunctions.floor(quotient / numeralSystemBase);
                digitIndex--;
                digits[digitIndex] = digit;
            }
        }
        ;
        if (position >= 1)
            return digits[((position - 1) | 0)];
        else
            return digits[((digitsNum + position - 1) | 0)];
    }
    static digitAtPosition$double$double(number, position) {
        return NumberTheory.digitAtPosition$double$double$double(number, position, 10.0);
    }
    static primeFactors$long(number) {
        const longZeroArray = [];
        let factors;
        if (number === 0)
            return longZeroArray;
        if (number < 0)
            number = -number;
        if (number === 1) {
            factors = [0];
            factors[0] = 1;
            return factors;
        }
        if (mXparser_1.mXparser.primesCache != null)
            if (mXparser_1.mXparser.primesCache.getCacheStatus() === PrimesCache_1.PrimesCache.CACHING_FINISHED)
                if (number <= j4ts_1.javaemul.internal.IntegerHelper.MAX_VALUE)
                    if (mXparser_1.mXparser.primesCache.primeTest((number | 0)) === PrimesCache_1.PrimesCache.IS_PRIME) {
                        factors = [0];
                        factors[0] = number;
                        return factors;
                    }
        let n = number;
        const factorsList = (new j4ts_2.java.util.ArrayList());
        for (let i = 2; i <= (n => n < 0 ? Math.ceil(n) : Math.floor(n))(n / i); i++) {
            {
                while ((n % i === 0)) {
                    {
                        factorsList.add(i);
                        n = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(n / i);
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return longZeroArray;
                    }
                }
                ;
            }
            ;
        }
        if (n > 1)
            factorsList.add(n);
        const nfact = factorsList.size();
        factors = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(nfact);
        for (let i = 0; i < nfact; i++) {
            {
                factors[i] = factorsList.get(i);
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return longZeroArray;
            }
            ;
        }
        return factors;
    }
    /**
     * Prime decomposition (prime factorization)
     *
     * @param {number} number     Number to be decomposed
     * @return           {long[]} List of prime factors (non-distinct)
     */
    static primeFactors(number) {
        if (((typeof number === 'number') || number === null)) {
            return NumberTheory.primeFactors$long(number);
        }
        else if (((typeof number === 'number') || number === null)) {
            return NumberTheory.primeFactors$double(number);
        }
        else
            throw new Error('invalid overload');
    }
    static primeFactors$double(number) {
        const doubleZeroArray = [];
        let factors;
        if ( /* isNaN */isNaN(number))
            return doubleZeroArray;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(number))
            return doubleZeroArray;
        number = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(number));
        if (number === 0.0)
            return doubleZeroArray;
        if (number === 1.0) {
            factors = [0];
            factors[0] = 1.0;
            return factors;
        }
        if (mXparser_1.mXparser.primesCache != null)
            if (mXparser_1.mXparser.primesCache.getCacheStatus() === PrimesCache_1.PrimesCache.CACHING_FINISHED)
                if (number <= j4ts_1.javaemul.internal.IntegerHelper.MAX_VALUE)
                    if (mXparser_1.mXparser.primesCache.primeTest((number | 0)) === PrimesCache_1.PrimesCache.IS_PRIME) {
                        factors = [0];
                        factors[0] = number;
                        return factors;
                    }
        let n = number;
        const factorsList = (new j4ts_2.java.util.ArrayList());
        for (let i = 2.0; i <= MathFunctions_1.MathFunctions.floor(n / i); MathFunctions_1.MathFunctions.floor(i++)) {
            {
                while ((n % i === 0)) {
                    {
                        factorsList.add(i);
                        n = MathFunctions_1.MathFunctions.floor(n / i);
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return doubleZeroArray;
                    }
                }
                ;
            }
            ;
        }
        if (n > 1.0)
            factorsList.add(n);
        const nfact = factorsList.size();
        factors = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(nfact);
        for (let i = 0; i < nfact; i++) {
            {
                factors[i] = factorsList.get(i);
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return doubleZeroArray;
            }
            ;
        }
        return factors;
    }
    /**
     * Prime decomposition (prime factorization) - returns number of distinct prime factors
     *
     * @param {number} number     Number to be decomposed
     * @return           {number} Number of distinct prime factors
     */
    static numberOfPrimeFactors(number) {
        if ( /* isNaN */isNaN(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const factors = NumberTheory.primeFactors$double(number);
        if (factors.length <= 1)
            return factors.length;
        const factorsDist = NumberTheory.getDistValues(factors, false);
        return factorsDist.length;
    }
    /**
     * Prime decomposition (prime factorization) - returns prime factor value
     *
     * @param {number} number     Number to be decomposed
     * @param {number} id         Factor id
     * @return           {number} Factor value if factor id between 1 and numberOfPrimeFactors, otherwise 1 is returned.
     * For NaN of infinite parameters Double NaN is returned. For number eq 0 Double.NaN
     * is returned.
     */
    static primeFactorValue(number, id) {
        if ( /* isNaN */isNaN(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(id))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(id))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        number = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(number));
        if (number === 0.0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (id < 1)
            return 1;
        id = MathFunctions_1.MathFunctions.floor(id);
        if (id > j4ts_1.javaemul.internal.IntegerHelper.MAX_VALUE)
            return 1;
        const factors = NumberTheory.primeFactors$double(number);
        const factorsDist = NumberTheory.getDistValues(factors, false);
        const nfact = factorsDist.length;
        if (id > nfact)
            return 1;
        return factorsDist[((id - 1) | 0)][0];
    }
    /**
     * Prime decomposition (prime factorization) - returns prime factor exponent
     *
     * @param {number} number     Number to be decomposed
     * @param {number} id         Factor id
     * @return           {number} Factor exponent if factor id between 1 and numberOfPrimeFactors, otherwise 0 is returned.
     * For NaN of infinite parameters Double NaN is returned. For number eq 0 Double.NaN
     * is returned.
     */
    static primeFactorExponent(number, id) {
        if ( /* isNaN */isNaN(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(id))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(number))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(id))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        number = MathFunctions_1.MathFunctions.floor(MathFunctions_1.MathFunctions.abs(number));
        if (number === 0.0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (id < 1)
            return 0;
        id = MathFunctions_1.MathFunctions.floor(id);
        if (id > j4ts_1.javaemul.internal.IntegerHelper.MAX_VALUE)
            return 0;
        const factors = NumberTheory.primeFactors$double(number);
        const factorsDist = NumberTheory.getDistValues(factors, false);
        const nfact = factorsDist.length;
        if (id > nfact)
            return 0;
        return factorsDist[((id - 1) | 0)][1];
    }
    /**
     * Creates array representing fraction (sign, numerator and denominator).
     *
     * @param {number} sign        Sign of the number represented by fraction
     * @param {number} numerator   Numerator from the fraction
     * @param {number} denominator Denominator from the fraction
     *
     * @return {double[]} Returns array containing sign, numerator and denominator.
     * Sign at index 0, numerator at index 1, denominator at index 2.
     * @private
     */
    /*private*/ static fractionToDoubleArray(sign, numerator, denominator) {
        const fraction = [0, 0, 0];
        fraction[0] = sign;
        fraction[1] = numerator;
        fraction[2] = denominator;
        return fraction;
    }
    /**
     * Creates array representing mixed fraction (sign, whole number, numerator and denominator).
     *
     * @param {number} sign        Sign of the number represented by fraction
     * @param {number} whole       Whole number
     * @param {number} numerator   Numerator from the fraction
     * @param {number} denominator Denominator from the fraction
     *
     * @return {double[]} Returns array containing whole number, numerator and denominator.
     * Sign at index 0, whole number at index 1, numerator at index 2, denominator at index 3.
     * @private
     */
    /*private*/ static mixedFractionToDoubleArray(sign, whole, numerator, denominator) {
        const mixedFraction = [0, 0, 0, 0];
        mixedFraction[0] = sign;
        mixedFraction[1] = whole;
        mixedFraction[2] = numerator;
        mixedFraction[3] = denominator;
        return mixedFraction;
    }
    /**
     * Converts double value to its fraction representation.
     *
     * @param {number} value Value to be converted
     *
     * @return {double[]} Array representing fraction. Sign at index 0,
     * numerator at index 1, denominator at index 2.
     * If conversion is not possible then Double.NaN is
     * assigned to all the fields.
     */
    static toFraction(value) {
        if ( /* isNaN */isNaN(value))
            return NumberTheory.fractionToDoubleArray(j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN);
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(value))
            return NumberTheory.fractionToDoubleArray(j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN);
        if (value === 0)
            return NumberTheory.fractionToDoubleArray(0, 0, 1);
        let sign = 1;
        if (value < 0) {
            value = -value;
            sign = -1;
        }
        const valueRound0 = MathFunctions_1.MathFunctions.roundHalfUp(value, 0);
        const valueInt = Math.floor(value);
        const valueIntNumOfDigits = NumberTheory.numberOfDigits$double(valueInt);
        let multiplier = 1;
        for (let place = 1; place < valueIntNumOfDigits - 1; place++) {
            multiplier = Math.floor(multiplier * 10);
        }
        const ERROR = BinaryRelations_1.BinaryRelations.DEFAULT_COMPARISON_EPSILON * multiplier;
        if (value >= 1) {
            if (Math.abs(value - valueRound0) <= ERROR)
                return NumberTheory.fractionToDoubleArray(sign, valueInt, 1);
        }
        const ulpPosition = MathFunctions_1.MathFunctions.ulpDecimalDigitsBefore(value);
        if (ulpPosition <= 0)
            return NumberTheory.fractionToDoubleArray(sign, valueInt, 1);
        let numerator;
        let denominator;
        let gcd;
        const valueDecimal = value - valueInt;
        let fracDecimal;
        let n = 0;
        let quotient;
        let quotientRound0;
        while ((n <= NumberTheory.TO_FRACTION_INIT_SEARCH_SIZE_$LI$())) {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    break;
                n++;
                quotient = n / valueDecimal;
                quotientRound0 = MathFunctions_1.MathFunctions.roundHalfUp(quotient, 0);
                fracDecimal = n / quotientRound0;
                if ((Math.abs(quotient - quotientRound0) <= ERROR) || (Math.abs(fracDecimal - valueDecimal) <= ERROR)) {
                    numerator = n;
                    denominator = quotientRound0;
                    gcd = NumberTheory.gcd$double$double(numerator, denominator);
                    numerator = Math.floor(numerator / gcd);
                    denominator = Math.floor(denominator / gcd);
                    return NumberTheory.fractionToDoubleArray(sign, Math.floor(valueInt * denominator + numerator), denominator);
                }
            }
        }
        ;
        const valueRound = MathFunctions_1.MathFunctions.roundHalfUp(value, ulpPosition);
        multiplier = 1;
        for (let place = 1; place < ulpPosition; place++) {
            multiplier = Math.floor(multiplier * 10);
        }
        const initNumerator = Math.floor(valueRound * multiplier);
        const initDenominator = multiplier;
        gcd = NumberTheory.gcd$double$double(initNumerator, initDenominator);
        numerator = Math.floor(initNumerator / gcd);
        denominator = Math.floor(initDenominator / gcd);
        let finalQuotient;
        let a;
        let b;
        if (denominator > numerator) {
            a = denominator;
            b = numerator;
        }
        else {
            a = numerator;
            b = denominator;
        }
        finalQuotient = a / b;
        const finalQuotientUlpPos = MathFunctions_1.MathFunctions.ulpDecimalDigitsBefore(finalQuotient);
        if (finalQuotientUlpPos > 0)
            finalQuotient = MathFunctions_1.MathFunctions.roundHalfUp(finalQuotient, finalQuotientUlpPos - 1);
        const finalQuotientFloor = Math.floor(finalQuotient);
        if (Math.abs(finalQuotient - finalQuotientFloor) <= ERROR) {
            numerator = Math.floor(numerator / b);
            denominator = Math.floor(denominator / b);
        }
        return NumberTheory.fractionToDoubleArray(sign, numerator, denominator);
    }
    /**
     * Converts double value to its mixed fraction representation.
     *
     * @param {number} value Value to be converted
     *
     * @return {double[]} Array representing fraction.
     * Sign at index 0, whole number at index 1,
     * numerator at index 2, denominator at index 3.
     * If conversion is not possible then Double.NaN is
     * assigned to both numerator and denominator.
     */
    static toMixedFraction(value) {
        const fraction = NumberTheory.toFraction(value);
        const sign = fraction[0];
        let numerator = fraction[1];
        const denominator = fraction[2];
        if ( /* isNaN */isNaN(numerator))
            return NumberTheory.mixedFractionToDoubleArray(j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN);
        if ( /* isNaN */isNaN(denominator))
            return NumberTheory.mixedFractionToDoubleArray(j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN, j4ts_1.javaemul.internal.DoubleHelper.NaN);
        if (numerator < denominator)
            return NumberTheory.mixedFractionToDoubleArray(sign, 0, numerator, denominator);
        const whole = Math.floor(numerator / denominator);
        numerator = Math.floor(numerator - whole * denominator);
        return NumberTheory.mixedFractionToDoubleArray(sign, whole, numerator, denominator);
    }
    /**
     * Converts array representing fraction to fraction string representation.
     *
     * @param {double[]} fraction    Array representing fraction (including mix fractions)
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toFraction(double)
     * @see NumberTheory#toMixedFraction(double)
     */
    static fractionToString(fraction) {
        let mixedFraction = false;
        if ((fraction.length !== 3) && (fraction.length !== 4))
            return ConstantValue_1.ConstantValue.NAN_STR;
        const signIdx = 0;
        const wholeIdx = 1;
        let numeratorIdx;
        let denominatorIdx;
        if (fraction.length === 4) {
            mixedFraction = true;
            numeratorIdx = 2;
            denominatorIdx = 3;
        }
        else {
            numeratorIdx = 1;
            denominatorIdx = 2;
        }
        if ( /* isNaN */isNaN(fraction[0]))
            return ConstantValue_1.ConstantValue.NAN_STR;
        if ( /* isNaN */isNaN(fraction[1]))
            return ConstantValue_1.ConstantValue.NAN_STR;
        if ( /* isNaN */isNaN(fraction[2]))
            return ConstantValue_1.ConstantValue.NAN_STR;
        if (mixedFraction)
            if ( /* isNaN */isNaN(fraction[3]))
                return ConstantValue_1.ConstantValue.NAN_STR;
        const sign = fraction[signIdx];
        const numerator = fraction[numeratorIdx];
        const denominator = fraction[denominatorIdx];
        const numeratorStr = j4ts_1.javaemul.internal.StringHelper.format("%.0f", numerator);
        const denominatorStr = j4ts_1.javaemul.internal.StringHelper.format("%.0f", denominator);
        if (mixedFraction === false) {
            if (numerator === 0)
                return "0";
            if (denominator === 1) {
                if (sign >= 0)
                    return numeratorStr;
                else
                    return "-" + numeratorStr;
            }
            else {
                if (sign >= 0)
                    return numeratorStr + "/" + denominatorStr;
                else
                    return "-" + numeratorStr + "/" + denominatorStr;
            }
        }
        else {
            const whole = fraction[wholeIdx];
            const wholeStr = j4ts_1.javaemul.internal.StringHelper.format("%.0f", whole);
            if (numerator === 0) {
                if (whole === 0)
                    return "0";
                else {
                    if (sign >= 0)
                        return wholeStr;
                    else
                        return "-" + wholeStr;
                }
            }
            else {
                if (whole === 0) {
                    if (sign >= 0)
                        return numeratorStr + "/" + denominatorStr;
                    else
                        return "-" + numeratorStr + "/" + denominatorStr;
                }
                else {
                    if (sign >= 0)
                        return wholeStr + "+" + numeratorStr + "/" + denominatorStr;
                    else
                        return "-" + wholeStr + "-" + numeratorStr + "/" + denominatorStr;
                }
            }
        }
    }
    /**
     * Converts number to its fraction string representation.
     *
     * @param {number} value   Given number
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toFraction(double)
     * @see NumberTheory#fractionToString(double[])
     */
    static toFractionString(value) {
        return NumberTheory.fractionToString(NumberTheory.toFraction(value));
    }
    /**
     * Converts number to its mixed fraction string representation.
     *
     * @param {number} value   Given number
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toMixedFraction(double)
     * @see NumberTheory#fractionToString(double[])
     */
    static toMixedFractionString(value) {
        return NumberTheory.fractionToString(NumberTheory.toMixedFraction(value));
    }
}
exports.NumberTheory = NumberTheory;
NumberTheory.DEFAULT_TO_FRACTION_INIT_SEARCH_SIZE = 10000;
NumberTheory["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.NumberTheory";
//# sourceMappingURL=NumberTheory.js.map