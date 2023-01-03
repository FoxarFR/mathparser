"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const KeyWord_1 = require("./KeyWord");
const j4ts_1 = require("j4ts/j4ts");
/**
 * Default constructor
 * @class
 */
class Token {
    static NOT_MATCHED_$LI$() { if (Token.NOT_MATCHED == null) {
        Token.NOT_MATCHED = KeyWord_1.KeyWord.NO_DEFINITION_$LI$();
    } return Token.NOT_MATCHED; }
    constructor() {
        if (this.tokenStr === undefined) {
            this.tokenStr = null;
        }
        if (this.keyWord === undefined) {
            this.keyWord = null;
        }
        if (this.tokenId === undefined) {
            this.tokenId = 0;
        }
        if (this.tokenTypeId === undefined) {
            this.tokenTypeId = 0;
        }
        if (this.tokenLevel === undefined) {
            this.tokenLevel = 0;
        }
        if (this.tokenValue === undefined) {
            this.tokenValue = 0;
        }
        if (this.looksLike === undefined) {
            this.looksLike = null;
        }
        this.tokenStr = "";
        this.keyWord = "";
        this.tokenId = Token.NOT_MATCHED_$LI$();
        this.tokenTypeId = Token.NOT_MATCHED_$LI$();
        this.tokenLevel = -1;
        this.tokenValue = j4ts_1.javaemul.internal.DoubleHelper.NaN;
        this.looksLike = "";
    }
    /**
     * Token cloning.
     * @return {Token}
     */
    clone() {
        const token = new Token();
        token.keyWord = this.keyWord;
        token.tokenStr = this.tokenStr;
        token.tokenId = this.tokenId;
        token.tokenLevel = this.tokenLevel;
        token.tokenTypeId = this.tokenTypeId;
        token.tokenValue = this.tokenValue;
        token.looksLike = this.looksLike;
        return token;
    }
}
exports.Token = Token;
Token["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.Token";
//# sourceMappingURL=Token.js.map