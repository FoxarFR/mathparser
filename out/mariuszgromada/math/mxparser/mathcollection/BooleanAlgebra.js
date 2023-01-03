"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanAlgebra = void 0;
/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
const mXparserConstants_1 = require("../mXparserConstants");
const MathFunctions_1 = require("./MathFunctions");
const BinaryRelations_1 = require("./BinaryRelations");
const j4ts_1 = require("j4ts/j4ts");
/**
 * BooleanAlgebra - class for boolean operators.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
class BooleanAlgebra {
    static N_$LI$() { if (BooleanAlgebra.N == null) {
        BooleanAlgebra.N = j4ts_1.javaemul.internal.DoubleHelper.NaN;
    } return BooleanAlgebra.N; }
    static AND_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.AND_TRUTH_TABLE == null) {
        BooleanAlgebra.AND_TRUTH_TABLE = [[BooleanAlgebra.F, BooleanAlgebra.F, BooleanAlgebra.F], [BooleanAlgebra.F, BooleanAlgebra.T, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.F, BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.AND_TRUTH_TABLE; }
    static NAND_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.NAND_TRUTH_TABLE == null) {
        BooleanAlgebra.NAND_TRUTH_TABLE = [[BooleanAlgebra.T, BooleanAlgebra.T, BooleanAlgebra.T], [BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.T, BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.NAND_TRUTH_TABLE; }
    static OR_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.OR_TRUTH_TABLE == null) {
        BooleanAlgebra.OR_TRUTH_TABLE = [[BooleanAlgebra.F, BooleanAlgebra.T, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.T, BooleanAlgebra.T, BooleanAlgebra.T], [BooleanAlgebra.N_$LI$(), BooleanAlgebra.T, BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.OR_TRUTH_TABLE; }
    static NOR_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.NOR_TRUTH_TABLE == null) {
        BooleanAlgebra.NOR_TRUTH_TABLE = [[BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.F, BooleanAlgebra.F, BooleanAlgebra.F], [BooleanAlgebra.N_$LI$(), BooleanAlgebra.F, BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.NOR_TRUTH_TABLE; }
    static XOR_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.XOR_TRUTH_TABLE == null) {
        BooleanAlgebra.XOR_TRUTH_TABLE = [[BooleanAlgebra.F, BooleanAlgebra.T, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.XOR_TRUTH_TABLE; }
    static XNOR_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.XNOR_TRUTH_TABLE == null) {
        BooleanAlgebra.XNOR_TRUTH_TABLE = [[BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.F, BooleanAlgebra.T, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.XNOR_TRUTH_TABLE; }
    static IMP_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.IMP_TRUTH_TABLE == null) {
        BooleanAlgebra.IMP_TRUTH_TABLE = [[BooleanAlgebra.T, BooleanAlgebra.T, BooleanAlgebra.T], [BooleanAlgebra.F, BooleanAlgebra.T, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.N_$LI$(), BooleanAlgebra.T, BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.IMP_TRUTH_TABLE; }
    static CIMP_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.CIMP_TRUTH_TABLE == null) {
        BooleanAlgebra.CIMP_TRUTH_TABLE = [[BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.T, BooleanAlgebra.T, BooleanAlgebra.T], [BooleanAlgebra.T, BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.CIMP_TRUTH_TABLE; }
    static EQV_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.EQV_TRUTH_TABLE == null) {
        BooleanAlgebra.EQV_TRUTH_TABLE = [[BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.F, BooleanAlgebra.T, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.EQV_TRUTH_TABLE; }
    static NIMP_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.NIMP_TRUTH_TABLE == null) {
        BooleanAlgebra.NIMP_TRUTH_TABLE = [[BooleanAlgebra.F, BooleanAlgebra.F, BooleanAlgebra.F], [BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.N_$LI$(), BooleanAlgebra.F, BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.NIMP_TRUTH_TABLE; }
    static CNIMP_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.CNIMP_TRUTH_TABLE == null) {
        BooleanAlgebra.CNIMP_TRUTH_TABLE = [[BooleanAlgebra.F, BooleanAlgebra.T, BooleanAlgebra.N_$LI$()], [BooleanAlgebra.F, BooleanAlgebra.F, BooleanAlgebra.F], [BooleanAlgebra.F, BooleanAlgebra.N_$LI$(), BooleanAlgebra.N_$LI$()]];
    } return BooleanAlgebra.CNIMP_TRUTH_TABLE; }
    static NOT_TRUTH_TABLE_$LI$() { if (BooleanAlgebra.NOT_TRUTH_TABLE == null) {
        BooleanAlgebra.NOT_TRUTH_TABLE = [BooleanAlgebra.T, BooleanAlgebra.F, BooleanAlgebra.N_$LI$()];
    } return BooleanAlgebra.NOT_TRUTH_TABLE; }
    /**
     * Double to integer boolean translation
     *
     * @param      {number} a                   the double number
     *
     * @return     {number} If a = Double.NaN return NULL,
     * else if a &lt;&gt; 0 return TRUE,
     * else return FALSE.
     */
    static double2IntBoolean(a) {
        if ( /* isNaN */isNaN(a))
            return BooleanAlgebra.NULL;
        if (BinaryRelations_1.BinaryRelations.epsilonComparison) {
            if (MathFunctions_1.MathFunctions.abs(a) > BinaryRelations_1.BinaryRelations.epsilon_$LI$())
                return BooleanAlgebra.TRUE;
            else
                return BooleanAlgebra.FALSE;
        }
        else {
            if (a !== 0)
                return BooleanAlgebra.TRUE;
            else
                return BooleanAlgebra.FALSE;
        }
    }
    /**
     * Boolean AND
     *
     * @param      {number} a                   the a number (a AND b)
     * @param      {number} b                   the b number (a AND b)
     *
     * @return     {number} Truth table element AND[A][B] where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static and(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.AND_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean OR
     *
     * @param      {number} a                   the a number (a OR b)
     * @param      {number} b                   the b number (a OR b)
     *
     * @return     {number} Truth table element OR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static or(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.OR_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean XOR
     *
     * @param      {number} a                   the a number (a XOR b)
     * @param      {number} b                   the b number (a XOR b)
     *
     * @return     {number} Truth table element XOR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static xor(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.XOR_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean NAND
     *
     * @param      {number} a                   the a number (a NAND b)
     * @param      {number} b                   the b number (a NAND b)
     *
     * @return     {number} Truth table element NAND[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static nand(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.NAND_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean NOR
     *
     * @param      {number} a                   the a number (a NOR b)
     * @param      {number} b                   the b number (a NOR b)
     *
     * @return     {number} Truth table element NOR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static nor(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.NOR_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean XNOR
     *
     * @param      {number} a                   the a number (a XNOR b)
     * @param      {number} b                   the b number (a XNOR b)
     *
     * @return     {number} Truth table element XNOR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static xnor(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.XNOR_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean IMP
     *
     * @param      {number} a                   the a number (a IMP b)
     * @param      {number} b                   the b number (a IMP b)
     *
     * @return     {number} Truth table element IMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static imp(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.IMP_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean EQV
     *
     * @param      {number} a                   the a number (a EQV b)
     * @param      {number} b                   the b number (a EQV b)
     *
     * @return     {number} Truth table element EQV[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static eqv(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.EQV_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean NOT
     *
     * @param      {number} a                   the a number (NOT a)
     *
     * @return     {number} Truth table element NOT[A]
     * where A = double2IntBoolean(a)
     */
    static not(a) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        return BooleanAlgebra.NOT_TRUTH_TABLE_$LI$()[A];
    }
    /**
     * Boolean CIMP
     *
     * @param      {number} a                   the a number (a CIMP b)
     * @param      {number} b                   the b number (a CIMP b)
     *
     * @return     {number} Truth table element CIMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static cimp(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.CIMP_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean NIMP
     *
     * @param      {number} a                   the a number (a NIMP b)
     * @param      {number} b                   the b number (a NIMP b)
     *
     * @return     {number} Truth table element NIMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static nimp(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.NIMP_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean CNIMP
     *
     * @param      {number} a                   the a number (a CNIMP b)
     * @param      {number} b                   the b number (a CNIMP b)
     *
     * @return     {number} Truth table element CNIMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static cnimp(a, b) {
        const A = BooleanAlgebra.double2IntBoolean(a);
        const B = BooleanAlgebra.double2IntBoolean(b);
        return BooleanAlgebra.CNIMP_TRUTH_TABLE_$LI$()[A][B];
    }
    /**
     * Boolean AND variadic
     *
     * @param {double[]} values   List of values
     * @return   {number} Returns BooleanAlgebra.TRUE if all values on the list are BooleanAlgebra.TURE,
     * otherwise returns BooleanAlgebra.FALSE
     */
    static andVariadic(values) {
        if (values == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (values.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let cntTrue = 0;
        let bv;
        for (let index137 = 0; index137 < values.length; index137++) {
            let v = values[index137];
            {
                bv = BooleanAlgebra.double2IntBoolean(v);
                if (bv === BooleanAlgebra.FALSE)
                    return BooleanAlgebra.FALSE;
                if (bv === BooleanAlgebra.TRUE)
                    cntTrue++;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        if (cntTrue === values.length)
            return BooleanAlgebra.TRUE;
        else
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
    }
    /**
     * Boolean OR variadic
     *
     * @param {double[]} values   List of values
     * @return   {number} Returns BooleanAlgebra.TRUE if at least one value on the list is BooleanAlgebra.TURE,
     * otherwise returns BooleanAlgebra.FALSE
     */
    static orVariadic(values) {
        if (values == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (values.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let cntFalse = 0;
        let bv;
        for (let index138 = 0; index138 < values.length; index138++) {
            let v = values[index138];
            {
                bv = BooleanAlgebra.double2IntBoolean(v);
                if (bv === BooleanAlgebra.TRUE)
                    return BooleanAlgebra.TRUE;
                if (bv === BooleanAlgebra.FALSE)
                    cntFalse++;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        if (cntFalse === values.length)
            return BooleanAlgebra.FALSE;
        else
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
    }
    /**
     * Boolean XOR variadic
     *
     * @param {double[]} values   List of values
     * @return   {number} Returns BooleanAlgebra.TRUE if exactly one value on the list is BooleanAlgebra.TURE,
     * otherwise returns BooleanAlgebra.FALSE
     */
    static xorVariadic(values) {
        if (values == null)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (values.length === 0)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        let cntTrue = 0;
        let bv;
        for (let index139 = 0; index139 < values.length; index139++) {
            let v = values[index139];
            {
                bv = BooleanAlgebra.double2IntBoolean(v);
                if (bv === BooleanAlgebra.TRUE) {
                    cntTrue++;
                    if (cntTrue > 1)
                        return BooleanAlgebra.FALSE;
                }
                if (bv === BooleanAlgebra.NULL)
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        if (cntTrue === 1)
            return BooleanAlgebra.TRUE;
        else
            return BooleanAlgebra.FALSE;
    }
}
exports.BooleanAlgebra = BooleanAlgebra;
/**
 * False as integer
 */
BooleanAlgebra.FALSE = 0;
/**
 * True as integer
 */
BooleanAlgebra.TRUE = 1;
/**
 * Null as integer
 */
BooleanAlgebra.NULL = 2;
/**
 * False as double
 */
BooleanAlgebra.F = 0;
/**
 * True as double
 */
BooleanAlgebra.T = 1;
BooleanAlgebra["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.BooleanAlgebra";
//# sourceMappingURL=BooleanAlgebra.js.map