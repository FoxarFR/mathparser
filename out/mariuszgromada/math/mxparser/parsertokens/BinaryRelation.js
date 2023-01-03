"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryRelation = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Binary Relations - mXparser tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.1.0
 * @class
 */
class BinaryRelation {
    static EQ_SINCE_$LI$() { if (BinaryRelation.EQ_SINCE == null) {
        BinaryRelation.EQ_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BinaryRelation.EQ_SINCE; }
    static NEQ_SINCE_$LI$() { if (BinaryRelation.NEQ_SINCE == null) {
        BinaryRelation.NEQ_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BinaryRelation.NEQ_SINCE; }
    static LT_SINCE_$LI$() { if (BinaryRelation.LT_SINCE == null) {
        BinaryRelation.LT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BinaryRelation.LT_SINCE; }
    static GT_SINCE_$LI$() { if (BinaryRelation.GT_SINCE == null) {
        BinaryRelation.GT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BinaryRelation.GT_SINCE; }
    static LEQ_SINCE_$LI$() { if (BinaryRelation.LEQ_SINCE == null) {
        BinaryRelation.LEQ_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BinaryRelation.LEQ_SINCE; }
    static GEQ_SINCE_$LI$() { if (BinaryRelation.GEQ_SINCE == null) {
        BinaryRelation.GEQ_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BinaryRelation.GEQ_SINCE; }
}
exports.BinaryRelation = BinaryRelation;
BinaryRelation.TYPE_ID = 3;
BinaryRelation.TYPE_DESC = "Binary Relation";
BinaryRelation.EQ_ID = 1;
BinaryRelation.NEQ_ID = 2;
BinaryRelation.LT_ID = 3;
BinaryRelation.GT_ID = 4;
BinaryRelation.LEQ_ID = 5;
BinaryRelation.GEQ_ID = 6;
BinaryRelation.EQ_STR = "=";
BinaryRelation.EQ1_STR = "==";
BinaryRelation.NEQ_STR = "<>";
BinaryRelation.NEQ1_STR = "~=";
BinaryRelation.NEQ2_STR = "!=";
BinaryRelation.LT_STR = "<";
BinaryRelation.GT_STR = ">";
BinaryRelation.LEQ_STR = "<=";
BinaryRelation.GEQ_STR = ">=";
BinaryRelation.EQ_SYN = "a = b";
BinaryRelation.EQ1_SYN = "a == b";
BinaryRelation.NEQ_SYN = "a <> b";
BinaryRelation.NEQ1_SYN = "a ~= b";
BinaryRelation.NEQ2_SYN = "a != b";
BinaryRelation.LT_SYN = "a < b";
BinaryRelation.GT_SYN = "a > b";
BinaryRelation.LEQ_SYN = "a <= b";
BinaryRelation.GEQ_SYN = "a >= b";
BinaryRelation.EQ_DESC = "Equality";
BinaryRelation.NEQ_DESC = "Inequation";
BinaryRelation.LT_DESC = "Lower than";
BinaryRelation.GT_DESC = "Greater than";
BinaryRelation.LEQ_DESC = "Lower or equal";
BinaryRelation.GEQ_DESC = "Greater or equal";
BinaryRelation["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.BinaryRelation";
//# sourceMappingURL=BinaryRelation.js.map