"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function1Arg = void 0;
/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Unary functions (1 argument) - mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class Function1Arg {
    static SIN_SYN_$LI$() { if (Function1Arg.SIN_SYN == null) {
        Function1Arg.SIN_SYN = Function1Arg.SIN_STR + "(x)";
    } return Function1Arg.SIN_SYN; }
    static COS_SYN_$LI$() { if (Function1Arg.COS_SYN == null) {
        Function1Arg.COS_SYN = Function1Arg.COS_STR + "(x)";
    } return Function1Arg.COS_SYN; }
    static TAN_SYN_$LI$() { if (Function1Arg.TAN_SYN == null) {
        Function1Arg.TAN_SYN = Function1Arg.TAN_STR + "(x)";
    } return Function1Arg.TAN_SYN; }
    static TG_SYN_$LI$() { if (Function1Arg.TG_SYN == null) {
        Function1Arg.TG_SYN = Function1Arg.TG_STR + "(x)";
    } return Function1Arg.TG_SYN; }
    static CTAN_SYN_$LI$() { if (Function1Arg.CTAN_SYN == null) {
        Function1Arg.CTAN_SYN = Function1Arg.CTAN_STR + "(x)";
    } return Function1Arg.CTAN_SYN; }
    static CTG_SYN_$LI$() { if (Function1Arg.CTG_SYN == null) {
        Function1Arg.CTG_SYN = Function1Arg.CTG_STR + "(x)";
    } return Function1Arg.CTG_SYN; }
    static COT_SYN_$LI$() { if (Function1Arg.COT_SYN == null) {
        Function1Arg.COT_SYN = Function1Arg.COT_STR + "(x)";
    } return Function1Arg.COT_SYN; }
    static SEC_SYN_$LI$() { if (Function1Arg.SEC_SYN == null) {
        Function1Arg.SEC_SYN = Function1Arg.SEC_STR + "(x)";
    } return Function1Arg.SEC_SYN; }
    static COSEC_SYN_$LI$() { if (Function1Arg.COSEC_SYN == null) {
        Function1Arg.COSEC_SYN = Function1Arg.COSEC_STR + "(x)";
    } return Function1Arg.COSEC_SYN; }
    static CSC_SYN_$LI$() { if (Function1Arg.CSC_SYN == null) {
        Function1Arg.CSC_SYN = Function1Arg.CSC_STR + "(x)";
    } return Function1Arg.CSC_SYN; }
    static ASIN_SYN_$LI$() { if (Function1Arg.ASIN_SYN == null) {
        Function1Arg.ASIN_SYN = Function1Arg.ASIN_STR + "(x)";
    } return Function1Arg.ASIN_SYN; }
    static ARSIN_SYN_$LI$() { if (Function1Arg.ARSIN_SYN == null) {
        Function1Arg.ARSIN_SYN = Function1Arg.ARSIN_STR + "(x)";
    } return Function1Arg.ARSIN_SYN; }
    static ARCSIN_SYN_$LI$() { if (Function1Arg.ARCSIN_SYN == null) {
        Function1Arg.ARCSIN_SYN = Function1Arg.ARCSIN_STR + "(x)";
    } return Function1Arg.ARCSIN_SYN; }
    static ACOS_SYN_$LI$() { if (Function1Arg.ACOS_SYN == null) {
        Function1Arg.ACOS_SYN = Function1Arg.ACOS_STR + "(x)";
    } return Function1Arg.ACOS_SYN; }
    static ARCOS_SYN_$LI$() { if (Function1Arg.ARCOS_SYN == null) {
        Function1Arg.ARCOS_SYN = Function1Arg.ARCOS_STR + "(x)";
    } return Function1Arg.ARCOS_SYN; }
    static ARCCOS_SYN_$LI$() { if (Function1Arg.ARCCOS_SYN == null) {
        Function1Arg.ARCCOS_SYN = Function1Arg.ARCCOS_STR + "(x)";
    } return Function1Arg.ARCCOS_SYN; }
    static ATAN_SYN_$LI$() { if (Function1Arg.ATAN_SYN == null) {
        Function1Arg.ATAN_SYN = Function1Arg.ATAN_STR + "(x)";
    } return Function1Arg.ATAN_SYN; }
    static ARCTAN_SYN_$LI$() { if (Function1Arg.ARCTAN_SYN == null) {
        Function1Arg.ARCTAN_SYN = Function1Arg.ARCTAN_STR + "(x)";
    } return Function1Arg.ARCTAN_SYN; }
    static ATG_SYN_$LI$() { if (Function1Arg.ATG_SYN == null) {
        Function1Arg.ATG_SYN = Function1Arg.ATG_STR + "(x)";
    } return Function1Arg.ATG_SYN; }
    static ARCTG_SYN_$LI$() { if (Function1Arg.ARCTG_SYN == null) {
        Function1Arg.ARCTG_SYN = Function1Arg.ARCTG_STR + "(x)";
    } return Function1Arg.ARCTG_SYN; }
    static ACTAN_SYN_$LI$() { if (Function1Arg.ACTAN_SYN == null) {
        Function1Arg.ACTAN_SYN = Function1Arg.ACTAN_STR + "(x)";
    } return Function1Arg.ACTAN_SYN; }
    static ARCCTAN_SYN_$LI$() { if (Function1Arg.ARCCTAN_SYN == null) {
        Function1Arg.ARCCTAN_SYN = Function1Arg.ARCCTAN_STR + "(x)";
    } return Function1Arg.ARCCTAN_SYN; }
    static ACTG_SYN_$LI$() { if (Function1Arg.ACTG_SYN == null) {
        Function1Arg.ACTG_SYN = Function1Arg.ACTG_STR + "(x)";
    } return Function1Arg.ACTG_SYN; }
    static ARCCTG_SYN_$LI$() { if (Function1Arg.ARCCTG_SYN == null) {
        Function1Arg.ARCCTG_SYN = Function1Arg.ARCCTG_STR + "(x)";
    } return Function1Arg.ARCCTG_SYN; }
    static ACOT_SYN_$LI$() { if (Function1Arg.ACOT_SYN == null) {
        Function1Arg.ACOT_SYN = Function1Arg.ACOT_STR + "(x)";
    } return Function1Arg.ACOT_SYN; }
    static ARCCOT_SYN_$LI$() { if (Function1Arg.ARCCOT_SYN == null) {
        Function1Arg.ARCCOT_SYN = Function1Arg.ARCCOT_STR + "(x)";
    } return Function1Arg.ARCCOT_SYN; }
    static LN_SYN_$LI$() { if (Function1Arg.LN_SYN == null) {
        Function1Arg.LN_SYN = Function1Arg.LN_STR + "(x)";
    } return Function1Arg.LN_SYN; }
    static LOG2_SYN_$LI$() { if (Function1Arg.LOG2_SYN == null) {
        Function1Arg.LOG2_SYN = Function1Arg.LOG2_STR + "(x)";
    } return Function1Arg.LOG2_SYN; }
    static LOG10_SYN_$LI$() { if (Function1Arg.LOG10_SYN == null) {
        Function1Arg.LOG10_SYN = Function1Arg.LOG10_STR + "(x)";
    } return Function1Arg.LOG10_SYN; }
    static RAD_SYN_$LI$() { if (Function1Arg.RAD_SYN == null) {
        Function1Arg.RAD_SYN = Function1Arg.RAD_STR + "(x)";
    } return Function1Arg.RAD_SYN; }
    static EXP_SYN_$LI$() { if (Function1Arg.EXP_SYN == null) {
        Function1Arg.EXP_SYN = Function1Arg.EXP_STR + "(x)";
    } return Function1Arg.EXP_SYN; }
    static SQRT_SYN_$LI$() { if (Function1Arg.SQRT_SYN == null) {
        Function1Arg.SQRT_SYN = Function1Arg.SQRT_STR + "(x)";
    } return Function1Arg.SQRT_SYN; }
    static SINH_SYN_$LI$() { if (Function1Arg.SINH_SYN == null) {
        Function1Arg.SINH_SYN = Function1Arg.SINH_STR + "(x)";
    } return Function1Arg.SINH_SYN; }
    static COSH_SYN_$LI$() { if (Function1Arg.COSH_SYN == null) {
        Function1Arg.COSH_SYN = Function1Arg.COSH_STR + "(x)";
    } return Function1Arg.COSH_SYN; }
    static TANH_SYN_$LI$() { if (Function1Arg.TANH_SYN == null) {
        Function1Arg.TANH_SYN = Function1Arg.TANH_STR + "(x)";
    } return Function1Arg.TANH_SYN; }
    static TGH_SYN_$LI$() { if (Function1Arg.TGH_SYN == null) {
        Function1Arg.TGH_SYN = Function1Arg.TGH_STR + "(x)";
    } return Function1Arg.TGH_SYN; }
    static CTANH_SYN_$LI$() { if (Function1Arg.CTANH_SYN == null) {
        Function1Arg.CTANH_SYN = Function1Arg.CTANH_STR + "(x)";
    } return Function1Arg.CTANH_SYN; }
    static COTH_SYN_$LI$() { if (Function1Arg.COTH_SYN == null) {
        Function1Arg.COTH_SYN = Function1Arg.COTH_STR + "(x)";
    } return Function1Arg.COTH_SYN; }
    static CTGH_SYN_$LI$() { if (Function1Arg.CTGH_SYN == null) {
        Function1Arg.CTGH_SYN = Function1Arg.CTGH_STR + "(x)";
    } return Function1Arg.CTGH_SYN; }
    static SECH_SYN_$LI$() { if (Function1Arg.SECH_SYN == null) {
        Function1Arg.SECH_SYN = Function1Arg.SECH_STR + "(x)";
    } return Function1Arg.SECH_SYN; }
    static CSCH_SYN_$LI$() { if (Function1Arg.CSCH_SYN == null) {
        Function1Arg.CSCH_SYN = Function1Arg.CSCH_STR + "(x)";
    } return Function1Arg.CSCH_SYN; }
    static COSECH_SYN_$LI$() { if (Function1Arg.COSECH_SYN == null) {
        Function1Arg.COSECH_SYN = Function1Arg.COSECH_STR + "(x)";
    } return Function1Arg.COSECH_SYN; }
    static DEG_SYN_$LI$() { if (Function1Arg.DEG_SYN == null) {
        Function1Arg.DEG_SYN = Function1Arg.DEG_STR + "(x)";
    } return Function1Arg.DEG_SYN; }
    static ABS_SYN_$LI$() { if (Function1Arg.ABS_SYN == null) {
        Function1Arg.ABS_SYN = Function1Arg.ABS_STR + "(x)";
    } return Function1Arg.ABS_SYN; }
    static SGN_SYN_$LI$() { if (Function1Arg.SGN_SYN == null) {
        Function1Arg.SGN_SYN = Function1Arg.SGN_STR + "(x)";
    } return Function1Arg.SGN_SYN; }
    static FLOOR_SYN_$LI$() { if (Function1Arg.FLOOR_SYN == null) {
        Function1Arg.FLOOR_SYN = Function1Arg.FLOOR_STR + "(x)";
    } return Function1Arg.FLOOR_SYN; }
    static CEIL_SYN_$LI$() { if (Function1Arg.CEIL_SYN == null) {
        Function1Arg.CEIL_SYN = Function1Arg.CEIL_STR + "(x)";
    } return Function1Arg.CEIL_SYN; }
    static NOT_SYN_$LI$() { if (Function1Arg.NOT_SYN == null) {
        Function1Arg.NOT_SYN = Function1Arg.NOT_STR + "(x)";
    } return Function1Arg.NOT_SYN; }
    static ASINH_SYN_$LI$() { if (Function1Arg.ASINH_SYN == null) {
        Function1Arg.ASINH_SYN = Function1Arg.ASINH_STR + "(x)";
    } return Function1Arg.ASINH_SYN; }
    static ARSINH_SYN_$LI$() { if (Function1Arg.ARSINH_SYN == null) {
        Function1Arg.ARSINH_SYN = Function1Arg.ARSINH_STR + "(x)";
    } return Function1Arg.ARSINH_SYN; }
    static ARCSINH_SYN_$LI$() { if (Function1Arg.ARCSINH_SYN == null) {
        Function1Arg.ARCSINH_SYN = Function1Arg.ARCSINH_STR + "(x)";
    } return Function1Arg.ARCSINH_SYN; }
    static ACOSH_SYN_$LI$() { if (Function1Arg.ACOSH_SYN == null) {
        Function1Arg.ACOSH_SYN = Function1Arg.ACOSH_STR + "(x)";
    } return Function1Arg.ACOSH_SYN; }
    static ARCOSH_SYN_$LI$() { if (Function1Arg.ARCOSH_SYN == null) {
        Function1Arg.ARCOSH_SYN = Function1Arg.ARCOSH_STR + "(x)";
    } return Function1Arg.ARCOSH_SYN; }
    static ARCCOSH_SYN_$LI$() { if (Function1Arg.ARCCOSH_SYN == null) {
        Function1Arg.ARCCOSH_SYN = Function1Arg.ARCCOSH_STR + "(x)";
    } return Function1Arg.ARCCOSH_SYN; }
    static ATANH_SYN_$LI$() { if (Function1Arg.ATANH_SYN == null) {
        Function1Arg.ATANH_SYN = Function1Arg.ATANH_STR + "(x)";
    } return Function1Arg.ATANH_SYN; }
    static ARCTANH_SYN_$LI$() { if (Function1Arg.ARCTANH_SYN == null) {
        Function1Arg.ARCTANH_SYN = Function1Arg.ARCTANH_STR + "(x)";
    } return Function1Arg.ARCTANH_SYN; }
    static ATGH_SYN_$LI$() { if (Function1Arg.ATGH_SYN == null) {
        Function1Arg.ATGH_SYN = Function1Arg.ATGH_STR + "(x)";
    } return Function1Arg.ATGH_SYN; }
    static ARCTGH_SYN_$LI$() { if (Function1Arg.ARCTGH_SYN == null) {
        Function1Arg.ARCTGH_SYN = Function1Arg.ARCTGH_STR + "(x)";
    } return Function1Arg.ARCTGH_SYN; }
    static ACTANH_SYN_$LI$() { if (Function1Arg.ACTANH_SYN == null) {
        Function1Arg.ACTANH_SYN = Function1Arg.ACTANH_STR + "(x)";
    } return Function1Arg.ACTANH_SYN; }
    static ARCCTANH_SYN_$LI$() { if (Function1Arg.ARCCTANH_SYN == null) {
        Function1Arg.ARCCTANH_SYN = Function1Arg.ARCCTANH_STR + "(x)";
    } return Function1Arg.ARCCTANH_SYN; }
    static ACOTH_SYN_$LI$() { if (Function1Arg.ACOTH_SYN == null) {
        Function1Arg.ACOTH_SYN = Function1Arg.ACOTH_STR + "(x)";
    } return Function1Arg.ACOTH_SYN; }
    static ARCOTH_SYN_$LI$() { if (Function1Arg.ARCOTH_SYN == null) {
        Function1Arg.ARCOTH_SYN = Function1Arg.ARCOTH_STR + "(x)";
    } return Function1Arg.ARCOTH_SYN; }
    static ARCCOTH_SYN_$LI$() { if (Function1Arg.ARCCOTH_SYN == null) {
        Function1Arg.ARCCOTH_SYN = Function1Arg.ARCCOTH_STR + "(x)";
    } return Function1Arg.ARCCOTH_SYN; }
    static ACTGH_SYN_$LI$() { if (Function1Arg.ACTGH_SYN == null) {
        Function1Arg.ACTGH_SYN = Function1Arg.ACTGH_STR + "(x)";
    } return Function1Arg.ACTGH_SYN; }
    static ARCCTGH_SYN_$LI$() { if (Function1Arg.ARCCTGH_SYN == null) {
        Function1Arg.ARCCTGH_SYN = Function1Arg.ARCCTGH_STR + "(x)";
    } return Function1Arg.ARCCTGH_SYN; }
    static ASECH_SYN_$LI$() { if (Function1Arg.ASECH_SYN == null) {
        Function1Arg.ASECH_SYN = Function1Arg.ASECH_STR + "(x)";
    } return Function1Arg.ASECH_SYN; }
    static ARSECH_SYN_$LI$() { if (Function1Arg.ARSECH_SYN == null) {
        Function1Arg.ARSECH_SYN = Function1Arg.ARSECH_STR + "(x)";
    } return Function1Arg.ARSECH_SYN; }
    static ARCSECH_SYN_$LI$() { if (Function1Arg.ARCSECH_SYN == null) {
        Function1Arg.ARCSECH_SYN = Function1Arg.ARCSECH_STR + "(x)";
    } return Function1Arg.ARCSECH_SYN; }
    static ACSCH_SYN_$LI$() { if (Function1Arg.ACSCH_SYN == null) {
        Function1Arg.ACSCH_SYN = Function1Arg.ACSCH_STR + "(x)";
    } return Function1Arg.ACSCH_SYN; }
    static ARCSCH_SYN_$LI$() { if (Function1Arg.ARCSCH_SYN == null) {
        Function1Arg.ARCSCH_SYN = Function1Arg.ARCSCH_STR + "(x)";
    } return Function1Arg.ARCSCH_SYN; }
    static ARCCSCH_SYN_$LI$() { if (Function1Arg.ARCCSCH_SYN == null) {
        Function1Arg.ARCCSCH_SYN = Function1Arg.ARCCSCH_STR + "(x)";
    } return Function1Arg.ARCCSCH_SYN; }
    static ACOSECH_SYN_$LI$() { if (Function1Arg.ACOSECH_SYN == null) {
        Function1Arg.ACOSECH_SYN = Function1Arg.ACOSECH_STR + "(x)";
    } return Function1Arg.ACOSECH_SYN; }
    static ARCOSECH_SYN_$LI$() { if (Function1Arg.ARCOSECH_SYN == null) {
        Function1Arg.ARCOSECH_SYN = Function1Arg.ARCOSECH_STR + "(x)";
    } return Function1Arg.ARCOSECH_SYN; }
    static ARCCOSECH_SYN_$LI$() { if (Function1Arg.ARCCOSECH_SYN == null) {
        Function1Arg.ARCCOSECH_SYN = Function1Arg.ARCCOSECH_STR + "(x)";
    } return Function1Arg.ARCCOSECH_SYN; }
    static SA_SYN_$LI$() { if (Function1Arg.SA_SYN == null) {
        Function1Arg.SA_SYN = Function1Arg.SA_STR + "(x)";
    } return Function1Arg.SA_SYN; }
    static SA1_SYN_$LI$() { if (Function1Arg.SA1_SYN == null) {
        Function1Arg.SA1_SYN = Function1Arg.SA1_STR + "(x)";
    } return Function1Arg.SA1_SYN; }
    static SINC_SYN_$LI$() { if (Function1Arg.SINC_SYN == null) {
        Function1Arg.SINC_SYN = Function1Arg.SINC_STR + "(x)";
    } return Function1Arg.SINC_SYN; }
    static BELL_NUMBER_SYN_$LI$() { if (Function1Arg.BELL_NUMBER_SYN == null) {
        Function1Arg.BELL_NUMBER_SYN = Function1Arg.BELL_NUMBER_STR + "(n)";
    } return Function1Arg.BELL_NUMBER_SYN; }
    static LUCAS_NUMBER_SYN_$LI$() { if (Function1Arg.LUCAS_NUMBER_SYN == null) {
        Function1Arg.LUCAS_NUMBER_SYN = Function1Arg.LUCAS_NUMBER_STR + "(n)";
    } return Function1Arg.LUCAS_NUMBER_SYN; }
    static FIBONACCI_NUMBER_SYN_$LI$() { if (Function1Arg.FIBONACCI_NUMBER_SYN == null) {
        Function1Arg.FIBONACCI_NUMBER_SYN = Function1Arg.FIBONACCI_NUMBER_STR + "(n)";
    } return Function1Arg.FIBONACCI_NUMBER_SYN; }
    static HARMONIC_NUMBER_SYN_$LI$() { if (Function1Arg.HARMONIC_NUMBER_SYN == null) {
        Function1Arg.HARMONIC_NUMBER_SYN = Function1Arg.HARMONIC_NUMBER_STR + "(n)";
    } return Function1Arg.HARMONIC_NUMBER_SYN; }
    static IS_PRIME_SYN_$LI$() { if (Function1Arg.IS_PRIME_SYN == null) {
        Function1Arg.IS_PRIME_SYN = Function1Arg.IS_PRIME_STR + "(n)";
    } return Function1Arg.IS_PRIME_SYN; }
    static PRIME_COUNT_SYN_$LI$() { if (Function1Arg.PRIME_COUNT_SYN == null) {
        Function1Arg.PRIME_COUNT_SYN = Function1Arg.PRIME_COUNT_STR + "(n)";
    } return Function1Arg.PRIME_COUNT_SYN; }
    static EXP_INT_SYN_$LI$() { if (Function1Arg.EXP_INT_SYN == null) {
        Function1Arg.EXP_INT_SYN = Function1Arg.EXP_INT_STR + "(x)";
    } return Function1Arg.EXP_INT_SYN; }
    static LOG_INT_SYN_$LI$() { if (Function1Arg.LOG_INT_SYN == null) {
        Function1Arg.LOG_INT_SYN = Function1Arg.LOG_INT_STR + "(x)";
    } return Function1Arg.LOG_INT_SYN; }
    static OFF_LOG_INT_SYN_$LI$() { if (Function1Arg.OFF_LOG_INT_SYN == null) {
        Function1Arg.OFF_LOG_INT_SYN = Function1Arg.OFF_LOG_INT_STR + "(x)";
    } return Function1Arg.OFF_LOG_INT_SYN; }
    static GAUSS_ERF_SYN_$LI$() { if (Function1Arg.GAUSS_ERF_SYN == null) {
        Function1Arg.GAUSS_ERF_SYN = Function1Arg.GAUSS_ERF_STR + "(x)";
    } return Function1Arg.GAUSS_ERF_SYN; }
    static GAUSS_ERFC_SYN_$LI$() { if (Function1Arg.GAUSS_ERFC_SYN == null) {
        Function1Arg.GAUSS_ERFC_SYN = Function1Arg.GAUSS_ERFC_STR + "(x)";
    } return Function1Arg.GAUSS_ERFC_SYN; }
    static GAUSS_ERF_INV_SYN_$LI$() { if (Function1Arg.GAUSS_ERF_INV_SYN == null) {
        Function1Arg.GAUSS_ERF_INV_SYN = Function1Arg.GAUSS_ERF_INV_STR + "(x)";
    } return Function1Arg.GAUSS_ERF_INV_SYN; }
    static GAUSS_ERFC_INV_SYN_$LI$() { if (Function1Arg.GAUSS_ERFC_INV_SYN == null) {
        Function1Arg.GAUSS_ERFC_INV_SYN = Function1Arg.GAUSS_ERFC_INV_STR + "(x)";
    } return Function1Arg.GAUSS_ERFC_INV_SYN; }
    static ULP_SYN_$LI$() { if (Function1Arg.ULP_SYN == null) {
        Function1Arg.ULP_SYN = Function1Arg.ULP_STR + "(x)";
    } return Function1Arg.ULP_SYN; }
    static ISNAN_SYN_$LI$() { if (Function1Arg.ISNAN_SYN == null) {
        Function1Arg.ISNAN_SYN = Function1Arg.ISNAN_STR + "(x)";
    } return Function1Arg.ISNAN_SYN; }
    static NDIG10_SYN_$LI$() { if (Function1Arg.NDIG10_SYN == null) {
        Function1Arg.NDIG10_SYN = Function1Arg.NDIG10_STR + "(x)";
    } return Function1Arg.NDIG10_SYN; }
    static NFACT_SYN_$LI$() { if (Function1Arg.NFACT_SYN == null) {
        Function1Arg.NFACT_SYN = Function1Arg.NFACT_STR + "(x)";
    } return Function1Arg.NFACT_SYN; }
    static ARCSEC_SYN_$LI$() { if (Function1Arg.ARCSEC_SYN == null) {
        Function1Arg.ARCSEC_SYN = Function1Arg.ARCSEC_STR + "(x)";
    } return Function1Arg.ARCSEC_SYN; }
    static ARCCSC_SYN_$LI$() { if (Function1Arg.ARCCSC_SYN == null) {
        Function1Arg.ARCCSC_SYN = Function1Arg.ARCCSC_STR + "(x)";
    } return Function1Arg.ARCCSC_SYN; }
    static GAMMA_SYN_$LI$() { if (Function1Arg.GAMMA_SYN == null) {
        Function1Arg.GAMMA_SYN = Function1Arg.GAMMA_STR + "(x)";
    } return Function1Arg.GAMMA_SYN; }
    static LAMBERT_W0_SYN_$LI$() { if (Function1Arg.LAMBERT_W0_SYN == null) {
        Function1Arg.LAMBERT_W0_SYN = Function1Arg.LAMBERT_W0_STR + "(x)";
    } return Function1Arg.LAMBERT_W0_SYN; }
    static LAMBERT_W1_SYN_$LI$() { if (Function1Arg.LAMBERT_W1_SYN == null) {
        Function1Arg.LAMBERT_W1_SYN = Function1Arg.LAMBERT_W1_STR + "(x)";
    } return Function1Arg.LAMBERT_W1_SYN; }
    static SGN_GAMMA_SYN_$LI$() { if (Function1Arg.SGN_GAMMA_SYN == null) {
        Function1Arg.SGN_GAMMA_SYN = Function1Arg.SGN_GAMMA_STR + "(x)";
    } return Function1Arg.SGN_GAMMA_SYN; }
    static LOG_GAMMA_SYN_$LI$() { if (Function1Arg.LOG_GAMMA_SYN == null) {
        Function1Arg.LOG_GAMMA_SYN = Function1Arg.LOG_GAMMA_STR + "(x)";
    } return Function1Arg.LOG_GAMMA_SYN; }
    static DI_GAMMA_SYN_$LI$() { if (Function1Arg.DI_GAMMA_SYN == null) {
        Function1Arg.DI_GAMMA_SYN = Function1Arg.DI_GAMMA_STR + "(x)";
    } return Function1Arg.DI_GAMMA_SYN; }
    static PARAM_SYN_$LI$() { if (Function1Arg.PARAM_SYN == null) {
        Function1Arg.PARAM_SYN = Function1Arg.PARAM_STR + "(i)";
    } return Function1Arg.PARAM_SYN; }
    static SIN_SINCE_$LI$() { if (Function1Arg.SIN_SINCE == null) {
        Function1Arg.SIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SIN_SINCE; }
    static COS_SINCE_$LI$() { if (Function1Arg.COS_SINCE == null) {
        Function1Arg.COS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.COS_SINCE; }
    static TAN_SINCE_$LI$() { if (Function1Arg.TAN_SINCE == null) {
        Function1Arg.TAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.TAN_SINCE; }
    static CTAN_SINCE_$LI$() { if (Function1Arg.CTAN_SINCE == null) {
        Function1Arg.CTAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.CTAN_SINCE; }
    static SEC_SINCE_$LI$() { if (Function1Arg.SEC_SINCE == null) {
        Function1Arg.SEC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SEC_SINCE; }
    static COSEC_SINCE_$LI$() { if (Function1Arg.COSEC_SINCE == null) {
        Function1Arg.COSEC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.COSEC_SINCE; }
    static ASIN_SINCE_$LI$() { if (Function1Arg.ASIN_SINCE == null) {
        Function1Arg.ASIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ASIN_SINCE; }
    static ACOS_SINCE_$LI$() { if (Function1Arg.ACOS_SINCE == null) {
        Function1Arg.ACOS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ACOS_SINCE; }
    static ATAN_SINCE_$LI$() { if (Function1Arg.ATAN_SINCE == null) {
        Function1Arg.ATAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ATAN_SINCE; }
    static ACTAN_SINCE_$LI$() { if (Function1Arg.ACTAN_SINCE == null) {
        Function1Arg.ACTAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ACTAN_SINCE; }
    static LN_SINCE_$LI$() { if (Function1Arg.LN_SINCE == null) {
        Function1Arg.LN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.LN_SINCE; }
    static LOG2_SINCE_$LI$() { if (Function1Arg.LOG2_SINCE == null) {
        Function1Arg.LOG2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.LOG2_SINCE; }
    static LOG10_SINCE_$LI$() { if (Function1Arg.LOG10_SINCE == null) {
        Function1Arg.LOG10_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.LOG10_SINCE; }
    static RAD_SINCE_$LI$() { if (Function1Arg.RAD_SINCE == null) {
        Function1Arg.RAD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.RAD_SINCE; }
    static EXP_SINCE_$LI$() { if (Function1Arg.EXP_SINCE == null) {
        Function1Arg.EXP_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.EXP_SINCE; }
    static SQRT_SINCE_$LI$() { if (Function1Arg.SQRT_SINCE == null) {
        Function1Arg.SQRT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SQRT_SINCE; }
    static SINH_SINCE_$LI$() { if (Function1Arg.SINH_SINCE == null) {
        Function1Arg.SINH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SINH_SINCE; }
    static COSH_SINCE_$LI$() { if (Function1Arg.COSH_SINCE == null) {
        Function1Arg.COSH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.COSH_SINCE; }
    static TANH_SINCE_$LI$() { if (Function1Arg.TANH_SINCE == null) {
        Function1Arg.TANH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.TANH_SINCE; }
    static COTH_SINCE_$LI$() { if (Function1Arg.COTH_SINCE == null) {
        Function1Arg.COTH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.COTH_SINCE; }
    static SECH_SINCE_$LI$() { if (Function1Arg.SECH_SINCE == null) {
        Function1Arg.SECH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SECH_SINCE; }
    static CSCH_SINCE_$LI$() { if (Function1Arg.CSCH_SINCE == null) {
        Function1Arg.CSCH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.CSCH_SINCE; }
    static DEG_SINCE_$LI$() { if (Function1Arg.DEG_SINCE == null) {
        Function1Arg.DEG_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.DEG_SINCE; }
    static ABS_SINCE_$LI$() { if (Function1Arg.ABS_SINCE == null) {
        Function1Arg.ABS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ABS_SINCE; }
    static SGN_SINCE_$LI$() { if (Function1Arg.SGN_SINCE == null) {
        Function1Arg.SGN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SGN_SINCE; }
    static FLOOR_SINCE_$LI$() { if (Function1Arg.FLOOR_SINCE == null) {
        Function1Arg.FLOOR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.FLOOR_SINCE; }
    static CEIL_SINCE_$LI$() { if (Function1Arg.CEIL_SINCE == null) {
        Function1Arg.CEIL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.CEIL_SINCE; }
    static NOT_SINCE_$LI$() { if (Function1Arg.NOT_SINCE == null) {
        Function1Arg.NOT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.NOT_SINCE; }
    static ARSINH_SINCE_$LI$() { if (Function1Arg.ARSINH_SINCE == null) {
        Function1Arg.ARSINH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ARSINH_SINCE; }
    static ARCOSH_SINCE_$LI$() { if (Function1Arg.ARCOSH_SINCE == null) {
        Function1Arg.ARCOSH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ARCOSH_SINCE; }
    static ARTANH_SINCE_$LI$() { if (Function1Arg.ARTANH_SINCE == null) {
        Function1Arg.ARTANH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ARTANH_SINCE; }
    static ARCOTH_SINCE_$LI$() { if (Function1Arg.ARCOTH_SINCE == null) {
        Function1Arg.ARCOTH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ARCOTH_SINCE; }
    static ARSECH_SINCE_$LI$() { if (Function1Arg.ARSECH_SINCE == null) {
        Function1Arg.ARSECH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ARSECH_SINCE; }
    static ARCSCH_SINCE_$LI$() { if (Function1Arg.ARCSCH_SINCE == null) {
        Function1Arg.ARCSCH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.ARCSCH_SINCE; }
    static SA_SINCE_$LI$() { if (Function1Arg.SA_SINCE == null) {
        Function1Arg.SA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SA_SINCE; }
    static SINC_SINCE_$LI$() { if (Function1Arg.SINC_SINCE == null) {
        Function1Arg.SINC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.SINC_SINCE; }
    static BELL_NUMBER_SINCE_$LI$() { if (Function1Arg.BELL_NUMBER_SINCE == null) {
        Function1Arg.BELL_NUMBER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.BELL_NUMBER_SINCE; }
    static LUCAS_NUMBER_SINCE_$LI$() { if (Function1Arg.LUCAS_NUMBER_SINCE == null) {
        Function1Arg.LUCAS_NUMBER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.LUCAS_NUMBER_SINCE; }
    static FIBONACCI_NUMBER_SINCE_$LI$() { if (Function1Arg.FIBONACCI_NUMBER_SINCE == null) {
        Function1Arg.FIBONACCI_NUMBER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.FIBONACCI_NUMBER_SINCE; }
    static HARMONIC_NUMBER_SINCE_$LI$() { if (Function1Arg.HARMONIC_NUMBER_SINCE == null) {
        Function1Arg.HARMONIC_NUMBER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return Function1Arg.HARMONIC_NUMBER_SINCE; }
    static IS_PRIME_SINCE_$LI$() { if (Function1Arg.IS_PRIME_SINCE == null) {
        Function1Arg.IS_PRIME_SINCE = mXparserConstants_1.mXparserConstants.NAMEv23;
    } return Function1Arg.IS_PRIME_SINCE; }
    static PRIME_COUNT_SINCE_$LI$() { if (Function1Arg.PRIME_COUNT_SINCE == null) {
        Function1Arg.PRIME_COUNT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv23;
    } return Function1Arg.PRIME_COUNT_SINCE; }
    static EXP_INT_SINCE_$LI$() { if (Function1Arg.EXP_INT_SINCE == null) {
        Function1Arg.EXP_INT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv23;
    } return Function1Arg.EXP_INT_SINCE; }
    static LOG_INT_SINCE_$LI$() { if (Function1Arg.LOG_INT_SINCE == null) {
        Function1Arg.LOG_INT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv23;
    } return Function1Arg.LOG_INT_SINCE; }
    static OFF_LOG_INT_SINCE_$LI$() { if (Function1Arg.OFF_LOG_INT_SINCE == null) {
        Function1Arg.OFF_LOG_INT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv23;
    } return Function1Arg.OFF_LOG_INT_SINCE; }
    static GAUSS_ERF_SINCE_$LI$() { if (Function1Arg.GAUSS_ERF_SINCE == null) {
        Function1Arg.GAUSS_ERF_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function1Arg.GAUSS_ERF_SINCE; }
    static GAUSS_ERFC_SINCE_$LI$() { if (Function1Arg.GAUSS_ERFC_SINCE == null) {
        Function1Arg.GAUSS_ERFC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function1Arg.GAUSS_ERFC_SINCE; }
    static GAUSS_ERF_INV_SINCE_$LI$() { if (Function1Arg.GAUSS_ERF_INV_SINCE == null) {
        Function1Arg.GAUSS_ERF_INV_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function1Arg.GAUSS_ERF_INV_SINCE; }
    static GAUSS_ERFC_INV_SINCE_$LI$() { if (Function1Arg.GAUSS_ERFC_INV_SINCE == null) {
        Function1Arg.GAUSS_ERFC_INV_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function1Arg.GAUSS_ERFC_INV_SINCE; }
    static ULP_SINCE_$LI$() { if (Function1Arg.ULP_SINCE == null) {
        Function1Arg.ULP_SINCE = mXparserConstants_1.mXparserConstants.NAMEv30;
    } return Function1Arg.ULP_SINCE; }
    static ISNAN_SINCE_$LI$() { if (Function1Arg.ISNAN_SINCE == null) {
        Function1Arg.ISNAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return Function1Arg.ISNAN_SINCE; }
    static NDIG10_SINCE_$LI$() { if (Function1Arg.NDIG10_SINCE == null) {
        Function1Arg.NDIG10_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return Function1Arg.NDIG10_SINCE; }
    static NFACT_SINCE_$LI$() { if (Function1Arg.NFACT_SINCE == null) {
        Function1Arg.NFACT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return Function1Arg.NFACT_SINCE; }
    static ARCSEC_SINCE_$LI$() { if (Function1Arg.ARCSEC_SINCE == null) {
        Function1Arg.ARCSEC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return Function1Arg.ARCSEC_SINCE; }
    static ARCCSC_SINCE_$LI$() { if (Function1Arg.ARCCSC_SINCE == null) {
        Function1Arg.ARCCSC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return Function1Arg.ARCCSC_SINCE; }
    static GAMMA_SINCE_$LI$() { if (Function1Arg.GAMMA_SINCE == null) {
        Function1Arg.GAMMA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function1Arg.GAMMA_SINCE; }
    static LAMBERT_W0_SINCE_$LI$() { if (Function1Arg.LAMBERT_W0_SINCE == null) {
        Function1Arg.LAMBERT_W0_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function1Arg.LAMBERT_W0_SINCE; }
    static LAMBERT_W1_SINCE_$LI$() { if (Function1Arg.LAMBERT_W1_SINCE == null) {
        Function1Arg.LAMBERT_W1_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function1Arg.LAMBERT_W1_SINCE; }
    static SGN_GAMMA_SINCE_$LI$() { if (Function1Arg.SGN_GAMMA_SINCE == null) {
        Function1Arg.SGN_GAMMA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function1Arg.SGN_GAMMA_SINCE; }
    static LOG_GAMMA_SINCE_$LI$() { if (Function1Arg.LOG_GAMMA_SINCE == null) {
        Function1Arg.LOG_GAMMA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function1Arg.LOG_GAMMA_SINCE; }
    static DI_GAMMA_SINCE_$LI$() { if (Function1Arg.DI_GAMMA_SINCE == null) {
        Function1Arg.DI_GAMMA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function1Arg.DI_GAMMA_SINCE; }
    static PARAM_SINCE_$LI$() { if (Function1Arg.PARAM_SINCE == null) {
        Function1Arg.PARAM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return Function1Arg.PARAM_SINCE; }
}
exports.Function1Arg = Function1Arg;
Function1Arg.TYPE_ID = 4;
Function1Arg.TYPE_DESC = "Unary Function";
Function1Arg.SIN_ID = 1;
Function1Arg.COS_ID = 2;
Function1Arg.TAN_ID = 3;
Function1Arg.CTAN_ID = 4;
Function1Arg.SEC_ID = 5;
Function1Arg.COSEC_ID = 6;
Function1Arg.ASIN_ID = 7;
Function1Arg.ACOS_ID = 8;
Function1Arg.ATAN_ID = 9;
Function1Arg.ACTAN_ID = 10;
Function1Arg.LN_ID = 11;
Function1Arg.LOG2_ID = 12;
Function1Arg.LOG10_ID = 13;
Function1Arg.RAD_ID = 14;
Function1Arg.EXP_ID = 15;
Function1Arg.SQRT_ID = 16;
Function1Arg.SINH_ID = 17;
Function1Arg.COSH_ID = 18;
Function1Arg.TANH_ID = 19;
Function1Arg.COTH_ID = 20;
Function1Arg.SECH_ID = 21;
Function1Arg.CSCH_ID = 22;
Function1Arg.DEG_ID = 23;
Function1Arg.ABS_ID = 24;
Function1Arg.SGN_ID = 25;
Function1Arg.FLOOR_ID = 26;
Function1Arg.CEIL_ID = 27;
Function1Arg.NOT_ID = 29;
Function1Arg.ARSINH_ID = 30;
Function1Arg.ARCOSH_ID = 31;
Function1Arg.ARTANH_ID = 32;
Function1Arg.ARCOTH_ID = 33;
Function1Arg.ARSECH_ID = 34;
Function1Arg.ARCSCH_ID = 35;
Function1Arg.SA_ID = 36;
Function1Arg.SINC_ID = 37;
Function1Arg.BELL_NUMBER_ID = 38;
Function1Arg.LUCAS_NUMBER_ID = 39;
Function1Arg.FIBONACCI_NUMBER_ID = 40;
Function1Arg.HARMONIC_NUMBER_ID = 41;
Function1Arg.IS_PRIME_ID = 42;
Function1Arg.PRIME_COUNT_ID = 43;
Function1Arg.EXP_INT_ID = 44;
Function1Arg.LOG_INT_ID = 45;
Function1Arg.OFF_LOG_INT_ID = 46;
Function1Arg.GAUSS_ERF_ID = 47;
Function1Arg.GAUSS_ERFC_ID = 48;
Function1Arg.GAUSS_ERF_INV_ID = 49;
Function1Arg.GAUSS_ERFC_INV_ID = 50;
Function1Arg.ULP_ID = 51;
Function1Arg.ISNAN_ID = 52;
Function1Arg.NDIG10_ID = 53;
Function1Arg.NFACT_ID = 54;
Function1Arg.ARCSEC_ID = 55;
Function1Arg.ARCCSC_ID = 56;
Function1Arg.GAMMA_ID = 57;
Function1Arg.LAMBERT_W0_ID = 58;
Function1Arg.LAMBERT_W1_ID = 59;
Function1Arg.SGN_GAMMA_ID = 60;
Function1Arg.LOG_GAMMA_ID = 61;
Function1Arg.DI_GAMMA_ID = 62;
Function1Arg.PARAM_ID = 63;
Function1Arg.SIN_STR = "sin";
Function1Arg.COS_STR = "cos";
Function1Arg.TAN_STR = "tan";
Function1Arg.TG_STR = "tg";
Function1Arg.CTAN_STR = "ctan";
Function1Arg.CTG_STR = "ctg";
Function1Arg.COT_STR = "cot";
Function1Arg.SEC_STR = "sec";
Function1Arg.COSEC_STR = "cosec";
Function1Arg.CSC_STR = "csc";
Function1Arg.ASIN_STR = "asin";
Function1Arg.ARSIN_STR = "arsin";
Function1Arg.ARCSIN_STR = "arcsin";
Function1Arg.ACOS_STR = "acos";
Function1Arg.ARCOS_STR = "arcos";
Function1Arg.ARCCOS_STR = "arccos";
Function1Arg.ATAN_STR = "atan";
Function1Arg.ARCTAN_STR = "arctan";
Function1Arg.ATG_STR = "atg";
Function1Arg.ARCTG_STR = "arctg";
Function1Arg.ACTAN_STR = "actan";
Function1Arg.ARCCTAN_STR = "arcctan";
Function1Arg.ACTG_STR = "actg";
Function1Arg.ARCCTG_STR = "arcctg";
Function1Arg.ACOT_STR = "acot";
Function1Arg.ARCCOT_STR = "arccot";
Function1Arg.LN_STR = "ln";
Function1Arg.LOG2_STR = "log2";
Function1Arg.LOG10_STR = "log10";
Function1Arg.RAD_STR = "rad";
Function1Arg.EXP_STR = "exp";
Function1Arg.SQRT_STR = "sqrt";
Function1Arg.SINH_STR = "sinh";
Function1Arg.COSH_STR = "cosh";
Function1Arg.TANH_STR = "tanh";
Function1Arg.TGH_STR = "tgh";
Function1Arg.CTANH_STR = "ctanh";
Function1Arg.COTH_STR = "coth";
Function1Arg.CTGH_STR = "ctgh";
Function1Arg.SECH_STR = "sech";
Function1Arg.CSCH_STR = "csch";
Function1Arg.COSECH_STR = "cosech";
Function1Arg.DEG_STR = "deg";
Function1Arg.ABS_STR = "abs";
Function1Arg.SGN_STR = "sgn";
Function1Arg.FLOOR_STR = "floor";
Function1Arg.CEIL_STR = "ceil";
Function1Arg.NOT_STR = "not";
Function1Arg.ASINH_STR = "asinh";
Function1Arg.ARSINH_STR = "arsinh";
Function1Arg.ARCSINH_STR = "arcsinh";
Function1Arg.ACOSH_STR = "acosh";
Function1Arg.ARCOSH_STR = "arcosh";
Function1Arg.ARCCOSH_STR = "arccosh";
Function1Arg.ATANH_STR = "atanh";
Function1Arg.ARCTANH_STR = "arctanh";
Function1Arg.ATGH_STR = "atgh";
Function1Arg.ARCTGH_STR = "arctgh";
Function1Arg.ACTANH_STR = "actanh";
Function1Arg.ARCCTANH_STR = "arcctanh";
Function1Arg.ACOTH_STR = "acoth";
Function1Arg.ARCOTH_STR = "arcoth";
Function1Arg.ARCCOTH_STR = "arccoth";
Function1Arg.ACTGH_STR = "actgh";
Function1Arg.ARCCTGH_STR = "arcctgh";
Function1Arg.ASECH_STR = "asech";
Function1Arg.ARSECH_STR = "arsech";
Function1Arg.ARCSECH_STR = "arcsech";
Function1Arg.ACSCH_STR = "acsch";
Function1Arg.ARCSCH_STR = "arcsch";
Function1Arg.ARCCSCH_STR = "arccsch";
Function1Arg.ACOSECH_STR = "acosech";
Function1Arg.ARCOSECH_STR = "arcosech";
Function1Arg.ARCCOSECH_STR = "arccosech";
Function1Arg.SA_STR = "sinc";
Function1Arg.SA1_STR = "Sa";
Function1Arg.SINC_STR = "Sinc";
Function1Arg.BELL_NUMBER_STR = "Bell";
Function1Arg.LUCAS_NUMBER_STR = "Luc";
Function1Arg.FIBONACCI_NUMBER_STR = "Fib";
Function1Arg.HARMONIC_NUMBER_STR = "harm";
Function1Arg.IS_PRIME_STR = "ispr";
Function1Arg.PRIME_COUNT_STR = "Pi";
Function1Arg.EXP_INT_STR = "Ei";
Function1Arg.LOG_INT_STR = "li";
Function1Arg.OFF_LOG_INT_STR = "Li";
Function1Arg.GAUSS_ERF_STR = "erf";
Function1Arg.GAUSS_ERFC_STR = "erfc";
Function1Arg.GAUSS_ERF_INV_STR = "erfInv";
Function1Arg.GAUSS_ERFC_INV_STR = "erfcInv";
Function1Arg.ULP_STR = "ulp";
Function1Arg.ISNAN_STR = "isNaN";
Function1Arg.NDIG10_STR = "ndig10";
Function1Arg.NFACT_STR = "nfact";
Function1Arg.ARCSEC_STR = "arcsec";
Function1Arg.ARCCSC_STR = "arccsc";
Function1Arg.GAMMA_STR = "Gamma";
Function1Arg.LAMBERT_W0_STR = "LambW0";
Function1Arg.LAMBERT_W1_STR = "LambW1";
Function1Arg.SGN_GAMMA_STR = "sgnGamma";
Function1Arg.LOG_GAMMA_STR = "logGamma";
Function1Arg.DI_GAMMA_STR = "diGamma";
Function1Arg.PARAM_STR = "par";
Function1Arg.SIN_DESC = "Trigonometric sine function";
Function1Arg.COS_DESC = "Trigonometric cosine function";
Function1Arg.TAN_DESC = "Trigonometric tangent function";
Function1Arg.CTAN_DESC = "Trigonometric cotangent function";
Function1Arg.SEC_DESC = "Trigonometric secant function";
Function1Arg.COSEC_DESC = "Trigonometric cosecant function";
Function1Arg.ASIN_DESC = "Inverse trigonometric sine function";
Function1Arg.ACOS_DESC = "Inverse trigonometric cosine function";
Function1Arg.ATAN_DESC = "Inverse trigonometric tangent function";
Function1Arg.ACTAN_DESC = "Inverse trigonometric cotangent function";
Function1Arg.LN_DESC = "Natural logarithm function (base e)";
Function1Arg.LOG2_DESC = "Binary logarithm function (base 2)";
Function1Arg.LOG10_DESC = "Common logarithm function (base 10)";
Function1Arg.RAD_DESC = "Degrees to radians function";
Function1Arg.EXP_DESC = "Exponential function";
Function1Arg.SQRT_DESC = "Squre root function";
Function1Arg.SINH_DESC = "Hyperbolic sine function";
Function1Arg.COSH_DESC = "Hyperbolic cosine function";
Function1Arg.TANH_DESC = "Hyperbolic tangent function";
Function1Arg.COTH_DESC = "Hyperbolic cotangent function";
Function1Arg.SECH_DESC = "Hyperbolic secant function";
Function1Arg.CSCH_DESC = "Hyperbolic cosecant function";
Function1Arg.DEG_DESC = "Radians to degrees function";
Function1Arg.ABS_DESC = "Absolut value function";
Function1Arg.SGN_DESC = "Signum function";
Function1Arg.FLOOR_DESC = "Floor function";
Function1Arg.CEIL_DESC = "Ceiling function";
Function1Arg.NOT_DESC = "Negation function";
Function1Arg.ARSINH_DESC = "Inverse hyperbolic sine function";
Function1Arg.ARCOSH_DESC = "Inverse hyperbolic cosine function";
Function1Arg.ARTANH_DESC = "Inverse hyperbolic tangent function";
Function1Arg.ARCOTH_DESC = "Inverse hyperbolic cotangent function";
Function1Arg.ARSECH_DESC = "Inverse hyperbolic secant function";
Function1Arg.ARCSCH_DESC = "Inverse hyperbolic cosecant function";
Function1Arg.SA_DESC = "Sinc function (normalized)";
Function1Arg.SINC_DESC = "Sinc function (unnormalized)";
Function1Arg.BELL_NUMBER_DESC = "Bell number";
Function1Arg.LUCAS_NUMBER_DESC = "Lucas number";
Function1Arg.FIBONACCI_NUMBER_DESC = "Fibonacci number";
Function1Arg.HARMONIC_NUMBER_DESC = "Harmonic number";
Function1Arg.IS_PRIME_DESC = "Prime number test (is number a prime?)";
Function1Arg.PRIME_COUNT_DESC = "Prime-counting function - Pi(x)";
Function1Arg.EXP_INT_DESC = "Exponential integral function (non-elementary special function) - usage example: Ei(x)";
Function1Arg.LOG_INT_DESC = "Logarithmic integral function (non-elementary special function) - usage example: li(x)";
Function1Arg.OFF_LOG_INT_DESC = "Offset logarithmic integral function (non-elementary special function) - usage example: Li(x)";
Function1Arg.GAUSS_ERF_DESC = "Gauss error function (non-elementary special function) - usage example: 2 + erf(x)";
Function1Arg.GAUSS_ERFC_DESC = "Gauss complementary error function (non-elementary special function) - usage example: 1 - erfc(x)";
Function1Arg.GAUSS_ERF_INV_DESC = "Inverse Gauss error function (non-elementary special function) - usage example: erfInv(x)";
Function1Arg.GAUSS_ERFC_INV_DESC = "Inverse Gauss complementary error function (non-elementary special function) - usage example: erfcInv(x)";
Function1Arg.ULP_DESC = "Unit in The Last Place - ulp(0.1)";
Function1Arg.ISNAN_DESC = "Returns true = 1 if value is a Not-a-Number (NaN), false = 0 otherwise - usage example: isNaN(x)";
Function1Arg.NDIG10_DESC = "Number of digits in numeral system with base 10";
Function1Arg.NFACT_DESC = "Prime decomposition - number of distinct prime factors";
Function1Arg.ARCSEC_DESC = "Inverse trigonometric secant";
Function1Arg.ARCCSC_DESC = "Inverse trigonometric cosecant";
Function1Arg.GAMMA_DESC = "Gamma special function \u0393(s)";
Function1Arg.LAMBERT_W0_DESC = "Lambert-W special function, principal branch 0, also called the omega function or product logarithm";
Function1Arg.LAMBERT_W1_DESC = "Lambert-W special function, branch -1, also called the omega function or product logarithm";
Function1Arg.SGN_GAMMA_DESC = "Signum of Gamma special function, \u0393(s)";
Function1Arg.LOG_GAMMA_DESC = "Log Gamma special function, ln\u0393(s)";
Function1Arg.DI_GAMMA_DESC = "Digamma function as the logarithmic derivative of the Gamma special function, \u03c8(x)";
Function1Arg.PARAM_DESC = "Automatically generated function for user defined functions, returns function parameter value at index \'i\'";
Function1Arg["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.Function1Arg";
//# sourceMappingURL=Function1Arg.js.map