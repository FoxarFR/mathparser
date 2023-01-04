"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
/**
 * Constructs a new token for the specified Image and Kind.
 * @param {number} kind
 * @param {string} image
 * @class
 */
class Token {
    /**
     * An optional attribute value of the Token.
     * Tokens which are not used as syntactic sugar will often contain
     * meaningful values that will be used later on by the compiler or
     * interpreter. This attribute value is often different from the image.
     * Any subclass of Token that actually wants to return a non-null value can
     * override this method as appropriate.
     * @return {*}
     */
    getValue() {
        return null;
    }
    constructor(kind, image) {
        if (((typeof kind === 'number') || kind === null) && ((typeof image === 'string') || image === null)) {
            let __args = arguments;
            if (this.kind === undefined) {
                this.kind = 0;
            }
            if (this.beginLine === undefined) {
                this.beginLine = 0;
            }
            if (this.beginColumn === undefined) {
                this.beginColumn = 0;
            }
            if (this.endLine === undefined) {
                this.endLine = 0;
            }
            if (this.endColumn === undefined) {
                this.endColumn = 0;
            }
            if (this.image === undefined) {
                this.image = null;
            }
            if (this.next === undefined) {
                this.next = null;
            }
            if (this.specialToken === undefined) {
                this.specialToken = null;
            }
            this.kind = kind;
            this.image = image;
        }
        else if (((typeof kind === 'number') || kind === null) && image === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let image = null;
                if (this.kind === undefined) {
                    this.kind = 0;
                }
                if (this.beginLine === undefined) {
                    this.beginLine = 0;
                }
                if (this.beginColumn === undefined) {
                    this.beginColumn = 0;
                }
                if (this.endLine === undefined) {
                    this.endLine = 0;
                }
                if (this.endColumn === undefined) {
                    this.endColumn = 0;
                }
                if (this.image === undefined) {
                    this.image = null;
                }
                if (this.next === undefined) {
                    this.next = null;
                }
                if (this.specialToken === undefined) {
                    this.specialToken = null;
                }
                this.kind = kind;
                this.image = image;
            }
            if (this.kind === undefined) {
                this.kind = 0;
            }
            if (this.beginLine === undefined) {
                this.beginLine = 0;
            }
            if (this.beginColumn === undefined) {
                this.beginColumn = 0;
            }
            if (this.endLine === undefined) {
                this.endLine = 0;
            }
            if (this.endColumn === undefined) {
                this.endColumn = 0;
            }
            if (this.image === undefined) {
                this.image = null;
            }
            if (this.next === undefined) {
                this.next = null;
            }
            if (this.specialToken === undefined) {
                this.specialToken = null;
            }
        }
        else if (kind === undefined && image === undefined) {
            let __args = arguments;
            if (this.kind === undefined) {
                this.kind = 0;
            }
            if (this.beginLine === undefined) {
                this.beginLine = 0;
            }
            if (this.beginColumn === undefined) {
                this.beginColumn = 0;
            }
            if (this.endLine === undefined) {
                this.endLine = 0;
            }
            if (this.endColumn === undefined) {
                this.endColumn = 0;
            }
            if (this.image === undefined) {
                this.image = null;
            }
            if (this.next === undefined) {
                this.next = null;
            }
            if (this.specialToken === undefined) {
                this.specialToken = null;
            }
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Returns the image.
     * @return {string}
     */
    toString() {
        return this.image;
    }
    static newToken(ofKind, image = null) {
        switch ((ofKind)) {
            default:
                return new Token(ofKind, image);
        }
    }
}
exports.Token = Token;
/**
 * The version identifier for this Serializable class.
 * Increment only if the <i>serialized</i> form of the
 * class changes.
 */
Token.serialVersionUID = 1;
Token["__class"] = "org.mariuszgromada.math.mxparser.syntaxchecker.Token";
Token["__interfaces"] = ["java.io.Serializable"];
//# sourceMappingURL=Token.js.map