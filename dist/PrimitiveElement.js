"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveElement = void 0;
/**
 * Default constructor setting element type id
 *
 * @param {number} typeId     Element type id
 *
 * @see     Argument#TYPE_ID
 * @see     Constant#TYPE_ID
 * @see     Function#TYPE_ID
 * @class
 */
class PrimitiveElement {
    constructor(typeId) {
        if (this.myTypeId === undefined) {
            this.myTypeId = 0;
        }
        this.myTypeId = typeId;
    }
    /**
     * Returns element type id
     *
     * @return  {number} Element type id as int Function.TYPE_ID, Argument.TYPE_ID, Function.TYPE_ID
     *
     * @see     Argument#TYPE_ID
     * @see     Constant#TYPE_ID
     * @see     Function#TYPE_ID
     */
    getMyTypeId() {
        return this.myTypeId;
    }
}
exports.PrimitiveElement = PrimitiveElement;
PrimitiveElement["__class"] = "org.mariuszgromada.math.mxparser.PrimitiveElement";
//# sourceMappingURL=PrimitiveElement.js.map