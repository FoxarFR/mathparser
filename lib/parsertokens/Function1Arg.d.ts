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
export declare class Function1Arg {
    static TYPE_ID: number;
    static TYPE_DESC: string;
    static SIN_ID: number;
    static COS_ID: number;
    static TAN_ID: number;
    static CTAN_ID: number;
    static SEC_ID: number;
    static COSEC_ID: number;
    static ASIN_ID: number;
    static ACOS_ID: number;
    static ATAN_ID: number;
    static ACTAN_ID: number;
    static LN_ID: number;
    static LOG2_ID: number;
    static LOG10_ID: number;
    static RAD_ID: number;
    static EXP_ID: number;
    static SQRT_ID: number;
    static SINH_ID: number;
    static COSH_ID: number;
    static TANH_ID: number;
    static COTH_ID: number;
    static SECH_ID: number;
    static CSCH_ID: number;
    static DEG_ID: number;
    static ABS_ID: number;
    static SGN_ID: number;
    static FLOOR_ID: number;
    static CEIL_ID: number;
    static NOT_ID: number;
    static ARSINH_ID: number;
    static ARCOSH_ID: number;
    static ARTANH_ID: number;
    static ARCOTH_ID: number;
    static ARSECH_ID: number;
    static ARCSCH_ID: number;
    static SA_ID: number;
    static SINC_ID: number;
    static BELL_NUMBER_ID: number;
    static LUCAS_NUMBER_ID: number;
    static FIBONACCI_NUMBER_ID: number;
    static HARMONIC_NUMBER_ID: number;
    static IS_PRIME_ID: number;
    static PRIME_COUNT_ID: number;
    static EXP_INT_ID: number;
    static LOG_INT_ID: number;
    static OFF_LOG_INT_ID: number;
    static GAUSS_ERF_ID: number;
    static GAUSS_ERFC_ID: number;
    static GAUSS_ERF_INV_ID: number;
    static GAUSS_ERFC_INV_ID: number;
    static ULP_ID: number;
    static ISNAN_ID: number;
    static NDIG10_ID: number;
    static NFACT_ID: number;
    static ARCSEC_ID: number;
    static ARCCSC_ID: number;
    static GAMMA_ID: number;
    static LAMBERT_W0_ID: number;
    static LAMBERT_W1_ID: number;
    static SGN_GAMMA_ID: number;
    static LOG_GAMMA_ID: number;
    static DI_GAMMA_ID: number;
    static PARAM_ID: number;
    static SIN_STR: string;
    static COS_STR: string;
    static TAN_STR: string;
    static TG_STR: string;
    static CTAN_STR: string;
    static CTG_STR: string;
    static COT_STR: string;
    static SEC_STR: string;
    static COSEC_STR: string;
    static CSC_STR: string;
    static ASIN_STR: string;
    static ARSIN_STR: string;
    static ARCSIN_STR: string;
    static ACOS_STR: string;
    static ARCOS_STR: string;
    static ARCCOS_STR: string;
    static ATAN_STR: string;
    static ARCTAN_STR: string;
    static ATG_STR: string;
    static ARCTG_STR: string;
    static ACTAN_STR: string;
    static ARCCTAN_STR: string;
    static ACTG_STR: string;
    static ARCCTG_STR: string;
    static ACOT_STR: string;
    static ARCCOT_STR: string;
    static LN_STR: string;
    static LOG2_STR: string;
    static LOG10_STR: string;
    static RAD_STR: string;
    static EXP_STR: string;
    static SQRT_STR: string;
    static SINH_STR: string;
    static COSH_STR: string;
    static TANH_STR: string;
    static TGH_STR: string;
    static CTANH_STR: string;
    static COTH_STR: string;
    static CTGH_STR: string;
    static SECH_STR: string;
    static CSCH_STR: string;
    static COSECH_STR: string;
    static DEG_STR: string;
    static ABS_STR: string;
    static SGN_STR: string;
    static FLOOR_STR: string;
    static CEIL_STR: string;
    static NOT_STR: string;
    static ASINH_STR: string;
    static ARSINH_STR: string;
    static ARCSINH_STR: string;
    static ACOSH_STR: string;
    static ARCOSH_STR: string;
    static ARCCOSH_STR: string;
    static ATANH_STR: string;
    static ARCTANH_STR: string;
    static ATGH_STR: string;
    static ARCTGH_STR: string;
    static ACTANH_STR: string;
    static ARCCTANH_STR: string;
    static ACOTH_STR: string;
    static ARCOTH_STR: string;
    static ARCCOTH_STR: string;
    static ACTGH_STR: string;
    static ARCCTGH_STR: string;
    static ASECH_STR: string;
    static ARSECH_STR: string;
    static ARCSECH_STR: string;
    static ACSCH_STR: string;
    static ARCSCH_STR: string;
    static ARCCSCH_STR: string;
    static ACOSECH_STR: string;
    static ARCOSECH_STR: string;
    static ARCCOSECH_STR: string;
    static SA_STR: string;
    static SA1_STR: string;
    static SINC_STR: string;
    static BELL_NUMBER_STR: string;
    static LUCAS_NUMBER_STR: string;
    static FIBONACCI_NUMBER_STR: string;
    static HARMONIC_NUMBER_STR: string;
    static IS_PRIME_STR: string;
    static PRIME_COUNT_STR: string;
    static EXP_INT_STR: string;
    static LOG_INT_STR: string;
    static OFF_LOG_INT_STR: string;
    static GAUSS_ERF_STR: string;
    static GAUSS_ERFC_STR: string;
    static GAUSS_ERF_INV_STR: string;
    static GAUSS_ERFC_INV_STR: string;
    static ULP_STR: string;
    static ISNAN_STR: string;
    static NDIG10_STR: string;
    static NFACT_STR: string;
    static ARCSEC_STR: string;
    static ARCCSC_STR: string;
    static GAMMA_STR: string;
    static LAMBERT_W0_STR: string;
    static LAMBERT_W1_STR: string;
    static SGN_GAMMA_STR: string;
    static LOG_GAMMA_STR: string;
    static DI_GAMMA_STR: string;
    static PARAM_STR: string;
    static SIN_SYN: string;
    static SIN_SYN_$LI$(): string;
    static COS_SYN: string;
    static COS_SYN_$LI$(): string;
    static TAN_SYN: string;
    static TAN_SYN_$LI$(): string;
    static TG_SYN: string;
    static TG_SYN_$LI$(): string;
    static CTAN_SYN: string;
    static CTAN_SYN_$LI$(): string;
    static CTG_SYN: string;
    static CTG_SYN_$LI$(): string;
    static COT_SYN: string;
    static COT_SYN_$LI$(): string;
    static SEC_SYN: string;
    static SEC_SYN_$LI$(): string;
    static COSEC_SYN: string;
    static COSEC_SYN_$LI$(): string;
    static CSC_SYN: string;
    static CSC_SYN_$LI$(): string;
    static ASIN_SYN: string;
    static ASIN_SYN_$LI$(): string;
    static ARSIN_SYN: string;
    static ARSIN_SYN_$LI$(): string;
    static ARCSIN_SYN: string;
    static ARCSIN_SYN_$LI$(): string;
    static ACOS_SYN: string;
    static ACOS_SYN_$LI$(): string;
    static ARCOS_SYN: string;
    static ARCOS_SYN_$LI$(): string;
    static ARCCOS_SYN: string;
    static ARCCOS_SYN_$LI$(): string;
    static ATAN_SYN: string;
    static ATAN_SYN_$LI$(): string;
    static ARCTAN_SYN: string;
    static ARCTAN_SYN_$LI$(): string;
    static ATG_SYN: string;
    static ATG_SYN_$LI$(): string;
    static ARCTG_SYN: string;
    static ARCTG_SYN_$LI$(): string;
    static ACTAN_SYN: string;
    static ACTAN_SYN_$LI$(): string;
    static ARCCTAN_SYN: string;
    static ARCCTAN_SYN_$LI$(): string;
    static ACTG_SYN: string;
    static ACTG_SYN_$LI$(): string;
    static ARCCTG_SYN: string;
    static ARCCTG_SYN_$LI$(): string;
    static ACOT_SYN: string;
    static ACOT_SYN_$LI$(): string;
    static ARCCOT_SYN: string;
    static ARCCOT_SYN_$LI$(): string;
    static LN_SYN: string;
    static LN_SYN_$LI$(): string;
    static LOG2_SYN: string;
    static LOG2_SYN_$LI$(): string;
    static LOG10_SYN: string;
    static LOG10_SYN_$LI$(): string;
    static RAD_SYN: string;
    static RAD_SYN_$LI$(): string;
    static EXP_SYN: string;
    static EXP_SYN_$LI$(): string;
    static SQRT_SYN: string;
    static SQRT_SYN_$LI$(): string;
    static SINH_SYN: string;
    static SINH_SYN_$LI$(): string;
    static COSH_SYN: string;
    static COSH_SYN_$LI$(): string;
    static TANH_SYN: string;
    static TANH_SYN_$LI$(): string;
    static TGH_SYN: string;
    static TGH_SYN_$LI$(): string;
    static CTANH_SYN: string;
    static CTANH_SYN_$LI$(): string;
    static COTH_SYN: string;
    static COTH_SYN_$LI$(): string;
    static CTGH_SYN: string;
    static CTGH_SYN_$LI$(): string;
    static SECH_SYN: string;
    static SECH_SYN_$LI$(): string;
    static CSCH_SYN: string;
    static CSCH_SYN_$LI$(): string;
    static COSECH_SYN: string;
    static COSECH_SYN_$LI$(): string;
    static DEG_SYN: string;
    static DEG_SYN_$LI$(): string;
    static ABS_SYN: string;
    static ABS_SYN_$LI$(): string;
    static SGN_SYN: string;
    static SGN_SYN_$LI$(): string;
    static FLOOR_SYN: string;
    static FLOOR_SYN_$LI$(): string;
    static CEIL_SYN: string;
    static CEIL_SYN_$LI$(): string;
    static NOT_SYN: string;
    static NOT_SYN_$LI$(): string;
    static ASINH_SYN: string;
    static ASINH_SYN_$LI$(): string;
    static ARSINH_SYN: string;
    static ARSINH_SYN_$LI$(): string;
    static ARCSINH_SYN: string;
    static ARCSINH_SYN_$LI$(): string;
    static ACOSH_SYN: string;
    static ACOSH_SYN_$LI$(): string;
    static ARCOSH_SYN: string;
    static ARCOSH_SYN_$LI$(): string;
    static ARCCOSH_SYN: string;
    static ARCCOSH_SYN_$LI$(): string;
    static ATANH_SYN: string;
    static ATANH_SYN_$LI$(): string;
    static ARCTANH_SYN: string;
    static ARCTANH_SYN_$LI$(): string;
    static ATGH_SYN: string;
    static ATGH_SYN_$LI$(): string;
    static ARCTGH_SYN: string;
    static ARCTGH_SYN_$LI$(): string;
    static ACTANH_SYN: string;
    static ACTANH_SYN_$LI$(): string;
    static ARCCTANH_SYN: string;
    static ARCCTANH_SYN_$LI$(): string;
    static ACOTH_SYN: string;
    static ACOTH_SYN_$LI$(): string;
    static ARCOTH_SYN: string;
    static ARCOTH_SYN_$LI$(): string;
    static ARCCOTH_SYN: string;
    static ARCCOTH_SYN_$LI$(): string;
    static ACTGH_SYN: string;
    static ACTGH_SYN_$LI$(): string;
    static ARCCTGH_SYN: string;
    static ARCCTGH_SYN_$LI$(): string;
    static ASECH_SYN: string;
    static ASECH_SYN_$LI$(): string;
    static ARSECH_SYN: string;
    static ARSECH_SYN_$LI$(): string;
    static ARCSECH_SYN: string;
    static ARCSECH_SYN_$LI$(): string;
    static ACSCH_SYN: string;
    static ACSCH_SYN_$LI$(): string;
    static ARCSCH_SYN: string;
    static ARCSCH_SYN_$LI$(): string;
    static ARCCSCH_SYN: string;
    static ARCCSCH_SYN_$LI$(): string;
    static ACOSECH_SYN: string;
    static ACOSECH_SYN_$LI$(): string;
    static ARCOSECH_SYN: string;
    static ARCOSECH_SYN_$LI$(): string;
    static ARCCOSECH_SYN: string;
    static ARCCOSECH_SYN_$LI$(): string;
    static SA_SYN: string;
    static SA_SYN_$LI$(): string;
    static SA1_SYN: string;
    static SA1_SYN_$LI$(): string;
    static SINC_SYN: string;
    static SINC_SYN_$LI$(): string;
    static BELL_NUMBER_SYN: string;
    static BELL_NUMBER_SYN_$LI$(): string;
    static LUCAS_NUMBER_SYN: string;
    static LUCAS_NUMBER_SYN_$LI$(): string;
    static FIBONACCI_NUMBER_SYN: string;
    static FIBONACCI_NUMBER_SYN_$LI$(): string;
    static HARMONIC_NUMBER_SYN: string;
    static HARMONIC_NUMBER_SYN_$LI$(): string;
    static IS_PRIME_SYN: string;
    static IS_PRIME_SYN_$LI$(): string;
    static PRIME_COUNT_SYN: string;
    static PRIME_COUNT_SYN_$LI$(): string;
    static EXP_INT_SYN: string;
    static EXP_INT_SYN_$LI$(): string;
    static LOG_INT_SYN: string;
    static LOG_INT_SYN_$LI$(): string;
    static OFF_LOG_INT_SYN: string;
    static OFF_LOG_INT_SYN_$LI$(): string;
    static GAUSS_ERF_SYN: string;
    static GAUSS_ERF_SYN_$LI$(): string;
    static GAUSS_ERFC_SYN: string;
    static GAUSS_ERFC_SYN_$LI$(): string;
    static GAUSS_ERF_INV_SYN: string;
    static GAUSS_ERF_INV_SYN_$LI$(): string;
    static GAUSS_ERFC_INV_SYN: string;
    static GAUSS_ERFC_INV_SYN_$LI$(): string;
    static ULP_SYN: string;
    static ULP_SYN_$LI$(): string;
    static ISNAN_SYN: string;
    static ISNAN_SYN_$LI$(): string;
    static NDIG10_SYN: string;
    static NDIG10_SYN_$LI$(): string;
    static NFACT_SYN: string;
    static NFACT_SYN_$LI$(): string;
    static ARCSEC_SYN: string;
    static ARCSEC_SYN_$LI$(): string;
    static ARCCSC_SYN: string;
    static ARCCSC_SYN_$LI$(): string;
    static GAMMA_SYN: string;
    static GAMMA_SYN_$LI$(): string;
    static LAMBERT_W0_SYN: string;
    static LAMBERT_W0_SYN_$LI$(): string;
    static LAMBERT_W1_SYN: string;
    static LAMBERT_W1_SYN_$LI$(): string;
    static SGN_GAMMA_SYN: string;
    static SGN_GAMMA_SYN_$LI$(): string;
    static LOG_GAMMA_SYN: string;
    static LOG_GAMMA_SYN_$LI$(): string;
    static DI_GAMMA_SYN: string;
    static DI_GAMMA_SYN_$LI$(): string;
    static PARAM_SYN: string;
    static PARAM_SYN_$LI$(): string;
    static SIN_DESC: string;
    static COS_DESC: string;
    static TAN_DESC: string;
    static CTAN_DESC: string;
    static SEC_DESC: string;
    static COSEC_DESC: string;
    static ASIN_DESC: string;
    static ACOS_DESC: string;
    static ATAN_DESC: string;
    static ACTAN_DESC: string;
    static LN_DESC: string;
    static LOG2_DESC: string;
    static LOG10_DESC: string;
    static RAD_DESC: string;
    static EXP_DESC: string;
    static SQRT_DESC: string;
    static SINH_DESC: string;
    static COSH_DESC: string;
    static TANH_DESC: string;
    static COTH_DESC: string;
    static SECH_DESC: string;
    static CSCH_DESC: string;
    static DEG_DESC: string;
    static ABS_DESC: string;
    static SGN_DESC: string;
    static FLOOR_DESC: string;
    static CEIL_DESC: string;
    static NOT_DESC: string;
    static ARSINH_DESC: string;
    static ARCOSH_DESC: string;
    static ARTANH_DESC: string;
    static ARCOTH_DESC: string;
    static ARSECH_DESC: string;
    static ARCSCH_DESC: string;
    static SA_DESC: string;
    static SINC_DESC: string;
    static BELL_NUMBER_DESC: string;
    static LUCAS_NUMBER_DESC: string;
    static FIBONACCI_NUMBER_DESC: string;
    static HARMONIC_NUMBER_DESC: string;
    static IS_PRIME_DESC: string;
    static PRIME_COUNT_DESC: string;
    static EXP_INT_DESC: string;
    static LOG_INT_DESC: string;
    static OFF_LOG_INT_DESC: string;
    static GAUSS_ERF_DESC: string;
    static GAUSS_ERFC_DESC: string;
    static GAUSS_ERF_INV_DESC: string;
    static GAUSS_ERFC_INV_DESC: string;
    static ULP_DESC: string;
    static ISNAN_DESC: string;
    static NDIG10_DESC: string;
    static NFACT_DESC: string;
    static ARCSEC_DESC: string;
    static ARCCSC_DESC: string;
    static GAMMA_DESC: string;
    static LAMBERT_W0_DESC: string;
    static LAMBERT_W1_DESC: string;
    static SGN_GAMMA_DESC: string;
    static LOG_GAMMA_DESC: string;
    static DI_GAMMA_DESC: string;
    static PARAM_DESC: string;
    static SIN_SINCE: string;
    static SIN_SINCE_$LI$(): string;
    static COS_SINCE: string;
    static COS_SINCE_$LI$(): string;
    static TAN_SINCE: string;
    static TAN_SINCE_$LI$(): string;
    static CTAN_SINCE: string;
    static CTAN_SINCE_$LI$(): string;
    static SEC_SINCE: string;
    static SEC_SINCE_$LI$(): string;
    static COSEC_SINCE: string;
    static COSEC_SINCE_$LI$(): string;
    static ASIN_SINCE: string;
    static ASIN_SINCE_$LI$(): string;
    static ACOS_SINCE: string;
    static ACOS_SINCE_$LI$(): string;
    static ATAN_SINCE: string;
    static ATAN_SINCE_$LI$(): string;
    static ACTAN_SINCE: string;
    static ACTAN_SINCE_$LI$(): string;
    static LN_SINCE: string;
    static LN_SINCE_$LI$(): string;
    static LOG2_SINCE: string;
    static LOG2_SINCE_$LI$(): string;
    static LOG10_SINCE: string;
    static LOG10_SINCE_$LI$(): string;
    static RAD_SINCE: string;
    static RAD_SINCE_$LI$(): string;
    static EXP_SINCE: string;
    static EXP_SINCE_$LI$(): string;
    static SQRT_SINCE: string;
    static SQRT_SINCE_$LI$(): string;
    static SINH_SINCE: string;
    static SINH_SINCE_$LI$(): string;
    static COSH_SINCE: string;
    static COSH_SINCE_$LI$(): string;
    static TANH_SINCE: string;
    static TANH_SINCE_$LI$(): string;
    static COTH_SINCE: string;
    static COTH_SINCE_$LI$(): string;
    static SECH_SINCE: string;
    static SECH_SINCE_$LI$(): string;
    static CSCH_SINCE: string;
    static CSCH_SINCE_$LI$(): string;
    static DEG_SINCE: string;
    static DEG_SINCE_$LI$(): string;
    static ABS_SINCE: string;
    static ABS_SINCE_$LI$(): string;
    static SGN_SINCE: string;
    static SGN_SINCE_$LI$(): string;
    static FLOOR_SINCE: string;
    static FLOOR_SINCE_$LI$(): string;
    static CEIL_SINCE: string;
    static CEIL_SINCE_$LI$(): string;
    static NOT_SINCE: string;
    static NOT_SINCE_$LI$(): string;
    static ARSINH_SINCE: string;
    static ARSINH_SINCE_$LI$(): string;
    static ARCOSH_SINCE: string;
    static ARCOSH_SINCE_$LI$(): string;
    static ARTANH_SINCE: string;
    static ARTANH_SINCE_$LI$(): string;
    static ARCOTH_SINCE: string;
    static ARCOTH_SINCE_$LI$(): string;
    static ARSECH_SINCE: string;
    static ARSECH_SINCE_$LI$(): string;
    static ARCSCH_SINCE: string;
    static ARCSCH_SINCE_$LI$(): string;
    static SA_SINCE: string;
    static SA_SINCE_$LI$(): string;
    static SINC_SINCE: string;
    static SINC_SINCE_$LI$(): string;
    static BELL_NUMBER_SINCE: string;
    static BELL_NUMBER_SINCE_$LI$(): string;
    static LUCAS_NUMBER_SINCE: string;
    static LUCAS_NUMBER_SINCE_$LI$(): string;
    static FIBONACCI_NUMBER_SINCE: string;
    static FIBONACCI_NUMBER_SINCE_$LI$(): string;
    static HARMONIC_NUMBER_SINCE: string;
    static HARMONIC_NUMBER_SINCE_$LI$(): string;
    static IS_PRIME_SINCE: string;
    static IS_PRIME_SINCE_$LI$(): string;
    static PRIME_COUNT_SINCE: string;
    static PRIME_COUNT_SINCE_$LI$(): string;
    static EXP_INT_SINCE: string;
    static EXP_INT_SINCE_$LI$(): string;
    static LOG_INT_SINCE: string;
    static LOG_INT_SINCE_$LI$(): string;
    static OFF_LOG_INT_SINCE: string;
    static OFF_LOG_INT_SINCE_$LI$(): string;
    static GAUSS_ERF_SINCE: string;
    static GAUSS_ERF_SINCE_$LI$(): string;
    static GAUSS_ERFC_SINCE: string;
    static GAUSS_ERFC_SINCE_$LI$(): string;
    static GAUSS_ERF_INV_SINCE: string;
    static GAUSS_ERF_INV_SINCE_$LI$(): string;
    static GAUSS_ERFC_INV_SINCE: string;
    static GAUSS_ERFC_INV_SINCE_$LI$(): string;
    static ULP_SINCE: string;
    static ULP_SINCE_$LI$(): string;
    static ISNAN_SINCE: string;
    static ISNAN_SINCE_$LI$(): string;
    static NDIG10_SINCE: string;
    static NDIG10_SINCE_$LI$(): string;
    static NFACT_SINCE: string;
    static NFACT_SINCE_$LI$(): string;
    static ARCSEC_SINCE: string;
    static ARCSEC_SINCE_$LI$(): string;
    static ARCCSC_SINCE: string;
    static ARCCSC_SINCE_$LI$(): string;
    static GAMMA_SINCE: string;
    static GAMMA_SINCE_$LI$(): string;
    static LAMBERT_W0_SINCE: string;
    static LAMBERT_W0_SINCE_$LI$(): string;
    static LAMBERT_W1_SINCE: string;
    static LAMBERT_W1_SINCE_$LI$(): string;
    static SGN_GAMMA_SINCE: string;
    static SGN_GAMMA_SINCE_$LI$(): string;
    static LOG_GAMMA_SINCE: string;
    static LOG_GAMMA_SINCE_$LI$(): string;
    static DI_GAMMA_SINCE: string;
    static DI_GAMMA_SINCE_$LI$(): string;
    static PARAM_SINCE: string;
    static PARAM_SINCE_$LI$(): string;
}
