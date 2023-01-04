"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyWord = void 0;
const ConstantValue_1 = require("./ConstantValue");
/**
 * Constructor - creates key words form wordString wordId
 * wordTypId syntax since
 *
 * @param {string} wordString   the word string (refers to below interfaces)
 * @param {number} wordId       the word identifier (refers to below interfaces)
 * @param {number} wordTypeId   the word type (refers to below interfaces)
 * @param {string} description  the word description
 * @param {string} syntax       the word syntax
 * @param {string} since        the word version since
 * @class
 */
class KeyWord {
    static NO_DEFINITION_$LI$() { if (KeyWord.NO_DEFINITION == null) {
        KeyWord.NO_DEFINITION = ConstantValue_1.ConstantValue.NaN;
    } return KeyWord.NO_DEFINITION; }
    constructor(wordString, description, wordId, syntax, since, wordTypeId) {
        if (((typeof wordString === 'string') || wordString === null) && ((typeof description === 'string') || description === null) && ((typeof wordId === 'number') || wordId === null) && ((typeof syntax === 'string') || syntax === null) && ((typeof since === 'string') || since === null) && ((typeof wordTypeId === 'number') || wordTypeId === null)) {
            let __args = arguments;
            if (this.wordString === undefined) {
                this.wordString = null;
            }
            if (this.wordId === undefined) {
                this.wordId = 0;
            }
            if (this.wordTypeId === undefined) {
                this.wordTypeId = 0;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.syntax === undefined) {
                this.syntax = null;
            }
            if (this.since === undefined) {
                this.since = null;
            }
            this.wordString = wordString;
            this.wordId = wordId;
            this.wordTypeId = wordTypeId;
            this.description = description;
            this.syntax = syntax;
            this.since = since;
        }
        else if (wordString === undefined && description === undefined && wordId === undefined && syntax === undefined && since === undefined && wordTypeId === undefined) {
            let __args = arguments;
            if (this.wordString === undefined) {
                this.wordString = null;
            }
            if (this.wordId === undefined) {
                this.wordId = 0;
            }
            if (this.wordTypeId === undefined) {
                this.wordTypeId = 0;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.syntax === undefined) {
                this.syntax = null;
            }
            if (this.since === undefined) {
                this.since = null;
            }
            this.wordString = "";
            this.wordId = KeyWord.NO_DEFINITION_$LI$();
            this.wordTypeId = KeyWord.NO_DEFINITION_$LI$();
            this.description = "";
            this.syntax = "";
            this.since = "";
        }
        else
            throw new Error('invalid overload');
    }
}
exports.KeyWord = KeyWord;
KeyWord["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.KeyWord";
//# sourceMappingURL=KeyWord.js.map