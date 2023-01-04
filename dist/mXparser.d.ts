import { PrimesCache } from './mathcollection/PrimesCache';
import { KeyWord } from './parsertokens/KeyWord';
import type { Token } from './parsertokens/Token';
import { Expression } from './Expression';
import type { Argument } from './Argument';
import { java } from 'j4ts/j4ts';
/**
 * mXparser class provides usefull methods when parsing, calculating or
 * parameters transforming.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.4.2
 *
 * @see RecursiveArgument
 * @see Expression
 * @see Function
 * @see Constant
 * @class
 */
export declare class mXparser {
    /**
     * Empty expression for general help purposes.
     */
    static mXparserExp: Expression;
    static mXparserExp_$LI$(): Expression;
    /**
     * Prime numbers cache
     */
    static primesCache: PrimesCache;
    static initPrimesCache$(): void;
    static initPrimesCache$int(mximumNumberInCache: number): void;
    static initPrimesCache$org_mariuszgromada_math_mxparser_mathcollection_PrimesCache(primesCache: PrimesCache): void;
    /**
     * Initialization of prime numbers cache.
     * @param {PrimesCache} primesCache The primes cache object
     * @see PrimesCache
     */
    static initPrimesCache(primesCache?: any): any;
    /**
     * Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     *
     * @return {boolean} Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     */
    static isInitPrimesCacheSuccessful(): boolean;
    /**
     * Sets {@link mXparser#primesCache} to null
     */
    static setNoPrimesCache(): void;
    /**
     * Returns maximum integer number in primes cache
     * @return {number} If primes cache was initialized then maximum number in
     * primes cache, otherwise {@link mXparser#PRIMES_CACHE_NOT_INITIALIZED}
     */
    static getMaxNumInPrimesCache(): number;
    /**
     * Gets maximum threads number
     *
     * @return {number} Threads number.
     */
    static getThreadsNumber(): number;
    /**
     * Sets default threads number
     */
    static setDefaultThreadsNumber(): void;
    /**
     * Sets threads number
     *
     * @param {number} threadsNumber  Thread number.
     */
    static setThreadsNumber(threadsNumber: number): void;
    /**
     * Calculates function f(x0) (given as expression) assigning Argument x = x0;
     *
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} x                   the argument
     * @param      {number} x0                  the argument value
     *
     * @return     {number} f.calculate()
     *
     * @see        Expression
     */
    static getFunctionValue(f: Expression, x: Argument, x0: number): number;
    /**
     * Returns array of double values of the function f(i)
     * calculated on the range: i = from to i = to by step = delta
     *
     * @param {Expression} f            Function expression
     * @param {Argument} index        Index argument
     * @param {number} from         'from' value
     * @param {number} to           'to' value
     * @param {number} delta        'delta' step definition
     * @return             {double[]} Array of function values
     */
    static getFunctionValues(f: Expression, index: Argument, from: number, to: number, delta: number): number[];
    /**
     * Modifies random generator used by the ProbabilityDistributions class.
     *
     * @param {Random} randomGenerator      Random generator.
     * @see ProbabilityDistributions
     * @see ProbabilityDistributions#randomGenerator
     */
    static setRandomGenerator(randomGenerator: java.util.Random): void;
    /**
     * Sets comparison mode to EXACT.
     * @see BinaryRelations
     */
    static setExactComparison(): void;
    /**
     * Sets comparison mode to EPSILON.
     * @see BinaryRelations
     */
    static setEpsilonComparison(): void;
    /**
     * Sets epsilon value.
     * @param {number} epsilon   Epsilon value (grater than 0).
     *
     * @see #setEpsilonComparison()
     * @see BinaryRelations
     */
    static setEpsilon(epsilon: number): void;
    /**
     * Sets default epsilon value.
     *
     * @see #setEpsilonComparison()
     * @see BinaryRelations#DEFAULT_COMPARISON_EPSILON
     * @see BinaryRelations
     */
    static setDefaultEpsilon(): void;
    /**
     * Returns current epsilon value.
     * @return  {number} Returns current epsilon value.
     *
     * @see #setEpsilonComparison()
     * @see BinaryRelations
     */
    static getEpsilon(): number;
    /**
     * Checks if epsilon comparison mode is active;
     * @return  {boolean} True if epsilon mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     * @see BinaryRelations
     */
    static checkIfEpsilonMode(): boolean;
    /**
     * Checks if exact comparison mode is active;
     * @return  {boolean} True if exact mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     * @see BinaryRelations
     */
    static checkIfExactMode(): boolean;
    /**
     * Enables ULP rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 0.1 + 0.1 + 0.1 = 0.3
     */
    static enableUlpRounding(): void;
    /**
     * Disables ULP rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Disabling this mode 0.1 + 0.1 + 0.1 will be slightly different than 0.3.
     */
    static disableUlpRounding(): void;
    /**
     * Enables / disables ULP rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Disabling this mode 0.1 + 0.1 + 0.1 will be slightly different than 0.3.
     *
     * @param {boolean} ulpRoundingState    True to enable, false to disable
     */
    static setUlpRounding(ulpRoundingState: boolean): void;
    /**
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 0.1 + 0.1 + 0.1 = 0.3
     *
     * @return {boolean} True if ULP rounding is enabled, otherwise false.
     */
    static checkIfUlpRounding(): boolean;
    /**
     * Enables canonical rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent canonical rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 2.5 - 2.2 = 0.3
     */
    static enableCanonicalRounding(): void;
    /**
     * Disables canonical rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent canonical rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 2.5 - 2.2 = 0.3
     */
    static disableCanonicalRounding(): void;
    /**
     * Enables / disables canonical rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Disabling this mode 0.1 + 0.1 + 0.1 will be slightly different than 0.3.
     *
     * @param {boolean} canonicalRoundingState    True to enable, false to disable
     */
    static setCanonicalRounding(canonicalRoundingState: boolean): void;
    /**
     * Enables almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @see mXparser#setEpsilon(double)
     * @see mXparser#getEpsilon()
     * @see Expression#calculate()
     */
    static enableAlmostIntRounding(): void;
    /**
     * Disables almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @see mXparser#setEpsilon(double)
     * @see mXparser#getEpsilon()
     * @see Expression#calculate()
     */
    static disableAlmostIntRounding(): void;
    /**
     * Enables / disables almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @param {boolean} almostIntRoundingState    True to enable, false to disable
     */
    static setAlmostIntRounding(almostIntRoundingState: boolean): void;
    /**
     * Returns state of almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @return {boolean} true if option enabled, false otherwise
     *
     * @see mXparser#setEpsilon(double)
     * @see mXparser#getEpsilon()
     * @see Expression#calculate()
     */
    static checkIfAlmostIntRounding(): boolean;
    /**
     * Internal limit to avoid infinite loops while calculating
     * expression defined in the way shown by below examples.
     *
     * Argument x = new Argument("x = 2*y");
     * Argument y = new Argument("y = 2*x");
     * x.addDefinitions(y);
     * y.addDefinitions(x);
     *
     * Function f = new Function("f(x) = 2*g(x)");
     * Function g = new Function("g(x) = 2*f(x)");
     * f.addDefinitions(g);
     * g.addDefinitions(f);
     *
     * Currently does not affect properly defined recursive mode.
     *
     * @param {number} maxAllowedRecursionDepth  Maximum number of allowed recursion calls
     */
    static setMaxAllowedRecursionDepth(maxAllowedRecursionDepth: number): void;
    /**
     * Internal limit to avoid infinite loops while calculating
     * expression defined in the way shown by below examples.
     *
     * Argument x = new Argument("x = 2*y");
     * Argument y = new Argument("y = 2*x");
     * x.addDefinitions(y);
     * y.addDefinitions(x);
     *
     * Function f = new Function("f(x) = 2*g(x)");
     * Function g = new Function("g(x) = 2*f(x)");
     * f.addDefinitions(g);
     * g.addDefinitions(f);
     *
     * Currently does not affect properly defined recursive mode.
     *
     * @return {number} Max allowed recursion calls
     */
    static getMaxAllowedRecursionDepth(): number;
    /**
     * Set mXparser to operate in radians mode for
     * trigonometric functions
     */
    static setRadiansMode(): void;
    /**
     * Set mXparser to operate in degrees mode for
     * trigonometric functions
     */
    static setDegreesMode(): void;
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
    /**
     * Removes built-in tokens form the list of tokens recognized by the parsers.
     * Procedure affects only tokens classified to built-in functions, built-in
     * constants, built-in units, built-in random variables.
     *
     * @param {java.lang.String[]} tokens  List of tokens to remove.
     */
    static removeBuiltinTokens(...tokens: string[]): void;
    /**
     * Un-marks tokens previously marked to be removed.
     * @param {java.lang.String[]} tokens List of tokens to un-mark.
     */
    static unremoveBuiltinTokens(...tokens: string[]): void;
    /**
     * Un-marks all tokens previously marked to be removed.
     */
    static unremoveAllBuiltinTokens(): void;
    /**
     * Returns current list of tokens marked to be removed.
     * @return {java.lang.String[]} Current list of tokens marked to be removed
     */
    static getBuiltinTokensToRemove(): string[];
    static modifyBuiltinToken$java_lang_String$java_lang_String(currentToken: string, newToken: string): void;
    static modifyBuiltinToken$java_lang_String$java_lang_String$java_lang_String(currentToken: string, newToken: string, newTokenDescription: string): void;
    /**
     * Method to change definition of built-in token - more precisely
     * using this method allows to modify token string recognized by the parser
     * (i.e. sin(x) to sinus(x)).
     * Procedure affects only tokens classified to built-in functions, built-in
     * constants, built-in units, built-in random variables.
     * @param {string} currentToken          Current token name
     * @param {string} newToken              New token name
     * @param {string} newTokenDescription   New token description (if null the previous one will be used)
     */
    static modifyBuiltinToken(currentToken?: any, newToken?: any, newTokenDescription?: any): any;
    /**
     * Un-marks tokens previously marked to be modified.
     * @param {java.lang.String[]} currentOrNewTokens   List of tokens to be un-marked (current or modified).
     */
    static unmodifyBuiltinTokens(...currentOrNewTokens: string[]): void;
    /**
     * Un-marks all tokens previously marked to be modified.
     */
    static unmodifyAllBuiltinTokens(): void;
    /**
     * Return details on tokens marked to be modified.
     * @return {java.lang.String[][]} String[i][0] - current token, String[i][1] - new token,
     * String[i][2] - new token description.
     */
    static getBuiltinTokensToModify(): string[][];
    /**
     * Sets mXparser to override built-in tokens
     * by user defined tokens.
     */
    static setToOverrideBuiltinTokens(): void;
    /**
     * Sets mXparser not to override built-in tokens
     * by user defined tokens.
     */
    static setNotToOverrideBuiltinTokens(): void;
    /**
     * Checks whether mXparser is set to override built-in tokens.
     *
     * @return {boolean} True if mXparser is set to override built-in tokens by
     * user defined tokens, otherwise false.
     */
    static checkIfsetToOverrideBuiltinTokens(): boolean;
    /**
     * Sets default mXparser options
     */
    static setDefaultOptions(): void;
    /**
     * Returns token type description.
     *
     * @param {number} tokenTypeId Token type id
     * @return {string} String representing token type description.
     */
    static getTokenTypeDescription(tokenTypeId: number): string;
    static numberToHexString$int(number: number): string;
    /**
     * Converts integer number to hex string (plain text)
     *
     * @param {number} number   Integer number
     * @return         {string} Hex string (i.e. FF23)
     */
    static numberToHexString(number?: any): any;
    static numberToHexString$long(number: number): string;
    static numberToHexString$double(number: number): string;
    /**
     * Converts hex string into ASCII string, where each letter is
     * represented by two hex digits (byte) from the hex string.
     *
     * @param {string} hexString   Hex string (i.e. 48656C6C6F)
     * @return         {string} ASCII string (i.e. '48656C6C6F' = 'Hello')
     */
    static hexString2AsciiString(hexString: string): string;
    static numberToAsciiString$int(number: number): string;
    /**
     * Converts number into ASCII string, where each letter is
     * represented by two hex digits (byte) from the hex representation
     * of the original number
     *
     * @param {number} number   Integer number (i.e. 310939249775 = '48656C6C6F')
     * @return         {string} ASCII string (i.e. '48656C6C6F' = 'Hello')
     */
    static numberToAsciiString(number?: any): any;
    static numberToAsciiString$long(number: number): string;
    static numberToAsciiString$double(number: number): string;
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
    /**
     * Resets console output string, console output
     * string is being built by consolePrintln(), consolePrint().
     *
     * @see mXparser#consolePrint(Object)
     * @see mXparser#consolePrintln(Object)
     * @see mXparser#consolePrintln()
     * @see mXparser#resetConsoleOutput()
     */
    static resetConsoleOutput(): void;
    /**
     * Sets default console prefix.
     */
    static setDefaultConsolePrefix(): void;
    /**
     * Sets default console output string prefix.
     */
    static setDefaultConsoleOutputPrefix(): void;
    /**
     * Sets console prefix.
     *
     * @param {string} consolePrefix String containing console prefix definition.
     */
    static setConsolePrefix(consolePrefix: string): void;
    /**
     * Sets console output string prefix.
     *
     * @param {string} consoleOutputPrefix String containing console output prefix definition.
     */
    static setConsoleOutputPrefix(consoleOutputPrefix: string): void;
    /**
     * Returns console output string, console output string
     * is being built by consolePrintln(), consolePrint().
     *
     * @return {string} Console output string
     *
     * @see mXparser#consolePrint(Object)
     * @see mXparser#consolePrintln(Object)
     * @see mXparser#consolePrintln()
     * @see mXparser#resetConsoleOutput()
     */
    static getConsoleOutput(): string;
    static getHelp$(): string;
    static getHelp$java_lang_String(word: string): string;
    /**
     * General mXparser expression help - in-line key word searching
     * @param   {string} word    Key word to be searched
     * @return  {string} String with all help content
     * lines containing given keyword
     */
    static getHelp(word?: any): any;
    static consolePrintHelp$(): void;
    static consolePrintHelp$java_lang_String(word: string): void;
    /**
     * Prints filtered help content.
     * @param {string} word      Key word.
     */
    static consolePrintHelp(word?: any): any;
    static getKeyWords$(): java.util.List<KeyWord>;
    static getKeyWords$java_lang_String(query: string): java.util.List<KeyWord>;
    /**
     * Returns list of key words known to the parser
     *
     * @param {string} query Give any string to filter list of key words against this string.
     * User more precise syntax: str=tokenString, desc=tokenDescription,
     * syn=TokenSyntax, sin=tokenSince, wid=wordId, tid=wordTypeId
     * to narrow the result.
     *
     * @return      {*} List of keywords known to the parser filter against query string.
     *
     * @see KeyWord
     * @see KeyWord#wordTypeId
     * @see mXparser#getHelp(String)
     */
    static getKeyWords(query?: any): any;
    /**
     * Prints tokens to the console.
     * @param {*} tokens   Tokens list.
     *
     * @see Expression#getCopyOfInitialTokens()
     * @see Token
     */
    static consolePrintTokens(tokens: java.util.List<Token>): void;
    /**
     * Gets license info
     *
     * @return     {string} license info as string
     */
    static getLicense(): string;
    /**
     * Waits given number of milliseconds
     *
     * @param {number} n Number of milliseconds
     */
    static wait(n: number): void;
}
