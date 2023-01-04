"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionConstants = void 0;
const mXparserConstants_1 = require("./mXparserConstants");
/**
 * ExpressionConstants provides constant values used in mXparser frameworks. This helps
 * reduce cyclic dependencies in JavaScript code.
 *
 * @author <b>Thilo Schaber</b>
 *
 * @version        1.0.0
 * @class
 */
class ExpressionConstants {
    static NOT_FOUND_$LI$() { if (ExpressionConstants.NOT_FOUND == null) {
        ExpressionConstants.NOT_FOUND = mXparserConstants_1.mXparserConstants.NOT_FOUND;
    } return ExpressionConstants.NOT_FOUND; }
    static FOUND_$LI$() { if (ExpressionConstants.FOUND == null) {
        ExpressionConstants.FOUND = mXparserConstants_1.mXparserConstants.FOUND;
    } return ExpressionConstants.FOUND; }
}
exports.ExpressionConstants = ExpressionConstants;
/**
 * Expression type id
 */
ExpressionConstants.TYPE_ID = 100;
ExpressionConstants.TYPE_DESC = "User defined expression";
/**
 * Marker for internal processing
 */
ExpressionConstants.INTERNAL = true;
/**
 * For verbose mode purposes
 */
ExpressionConstants.WITH_EXP_STR = true;
ExpressionConstants.NO_EXP_STR = false;
/**
 * Status of the Expression syntax
 */
ExpressionConstants.NO_SYNTAX_ERRORS = true;
ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN = false;
//# sourceMappingURL=ExpressionConstants.js.map