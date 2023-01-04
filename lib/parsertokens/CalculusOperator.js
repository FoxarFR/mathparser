"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculusOperator = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Calculus Operators - mXparser tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
class CalculusOperator {
    static SUM_SINCE_$LI$() { if (CalculusOperator.SUM_SINCE == null) {
        CalculusOperator.SUM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.SUM_SINCE; }
    static PROD_SINCE_$LI$() { if (CalculusOperator.PROD_SINCE == null) {
        CalculusOperator.PROD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.PROD_SINCE; }
    static INT_SINCE_$LI$() { if (CalculusOperator.INT_SINCE == null) {
        CalculusOperator.INT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.INT_SINCE; }
    static DER_SINCE_$LI$() { if (CalculusOperator.DER_SINCE == null) {
        CalculusOperator.DER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.DER_SINCE; }
    static DER_LEFT_SINCE_$LI$() { if (CalculusOperator.DER_LEFT_SINCE == null) {
        CalculusOperator.DER_LEFT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.DER_LEFT_SINCE; }
    static DER_RIGHT_SINCE_$LI$() { if (CalculusOperator.DER_RIGHT_SINCE == null) {
        CalculusOperator.DER_RIGHT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.DER_RIGHT_SINCE; }
    static DERN_SINCE_$LI$() { if (CalculusOperator.DERN_SINCE == null) {
        CalculusOperator.DERN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.DERN_SINCE; }
    static FORW_DIFF_SINCE_$LI$() { if (CalculusOperator.FORW_DIFF_SINCE == null) {
        CalculusOperator.FORW_DIFF_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.FORW_DIFF_SINCE; }
    static BACKW_DIFF_SINCE_$LI$() { if (CalculusOperator.BACKW_DIFF_SINCE == null) {
        CalculusOperator.BACKW_DIFF_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return CalculusOperator.BACKW_DIFF_SINCE; }
    static AVG_SINCE_$LI$() { if (CalculusOperator.AVG_SINCE == null) {
        CalculusOperator.AVG_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return CalculusOperator.AVG_SINCE; }
    static VAR_SINCE_$LI$() { if (CalculusOperator.VAR_SINCE == null) {
        CalculusOperator.VAR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return CalculusOperator.VAR_SINCE; }
    static STD_SINCE_$LI$() { if (CalculusOperator.STD_SINCE == null) {
        CalculusOperator.STD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return CalculusOperator.STD_SINCE; }
    static MIN_SINCE_$LI$() { if (CalculusOperator.MIN_SINCE == null) {
        CalculusOperator.MIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return CalculusOperator.MIN_SINCE; }
    static MAX_SINCE_$LI$() { if (CalculusOperator.MAX_SINCE == null) {
        CalculusOperator.MAX_SINCE = mXparserConstants_1.mXparserConstants.NAMEv24;
    } return CalculusOperator.MAX_SINCE; }
    static SOLVE_SINCE_$LI$() { if (CalculusOperator.SOLVE_SINCE == null) {
        CalculusOperator.SOLVE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return CalculusOperator.SOLVE_SINCE; }
}
exports.CalculusOperator = CalculusOperator;
CalculusOperator.TYPE_ID = 8;
CalculusOperator.TYPE_DESC = "Calculus Operator";
CalculusOperator.SUM_ID = 1;
CalculusOperator.PROD_ID = 3;
CalculusOperator.INT_ID = 5;
CalculusOperator.DER_ID = 6;
CalculusOperator.DER_LEFT_ID = 7;
CalculusOperator.DER_RIGHT_ID = 8;
CalculusOperator.DERN_ID = 9;
CalculusOperator.FORW_DIFF_ID = 10;
CalculusOperator.BACKW_DIFF_ID = 11;
CalculusOperator.AVG_ID = 12;
CalculusOperator.VAR_ID = 13;
CalculusOperator.STD_ID = 14;
CalculusOperator.MIN_ID = 15;
CalculusOperator.MAX_ID = 16;
CalculusOperator.SOLVE_ID = 17;
CalculusOperator.SUM_STR = "sum";
CalculusOperator.PROD_STR = "prod";
CalculusOperator.INT_STR = "int";
CalculusOperator.DER_STR = "der";
CalculusOperator.DER_LEFT_STR = "der-";
CalculusOperator.DER_RIGHT_STR = "der+";
CalculusOperator.DERN_STR = "dern";
CalculusOperator.FORW_DIFF_STR = "diff";
CalculusOperator.BACKW_DIFF_STR = "difb";
CalculusOperator.AVG_STR = "avg";
CalculusOperator.VAR_STR = "vari";
CalculusOperator.STD_STR = "stdi";
CalculusOperator.MIN_STR = "mini";
CalculusOperator.MAX_STR = "maxi";
CalculusOperator.SOLVE_STR = "solve";
CalculusOperator.SUM_SYN = "sum( i, from, to, expr , <by> )";
CalculusOperator.PROD_SYN = "prod( i, from, to, expr , <by> )";
CalculusOperator.INT_SYN = "int( expr, arg, from, to )";
CalculusOperator.DER_SYN = "der( expr, arg, <point> )";
CalculusOperator.DER_LEFT_SYN = "der-( expr, arg, <point> )";
CalculusOperator.DER_RIGHT_SYN = "der+( expr, arg, <point> )";
CalculusOperator.DERN_SYN = "dern( expr, n, arg )";
CalculusOperator.FORW_DIFF_SYN = "diff( expr, arg, <delta> )";
CalculusOperator.BACKW_DIFF_SYN = "difb( expr, arg, <delta> )";
CalculusOperator.AVG_SYN = "avg( i, from, to, expr , <by> )";
CalculusOperator.VAR_SYN = "vari( i, from, to, expr , <by> )";
CalculusOperator.STD_SYN = "stdi( i, from, to, expr , <by> )";
CalculusOperator.MIN_SYN = "mini( i, from, to, expr , <by> )";
CalculusOperator.MAX_SYN = "maxi( i, from, to, expr , <by> )";
CalculusOperator.SOLVE_SYN = "solve( expr, arg, from, to )";
CalculusOperator.SUM_DESC = "Summation operator - SIGMA";
CalculusOperator.PROD_DESC = "Product operator - PI";
CalculusOperator.INT_DESC = "Definite integral operator";
CalculusOperator.DER_DESC = "Derivative operator";
CalculusOperator.DER_LEFT_DESC = "Left derivative operator";
CalculusOperator.DER_RIGHT_DESC = "Right derivative operator";
CalculusOperator.DERN_DESC = "n-th derivative operator";
CalculusOperator.FORW_DIFF_DESC = "Forward difference operator";
CalculusOperator.BACKW_DIFF_DESC = "Backward difference operator";
CalculusOperator.AVG_DESC = "Average operator";
CalculusOperator.VAR_DESC = "Bias-corrected sample variance operator";
CalculusOperator.STD_DESC = "Bias-corrected sample standard deviation operator";
CalculusOperator.MIN_DESC = "Minimum value";
CalculusOperator.MAX_DESC = "Maximum value";
CalculusOperator.SOLVE_DESC = "f(x) = 0 equation solving, function root finding";
CalculusOperator["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.CalculusOperator";
//# sourceMappingURL=CalculusOperator.js.map