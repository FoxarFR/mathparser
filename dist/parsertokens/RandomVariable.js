"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomVariable = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Random variables - mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.1.0
 * @class
 */
class RandomVariable {
    static UNIFORM_SYN_$LI$() { if (RandomVariable.UNIFORM_SYN == null) {
        RandomVariable.UNIFORM_SYN = RandomVariable.UNIFORM_STR;
    } return RandomVariable.UNIFORM_SYN; }
    static INT_SYN_$LI$() { if (RandomVariable.INT_SYN == null) {
        RandomVariable.INT_SYN = RandomVariable.INT_STR;
    } return RandomVariable.INT_SYN; }
    static INT1_SYN_$LI$() { if (RandomVariable.INT1_SYN == null) {
        RandomVariable.INT1_SYN = RandomVariable.INT1_STR;
    } return RandomVariable.INT1_SYN; }
    static INT2_SYN_$LI$() { if (RandomVariable.INT2_SYN == null) {
        RandomVariable.INT2_SYN = RandomVariable.INT2_STR;
    } return RandomVariable.INT2_SYN; }
    static INT3_SYN_$LI$() { if (RandomVariable.INT3_SYN == null) {
        RandomVariable.INT3_SYN = RandomVariable.INT3_STR;
    } return RandomVariable.INT3_SYN; }
    static INT4_SYN_$LI$() { if (RandomVariable.INT4_SYN == null) {
        RandomVariable.INT4_SYN = RandomVariable.INT4_STR;
    } return RandomVariable.INT4_SYN; }
    static INT5_SYN_$LI$() { if (RandomVariable.INT5_SYN == null) {
        RandomVariable.INT5_SYN = RandomVariable.INT5_STR;
    } return RandomVariable.INT5_SYN; }
    static INT6_SYN_$LI$() { if (RandomVariable.INT6_SYN == null) {
        RandomVariable.INT6_SYN = RandomVariable.INT6_STR;
    } return RandomVariable.INT6_SYN; }
    static INT7_SYN_$LI$() { if (RandomVariable.INT7_SYN == null) {
        RandomVariable.INT7_SYN = RandomVariable.INT7_STR;
    } return RandomVariable.INT7_SYN; }
    static INT8_SYN_$LI$() { if (RandomVariable.INT8_SYN == null) {
        RandomVariable.INT8_SYN = RandomVariable.INT8_STR;
    } return RandomVariable.INT8_SYN; }
    static INT9_SYN_$LI$() { if (RandomVariable.INT9_SYN == null) {
        RandomVariable.INT9_SYN = RandomVariable.INT9_STR;
    } return RandomVariable.INT9_SYN; }
    static NAT0_SYN_$LI$() { if (RandomVariable.NAT0_SYN == null) {
        RandomVariable.NAT0_SYN = RandomVariable.NAT0_STR;
    } return RandomVariable.NAT0_SYN; }
    static NAT0_1_SYN_$LI$() { if (RandomVariable.NAT0_1_SYN == null) {
        RandomVariable.NAT0_1_SYN = RandomVariable.NAT0_1_STR;
    } return RandomVariable.NAT0_1_SYN; }
    static NAT0_2_SYN_$LI$() { if (RandomVariable.NAT0_2_SYN == null) {
        RandomVariable.NAT0_2_SYN = RandomVariable.NAT0_2_STR;
    } return RandomVariable.NAT0_2_SYN; }
    static NAT0_3_SYN_$LI$() { if (RandomVariable.NAT0_3_SYN == null) {
        RandomVariable.NAT0_3_SYN = RandomVariable.NAT0_3_STR;
    } return RandomVariable.NAT0_3_SYN; }
    static NAT0_4_SYN_$LI$() { if (RandomVariable.NAT0_4_SYN == null) {
        RandomVariable.NAT0_4_SYN = RandomVariable.NAT0_4_STR;
    } return RandomVariable.NAT0_4_SYN; }
    static NAT0_5_SYN_$LI$() { if (RandomVariable.NAT0_5_SYN == null) {
        RandomVariable.NAT0_5_SYN = RandomVariable.NAT0_5_STR;
    } return RandomVariable.NAT0_5_SYN; }
    static NAT0_6_SYN_$LI$() { if (RandomVariable.NAT0_6_SYN == null) {
        RandomVariable.NAT0_6_SYN = RandomVariable.NAT0_6_STR;
    } return RandomVariable.NAT0_6_SYN; }
    static NAT0_7_SYN_$LI$() { if (RandomVariable.NAT0_7_SYN == null) {
        RandomVariable.NAT0_7_SYN = RandomVariable.NAT0_7_STR;
    } return RandomVariable.NAT0_7_SYN; }
    static NAT0_8_SYN_$LI$() { if (RandomVariable.NAT0_8_SYN == null) {
        RandomVariable.NAT0_8_SYN = RandomVariable.NAT0_8_STR;
    } return RandomVariable.NAT0_8_SYN; }
    static NAT0_9_SYN_$LI$() { if (RandomVariable.NAT0_9_SYN == null) {
        RandomVariable.NAT0_9_SYN = RandomVariable.NAT0_9_STR;
    } return RandomVariable.NAT0_9_SYN; }
    static NAT1_SYN_$LI$() { if (RandomVariable.NAT1_SYN == null) {
        RandomVariable.NAT1_SYN = RandomVariable.NAT1_STR;
    } return RandomVariable.NAT1_SYN; }
    static NAT1_1_SYN_$LI$() { if (RandomVariable.NAT1_1_SYN == null) {
        RandomVariable.NAT1_1_SYN = RandomVariable.NAT1_1_STR;
    } return RandomVariable.NAT1_1_SYN; }
    static NAT1_2_SYN_$LI$() { if (RandomVariable.NAT1_2_SYN == null) {
        RandomVariable.NAT1_2_SYN = RandomVariable.NAT1_2_STR;
    } return RandomVariable.NAT1_2_SYN; }
    static NAT1_3_SYN_$LI$() { if (RandomVariable.NAT1_3_SYN == null) {
        RandomVariable.NAT1_3_SYN = RandomVariable.NAT1_3_STR;
    } return RandomVariable.NAT1_3_SYN; }
    static NAT1_4_SYN_$LI$() { if (RandomVariable.NAT1_4_SYN == null) {
        RandomVariable.NAT1_4_SYN = RandomVariable.NAT1_4_STR;
    } return RandomVariable.NAT1_4_SYN; }
    static NAT1_5_SYN_$LI$() { if (RandomVariable.NAT1_5_SYN == null) {
        RandomVariable.NAT1_5_SYN = RandomVariable.NAT1_5_STR;
    } return RandomVariable.NAT1_5_SYN; }
    static NAT1_6_SYN_$LI$() { if (RandomVariable.NAT1_6_SYN == null) {
        RandomVariable.NAT1_6_SYN = RandomVariable.NAT1_6_STR;
    } return RandomVariable.NAT1_6_SYN; }
    static NAT1_7_SYN_$LI$() { if (RandomVariable.NAT1_7_SYN == null) {
        RandomVariable.NAT1_7_SYN = RandomVariable.NAT1_7_STR;
    } return RandomVariable.NAT1_7_SYN; }
    static NAT1_8_SYN_$LI$() { if (RandomVariable.NAT1_8_SYN == null) {
        RandomVariable.NAT1_8_SYN = RandomVariable.NAT1_8_STR;
    } return RandomVariable.NAT1_8_SYN; }
    static NAT1_9_SYN_$LI$() { if (RandomVariable.NAT1_9_SYN == null) {
        RandomVariable.NAT1_9_SYN = RandomVariable.NAT1_9_STR;
    } return RandomVariable.NAT1_9_SYN; }
    static NOR_SYN_$LI$() { if (RandomVariable.NOR_SYN == null) {
        RandomVariable.NOR_SYN = RandomVariable.NOR_STR;
    } return RandomVariable.NOR_SYN; }
    static UNIFORM_SINCE_$LI$() { if (RandomVariable.UNIFORM_SINCE == null) {
        RandomVariable.UNIFORM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.UNIFORM_SINCE; }
    static INT_SINCE_$LI$() { if (RandomVariable.INT_SINCE == null) {
        RandomVariable.INT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT_SINCE; }
    static INT1_SINCE_$LI$() { if (RandomVariable.INT1_SINCE == null) {
        RandomVariable.INT1_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT1_SINCE; }
    static INT2_SINCE_$LI$() { if (RandomVariable.INT2_SINCE == null) {
        RandomVariable.INT2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT2_SINCE; }
    static INT3_SINCE_$LI$() { if (RandomVariable.INT3_SINCE == null) {
        RandomVariable.INT3_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT3_SINCE; }
    static INT4_SINCE_$LI$() { if (RandomVariable.INT4_SINCE == null) {
        RandomVariable.INT4_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT4_SINCE; }
    static INT5_SINCE_$LI$() { if (RandomVariable.INT5_SINCE == null) {
        RandomVariable.INT5_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT5_SINCE; }
    static INT6_SINCE_$LI$() { if (RandomVariable.INT6_SINCE == null) {
        RandomVariable.INT6_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT6_SINCE; }
    static INT7_SINCE_$LI$() { if (RandomVariable.INT7_SINCE == null) {
        RandomVariable.INT7_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT7_SINCE; }
    static INT8_SINCE_$LI$() { if (RandomVariable.INT8_SINCE == null) {
        RandomVariable.INT8_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT8_SINCE; }
    static INT9_SINCE_$LI$() { if (RandomVariable.INT9_SINCE == null) {
        RandomVariable.INT9_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.INT9_SINCE; }
    static NAT0_SINCE_$LI$() { if (RandomVariable.NAT0_SINCE == null) {
        RandomVariable.NAT0_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_SINCE; }
    static NAT0_1_SINCE_$LI$() { if (RandomVariable.NAT0_1_SINCE == null) {
        RandomVariable.NAT0_1_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_1_SINCE; }
    static NAT0_2_SINCE_$LI$() { if (RandomVariable.NAT0_2_SINCE == null) {
        RandomVariable.NAT0_2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_2_SINCE; }
    static NAT0_3_SINCE_$LI$() { if (RandomVariable.NAT0_3_SINCE == null) {
        RandomVariable.NAT0_3_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_3_SINCE; }
    static NAT0_4_SINCE_$LI$() { if (RandomVariable.NAT0_4_SINCE == null) {
        RandomVariable.NAT0_4_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_4_SINCE; }
    static NAT0_5_SINCE_$LI$() { if (RandomVariable.NAT0_5_SINCE == null) {
        RandomVariable.NAT0_5_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_5_SINCE; }
    static NAT0_6_SINCE_$LI$() { if (RandomVariable.NAT0_6_SINCE == null) {
        RandomVariable.NAT0_6_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_6_SINCE; }
    static NAT0_7_SINCE_$LI$() { if (RandomVariable.NAT0_7_SINCE == null) {
        RandomVariable.NAT0_7_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_7_SINCE; }
    static NAT0_8_SINCE_$LI$() { if (RandomVariable.NAT0_8_SINCE == null) {
        RandomVariable.NAT0_8_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_8_SINCE; }
    static NAT0_9_SINCE_$LI$() { if (RandomVariable.NAT0_9_SINCE == null) {
        RandomVariable.NAT0_9_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT0_9_SINCE; }
    static NAT1_SINCE_$LI$() { if (RandomVariable.NAT1_SINCE == null) {
        RandomVariable.NAT1_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_SINCE; }
    static NAT1_1_SINCE_$LI$() { if (RandomVariable.NAT1_1_SINCE == null) {
        RandomVariable.NAT1_1_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_1_SINCE; }
    static NAT1_2_SINCE_$LI$() { if (RandomVariable.NAT1_2_SINCE == null) {
        RandomVariable.NAT1_2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_2_SINCE; }
    static NAT1_3_SINCE_$LI$() { if (RandomVariable.NAT1_3_SINCE == null) {
        RandomVariable.NAT1_3_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_3_SINCE; }
    static NAT1_4_SINCE_$LI$() { if (RandomVariable.NAT1_4_SINCE == null) {
        RandomVariable.NAT1_4_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_4_SINCE; }
    static NAT1_5_SINCE_$LI$() { if (RandomVariable.NAT1_5_SINCE == null) {
        RandomVariable.NAT1_5_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_5_SINCE; }
    static NAT1_6_SINCE_$LI$() { if (RandomVariable.NAT1_6_SINCE == null) {
        RandomVariable.NAT1_6_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_6_SINCE; }
    static NAT1_7_SINCE_$LI$() { if (RandomVariable.NAT1_7_SINCE == null) {
        RandomVariable.NAT1_7_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_7_SINCE; }
    static NAT1_8_SINCE_$LI$() { if (RandomVariable.NAT1_8_SINCE == null) {
        RandomVariable.NAT1_8_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_8_SINCE; }
    static NAT1_9_SINCE_$LI$() { if (RandomVariable.NAT1_9_SINCE == null) {
        RandomVariable.NAT1_9_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NAT1_9_SINCE; }
    static NOR_SINCE_$LI$() { if (RandomVariable.NOR_SINCE == null) {
        RandomVariable.NOR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return RandomVariable.NOR_SINCE; }
}
exports.RandomVariable = RandomVariable;
RandomVariable.TYPE_ID = 10;
RandomVariable.TYPE_DESC = "Random Variable";
RandomVariable.UNIFORM_ID = 1;
RandomVariable.INT_ID = 2;
RandomVariable.INT1_ID = 3;
RandomVariable.INT2_ID = 4;
RandomVariable.INT3_ID = 5;
RandomVariable.INT4_ID = 6;
RandomVariable.INT5_ID = 7;
RandomVariable.INT6_ID = 8;
RandomVariable.INT7_ID = 9;
RandomVariable.INT8_ID = 10;
RandomVariable.INT9_ID = 11;
RandomVariable.NAT0_ID = 12;
RandomVariable.NAT0_1_ID = 13;
RandomVariable.NAT0_2_ID = 14;
RandomVariable.NAT0_3_ID = 15;
RandomVariable.NAT0_4_ID = 16;
RandomVariable.NAT0_5_ID = 17;
RandomVariable.NAT0_6_ID = 18;
RandomVariable.NAT0_7_ID = 19;
RandomVariable.NAT0_8_ID = 20;
RandomVariable.NAT0_9_ID = 21;
RandomVariable.NAT1_ID = 22;
RandomVariable.NAT1_1_ID = 23;
RandomVariable.NAT1_2_ID = 24;
RandomVariable.NAT1_3_ID = 25;
RandomVariable.NAT1_4_ID = 26;
RandomVariable.NAT1_5_ID = 27;
RandomVariable.NAT1_6_ID = 28;
RandomVariable.NAT1_7_ID = 29;
RandomVariable.NAT1_8_ID = 30;
RandomVariable.NAT1_9_ID = 31;
RandomVariable.NOR_ID = 32;
RandomVariable.UNIFORM_STR = "[Uni]";
RandomVariable.INT_STR = "[Int]";
RandomVariable.INT1_STR = "[Int1]";
RandomVariable.INT2_STR = "[Int2]";
RandomVariable.INT3_STR = "[Int3]";
RandomVariable.INT4_STR = "[Int4]";
RandomVariable.INT5_STR = "[Int5]";
RandomVariable.INT6_STR = "[Int6]";
RandomVariable.INT7_STR = "[Int7]";
RandomVariable.INT8_STR = "[Int8]";
RandomVariable.INT9_STR = "[Int9]";
RandomVariable.NAT0_STR = "[nat]";
RandomVariable.NAT0_1_STR = "[nat1]";
RandomVariable.NAT0_2_STR = "[nat2]";
RandomVariable.NAT0_3_STR = "[nat3]";
RandomVariable.NAT0_4_STR = "[nat4]";
RandomVariable.NAT0_5_STR = "[nat5]";
RandomVariable.NAT0_6_STR = "[nat6]";
RandomVariable.NAT0_7_STR = "[nat7]";
RandomVariable.NAT0_8_STR = "[nat8]";
RandomVariable.NAT0_9_STR = "[nat9]";
RandomVariable.NAT1_STR = "[Nat]";
RandomVariable.NAT1_1_STR = "[Nat1]";
RandomVariable.NAT1_2_STR = "[Nat2]";
RandomVariable.NAT1_3_STR = "[Nat3]";
RandomVariable.NAT1_4_STR = "[Nat4]";
RandomVariable.NAT1_5_STR = "[Nat5]";
RandomVariable.NAT1_6_STR = "[Nat6]";
RandomVariable.NAT1_7_STR = "[Nat7]";
RandomVariable.NAT1_8_STR = "[Nat8]";
RandomVariable.NAT1_9_STR = "[Nat9]";
RandomVariable.NOR_STR = "[Nor]";
RandomVariable.UNIFORM_DESC = "Random variable - Uniform continuous distribution U(0,1)";
RandomVariable.INT_DESC = "Random variable - random integer";
RandomVariable.INT1_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^1, 10^1}";
RandomVariable.INT2_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^2, 10^2}";
RandomVariable.INT3_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^3, 10^3}";
RandomVariable.INT4_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^4, 10^4}";
RandomVariable.INT5_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^5, 10^5}";
RandomVariable.INT6_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^6, 10^6}";
RandomVariable.INT7_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^7, 10^7}";
RandomVariable.INT8_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^8, 10^8}";
RandomVariable.INT9_DESC = "Random variable - random integer - Uniform discrete distribution U{-10^9, 10^9}";
RandomVariable.NAT0_DESC = "Random variable - random natural number including 0";
RandomVariable.NAT0_1_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^1}";
RandomVariable.NAT0_2_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^2}";
RandomVariable.NAT0_3_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^3}";
RandomVariable.NAT0_4_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^4}";
RandomVariable.NAT0_5_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^5}";
RandomVariable.NAT0_6_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^6}";
RandomVariable.NAT0_7_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^7}";
RandomVariable.NAT0_8_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^8}";
RandomVariable.NAT0_9_DESC = "Random variable - random natural number including 0 - Uniform discrete distribution U{0, 10^9}";
RandomVariable.NAT1_DESC = "Random variable - random natural number";
RandomVariable.NAT1_1_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^1}";
RandomVariable.NAT1_2_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^2}";
RandomVariable.NAT1_3_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^3}";
RandomVariable.NAT1_4_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^4}";
RandomVariable.NAT1_5_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^5}";
RandomVariable.NAT1_6_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^6}";
RandomVariable.NAT1_7_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^7}";
RandomVariable.NAT1_8_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^8}";
RandomVariable.NAT1_9_DESC = "Random variable - random natural number - Uniform discrete distribution U{1, 10^9}";
RandomVariable.NOR_DESC = "Random variable - Normal distribution N(0,1)";
RandomVariable["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.RandomVariable";
//# sourceMappingURL=RandomVariable.js.map