"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProbabilityDistributions = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
const SpecialFunctions_1 = require("./SpecialFunctions");
const MathConstants_1 = require("./MathConstants");
const MathFunctions_1 = require("./MathFunctions");
/**
 * ProbabilityDistributions - random number generators, PDF - Probability Distribution Functions,
 * CDF - Cumulative Distribution Functions, QNT - Quantile Functions (Inverse Cumulative Distribution
 * Functions).
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
class ProbabilityDistributions {
    static randomGenerator_$LI$() { if (ProbabilityDistributions.randomGenerator == null) {
        ProbabilityDistributions.randomGenerator = new j4ts_1.java.util.Random();
    } return ProbabilityDistributions.randomGenerator; }
    static rndUniformContinuous$double$double$java_util_Random(a, b, rnd) {
        if ( /* isNaN */isNaN(a))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(b))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (b < a)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (a === b)
            return a;
        const r = a + rnd.nextDouble() * (b - a);
        return r;
    }
    /**
     * java.util.Random number from Uniform Continuous distribution over interval [a, b).
     *
     * @param {number} a       Interval limit - left / lower.
     * @param {number} b       Interval limit - right / upper.
     * @param {Random} rnd     java.util.Random number generator.
     * @return        {number} Double.NaN if a or b is null, or b is lower than a -
     * otherwise returns random number.
     */
    static rndUniformContinuous(a, b, rnd) {
        if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null) && ((rnd != null && rnd instanceof j4ts_1.java.util.Random) || rnd === null)) {
            return ProbabilityDistributions.rndUniformContinuous$double$double$java_util_Random(a, b, rnd);
        }
        else if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null) && rnd === undefined) {
            return ProbabilityDistributions.rndUniformContinuous$double$double(a, b);
        }
        else if (((a != null && a instanceof j4ts_1.java.util.Random) || a === null) && b === undefined && rnd === undefined) {
            return ProbabilityDistributions.rndUniformContinuous$java_util_Random(a);
        }
        else
            throw new Error('invalid overload');
    }
    static rndUniformContinuous$double$double(a, b) {
        return ProbabilityDistributions.rndUniformContinuous$double$double$java_util_Random(a, b, ProbabilityDistributions.randomGenerator_$LI$());
    }
    static rndUniformContinuous$java_util_Random(rnd) {
        return rnd.nextDouble();
    }
    /**
     * java.util.Random number from Uniform Continuous distribution over interval [0, 1).
     *
     * @return        {number} java.util.Random number.
     */
    static randomUniformContinuous() {
        return ProbabilityDistributions.rndUniformContinuous$java_util_Random(ProbabilityDistributions.randomGenerator_$LI$());
    }
    /**
     * PDF - Probability Distribution Function - Uniform Continuous distribution
     * over interval [a, b).
     *
     * @param {number} x       Point to evaluate pdf function.
     * @param {number} a       Interval limit - left / lower.
     * @param {number} b       Interval limit - right / upper.
     * @return        {number} Double.NaN if a or b is null, or b is lower than a -
     * otherwise function value.
     */
    static pdfUniformContinuous(x, a, b) {
        if ( /* isNaN */isNaN(x))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(a))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(b))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (b < a)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (a === b) {
            if (x === a)
                return 1;
            else
                return 0;
        }
        if ((x < a) || (x > b))
            return 0;
        if (x === j4ts_2.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY)
            return 0.0;
        if (x === j4ts_2.javaemul.internal.DoubleHelper.POSITIVE_INFINITY)
            return 0.0;
        return 1.0 / (b - a);
    }
    /**
     * CDF - Cumulative Distribution Function - Uniform Continuous distribution
     * over interval [a, b).
     *
     * @param {number} x       Point to evaluate cdf function.
     * @param {number} a       Interval limit - left / lower.
     * @param {number} b       Interval limit - right / upper.
     * @return        {number} Double.NaN if a or b is null, or b is lower than a -
     * otherwise function value.
     */
    static cdfUniformContinuous(x, a, b) {
        if ( /* isNaN */isNaN(x))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(a))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(b))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (b < a)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (a === b) {
            if (x < a)
                return 0.0;
            else
                return 1.0;
        }
        if (x < a)
            return 0.0;
        if (x >= b)
            return 1.0;
        if (x === j4ts_2.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY)
            return 0.0;
        if (x === j4ts_2.javaemul.internal.DoubleHelper.POSITIVE_INFINITY)
            return 1.0;
        return (x - a) / (b - a);
    }
    /**
     * QNT - Quantile Function - Uniform Continuous distribution over interval [a, b).
     * (Inverse of Cumulative Distribution Function).
     *
     * @param {number} q       Quantile.
     * @param {number} a       Interval limit - left / lower.
     * @param {number} b       Interval limit - right / upper.
     * @return        {number} Double.NaN if a or b is null, or b is lower than a
     * or q is lower than 0 or q is greater than 1 -
     * otherwise function value.
     */
    static qntUniformContinuous(q, a, b) {
        if ( /* isNaN */isNaN(q))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(a))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(b))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ((q < 0.0) || (q > 1.0))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (b < a)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (a === b) {
            if (q === 1.0)
                return b;
            else
                return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
        if (q === 0.0)
            return a;
        if (q === 1.0)
            return b;
        return a + q * (b - a);
    }
    static rndInteger$int$int$java_util_Random(a, b, rnd) {
        if ( /* isNaN */isNaN(a))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(b))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (b < a)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (a === b)
            return a;
        const n = (b - a) + 1;
        const r = a + rnd.nextInt(n);
        return r;
    }
    /**
     * java.util.Random number from Uniform Discrete distribution.
     * over set interval (a, a+1, ..., b-1, b).
     *
     * @param {number} a       Interval limit - left / lower.
     * @param {number} b       Interval limit - right / upper.
     * @param {Random} rnd     java.util.Random number generator.
     * @return        {number} Double.NaN if a or b is null, or b is lower than a -
     * otherwise returns random number.
     */
    static rndInteger(a, b, rnd) {
        if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null) && ((rnd != null && rnd instanceof j4ts_1.java.util.Random) || rnd === null)) {
            return ProbabilityDistributions.rndInteger$int$int$java_util_Random(a, b, rnd);
        }
        else if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null) && rnd === undefined) {
            return ProbabilityDistributions.rndInteger$int$int(a, b);
        }
        else if (((a != null && a instanceof j4ts_1.java.util.Random) || a === null) && b === undefined && rnd === undefined) {
            return ProbabilityDistributions.rndInteger$java_util_Random(a);
        }
        else if (a === undefined && b === undefined && rnd === undefined) {
            return ProbabilityDistributions.rndInteger$();
        }
        else
            throw new Error('invalid overload');
    }
    static rndInteger$int$int(a, b) {
        return ProbabilityDistributions.rndInteger$int$int$java_util_Random(a, b, ProbabilityDistributions.randomGenerator_$LI$());
    }
    static rndInteger$java_util_Random(rnd) {
        return rnd.nextInt();
    }
    static rndIndex$int$java_util_Random(n, rnd) {
        if (n < 0)
            return -1;
        return rnd.nextInt(n);
    }
    /**
     * java.util.Random index from 0 to n-1,
     *
     * @param {number} n          Bound.
     * @param {Random} rnd        java.util.Random number generator.
     * @return           {number} if n &lt; 0 returns -1, otherwise random index.
     */
    static rndIndex(n, rnd) {
        if (((typeof n === 'number') || n === null) && ((rnd != null && rnd instanceof j4ts_1.java.util.Random) || rnd === null)) {
            return ProbabilityDistributions.rndIndex$int$java_util_Random(n, rnd);
        }
        else if (((typeof n === 'number') || n === null) && rnd === undefined) {
            return ProbabilityDistributions.rndIndex$int(n);
        }
        else
            throw new Error('invalid overload');
    }
    static rndIndex$int(n) {
        if (n < 0)
            return -1;
        return ProbabilityDistributions.randomGenerator_$LI$().nextInt(n);
    }
    static rndInteger$() {
        return ProbabilityDistributions.rndInteger$java_util_Random(ProbabilityDistributions.randomGenerator_$LI$());
    }
    static rndNormal$double$double$java_util_Random(mean, stddev, rnd) {
        if ( /* isNaN */isNaN(mean))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(stddev))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (rnd == null)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev < 0)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev === 0)
            return mean;
        let x;
        let a;
        let v1;
        let b;
        let v2;
        let r;
        let fac;
        let polarTransform;
        do {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_2.javaemul.internal.DoubleHelper.NaN;
                a = rnd.nextDouble();
                b = rnd.nextDouble();
                v1 = 2.0 * a - 1.0;
                v2 = 2.0 * b - 1.0;
                r = (v1 * v1) + (v2 * v2);
                if (r >= 1.0 || r === 0.0) {
                    x = 0.0;
                    polarTransform = false;
                }
                else {
                    fac = MathFunctions_1.MathFunctions.sqrt(-2.0 * MathFunctions_1.MathFunctions.ln(r) / r);
                    x = v1 * fac;
                    polarTransform = true;
                }
            }
        } while ((!polarTransform));
        return mean + (stddev * x);
    }
    /**
     * java.util.Random number from normal distribution N(mean, stddev).
     *
     * @param {number} mean              Mean value.
     * @param {number} stddev            Standard deviation.
     * @param {Random} rnd               java.util.Random number generator.
     * @return                  {number} Double.NaN if mean or stddev or rnd is null or stddev is lower than 0 -
     * otherwise random number.
     */
    static rndNormal(mean, stddev, rnd) {
        if (((typeof mean === 'number') || mean === null) && ((typeof stddev === 'number') || stddev === null) && ((rnd != null && rnd instanceof j4ts_1.java.util.Random) || rnd === null)) {
            return ProbabilityDistributions.rndNormal$double$double$java_util_Random(mean, stddev, rnd);
        }
        else if (((typeof mean === 'number') || mean === null) && ((typeof stddev === 'number') || stddev === null) && rnd === undefined) {
            return ProbabilityDistributions.rndNormal$double$double(mean, stddev);
        }
        else
            throw new Error('invalid overload');
    }
    static rndNormal$double$double(mean, stddev) {
        return ProbabilityDistributions.rndNormal$double$double$java_util_Random(mean, stddev, ProbabilityDistributions.randomGenerator_$LI$());
    }
    /**
     * PDF - Probability Distribution Function - Normal distribution N(mean, stddev).
     *
     * @param {number} x                 Point to evaluate pdf function.
     * @param {number} mean              Mean value.
     * @param {number} stddev            Standard deviation.
     * @return                  {number} Double.NaN if mean or stddev is null or stddev is lower than 0 -
     * otherwise function value.
     */
    static pdfNormal(x, mean, stddev) {
        if ( /* isNaN */isNaN(x))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(mean))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(stddev))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev < 0)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev === 0) {
            if (x === mean)
                return 1.0;
            else
                return 0;
        }
        if (x === j4ts_2.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY)
            return 0.0;
        if (x === j4ts_2.javaemul.internal.DoubleHelper.POSITIVE_INFINITY)
            return 0.0;
        const d = (x - mean) / stddev;
        return MathFunctions_1.MathFunctions.exp(-0.5 * d * d) / (MathConstants_1.MathConstants.SQRT2Pi * stddev);
    }
    /**
     * CDF - Cumulative Distribution Function - Normal distribution N(mean, stddev).
     *
     * @param {number} x                 Point to evaluate pdf function.
     * @param {number} mean              Mean value.
     * @param {number} stddev            Standard deviation.
     * @return                  {number} Double.NaN if mean or stddev is null or stddev is lower than 0 -
     * otherwise function value.
     */
    static cdfNormal(x, mean, stddev) {
        if ( /* isNaN */isNaN(x))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(mean))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(stddev))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev < 0)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev === 0) {
            if (x < mean)
                return 0.0;
            else
                return 1.0;
        }
        if (x === j4ts_2.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY)
            return 0.0;
        if (x === j4ts_2.javaemul.internal.DoubleHelper.POSITIVE_INFINITY)
            return 1.0;
        return 0.5 * SpecialFunctions_1.SpecialFunctions.erfc((mean - x) / (stddev * MathConstants_1.MathConstants.SQRT2_$LI$()));
    }
    /**
     * QNT - Quantile Function - Normal distribution N(mean, stddev).
     * (Inverse of Cumulative Distribution Function).
     *
     * @param {number} q                 Quantile.
     * @param {number} mean              Mean value.
     * @param {number} stddev            Standard deviation.
     * @return                  {number} Double.NaN if mean or stddev is null or stddev is lower than 0
     * or q is lower than 0 or q is greater than 1 -
     * otherwise function value.
     */
    static qntNormal(q, mean, stddev) {
        if ( /* isNaN */isNaN(q))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(mean))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ( /* isNaN */isNaN(stddev))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ((q < 0.0) || (q > 1.0))
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev < 0)
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (stddev === 0) {
            if (q === 1.0)
                return mean;
            else
                return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
        if (q === 0.0)
            return j4ts_2.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY;
        if (q === 1.0)
            return j4ts_2.javaemul.internal.DoubleHelper.POSITIVE_INFINITY;
        return mean - (stddev * MathConstants_1.MathConstants.SQRT2_$LI$() * SpecialFunctions_1.SpecialFunctions.erfcInv(2.0 * q));
    }
}
exports.ProbabilityDistributions = ProbabilityDistributions;
ProbabilityDistributions["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.ProbabilityDistributions";
//# sourceMappingURL=ProbabilityDistributions.js.map