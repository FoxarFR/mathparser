"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialValue = void 0;
const BinaryRelations_1 = require("./BinaryRelations");
/**
 * Constructor - functions only with values in radians and degrees
 * @param {number} x       The value of x from f(x)
 * @param {number} fv      The value of f(x) in radians for a given x
 * @param {number} fvdeg   The value of f(x) in degrees for a given x
 * @class
 */
class SpecialValue {
    static EPSILON_$LI$() { if (SpecialValue.EPSILON == null) {
        SpecialValue.EPSILON = 10 * BinaryRelations_1.BinaryRelations.DEFAULT_COMPARISON_EPSILON;
    } return SpecialValue.EPSILON; }
    constructor(x, fv, fvdeg) {
        if (((typeof x === 'number') || x === null) && ((typeof fv === 'number') || fv === null) && ((typeof fvdeg === 'number') || fvdeg === null)) {
            let __args = arguments;
            if (this.x === undefined) {
                this.x = 0;
            }
            if (this.xFrom === undefined) {
                this.xFrom = 0;
            }
            if (this.xTo === undefined) {
                this.xTo = 0;
            }
            if (this.fv === undefined) {
                this.fv = 0;
            }
            if (this.fvdeg === undefined) {
                this.fvdeg = 0;
            }
            this.x = x;
            this.fv = fv;
            this.fvdeg = fvdeg;
            this.xFrom = x - SpecialValue.EPSILON_$LI$();
            this.xTo = x + SpecialValue.EPSILON_$LI$();
        }
        else if (((typeof x === 'number') || x === null) && ((typeof fv === 'number') || fv === null) && fvdeg === undefined) {
            let __args = arguments;
            if (this.x === undefined) {
                this.x = 0;
            }
            if (this.xFrom === undefined) {
                this.xFrom = 0;
            }
            if (this.xTo === undefined) {
                this.xTo = 0;
            }
            if (this.fv === undefined) {
                this.fv = 0;
            }
            if (this.fvdeg === undefined) {
                this.fvdeg = 0;
            }
            this.x = x;
            this.fv = fv;
            this.xFrom = x - SpecialValue.EPSILON_$LI$();
            this.xTo = x + SpecialValue.EPSILON_$LI$();
        }
        else
            throw new Error('invalid overload');
    }
}
exports.SpecialValue = SpecialValue;
SpecialValue["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.SpecialValue";
//# sourceMappingURL=SpecialValue.js.map