"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionConstants = void 0;
const ExpressionConstants_1 = require("./ExpressionConstants");
/**
 * FunctionConstants provides constant values used in mXparser frameworks. This helps
 * reduce cyclic dependencies in JavaScript code.
 *
 * @author <b>Thilo Schaber</b>
 *
 * @version        1.0.0
 * @class
 */
class FunctionConstants {
    static NO_SYNTAX_ERRORS_$LI$() { if (FunctionConstants.NO_SYNTAX_ERRORS == null) {
        FunctionConstants.NO_SYNTAX_ERRORS = ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
    } return FunctionConstants.NO_SYNTAX_ERRORS; }
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$() { if (FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN == null) {
        FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
    } return FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN; }
    static NOT_FOUND_$LI$() { if (FunctionConstants.NOT_FOUND == null) {
        FunctionConstants.NOT_FOUND = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
    } return FunctionConstants.NOT_FOUND; }
}
exports.FunctionConstants = FunctionConstants;
/**
 * Function type id identifier
 */
FunctionConstants.TYPE_ID = 103;
FunctionConstants.TYPE_DESC = "User defined function";
/**
 * Function with body based on the expression string.
 *
 * @see Function#getFunctionBodyType()
 */
FunctionConstants.BODY_RUNTIME = 1;
/**
 * Function with body based on the extended code.
 *
 * @see FunctionExtension
 * @see Function#getFunctionBodyType()
 */
FunctionConstants.BODY_EXTENDED = 2;
//# sourceMappingURL=FunctionConstants.js.map