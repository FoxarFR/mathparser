/**
 * SpecialFunctions - special (non-elementary functions).
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
export declare class SpecialFunctions {
    /**
     * Exponential integral function Ei(x)
     * @param {number} x    Point at which function will be evaluated.
     * @return {number} Exponential integral function Ei(x)
     */
    static exponentialIntegralEi(x: number): number;
    /**
     * Constants for Exponential integral function Ei(x) calculation
     */
    static EI_DBL_EPSILON: number;
    static EI_DBL_EPSILON_$LI$(): number;
    static EI_EPSILON: number;
    static EI_EPSILON_$LI$(): number;
    /**
     * Supporting function
     * while Exponential integral function Ei(x) calculation
     * @param {number} x
     * @return {number}
     * @private
     */
    static continuedFractionEi(x: number): number;
    /**
     * Supporting function
     * while Exponential integral function Ei(x) calculation
     * @param {number} x
     * @return {number}
     * @private
     */
    static powerSeriesEi(x: number): number;
    /**
     * Supporting function
     * while Exponential integral function Ei(x) calculation
     * @param {number} x
     * @return {number}
     * @private
     */
    static argumentAdditionSeriesEi(x: number): number;
    /**
     * Logarithmic integral function li(x)
     * @param {number} x   Point at which function will be evaluated.
     * @return {number} Logarithmic integral function li(x)
     */
    static logarithmicIntegralLi(x: number): number;
    /**
     * Offset logarithmic integral function Li(x)
     * @param {number} x   Point at which function will be evaluated.
     * @return {number} Offset logarithmic integral function Li(x)
     */
    static offsetLogarithmicIntegralLi(x: number): number;
    /**
     * Calculates the error function
     * @param {number} x   Point at which function will be evaluated.
     * @return    {number} Error function erf(x)
     */
    static erf(x: number): number;
    /**
     * Calculates the complementary error function.
     * @param {number} x   Point at which function will be evaluated.
     * @return    {number} Complementary error function erfc(x)
     */
    static erfc(x: number): number;
    /**
     * Calculates the inverse error function evaluated at x.
     * @param {number} x   Point at which function will be evaluated.
     * @return    {number} Inverse error function erfInv(x)
     */
    static erfInv(x: number): number;
    /**
     * Calculates the inverse error function evaluated at x.
     * @param x
     * @param {boolean} invert
     * @return
     * @param {number} z
     * @return {number}
     * @private
     */
    static erfImp(z: number, invert: boolean): number;
    /**
     * Calculates the complementary inverse error function evaluated at x.
     * @param {number} z   Point at which function will be evaluated.
     * @return    {number} Inverse of complementary inverse error function erfcInv(x)
     */
    static erfcInv(z: number): number;
    /**
     * The implementation of the inverse error function.
     * @param {number} p
     * @param {number} q
     * @param {number} s
     * @return
     * @return {number}
     * @private
     */
    static erfInvImpl(p: number, q: number, s: number): number;
    /**
     * Gamma function for the integers
     * @param {number} n Integer number
     * @return  {number} Returns Gamma function for the integers.
     * @private
     */
    static gammaInt(n: number): number;
    /**
     * Real valued Gamma function
     *
     * @param {number} x   Argument value
     * @return  {number} Returns gamma function value.
     */
    static gamma(x: number): number;
    /**
     * Gamma function implementation based on
     * Lanchos approximation algorithm
     *
     * @param {number} x    Function parameter
     * @return     {number} Gamma function value (Lanchos approx).
     */
    static lanchosGamma(x: number): number;
    /**
     * Real valued log gamma function.
     * @param {number} x  Argument value
     * @return  {number} Returns log value from gamma function.
     */
    static logGamma(x: number): number;
    /**
     * Signum from the real valued gamma function.
     * @param {number} x Argument value
     * @return  {number} Returns signum of the gamma(x)
     */
    static sgnGamma(x: number): number;
    /**
     * Regularized lower gamma function 'P'
     * @param {number} s  Argument value
     * @param {number} x  Argument value
     * @return {number} Value of the regularized lower gamma function 'P'.
     */
    static regularizedGammaLowerP(s: number, x: number): number;
    /**
     * Incomplete lower gamma function
     * @param {number} s   Argument value
     * @param {number} x   Argument value
     * @return {number} Value of the incomplete lower gamma function.
     */
    static incompleteGammaLower(s: number, x: number): number;
    /**
     * Regularized upper gamma function 'Q'
     * @param {number} s  Argument value
     * @param {number} x  Argument value
     * @return {number} Value of the regularized upper gamma function 'Q'.
     */
    static regularizedGammaUpperQ(s: number, x: number): number;
    /**
     * Incomplete upper gamma function
     * @param {number} s   Argument value
     * @param {number} x   Argument value
     * @return {number} Value of the incomplete upper gamma function.
     */
    static incompleteGammaUpper(s: number, x: number): number;
    /**
     * Digamma function as the logarithmic derivative of the Gamma special function
     * @param {number} x   Argument value
     * @return {number} Approximated value of the digamma function.
     */
    static diGamma(x: number): number;
    static doubleWidth: number;
    static doublePrecision: number;
    static doublePrecision_$LI$(): number;
    /**
     * Log Beta special function
     * @param {number} x   Argument value
     * @param {number} y   Argument value
     * @return  {number} Return logBeta special function (for positive x and positive y)
     */
    static logBeta(x: number, y: number): number;
    /**
     * Beta special function
     * @param {number} x   Argument value
     * @param {number} y   Argument value
     * @return  {number} Return Beta special function (for positive x and positive y)
     */
    static beta(x: number, y: number): number;
    /**
     * Log Incomplete Beta special function
     * @param {number} a   Argument value
     * @param {number} b   Argument value
     * @param {number} x   Argument value
     * @return  {number} Return incomplete Beta special function
     * for positive a and positive b and x between 0 and 1
     */
    static incompleteBeta(a: number, b: number, x: number): number;
    /**
     * Regularized incomplete Beta special function
     * @param {number} a   Argument value
     * @param {number} b   Argument value
     * @param {number} x   Argument value
     * @return  {number} Return incomplete Beta special function
     * for positive a and positive b and x between 0 and 1
     */
    static regularizedBeta(a: number, b: number, x: number): number;
    static GSL_DBL_EPSILON: number;
    /**
     * Halley iteration used in Lambert-W approximation
     * @param {number} x         Point at which Halley iteration will be calculated
     * @param {number} wInitial  Starting point
     * @param {number} maxIter   Maximum number of iteration
     * @return          {number} Halley iteration value if succesfull, otherwise Double.NaN
     * @private
     */
    static halleyIteration(x: number, wInitial: number, maxIter: number): number;
    /**
     * Private method used in Lambert-W approximation - near zero
     * @param {number} r
     * @return {number} Ner zero approximation
     * @private
     */
    static seriesEval(r: number): number;
    /**
     * W0 - Principal branch of Lambert-W function
     * @param {number} x
     * @return {number} Approximation of principal branch of Lambert-W function
     * @private
     */
    static lambertW0(x: number): number;
    /**
     * Minus 1 branch of Lambert-W function
     * Analytical approximations for real values of the Lambert W-function - D.A. Barry
     * Mathematics and Computers in Simulation 53 (2000) 95–103
     * @param {number} x
     * @return {number} Approxmiation of minus 1 branch of Lambert-W function
     * @private
     */
    static lambertW1(x: number): number;
    /**
     * Real-valued Lambert-W function approximation.
     * @param {number} x      Point at which function will be approximated
     * @param {number} branch Branch id, 0 for principal branch, -1 for the other branch
     * @return       {number} Principal branch for x greater or equal than -1/e, otherwise Double.NaN.
     * Minus 1 branch for x greater or equal than -1/e and lower than 0, otherwise Double.NaN.
     */
    static lambertW(x: number, branch: number): number;
}
