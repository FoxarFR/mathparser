"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitwiseOperator = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Bitwise Operators - mXparser tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class BitwiseOperator {
    static COMPL_SINCE_$LI$() { if (BitwiseOperator.COMPL_SINCE == null) {
        BitwiseOperator.COMPL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return BitwiseOperator.COMPL_SINCE; }
    static AND_SINCE_$LI$() { if (BitwiseOperator.AND_SINCE == null) {
        BitwiseOperator.AND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return BitwiseOperator.AND_SINCE; }
    static XOR_SINCE_$LI$() { if (BitwiseOperator.XOR_SINCE == null) {
        BitwiseOperator.XOR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return BitwiseOperator.XOR_SINCE; }
    static OR_SINCE_$LI$() { if (BitwiseOperator.OR_SINCE == null) {
        BitwiseOperator.OR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return BitwiseOperator.OR_SINCE; }
    static LEFT_SHIFT_SINCE_$LI$() { if (BitwiseOperator.LEFT_SHIFT_SINCE == null) {
        BitwiseOperator.LEFT_SHIFT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return BitwiseOperator.LEFT_SHIFT_SINCE; }
    static RIGHT_SHIFT_SINCE_$LI$() { if (BitwiseOperator.RIGHT_SHIFT_SINCE == null) {
        BitwiseOperator.RIGHT_SHIFT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return BitwiseOperator.RIGHT_SHIFT_SINCE; }
}
exports.BitwiseOperator = BitwiseOperator;
BitwiseOperator.TYPE_ID = 11;
BitwiseOperator.TYPE_DESC = "Bitwise Operator";
BitwiseOperator.COMPL_ID = 1;
BitwiseOperator.AND_ID = 2;
BitwiseOperator.XOR_ID = 3;
BitwiseOperator.OR_ID = 4;
BitwiseOperator.LEFT_SHIFT_ID = 5;
BitwiseOperator.RIGHT_SHIFT_ID = 6;
BitwiseOperator.COMPL_STR = "@~";
BitwiseOperator.AND_STR = "@&";
BitwiseOperator.XOR_STR = "@^";
BitwiseOperator.OR_STR = "@|";
BitwiseOperator.LEFT_SHIFT_STR = "@<<";
BitwiseOperator.RIGHT_SHIFT_STR = "@>>";
BitwiseOperator.COMPL_SYN = "@~a";
BitwiseOperator.AND_SYN = "a @& b";
BitwiseOperator.XOR_SYN = "a @^ b";
BitwiseOperator.OR_SYN = "a @| b";
BitwiseOperator.LEFT_SHIFT_SYN = "a @<< b";
BitwiseOperator.RIGHT_SHIFT_SYN = "a @>> b";
BitwiseOperator.COMPL_DESC = "Bitwise unary complement";
BitwiseOperator.AND_DESC = "Bitwise AND";
BitwiseOperator.XOR_DESC = "Bitwise exclusive OR";
BitwiseOperator.OR_DESC = "Bitwise inclusive OR";
BitwiseOperator.LEFT_SHIFT_DESC = "Signed left shift";
BitwiseOperator.RIGHT_SHIFT_DESC = "Signed right shift";
BitwiseOperator["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.BitwiseOperator";
//# sourceMappingURL=BitwiseOperator.js.map