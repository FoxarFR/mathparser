import { java } from 'j4ts/j4ts';
import { TokenModification } from './Miscellaneous';
/**
 * mXparserConstants provides constant values used in mXparser frameworks. This helps
 * reduce cyclic dependencies in JavaScript code.
 *
 * @author <b>Thilo Schaber</b>
 *
 * @version        1.0.0
 * @class
 */
export declare class mXparserConstants {
    /**
     * List of built-in tokens to modify
     */
    static tokensToModify: java.util.List<TokenModification>;
    static tokensToModify_$LI$(): java.util.List<TokenModification>;
    /**
    * mXparser version
    */
    static VERSION: string;
    static VERSION_CODE_NAME: string;
    static VERSION_NAME: string;
    static VERSION_NAME_$LI$(): string;
    static NAMEv10: string;
    static NAMEv20: string;
    static NAMEv23: string;
    static NAMEv24: string;
    static NAMEv30: string;
    static NAMEv40: string;
    static NAMEv41: string;
    static NAMEv42: string;
    static NAMEv43: string;
    static NAMEv44: string;
    /**
     * License info.
     */
    static LICENSE: string;
    static LICENSE_$LI$(): string;
    /**
     * Framework used to compile mXparser
     */
    static BUIT_FOR: string;
    /**
     * FOUND / NOT_FOUND
     * used for matching purposes
     */
    static NOT_FOUND: number;
    static FOUND: number;
    /**
     * Console output string  for below methods
     *
     * @see mXparser.#consolePrintln(Object)
     * @see mXparser.#consolePrint(Object)
     */
    static CONSOLE_OUTPUT: string;
    static CONSOLE_PREFIX: string;
    static CONSOLE_PREFIX_$LI$(): string;
    static CONSOLE_OUTPUT_PREFIX: string;
    static CONSOLE_OUTPUT_PREFIX_$LI$(): string;
    static CONSOLE_ROW_NUMBER: number;
    static PRIMES_CACHE_NOT_INITIALIZED: number;
    /**
     * Threads number settings
     */
    static THREADS_NUMBER: number;
    static THREADS_NUMBER_$LI$(): number;
    /**
     * Double floating-point precision arithmetic causes
     *
     * mXparser provides intelligent ULP rounding to avoid some
     * type of this errors.
     */
    static ulpRounding: boolean;
    /**
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is different than 0.3
     *
     * mXparser provides intelligent canonical rounding to avoid majority
     * of this errors.
     */
    static canonicalRounding: boolean;
    /**
     * Indicator marking whether to round final result
     * to precise integer when result is very close
     * to integer, solves problems like
     * sin(pi) = 0
     */
    static almostIntRounding: boolean;
    static DEFAULT_MAX_RECURSION_CALLS: number;
    /**
     * Internal limit for counter to avoid infinite loops while calculating
     * expression defined in the way shown by below examples
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
     */
    static MAX_RECURSION_CALLS: number;
    static MAX_RECURSION_CALLS_$LI$(): number;
    /**
     * List of built-in tokens to remove.
     */
    static tokensToRemove: java.util.List<string>;
    static tokensToRemove_$LI$(): java.util.List<string>;
    /**
     * Indicator whether mXparser operates in radians / degrees mode
     * true - degrees mode
     * false - radians mode
     *
     * Default false (radians mode)
     */
    static degreesMode: boolean;
    /**
     * Indicator whether user defined tokens should override
     * built-in tokens.
     */
    static overrideBuiltinTokens: boolean;
    /**
     * Options changeset
     */
    static optionsChangesetNumber: number;
    /**
     * Indicator whether to call cancel current calculation
     */
    static cancelCurrentCalculationFlag: boolean;
    /**
     * Converts List of double to double[]
     *
     * @param      {*} numbers             the numbers list
     *
     * @return     {double[]} numbers array
     */
    static arrayList2double(numbers: java.util.List<number>): number[];
    /**
     * Check whether a flag to cancel current calculation process is set.
     *
     * {@link #cancelCurrentCalculation()}
     * {@link #resetCancelCurrentCalculationFlag()}
     *
     * @return {boolean} true in case cancel calculation flag is active,
     * otherwise false
     */
    static isCurrentCalculationCancelled(): boolean;
    /**
     * Function used to introduce some compatibility
     * between JAVA and C# while regexp matching.
     *
     * @param {string} str         String
     * @param {string} pattern     Pattern (regexp)
     *
     * @return            {boolean} True if pattern matches entirely, False otherwise
     */
    static regexMatch(str: string, pattern: string): boolean;
    /**
     * Prints object.toString to the Console
     *
     * @param {*} o    Object to print
     */
    static consolePrint(o: any): void;
    /**
     * Prints array of strings
     *
     * @param {java.lang.String[]} stringArray  array of strinfs
     */
    static consolePrintln(stringArray?: any): any;
    static consolePrintln$(): void;
    static consolePrintln$java_lang_Object(o: any): void;
    static consolePrintln$java_lang_String_A(stringArray: string[]): void;
    /**
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent canonical rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 2.5 - 2.2 = 0.3
     *
     * @return {boolean} True if Canonical rounding is enabled, otherwise false.
     */
    static checkIfCanonicalRounding(): boolean;
    /**
     * Checks whether mXparser operates in radians mode for
     * trigonometric functions.
     *
     * @return {boolean} true - if radians mode, false - otherwise
     */
    static checkIfRadiansMode(): boolean;
    /**
     * Checks whether mXparser operates in degrees mode for
     * trigonometric functions.
     *
     * @return {boolean} true - if degrees mode, false - otherwise
     */
    static checkIfDegreesMode(): boolean;
    /**
     * Method give a signal to other methods to cancel current calculation. This is a flag,
     * remember to reset this flag after process is cancelled and you are going to start
     * new calculation process.
     */
    static cancelCurrentCalculation(): void;
    /**
     * Resets a flag giving signal to the engine to cancel current calculation.
     *
     * {@link #cancelCurrentCalculation()}
     */
    static resetCancelCurrentCalculationFlag(): void;
}
