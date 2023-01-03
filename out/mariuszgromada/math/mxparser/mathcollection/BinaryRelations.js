"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryRelations = void 0;
/**
 * BinaryRelations - class for dealing with binary relations on integers or doubles.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.1.0
 * @class
 */
const BooleanAlgebra_1 = require("./BooleanAlgebra");
const MathFunctions_1 = require("./MathFunctions");
const NumberTheory_1 = require("./NumberTheory");
const j4ts_1 = require("j4ts/j4ts");
class BinaryRelations {
    static epsilon_$LI$() { if (BinaryRelations.epsilon == null) {
        BinaryRelations.epsilon = BinaryRelations.DEFAULT_COMPARISON_EPSILON;
    } return BinaryRelations.epsilon; }
    /**
     * Sets comparison mode to EXACT.
     */
    static setExactComparison() {
        BinaryRelations.epsilonComparison = false;
    }
    /**
     * Sets comparison mode to EPSILON.
     */
    static setEpsilonComparison() {
        BinaryRelations.epsilonComparison = true;
    }
    /**
     * Sets epsilon value.
     * @param {number} epsilon   Epsilon value (grater than 0).
     *
     * @see #setEpsilonComparison()
     */
    static setEpsilon(epsilon) {
        if (epsilon > 0)
            BinaryRelations.epsilon = epsilon;
    }
    /**
     * Sets default epsilon value.
     *
     * @see #setEpsilonComparison()
     * @see #DEFAULT_COMPARISON_EPSILON
     */
    static setDefaultEpsilon() {
        BinaryRelations.epsilon = BinaryRelations.DEFAULT_COMPARISON_EPSILON;
    }
    /**
     * Returns current epsilon value.
     * @return  {number} Returns current epsilon value.
     *
     * @see #setEpsilonComparison()
     */
    static getEpsilon() {
        return BinaryRelations.epsilon_$LI$();
    }
    /**
     * Checks if epsilon comparison mode is active;
     * @return  {boolean} True if epsilon mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     */
    static checkIfEpsilonMode() {
        return BinaryRelations.epsilonComparison;
    }
    /**
     * Checks if exact comparison mode is active;
     * @return  {boolean} True if exact mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     */
    static checkIfExactMode() {
        return !BinaryRelations.epsilonComparison;
    }
    /**
     * Equality relation.
     *
     * @param      {number} a                   the a number (a = b)
     * @param      {number} b                   the b number (a = b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a = b return 1,
     * otherwise return 0.
     */
    static eq(a, b) {
        if (( /* isNaN */isNaN(a)) || ( /* isNaN */isNaN(b)))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let eps = NumberTheory_1.NumberTheory.max$double$double(BinaryRelations.epsilon_$LI$(), MathFunctions_1.MathFunctions.ulp(b));
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(a) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(b))
            eps = 0;
        let result = BooleanAlgebra_1.BooleanAlgebra.FALSE;
        if (BinaryRelations.epsilonComparison) {
            if (MathFunctions_1.MathFunctions.abs(a - b) <= eps)
                result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        }
        else if (a === b)
            result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        return result;
    }
    /**
     * Inequality relation.
     *
     * @param      {number} a                   the a number (a &lt;&gt; b)
     * @param      {number} b                   the b number (a &lt;&gt; b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &lt;&gt; b return 1,
     * otherwise return 0.
     */
    static neq(a, b) {
        if (( /* isNaN */isNaN(a)) || ( /* isNaN */isNaN(b)))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let eps = NumberTheory_1.NumberTheory.max$double$double(BinaryRelations.epsilon_$LI$(), MathFunctions_1.MathFunctions.ulp(b));
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(a) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(b))
            eps = 0;
        let result = BooleanAlgebra_1.BooleanAlgebra.FALSE;
        if (BinaryRelations.epsilonComparison) {
            if (MathFunctions_1.MathFunctions.abs(a - b) > eps)
                result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        }
        else if (a !== b)
            result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        return result;
    }
    /**
     * Lower than relation.
     *
     * @param      {number} a                   the a number (a &lt; b)
     * @param      {number} b                   the b number (a &lt; b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &lt; b return 1,
     * otherwise return 0.
     */
    static lt(a, b) {
        if (( /* isNaN */isNaN(a)) || ( /* isNaN */isNaN(b)))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let eps = NumberTheory_1.NumberTheory.max$double$double(BinaryRelations.epsilon_$LI$(), MathFunctions_1.MathFunctions.ulp(b));
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(a) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(b))
            eps = 0;
        let result = BooleanAlgebra_1.BooleanAlgebra.FALSE;
        if (BinaryRelations.epsilonComparison) {
            if (a < b - eps)
                result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        }
        else if (a < b)
            result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        return result;
    }
    /**
     * Greater than relation.
     *
     * @param      {number} a                   the a number (a &gt; b)
     * @param      {number} b                   the b number (a &gt; b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &gt; b return 1,
     * otherwise return 0.
     */
    static gt(a, b) {
        if (( /* isNaN */isNaN(a)) || ( /* isNaN */isNaN(b)))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let eps = NumberTheory_1.NumberTheory.max$double$double(BinaryRelations.epsilon_$LI$(), MathFunctions_1.MathFunctions.ulp(b));
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(a) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(b))
            eps = 0;
        let result = BooleanAlgebra_1.BooleanAlgebra.FALSE;
        if (BinaryRelations.epsilonComparison) {
            if (a > b + eps)
                result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        }
        else if (a > b)
            result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        return result;
    }
    /**
     * Lower or equal relation.
     *
     * @param      {number} a                   the a number (a &lt;= b)
     * @param      {number} b                   the b number (a &lt;= b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &lt;= b return 1,
     * otherwise return 0.
     */
    static leq(a, b) {
        if (( /* isNaN */isNaN(a)) || ( /* isNaN */isNaN(b)))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let eps = NumberTheory_1.NumberTheory.max$double$double(BinaryRelations.epsilon_$LI$(), MathFunctions_1.MathFunctions.ulp(b));
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(a) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(b))
            eps = 0;
        let result = BooleanAlgebra_1.BooleanAlgebra.FALSE;
        if (BinaryRelations.epsilonComparison) {
            if (a <= b + eps)
                result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        }
        else if (a <= b)
            result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        return result;
    }
    /**
     * Greater or equal relation.
     *
     * @param      {number} a                   the a number (a &gt;= b)
     * @param      {number} b                   the b number (a &gt;= b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &gt;= b return 1,
     * otherwise return 0.
     */
    static geq(a, b) {
        if (( /* isNaN */isNaN(a)) || ( /* isNaN */isNaN(b)))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let eps = NumberTheory_1.NumberTheory.max$double$double(BinaryRelations.epsilon_$LI$(), MathFunctions_1.MathFunctions.ulp(b));
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(a) || /* isInfinite */ ((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(b))
            eps = 0;
        let result = BooleanAlgebra_1.BooleanAlgebra.FALSE;
        if (BinaryRelations.epsilonComparison) {
            if (a >= b - eps)
                result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        }
        else if (a >= b)
            result = BooleanAlgebra_1.BooleanAlgebra.TRUE;
        return result;
    }
}
exports.BinaryRelations = BinaryRelations;
/**
 * Default epsilon for comparison
 */
BinaryRelations.DEFAULT_COMPARISON_EPSILON = 1.0E-14;
/**
 * COmparison mode indicator
 */
BinaryRelations.epsilonComparison = true;
BinaryRelations["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.BinaryRelations";
//# sourceMappingURL=BinaryRelations.js.map