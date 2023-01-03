import { java } from 'j4ts/j4ts';
import { SpecialValue } from './SpecialValue';
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
export declare class SpecialValueTrigonometric {
    /**
     * Epsilon is used to compare the x value with regards to some given small interval
     */
    static EPSILON: number;
    static EPSILON_$LI$(): number;
    static SIN_0: number;
    static COS_0: number;
    static TAN_0: number;
    static CTAN_0: number;
    static CTAN_0_$LI$(): number;
    static SEC_0: number;
    static CSC_0: number;
    static CSC_0_$LI$(): number;
    static SIN_30: number;
    static COS_30: number;
    static COS_30_$LI$(): number;
    static TAN_30: number;
    static TAN_30_$LI$(): number;
    static CTAN_30: number;
    static CTAN_30_$LI$(): number;
    static SEC_30: number;
    static SEC_30_$LI$(): number;
    static CSC_30: number;
    static SIN_45: number;
    static SIN_45_$LI$(): number;
    static COS_45: number;
    static COS_45_$LI$(): number;
    static TAN_45: number;
    static CTAN_45: number;
    static SEC_45: number;
    static SEC_45_$LI$(): number;
    static CSC_45: number;
    static CSC_45_$LI$(): number;
    static SIN_60: number;
    static SIN_60_$LI$(): number;
    static COS_60: number;
    static TAN_60: number;
    static TAN_60_$LI$(): number;
    static CTAN_60: number;
    static CTAN_60_$LI$(): number;
    static SEC_60: number;
    static CSC_60: number;
    static CSC_60_$LI$(): number;
    static SIN_90: number;
    static COS_90: number;
    static TAN_90: number;
    static TAN_90_$LI$(): number;
    static CTAN_90: number;
    static SEC_90: number;
    static SEC_90_$LI$(): number;
    static CSC_90: number;
    static SIN_120: number;
    static SIN_120_$LI$(): number;
    static COS_120: number;
    static COS_120_$LI$(): number;
    static TAN_120: number;
    static TAN_120_$LI$(): number;
    static CTAN_120: number;
    static CTAN_120_$LI$(): number;
    static SEC_120: number;
    static SEC_120_$LI$(): number;
    static CSC_120: number;
    static CSC_120_$LI$(): number;
    static SIN_135: number;
    static SIN_135_$LI$(): number;
    static COS_135: number;
    static COS_135_$LI$(): number;
    static TAN_135: number;
    static TAN_135_$LI$(): number;
    static CTAN_135: number;
    static CTAN_135_$LI$(): number;
    static SEC_135: number;
    static SEC_135_$LI$(): number;
    static CSC_135: number;
    static CSC_135_$LI$(): number;
    static SIN_150: number;
    static SIN_150_$LI$(): number;
    static COS_150: number;
    static COS_150_$LI$(): number;
    static TAN_150: number;
    static TAN_150_$LI$(): number;
    static CTAN_150: number;
    static CTAN_150_$LI$(): number;
    static SEC_150: number;
    static SEC_150_$LI$(): number;
    static CSC_150: number;
    static CSC_150_$LI$(): number;
    static SIN_180: number;
    static SIN_180_$LI$(): number;
    static COS_180: number;
    static COS_180_$LI$(): number;
    static TAN_180: number;
    static TAN_180_$LI$(): number;
    static CTAN_180: number;
    static CTAN_180_$LI$(): number;
    static SEC_180: number;
    static SEC_180_$LI$(): number;
    static CSC_180: number;
    static CSC_180_$LI$(): number;
    static SIN_210: number;
    static SIN_210_$LI$(): number;
    static COS_210: number;
    static COS_210_$LI$(): number;
    static TAN_210: number;
    static TAN_210_$LI$(): number;
    static CTAN_210: number;
    static CTAN_210_$LI$(): number;
    static SEC_210: number;
    static SEC_210_$LI$(): number;
    static CSC_210: number;
    static CSC_210_$LI$(): number;
    static SIN_225: number;
    static SIN_225_$LI$(): number;
    static COS_225: number;
    static COS_225_$LI$(): number;
    static TAN_225: number;
    static TAN_225_$LI$(): number;
    static CTAN_225: number;
    static CTAN_225_$LI$(): number;
    static SEC_225: number;
    static SEC_225_$LI$(): number;
    static CSC_225: number;
    static CSC_225_$LI$(): number;
    static SIN_240: number;
    static SIN_240_$LI$(): number;
    static COS_240: number;
    static COS_240_$LI$(): number;
    static TAN_240: number;
    static TAN_240_$LI$(): number;
    static CTAN_240: number;
    static CTAN_240_$LI$(): number;
    static SEC_240: number;
    static SEC_240_$LI$(): number;
    static CSC_240: number;
    static CSC_240_$LI$(): number;
    static SIN_270: number;
    static SIN_270_$LI$(): number;
    static COS_270: number;
    static COS_270_$LI$(): number;
    static TAN_270: number;
    static TAN_270_$LI$(): number;
    static CTAN_270: number;
    static CTAN_270_$LI$(): number;
    static SEC_270: number;
    static SEC_270_$LI$(): number;
    static CSC_270: number;
    static CSC_270_$LI$(): number;
    static SIN_300: number;
    static SIN_300_$LI$(): number;
    static COS_300: number;
    static COS_300_$LI$(): number;
    static TAN_300: number;
    static TAN_300_$LI$(): number;
    static CTAN_300: number;
    static CTAN_300_$LI$(): number;
    static SEC_300: number;
    static SEC_300_$LI$(): number;
    static CSC_300: number;
    static CSC_300_$LI$(): number;
    static SIN_315: number;
    static SIN_315_$LI$(): number;
    static COS_315: number;
    static COS_315_$LI$(): number;
    static TAN_315: number;
    static TAN_315_$LI$(): number;
    static CTAN_315: number;
    static CTAN_315_$LI$(): number;
    static SEC_315: number;
    static SEC_315_$LI$(): number;
    static CSC_315: number;
    static CSC_315_$LI$(): number;
    static SIN_330: number;
    static SIN_330_$LI$(): number;
    static COS_330: number;
    static COS_330_$LI$(): number;
    static TAN_330: number;
    static TAN_330_$LI$(): number;
    static CTAN_330: number;
    static CTAN_330_$LI$(): number;
    static SEC_330: number;
    static SEC_330_$LI$(): number;
    static CSC_330: number;
    static CSC_330_$LI$(): number;
    static SIN_360: number;
    static SIN_360_$LI$(): number;
    static COS_360: number;
    static COS_360_$LI$(): number;
    static TAN_360: number;
    static TAN_360_$LI$(): number;
    static CTAN_360: number;
    static CTAN_360_$LI$(): number;
    static SEC_360: number;
    static SEC_360_$LI$(): number;
    static CSC_360: number;
    static CSC_360_$LI$(): number;
    /**
     * List of special values for all main trigonometric functions
     */
    static valuesListTrig: SpecialValueTrigonometric[];
    static valuesListTrig_$LI$(): SpecialValueTrigonometric[];
    /**
     * List of special values of inverse sine function
     */
    static valuesListAsin: java.util.List<SpecialValue>;
    /**
     * List of special values of inverse cosine function
     */
    static valuesListAcos: java.util.List<SpecialValue>;
    /**
     * List of special values of inverse tangent function
     */
    static valuesListAtan: java.util.List<SpecialValue>;
    /**
     * List of special values of inverse cotangent function
     */
    static valuesListActan: java.util.List<SpecialValue>;
    /**
     * List of special values of inverse secant function
     */
    static valuesListAsec: java.util.List<SpecialValue>;
    /**
     * List of special values of inverse cosecant function
     */
    static valuesListAcsc: java.util.List<SpecialValue>;
    /**
     * Angle factor in Pi radians
     */
    factor: number;
    /**
     * Angle in radians
     */
    xrad: number;
    /**
     * Angle in degrees
     */
    xdeg: number;
    /**
     * Angle in radians - the start of the interval where the function value is given
     */
    xradFrom: number;
    /**
     * Angle in radians - the end of the interval where the function value is given
     */
    xradTo: number;
    /**
     * The sine function value
     */
    sin: number;
    /**
     * The cosine function value
     */
    cos: number;
    /**
     * The tangent function value
     */
    tan: number;
    /**
     * The cotangent function value
     */
    ctan: number;
    /**
     * The secant function value
     */
    sec: number;
    /**
     * The cosecant function value
     */
    csc: number;
    constructor(factor: number, sin: number, cos: number, tan: number, ctan: number, sec: number, csc: number);
    /**
     * Returns special values of trigonometric functions
     *
     * @param {number} xrad   The angle provided in radians
     * @return       {SpecialValueTrigonometric} Returns special values of trigonometric functions object if the special value was found for a given x
     * otherwise returns null
     */
    static getSpecialValueTrigonometric(xrad: number): SpecialValueTrigonometric;
    /**
     * Returns special value of inverse trigonometric sine function
     * @param {number} x    The sine value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAsin(x: number): SpecialValue;
    /**
     * Returns special value of inverse trigonometric cosine function
     * @param {number} x    The cosine value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAcos(x: number): SpecialValue;
    /**
     * Returns special value of inverse trigonometric tangent function
     * @param {number} x    The tangent value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAtan(x: number): SpecialValue;
    /**
     * Returns special value of inverse trigonometric cotangent function
     * @param {number} x    The cotangent value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueActan(x: number): SpecialValue;
    /**
     * Returns special value of inverse trigonometric secant function
     * @param {number} x    The secant value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAsec(x: number): SpecialValue;
    /**
     * Returns special value of inverse trigonometric cosecant function
     * @param {number} x    The cosecant value
     * @return     {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     */
    static getSpecialValueAcsc(x: number): SpecialValue;
    /**
     * Returns special value of inverse trigonometric function
     * @param {number} x              The trigonometric function value value
     * @param {*} valuesList     List of special values of a given trigonometric function
     * @return               {SpecialValue} Returns special value object if special value was found,
     * other wise returns null.
     * @private
     */
    static getSpecialValue(x: number, valuesList: java.util.List<SpecialValue>): SpecialValue;
}
