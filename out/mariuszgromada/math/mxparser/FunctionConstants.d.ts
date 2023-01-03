/**
 * FunctionConstants provides constant values used in mXparser frameworks. This helps
 * reduce cyclic dependencies in JavaScript code.
 *
 * @author <b>Thilo Schaber</b>
 *
 * @version        1.0.0
 * @class
 */
export declare class FunctionConstants {
    /**
     * No syntax errors in the function.
    */
    static NO_SYNTAX_ERRORS: boolean;
    static NO_SYNTAX_ERRORS_$LI$(): boolean;
    /**
     * Syntax error in the function or syntax status unknown.
     */
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN: boolean;
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(): boolean;
    /**
     * When function was not found
     */
    static NOT_FOUND: number;
    static NOT_FOUND_$LI$(): number;
    /**
     * Function type id identifier
     */
    static TYPE_ID: number;
    static TYPE_DESC: string;
    /**
     * Function with body based on the expression string.
     *
     * @see Function#getFunctionBodyType()
     */
    static BODY_RUNTIME: number;
    /**
     * Function with body based on the extended code.
     *
     * @see FunctionExtension
     * @see Function#getFunctionBodyType()
     */
    static BODY_EXTENDED: number;
}
