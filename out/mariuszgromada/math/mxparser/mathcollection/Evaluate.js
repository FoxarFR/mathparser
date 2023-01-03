"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluate = void 0;
const j4ts_1 = require("j4ts/j4ts");
/**
 * Evaluate - currently only polynomial evaluation based on provided coefficients.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class Evaluate {
    /**
     * Polynomial evaluation based on provided coefficients.
     * @param {number} x                  Point at which polynomial will be evaluated
     * @param {double[]} coefficients       Polynomial coefficients
     * @return                   {number} Polynomial value
     */
    static polynomial(x, coefficients) {
        if ( /* isNaN */isNaN(x))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (coefficients == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (coefficients.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (coefficients.length === 1)
            return coefficients[0];
        let sum = coefficients[coefficients.length - 1];
        if ( /* isNaN */isNaN(sum))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        for (let i = coefficients.length - 2; i >= 0; i--) {
            {
                if ( /* isNaN */isNaN(coefficients[i]))
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                sum *= x;
                sum += coefficients[i];
            }
            ;
        }
        return sum;
    }
    /**
     * Polynomial evaluation for the {@link SpecialFunctions#logGamma(double)}
     * @param {number} x      Argument value
     * @param {double[]} coef   List of polynomial coefficients
     * @param {number} n      Polynomial degree
     * @return {number} Polynomial value
     */
    static p1evl(x, coef, n) {
        let ans;
        ans = x + coef[0];
        for (let i = 1; i < n; i++) {
            {
                ans = ans * x + coef[i];
            }
            ;
        }
        return ans;
    }
    /**
     * Polynomial evaluation for the {@link SpecialFunctions#logGamma(double)}
     * @param {number} x      Argument value
     * @param {double[]} coef   List of polynomial coefficients
     * @param {number} n      Polynomial degree
     * @return {number} Polynomial value
     */
    static polevl(x, coef, n) {
        let ans;
        ans = coef[0];
        for (let i = 1; i <= n; i++) {
            ans = ans * x + coef[i];
        }
        return ans;
    }
}
exports.Evaluate = Evaluate;
Evaluate["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.Evaluate";
//# sourceMappingURL=Evaluate.js.map