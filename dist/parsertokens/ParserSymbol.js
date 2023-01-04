"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserSymbol = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Parser symbols - mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class ParserSymbol {
    static INTEGER_$LI$() { if (ParserSymbol.INTEGER == null) {
        ParserSymbol.INTEGER = ParserSymbol.DIGIT + "(" + ParserSymbol.DIGIT + ")*";
    } return ParserSymbol.INTEGER; }
    static DEC_FRACT_$LI$() { if (ParserSymbol.DEC_FRACT == null) {
        ParserSymbol.DEC_FRACT = "(" + ParserSymbol.INTEGER_$LI$() + ")?\\." + ParserSymbol.INTEGER_$LI$();
    } return ParserSymbol.DEC_FRACT; }
    static DEC_FRACT_OR_INT_$LI$() { if (ParserSymbol.DEC_FRACT_OR_INT == null) {
        ParserSymbol.DEC_FRACT_OR_INT = "(" + ParserSymbol.DEC_FRACT_$LI$() + "|" + ParserSymbol.INTEGER_$LI$() + ")";
    } return ParserSymbol.DEC_FRACT_OR_INT; }
    static DECIMAL_REG_EXP_$LI$() { if (ParserSymbol.DECIMAL_REG_EXP == null) {
        ParserSymbol.DECIMAL_REG_EXP = "[+-]?" + ParserSymbol.DEC_FRACT_OR_INT_$LI$() + "([eE][+-]?" + ParserSymbol.INTEGER_$LI$() + ")?";
    } return ParserSymbol.DECIMAL_REG_EXP; }
    static DECIMAL_SCIENTIFIC_REG_EXP_$LI$() { if (ParserSymbol.DECIMAL_SCIENTIFIC_REG_EXP == null) {
        ParserSymbol.DECIMAL_SCIENTIFIC_REG_EXP = "[+-]?" + ParserSymbol.DEC_FRACT_OR_INT_$LI$() + "([eE][+-]?" + ParserSymbol.INTEGER_$LI$() + ")";
    } return ParserSymbol.DECIMAL_SCIENTIFIC_REG_EXP; }
    static BASE1_REG_EXP_$LI$() { if (ParserSymbol.BASE1_REG_EXP == null) {
        ParserSymbol.BASE1_REG_EXP = "[+-]?[bB]1\\.(" + ParserSymbol.DIGIT_B1 + ")*";
    } return ParserSymbol.BASE1_REG_EXP; }
    static BASE2_REG_EXP_$LI$() { if (ParserSymbol.BASE2_REG_EXP == null) {
        ParserSymbol.BASE2_REG_EXP = "[+-]?[bB][2]?\\." + ParserSymbol.DIGIT_B2 + "(" + ParserSymbol.DIGIT_B2 + ")*";
    } return ParserSymbol.BASE2_REG_EXP; }
    static BASE3_REG_EXP_$LI$() { if (ParserSymbol.BASE3_REG_EXP == null) {
        ParserSymbol.BASE3_REG_EXP = "[+-]?[bB]3\\." + ParserSymbol.DIGIT_B3 + "(" + ParserSymbol.DIGIT_B3 + ")*";
    } return ParserSymbol.BASE3_REG_EXP; }
    static BASE4_REG_EXP_$LI$() { if (ParserSymbol.BASE4_REG_EXP == null) {
        ParserSymbol.BASE4_REG_EXP = "[+-]?[bB]4\\." + ParserSymbol.DIGIT_B4 + "(" + ParserSymbol.DIGIT_B4 + ")*";
    } return ParserSymbol.BASE4_REG_EXP; }
    static BASE5_REG_EXP_$LI$() { if (ParserSymbol.BASE5_REG_EXP == null) {
        ParserSymbol.BASE5_REG_EXP = "[+-]?[bB]5\\." + ParserSymbol.DIGIT_B5 + "(" + ParserSymbol.DIGIT_B5 + ")*";
    } return ParserSymbol.BASE5_REG_EXP; }
    static BASE6_REG_EXP_$LI$() { if (ParserSymbol.BASE6_REG_EXP == null) {
        ParserSymbol.BASE6_REG_EXP = "[+-]?[bB]6\\." + ParserSymbol.DIGIT_B6 + "(" + ParserSymbol.DIGIT_B6 + ")*";
    } return ParserSymbol.BASE6_REG_EXP; }
    static BASE7_REG_EXP_$LI$() { if (ParserSymbol.BASE7_REG_EXP == null) {
        ParserSymbol.BASE7_REG_EXP = "[+-]?[bB]7\\." + ParserSymbol.DIGIT_B7 + "(" + ParserSymbol.DIGIT_B7 + ")*";
    } return ParserSymbol.BASE7_REG_EXP; }
    static BASE8_REG_EXP_$LI$() { if (ParserSymbol.BASE8_REG_EXP == null) {
        ParserSymbol.BASE8_REG_EXP = "[+-]?([bB]8|[oO])\\." + ParserSymbol.DIGIT_B8 + "(" + ParserSymbol.DIGIT_B8 + ")*";
    } return ParserSymbol.BASE8_REG_EXP; }
    static BASE9_REG_EXP_$LI$() { if (ParserSymbol.BASE9_REG_EXP == null) {
        ParserSymbol.BASE9_REG_EXP = "[+-]?[bB]9\\." + ParserSymbol.DIGIT_B9 + "(" + ParserSymbol.DIGIT_B9 + ")*";
    } return ParserSymbol.BASE9_REG_EXP; }
    static BASE10_REG_EXP_$LI$() { if (ParserSymbol.BASE10_REG_EXP == null) {
        ParserSymbol.BASE10_REG_EXP = "[+-]?[bB]10\\." + ParserSymbol.DIGIT_B10 + "(" + ParserSymbol.DIGIT_B10 + ")*";
    } return ParserSymbol.BASE10_REG_EXP; }
    static BASE11_REG_EXP_$LI$() { if (ParserSymbol.BASE11_REG_EXP == null) {
        ParserSymbol.BASE11_REG_EXP = "[+-]?[bB]11\\." + ParserSymbol.DIGIT_B11 + "(" + ParserSymbol.DIGIT_B11 + ")*";
    } return ParserSymbol.BASE11_REG_EXP; }
    static BASE12_REG_EXP_$LI$() { if (ParserSymbol.BASE12_REG_EXP == null) {
        ParserSymbol.BASE12_REG_EXP = "[+-]?[bB]12\\." + ParserSymbol.DIGIT_B12 + "(" + ParserSymbol.DIGIT_B12 + ")*";
    } return ParserSymbol.BASE12_REG_EXP; }
    static BASE13_REG_EXP_$LI$() { if (ParserSymbol.BASE13_REG_EXP == null) {
        ParserSymbol.BASE13_REG_EXP = "[+-]?[bB]13\\." + ParserSymbol.DIGIT_B13 + "(" + ParserSymbol.DIGIT_B13 + ")*";
    } return ParserSymbol.BASE13_REG_EXP; }
    static BASE14_REG_EXP_$LI$() { if (ParserSymbol.BASE14_REG_EXP == null) {
        ParserSymbol.BASE14_REG_EXP = "[+-]?[bB]14\\." + ParserSymbol.DIGIT_B14 + "(" + ParserSymbol.DIGIT_B14 + ")*";
    } return ParserSymbol.BASE14_REG_EXP; }
    static BASE15_REG_EXP_$LI$() { if (ParserSymbol.BASE15_REG_EXP == null) {
        ParserSymbol.BASE15_REG_EXP = "[+-]?[bB]15\\." + ParserSymbol.DIGIT_B15 + "(" + ParserSymbol.DIGIT_B15 + ")*";
    } return ParserSymbol.BASE15_REG_EXP; }
    static BASE16_REG_EXP_$LI$() { if (ParserSymbol.BASE16_REG_EXP == null) {
        ParserSymbol.BASE16_REG_EXP = "[+-]?([bB]16|[hH])\\." + ParserSymbol.DIGIT_B16 + "(" + ParserSymbol.DIGIT_B16 + ")*";
    } return ParserSymbol.BASE16_REG_EXP; }
    static BASE17_REG_EXP_$LI$() { if (ParserSymbol.BASE17_REG_EXP == null) {
        ParserSymbol.BASE17_REG_EXP = "[+-]?[bB]17\\." + ParserSymbol.DIGIT_B17 + "(" + ParserSymbol.DIGIT_B17 + ")*";
    } return ParserSymbol.BASE17_REG_EXP; }
    static BASE18_REG_EXP_$LI$() { if (ParserSymbol.BASE18_REG_EXP == null) {
        ParserSymbol.BASE18_REG_EXP = "[+-]?[bB]18\\." + ParserSymbol.DIGIT_B18 + "(" + ParserSymbol.DIGIT_B18 + ")*";
    } return ParserSymbol.BASE18_REG_EXP; }
    static BASE19_REG_EXP_$LI$() { if (ParserSymbol.BASE19_REG_EXP == null) {
        ParserSymbol.BASE19_REG_EXP = "[+-]?[bB]19\\." + ParserSymbol.DIGIT_B19 + "(" + ParserSymbol.DIGIT_B19 + ")*";
    } return ParserSymbol.BASE19_REG_EXP; }
    static BASE20_REG_EXP_$LI$() { if (ParserSymbol.BASE20_REG_EXP == null) {
        ParserSymbol.BASE20_REG_EXP = "[+-]?[bB]20\\." + ParserSymbol.DIGIT_B20 + "(" + ParserSymbol.DIGIT_B20 + ")*";
    } return ParserSymbol.BASE20_REG_EXP; }
    static BASE21_REG_EXP_$LI$() { if (ParserSymbol.BASE21_REG_EXP == null) {
        ParserSymbol.BASE21_REG_EXP = "[+-]?[bB]21\\." + ParserSymbol.DIGIT_B21 + "(" + ParserSymbol.DIGIT_B21 + ")*";
    } return ParserSymbol.BASE21_REG_EXP; }
    static BASE22_REG_EXP_$LI$() { if (ParserSymbol.BASE22_REG_EXP == null) {
        ParserSymbol.BASE22_REG_EXP = "[+-]?[bB]22\\." + ParserSymbol.DIGIT_B22 + "(" + ParserSymbol.DIGIT_B22 + ")*";
    } return ParserSymbol.BASE22_REG_EXP; }
    static BASE23_REG_EXP_$LI$() { if (ParserSymbol.BASE23_REG_EXP == null) {
        ParserSymbol.BASE23_REG_EXP = "[+-]?[bB]23\\." + ParserSymbol.DIGIT_B23 + "(" + ParserSymbol.DIGIT_B23 + ")*";
    } return ParserSymbol.BASE23_REG_EXP; }
    static BASE24_REG_EXP_$LI$() { if (ParserSymbol.BASE24_REG_EXP == null) {
        ParserSymbol.BASE24_REG_EXP = "[+-]?[bB]24\\." + ParserSymbol.DIGIT_B24 + "(" + ParserSymbol.DIGIT_B24 + ")*";
    } return ParserSymbol.BASE24_REG_EXP; }
    static BASE25_REG_EXP_$LI$() { if (ParserSymbol.BASE25_REG_EXP == null) {
        ParserSymbol.BASE25_REG_EXP = "[+-]?[bB]25\\." + ParserSymbol.DIGIT_B25 + "(" + ParserSymbol.DIGIT_B25 + ")*";
    } return ParserSymbol.BASE25_REG_EXP; }
    static BASE26_REG_EXP_$LI$() { if (ParserSymbol.BASE26_REG_EXP == null) {
        ParserSymbol.BASE26_REG_EXP = "[+-]?[bB]26\\." + ParserSymbol.DIGIT_B26 + "(" + ParserSymbol.DIGIT_B26 + ")*";
    } return ParserSymbol.BASE26_REG_EXP; }
    static BASE27_REG_EXP_$LI$() { if (ParserSymbol.BASE27_REG_EXP == null) {
        ParserSymbol.BASE27_REG_EXP = "[+-]?[bB]27\\." + ParserSymbol.DIGIT_B27 + "(" + ParserSymbol.DIGIT_B27 + ")*";
    } return ParserSymbol.BASE27_REG_EXP; }
    static BASE28_REG_EXP_$LI$() { if (ParserSymbol.BASE28_REG_EXP == null) {
        ParserSymbol.BASE28_REG_EXP = "[+-]?[bB]28\\." + ParserSymbol.DIGIT_B28 + "(" + ParserSymbol.DIGIT_B28 + ")*";
    } return ParserSymbol.BASE28_REG_EXP; }
    static BASE29_REG_EXP_$LI$() { if (ParserSymbol.BASE29_REG_EXP == null) {
        ParserSymbol.BASE29_REG_EXP = "[+-]?[bB]29\\." + ParserSymbol.DIGIT_B29 + "(" + ParserSymbol.DIGIT_B29 + ")*";
    } return ParserSymbol.BASE29_REG_EXP; }
    static BASE30_REG_EXP_$LI$() { if (ParserSymbol.BASE30_REG_EXP == null) {
        ParserSymbol.BASE30_REG_EXP = "[+-]?[bB]30\\." + ParserSymbol.DIGIT_B30 + "(" + ParserSymbol.DIGIT_B30 + ")*";
    } return ParserSymbol.BASE30_REG_EXP; }
    static BASE31_REG_EXP_$LI$() { if (ParserSymbol.BASE31_REG_EXP == null) {
        ParserSymbol.BASE31_REG_EXP = "[+-]?[bB]31\\." + ParserSymbol.DIGIT_B31 + "(" + ParserSymbol.DIGIT_B31 + ")*";
    } return ParserSymbol.BASE31_REG_EXP; }
    static BASE32_REG_EXP_$LI$() { if (ParserSymbol.BASE32_REG_EXP == null) {
        ParserSymbol.BASE32_REG_EXP = "[+-]?[bB]32\\." + ParserSymbol.DIGIT_B32 + "(" + ParserSymbol.DIGIT_B32 + ")*";
    } return ParserSymbol.BASE32_REG_EXP; }
    static BASE33_REG_EXP_$LI$() { if (ParserSymbol.BASE33_REG_EXP == null) {
        ParserSymbol.BASE33_REG_EXP = "[+-]?[bB]33\\." + ParserSymbol.DIGIT_B33 + "(" + ParserSymbol.DIGIT_B33 + ")*";
    } return ParserSymbol.BASE33_REG_EXP; }
    static BASE34_REG_EXP_$LI$() { if (ParserSymbol.BASE34_REG_EXP == null) {
        ParserSymbol.BASE34_REG_EXP = "[+-]?[bB]34\\." + ParserSymbol.DIGIT_B34 + "(" + ParserSymbol.DIGIT_B34 + ")*";
    } return ParserSymbol.BASE34_REG_EXP; }
    static BASE35_REG_EXP_$LI$() { if (ParserSymbol.BASE35_REG_EXP == null) {
        ParserSymbol.BASE35_REG_EXP = "[+-]?[bB]35\\." + ParserSymbol.DIGIT_B35 + "(" + ParserSymbol.DIGIT_B35 + ")*";
    } return ParserSymbol.BASE35_REG_EXP; }
    static BASE36_REG_EXP_$LI$() { if (ParserSymbol.BASE36_REG_EXP == null) {
        ParserSymbol.BASE36_REG_EXP = "[+-]?[bB]36\\." + ParserSymbol.DIGIT_B36 + "(" + ParserSymbol.DIGIT_B36 + ")*";
    } return ParserSymbol.BASE36_REG_EXP; }
    static FRACTION_$LI$() { if (ParserSymbol.FRACTION == null) {
        ParserSymbol.FRACTION = "(" + ParserSymbol.INTEGER_$LI$() + "\\_)?" + ParserSymbol.INTEGER_$LI$() + "\\_" + ParserSymbol.INTEGER_$LI$();
    } return ParserSymbol.FRACTION; }
    static unitOnlyTokenRegExp_$LI$() { if (ParserSymbol.unitOnlyTokenRegExp == null) {
        ParserSymbol.unitOnlyTokenRegExp = "\\[" + ParserSymbol.nameOnlyTokenRegExp + "\\]";
    } return ParserSymbol.unitOnlyTokenRegExp; }
    static nameOnlyTokenOptBracketsRegExp_$LI$() { if (ParserSymbol.nameOnlyTokenOptBracketsRegExp == null) {
        ParserSymbol.nameOnlyTokenOptBracketsRegExp = "(" + ParserSymbol.nameOnlyTokenRegExp + "|" + ParserSymbol.unitOnlyTokenRegExp_$LI$() + ")";
    } return ParserSymbol.nameOnlyTokenOptBracketsRegExp; }
    static nameTokenRegExp_$LI$() { if (ParserSymbol.nameTokenRegExp == null) {
        ParserSymbol.nameTokenRegExp = "(\\s)*" + ParserSymbol.nameOnlyTokenRegExp + "(\\s)*";
    } return ParserSymbol.nameTokenRegExp; }
    static nameTokenOptBracketsRegExp_$LI$() { if (ParserSymbol.nameTokenOptBracketsRegExp == null) {
        ParserSymbol.nameTokenOptBracketsRegExp = "(\\s)*" + ParserSymbol.nameOnlyTokenOptBracketsRegExp_$LI$() + "(\\s)*";
    } return ParserSymbol.nameTokenOptBracketsRegExp; }
    static paramsTokenRegeExp_$LI$() { if (ParserSymbol.paramsTokenRegeExp == null) {
        ParserSymbol.paramsTokenRegeExp = "(\\s)*\\((" + ParserSymbol.nameTokenRegExp_$LI$() + ",(\\s)*)*" + ParserSymbol.nameTokenRegExp_$LI$() + "\\)(\\s)*";
    } return ParserSymbol.paramsTokenRegeExp; }
    static constArgDefStrRegExp_$LI$() { if (ParserSymbol.constArgDefStrRegExp == null) {
        ParserSymbol.constArgDefStrRegExp = ParserSymbol.nameTokenRegExp_$LI$() + "=(\\s)*(.)+(\\s)*";
    } return ParserSymbol.constArgDefStrRegExp; }
    static constUnitgDefStrRegExp_$LI$() { if (ParserSymbol.constUnitgDefStrRegExp == null) {
        ParserSymbol.constUnitgDefStrRegExp = ParserSymbol.nameTokenOptBracketsRegExp_$LI$() + "=(\\s)*(.)+(\\s)*";
    } return ParserSymbol.constUnitgDefStrRegExp; }
    static functionDefStrRegExp_$LI$() { if (ParserSymbol.functionDefStrRegExp == null) {
        ParserSymbol.functionDefStrRegExp = ParserSymbol.nameTokenRegExp_$LI$() + ParserSymbol.paramsTokenRegeExp_$LI$() + "=(\\s)*(.)+(\\s)*";
    } return ParserSymbol.functionDefStrRegExp; }
    static function1ArgDefStrRegExp_$LI$() { if (ParserSymbol.function1ArgDefStrRegExp == null) {
        ParserSymbol.function1ArgDefStrRegExp = ParserSymbol.nameTokenRegExp_$LI$() + "(\\s)*\\(" + ParserSymbol.nameTokenRegExp_$LI$() + "(\\s)*\\)(\\s)*=(\\s)*(.)+(\\s)*";
    } return ParserSymbol.function1ArgDefStrRegExp; }
    static functionVariadicDefStrRegExp_$LI$() { if (ParserSymbol.functionVariadicDefStrRegExp == null) {
        ParserSymbol.functionVariadicDefStrRegExp = ParserSymbol.nameTokenRegExp_$LI$() + "(\\s)*\\((\\s)*\\.\\.\\.(\\s)*\\)(\\s)*=(\\s)*(.)+(\\s)*";
    } return ParserSymbol.functionVariadicDefStrRegExp; }
    static LEFT_PARENTHESES_SINCE_$LI$() { if (ParserSymbol.LEFT_PARENTHESES_SINCE == null) {
        ParserSymbol.LEFT_PARENTHESES_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ParserSymbol.LEFT_PARENTHESES_SINCE; }
    static RIGHT_PARENTHESES_SINCE_$LI$() { if (ParserSymbol.RIGHT_PARENTHESES_SINCE == null) {
        ParserSymbol.RIGHT_PARENTHESES_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ParserSymbol.RIGHT_PARENTHESES_SINCE; }
    static COMMA_SINCE_$LI$() { if (ParserSymbol.COMMA_SINCE == null) {
        ParserSymbol.COMMA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ParserSymbol.COMMA_SINCE; }
    static SEMI_SINCE_$LI$() { if (ParserSymbol.SEMI_SINCE == null) {
        ParserSymbol.SEMI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ParserSymbol.SEMI_SINCE; }
    static BLANK_SINCE_$LI$() { if (ParserSymbol.BLANK_SINCE == null) {
        ParserSymbol.BLANK_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return ParserSymbol.BLANK_SINCE; }
    static NUMBER_SINCE_$LI$() { if (ParserSymbol.NUMBER_SINCE == null) {
        ParserSymbol.NUMBER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ParserSymbol.NUMBER_SINCE; }
}
exports.ParserSymbol = ParserSymbol;
ParserSymbol.DIGIT = "[0-9]";
ParserSymbol.DIGIT_B1 = "1";
ParserSymbol.DIGIT_B2 = "[01]";
ParserSymbol.DIGIT_B3 = "[0-2]";
ParserSymbol.DIGIT_B4 = "[0-3]";
ParserSymbol.DIGIT_B5 = "[0-4]";
ParserSymbol.DIGIT_B6 = "[0-5]";
ParserSymbol.DIGIT_B7 = "[0-6]";
ParserSymbol.DIGIT_B8 = "[0-7]";
ParserSymbol.DIGIT_B9 = "[0-8]";
ParserSymbol.DIGIT_B10 = "[0-9]";
ParserSymbol.DIGIT_B11 = "[0-9aA]";
ParserSymbol.DIGIT_B12 = "[0-9a-bA-B]";
ParserSymbol.DIGIT_B13 = "[0-9a-cA-C]";
ParserSymbol.DIGIT_B14 = "[0-9a-dA-D]";
ParserSymbol.DIGIT_B15 = "[0-9a-eA-E]";
ParserSymbol.DIGIT_B16 = "[0-9a-fA-F]";
ParserSymbol.DIGIT_B17 = "[0-9a-gA-G]";
ParserSymbol.DIGIT_B18 = "[0-9a-hA-H]";
ParserSymbol.DIGIT_B19 = "[0-9a-iA-I]";
ParserSymbol.DIGIT_B20 = "[0-9a-jA-J]";
ParserSymbol.DIGIT_B21 = "[0-9a-kA-K]";
ParserSymbol.DIGIT_B22 = "[0-9a-lA-L]";
ParserSymbol.DIGIT_B23 = "[0-9a-mA-M]";
ParserSymbol.DIGIT_B24 = "[0-9a-nA-N]";
ParserSymbol.DIGIT_B25 = "[0-9a-oA-O]";
ParserSymbol.DIGIT_B26 = "[0-9a-pA-P]";
ParserSymbol.DIGIT_B27 = "[0-9a-qA-Q]";
ParserSymbol.DIGIT_B28 = "[0-9a-rA-R]";
ParserSymbol.DIGIT_B29 = "[0-9a-sA-S]";
ParserSymbol.DIGIT_B30 = "[0-9a-tA-T]";
ParserSymbol.DIGIT_B31 = "[0-9a-uA-U]";
ParserSymbol.DIGIT_B32 = "[0-9a-vA-V]";
ParserSymbol.DIGIT_B33 = "[0-9a-wA-W]";
ParserSymbol.DIGIT_B34 = "[0-9a-xA-X]";
ParserSymbol.DIGIT_B35 = "[0-9a-yA-Y]";
ParserSymbol.DIGIT_B36 = "[0-9a-zA-Z]";
ParserSymbol.nameOnlyTokenRegExp = "([a-zA-Z_])+([a-zA-Z0-9_])*";
ParserSymbol.TYPE_ID = 20;
ParserSymbol.TYPE_DESC = "Parser Symbol";
ParserSymbol.LEFT_PARENTHESES_ID = 1;
ParserSymbol.RIGHT_PARENTHESES_ID = 2;
ParserSymbol.COMMA_ID = 3;
ParserSymbol.BLANK_ID = 4;
ParserSymbol.NUMBER_ID = 1;
ParserSymbol.NUMBER_TYPE_ID = 0;
ParserSymbol.LEFT_PARENTHESES_STR = "(";
ParserSymbol.RIGHT_PARENTHESES_STR = ")";
ParserSymbol.COMMA_STR = ",";
ParserSymbol.SEMI_STR = ";";
ParserSymbol.BLANK_STR = " ";
ParserSymbol.NUMBER_STR = "_num_";
ParserSymbol.LEFT_PARENTHESES_SYN = "( ... )";
ParserSymbol.RIGHT_PARENTHESES_SYN = "( ... )";
ParserSymbol.COMMA_SYN = "(a1, ... ,an)";
ParserSymbol.SEMI_SYN = "(a1; ... ;an)";
ParserSymbol.BLANK_SYN = " ";
ParserSymbol.NUMBER_SYN = "Integer (since v.1.0): 1, -2; Decimal (since v.1.0): 0.2, -0.3, 1.2; Leading zero (since v.4.1): 001, -002.1; Scientific notation (since v.4.2): 1.2e-10, 1.2e+10, 2.3e10; No leading zero (since v.4.2): .2, -.212; Fractions (since v.4.2): 1_2, 2_1_3, 14_3; Other systems (since v.4.1): b1.111, b2.1001, b3.12021, b16.af12, h.af1, b.1001, o.0127";
ParserSymbol.LEFT_PARENTHESES_DESC = "Left parentheses";
ParserSymbol.RIGHT_PARENTHESES_DESC = "Right parentheses";
ParserSymbol.COMMA_DESC = "Comma (function parameters)";
ParserSymbol.SEMI_DESC = "Semicolon (function parameters)";
ParserSymbol.BLANK_DESC = "Blank (whitespace) character";
ParserSymbol.NUMBER_DESC = "Decimal number";
ParserSymbol.NUMBER_REG_DESC = "Regullar expression for decimal numbers";
ParserSymbol["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.ParserSymbol";
//# sourceMappingURL=ParserSymbol.js.map