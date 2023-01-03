/**
 * Default constructor
 * @class
 */
export declare class Token {
    /**
     * Indicator that token was not matched
     */
    static NOT_MATCHED: number;
    static NOT_MATCHED_$LI$(): number;
    /**
     * String token
     */
    tokenStr: string;
    /**
     * Key word string (if matched)
     */
    keyWord: string;
    /**
     * Token identifier
     */
    tokenId: number;
    /**
     * Token type
     */
    tokenTypeId: number;
    /**
     * Token level
     */
    tokenLevel: number;
    /**
     * Token value if number
     */
    tokenValue: number;
    /**
     * If token was not matched then
     * looksLike functionality is trying asses
     * the kind of token
     */
    looksLike: string;
    constructor();
    /**
     * Token cloning.
     * @return {Token}
     */
    clone(): Token;
}
