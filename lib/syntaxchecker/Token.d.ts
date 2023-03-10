import { java } from 'j4ts/j4ts';
/**
 * Constructs a new token for the specified Image and Kind.
 * @param {number} kind
 * @param {string} image
 * @class
 */
export declare class Token implements java.io.Serializable {
    /**
     * The version identifier for this Serializable class.
     * Increment only if the <i>serialized</i> form of the
     * class changes.
     */
    static serialVersionUID: number;
    /**
     * An integer that describes the kind of this token.  This numbering
     * system is determined by JavaCCParser, and a table of these numbers is
     * stored in the file ...Constants.java.
     */
    kind: number;
    /**
     * The line number of the first character of this Token.
     */
    beginLine: number;
    /**
     * The column number of the first character of this Token.
     */
    beginColumn: number;
    /**
     * The line number of the last character of this Token.
     */
    endLine: number;
    /**
     * The column number of the last character of this Token.
     */
    endColumn: number;
    /**
     * The string image of the token.
     */
    image: string;
    /**
     * A reference to the next regular (non-special) token from the input
     * stream.  If this is the last token from the input stream, or if the
     * token manager has not read tokens beyond this one, this field is
     * set to null.  This is true only if this token is also a regular
     * token.  Otherwise, see below for a description of the contents of
     * this field.
     */
    next: Token;
    /**
     * This field is used to access special tokens that occur prior to this
     * token, but after the immediately preceding regular (non-special) token.
     * If there are no such special tokens, this field is set to null.
     * When there are more than one such special token, this field refers
     * to the last of these special tokens, which in turn refers to the next
     * previous special token through its specialToken field, and so on
     * until the first special token (whose specialToken field is null).
     * The next fields of special tokens refer to other special tokens that
     * immediately follow it (without an intervening regular token).  If there
     * is no such token, this field is null.
     */
    specialToken: Token;
    /**
     * An optional attribute value of the Token.
     * Tokens which are not used as syntactic sugar will often contain
     * meaningful values that will be used later on by the compiler or
     * interpreter. This attribute value is often different from the image.
     * Any subclass of Token that actually wants to return a non-null value can
     * override this method as appropriate.
     * @return {*}
     */
    getValue(): any;
    constructor(kind?: any, image?: any);
    /**
     * Returns the image.
     * @return {string}
     */
    toString(): string;
    static newToken(ofKind: number, image?: string): Token;
}
