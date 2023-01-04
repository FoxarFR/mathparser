"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxCheckerConstants = void 0;
var SyntaxCheckerConstants;
(function (SyntaxCheckerConstants) {
    /**
     * End of File.
     */
    SyntaxCheckerConstants.EOF = 0;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.WHITESPACE = 5;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.LETTER = 6;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT = 7;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B1 = 8;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B2 = 9;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B3 = 10;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B4 = 11;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B5 = 12;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B6 = 13;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B7 = 14;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B8 = 15;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B9 = 16;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B10 = 17;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B11 = 18;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B12 = 19;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B13 = 20;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B14 = 21;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B15 = 22;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B16 = 23;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B17 = 24;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B18 = 25;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B19 = 26;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B20 = 27;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B21 = 28;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B22 = 29;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B23 = 30;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B24 = 31;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B25 = 32;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B26 = 33;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B27 = 34;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B28 = 35;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B29 = 36;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B30 = 37;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B31 = 38;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B32 = 39;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B33 = 40;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B34 = 41;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B35 = 42;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIGIT_B36 = 43;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.LETTERS = 44;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.INTEGER = 45;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.LEFT_PAR = 46;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.RIGHT_PAR = 47;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.PLUS = 48;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.MINUS = 49;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.MULTIPLY = 50;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DIV = 51;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.POWER = 52;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.TETRATION = 53;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.MODULO = 54;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.FACTORIAL = 55;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.PERCENTAGE = 56;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.COMMA = 57;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.SEMICOLON = 58;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.EQ = 59;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.UNIT = 60;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.NEQ = 61;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.LT = 62;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.LEQ = 63;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.GT = 64;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.GEQ = 65;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.OR = 66;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.AND = 67;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.NOT = 68;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BITNOT = 69;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.IMP = 70;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.CIMP = 71;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.NIMP = 72;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.CNIMP = 73;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.NAND = 74;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.EQV = 75;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.NOR = 76;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BITWISE = 77;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.XOR = 78;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.CHAR = 79;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DEC_FRACT = 80;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DEC_FRACT_OR_INT = 81;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.DECIMAL = 82;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE1 = 83;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE2 = 84;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE3 = 85;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE4 = 86;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE5 = 87;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE6 = 88;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE7 = 89;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE8 = 90;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE9 = 91;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE10 = 92;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE11 = 93;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE12 = 94;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE13 = 95;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE14 = 96;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE15 = 97;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE16 = 98;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE17 = 99;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE18 = 100;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE19 = 101;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE20 = 102;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE21 = 103;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE22 = 104;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE23 = 105;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE24 = 106;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE25 = 107;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE26 = 108;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE27 = 109;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE28 = 110;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE29 = 111;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE30 = 112;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE31 = 113;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE32 = 114;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE33 = 115;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE34 = 116;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE35 = 117;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BASE36 = 118;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.BINARY = 119;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.OCTAL = 120;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.HEXADECIMAL = 121;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.FRACTION = 122;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.IDENTIFIER = 123;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.FUNCTION = 124;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.INVALID_TOKEN = 127;
    /**
     * RegularExpression Id.
     */
    SyntaxCheckerConstants.UNEXPECTED_CHAR = 128;
    /**
     * Lexical state.
     */
    SyntaxCheckerConstants.DEFAULT = 0;
    /**
     * Literal token values.
     */
    SyntaxCheckerConstants.tokenImage = ["<EOF>", "\" \"", "\"\\t\"", "\"\\n\"", "\"\\r\"", "<WHITESPACE>", "<LETTER>", "<DIGIT>", "\"1\"", "<DIGIT_B2>", "<DIGIT_B3>", "<DIGIT_B4>", "<DIGIT_B5>", "<DIGIT_B6>", "<DIGIT_B7>", "<DIGIT_B8>", "<DIGIT_B9>", "<DIGIT_B10>", "<DIGIT_B11>", "<DIGIT_B12>", "<DIGIT_B13>", "<DIGIT_B14>", "<DIGIT_B15>", "<DIGIT_B16>", "<DIGIT_B17>", "<DIGIT_B18>", "<DIGIT_B19>", "<DIGIT_B20>", "<DIGIT_B21>", "<DIGIT_B22>", "<DIGIT_B23>", "<DIGIT_B24>", "<DIGIT_B25>", "<DIGIT_B26>", "<DIGIT_B27>", "<DIGIT_B28>", "<DIGIT_B29>", "<DIGIT_B30>", "<DIGIT_B31>", "<DIGIT_B32>", "<DIGIT_B33>", "<DIGIT_B34>", "<DIGIT_B35>", "<DIGIT_B36>", "<LETTERS>", "<INTEGER>", "\"(\"", "\")\"", "\"+\"", "\"-\"", "\"*\"", "\"/\"", "\"^\"", "\"^^\"", "\"#\"", "\"!\"", "\"%\"", "\",\"", "\";\"", "<EQ>", "<UNIT>", "<NEQ>", "\"<\"", "\"<=\"", "\">\"", "\">=\"", "<OR>", "<AND>", "\"~\"", "\"@~\"", "\"-->\"", "\"<--\"", "\"-/>\"", "\"</-\"", "<NAND>", "\"<->\"", "<NOR>", "<BITWISE>", "\"(+)\"", "<CHAR>", "<DEC_FRACT>", "<DEC_FRACT_OR_INT>", "<DECIMAL>", "<BASE1>", "<BASE2>", "<BASE3>", "<BASE4>", "<BASE5>", "<BASE6>", "<BASE7>", "<BASE8>", "<BASE9>", "<BASE10>", "<BASE11>", "<BASE12>", "<BASE13>", "<BASE14>", "<BASE15>", "<BASE16>", "<BASE17>", "<BASE18>", "<BASE19>", "<BASE20>", "<BASE21>", "<BASE22>", "<BASE23>", "<BASE24>", "<BASE25>", "<BASE26>", "<BASE27>", "<BASE28>", "<BASE29>", "<BASE30>", "<BASE31>", "<BASE32>", "<BASE33>", "<BASE34>", "<BASE35>", "<BASE36>", "<BINARY>", "<OCTAL>", "<HEXADECIMAL>", "<FRACTION>", "<IDENTIFIER>", "<FUNCTION>", "\"[\"", "\"]\"", "<INVALID_TOKEN>", "<UNEXPECTED_CHAR>"];
})(SyntaxCheckerConstants = exports.SyntaxCheckerConstants || (exports.SyntaxCheckerConstants = {}));
//# sourceMappingURL=SyntaxCheckerConstants.js.map