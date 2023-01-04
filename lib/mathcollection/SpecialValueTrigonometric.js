"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialValueTrigonometric = void 0;
const BinaryRelations_1 = require("./BinaryRelations");
const MathConstants_1 = require("./MathConstants");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
const MathFunctions_1 = require("./MathFunctions");
const SpecialValue_1 = require("./SpecialValue");
/**
 * Main constructor
 * @param {number} factor  The angle provided as a factor of PI
 * @param {number} sin     The sine function value
 * @param {number} cos     The cosine function value
 * @param {number} tan     The tangent function value
 * @param {number} ctan    The cotangent function value
 * @param {number} sec     The secant function value
 * @param {number} csc     The cosecant function value
 * @class
 */
class SpecialValueTrigonometric {
    static EPSILON_$LI$() { if (SpecialValueTrigonometric.EPSILON == null) {
        SpecialValueTrigonometric.EPSILON = 10 * BinaryRelations_1.BinaryRelations.DEFAULT_COMPARISON_EPSILON;
    } return SpecialValueTrigonometric.EPSILON; }
    static CTAN_0_$LI$() { if (SpecialValueTrigonometric.CTAN_0 == null) {
        SpecialValueTrigonometric.CTAN_0 = j4ts_2.javaemul.internal.DoubleHelper.NaN;
    } return SpecialValueTrigonometric.CTAN_0; }
    static CSC_0_$LI$() { if (SpecialValueTrigonometric.CSC_0 == null) {
        SpecialValueTrigonometric.CSC_0 = j4ts_2.javaemul.internal.DoubleHelper.NaN;
    } return SpecialValueTrigonometric.CSC_0; }
    static COS_30_$LI$() { if (SpecialValueTrigonometric.COS_30 == null) {
        SpecialValueTrigonometric.COS_30 = MathConstants_1.MathConstants.SQRT3BY2_$LI$();
    } return SpecialValueTrigonometric.COS_30; }
    static TAN_30_$LI$() { if (SpecialValueTrigonometric.TAN_30 == null) {
        SpecialValueTrigonometric.TAN_30 = MathConstants_1.MathConstants.SQRT3BY3_$LI$();
    } return SpecialValueTrigonometric.TAN_30; }
    static CTAN_30_$LI$() { if (SpecialValueTrigonometric.CTAN_30 == null) {
        SpecialValueTrigonometric.CTAN_30 = MathConstants_1.MathConstants.SQRT3_$LI$();
    } return SpecialValueTrigonometric.CTAN_30; }
    static SEC_30_$LI$() { if (SpecialValueTrigonometric.SEC_30 == null) {
        SpecialValueTrigonometric.SEC_30 = MathConstants_1.MathConstants.D2BYSQRT3_$LI$();
    } return SpecialValueTrigonometric.SEC_30; }
    static SIN_45_$LI$() { if (SpecialValueTrigonometric.SIN_45 == null) {
        SpecialValueTrigonometric.SIN_45 = MathConstants_1.MathConstants.SQRT2BY2_$LI$();
    } return SpecialValueTrigonometric.SIN_45; }
    static COS_45_$LI$() { if (SpecialValueTrigonometric.COS_45 == null) {
        SpecialValueTrigonometric.COS_45 = MathConstants_1.MathConstants.SQRT2BY2_$LI$();
    } return SpecialValueTrigonometric.COS_45; }
    static SEC_45_$LI$() { if (SpecialValueTrigonometric.SEC_45 == null) {
        SpecialValueTrigonometric.SEC_45 = MathConstants_1.MathConstants.SQRT2_$LI$();
    } return SpecialValueTrigonometric.SEC_45; }
    static CSC_45_$LI$() { if (SpecialValueTrigonometric.CSC_45 == null) {
        SpecialValueTrigonometric.CSC_45 = MathConstants_1.MathConstants.SQRT2_$LI$();
    } return SpecialValueTrigonometric.CSC_45; }
    static SIN_60_$LI$() { if (SpecialValueTrigonometric.SIN_60 == null) {
        SpecialValueTrigonometric.SIN_60 = MathConstants_1.MathConstants.SQRT3BY2_$LI$();
    } return SpecialValueTrigonometric.SIN_60; }
    static TAN_60_$LI$() { if (SpecialValueTrigonometric.TAN_60 == null) {
        SpecialValueTrigonometric.TAN_60 = MathConstants_1.MathConstants.SQRT3_$LI$();
    } return SpecialValueTrigonometric.TAN_60; }
    static CTAN_60_$LI$() { if (SpecialValueTrigonometric.CTAN_60 == null) {
        SpecialValueTrigonometric.CTAN_60 = MathConstants_1.MathConstants.SQRT3BY3_$LI$();
    } return SpecialValueTrigonometric.CTAN_60; }
    static CSC_60_$LI$() { if (SpecialValueTrigonometric.CSC_60 == null) {
        SpecialValueTrigonometric.CSC_60 = MathConstants_1.MathConstants.D2BYSQRT3_$LI$();
    } return SpecialValueTrigonometric.CSC_60; }
    static TAN_90_$LI$() { if (SpecialValueTrigonometric.TAN_90 == null) {
        SpecialValueTrigonometric.TAN_90 = j4ts_2.javaemul.internal.DoubleHelper.NaN;
    } return SpecialValueTrigonometric.TAN_90; }
    static SEC_90_$LI$() { if (SpecialValueTrigonometric.SEC_90 == null) {
        SpecialValueTrigonometric.SEC_90 = j4ts_2.javaemul.internal.DoubleHelper.NaN;
    } return SpecialValueTrigonometric.SEC_90; }
    static SIN_120_$LI$() { if (SpecialValueTrigonometric.SIN_120 == null) {
        SpecialValueTrigonometric.SIN_120 = SpecialValueTrigonometric.SIN_60_$LI$();
    } return SpecialValueTrigonometric.SIN_120; }
    static COS_120_$LI$() { if (SpecialValueTrigonometric.COS_120 == null) {
        SpecialValueTrigonometric.COS_120 = -SpecialValueTrigonometric.COS_60;
    } return SpecialValueTrigonometric.COS_120; }
    static TAN_120_$LI$() { if (SpecialValueTrigonometric.TAN_120 == null) {
        SpecialValueTrigonometric.TAN_120 = -SpecialValueTrigonometric.TAN_60_$LI$();
    } return SpecialValueTrigonometric.TAN_120; }
    static CTAN_120_$LI$() { if (SpecialValueTrigonometric.CTAN_120 == null) {
        SpecialValueTrigonometric.CTAN_120 = -SpecialValueTrigonometric.CTAN_60_$LI$();
    } return SpecialValueTrigonometric.CTAN_120; }
    static SEC_120_$LI$() { if (SpecialValueTrigonometric.SEC_120 == null) {
        SpecialValueTrigonometric.SEC_120 = -SpecialValueTrigonometric.SEC_60;
    } return SpecialValueTrigonometric.SEC_120; }
    static CSC_120_$LI$() { if (SpecialValueTrigonometric.CSC_120 == null) {
        SpecialValueTrigonometric.CSC_120 = SpecialValueTrigonometric.CSC_60_$LI$();
    } return SpecialValueTrigonometric.CSC_120; }
    static SIN_135_$LI$() { if (SpecialValueTrigonometric.SIN_135 == null) {
        SpecialValueTrigonometric.SIN_135 = SpecialValueTrigonometric.SIN_45_$LI$();
    } return SpecialValueTrigonometric.SIN_135; }
    static COS_135_$LI$() { if (SpecialValueTrigonometric.COS_135 == null) {
        SpecialValueTrigonometric.COS_135 = -SpecialValueTrigonometric.COS_45_$LI$();
    } return SpecialValueTrigonometric.COS_135; }
    static TAN_135_$LI$() { if (SpecialValueTrigonometric.TAN_135 == null) {
        SpecialValueTrigonometric.TAN_135 = -SpecialValueTrigonometric.TAN_45;
    } return SpecialValueTrigonometric.TAN_135; }
    static CTAN_135_$LI$() { if (SpecialValueTrigonometric.CTAN_135 == null) {
        SpecialValueTrigonometric.CTAN_135 = -SpecialValueTrigonometric.CTAN_45;
    } return SpecialValueTrigonometric.CTAN_135; }
    static SEC_135_$LI$() { if (SpecialValueTrigonometric.SEC_135 == null) {
        SpecialValueTrigonometric.SEC_135 = -SpecialValueTrigonometric.SEC_45_$LI$();
    } return SpecialValueTrigonometric.SEC_135; }
    static CSC_135_$LI$() { if (SpecialValueTrigonometric.CSC_135 == null) {
        SpecialValueTrigonometric.CSC_135 = SpecialValueTrigonometric.CSC_45_$LI$();
    } return SpecialValueTrigonometric.CSC_135; }
    static SIN_150_$LI$() { if (SpecialValueTrigonometric.SIN_150 == null) {
        SpecialValueTrigonometric.SIN_150 = SpecialValueTrigonometric.SIN_30;
    } return SpecialValueTrigonometric.SIN_150; }
    static COS_150_$LI$() { if (SpecialValueTrigonometric.COS_150 == null) {
        SpecialValueTrigonometric.COS_150 = -SpecialValueTrigonometric.COS_30_$LI$();
    } return SpecialValueTrigonometric.COS_150; }
    static TAN_150_$LI$() { if (SpecialValueTrigonometric.TAN_150 == null) {
        SpecialValueTrigonometric.TAN_150 = -SpecialValueTrigonometric.TAN_30_$LI$();
    } return SpecialValueTrigonometric.TAN_150; }
    static CTAN_150_$LI$() { if (SpecialValueTrigonometric.CTAN_150 == null) {
        SpecialValueTrigonometric.CTAN_150 = -SpecialValueTrigonometric.CTAN_30_$LI$();
    } return SpecialValueTrigonometric.CTAN_150; }
    static SEC_150_$LI$() { if (SpecialValueTrigonometric.SEC_150 == null) {
        SpecialValueTrigonometric.SEC_150 = -SpecialValueTrigonometric.SEC_30_$LI$();
    } return SpecialValueTrigonometric.SEC_150; }
    static CSC_150_$LI$() { if (SpecialValueTrigonometric.CSC_150 == null) {
        SpecialValueTrigonometric.CSC_150 = SpecialValueTrigonometric.CSC_30;
    } return SpecialValueTrigonometric.CSC_150; }
    static SIN_180_$LI$() { if (SpecialValueTrigonometric.SIN_180 == null) {
        SpecialValueTrigonometric.SIN_180 = SpecialValueTrigonometric.SIN_0;
    } return SpecialValueTrigonometric.SIN_180; }
    static COS_180_$LI$() { if (SpecialValueTrigonometric.COS_180 == null) {
        SpecialValueTrigonometric.COS_180 = -SpecialValueTrigonometric.COS_0;
    } return SpecialValueTrigonometric.COS_180; }
    static TAN_180_$LI$() { if (SpecialValueTrigonometric.TAN_180 == null) {
        SpecialValueTrigonometric.TAN_180 = SpecialValueTrigonometric.TAN_0;
    } return SpecialValueTrigonometric.TAN_180; }
    static CTAN_180_$LI$() { if (SpecialValueTrigonometric.CTAN_180 == null) {
        SpecialValueTrigonometric.CTAN_180 = SpecialValueTrigonometric.CTAN_0_$LI$();
    } return SpecialValueTrigonometric.CTAN_180; }
    static SEC_180_$LI$() { if (SpecialValueTrigonometric.SEC_180 == null) {
        SpecialValueTrigonometric.SEC_180 = -SpecialValueTrigonometric.SEC_0;
    } return SpecialValueTrigonometric.SEC_180; }
    static CSC_180_$LI$() { if (SpecialValueTrigonometric.CSC_180 == null) {
        SpecialValueTrigonometric.CSC_180 = SpecialValueTrigonometric.CSC_0_$LI$();
    } return SpecialValueTrigonometric.CSC_180; }
    static SIN_210_$LI$() { if (SpecialValueTrigonometric.SIN_210 == null) {
        SpecialValueTrigonometric.SIN_210 = -SpecialValueTrigonometric.SIN_30;
    } return SpecialValueTrigonometric.SIN_210; }
    static COS_210_$LI$() { if (SpecialValueTrigonometric.COS_210 == null) {
        SpecialValueTrigonometric.COS_210 = -SpecialValueTrigonometric.COS_30_$LI$();
    } return SpecialValueTrigonometric.COS_210; }
    static TAN_210_$LI$() { if (SpecialValueTrigonometric.TAN_210 == null) {
        SpecialValueTrigonometric.TAN_210 = SpecialValueTrigonometric.TAN_30_$LI$();
    } return SpecialValueTrigonometric.TAN_210; }
    static CTAN_210_$LI$() { if (SpecialValueTrigonometric.CTAN_210 == null) {
        SpecialValueTrigonometric.CTAN_210 = SpecialValueTrigonometric.CTAN_30_$LI$();
    } return SpecialValueTrigonometric.CTAN_210; }
    static SEC_210_$LI$() { if (SpecialValueTrigonometric.SEC_210 == null) {
        SpecialValueTrigonometric.SEC_210 = -SpecialValueTrigonometric.SEC_30_$LI$();
    } return SpecialValueTrigonometric.SEC_210; }
    static CSC_210_$LI$() { if (SpecialValueTrigonometric.CSC_210 == null) {
        SpecialValueTrigonometric.CSC_210 = -SpecialValueTrigonometric.CSC_30;
    } return SpecialValueTrigonometric.CSC_210; }
    static SIN_225_$LI$() { if (SpecialValueTrigonometric.SIN_225 == null) {
        SpecialValueTrigonometric.SIN_225 = -SpecialValueTrigonometric.SIN_45_$LI$();
    } return SpecialValueTrigonometric.SIN_225; }
    static COS_225_$LI$() { if (SpecialValueTrigonometric.COS_225 == null) {
        SpecialValueTrigonometric.COS_225 = -SpecialValueTrigonometric.COS_45_$LI$();
    } return SpecialValueTrigonometric.COS_225; }
    static TAN_225_$LI$() { if (SpecialValueTrigonometric.TAN_225 == null) {
        SpecialValueTrigonometric.TAN_225 = SpecialValueTrigonometric.TAN_45;
    } return SpecialValueTrigonometric.TAN_225; }
    static CTAN_225_$LI$() { if (SpecialValueTrigonometric.CTAN_225 == null) {
        SpecialValueTrigonometric.CTAN_225 = SpecialValueTrigonometric.CTAN_45;
    } return SpecialValueTrigonometric.CTAN_225; }
    static SEC_225_$LI$() { if (SpecialValueTrigonometric.SEC_225 == null) {
        SpecialValueTrigonometric.SEC_225 = -SpecialValueTrigonometric.SEC_45_$LI$();
    } return SpecialValueTrigonometric.SEC_225; }
    static CSC_225_$LI$() { if (SpecialValueTrigonometric.CSC_225 == null) {
        SpecialValueTrigonometric.CSC_225 = -SpecialValueTrigonometric.CSC_45_$LI$();
    } return SpecialValueTrigonometric.CSC_225; }
    static SIN_240_$LI$() { if (SpecialValueTrigonometric.SIN_240 == null) {
        SpecialValueTrigonometric.SIN_240 = -SpecialValueTrigonometric.SIN_60_$LI$();
    } return SpecialValueTrigonometric.SIN_240; }
    static COS_240_$LI$() { if (SpecialValueTrigonometric.COS_240 == null) {
        SpecialValueTrigonometric.COS_240 = -SpecialValueTrigonometric.COS_60;
    } return SpecialValueTrigonometric.COS_240; }
    static TAN_240_$LI$() { if (SpecialValueTrigonometric.TAN_240 == null) {
        SpecialValueTrigonometric.TAN_240 = SpecialValueTrigonometric.TAN_60_$LI$();
    } return SpecialValueTrigonometric.TAN_240; }
    static CTAN_240_$LI$() { if (SpecialValueTrigonometric.CTAN_240 == null) {
        SpecialValueTrigonometric.CTAN_240 = SpecialValueTrigonometric.CTAN_60_$LI$();
    } return SpecialValueTrigonometric.CTAN_240; }
    static SEC_240_$LI$() { if (SpecialValueTrigonometric.SEC_240 == null) {
        SpecialValueTrigonometric.SEC_240 = -SpecialValueTrigonometric.SEC_60;
    } return SpecialValueTrigonometric.SEC_240; }
    static CSC_240_$LI$() { if (SpecialValueTrigonometric.CSC_240 == null) {
        SpecialValueTrigonometric.CSC_240 = -SpecialValueTrigonometric.CSC_60_$LI$();
    } return SpecialValueTrigonometric.CSC_240; }
    static SIN_270_$LI$() { if (SpecialValueTrigonometric.SIN_270 == null) {
        SpecialValueTrigonometric.SIN_270 = -SpecialValueTrigonometric.SIN_90;
    } return SpecialValueTrigonometric.SIN_270; }
    static COS_270_$LI$() { if (SpecialValueTrigonometric.COS_270 == null) {
        SpecialValueTrigonometric.COS_270 = SpecialValueTrigonometric.COS_90;
    } return SpecialValueTrigonometric.COS_270; }
    static TAN_270_$LI$() { if (SpecialValueTrigonometric.TAN_270 == null) {
        SpecialValueTrigonometric.TAN_270 = SpecialValueTrigonometric.TAN_90_$LI$();
    } return SpecialValueTrigonometric.TAN_270; }
    static CTAN_270_$LI$() { if (SpecialValueTrigonometric.CTAN_270 == null) {
        SpecialValueTrigonometric.CTAN_270 = SpecialValueTrigonometric.CTAN_90;
    } return SpecialValueTrigonometric.CTAN_270; }
    static SEC_270_$LI$() { if (SpecialValueTrigonometric.SEC_270 == null) {
        SpecialValueTrigonometric.SEC_270 = SpecialValueTrigonometric.SEC_90_$LI$();
    } return SpecialValueTrigonometric.SEC_270; }
    static CSC_270_$LI$() { if (SpecialValueTrigonometric.CSC_270 == null) {
        SpecialValueTrigonometric.CSC_270 = -SpecialValueTrigonometric.CSC_90;
    } return SpecialValueTrigonometric.CSC_270; }
    static SIN_300_$LI$() { if (SpecialValueTrigonometric.SIN_300 == null) {
        SpecialValueTrigonometric.SIN_300 = -SpecialValueTrigonometric.SIN_60_$LI$();
    } return SpecialValueTrigonometric.SIN_300; }
    static COS_300_$LI$() { if (SpecialValueTrigonometric.COS_300 == null) {
        SpecialValueTrigonometric.COS_300 = SpecialValueTrigonometric.COS_60;
    } return SpecialValueTrigonometric.COS_300; }
    static TAN_300_$LI$() { if (SpecialValueTrigonometric.TAN_300 == null) {
        SpecialValueTrigonometric.TAN_300 = -SpecialValueTrigonometric.TAN_60_$LI$();
    } return SpecialValueTrigonometric.TAN_300; }
    static CTAN_300_$LI$() { if (SpecialValueTrigonometric.CTAN_300 == null) {
        SpecialValueTrigonometric.CTAN_300 = -SpecialValueTrigonometric.CTAN_60_$LI$();
    } return SpecialValueTrigonometric.CTAN_300; }
    static SEC_300_$LI$() { if (SpecialValueTrigonometric.SEC_300 == null) {
        SpecialValueTrigonometric.SEC_300 = SpecialValueTrigonometric.SEC_60;
    } return SpecialValueTrigonometric.SEC_300; }
    static CSC_300_$LI$() { if (SpecialValueTrigonometric.CSC_300 == null) {
        SpecialValueTrigonometric.CSC_300 = -SpecialValueTrigonometric.CSC_60_$LI$();
    } return SpecialValueTrigonometric.CSC_300; }
    static SIN_315_$LI$() { if (SpecialValueTrigonometric.SIN_315 == null) {
        SpecialValueTrigonometric.SIN_315 = -SpecialValueTrigonometric.SIN_45_$LI$();
    } return SpecialValueTrigonometric.SIN_315; }
    static COS_315_$LI$() { if (SpecialValueTrigonometric.COS_315 == null) {
        SpecialValueTrigonometric.COS_315 = SpecialValueTrigonometric.COS_45_$LI$();
    } return SpecialValueTrigonometric.COS_315; }
    static TAN_315_$LI$() { if (SpecialValueTrigonometric.TAN_315 == null) {
        SpecialValueTrigonometric.TAN_315 = -SpecialValueTrigonometric.TAN_45;
    } return SpecialValueTrigonometric.TAN_315; }
    static CTAN_315_$LI$() { if (SpecialValueTrigonometric.CTAN_315 == null) {
        SpecialValueTrigonometric.CTAN_315 = -SpecialValueTrigonometric.CTAN_45;
    } return SpecialValueTrigonometric.CTAN_315; }
    static SEC_315_$LI$() { if (SpecialValueTrigonometric.SEC_315 == null) {
        SpecialValueTrigonometric.SEC_315 = SpecialValueTrigonometric.SEC_45_$LI$();
    } return SpecialValueTrigonometric.SEC_315; }
    static CSC_315_$LI$() { if (SpecialValueTrigonometric.CSC_315 == null) {
        SpecialValueTrigonometric.CSC_315 = -SpecialValueTrigonometric.CSC_45_$LI$();
    } return SpecialValueTrigonometric.CSC_315; }
    static SIN_330_$LI$() { if (SpecialValueTrigonometric.SIN_330 == null) {
        SpecialValueTrigonometric.SIN_330 = -SpecialValueTrigonometric.SIN_30;
    } return SpecialValueTrigonometric.SIN_330; }
    static COS_330_$LI$() { if (SpecialValueTrigonometric.COS_330 == null) {
        SpecialValueTrigonometric.COS_330 = SpecialValueTrigonometric.COS_30_$LI$();
    } return SpecialValueTrigonometric.COS_330; }
    static TAN_330_$LI$() { if (SpecialValueTrigonometric.TAN_330 == null) {
        SpecialValueTrigonometric.TAN_330 = -SpecialValueTrigonometric.TAN_30_$LI$();
    } return SpecialValueTrigonometric.TAN_330; }
    static CTAN_330_$LI$() { if (SpecialValueTrigonometric.CTAN_330 == null) {
        SpecialValueTrigonometric.CTAN_330 = -SpecialValueTrigonometric.CTAN_30_$LI$();
    } return SpecialValueTrigonometric.CTAN_330; }
    static SEC_330_$LI$() { if (SpecialValueTrigonometric.SEC_330 == null) {
        SpecialValueTrigonometric.SEC_330 = SpecialValueTrigonometric.SEC_30_$LI$();
    } return SpecialValueTrigonometric.SEC_330; }
    static CSC_330_$LI$() { if (SpecialValueTrigonometric.CSC_330 == null) {
        SpecialValueTrigonometric.CSC_330 = -SpecialValueTrigonometric.CSC_30;
    } return SpecialValueTrigonometric.CSC_330; }
    static SIN_360_$LI$() { if (SpecialValueTrigonometric.SIN_360 == null) {
        SpecialValueTrigonometric.SIN_360 = SpecialValueTrigonometric.SIN_0;
    } return SpecialValueTrigonometric.SIN_360; }
    static COS_360_$LI$() { if (SpecialValueTrigonometric.COS_360 == null) {
        SpecialValueTrigonometric.COS_360 = SpecialValueTrigonometric.COS_0;
    } return SpecialValueTrigonometric.COS_360; }
    static TAN_360_$LI$() { if (SpecialValueTrigonometric.TAN_360 == null) {
        SpecialValueTrigonometric.TAN_360 = SpecialValueTrigonometric.TAN_0;
    } return SpecialValueTrigonometric.TAN_360; }
    static CTAN_360_$LI$() { if (SpecialValueTrigonometric.CTAN_360 == null) {
        SpecialValueTrigonometric.CTAN_360 = SpecialValueTrigonometric.CTAN_0_$LI$();
    } return SpecialValueTrigonometric.CTAN_360; }
    static SEC_360_$LI$() { if (SpecialValueTrigonometric.SEC_360 == null) {
        SpecialValueTrigonometric.SEC_360 = SpecialValueTrigonometric.SEC_0;
    } return SpecialValueTrigonometric.SEC_360; }
    static CSC_360_$LI$() { if (SpecialValueTrigonometric.CSC_360 == null) {
        SpecialValueTrigonometric.CSC_360 = SpecialValueTrigonometric.CSC_0_$LI$();
    } return SpecialValueTrigonometric.CSC_360; }
    static valuesListTrig_$LI$() { if (SpecialValueTrigonometric.valuesListTrig == null) {
        SpecialValueTrigonometric.valuesListTrig = [new SpecialValueTrigonometric(0.0, SpecialValueTrigonometric.SIN_0, SpecialValueTrigonometric.COS_0, SpecialValueTrigonometric.TAN_0, SpecialValueTrigonometric.CTAN_0_$LI$(), SpecialValueTrigonometric.SEC_0, SpecialValueTrigonometric.CSC_0_$LI$()), new SpecialValueTrigonometric(2.0, SpecialValueTrigonometric.SIN_0, SpecialValueTrigonometric.COS_0, SpecialValueTrigonometric.TAN_0, SpecialValueTrigonometric.CTAN_0_$LI$(), SpecialValueTrigonometric.SEC_0, SpecialValueTrigonometric.CSC_0_$LI$()), new SpecialValueTrigonometric(-2.0, SpecialValueTrigonometric.SIN_0, SpecialValueTrigonometric.COS_0, SpecialValueTrigonometric.TAN_0, SpecialValueTrigonometric.CTAN_0_$LI$(), SpecialValueTrigonometric.SEC_0, SpecialValueTrigonometric.CSC_0_$LI$()), new SpecialValueTrigonometric(4.0, SpecialValueTrigonometric.SIN_0, SpecialValueTrigonometric.COS_0, SpecialValueTrigonometric.TAN_0, SpecialValueTrigonometric.CTAN_0_$LI$(), SpecialValueTrigonometric.SEC_0, SpecialValueTrigonometric.CSC_0_$LI$()), new SpecialValueTrigonometric(-4.0, SpecialValueTrigonometric.SIN_0, SpecialValueTrigonometric.COS_0, SpecialValueTrigonometric.TAN_0, SpecialValueTrigonometric.CTAN_0_$LI$(), SpecialValueTrigonometric.SEC_0, SpecialValueTrigonometric.CSC_0_$LI$()), new SpecialValueTrigonometric((1.0 / 6.0), SpecialValueTrigonometric.SIN_30, SpecialValueTrigonometric.COS_30_$LI$(), SpecialValueTrigonometric.TAN_30_$LI$(), SpecialValueTrigonometric.CTAN_30_$LI$(), SpecialValueTrigonometric.SEC_30_$LI$(), SpecialValueTrigonometric.CSC_30), new SpecialValueTrigonometric((13.0 / 6.0), SpecialValueTrigonometric.SIN_30, SpecialValueTrigonometric.COS_30_$LI$(), SpecialValueTrigonometric.TAN_30_$LI$(), SpecialValueTrigonometric.CTAN_30_$LI$(), SpecialValueTrigonometric.SEC_30_$LI$(), SpecialValueTrigonometric.CSC_30), new SpecialValueTrigonometric((-11.0 / 6.0), SpecialValueTrigonometric.SIN_30, SpecialValueTrigonometric.COS_30_$LI$(), SpecialValueTrigonometric.TAN_30_$LI$(), SpecialValueTrigonometric.CTAN_30_$LI$(), SpecialValueTrigonometric.SEC_30_$LI$(), SpecialValueTrigonometric.CSC_30), new SpecialValueTrigonometric((25.0 / 6.0), SpecialValueTrigonometric.SIN_30, SpecialValueTrigonometric.COS_30_$LI$(), SpecialValueTrigonometric.TAN_30_$LI$(), SpecialValueTrigonometric.CTAN_30_$LI$(), SpecialValueTrigonometric.SEC_30_$LI$(), SpecialValueTrigonometric.CSC_30), new SpecialValueTrigonometric((-23.0 / 6.0), SpecialValueTrigonometric.SIN_30, SpecialValueTrigonometric.COS_30_$LI$(), SpecialValueTrigonometric.TAN_30_$LI$(), SpecialValueTrigonometric.CTAN_30_$LI$(), SpecialValueTrigonometric.SEC_30_$LI$(), SpecialValueTrigonometric.CSC_30), new SpecialValueTrigonometric((1.0 / 4.0), SpecialValueTrigonometric.SIN_45_$LI$(), SpecialValueTrigonometric.COS_45_$LI$(), SpecialValueTrigonometric.TAN_45, SpecialValueTrigonometric.CTAN_45, SpecialValueTrigonometric.SEC_45_$LI$(), SpecialValueTrigonometric.CSC_45_$LI$()), new SpecialValueTrigonometric((9.0 / 4.0), SpecialValueTrigonometric.SIN_45_$LI$(), SpecialValueTrigonometric.COS_45_$LI$(), SpecialValueTrigonometric.TAN_45, SpecialValueTrigonometric.CTAN_45, SpecialValueTrigonometric.SEC_45_$LI$(), SpecialValueTrigonometric.CSC_45_$LI$()), new SpecialValueTrigonometric((-7.0 / 4.0), SpecialValueTrigonometric.SIN_45_$LI$(), SpecialValueTrigonometric.COS_45_$LI$(), SpecialValueTrigonometric.TAN_45, SpecialValueTrigonometric.CTAN_45, SpecialValueTrigonometric.SEC_45_$LI$(), SpecialValueTrigonometric.CSC_45_$LI$()), new SpecialValueTrigonometric((17.0 / 4.0), SpecialValueTrigonometric.SIN_45_$LI$(), SpecialValueTrigonometric.COS_45_$LI$(), SpecialValueTrigonometric.TAN_45, SpecialValueTrigonometric.CTAN_45, SpecialValueTrigonometric.SEC_45_$LI$(), SpecialValueTrigonometric.CSC_45_$LI$()), new SpecialValueTrigonometric((-15.0 / 4.0), SpecialValueTrigonometric.SIN_45_$LI$(), SpecialValueTrigonometric.COS_45_$LI$(), SpecialValueTrigonometric.TAN_45, SpecialValueTrigonometric.CTAN_45, SpecialValueTrigonometric.SEC_45_$LI$(), SpecialValueTrigonometric.CSC_45_$LI$()), new SpecialValueTrigonometric((1.0 / 3.0), SpecialValueTrigonometric.SIN_60_$LI$(), SpecialValueTrigonometric.COS_60, SpecialValueTrigonometric.TAN_60_$LI$(), SpecialValueTrigonometric.CTAN_60_$LI$(), SpecialValueTrigonometric.SEC_60, SpecialValueTrigonometric.CSC_60_$LI$()), new SpecialValueTrigonometric((7.0 / 3.0), SpecialValueTrigonometric.SIN_60_$LI$(), SpecialValueTrigonometric.COS_60, SpecialValueTrigonometric.TAN_60_$LI$(), SpecialValueTrigonometric.CTAN_60_$LI$(), SpecialValueTrigonometric.SEC_60, SpecialValueTrigonometric.CSC_60_$LI$()), new SpecialValueTrigonometric((-5.0 / 3.0), SpecialValueTrigonometric.SIN_60_$LI$(), SpecialValueTrigonometric.COS_60, SpecialValueTrigonometric.TAN_60_$LI$(), SpecialValueTrigonometric.CTAN_60_$LI$(), SpecialValueTrigonometric.SEC_60, SpecialValueTrigonometric.CSC_60_$LI$()), new SpecialValueTrigonometric((13.0 / 3.0), SpecialValueTrigonometric.SIN_60_$LI$(), SpecialValueTrigonometric.COS_60, SpecialValueTrigonometric.TAN_60_$LI$(), SpecialValueTrigonometric.CTAN_60_$LI$(), SpecialValueTrigonometric.SEC_60, SpecialValueTrigonometric.CSC_60_$LI$()), new SpecialValueTrigonometric((-11.0 / 3.0), SpecialValueTrigonometric.SIN_60_$LI$(), SpecialValueTrigonometric.COS_60, SpecialValueTrigonometric.TAN_60_$LI$(), SpecialValueTrigonometric.CTAN_60_$LI$(), SpecialValueTrigonometric.SEC_60, SpecialValueTrigonometric.CSC_60_$LI$()), new SpecialValueTrigonometric((1.0 / 2.0), SpecialValueTrigonometric.SIN_90, SpecialValueTrigonometric.COS_90, SpecialValueTrigonometric.TAN_90_$LI$(), SpecialValueTrigonometric.CTAN_90, SpecialValueTrigonometric.SEC_90_$LI$(), SpecialValueTrigonometric.CSC_90), new SpecialValueTrigonometric((5.0 / 2.0), SpecialValueTrigonometric.SIN_90, SpecialValueTrigonometric.COS_90, SpecialValueTrigonometric.TAN_90_$LI$(), SpecialValueTrigonometric.CTAN_90, SpecialValueTrigonometric.SEC_90_$LI$(), SpecialValueTrigonometric.CSC_90), new SpecialValueTrigonometric((-3.0 / 2.0), SpecialValueTrigonometric.SIN_90, SpecialValueTrigonometric.COS_90, SpecialValueTrigonometric.TAN_90_$LI$(), SpecialValueTrigonometric.CTAN_90, SpecialValueTrigonometric.SEC_90_$LI$(), SpecialValueTrigonometric.CSC_90), new SpecialValueTrigonometric((9.0 / 2.0), SpecialValueTrigonometric.SIN_90, SpecialValueTrigonometric.COS_90, SpecialValueTrigonometric.TAN_90_$LI$(), SpecialValueTrigonometric.CTAN_90, SpecialValueTrigonometric.SEC_90_$LI$(), SpecialValueTrigonometric.CSC_90), new SpecialValueTrigonometric((-7.0 / 2.0), SpecialValueTrigonometric.SIN_90, SpecialValueTrigonometric.COS_90, SpecialValueTrigonometric.TAN_90_$LI$(), SpecialValueTrigonometric.CTAN_90, SpecialValueTrigonometric.SEC_90_$LI$(), SpecialValueTrigonometric.CSC_90), new SpecialValueTrigonometric((2.0 / 3.0), SpecialValueTrigonometric.SIN_120_$LI$(), SpecialValueTrigonometric.COS_120_$LI$(), SpecialValueTrigonometric.TAN_120_$LI$(), SpecialValueTrigonometric.CTAN_120_$LI$(), SpecialValueTrigonometric.SEC_120_$LI$(), SpecialValueTrigonometric.CSC_120_$LI$()), new SpecialValueTrigonometric((8.0 / 3.0), SpecialValueTrigonometric.SIN_120_$LI$(), SpecialValueTrigonometric.COS_120_$LI$(), SpecialValueTrigonometric.TAN_120_$LI$(), SpecialValueTrigonometric.CTAN_120_$LI$(), SpecialValueTrigonometric.SEC_120_$LI$(), SpecialValueTrigonometric.CSC_120_$LI$()), new SpecialValueTrigonometric((-4.0 / 3.0), SpecialValueTrigonometric.SIN_120_$LI$(), SpecialValueTrigonometric.COS_120_$LI$(), SpecialValueTrigonometric.TAN_120_$LI$(), SpecialValueTrigonometric.CTAN_120_$LI$(), SpecialValueTrigonometric.SEC_120_$LI$(), SpecialValueTrigonometric.CSC_120_$LI$()), new SpecialValueTrigonometric((14.0 / 3.0), SpecialValueTrigonometric.SIN_120_$LI$(), SpecialValueTrigonometric.COS_120_$LI$(), SpecialValueTrigonometric.TAN_120_$LI$(), SpecialValueTrigonometric.CTAN_120_$LI$(), SpecialValueTrigonometric.SEC_120_$LI$(), SpecialValueTrigonometric.CSC_120_$LI$()), new SpecialValueTrigonometric((-10.0 / 3.0), SpecialValueTrigonometric.SIN_120_$LI$(), SpecialValueTrigonometric.COS_120_$LI$(), SpecialValueTrigonometric.TAN_120_$LI$(), SpecialValueTrigonometric.CTAN_120_$LI$(), SpecialValueTrigonometric.SEC_120_$LI$(), SpecialValueTrigonometric.CSC_120_$LI$()), new SpecialValueTrigonometric((3.0 / 4.0), SpecialValueTrigonometric.SIN_135_$LI$(), SpecialValueTrigonometric.COS_135_$LI$(), SpecialValueTrigonometric.TAN_135_$LI$(), SpecialValueTrigonometric.CTAN_135_$LI$(), SpecialValueTrigonometric.SEC_135_$LI$(), SpecialValueTrigonometric.CSC_135_$LI$()), new SpecialValueTrigonometric((11.0 / 4.0), SpecialValueTrigonometric.SIN_135_$LI$(), SpecialValueTrigonometric.COS_135_$LI$(), SpecialValueTrigonometric.TAN_135_$LI$(), SpecialValueTrigonometric.CTAN_135_$LI$(), SpecialValueTrigonometric.SEC_135_$LI$(), SpecialValueTrigonometric.CSC_135_$LI$()), new SpecialValueTrigonometric((-5.0 / 4.0), SpecialValueTrigonometric.SIN_135_$LI$(), SpecialValueTrigonometric.COS_135_$LI$(), SpecialValueTrigonometric.TAN_135_$LI$(), SpecialValueTrigonometric.CTAN_135_$LI$(), SpecialValueTrigonometric.SEC_135_$LI$(), SpecialValueTrigonometric.CSC_135_$LI$()), new SpecialValueTrigonometric((19.0 / 4.0), SpecialValueTrigonometric.SIN_135_$LI$(), SpecialValueTrigonometric.COS_135_$LI$(), SpecialValueTrigonometric.TAN_135_$LI$(), SpecialValueTrigonometric.CTAN_135_$LI$(), SpecialValueTrigonometric.SEC_135_$LI$(), SpecialValueTrigonometric.CSC_135_$LI$()), new SpecialValueTrigonometric((-13.0 / 4.0), SpecialValueTrigonometric.SIN_135_$LI$(), SpecialValueTrigonometric.COS_135_$LI$(), SpecialValueTrigonometric.TAN_135_$LI$(), SpecialValueTrigonometric.CTAN_135_$LI$(), SpecialValueTrigonometric.SEC_135_$LI$(), SpecialValueTrigonometric.CSC_135_$LI$()), new SpecialValueTrigonometric((5.0 / 6.0), SpecialValueTrigonometric.SIN_150_$LI$(), SpecialValueTrigonometric.COS_150_$LI$(), SpecialValueTrigonometric.TAN_150_$LI$(), SpecialValueTrigonometric.CTAN_150_$LI$(), SpecialValueTrigonometric.SEC_150_$LI$(), SpecialValueTrigonometric.CSC_150_$LI$()), new SpecialValueTrigonometric((17.0 / 6.0), SpecialValueTrigonometric.SIN_150_$LI$(), SpecialValueTrigonometric.COS_150_$LI$(), SpecialValueTrigonometric.TAN_150_$LI$(), SpecialValueTrigonometric.CTAN_150_$LI$(), SpecialValueTrigonometric.SEC_150_$LI$(), SpecialValueTrigonometric.CSC_150_$LI$()), new SpecialValueTrigonometric((-7.0 / 6.0), SpecialValueTrigonometric.SIN_150_$LI$(), SpecialValueTrigonometric.COS_150_$LI$(), SpecialValueTrigonometric.TAN_150_$LI$(), SpecialValueTrigonometric.CTAN_150_$LI$(), SpecialValueTrigonometric.SEC_150_$LI$(), SpecialValueTrigonometric.CSC_150_$LI$()), new SpecialValueTrigonometric((29.0 / 6.0), SpecialValueTrigonometric.SIN_150_$LI$(), SpecialValueTrigonometric.COS_150_$LI$(), SpecialValueTrigonometric.TAN_150_$LI$(), SpecialValueTrigonometric.CTAN_150_$LI$(), SpecialValueTrigonometric.SEC_150_$LI$(), SpecialValueTrigonometric.CSC_150_$LI$()), new SpecialValueTrigonometric((-19.0 / 6.0), SpecialValueTrigonometric.SIN_150_$LI$(), SpecialValueTrigonometric.COS_150_$LI$(), SpecialValueTrigonometric.TAN_150_$LI$(), SpecialValueTrigonometric.CTAN_150_$LI$(), SpecialValueTrigonometric.SEC_150_$LI$(), SpecialValueTrigonometric.CSC_150_$LI$()), new SpecialValueTrigonometric(1.0, SpecialValueTrigonometric.SIN_180_$LI$(), SpecialValueTrigonometric.COS_180_$LI$(), SpecialValueTrigonometric.TAN_180_$LI$(), SpecialValueTrigonometric.CTAN_180_$LI$(), SpecialValueTrigonometric.SEC_180_$LI$(), SpecialValueTrigonometric.CSC_180_$LI$()), new SpecialValueTrigonometric(3.0, SpecialValueTrigonometric.SIN_180_$LI$(), SpecialValueTrigonometric.COS_180_$LI$(), SpecialValueTrigonometric.TAN_180_$LI$(), SpecialValueTrigonometric.CTAN_180_$LI$(), SpecialValueTrigonometric.SEC_180_$LI$(), SpecialValueTrigonometric.CSC_180_$LI$()), new SpecialValueTrigonometric(-1.0, SpecialValueTrigonometric.SIN_180_$LI$(), SpecialValueTrigonometric.COS_180_$LI$(), SpecialValueTrigonometric.TAN_180_$LI$(), SpecialValueTrigonometric.CTAN_180_$LI$(), SpecialValueTrigonometric.SEC_180_$LI$(), SpecialValueTrigonometric.CSC_180_$LI$()), new SpecialValueTrigonometric(5.0, SpecialValueTrigonometric.SIN_180_$LI$(), SpecialValueTrigonometric.COS_180_$LI$(), SpecialValueTrigonometric.TAN_180_$LI$(), SpecialValueTrigonometric.CTAN_180_$LI$(), SpecialValueTrigonometric.SEC_180_$LI$(), SpecialValueTrigonometric.CSC_180_$LI$()), new SpecialValueTrigonometric(-3.0, SpecialValueTrigonometric.SIN_180_$LI$(), SpecialValueTrigonometric.COS_180_$LI$(), SpecialValueTrigonometric.TAN_180_$LI$(), SpecialValueTrigonometric.CTAN_180_$LI$(), SpecialValueTrigonometric.SEC_180_$LI$(), SpecialValueTrigonometric.CSC_180_$LI$()), new SpecialValueTrigonometric((7.0 / 6.0), SpecialValueTrigonometric.SIN_210_$LI$(), SpecialValueTrigonometric.COS_210_$LI$(), SpecialValueTrigonometric.TAN_210_$LI$(), SpecialValueTrigonometric.CTAN_210_$LI$(), SpecialValueTrigonometric.SEC_210_$LI$(), SpecialValueTrigonometric.CSC_210_$LI$()), new SpecialValueTrigonometric((19.0 / 6.0), SpecialValueTrigonometric.SIN_210_$LI$(), SpecialValueTrigonometric.COS_210_$LI$(), SpecialValueTrigonometric.TAN_210_$LI$(), SpecialValueTrigonometric.CTAN_210_$LI$(), SpecialValueTrigonometric.SEC_210_$LI$(), SpecialValueTrigonometric.CSC_210_$LI$()), new SpecialValueTrigonometric((-5.0 / 6.0), SpecialValueTrigonometric.SIN_210_$LI$(), SpecialValueTrigonometric.COS_210_$LI$(), SpecialValueTrigonometric.TAN_210_$LI$(), SpecialValueTrigonometric.CTAN_210_$LI$(), SpecialValueTrigonometric.SEC_210_$LI$(), SpecialValueTrigonometric.CSC_210_$LI$()), new SpecialValueTrigonometric((31.0 / 6.0), SpecialValueTrigonometric.SIN_210_$LI$(), SpecialValueTrigonometric.COS_210_$LI$(), SpecialValueTrigonometric.TAN_210_$LI$(), SpecialValueTrigonometric.CTAN_210_$LI$(), SpecialValueTrigonometric.SEC_210_$LI$(), SpecialValueTrigonometric.CSC_210_$LI$()), new SpecialValueTrigonometric((-17.0 / 6.0), SpecialValueTrigonometric.SIN_210_$LI$(), SpecialValueTrigonometric.COS_210_$LI$(), SpecialValueTrigonometric.TAN_210_$LI$(), SpecialValueTrigonometric.CTAN_210_$LI$(), SpecialValueTrigonometric.SEC_210_$LI$(), SpecialValueTrigonometric.CSC_210_$LI$()), new SpecialValueTrigonometric((5.0 / 4.0), SpecialValueTrigonometric.SIN_225_$LI$(), SpecialValueTrigonometric.COS_225_$LI$(), SpecialValueTrigonometric.TAN_225_$LI$(), SpecialValueTrigonometric.CTAN_225_$LI$(), SpecialValueTrigonometric.SEC_225_$LI$(), SpecialValueTrigonometric.CSC_225_$LI$()), new SpecialValueTrigonometric((13.0 / 4.0), SpecialValueTrigonometric.SIN_225_$LI$(), SpecialValueTrigonometric.COS_225_$LI$(), SpecialValueTrigonometric.TAN_225_$LI$(), SpecialValueTrigonometric.CTAN_225_$LI$(), SpecialValueTrigonometric.SEC_225_$LI$(), SpecialValueTrigonometric.CSC_225_$LI$()), new SpecialValueTrigonometric((-3.0 / 4.0), SpecialValueTrigonometric.SIN_225_$LI$(), SpecialValueTrigonometric.COS_225_$LI$(), SpecialValueTrigonometric.TAN_225_$LI$(), SpecialValueTrigonometric.CTAN_225_$LI$(), SpecialValueTrigonometric.SEC_225_$LI$(), SpecialValueTrigonometric.CSC_225_$LI$()), new SpecialValueTrigonometric((21.0 / 4.0), SpecialValueTrigonometric.SIN_225_$LI$(), SpecialValueTrigonometric.COS_225_$LI$(), SpecialValueTrigonometric.TAN_225_$LI$(), SpecialValueTrigonometric.CTAN_225_$LI$(), SpecialValueTrigonometric.SEC_225_$LI$(), SpecialValueTrigonometric.CSC_225_$LI$()), new SpecialValueTrigonometric((-11.0 / 4.0), SpecialValueTrigonometric.SIN_225_$LI$(), SpecialValueTrigonometric.COS_225_$LI$(), SpecialValueTrigonometric.TAN_225_$LI$(), SpecialValueTrigonometric.CTAN_225_$LI$(), SpecialValueTrigonometric.SEC_225_$LI$(), SpecialValueTrigonometric.CSC_225_$LI$()), new SpecialValueTrigonometric((4.0 / 3.0), SpecialValueTrigonometric.SIN_240_$LI$(), SpecialValueTrigonometric.COS_240_$LI$(), SpecialValueTrigonometric.TAN_240_$LI$(), SpecialValueTrigonometric.CTAN_240_$LI$(), SpecialValueTrigonometric.SEC_240_$LI$(), SpecialValueTrigonometric.CSC_240_$LI$()), new SpecialValueTrigonometric((10.0 / 3.0), SpecialValueTrigonometric.SIN_240_$LI$(), SpecialValueTrigonometric.COS_240_$LI$(), SpecialValueTrigonometric.TAN_240_$LI$(), SpecialValueTrigonometric.CTAN_240_$LI$(), SpecialValueTrigonometric.SEC_240_$LI$(), SpecialValueTrigonometric.CSC_240_$LI$()), new SpecialValueTrigonometric((-2.0 / 3.0), SpecialValueTrigonometric.SIN_240_$LI$(), SpecialValueTrigonometric.COS_240_$LI$(), SpecialValueTrigonometric.TAN_240_$LI$(), SpecialValueTrigonometric.CTAN_240_$LI$(), SpecialValueTrigonometric.SEC_240_$LI$(), SpecialValueTrigonometric.CSC_240_$LI$()), new SpecialValueTrigonometric((16.0 / 3.0), SpecialValueTrigonometric.SIN_240_$LI$(), SpecialValueTrigonometric.COS_240_$LI$(), SpecialValueTrigonometric.TAN_240_$LI$(), SpecialValueTrigonometric.CTAN_240_$LI$(), SpecialValueTrigonometric.SEC_240_$LI$(), SpecialValueTrigonometric.CSC_240_$LI$()), new SpecialValueTrigonometric((-8.0 / 3.0), SpecialValueTrigonometric.SIN_240_$LI$(), SpecialValueTrigonometric.COS_240_$LI$(), SpecialValueTrigonometric.TAN_240_$LI$(), SpecialValueTrigonometric.CTAN_240_$LI$(), SpecialValueTrigonometric.SEC_240_$LI$(), SpecialValueTrigonometric.CSC_240_$LI$()), new SpecialValueTrigonometric((3.0 / 2.0), SpecialValueTrigonometric.SIN_270_$LI$(), SpecialValueTrigonometric.COS_270_$LI$(), SpecialValueTrigonometric.TAN_270_$LI$(), SpecialValueTrigonometric.CTAN_270_$LI$(), SpecialValueTrigonometric.SEC_270_$LI$(), SpecialValueTrigonometric.CSC_270_$LI$()), new SpecialValueTrigonometric((7.0 / 2.0), SpecialValueTrigonometric.SIN_270_$LI$(), SpecialValueTrigonometric.COS_270_$LI$(), SpecialValueTrigonometric.TAN_270_$LI$(), SpecialValueTrigonometric.CTAN_270_$LI$(), SpecialValueTrigonometric.SEC_270_$LI$(), SpecialValueTrigonometric.CSC_270_$LI$()), new SpecialValueTrigonometric((-1.0 / 2.0), SpecialValueTrigonometric.SIN_270_$LI$(), SpecialValueTrigonometric.COS_270_$LI$(), SpecialValueTrigonometric.TAN_270_$LI$(), SpecialValueTrigonometric.CTAN_270_$LI$(), SpecialValueTrigonometric.SEC_270_$LI$(), SpecialValueTrigonometric.CSC_270_$LI$()), new SpecialValueTrigonometric((11.0 / 2.0), SpecialValueTrigonometric.SIN_270_$LI$(), SpecialValueTrigonometric.COS_270_$LI$(), SpecialValueTrigonometric.TAN_270_$LI$(), SpecialValueTrigonometric.CTAN_270_$LI$(), SpecialValueTrigonometric.SEC_270_$LI$(), SpecialValueTrigonometric.CSC_270_$LI$()), new SpecialValueTrigonometric((-5.0 / 2.0), SpecialValueTrigonometric.SIN_270_$LI$(), SpecialValueTrigonometric.COS_270_$LI$(), SpecialValueTrigonometric.TAN_270_$LI$(), SpecialValueTrigonometric.CTAN_270_$LI$(), SpecialValueTrigonometric.SEC_270_$LI$(), SpecialValueTrigonometric.CSC_270_$LI$()), new SpecialValueTrigonometric((5.0 / 3.0), SpecialValueTrigonometric.SIN_300_$LI$(), SpecialValueTrigonometric.COS_300_$LI$(), SpecialValueTrigonometric.TAN_300_$LI$(), SpecialValueTrigonometric.CTAN_300_$LI$(), SpecialValueTrigonometric.SEC_300_$LI$(), SpecialValueTrigonometric.CSC_300_$LI$()), new SpecialValueTrigonometric((11.0 / 3.0), SpecialValueTrigonometric.SIN_300_$LI$(), SpecialValueTrigonometric.COS_300_$LI$(), SpecialValueTrigonometric.TAN_300_$LI$(), SpecialValueTrigonometric.CTAN_300_$LI$(), SpecialValueTrigonometric.SEC_300_$LI$(), SpecialValueTrigonometric.CSC_300_$LI$()), new SpecialValueTrigonometric((-1.0 / 3.0), SpecialValueTrigonometric.SIN_300_$LI$(), SpecialValueTrigonometric.COS_300_$LI$(), SpecialValueTrigonometric.TAN_300_$LI$(), SpecialValueTrigonometric.CTAN_300_$LI$(), SpecialValueTrigonometric.SEC_300_$LI$(), SpecialValueTrigonometric.CSC_300_$LI$()), new SpecialValueTrigonometric((17.0 / 3.0), SpecialValueTrigonometric.SIN_300_$LI$(), SpecialValueTrigonometric.COS_300_$LI$(), SpecialValueTrigonometric.TAN_300_$LI$(), SpecialValueTrigonometric.CTAN_300_$LI$(), SpecialValueTrigonometric.SEC_300_$LI$(), SpecialValueTrigonometric.CSC_300_$LI$()), new SpecialValueTrigonometric((-7.0 / 3.0), SpecialValueTrigonometric.SIN_300_$LI$(), SpecialValueTrigonometric.COS_300_$LI$(), SpecialValueTrigonometric.TAN_300_$LI$(), SpecialValueTrigonometric.CTAN_300_$LI$(), SpecialValueTrigonometric.SEC_300_$LI$(), SpecialValueTrigonometric.CSC_300_$LI$()), new SpecialValueTrigonometric((7.0 / 4.0), SpecialValueTrigonometric.SIN_315_$LI$(), SpecialValueTrigonometric.COS_315_$LI$(), SpecialValueTrigonometric.TAN_315_$LI$(), SpecialValueTrigonometric.CTAN_315_$LI$(), SpecialValueTrigonometric.SEC_315_$LI$(), SpecialValueTrigonometric.CSC_315_$LI$()), new SpecialValueTrigonometric((15.0 / 4.0), SpecialValueTrigonometric.SIN_315_$LI$(), SpecialValueTrigonometric.COS_315_$LI$(), SpecialValueTrigonometric.TAN_315_$LI$(), SpecialValueTrigonometric.CTAN_315_$LI$(), SpecialValueTrigonometric.SEC_315_$LI$(), SpecialValueTrigonometric.CSC_315_$LI$()), new SpecialValueTrigonometric((-1.0 / 4.0), SpecialValueTrigonometric.SIN_315_$LI$(), SpecialValueTrigonometric.COS_315_$LI$(), SpecialValueTrigonometric.TAN_315_$LI$(), SpecialValueTrigonometric.CTAN_315_$LI$(), SpecialValueTrigonometric.SEC_315_$LI$(), SpecialValueTrigonometric.CSC_315_$LI$()), new SpecialValueTrigonometric((23.0 / 4.0), SpecialValueTrigonometric.SIN_315_$LI$(), SpecialValueTrigonometric.COS_315_$LI$(), SpecialValueTrigonometric.TAN_315_$LI$(), SpecialValueTrigonometric.CTAN_315_$LI$(), SpecialValueTrigonometric.SEC_315_$LI$(), SpecialValueTrigonometric.CSC_315_$LI$()), new SpecialValueTrigonometric((-9.0 / 4.0), SpecialValueTrigonometric.SIN_315_$LI$(), SpecialValueTrigonometric.COS_315_$LI$(), SpecialValueTrigonometric.TAN_315_$LI$(), SpecialValueTrigonometric.CTAN_315_$LI$(), SpecialValueTrigonometric.SEC_315_$LI$(), SpecialValueTrigonometric.CSC_315_$LI$()), new SpecialValueTrigonometric((11.0 / 6.0), SpecialValueTrigonometric.SIN_330_$LI$(), SpecialValueTrigonometric.COS_330_$LI$(), SpecialValueTrigonometric.TAN_330_$LI$(), SpecialValueTrigonometric.CTAN_330_$LI$(), SpecialValueTrigonometric.SEC_330_$LI$(), SpecialValueTrigonometric.CSC_330_$LI$()), new SpecialValueTrigonometric((23.0 / 6.0), SpecialValueTrigonometric.SIN_330_$LI$(), SpecialValueTrigonometric.COS_330_$LI$(), SpecialValueTrigonometric.TAN_330_$LI$(), SpecialValueTrigonometric.CTAN_330_$LI$(), SpecialValueTrigonometric.SEC_330_$LI$(), SpecialValueTrigonometric.CSC_330_$LI$()), new SpecialValueTrigonometric((-1.0 / 6.0), SpecialValueTrigonometric.SIN_330_$LI$(), SpecialValueTrigonometric.COS_330_$LI$(), SpecialValueTrigonometric.TAN_330_$LI$(), SpecialValueTrigonometric.CTAN_330_$LI$(), SpecialValueTrigonometric.SEC_330_$LI$(), SpecialValueTrigonometric.CSC_330_$LI$()), new SpecialValueTrigonometric((35.0 / 6.0), SpecialValueTrigonometric.SIN_330_$LI$(), SpecialValueTrigonometric.COS_330_$LI$(), SpecialValueTrigonometric.TAN_330_$LI$(), SpecialValueTrigonometric.CTAN_330_$LI$(), SpecialValueTrigonometric.SEC_330_$LI$(), SpecialValueTrigonometric.CSC_330_$LI$()), new SpecialValueTrigonometric((-13.0 / 6.0), SpecialValueTrigonometric.SIN_330_$LI$(), SpecialValueTrigonometric.COS_330_$LI$(), SpecialValueTrigonometric.TAN_330_$LI$(), SpecialValueTrigonometric.CTAN_330_$LI$(), SpecialValueTrigonometric.SEC_330_$LI$(), SpecialValueTrigonometric.CSC_330_$LI$()), new SpecialValueTrigonometric(6.0, SpecialValueTrigonometric.SIN_360_$LI$(), SpecialValueTrigonometric.COS_360_$LI$(), SpecialValueTrigonometric.TAN_360_$LI$(), SpecialValueTrigonometric.CTAN_360_$LI$(), SpecialValueTrigonometric.SEC_360_$LI$(), SpecialValueTrigonometric.CSC_360_$LI$())];
    } return SpecialValueTrigonometric.valuesListTrig; }
    constructor(factor, sin, cos, tan, ctan, sec, csc) {
        if (this.factor === undefined) {
            this.factor = 0;
        }
        if (this.xrad === undefined) {
            this.xrad = 0;
        }
        if (this.xdeg === undefined) {
            this.xdeg = 0;
        }
        if (this.xradFrom === undefined) {
            this.xradFrom = 0;
        }
        if (this.xradTo === undefined) {
            this.xradTo = 0;
        }
        if (this.sin === undefined) {
            this.sin = 0;
        }
        if (this.cos === undefined) {
            this.cos = 0;
        }
        if (this.tan === undefined) {
            this.tan = 0;
        }
        if (this.ctan === undefined) {
            this.ctan = 0;
        }
        if (this.sec === undefined) {
            this.sec = 0;
        }
        if (this.csc === undefined) {
            this.csc = 0;
        }
        this.factor = factor;
        this.xrad = factor * MathConstants_1.MathConstants.PI;
        this.xdeg = MathFunctions_1.MathFunctions.round(factor * 180.0, 0);
        this.sin = sin;
        this.cos = cos;
        this.tan = tan;
        this.ctan = ctan;
        this.sec = sec;
        this.csc = csc;
        this.xradFrom = this.xrad - SpecialValueTrigonometric.EPSILON_$LI$();
        this.xradTo = this.xrad + SpecialValueTrigonometric.EPSILON_$LI$();
        if ((-MathConstants_1.MathConstants.PIBY2_$LI$() - SpecialValueTrigonometric.EPSILON_$LI$() <= this.xrad) && (this.xrad <= MathConstants_1.MathConstants.PIBY2_$LI$() + SpecialValueTrigonometric.EPSILON_$LI$())) {
            if (SpecialValueTrigonometric.valuesListAsin == null)
                SpecialValueTrigonometric.valuesListAsin = (new j4ts_1.java.util.ArrayList());
            if (SpecialValueTrigonometric.valuesListAtan == null)
                SpecialValueTrigonometric.valuesListAtan = (new j4ts_1.java.util.ArrayList());
            if (SpecialValueTrigonometric.valuesListAcsc == null)
                SpecialValueTrigonometric.valuesListAcsc = (new j4ts_1.java.util.ArrayList());
            SpecialValueTrigonometric.valuesListAsin.add(new SpecialValue_1.SpecialValue(sin, this.xrad, this.xdeg));
            SpecialValueTrigonometric.valuesListAtan.add(new SpecialValue_1.SpecialValue(tan, this.xrad, this.xdeg));
            SpecialValueTrigonometric.valuesListAcsc.add(new SpecialValue_1.SpecialValue(csc, this.xrad, this.xdeg));
        }
        if ((-SpecialValueTrigonometric.EPSILON_$LI$() <= this.xrad) && (this.xrad <= MathConstants_1.MathConstants.PI + SpecialValueTrigonometric.EPSILON_$LI$())) {
            if (SpecialValueTrigonometric.valuesListAcos == null)
                SpecialValueTrigonometric.valuesListAcos = (new j4ts_1.java.util.ArrayList());
            if (SpecialValueTrigonometric.valuesListActan == null)
                SpecialValueTrigonometric.valuesListActan = (new j4ts_1.java.util.ArrayList());
            if (SpecialValueTrigonometric.valuesListAsec == null)
                SpecialValueTrigonometric.valuesListAsec = (new j4ts_1.java.util.ArrayList());
            SpecialValueTrigonometric.valuesListAcos.add(new SpecialValue_1.SpecialValue(cos, this.xrad, this.xdeg));
            SpecialValueTrigonometric.valuesListActan.add(new SpecialValue_1.SpecialValue(ctan, this.xrad, this.xdeg));
            SpecialValueTrigonometric.valuesListAsec.add(new SpecialValue_1.SpecialValue(sec, this.xrad, this.xdeg));
        }
    }
    /**
     * Returns special values of trigonometric functions
     *
     * @param {number} xrad   The angle provided in radians
     * @return       {SpecialValueTrigonometric} Returns special values of trigonometric functions object if the special value was found for a given x
     * otherwise returns null
     */
    static getSpecialValueTrigonometric(xrad) {
        if ( /* isNaN */isNaN(xrad))
            return null;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(xrad))
            return null;
        for (let index122 = 0; index122 < SpecialValueTrigonometric.valuesListTrig_$LI$().length; index122++) {
            let sv = SpecialValueTrigonometric.valuesListTrig_$LI$()[index122];
            {
                if ((sv.xradFrom <= xrad) && (xrad <= sv.xradTo))
                    return sv;
            }
        }
        return null;
    }
    /**
     * Returns special value of inverse trigonometric sine function
     * @param {number} x    The sine value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAsin(x) {
        return SpecialValueTrigonometric.getSpecialValue(x, SpecialValueTrigonometric.valuesListAsin);
    }
    /**
     * Returns special value of inverse trigonometric cosine function
     * @param {number} x    The cosine value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAcos(x) {
        return SpecialValueTrigonometric.getSpecialValue(x, SpecialValueTrigonometric.valuesListAcos);
    }
    /**
     * Returns special value of inverse trigonometric tangent function
     * @param {number} x    The tangent value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAtan(x) {
        return SpecialValueTrigonometric.getSpecialValue(x, SpecialValueTrigonometric.valuesListAtan);
    }
    /**
     * Returns special value of inverse trigonometric cotangent function
     * @param {number} x    The cotangent value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueActan(x) {
        return SpecialValueTrigonometric.getSpecialValue(x, SpecialValueTrigonometric.valuesListActan);
    }
    /**
     * Returns special value of inverse trigonometric secant function
     * @param {number} x    The secant value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAsec(x) {
        return SpecialValueTrigonometric.getSpecialValue(x, SpecialValueTrigonometric.valuesListAsec);
    }
    /**
     * Returns special value of inverse trigonometric cosecant function
     * @param {number} x    The cosecant value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAcsc(x) {
        return SpecialValueTrigonometric.getSpecialValue(x, SpecialValueTrigonometric.valuesListAcsc);
    }
    /**
     * Returns special value of inverse trigonometric function
     * @param {number} x              The trigonometric function value value
     * @param {*} valuesList     List of special values of a given trigonometric function
     * @return               {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     * @private
     */
    /*private*/ static getSpecialValue(x, valuesList) {
        if ( /* isNaN */isNaN(x))
            return null;
        if ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(x))
            return null;
        for (let index123 = valuesList.iterator(); index123.hasNext();) {
            let sv = index123.next();
            {
                if ((sv.xFrom <= x) && (x <= sv.xTo))
                    return sv;
            }
        }
        return null;
    }
}
exports.SpecialValueTrigonometric = SpecialValueTrigonometric;
SpecialValueTrigonometric.SIN_0 = 0.0;
SpecialValueTrigonometric.COS_0 = 1.0;
SpecialValueTrigonometric.TAN_0 = 0.0;
SpecialValueTrigonometric.SEC_0 = 1.0;
SpecialValueTrigonometric.SIN_30 = 0.5;
SpecialValueTrigonometric.CSC_30 = 2.0;
SpecialValueTrigonometric.TAN_45 = 1.0;
SpecialValueTrigonometric.CTAN_45 = 1.0;
SpecialValueTrigonometric.COS_60 = 0.5;
SpecialValueTrigonometric.SEC_60 = 2.0;
SpecialValueTrigonometric.SIN_90 = 1.0;
SpecialValueTrigonometric.COS_90 = 0.0;
SpecialValueTrigonometric.CTAN_90 = 0;
SpecialValueTrigonometric.CSC_90 = 1.0;
/**
 * List of special values of inverse sine function
 */
SpecialValueTrigonometric.valuesListAsin = null;
/**
 * List of special values of inverse cosine function
 */
SpecialValueTrigonometric.valuesListAcos = null;
/**
 * List of special values of inverse tangent function
 */
SpecialValueTrigonometric.valuesListAtan = null;
/**
 * List of special values of inverse cotangent function
 */
SpecialValueTrigonometric.valuesListActan = null;
/**
 * List of special values of inverse secant function
 */
SpecialValueTrigonometric.valuesListAsec = null;
/**
 * List of special values of inverse cosecant function
 */
SpecialValueTrigonometric.valuesListAcsc = null;
SpecialValueTrigonometric["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.SpecialValueTrigonometric";
//# sourceMappingURL=SpecialValueTrigonometric.js.map