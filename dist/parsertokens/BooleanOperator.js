"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanOperator = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Boolean Operators - mXparser tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.1.0
 * @class
 */
class BooleanOperator {
    static NAND_STR_$LI$() { if (BooleanOperator.NAND_STR == null) {
        BooleanOperator.NAND_STR = BooleanOperator.NEG_STR + BooleanOperator.AND_STR;
    } return BooleanOperator.NAND_STR; }
    static NAND1_STR_$LI$() { if (BooleanOperator.NAND1_STR == null) {
        BooleanOperator.NAND1_STR = BooleanOperator.NEG_STR + BooleanOperator.AND1_STR;
    } return BooleanOperator.NAND1_STR; }
    static NAND2_STR_$LI$() { if (BooleanOperator.NAND2_STR == null) {
        BooleanOperator.NAND2_STR = BooleanOperator.NEG_STR + BooleanOperator.AND2_STR;
    } return BooleanOperator.NAND2_STR; }
    static NOR_STR_$LI$() { if (BooleanOperator.NOR_STR == null) {
        BooleanOperator.NOR_STR = BooleanOperator.NEG_STR + BooleanOperator.OR_STR;
    } return BooleanOperator.NOR_STR; }
    static NOR1_STR_$LI$() { if (BooleanOperator.NOR1_STR == null) {
        BooleanOperator.NOR1_STR = BooleanOperator.NEG_STR + BooleanOperator.OR1_STR;
    } return BooleanOperator.NOR1_STR; }
    static NOR2_STR_$LI$() { if (BooleanOperator.NOR2_STR == null) {
        BooleanOperator.NOR2_STR = BooleanOperator.NEG_STR + BooleanOperator.OR2_STR;
    } return BooleanOperator.NOR2_STR; }
    static NAND_SYN_$LI$() { if (BooleanOperator.NAND_SYN == null) {
        BooleanOperator.NAND_SYN = "p " + BooleanOperator.NEG_STR + BooleanOperator.AND_STR + " q";
    } return BooleanOperator.NAND_SYN; }
    static NAND1_SYN_$LI$() { if (BooleanOperator.NAND1_SYN == null) {
        BooleanOperator.NAND1_SYN = "p " + BooleanOperator.NEG_STR + BooleanOperator.AND1_STR + " q";
    } return BooleanOperator.NAND1_SYN; }
    static NAND2_SYN_$LI$() { if (BooleanOperator.NAND2_SYN == null) {
        BooleanOperator.NAND2_SYN = "p " + BooleanOperator.NEG_STR + BooleanOperator.AND2_STR + " q";
    } return BooleanOperator.NAND2_SYN; }
    static NOR_SYN_$LI$() { if (BooleanOperator.NOR_SYN == null) {
        BooleanOperator.NOR_SYN = "p " + BooleanOperator.NEG_STR + BooleanOperator.OR_STR + " q";
    } return BooleanOperator.NOR_SYN; }
    static NOR1_SYN_$LI$() { if (BooleanOperator.NOR1_SYN == null) {
        BooleanOperator.NOR1_SYN = "p " + BooleanOperator.NEG_STR + BooleanOperator.OR1_STR + " q";
    } return BooleanOperator.NOR1_SYN; }
    static NOR2_SYN_$LI$() { if (BooleanOperator.NOR2_SYN == null) {
        BooleanOperator.NOR2_SYN = "p " + BooleanOperator.NEG_STR + BooleanOperator.OR2_STR + " q";
    } return BooleanOperator.NOR2_SYN; }
    static AND_SINCE_$LI$() { if (BooleanOperator.AND_SINCE == null) {
        BooleanOperator.AND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.AND_SINCE; }
    static OR_SINCE_$LI$() { if (BooleanOperator.OR_SINCE == null) {
        BooleanOperator.OR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.OR_SINCE; }
    static NEG_SINCE_$LI$() { if (BooleanOperator.NEG_SINCE == null) {
        BooleanOperator.NEG_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.NEG_SINCE; }
    static NAND_SINCE_$LI$() { if (BooleanOperator.NAND_SINCE == null) {
        BooleanOperator.NAND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.NAND_SINCE; }
    static NOR_SINCE_$LI$() { if (BooleanOperator.NOR_SINCE == null) {
        BooleanOperator.NOR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.NOR_SINCE; }
    static XOR_SINCE_$LI$() { if (BooleanOperator.XOR_SINCE == null) {
        BooleanOperator.XOR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.XOR_SINCE; }
    static IMP_SINCE_$LI$() { if (BooleanOperator.IMP_SINCE == null) {
        BooleanOperator.IMP_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.IMP_SINCE; }
    static CIMP_SINCE_$LI$() { if (BooleanOperator.CIMP_SINCE == null) {
        BooleanOperator.CIMP_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.CIMP_SINCE; }
    static NIMP_SINCE_$LI$() { if (BooleanOperator.NIMP_SINCE == null) {
        BooleanOperator.NIMP_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.NIMP_SINCE; }
    static CNIMP_SINCE_$LI$() { if (BooleanOperator.CNIMP_SINCE == null) {
        BooleanOperator.CNIMP_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.CNIMP_SINCE; }
    static EQV_SINCE_$LI$() { if (BooleanOperator.EQV_SINCE == null) {
        BooleanOperator.EQV_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return BooleanOperator.EQV_SINCE; }
}
exports.BooleanOperator = BooleanOperator;
BooleanOperator.TYPE_ID = 2;
BooleanOperator.TYPE_DESC = "Boolean Operator";
BooleanOperator.AND_ID = 1;
BooleanOperator.NAND_ID = 2;
BooleanOperator.OR_ID = 3;
BooleanOperator.NOR_ID = 4;
BooleanOperator.XOR_ID = 5;
BooleanOperator.IMP_ID = 6;
BooleanOperator.CIMP_ID = 7;
BooleanOperator.NIMP_ID = 8;
BooleanOperator.CNIMP_ID = 9;
BooleanOperator.EQV_ID = 10;
BooleanOperator.NEG_ID = 11;
BooleanOperator.NEG_STR = "~";
BooleanOperator.AND_STR = "&";
BooleanOperator.AND1_STR = "&&";
BooleanOperator.AND2_STR = "/\\";
BooleanOperator.OR_STR = "|";
BooleanOperator.OR1_STR = "||";
BooleanOperator.OR2_STR = "\\/";
BooleanOperator.XOR_STR = "(+)";
BooleanOperator.IMP_STR = "-->";
BooleanOperator.CIMP_STR = "<--";
BooleanOperator.NIMP_STR = "-/>";
BooleanOperator.CNIMP_STR = "</-";
BooleanOperator.EQV_STR = "<->";
BooleanOperator.NEG_SYN = "~p";
BooleanOperator.AND_SYN = "p & q";
BooleanOperator.AND1_SYN = "p && q";
BooleanOperator.AND2_SYN = "p /\\ q";
BooleanOperator.OR_SYN = "p | q";
BooleanOperator.OR1_SYN = "p || q";
BooleanOperator.OR2_SYN = "p \\/ q";
BooleanOperator.XOR_SYN = "p (+) q";
BooleanOperator.IMP_SYN = "p --> q";
BooleanOperator.CIMP_SYN = "p <-- q";
BooleanOperator.NIMP_SYN = "p  -/> q";
BooleanOperator.CNIMP_SYN = "p </- q";
BooleanOperator.EQV_SYN = "p <-> q";
BooleanOperator.AND_DESC = "Logical conjunction (AND)";
BooleanOperator.OR_DESC = "Logical disjunction (OR)";
BooleanOperator.NEG_DESC = "Negation";
BooleanOperator.NAND_DESC = "NAND - Sheffer stroke";
BooleanOperator.NOR_DESC = "Logical NOR";
BooleanOperator.XOR_DESC = "Exclusive or (XOR)";
BooleanOperator.IMP_DESC = "Implication (IMP)";
BooleanOperator.CIMP_DESC = "Converse implication (CIMP)";
BooleanOperator.NIMP_DESC = "Material nonimplication (NIMP)";
BooleanOperator.CNIMP_DESC = "Converse nonimplication (CNIMP)";
BooleanOperator.EQV_DESC = "Logical biconditional (EQV)";
BooleanOperator["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.BooleanOperator";
//# sourceMappingURL=BooleanOperator.js.map