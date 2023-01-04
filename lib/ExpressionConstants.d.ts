/**
 * ExpressionConstants provides constant values used in mXparser frameworks. This helps
 * reduce cyclic dependencies in JavaScript code.
 *
 * @author <b>Thilo Schaber</b>
 *
 * @version        1.0.0
 * @class
 */
export declare class ExpressionConstants {
    /**
     * Expression type id
     */
    static TYPE_ID: number;
    static TYPE_DESC: string;
    /**
     * FOUND / NOT_FOUND
     * used for matching purposes
     */
    static NOT_FOUND: number;
    static NOT_FOUND_$LI$(): number;
    static FOUND: number;
    static FOUND_$LI$(): number;
    /**
     * Marker for internal processing
     */
    static INTERNAL: boolean;
    /**
     * For verbose mode purposes
     */
    static WITH_EXP_STR: boolean;
    static NO_EXP_STR: boolean;
    /**
     * Status of the Expression syntax
     */
    static NO_SYNTAX_ERRORS: boolean;
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN: boolean;
}
