"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistics = void 0;
const Argument_1 = require("../Argument");
const Expression_1 = require("../Expression");
const mXparserConstants_1 = require("../mXparserConstants");
const mXparser_1 = require("../mXparser");
const j4ts_1 = require("j4ts/j4ts");
const NumberTheory_1 = require("./NumberTheory");
const MathFunctions_1 = require("./MathFunctions");
/**
 * Statistics - i.e.: mean, variance, standard deviation, etc.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
class Statistics {
    static avg$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let sum = 0;
        let n = 0;
        if ((to >= from) && (delta > 0)) {
            let i;
            for (i = from; i < to; i += delta) {
                {
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    sum += mXparser_1.mXparser.getFunctionValue(f, index, i);
                    n++;
                }
                ;
            }
            if (delta - (i - to) > 0.5 * delta) {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                sum += mXparser_1.mXparser.getFunctionValue(f, index, to);
                n++;
            }
        }
        else if ((to <= from) && (delta < 0)) {
            let i;
            for (i = from; i > to; i += delta) {
                {
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                    sum += mXparser_1.mXparser.getFunctionValue(f, index, i);
                    n++;
                }
                ;
            }
            if (-delta - (to - i) > -0.5 * delta) {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                sum += mXparser_1.mXparser.getFunctionValue(f, index, to);
                n++;
            }
        }
        else if (from === to)
            return mXparser_1.mXparser.getFunctionValue(f, index, from);
        return sum / n;
    }
    /**
     * Average from sample function values - iterative operator.
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
    static avg(f, index, from, to, delta) {
        if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((index != null && index instanceof Argument_1.Argument) || index === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null) && ((typeof delta === 'number') || delta === null)) {
            return Statistics.avg$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta);
        }
        else if (((f != null && f instanceof Array && (f.length == 0 || f[0] == null || (typeof f[0] === 'number'))) || f === null) && index === undefined && from === undefined && to === undefined && delta === undefined) {
            return Statistics.avg$double_A(...f);
        }
        else
            throw new Error('invalid overload');
    }
    static var$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        return Statistics.var$double_A.apply(this, mXparser_1.mXparser.getFunctionValues(f, index, from, to, delta));
    }
    /**
     * Bias-corrected variance from sample function values - iterative operator.
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
    static var(f, index, from, to, delta) {
        if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((index != null && index instanceof Argument_1.Argument) || index === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null) && ((typeof delta === 'number') || delta === null)) {
            return Statistics.var$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta);
        }
        else if (((f != null && f instanceof Array && (f.length == 0 || f[0] == null || (typeof f[0] === 'number'))) || f === null) && index === undefined && from === undefined && to === undefined && delta === undefined) {
            return Statistics.var$double_A(...f);
        }
        else
            throw new Error('invalid overload');
    }
    static std$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        return Statistics.std$double_A.apply(this, mXparser_1.mXparser.getFunctionValues(f, index, from, to, delta));
    }
    /**
     * Bias-corrected standard deviation from sample function values - iterative operator.
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
    static std(f, index, from, to, delta) {
        if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((index != null && index instanceof Argument_1.Argument) || index === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null) && ((typeof delta === 'number') || delta === null)) {
            return Statistics.std$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f, index, from, to, delta);
        }
        else if (((f != null && f instanceof Array && (f.length == 0 || f[0] == null || (typeof f[0] === 'number'))) || f === null) && index === undefined && from === undefined && to === undefined && delta === undefined) {
            return Statistics.std$double_A(...f);
        }
        else
            throw new Error('invalid overload');
    }
    static avg$double_A(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1)
            return numbers[0];
        let sum = 0;
        for (let index131 = 0; index131 < numbers.length; index131++) {
            let xi = numbers[index131];
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if ( /* isNaN */isNaN(xi))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                sum += xi;
            }
        }
        return sum / numbers.length;
    }
    static var$double_A(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1) {
            if ( /* isNaN */isNaN(numbers[0]))
                return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            return 0;
        }
        const m = Statistics.avg$double_A.apply(this, numbers);
        let sum = 0;
        for (let index132 = 0; index132 < numbers.length; index132++) {
            let xi = numbers[index132];
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if ( /* isNaN */isNaN(xi))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                sum += (xi - m) * (xi - m);
            }
        }
        return sum / (numbers.length - 1);
    }
    static std$double_A(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1) {
            if ( /* isNaN */isNaN(numbers[0]))
                return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            return 0;
        }
        return MathFunctions_1.MathFunctions.sqrt(Statistics.var$double_A.apply(this, numbers));
    }
    /**
     * Sample median
     * @param {double[]} numbers   List of number
     * @return          {number} Sample median, if table was empty or null then Double.NaN is returned.
     */
    static median(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1)
            return numbers[0];
        if (numbers.length === 2)
            return (numbers[0] + numbers[1]) / 2.0;
        for (let index133 = 0; index133 < numbers.length; index133++) {
            let v = numbers[index133];
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if ( /* isNaN */isNaN(v))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        NumberTheory_1.NumberTheory.sortAsc$double_A(numbers);
        if ((numbers.length % 2) === 1) {
            const i = ((numbers.length - 1) / 2 | 0);
            return numbers[i];
        }
        else {
            const i = ((numbers.length / 2 | 0)) - 1;
            return (numbers[i] + numbers[i + 1]) / 2.0;
        }
    }
    /**
     * Sample mode
     * @param {double[]} numbers   List of number
     * @return          {number} Sample median, if table was empty or null then Double.NaN is returned.
     */
    static mode(...numbers) {
        if (numbers == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (numbers.length === 1)
            return numbers[0];
        for (let index134 = 0; index134 < numbers.length; index134++) {
            let v = numbers[index134];
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if ( /* isNaN */isNaN(v))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        const dist = NumberTheory_1.NumberTheory.getDistValues(numbers, true);
        return dist[0][0];
    }
}
exports.Statistics = Statistics;
Statistics["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.Statistics";
//# sourceMappingURL=Statistics.js.map