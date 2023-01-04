/**
 * MathFunctions - the most popular math functions. Many of function implemented by this class
 * could be found in java Math package (in fact functions from MathFunctions typically calls
 * original functions from the Math package). The reason why it was "re-implemented" is:
 * if you decide to implement your own function you do not need to change anything in the parser,
 * jut modify function implementation in this class.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.4.2
 * @class
 */
export declare class MathFunctions {
    /**
     * Addition a + b applying canonical rounding if canonical
     * rounding is enabled
     *
     * @param {number} a  The a parameter
     * @param {number} b  The b parameter
     * @return   {number} The result of addition
     */
    static plus(a: number, b: number): number;
    /**
     * Subtraction a - b applying canonical rounding if canonical
     * rounding is enabled
     *
     * @param {number} a  The a parameter
     * @param {number} b  The b parameter
     * @return   {number} The result of subtraction
     */
    static minus(a: number, b: number): number;
    /**
     * Multiplication a * b applying canonical rounding if canonical
     * rounding is enabled
     *
     * @param {number} a  The a parameter
     * @param {number} b  The b parameter
     * @return   {number} The result of multiplication
     */
    static multiply(a: number, b: number): number;
    /**
     * Division a / b applying canonical rounding if canonical
     * rounding is enabled
     *
     * @param {number} a  The a parameter
     * @param {number} b  The b parameter
     * @return   {number} The result of division
     */
    static div(a: number, b: number): number;
    static bellNumber$int(n: number): number;
    /**
     * Bell Numbers
     *
     * @param      {number} n                   the n
     *
     * @return     {number} if n &gt;= 0 returns Bell numbers,
     * otherwise returns Double.NaN.
     */
    static bellNumber(n?: any): any;
    static bellNumber$double(n: number): number;
    static eulerNumber$int$int(n: number, k: number): number;
    /**
     * Euler numbers
     *
     * @param      {number} n                   the n function param
     * @param      {number} k                   the k function param
     *
     * @return     {number} if n &gt;=0 returns Euler number,
     * otherwise return Double.NaN.
     */
    static eulerNumber(n?: any, k?: any): any;
    static eulerNumber$double$double(n: number, k: number): number;
    static factorial$int(n: number): number;
    /**
     * Factorial
     *
     * @param      {number} n                   the n function parameter
     *
     * @return     {number} Factorial if n &gt;=0, otherwise returns Double.NaN.
     */
    static factorial(n?: any): any;
    static factorial$double(n: number): number;
    static binomCoeff$double$long(n: number, k: number): number;
    /**
     * Generalized binomial coefficient
     *
     * @param      {number} n                   the n function parameter
     * @param {number} k    k                   the k function parameter
     *
     * @return     {number} Generalized binomial coefficient, if
     * n = Double.NaN or k &lt; 0 returns Double.NaN.
     */
    static binomCoeff(n?: any, k?: any): any;
    static binomCoeff$double$double(n: number, k: number): number;
    static numberOfPermutations$double$long(n: number, k: number): number;
    /**
     * Generalized coefficient returning number of k permutations
     * that can be drawn for n elements set.
     *
     * @param      {number} n                   the n function parameter
     * @param      {number} k                   the k function parameter
     *
     * @return   {number} For k greater than 0 return number of permutations, otherwise
     * returns Double.NaN
     */
    static numberOfPermutations(n?: any, k?: any): any;
    static numberOfPermutations$double$double(n: number, k: number): number;
    static bernoulliNumber$int$int(m: number, n: number): number;
    /**
     * Bernoulli numbers
     *
     * @param      {number} m                   the m function parameter
     * @param      {number} n                   the n function parameter
     *
     * @return     {number} if n, m &gt;= 0 returns Bernoulli number,
     * otherwise returns Double.NaN.
     */
    static bernoulliNumber(m?: any, n?: any): any;
    static bernoulliNumber$double$double(m: number, n: number): number;
    static Stirling1Number$int$int(n: number, k: number): number;
    /**
     * Stirling numbers of the first kind
     *
     * @param      {number} n                   the n function parameter
     * @param      {number} k                   the k function parameter
     *
     * @return     {number} Stirling numbers of the first kind
     */
    static Stirling1Number(n?: any, k?: any): any;
    static Stirling1Number$double$double(n: number, k: number): number;
    static Stirling2Number$int$int(n: number, k: number): number;
    /**
     * Stirling numbers of the second kind
     *
     * @param      {number} n                   the n function parameter
     * @param      {number} k                   the k function parameter
     *
     * @return     {number} Stirling numbers of the second kind
     */
    static Stirling2Number(n?: any, k?: any): any;
    static Stirling2Number$double$double(n: number, k: number): number;
    static worpitzkyNumber$int$int(n: number, k: number): number;
    /**
     * Worpitzky numbers
     *
     * @param      {number} n                   the n function parameter
     * @param      {number} k                   the k function parameter
     *
     * @return     {number} if n,k &gt;= 0 and k &lt;= n return Worpitzky number,
     * otherwise return Double.NaN.
     */
    static worpitzkyNumber(n?: any, k?: any): any;
    static worpitzkyNumber$double$double(n: number, k: number): number;
    static harmonicNumber$int(n: number): number;
    static harmonicNumber$double(n: number): number;
    static harmonicNumber$double$int(x: number, n: number): number;
    /**
     * Harmonic number 1/1 + 1/2^x + ... + 1/n^x
     *
     * @param      {number} x                   the x function parameter
     * @param      {number} n                   the n function parameter
     *
     * @return     {number} if x &lt;&gt; Double.NaN and x &gt;= 0 Harmonic number,
     * otherwise returns Double.NaN.
     */
    static harmonicNumber(x?: any, n?: any): any;
    static harmonicNumber$double$double(x: number, n: number): number;
    static catalanNumber$int(n: number): number;
    /**
     * Catalan numbers
     *
     * @param      {number} n                   the n function parameter
     *
     * @return     {number} Catalan numbers
     */
    static catalanNumber(n?: any): any;
    static catalanNumber$double(n: number): number;
    static fibonacciNumber$int(n: number): number;
    /**
     * Fibonacci numbers
     *
     * @param      {number} n                   the n function parameter
     *
     * @return     {number} if n &gt;= 0 returns fibonacci numbers,
     * otherwise returns Double.NaN.
     */
    static fibonacciNumber(n?: any): any;
    static fibonacciNumber$double(n: number): number;
    static lucasNumber$int(n: number): number;
    /**
     * Lucas numebrs
     *
     * @param      {number} n                   the n function parameter
     *
     * @return     {number} if n &gt;= 0 returns Lucas numbers,
     * otherwise returns Double.NaN.
     */
    static lucasNumber(n?: any): any;
    static lucasNumber$double(n: number): number;
    static kroneckerDelta$double$double(i: number, j: number): number;
    static kroneckerDelta$int$int(i: number, j: number): number;
    /**
     * Kronecker delta
     *
     * @param      {number} i                   the i function parameter
     * @param      {number} j                   the j function parameter
     *
     * @return     {number} Kronecker delta
     */
    static kroneckerDelta(i?: any, j?: any): any;
    /**
     * Continued fraction
     *
     * @param      {double[]} sequence            the numbers
     *
     * @return     {number} if each number form the sequence &lt;&gt; Double.NaN and
     * there is no division by 0 while computing returns continued fraction
     * value, otherwise returns Double.NaN.
     */
    static continuedFraction(...sequence: number[]): number;
    static continuedPolynomial$int$double_A(n: number, x: number[]): number;
    /**
     * Private function calculating continued polynomial
     * recursively.
     *
     * @param      {number} n         the polynomial order
     * @param      {double[]} x         the x values
     *
     * @return     {number} continued polynomial value
     * @private
     */
    static continuedPolynomial(n?: any, x?: any): any;
    static continuedPolynomial$double_A(...x: number[]): number;
    static eulerPolynomial$int$double(m: number, x: number): number;
    /**
     * Euler polynomial
     *
     * @param      {number} m                   the m parameter
     * @param      {number} x                   the x parameter
     *
     * @return     {number} if x &lt;&gt; Double.NaN and m &gt;= 0 returns polynomial value,
     * otherwise returns Double.NaN.
     */
    static eulerPolynomial(m?: any, x?: any): any;
    static eulerPolynomial$double$double(m: number, x: number): number;
    /**
     * Characteristic function x in (a,b)
     *
     * @param      {number} x                   the x value
     * @param      {number} a                   the left (lower) limit
     * @param      {number} b                   the right (upper) limit
     *
     * @return     {number} if x, a, b &lt;&gt; Double.NaN returns
     * characteristic function value on the (a,b) range.
     */
    static chi(x: number, a: number, b: number): number;
    /**
     * Characteristic function x in [a,b]
     *
     * @param      {number} x                   the x value
     * @param      {number} a                   the left (lower) limit
     * @param      {number} b                   the right (upper) limit
     *
     * @return     {number} if x, a, b &lt;&gt; Double.NaN returns
     * characteristic function value on the [a,b] range.
     */
    static chi_LR(x: number, a: number, b: number): number;
    /**
     * Characteristic function x in [a,b)
     *
     * @param      {number} x                   the x value
     * @param      {number} a                   the left (lower) limit
     * @param      {number} b                   the right (upper) limit
     *
     * @return     {number} if x, a, b &lt;&gt; Double.NaN returns
     * characteristic function value on the [a,b) range.
     */
    static chi_L(x: number, a: number, b: number): number;
    /**
     * Characteristic function x in (a,b]
     *
     * @param      {number} x                   the x value
     * @param      {number} a                   the left (lower) limit
     * @param      {number} b                   the right (upper) limit
     *
     * @return     {number} if x, a, b &lt;&gt; Double.NaN returns
     * characteristic function value on the (a,b] range.
     */
    static chi_R(x: number, a: number, b: number): number;
    /**
     * Verifies whether provided number is almost integer
     *
     * @see BinaryRelations#DEFAULT_COMPARISON_EPSILON
     *
     * @param {number} a  The number to be verified
     * @return   {boolean} True if the number is almost integer according to the default epsilon,
     * otherwise returns false.
     */
    static isAlmostInt(a: number): boolean;
    /**
     * Applies the integer exponent to the base a
     *
     * @param {number} a   The base
     * @param {number} n   The integer exponent
     * @return    {number} Return a to the power of n, if canonical rounding is enable, the it operates on big numbers
     * @private
     */
    static powInt(a: number, n: number): number;
    /**
     * Power function a^b
     *
     * @param      {number} a                   the a function parameter
     * @param      {number} b                   the b function parameter
     *
     * @return     {number} if a,b &lt;&gt; Double.NaN returns Math.pow(a, b),
     * otherwise returns Double.NaN.
     */
    static power(a: number, b: number): number;
    /**
     * Nth order root of a number
     *
     * @param {number} n   Root order
     * @param {number} x   Number
     * @return    {number} Returns root of a number. If calculation is not possible Double.NaN is returned.
     */
    static root(n: number, x: number): number;
    /**
     * Tetration, exponential power, power series
     *
     * @param {number} a   base
     * @param {number} n   exponent
     * @return    {number} Tetration result.
     */
    static tetration(a: number, n: number): number;
    /**
     * Modulo operator a % b
     *
     * @param      {number} a                   the a function parameter
     * @param      {number} b                   the b function parameter
     *
     * @return     {number} if a,b &lt;&gt; Double.NaN returns a % b.
     */
    static mod(a: number, b: number): number;
    /**
     * Sine trigonometric function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN return Math.sin(a),
     * otherwise return Double.NaN.
     */
    static sin(a: number): number;
    /**
     * Cosine trigonometric function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.cos(a),
     * otherwise returns Double.NaN.
     */
    static cos(a: number): number;
    /**
     * Tangent trigonometric function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.tan(a),
     * otherwise returns Double.NaN.
     */
    static tan(a: number): number;
    /**
     * Cotangent trigonometric function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and tan(a) &lt;&gt; 0 returns 1 / Math.tan(a),
     * otherwise returns Double.NaN.
     */
    static ctan(a: number): number;
    /**
     * Secant trigonometric function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and cos(a) &lt;&gt; 0 returns 1 / Math.cos(a),
     * otherwise returns Double.NaN.
     */
    static sec(a: number): number;
    /**
     * Cosecant trigonometric function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and sin(a) &lt;&gt; 0 returns 1 / Math.sin(a),
     * otherwise returns Double.NaN.
     */
    static cosec(a: number): number;
    /**
     * If double is almost integer returns the closes integer, otherwise original value
     * @param {number} val   Parameter
     * @return      {number} f double is almost integer returns the closest integer, otherwise original value
     * @private
     */
    static intIfAlmostIntOtherwiseOrig(val: number): number;
    /**
     * Arcus sine - inverse trigonometric sine function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.asin(a),
     * otherwise returns Double.NaN.
     */
    static asin(a: number): number;
    /**
     * Arcus cosine - inverse trigonometric cosine function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.acos(a),
     * otherwise returns Double.NaN.
     */
    static acos(a: number): number;
    /**
     * Arcus tangent - inverse trigonometric tangent function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.atan(a),
     * otherwise returns Double.NaN.
     */
    static atan(a: number): number;
    /**
     * Arcus cotangent - inverse trigonometric cotangent function
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and a &lt;&gt; 0 returns Math.atan(1/a),
     * otherwise returns Double.NaN.
     */
    static actan(a: number): number;
    /**
     * Arcus secant - inverse trigonometric secant function
     *
     * @param      {number} a                   the a function parameter
     * @return     {number} Inverse trigonometric secant function
     */
    static asec(a: number): number;
    /**
     * Arcus cosecant - inverse trigonometric cosecant function
     *
     * @param      {number} a                   the a function parameter
     * @return     {number} Inverse trigonometric cosecant function
     */
    static acosec(a: number): number;
    /**
     * Natural logarithm
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.log(1/a),
     * otherwise returns Double.NaN.
     */
    static ln(a: number): number;
    /**
     * Binary logarithm
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.log(a)/Math.log(2.0),
     * otherwise returns Double.NaN.
     */
    static log2(a: number): number;
    /**
     * Common logarithm
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.log10(a),
     * otherwise returns Double.NaN.
     */
    static log10(a: number): number;
    /**
     * Degrees to radius translation.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.toRadians(a),
     * otherwise returns Double.NaN.
     */
    static rad(a: number): number;
    /**
     * Exponential function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.exp(a),
     * otherwise returns Double.NaN.
     */
    static exp(a: number): number;
    /**
     * Square root.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.sqrt(a),
     * otherwise returns Double.NaN.
     */
    static sqrt(a: number): number;
    /**
     * Hyperbolic sine function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.sinh(a),
     * otherwise returns Double.NaN.
     */
    static sinh(a: number): number;
    /**
     * Hyperbolic cosine function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.cosh(a),
     * otherwise returns Double.NaN.
     */
    static cosh(a: number): number;
    /**
     * Hyperbolic tangent function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.tanh(a),
     * otherwise returns Double.NaN.
     */
    static tanh(a: number): number;
    /**
     * Hyperbolic cotangent function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and tanh(a) &lt;&gt; 0 returns 1 / Math.tanh(a),
     * otherwise returns Double.NaN.
     */
    static coth(a: number): number;
    /**
     * Hyperbolic secant function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and cosh(a) &lt;&gt; 0 returns 1 / Math.cosh(a),
     * otherwise returns Double.NaN.
     */
    static sech(a: number): number;
    /**
     * Hyperbolic cosecant function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and sinh(a) &lt;&gt; 0 returns 1 / Math.sinh(a),
     * otherwise returns Double.NaN.
     */
    static csch(a: number): number;
    /**
     * Radius to degrees translation.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.toDegrees(a),
     * otherwise returns Double.NaN.
     */
    static deg(a: number): number;
    /**
     * Absolute value.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.abs(a),
     * otherwise returns Double.NaN.
     */
    static abs(a: number): number;
    /**
     * Signum function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.signum(a),
     * otherwise returns Double.NaN.
     */
    static sgn(a: number): number;
    /**
     * Floor function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.floor(a),
     * otherwise returns Double.NaN.
     */
    static floor(a: number): number;
    /**
     * Ceiling function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.ceil(a),
     * otherwise returns Double.NaN.
     */
    static ceil(a: number): number;
    /**
     * Arcus hyperbolic sine - inverse hyperbolic sine function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.log(a + Math.sqrt(a*a+1)),
     * otherwise returns Double.NaN.
     */
    static arsinh(a: number): number;
    /**
     * Arcus hyperbolic cosine - inverse hyperbolic cosine function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN returns Math.log(a + Math.sqrt(a*a-1)),
     * otherwise returns Double.NaN.
     */
    static arcosh(a: number): number;
    /**
     * Arcus hyperbolic tangent - inverse hyperbolic tangent function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and 1-a &lt;&gt; 0 returns 0.5*Math.log( (1+a)/(1-a) ),
     * otherwise returns Double.NaN.
     */
    static artanh(a: number): number;
    /**
     * Arcus hyperbolic tangent - inverse hyperbolic tangent function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and a-1 &lt;&gt; 0 returns 0.5*Math.log( (a+1)/(a-1) );,
     * otherwise returns Double.NaN.
     */
    static arcoth(a: number): number;
    /**
     * Arcus hyperbolic secant - inverse hyperbolic secant function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and a &lt;&gt; 0 returns Math.log( (1+Math.sqrt(1-a*a))/a);,
     * otherwise returns Double.NaN.
     */
    static arsech(a: number): number;
    /**
     * Arcus hyperbolic cosecant - inverse hyperbolic cosecant function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and a &lt;&gt; 0 returns Math.log( (1+Math.sqrt(1-a*a))/a);,
     * otherwise returns Double.NaN.
     */
    static arcsch(a: number): number;
    /**
     * Normalized sinc function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and a &lt;&gt; 0 returns Math.sin(PI*a) / (PI*a);,
     * otherwise returns Double.NaN.
     */
    static sa(a: number): number;
    /**
     * Sinc function.
     *
     * @param      {number} a                   the a function parameter
     *
     * @return     {number} if a &lt;&gt; Double.NaN and a &lt;&gt; 0 returns Math.sin(a) / (a),
     * otherwise returns Double.NaN.
     */
    static sinc(a: number): number;
    /**
     * General logarithm.
     *
     * @param      {number} a                   the a function parameter (base)
     * @param      {number} b                   the b function parameter (number)
     *
     * @return     {number} if a,b &lt;&gt; Double.NaN and log(b) &lt;&gt; 0 returns Math.log(a) / Math.log(b),
     * otherwise returns Double.NaN.
     */
    static log(a: number, b: number): number;
    /**
     * Double rounding
     *
     * @param {number} value    double value to be rounded
     * @param {number} places   decimal places
     * @return         {number} Rounded value
     */
    static round(value: number, places: number): number;
    /**
     * Double half up rounding
     *
     * @param {number} value    double value to be rounded
     * @param {number} places   decimal places
     * @return         {number} Rounded value
     */
    static roundHalfUp(value: number, places: number): number;
    /**
     * Double down rounding
     *
     * @param {number} value    double value to be rounded
     * @param {number} places   decimal places
     * @return         {number} Rounded value
     */
    static roundDown(value: number, places: number): number;
    /**
     * Unit in the last place rounding, see
     * 0.1 + 0.1 + 0.1 vs roundUlp(0.1 + 0.1 + 0.1)
     *
     * @param {number} number   Double number that is to be rounded
     *
     * @return    {number} Double number with rounded ulp
     *
     * @see MathFunctions#decimalDigitsBefore(double)
     * @see MathFunctions#ulp(double)
     */
    static roundUlp(number: number): number;
    /**
     * Returns integer part of a double value.
     * @param {number} x  Number
     * @return {number} For non- negative x returns Math.floor(x),
     * otherwise returns -Math.floor(-x)
     */
    static integerPart(x: number): number;
    /**
     * For very small number returns the position of
     * first significant digit, ie 0.1 = 1, 0.01 = 2
     *
     * @param {number} value Double value, small one.
     * @return {number} Number of digits, number of places.
     */
    static decimalDigitsBefore(value: number): number;
    /**
     * Unit in the last place(ULP) for double
     * @param {number} value Double number
     * @return {number} ULP for a given double.
     */
    static ulp(value: number): number;
    /**
     * Unit in The Last Place - number of decimal digits before
     * @param {number} value   Double number
     * @return        {number} Positive number of digits N for ulp = 1e-{N+1},
     * if ulp is &gt; 1 then -1 is returned.
     * Returned proper value is always between -1 and +322.
     * If value is NaN then -2 is returned.
     */
    static ulpDecimalDigitsBefore(value: number): number;
    /**
     * Returns the first non-NaN value
     *
     * @param {double[]} values   List of values
     * @return         {number} Returns the first non-NaN value, if list is null
     * then returns Double.NaN, if list contains no elements
     * then returns Double.NaN.
     */
    static coalesce(values: number[]): number;
    /**
     * Check whether double value is almost integer.
     * @param {number} x   Number
     * @return {boolean} True if double value is almost integer, otherwise false.
     * {@link BinaryRelations#DEFAULT_COMPARISON_EPSILON}
     *
     * @see BinaryRelations#DEFAULT_COMPARISON_EPSILON
     */
    static isInteger(x: number): boolean;
    /**
     * Check whether two double values are almost equal.
     * @param {number} a   First number
     * @param {number} b   Second number
     * @return {boolean} True if double values are almost equal, otherwise false.
     * {@link BinaryRelations#DEFAULT_COMPARISON_EPSILON}
     *
     * @see BinaryRelations#DEFAULT_COMPARISON_EPSILON
     */
    static almostEqual(a: number, b: number): boolean;
}
