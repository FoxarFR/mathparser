/**
 * ArgumentConstants provides constant values used in mXparser frameworks. This helps
 * reduce cyclic dependencies in JavaScript code.
 *
 * @author <b>Thilo Schaber</b>
 *
 * @version        1.0.0
 * @class
 */
export declare class ArgumentConstants {
    /**
         * No syntax errors in the dependent argument definition.
         */
    static NO_SYNTAX_ERRORS: boolean;
    static NO_SYNTAX_ERRORS_$LI$(): boolean;
    /**
     * Syntax error in the dependent argument definition.
     */
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN: boolean;
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(): boolean;
    /**
     * Double.NaN as initial value of the argument.
     */
    static ARGUMENT_INITIAL_VALUE: number;
    static ARGUMENT_INITIAL_VALUE_$LI$(): number;
    /**
     * When argument was not not found
     */
    static NOT_FOUND: number;
    static NOT_FOUND_$LI$(): number;
    /**
     * Type indicator for free argument.
     */
    static FREE_ARGUMENT: number;
    /**
     * Type indicator for dependent argument.
     */
    static DEPENDENT_ARGUMENT: number;
    /**
     * Type indicator for recursive argument.
     */
    static RECURSIVE_ARGUMENT: number;
    /**
     * ArgumentConstants type id for the definition of key words
     * known by the parser.
     */
    static TYPE_ID: number;
    static TYPE_DESC: string;
    /**
     * ArgumentConstants with body based on the value or expression string.
     *
     * @see ArgumentConstants#getArgumentBodyType()
     */
    static BODY_RUNTIME: number;
}
