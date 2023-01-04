import { java } from 'j4ts/j4ts';
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
export declare class ProbabilityDistributions {
    /**
     * java.util.Random number generator
     */
    static randomGenerator: java.util.Random;
    static randomGenerator_$LI$(): java.util.Random;
    static rndUniformContinuous$double$double$java_util_Random(a: number, b: number, rnd: java.util.Random): number;
    /**
     * java.util.Random number from Uniform Continuous distribution over interval [a, b).
     *
     * @param {number} a       Interval limit - left / lower.
     * @param {number} b       Interval limit - right / upper.
     * @param {Random} rnd     java.util.Random number generator.
     * @return        {number} Double.NaN if a or b is null, or b is lower than a -
     * otherwise returns random number.
     */
    static rndUniformContinuous(a?: any, b?: any, rnd?: any): any;
    static rndUniformContinuous$double$double(a: number, b: number): number;
    static rndUniformContinuous$java_util_Random(rnd: java.util.Random): number;
    /**
     * java.util.Random number from Uniform Continuous distribution over interval [0, 1).
     *
     * @return        {number} java.util.Random number.
     */
    static randomUniformContinuous(): number;
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
    static pdfUniformContinuous(x: number, a: number, b: number): number;
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
    static cdfUniformContinuous(x: number, a: number, b: number): number;
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
    static qntUniformContinuous(q: number, a: number, b: number): number;
    static rndInteger$int$int$java_util_Random(a: number, b: number, rnd: java.util.Random): number;
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
    static rndInteger(a?: any, b?: any, rnd?: any): any;
    static rndInteger$int$int(a: number, b: number): number;
    static rndInteger$java_util_Random(rnd: java.util.Random): number;
    static rndIndex$int$java_util_Random(n: number, rnd: java.util.Random): number;
    /**
     * java.util.Random index from 0 to n-1,
     *
     * @param {number} n          Bound.
     * @param {Random} rnd        java.util.Random number generator.
     * @return           {number} if n &lt; 0 returns -1, otherwise random index.
     */
    static rndIndex(n?: any, rnd?: any): any;
    static rndIndex$int(n: number): number;
    static rndInteger$(): number;
    static rndNormal$double$double$java_util_Random(mean: number, stddev: number, rnd: java.util.Random): number;
    /**
     * java.util.Random number from normal distribution N(mean, stddev).
     *
     * @param {number} mean              Mean value.
     * @param {number} stddev            Standard deviation.
     * @param {Random} rnd               java.util.Random number generator.
     * @return                  {number} Double.NaN if mean or stddev or rnd is null or stddev is lower than 0 -
     * otherwise random number.
     */
    static rndNormal(mean?: any, stddev?: any, rnd?: any): any;
    static rndNormal$double$double(mean: number, stddev: number): number;
    /**
     * PDF - Probability Distribution Function - Normal distribution N(mean, stddev).
     *
     * @param {number} x                 Point to evaluate pdf function.
     * @param {number} mean              Mean value.
     * @param {number} stddev            Standard deviation.
     * @return                  {number} Double.NaN if mean or stddev is null or stddev is lower than 0 -
     * otherwise function value.
     */
    static pdfNormal(x: number, mean: number, stddev: number): number;
    /**
     * CDF - Cumulative Distribution Function - Normal distribution N(mean, stddev).
     *
     * @param {number} x                 Point to evaluate pdf function.
     * @param {number} mean              Mean value.
     * @param {number} stddev            Standard deviation.
     * @return                  {number} Double.NaN if mean or stddev is null or stddev is lower than 0 -
     * otherwise function value.
     */
    static cdfNormal(x: number, mean: number, stddev: number): number;
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
    static qntNormal(q: number, mean: number, stddev: number): number;
}
