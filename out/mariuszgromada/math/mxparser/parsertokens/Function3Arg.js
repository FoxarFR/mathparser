"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function3Arg = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Functions with 3 arguments - mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class Function3Arg {
    static INC_BETA_SYN_$LI$() { if (Function3Arg.INC_BETA_SYN == null) {
        Function3Arg.INC_BETA_SYN = Function3Arg.INC_BETA_STR + "(x,a,b)";
    } return Function3Arg.INC_BETA_SYN; }
    static REG_BETA_SYN_$LI$() { if (Function3Arg.REG_BETA_SYN == null) {
        Function3Arg.REG_BETA_SYN = Function3Arg.REG_BETA_STR + "(x,a,b)";
    } return Function3Arg.REG_BETA_SYN; }
    static REG_BETA_I_SYN_$LI$() { if (Function3Arg.REG_BETA_I_SYN == null) {
        Function3Arg.REG_BETA_I_SYN = Function3Arg.REG_BETA_I_STR + "(x,a,b)";
    } return Function3Arg.REG_BETA_I_SYN; }
    static IF_SINCE_$LI$() { if (Function3Arg.IF_SINCE == null) {
        Function3Arg.IF_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function3Arg.IF_SINCE; }
    static CHI_SINCE_$LI$() { if (Function3Arg.CHI_SINCE == null) {
        Function3Arg.CHI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function3Arg.CHI_SINCE; }
    static CHI_LR_SINCE_$LI$() { if (Function3Arg.CHI_LR_SINCE == null) {
        Function3Arg.CHI_LR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function3Arg.CHI_LR_SINCE; }
    static CHI_L_SINCE_$LI$() { if (Function3Arg.CHI_L_SINCE == null) {
        Function3Arg.CHI_L_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function3Arg.CHI_L_SINCE; }
    static CHI_R_SINCE_$LI$() { if (Function3Arg.CHI_R_SINCE == null) {
        Function3Arg.CHI_R_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function3Arg.CHI_R_SINCE; }
    static PDF_UNIFORM_CONT_SINCE_$LI$() { if (Function3Arg.PDF_UNIFORM_CONT_SINCE == null) {
        Function3Arg.PDF_UNIFORM_CONT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function3Arg.PDF_UNIFORM_CONT_SINCE; }
    static CDF_UNIFORM_CONT_SINCE_$LI$() { if (Function3Arg.CDF_UNIFORM_CONT_SINCE == null) {
        Function3Arg.CDF_UNIFORM_CONT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function3Arg.CDF_UNIFORM_CONT_SINCE; }
    static QNT_UNIFORM_CONT_SINCE_$LI$() { if (Function3Arg.QNT_UNIFORM_CONT_SINCE == null) {
        Function3Arg.QNT_UNIFORM_CONT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function3Arg.QNT_UNIFORM_CONT_SINCE; }
    static PDF_NORMAL_SINCE_$LI$() { if (Function3Arg.PDF_NORMAL_SINCE == null) {
        Function3Arg.PDF_NORMAL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function3Arg.PDF_NORMAL_SINCE; }
    static CDF_NORMAL_SINCE_$LI$() { if (Function3Arg.CDF_NORMAL_SINCE == null) {
        Function3Arg.CDF_NORMAL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function3Arg.CDF_NORMAL_SINCE; }
    static QNT_NORMAL_SINCE_$LI$() { if (Function3Arg.QNT_NORMAL_SINCE == null) {
        Function3Arg.QNT_NORMAL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function3Arg.QNT_NORMAL_SINCE; }
    static DIGIT_SINCE_$LI$() { if (Function3Arg.DIGIT_SINCE == null) {
        Function3Arg.DIGIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return Function3Arg.DIGIT_SINCE; }
    static INC_BETA_SINCE_$LI$() { if (Function3Arg.INC_BETA_SINCE == null) {
        Function3Arg.INC_BETA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function3Arg.INC_BETA_SINCE; }
    static REG_BETA_SINCE_$LI$() { if (Function3Arg.REG_BETA_SINCE == null) {
        Function3Arg.REG_BETA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function3Arg.REG_BETA_SINCE; }
    static REG_BETA_I_SINCE_$LI$() { if (Function3Arg.REG_BETA_I_SINCE == null) {
        Function3Arg.REG_BETA_I_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function3Arg.REG_BETA_I_SINCE; }
}
exports.Function3Arg = Function3Arg;
Function3Arg.TYPE_ID = 6;
Function3Arg.TYPE_DESC = "3-args Function";
Function3Arg.IF_CONDITION_ID = 1;
Function3Arg.IF_ID = 2;
Function3Arg.CHI_ID = 3;
Function3Arg.CHI_LR_ID = 4;
Function3Arg.CHI_L_ID = 5;
Function3Arg.CHI_R_ID = 6;
Function3Arg.PDF_UNIFORM_CONT_ID = 7;
Function3Arg.CDF_UNIFORM_CONT_ID = 8;
Function3Arg.QNT_UNIFORM_CONT_ID = 9;
Function3Arg.PDF_NORMAL_ID = 10;
Function3Arg.CDF_NORMAL_ID = 11;
Function3Arg.QNT_NORMAL_ID = 12;
Function3Arg.DIGIT_ID = 13;
Function3Arg.INC_BETA_ID = 14;
Function3Arg.REG_BETA_ID = 15;
Function3Arg.IF_STR = "if";
Function3Arg.CHI_STR = "chi";
Function3Arg.CHI_LR_STR = "CHi";
Function3Arg.CHI_L_STR = "Chi";
Function3Arg.CHI_R_STR = "cHi";
Function3Arg.PDF_UNIFORM_CONT_STR = "pUni";
Function3Arg.CDF_UNIFORM_CONT_STR = "cUni";
Function3Arg.QNT_UNIFORM_CONT_STR = "qUni";
Function3Arg.PDF_NORMAL_STR = "pNor";
Function3Arg.CDF_NORMAL_STR = "cNor";
Function3Arg.QNT_NORMAL_STR = "qNor";
Function3Arg.DIGIT_STR = "dig";
Function3Arg.INC_BETA_STR = "BetaInc";
Function3Arg.REG_BETA_STR = "BetaReg";
Function3Arg.REG_BETA_I_STR = "BetaI";
Function3Arg.IF_SYN = "if( cond, expr-if-true, expr-if-false )";
Function3Arg.CHI_SYN = "chi(x, a, b)";
Function3Arg.CHI_LR_SYN = "CHi(x, a, b)";
Function3Arg.CHI_L_SYN = "Chi(x, a, b)";
Function3Arg.CHI_R_SYN = "cHi(x, a, b)";
Function3Arg.PDF_UNIFORM_CONT_SYN = "pUni(x, a, b)";
Function3Arg.CDF_UNIFORM_CONT_SYN = "cUni(x, a, b)";
Function3Arg.QNT_UNIFORM_CONT_SYN = "qUni(q, a, b)";
Function3Arg.PDF_NORMAL_SYN = "pNor(x, mean, stdv)";
Function3Arg.CDF_NORMAL_SYN = "cNor(x, mean, stdv)";
Function3Arg.QNT_NORMAL_SYN = "qNor(q, mean, stdv)";
Function3Arg.DIGIT_SYN = "dig(num, pos, base)";
Function3Arg.IF_DESC = "If function";
Function3Arg.CHI_DESC = "Characteristic function for x in (a,b)";
Function3Arg.CHI_LR_DESC = "Characteristic function for x in [a,b]";
Function3Arg.CHI_L_DESC = "Characteristic function for x in [a,b)";
Function3Arg.CHI_R_DESC = "Characteristic function for x in (a,b]";
Function3Arg.PDF_UNIFORM_CONT_DESC = "Probability distribution function - Uniform continuous distribution U(a,b)";
Function3Arg.CDF_UNIFORM_CONT_DESC = "Cumulative distribution function - Uniform continuous distribution U(a,b)";
Function3Arg.QNT_UNIFORM_CONT_DESC = "Quantile function (inverse cumulative distribution function) - Uniform continuous distribution U(a,b)";
Function3Arg.PDF_NORMAL_DESC = "Probability distribution function - Normal distribution N(m,s)";
Function3Arg.CDF_NORMAL_DESC = "Cumulative distribution function - Normal distribution N(m,s)";
Function3Arg.QNT_NORMAL_DESC = "Quantile function (inverse cumulative distribution function)";
Function3Arg.DIGIT_DESC = "Digit at position 1 ... n (left -> right) or 0 ... -(n-1) (right -> left) - numeral system with given base";
Function3Arg.INC_BETA_DESC = "The incomplete beta special function B(x; a, b), also called the incomplete Euler integral of the first kind";
Function3Arg.REG_BETA_DESC = "The regularized incomplete beta (or regularized beta) special function I(x; a, b), also called the regularized incomplete Euler integral of the first kind";
Function3Arg["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.Function3Arg";
//# sourceMappingURL=Function3Arg.js.map