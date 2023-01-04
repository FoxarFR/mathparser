"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentConstants = void 0;
const j4ts_1 = require("j4ts/j4ts");
const ExpressionConstants_1 = require("./ExpressionConstants");
/**
 * ArgumentConstants provides constant values used in mXparser frameworks. This helps
 * reduce cyclic dependencies in JavaScript code.
 *
 * @author <b>Thilo Schaber</b>
 *
 * @version        1.0.0
 * @class
 */
class ArgumentConstants {
    static NO_SYNTAX_ERRORS_$LI$() { if (ArgumentConstants.NO_SYNTAX_ERRORS == null) {
        ArgumentConstants.NO_SYNTAX_ERRORS = ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
    } return ArgumentConstants.NO_SYNTAX_ERRORS; }
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$() { if (ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN == null) {
        ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
    } return ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN; }
    static ARGUMENT_INITIAL_VALUE_$LI$() { if (ArgumentConstants.ARGUMENT_INITIAL_VALUE == null) {
        ArgumentConstants.ARGUMENT_INITIAL_VALUE = j4ts_1.javaemul.internal.DoubleHelper.NaN;
    } return ArgumentConstants.ARGUMENT_INITIAL_VALUE; }
    static NOT_FOUND_$LI$() { if (ArgumentConstants.NOT_FOUND == null) {
        ArgumentConstants.NOT_FOUND = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
    } return ArgumentConstants.NOT_FOUND; }
}
exports.ArgumentConstants = ArgumentConstants;
/**
 * Type indicator for free argument.
 */
ArgumentConstants.FREE_ARGUMENT = 1;
/**
 * Type indicator for dependent argument.
 */
ArgumentConstants.DEPENDENT_ARGUMENT = 2;
/**
 * Type indicator for recursive argument.
 */
ArgumentConstants.RECURSIVE_ARGUMENT = 3;
/**
 * ArgumentConstants type id for the definition of key words
 * known by the parser.
 */
ArgumentConstants.TYPE_ID = 101;
ArgumentConstants.TYPE_DESC = "User defined argument";
/**
 * ArgumentConstants with body based on the value or expression string.
 *
 * @see ArgumentConstants#getArgumentBodyType()
 */
ArgumentConstants.BODY_RUNTIME = 1;
//# sourceMappingURL=ArgumentConstants.js.map