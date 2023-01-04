"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMgrError = void 0;
const j4ts_1 = require("j4ts/j4ts");
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
class TokenMgrError extends Error {
    /**
     * Replaces unprintable characters by their escaped (or unicode escaped)
     * equivalents in the given string
     * @param {string} str
     * @return {string}
     */
    static addEscapes(str) {
        const retval = new j4ts_1.java.lang.StringBuffer();
        let ch;
        for (let i = 0; i < str.length; i++) {
            {
                switch ((str.charAt(i)).charCodeAt(0)) {
                    case 0:
                        continue;
                    case 8 /* '\b' */:
                        retval.append("\\b");
                        continue;
                    case 9 /* '\t' */:
                        retval.append("\\t");
                        continue;
                    case 10 /* '\n' */:
                        retval.append("\\n");
                        continue;
                    case 12 /* '\f' */:
                        retval.append("\\f");
                        continue;
                    case 13 /* '\r' */:
                        retval.append("\\r");
                        continue;
                    case 34 /* '\"' */:
                        retval.append("\\\"");
                        continue;
                    case 39 /* '\'' */:
                        retval.append("\\\'");
                        continue;
                    case 92 /* '\\' */:
                        retval.append("\\\\");
                        continue;
                    default:
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))((ch = str.charAt(i))) < 32 || (c => c.charCodeAt == null ? c : c.charCodeAt(0))(ch) > 126) {
                            const s = "0000" + /* toString */ ('' + (ch));
                            retval.append("\\u" + s.substring(s.length - 4, s.length));
                        }
                        else {
                            retval.append(ch);
                        }
                        continue;
                }
            }
            ;
        }
        return retval.toString();
    }
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
    static LexicalError(EOFSeen, lexState, errorLine, errorColumn, errorAfter, curChar) {
        return ("Lexical error at line " + errorLine + ", column " + errorColumn + ".  Encountered: " + (EOFSeen ? "<EOF> " : ("\"" + TokenMgrError.addEscapes(/* valueOf */ String(curChar).toString()) + "\"") + " (" + (curChar).charCodeAt(0) + "), ") + "after : \"" + TokenMgrError.addEscapes(errorAfter) + "\"");
    }
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
    getMessage() {
        return this.message;
    }
    constructor(EOFSeen, lexState, errorLine, errorColumn, errorAfter, curChar, reason) {
        if (((typeof EOFSeen === 'boolean') || EOFSeen === null) && ((typeof lexState === 'number') || lexState === null) && ((typeof errorLine === 'number') || errorLine === null) && ((typeof errorColumn === 'number') || errorColumn === null) && ((typeof errorAfter === 'string') || errorAfter === null) && ((typeof curChar === 'string') || curChar === null) && ((typeof reason === 'number') || reason === null)) {
            let __args = arguments;
            {
                let __args = arguments;
                let message = TokenMgrError.LexicalError(EOFSeen, lexState, errorLine, errorColumn, errorAfter, curChar);
                super(message);
                this.message = message;
                if (this.errorCode === undefined) {
                    this.errorCode = 0;
                }
                this.errorCode = reason;
            }
            if (this.errorCode === undefined) {
                this.errorCode = 0;
            }
        }
        else if (((typeof EOFSeen === 'string') || EOFSeen === null) && ((typeof lexState === 'number') || lexState === null) && errorLine === undefined && errorColumn === undefined && errorAfter === undefined && curChar === undefined && reason === undefined) {
            let __args = arguments;
            let message = __args[0];
            let reason = __args[1];
            super(message);
            this.message = message;
            if (this.errorCode === undefined) {
                this.errorCode = 0;
            }
            this.errorCode = reason;
        }
        else if (EOFSeen === undefined && lexState === undefined && errorLine === undefined && errorColumn === undefined && errorAfter === undefined && curChar === undefined && reason === undefined) {
            let __args = arguments;
            super();
            if (this.errorCode === undefined) {
                this.errorCode = 0;
            }
        }
        else
            throw new Error('invalid overload');
    }
}
exports.TokenMgrError = TokenMgrError;
/**
 * The version identifier for this Serializable class.
 * Increment only if the <i>serialized</i> form of the
 * class changes.
 */
TokenMgrError.serialVersionUID = 1;
/**
 * Lexical error occurred.
 */
TokenMgrError.LEXICAL_ERROR = 0;
/**
 * An attempt was made to create a second instance of a static token manager.
 */
TokenMgrError.STATIC_LEXER_ERROR = 1;
/**
 * Tried to change to an invalid lexical state.
 */
TokenMgrError.INVALID_LEXICAL_STATE = 2;
/**
 * Detected (and bailed out of) an infinite loop in the token manager.
 */
TokenMgrError.LOOP_DETECTED = 3;
TokenMgrError["__class"] = "org.mariuszgromada.math.mxparser.syntaxchecker.TokenMgrError";
TokenMgrError["__interfaces"] = ["java.io.Serializable"];
//# sourceMappingURL=TokenMgrError.js.map