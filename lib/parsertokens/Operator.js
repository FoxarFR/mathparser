"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operator = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Operators - mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class Operator {
    static PLUS_SINCE_$LI$() { if (Operator.PLUS_SINCE == null) {
        Operator.PLUS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Operator.PLUS_SINCE; }
    static MINUS_SINCE_$LI$() { if (Operator.MINUS_SINCE == null) {
        Operator.MINUS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Operator.MINUS_SINCE; }
    static MULTIPLY_SINCE_$LI$() { if (Operator.MULTIPLY_SINCE == null) {
        Operator.MULTIPLY_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Operator.MULTIPLY_SINCE; }
    static DIVIDE_SINCE_$LI$() { if (Operator.DIVIDE_SINCE == null) {
        Operator.DIVIDE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Operator.DIVIDE_SINCE; }
    static POWER_SINCE_$LI$() { if (Operator.POWER_SINCE == null) {
        Operator.POWER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Operator.POWER_SINCE; }
    static FACT_SINCE_$LI$() { if (Operator.FACT_SINCE == null) {
        Operator.FACT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Operator.FACT_SINCE; }
    static MOD_SINCE_$LI$() { if (Operator.MOD_SINCE == null) {
        Operator.MOD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Operator.MOD_SINCE; }
    static PERC_SINCE_$LI$() { if (Operator.PERC_SINCE == null) {
        Operator.PERC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return Operator.PERC_SINCE; }
    static TETRATION_SINCE_$LI$() { if (Operator.TETRATION_SINCE == null) {
        Operator.TETRATION_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Operator.TETRATION_SINCE; }
}
exports.Operator = Operator;
Operator.TYPE_ID = 1;
Operator.TYPE_DESC = "Operator";
Operator.PLUS_ID = 1;
Operator.MINUS_ID = 2;
Operator.MULTIPLY_ID = 3;
Operator.DIVIDE_ID = 4;
Operator.POWER_ID = 5;
Operator.FACT_ID = 6;
Operator.MOD_ID = 7;
Operator.PERC_ID = 8;
Operator.TETRATION_ID = 9;
Operator.PLUS_STR = "+";
Operator.MINUS_STR = "-";
Operator.MULTIPLY_STR = "*";
Operator.DIVIDE_STR = "/";
Operator.POWER_STR = "^";
Operator.FACT_STR = "!";
Operator.MOD_STR = "#";
Operator.PERC_STR = "%";
Operator.TETRATION_STR = "^^";
Operator.PLUS_SYN = "a + b";
Operator.MINUS_SYN = "a - b";
Operator.MULTIPLY_SYN = "a * b";
Operator.DIVIDE_SYN = "a / b";
Operator.POWER_SYN = "a^b";
Operator.FACT_SYN = "n!";
Operator.MOD_SYN = "a # b";
Operator.PERC_SYN = "n%";
Operator.TETRATION_SYN = "a^^n";
Operator.PLUS_DESC = "Addition";
Operator.MINUS_DESC = "Subtraction";
Operator.MULTIPLY_DESC = "Nultiplication";
Operator.DIVIDE_DESC = "Division";
Operator.POWER_DESC = "Exponentiation";
Operator.FACT_DESC = "Factorial";
Operator.MOD_DESC = "Modulo function";
Operator.PERC_DESC = "Percentage";
Operator.TETRATION_DESC = "Tetration (hyper-4, power tower, exponential tower)";
Operator["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.Operator";
//# sourceMappingURL=Operator.js.map