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
export declare class Evaluate {
    /**
     * Polynomial evaluation based on provided coefficients.
     * @param {number} x                  Point at which polynomial will be evaluated
     * @param {double[]} coefficients       Polynomial coefficients
     * @return                   {number} Polynomial value
     */
    static polynomial(x: number, coefficients: number[]): number;
    /**
     * Polynomial evaluation for the {@link SpecialFunctions#logGamma(double)}
     * @param {number} x      Argument value
     * @param {double[]} coef   List of polynomial coefficients
     * @param {number} n      Polynomial degree
     * @return {number} Polynomial value
     */
    static p1evl(x: number, coef: number[], n: number): number;
    /**
     * Polynomial evaluation for the {@link SpecialFunctions#logGamma(double)}
     * @param {number} x      Argument value
     * @param {double[]} coef   List of polynomial coefficients
     * @param {number} n      Polynomial degree
     * @return {number} Polynomial value
     */
    static polevl(x: number, coef: number[], n: number): number;
}
