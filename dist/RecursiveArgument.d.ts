import { Argument } from './Argument';
import { java } from 'j4ts/j4ts';
/**
 * Constructor - creates recursive argument.
 *
 * @param      {string} argumentName                  the argument name
 * @param      {string} recursiveExpressionString     the recursive expression string
 * @param      {Argument} n                             the index argument
 * @param      {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements                      Optional elements list (variadic - comma
 * separated) of types: Argument, Constant, Function
 *
 * @see        PrimitiveElement
 * @see        Argument
 * @class
 * @extends Argument
 */
export declare class RecursiveArgument extends Argument {
    /**
     * Type identifier for recursive arguments.
     */
    static TYPE_ID_RECURSIVE: number;
    static TYPE_DESC_RECURSIVE: string;
    /**
     * Base values
     */
    baseValues: java.util.List<number>;
    /**
     * To avoid never ending loops
     */
    recursiveCounter: number;
    startingIndex: number;
    constructor(argumentName?: any, recursiveExpressionString?: any, n?: any, ...elements: any[]);
    /**
     * Adds base case
     *
     * @param      {number} index               the base case index
     * @param      {number} value               the base case value
     */
    addBaseCase(index: number, value: number): void;
    /**
     * Clears all based cases and stored calculated values
     */
    resetAllCases(): void;
    getArgumentValue$double(index: number): number;
    /**
     * Gets recursive argument value
     *
     * @param      {number} index               the index
     *
     * @return     {number} value as double
     */
    getArgumentValue(index?: any): any;
}
