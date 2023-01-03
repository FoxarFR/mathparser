import { Token } from './Token';
/**
 * This constructor is used by the method "generateParseException"
 * in the generated parser.  Calling this constructor generates
 * a new object of this type with the fields "currentToken",
 * "expectedTokenSequences", and "tokenImage" set.
 * @param {Token} currentTokenVal
 * @param {int[][]} expectedTokenSequencesVal
 * @param {java.lang.String[]} tokenImageVal
 * @class
 * @extends Exception
 */
export declare class ParseException extends Error {
    /**
     * The version identifier for this Serializable class.
     * Increment only if the <i>serialized</i> form of the
     * class changes.
     */
    static serialVersionUID: number;
    constructor(currentTokenVal?: any, expectedTokenSequencesVal?: any, tokenImageVal?: any);
    /**
     * This is the last token that has been consumed successfully.  If
     * this object has been created due to a parse error, the token
     * followng this token will (therefore) be the first error token.
     */
    currentToken: Token;
    /**
     * Each entry in this array is an array of integers.  Each array
     * of integers represents a sequence of tokens (by their ordinal
     * values) that is expected at this point of the parse.
     */
    expectedTokenSequences: number[][];
    /**
     * This is a reference to the "tokenImage" array of the generated
     * parser within which the parse error occurred.  This array is
     * defined in the generated ...Constants interface.
     */
    tokenImage: string[];
    /**
     * It uses "currentToken" and "expectedTokenSequences" to generate a parse
     * error message and returns it.  If this object has been created
     * due to a parse error, and you do not catch it (it gets thrown
     * from the parser) the correct error message
     * gets displayed.
     * @param {Token} currentToken
     * @param {int[][]} expectedTokenSequences
     * @param {java.lang.String[]} tokenImage
     * @return {string}
     * @private
     */
    static initialise(currentToken: Token, expectedTokenSequences: number[][], tokenImage: string[]): string;
    /**
     * The end of line string for this machine.
     */
    eol: string;
    /**
     * Used to convert raw characters to their escaped version
     * when these raw version cannot be used as part of an ASCII
     * string literal.
     * @param {string} str
     * @return {string}
     */
    static add_escapes(str: string): string;
}
