"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionVariadic = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Variadic functions (n parameters)- mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.1.0
 * @class
 */
class FunctionVariadic {
    static IFF_SINCE_$LI$() { if (FunctionVariadic.IFF_SINCE == null) {
        FunctionVariadic.IFF_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return FunctionVariadic.IFF_SINCE; }
    static MIN_SINCE_$LI$() { if (FunctionVariadic.MIN_SINCE == null) {
        FunctionVariadic.MIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return FunctionVariadic.MIN_SINCE; }
    static MAX_SINCE_$LI$() { if (FunctionVariadic.MAX_SINCE == null) {
        FunctionVariadic.MAX_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return FunctionVariadic.MAX_SINCE; }
    static CONT_FRAC_SINCE_$LI$() { if (FunctionVariadic.CONT_FRAC_SINCE == null) {
        FunctionVariadic.CONT_FRAC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return FunctionVariadic.CONT_FRAC_SINCE; }
    static CONT_POL_SINCE_$LI$() { if (FunctionVariadic.CONT_POL_SINCE == null) {
        FunctionVariadic.CONT_POL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return FunctionVariadic.CONT_POL_SINCE; }
    static GCD_SINCE_$LI$() { if (FunctionVariadic.GCD_SINCE == null) {
        FunctionVariadic.GCD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return FunctionVariadic.GCD_SINCE; }
    static LCM_SINCE_$LI$() { if (FunctionVariadic.LCM_SINCE == null) {
        FunctionVariadic.LCM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return FunctionVariadic.LCM_SINCE; }
    static SUM_SINCE_$LI$() { if (FunctionVariadic.SUM_SINCE == null) {
        FunctionVariadic.SUM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return FunctionVariadic.SUM_SINCE; }
    static PROD_SINCE_$LI$() { if (FunctionVariadic.PROD_SINCE == null) {
        FunctionVariadic.PROD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return FunctionVariadic.PROD_SINCE; }
    static AVG_SINCE_$LI$() { if (FunctionVariadic.AVG_SINCE == null) {
        FunctionVariadic.AVG_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return FunctionVariadic.AVG_SINCE; }
    static VAR_SINCE_$LI$() { if (FunctionVariadic.VAR_SINCE == null) {
        FunctionVariadic.VAR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return FunctionVariadic.VAR_SINCE; }
    static STD_SINCE_$LI$() { if (FunctionVariadic.STD_SINCE == null) {
        FunctionVariadic.STD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return FunctionVariadic.STD_SINCE; }
    static RND_LIST_SINCE_$LI$() { if (FunctionVariadic.RND_LIST_SINCE == null) {
        FunctionVariadic.RND_LIST_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return FunctionVariadic.RND_LIST_SINCE; }
    static COALESCE_SINCE_$LI$() { if (FunctionVariadic.COALESCE_SINCE == null) {
        FunctionVariadic.COALESCE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.COALESCE_SINCE; }
    static OR_SINCE_$LI$() { if (FunctionVariadic.OR_SINCE == null) {
        FunctionVariadic.OR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.OR_SINCE; }
    static AND_SINCE_$LI$() { if (FunctionVariadic.AND_SINCE == null) {
        FunctionVariadic.AND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.AND_SINCE; }
    static XOR_SINCE_$LI$() { if (FunctionVariadic.XOR_SINCE == null) {
        FunctionVariadic.XOR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.XOR_SINCE; }
    static ARGMIN_SINCE_$LI$() { if (FunctionVariadic.ARGMIN_SINCE == null) {
        FunctionVariadic.ARGMIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.ARGMIN_SINCE; }
    static ARGMAX_SINCE_$LI$() { if (FunctionVariadic.ARGMAX_SINCE == null) {
        FunctionVariadic.ARGMAX_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.ARGMAX_SINCE; }
    static MEDIAN_SINCE_$LI$() { if (FunctionVariadic.MEDIAN_SINCE == null) {
        FunctionVariadic.MEDIAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.MEDIAN_SINCE; }
    static MODE_SINCE_$LI$() { if (FunctionVariadic.MODE_SINCE == null) {
        FunctionVariadic.MODE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.MODE_SINCE; }
    static BASE_SINCE_$LI$() { if (FunctionVariadic.BASE_SINCE == null) {
        FunctionVariadic.BASE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.BASE_SINCE; }
    static NDIST_SINCE_$LI$() { if (FunctionVariadic.NDIST_SINCE == null) {
        FunctionVariadic.NDIST_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return FunctionVariadic.NDIST_SINCE; }
}
exports.FunctionVariadic = FunctionVariadic;
FunctionVariadic.TYPE_ID = 7;
FunctionVariadic.TYPE_DESC = "Variadic Function";
FunctionVariadic.IFF_ID = 1;
FunctionVariadic.MIN_ID = 2;
FunctionVariadic.MAX_ID = 3;
FunctionVariadic.CONT_FRAC_ID = 4;
FunctionVariadic.CONT_POL_ID = 5;
FunctionVariadic.GCD_ID = 6;
FunctionVariadic.LCM_ID = 7;
FunctionVariadic.SUM_ID = 8;
FunctionVariadic.PROD_ID = 9;
FunctionVariadic.AVG_ID = 10;
FunctionVariadic.VAR_ID = 11;
FunctionVariadic.STD_ID = 12;
FunctionVariadic.RND_LIST_ID = 13;
FunctionVariadic.COALESCE_ID = 14;
FunctionVariadic.OR_ID = 15;
FunctionVariadic.AND_ID = 16;
FunctionVariadic.XOR_ID = 17;
FunctionVariadic.ARGMIN_ID = 18;
FunctionVariadic.ARGMAX_ID = 19;
FunctionVariadic.MEDIAN_ID = 20;
FunctionVariadic.MODE_ID = 21;
FunctionVariadic.BASE_ID = 22;
FunctionVariadic.NDIST_ID = 23;
FunctionVariadic.IFF_STR = "iff";
FunctionVariadic.MIN_STR = "min";
FunctionVariadic.MAX_STR = "max";
FunctionVariadic.CONT_FRAC_STR = "ConFrac";
FunctionVariadic.CONT_POL_STR = "ConPol";
FunctionVariadic.GCD_STR = "gcd";
FunctionVariadic.LCM_STR = "lcm";
FunctionVariadic.SUM_STR = "add";
FunctionVariadic.PROD_STR = "multi";
FunctionVariadic.AVG_STR = "mean";
FunctionVariadic.VAR_STR = "var";
FunctionVariadic.STD_STR = "std";
FunctionVariadic.RND_LIST_STR = "rList";
FunctionVariadic.COALESCE_STR = "coalesce";
FunctionVariadic.OR_STR = "or";
FunctionVariadic.AND_STR = "and";
FunctionVariadic.XOR_STR = "xor";
FunctionVariadic.ARGMIN_STR = "argmin";
FunctionVariadic.ARGMAX_STR = "argmax";
FunctionVariadic.MEDIAN_STR = "med";
FunctionVariadic.MODE_STR = "mode";
FunctionVariadic.BASE_STR = "base";
FunctionVariadic.NDIST_STR = "ndist";
FunctionVariadic.IFF_SYN = "iff( cond-1, expr-1; ... ; cond-n, expr-n )";
FunctionVariadic.MIN_SYN = "min(a1, ..., an)";
FunctionVariadic.MAX_SYN = "max(a1, ..., an)";
FunctionVariadic.CONT_FRAC_SYN = "ConFrac(a1, ..., an)";
FunctionVariadic.CONT_POL_SYN = "ConPol(a1, ..., an)";
FunctionVariadic.GCD_SYN = "gcd(a1, ..., an)";
FunctionVariadic.LCM_SYN = "lcm(a1, ..., an)";
FunctionVariadic.SUM_SYN = "add(a1, ..., an)";
FunctionVariadic.PROD_SYN = "multi(a1, ..., an)";
FunctionVariadic.AVG_SYN = "mean(a1, ..., an)";
FunctionVariadic.VAR_SYN = "var(a1, ..., an)";
FunctionVariadic.STD_SYN = "std(a1, ..., an)";
FunctionVariadic.RND_LIST_SYN = "rList(a1, ..., an)";
FunctionVariadic.COALESCE_SYN = "coalesce(a1, ..., an)";
FunctionVariadic.OR_SYN = "or(a1, ..., an)";
FunctionVariadic.AND_SYN = "and(a1, ..., an)";
FunctionVariadic.XOR_SYN = "xor(a1, ..., an)";
FunctionVariadic.ARGMIN_SYN = "argmin(a1, ..., an)";
FunctionVariadic.ARGMAX_SYN = "argmax(a1, ..., an)";
FunctionVariadic.MEDIAN_SYN = "med(a1, ..., an)";
FunctionVariadic.MODE_SYN = "mode(a1, ..., an)";
FunctionVariadic.BASE_SYN = "base(b, d1, ..., dn)";
FunctionVariadic.NDIST_SYN = "ndist(v1, ..., vn)";
FunctionVariadic.IFF_DESC = "If function";
FunctionVariadic.MIN_DESC = "Minimum function";
FunctionVariadic.MAX_DESC = "Maximum function";
FunctionVariadic.CONT_FRAC_DESC = "Continued fraction";
FunctionVariadic.CONT_POL_DESC = "Continued polynomial";
FunctionVariadic.GCD_DESC = "Greatest common divisor";
FunctionVariadic.LCM_DESC = "Least common multiple";
FunctionVariadic.SUM_DESC = "Summation operator";
FunctionVariadic.PROD_DESC = "Multiplication";
FunctionVariadic.AVG_DESC = "Mean / average value";
FunctionVariadic.VAR_DESC = "Bias-corrected sample variance";
FunctionVariadic.STD_DESC = "Bias-corrected sample standard deviation";
FunctionVariadic.RND_LIST_DESC = "Random number from given list of numbers";
FunctionVariadic.COALESCE_DESC = "Returns the first non-NaN value";
FunctionVariadic.OR_DESC = "Logical disjunction (OR) - variadic";
FunctionVariadic.AND_DESC = "Logical conjunction (AND) - variadic";
FunctionVariadic.XOR_DESC = "Exclusive or (XOR) - variadic";
FunctionVariadic.ARGMIN_DESC = "Arguments / indices of the minima";
FunctionVariadic.ARGMAX_DESC = "Arguments / indices of the maxima";
FunctionVariadic.MEDIAN_DESC = "The sample median";
FunctionVariadic.MODE_DESC = "Mode - the value that appears most often";
FunctionVariadic.BASE_DESC = "Returns number in given numeral system base represented by list of digits";
FunctionVariadic.NDIST_DESC = "Number of distinct values";
FunctionVariadic["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.FunctionVariadic";
//# sourceMappingURL=FunctionVariadic.js.map