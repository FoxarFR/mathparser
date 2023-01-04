import { Argument } from '../Argument';
import { Expression } from '../Expression';
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
export declare class NumberTheory {
    static DEFAULT_TO_FRACTION_INIT_SEARCH_SIZE: number;
    /**
     * Initial search size 1 ... n for the toFraction method
     * @see NumberTheory#toFraction(double)
     */
    static TO_FRACTION_INIT_SEARCH_SIZE: number;
    static TO_FRACTION_INIT_SEARCH_SIZE_$LI$(): number;
    /**
     * Sets initial search size for the toFraction method
     *
     * @param {number} n initial search size, has to be non-zero positive.
     * @see NumberTheory#toFraction(double)
     */
    static setToFractionInitSearchSize(n: number): void;
    /**
     * Gets initial search size used by the toFraction method
     *
     * @return {number} initial search size used by the toFraction method
     * @see NumberTheory#toFraction(double)
     */
    static getToFractionInitSearchSize(): number;
    static min$double$double(a: number, b: number): number;
    static min$double_A(...numbers: number[]): number;
    /**
     * Arg-Min function.
     *
     * @param      {double[]} numbers             the a function parameter
     *
     * @return     {number} Returns the index of the first smallest number,
     * otherwise returns Double.NaN.
     */
    static argmin(...numbers: number[]): number;
    static max$double$double(a: number, b: number): number;
    static max$double_A(...numbers: number[]): number;
    /**
     * Arg-Max function.
     *
     * @param      {double[]} numbers             the a function parameter
     *
     * @return     {number} Returns the index of the first biggest number,
     * otherwise returns Double.NaN.
     */
    static argmax(...numbers: number[]): number;
    static sortAsc$double_A$int_A$int$int(array: number[], initOrder: number[], leftIndex: number, rightIndex: number): void;
    /**
     * Sorting array - ascending - quick sort algorithm.
     * @param {double[]} array         Array to be sorted
     * @param {int[]} initOrder     Array to be swapped together with sorted array
     * @param {number} leftIndex     Starting left index.
     * @param {number} rightIndex    Starting right index.
     * @return              {void} Initial ordering swapped according to sorting order.
     * @private
     */
    static sortAsc(array?: any, initOrder?: any, leftIndex?: any, rightIndex?: any): any;
    static sortAsc$double_A(array: number[]): number[];
    /**
     * Returns list of distinct values found in a given array.
     * @param {double[]} array The array
     * @param {boolean} returnOrderByDescFreqAndAscOrigPos Indicator whether to apply final ordering based
     * on descending value frequency and ascending initial position.
     * @return {double[][]} List of values in the form of: first index - value index, second index: 0 - value, 1 - value count,
     * 2 - minimal value position in original array
     */
    static getDistValues(array: number[], returnOrderByDescFreqAndAscOrigPos: boolean): number[][];
    /**
     * Returns number of unique values found the list of numbers
     * @param {double[]} numbers    The list of numbers
     * @return           {number} Number of unique values. If list is null or any Double.NaN
     * is found then Double.NaN is returned.
     */
    static numberOfDistValues(...numbers: number[]): number;
    static gcd$long$long(a: number, b: number): number;
    /**
     * Greatest common divisor (GCD)
     *
     * @param      {number} a                   the a function parameter
     * @param      {number} b                   the b function parameter
     * @return     {number} GCD(a,b)
     */
    static gcd(a?: any, b?: any): any;
    static gcd$double$double(a: number, b: number): number;
    static gcd$long_A(...numbers: number[]): number;
    static gcd$double_A(...numbers: number[]): number;
    static lcm$long$long(a: number, b: number): number;
    /**
     * Latest common multipliedBy (LCM)
     *
     * @param      {number} a                   the a function parameter
     * @param      {number} b                   the b function parameter
     *
     * @return     {number} LCM(a,b)
     */
    static lcm(a?: any, b?: any): any;
    static lcm$double$double(a: number, b: number): number;
    static lcm$long_A(...numbers: number[]): number;
    static lcm$double_A(...numbers: number[]): number;
    /**
     * Adding numbers.
     *
     * @param      {double[]} numbers             the numbers
     *
     * @return     {number} if each number from numbers &lt;&gt; Double.NaN returns
     * sum(a_1,...,a_n) a_1,...,a_n in numbers,
     * otherwise returns Double.NaN.
     */
    static sum(...numbers: number[]): number;
    /**
     * Numbers multiplication.
     *
     * @param      {double[]} numbers             the numbers
     *
     * @return     {number} if each number from numbers &lt;&gt; Double.NaN returns
     * prod(a_1,...,a_n) a_1,...,a_n in numbers,
     * otherwise returns Double.NaN.
     */
    static prod(...numbers: number[]): number;
    static primeTest$long(n: number): boolean;
    /**
     * Prime test
     *
     * @param {number} n           The number to be tested.
     *
     * @return {boolean} true if number is prime, otherwise false
     */
    static primeTest(n?: any): any;
    static primeTest$double(n: number): number;
    static primeCount$long(n: number): number;
    /**
     * Prime counting function
     *
     * @param {number} n number
     *
     * @return {number} Number of primes below or equal x
     */
    static primeCount(n?: any): any;
    static primeCount$double(n: number): number;
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
    static sigmaSummation(f: Expression, index: Argument, from: number, to: number, delta: number): number;
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
    static piProduct(f: Expression, index: Argument, from: number, to: number, delta: number): number;
    static min$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f: Expression, index: Argument, from: number, to: number, delta: number): number;
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
    static min(f?: any, index?: any, from?: any, to?: any, delta?: any): any;
    static max$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f: Expression, index: Argument, from: number, to: number, delta: number): number;
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
    static max(f?: any, index?: any, from?: any, to?: any, delta?: any): any;
    /**
     * Return regular expression representing number literal
     * string in given numeral system with base between 1 and 36.
     *
     * @param {number} numeralSystemBase    Base of numeral system, base between 1 and 36
     * @return        {string} Regular expression string if base between 1 and 36,
     * otherwise empty string "" is returned.
     * @private
     */
    static getRegExpForNumeralSystem(numeralSystemBase: number): string;
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
    static digitIndex(digitChar: string): number;
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
    static digitChar(digitIndex: number): string;
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
    static getNumeralSystemBase(numberLiteral: string): number;
    static convOthBase2Decimal$java_lang_String$int(numberLiteral: string, numeralSystemBase: number): number;
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
    static convOthBase2Decimal(numberLiteral?: any, numeralSystemBase?: any): any;
    static convOthBase2Decimal$java_lang_String(numberLiteral: string): number;
    static convOthBase2Decimal$int$int_A(numeralSystemBase: number, ...digits: number[]): number;
    static convOthBase2Decimal$double$double_A(numeralSystemBase: number, ...digits: number[]): number;
    static convOthBase2Decimal$int_A(baseAndDigits: number[]): number;
    static convOthBase2Decimal$double_A(baseAndDigits: number[]): number;
    static convDecimal2OthBase$double$int(decimalNumber: number, numeralSystemBase: number): string;
    static convDecimal2OthBase$double$int$int(decimalNumber: number, numeralSystemBase: number, format: number): string;
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
    static convDecimal2OthBase(decimalNumber?: any, numeralSystemBase?: any, format?: any): any;
    static numberOfDigits$long(number: number): number;
    static numberOfDigits$double(number: number): number;
    static numberOfDigits$long$long(number: number, numeralSystemBase: number): number;
    /**
     * Number of digits needed to represent given number in numeral system with given base.
     * @param {number} number              The number
     * @param {number} numeralSystemBase   Numeral system base above 0
     * @return                    {number} Returns number of digits. In case when numeralSystemBase is lower than
     * 1 then -1 is returned.
     */
    static numberOfDigits(number?: any, numeralSystemBase?: any): any;
    static numberOfDigits$double$double(number: number, numeralSystemBase: number): number;
    static digitAtPosition$long$int$int(number: number, position: number, numeralSystemBase: number): number;
    /**
     * Digit at position - numeral system with given base
     *
     * @param {number} number              The number
     * @param {number} position            Position from 1 ... n (left to right) or from 0 ... -(n-1) (right to left).
     * @param {number} numeralSystemBase   Base of numeral system - above 0
     * @return                    {number} Return digit at given position. If digit finding was not possible then -1 is returned.
     */
    static digitAtPosition(number?: any, position?: any, numeralSystemBase?: any): any;
    static digitAtPosition$long$int(number: number, position: number): number;
    static digitAtPosition$double$double$double(number: number, position: number, numeralSystemBase: number): number;
    static digitAtPosition$double$double(number: number, position: number): number;
    static primeFactors$long(number: number): number[];
    /**
     * Prime decomposition (prime factorization)
     *
     * @param {number} number     Number to be decomposed
     * @return           {long[]} List of prime factors (non-distinct)
     */
    static primeFactors(number?: any): any;
    static primeFactors$double(number: number): number[];
    /**
     * Prime decomposition (prime factorization) - returns number of distinct prime factors
     *
     * @param {number} number     Number to be decomposed
     * @return           {number} Number of distinct prime factors
     */
    static numberOfPrimeFactors(number: number): number;
    /**
     * Prime decomposition (prime factorization) - returns prime factor value
     *
     * @param {number} number     Number to be decomposed
     * @param {number} id         Factor id
     * @return           {number} Factor value if factor id between 1 and numberOfPrimeFactors, otherwise 1 is returned.
     * For NaN of infinite parameters Double NaN is returned. For number eq 0 Double.NaN
     * is returned.
     */
    static primeFactorValue(number: number, id: number): number;
    /**
     * Prime decomposition (prime factorization) - returns prime factor exponent
     *
     * @param {number} number     Number to be decomposed
     * @param {number} id         Factor id
     * @return           {number} Factor exponent if factor id between 1 and numberOfPrimeFactors, otherwise 0 is returned.
     * For NaN of infinite parameters Double NaN is returned. For number eq 0 Double.NaN
     * is returned.
     */
    static primeFactorExponent(number: number, id: number): number;
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
    static fractionToDoubleArray(sign: number, numerator: number, denominator: number): number[];
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
    static mixedFractionToDoubleArray(sign: number, whole: number, numerator: number, denominator: number): number[];
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
    static toFraction(value: number): number[];
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
    static toMixedFraction(value: number): number[];
    /**
     * Converts array representing fraction to fraction string representation.
     *
     * @param {double[]} fraction    Array representing fraction (including mix fractions)
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toFraction(double)
     * @see NumberTheory#toMixedFraction(double)
     */
    static fractionToString(fraction: number[]): string;
    /**
     * Converts number to its fraction string representation.
     *
     * @param {number} value   Given number
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toFraction(double)
     * @see NumberTheory#fractionToString(double[])
     */
    static toFractionString(value: number): string;
    /**
     * Converts number to its mixed fraction string representation.
     *
     * @param {number} value   Given number
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toMixedFraction(double)
     * @see NumberTheory#fractionToString(double[])
     */
    static toMixedFractionString(value: number): string;
}
