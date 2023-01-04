/**
 * Full Constructor.
 * @param {boolean} EOFSeen
 * @param {number} lexState
 * @param {number} errorLine
 * @param {number} errorColumn
 * @param {string} errorAfter
 * @param {string} curChar
 * @param {number} reason
 * @class
 * @extends Error
 */
export declare class TokenMgrError extends Error {
    /**
     * The version identifier for this Serializable class.
     * Increment only if the <i>serialized</i> form of the
     * class changes.
     */
    static serialVersionUID: number;
    /**
     * Lexical error occurred.
     */
    static LEXICAL_ERROR: number;
    /**
     * An attempt was made to create a second instance of a static token manager.
     */
    static STATIC_LEXER_ERROR: number;
    /**
     * Tried to change to an invalid lexical state.
     */
    static INVALID_LEXICAL_STATE: number;
    /**
     * Detected (and bailed out of) an infinite loop in the token manager.
     */
    static LOOP_DETECTED: number;
    /**
     * Indicates the reason why the exception is thrown. It will have
     * one of the above 4 values.
     */
    errorCode: number;
    /**
     * Replaces unprintable characters by their escaped (or unicode escaped)
     * equivalents in the given string
     * @param {string} str
     * @return {string}
     */
    static addEscapes(str: string): string;
    /**
     * Returns a detailed message for the Error when it is thrown by the
     * token manager to indicate a lexical error.
     * Parameters :
     * EOFSeen     : indicates if EOF caused the lexical error
     * curLexState : lexical state in which this error occurred
     * errorLine   : line number when the error occurred
     * errorColumn : column number when the error occurred
     * errorAfter  : prefix that was seen before this error occurred
     * curchar     : the offending character
     * Note: You can customize the lexical error message by modifying this method.
     * @param {boolean} EOFSeen
     * @param {number} lexState
     * @param {number} errorLine
     * @param {number} errorColumn
     * @param {string} errorAfter
     * @param {string} curChar
     * @return {string}
     */
    static LexicalError(EOFSeen: boolean, lexState: number, errorLine: number, errorColumn: number, errorAfter: string, curChar: string): string;
    /**
     * You can also modify the body of this method to customize your error messages.
     * For example, cases like LOOP_DETECTED and INVALID_LEXICAL_STATE are not
     * of end-users concern, so you can return something like :
     *
     * "Internal Error : Please file a bug report .... "
     *
     * from this method for such cases in the release version of your parser.
     * @return {string}
     */
    getMessage(): string;
    constructor(EOFSeen?: any, lexState?: any, errorLine?: any, errorColumn?: any, errorAfter?: any, curChar?: any, reason?: any);
}
