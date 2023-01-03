"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Units - mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.1.0
 * @class
 */
class Unit {
    static PERC_SYN_$LI$() { if (Unit.PERC_SYN == null) {
        Unit.PERC_SYN = Unit.PERC_STR;
    } return Unit.PERC_SYN; }
    static PROMIL_SYN_$LI$() { if (Unit.PROMIL_SYN == null) {
        Unit.PROMIL_SYN = Unit.PROMIL_STR;
    } return Unit.PROMIL_SYN; }
    static YOTTA_SYN_$LI$() { if (Unit.YOTTA_SYN == null) {
        Unit.YOTTA_SYN = Unit.YOTTA_STR;
    } return Unit.YOTTA_SYN; }
    static YOTTA_SEPT_SYN_$LI$() { if (Unit.YOTTA_SEPT_SYN == null) {
        Unit.YOTTA_SEPT_SYN = Unit.YOTTA_SEPT_STR;
    } return Unit.YOTTA_SEPT_SYN; }
    static ZETTA_SYN_$LI$() { if (Unit.ZETTA_SYN == null) {
        Unit.ZETTA_SYN = Unit.ZETTA_STR;
    } return Unit.ZETTA_SYN; }
    static ZETTA_SEXT_SYN_$LI$() { if (Unit.ZETTA_SEXT_SYN == null) {
        Unit.ZETTA_SEXT_SYN = Unit.ZETTA_SEXT_STR;
    } return Unit.ZETTA_SEXT_SYN; }
    static EXA_SYN_$LI$() { if (Unit.EXA_SYN == null) {
        Unit.EXA_SYN = Unit.EXA_STR;
    } return Unit.EXA_SYN; }
    static EXA_QUINT_SYN_$LI$() { if (Unit.EXA_QUINT_SYN == null) {
        Unit.EXA_QUINT_SYN = Unit.EXA_QUINT_STR;
    } return Unit.EXA_QUINT_SYN; }
    static PETA_SYN_$LI$() { if (Unit.PETA_SYN == null) {
        Unit.PETA_SYN = Unit.PETA_STR;
    } return Unit.PETA_SYN; }
    static PETA_QUAD_SYN_$LI$() { if (Unit.PETA_QUAD_SYN == null) {
        Unit.PETA_QUAD_SYN = Unit.PETA_QUAD_STR;
    } return Unit.PETA_QUAD_SYN; }
    static TERA_SYN_$LI$() { if (Unit.TERA_SYN == null) {
        Unit.TERA_SYN = Unit.TERA_STR;
    } return Unit.TERA_SYN; }
    static TERA_TRIL_SYN_$LI$() { if (Unit.TERA_TRIL_SYN == null) {
        Unit.TERA_TRIL_SYN = Unit.TERA_TRIL_STR;
    } return Unit.TERA_TRIL_SYN; }
    static GIGA_SYN_$LI$() { if (Unit.GIGA_SYN == null) {
        Unit.GIGA_SYN = Unit.GIGA_STR;
    } return Unit.GIGA_SYN; }
    static GIGA_BIL_SYN_$LI$() { if (Unit.GIGA_BIL_SYN == null) {
        Unit.GIGA_BIL_SYN = Unit.GIGA_BIL_STR;
    } return Unit.GIGA_BIL_SYN; }
    static MEGA_SYN_$LI$() { if (Unit.MEGA_SYN == null) {
        Unit.MEGA_SYN = Unit.MEGA_STR;
    } return Unit.MEGA_SYN; }
    static MEGA_MIL_SYN_$LI$() { if (Unit.MEGA_MIL_SYN == null) {
        Unit.MEGA_MIL_SYN = Unit.MEGA_MIL_STR;
    } return Unit.MEGA_MIL_SYN; }
    static KILO_SYN_$LI$() { if (Unit.KILO_SYN == null) {
        Unit.KILO_SYN = Unit.KILO_STR;
    } return Unit.KILO_SYN; }
    static KILO_TH_SYN_$LI$() { if (Unit.KILO_TH_SYN == null) {
        Unit.KILO_TH_SYN = Unit.KILO_TH_STR;
    } return Unit.KILO_TH_SYN; }
    static HECTO_SYN_$LI$() { if (Unit.HECTO_SYN == null) {
        Unit.HECTO_SYN = Unit.HECTO_STR;
    } return Unit.HECTO_SYN; }
    static HECTO_HUND_SYN_$LI$() { if (Unit.HECTO_HUND_SYN == null) {
        Unit.HECTO_HUND_SYN = Unit.HECTO_HUND_STR;
    } return Unit.HECTO_HUND_SYN; }
    static DECA_SYN_$LI$() { if (Unit.DECA_SYN == null) {
        Unit.DECA_SYN = Unit.DECA_STR;
    } return Unit.DECA_SYN; }
    static DECA_TEN_SYN_$LI$() { if (Unit.DECA_TEN_SYN == null) {
        Unit.DECA_TEN_SYN = Unit.DECA_TEN_STR;
    } return Unit.DECA_TEN_SYN; }
    static DECI_SYN_$LI$() { if (Unit.DECI_SYN == null) {
        Unit.DECI_SYN = Unit.DECI_STR;
    } return Unit.DECI_SYN; }
    static CENTI_SYN_$LI$() { if (Unit.CENTI_SYN == null) {
        Unit.CENTI_SYN = Unit.CENTI_STR;
    } return Unit.CENTI_SYN; }
    static MILLI_SYN_$LI$() { if (Unit.MILLI_SYN == null) {
        Unit.MILLI_SYN = Unit.MILLI_STR;
    } return Unit.MILLI_SYN; }
    static MICRO_SYN_$LI$() { if (Unit.MICRO_SYN == null) {
        Unit.MICRO_SYN = Unit.MICRO_STR;
    } return Unit.MICRO_SYN; }
    static NANO_SYN_$LI$() { if (Unit.NANO_SYN == null) {
        Unit.NANO_SYN = Unit.NANO_STR;
    } return Unit.NANO_SYN; }
    static PICO_SYN_$LI$() { if (Unit.PICO_SYN == null) {
        Unit.PICO_SYN = Unit.PICO_STR;
    } return Unit.PICO_SYN; }
    static FEMTO_SYN_$LI$() { if (Unit.FEMTO_SYN == null) {
        Unit.FEMTO_SYN = Unit.FEMTO_STR;
    } return Unit.FEMTO_SYN; }
    static ATTO_SYN_$LI$() { if (Unit.ATTO_SYN == null) {
        Unit.ATTO_SYN = Unit.ATTO_STR;
    } return Unit.ATTO_SYN; }
    static ZEPTO_SYN_$LI$() { if (Unit.ZEPTO_SYN == null) {
        Unit.ZEPTO_SYN = Unit.ZEPTO_STR;
    } return Unit.ZEPTO_SYN; }
    static YOCTO_SYN_$LI$() { if (Unit.YOCTO_SYN == null) {
        Unit.YOCTO_SYN = Unit.YOCTO_STR;
    } return Unit.YOCTO_SYN; }
    static METRE_SYN_$LI$() { if (Unit.METRE_SYN == null) {
        Unit.METRE_SYN = Unit.METRE_STR;
    } return Unit.METRE_SYN; }
    static KILOMETRE_SYN_$LI$() { if (Unit.KILOMETRE_SYN == null) {
        Unit.KILOMETRE_SYN = Unit.KILOMETRE_STR;
    } return Unit.KILOMETRE_SYN; }
    static CENTIMETRE_SYN_$LI$() { if (Unit.CENTIMETRE_SYN == null) {
        Unit.CENTIMETRE_SYN = Unit.CENTIMETRE_STR;
    } return Unit.CENTIMETRE_SYN; }
    static MILLIMETRE_SYN_$LI$() { if (Unit.MILLIMETRE_SYN == null) {
        Unit.MILLIMETRE_SYN = Unit.MILLIMETRE_STR;
    } return Unit.MILLIMETRE_SYN; }
    static INCH_SYN_$LI$() { if (Unit.INCH_SYN == null) {
        Unit.INCH_SYN = Unit.INCH_STR;
    } return Unit.INCH_SYN; }
    static YARD_SYN_$LI$() { if (Unit.YARD_SYN == null) {
        Unit.YARD_SYN = Unit.YARD_STR;
    } return Unit.YARD_SYN; }
    static FEET_SYN_$LI$() { if (Unit.FEET_SYN == null) {
        Unit.FEET_SYN = Unit.FEET_STR;
    } return Unit.FEET_SYN; }
    static MILE_SYN_$LI$() { if (Unit.MILE_SYN == null) {
        Unit.MILE_SYN = Unit.MILE_STR;
    } return Unit.MILE_SYN; }
    static NAUTICAL_MILE_SYN_$LI$() { if (Unit.NAUTICAL_MILE_SYN == null) {
        Unit.NAUTICAL_MILE_SYN = Unit.NAUTICAL_MILE_STR;
    } return Unit.NAUTICAL_MILE_SYN; }
    static METRE2_SYN_$LI$() { if (Unit.METRE2_SYN == null) {
        Unit.METRE2_SYN = Unit.METRE2_STR;
    } return Unit.METRE2_SYN; }
    static CENTIMETRE2_SYN_$LI$() { if (Unit.CENTIMETRE2_SYN == null) {
        Unit.CENTIMETRE2_SYN = Unit.CENTIMETRE2_STR;
    } return Unit.CENTIMETRE2_SYN; }
    static MILLIMETRE2_SYN_$LI$() { if (Unit.MILLIMETRE2_SYN == null) {
        Unit.MILLIMETRE2_SYN = Unit.MILLIMETRE2_STR;
    } return Unit.MILLIMETRE2_SYN; }
    static ARE_SYN_$LI$() { if (Unit.ARE_SYN == null) {
        Unit.ARE_SYN = Unit.ARE_STR;
    } return Unit.ARE_SYN; }
    static HECTARE_SYN_$LI$() { if (Unit.HECTARE_SYN == null) {
        Unit.HECTARE_SYN = Unit.HECTARE_STR;
    } return Unit.HECTARE_SYN; }
    static ACRE_SYN_$LI$() { if (Unit.ACRE_SYN == null) {
        Unit.ACRE_SYN = Unit.ACRE_STR;
    } return Unit.ACRE_SYN; }
    static KILOMETRE2_SYN_$LI$() { if (Unit.KILOMETRE2_SYN == null) {
        Unit.KILOMETRE2_SYN = Unit.KILOMETRE2_STR;
    } return Unit.KILOMETRE2_SYN; }
    static MILLIMETRE3_SYN_$LI$() { if (Unit.MILLIMETRE3_SYN == null) {
        Unit.MILLIMETRE3_SYN = Unit.MILLIMETRE3_STR;
    } return Unit.MILLIMETRE3_SYN; }
    static CENTIMETRE3_SYN_$LI$() { if (Unit.CENTIMETRE3_SYN == null) {
        Unit.CENTIMETRE3_SYN = Unit.CENTIMETRE3_STR;
    } return Unit.CENTIMETRE3_SYN; }
    static METRE3_SYN_$LI$() { if (Unit.METRE3_SYN == null) {
        Unit.METRE3_SYN = Unit.METRE3_STR;
    } return Unit.METRE3_SYN; }
    static KILOMETRE3_SYN_$LI$() { if (Unit.KILOMETRE3_SYN == null) {
        Unit.KILOMETRE3_SYN = Unit.KILOMETRE3_STR;
    } return Unit.KILOMETRE3_SYN; }
    static MILLILITRE_SYN_$LI$() { if (Unit.MILLILITRE_SYN == null) {
        Unit.MILLILITRE_SYN = Unit.MILLILITRE_STR;
    } return Unit.MILLILITRE_SYN; }
    static LITRE_SYN_$LI$() { if (Unit.LITRE_SYN == null) {
        Unit.LITRE_SYN = Unit.LITRE_STR;
    } return Unit.LITRE_SYN; }
    static GALLON_SYN_$LI$() { if (Unit.GALLON_SYN == null) {
        Unit.GALLON_SYN = Unit.GALLON_STR;
    } return Unit.GALLON_SYN; }
    static PINT_SYN_$LI$() { if (Unit.PINT_SYN == null) {
        Unit.PINT_SYN = Unit.PINT_STR;
    } return Unit.PINT_SYN; }
    static SECOND_SYN_$LI$() { if (Unit.SECOND_SYN == null) {
        Unit.SECOND_SYN = Unit.SECOND_STR;
    } return Unit.SECOND_SYN; }
    static MILLISECOND_SYN_$LI$() { if (Unit.MILLISECOND_SYN == null) {
        Unit.MILLISECOND_SYN = Unit.MILLISECOND_STR;
    } return Unit.MILLISECOND_SYN; }
    static MINUTE_SYN_$LI$() { if (Unit.MINUTE_SYN == null) {
        Unit.MINUTE_SYN = Unit.MINUTE_STR;
    } return Unit.MINUTE_SYN; }
    static HOUR_SYN_$LI$() { if (Unit.HOUR_SYN == null) {
        Unit.HOUR_SYN = Unit.HOUR_STR;
    } return Unit.HOUR_SYN; }
    static DAY_SYN_$LI$() { if (Unit.DAY_SYN == null) {
        Unit.DAY_SYN = Unit.DAY_STR;
    } return Unit.DAY_SYN; }
    static WEEK_SYN_$LI$() { if (Unit.WEEK_SYN == null) {
        Unit.WEEK_SYN = Unit.WEEK_STR;
    } return Unit.WEEK_SYN; }
    static JULIAN_YEAR_SYN_$LI$() { if (Unit.JULIAN_YEAR_SYN == null) {
        Unit.JULIAN_YEAR_SYN = Unit.JULIAN_YEAR_STR;
    } return Unit.JULIAN_YEAR_SYN; }
    static KILOGRAM_SYN_$LI$() { if (Unit.KILOGRAM_SYN == null) {
        Unit.KILOGRAM_SYN = Unit.KILOGRAM_STR;
    } return Unit.KILOGRAM_SYN; }
    static GRAM_SYN_$LI$() { if (Unit.GRAM_SYN == null) {
        Unit.GRAM_SYN = Unit.GRAM_STR;
    } return Unit.GRAM_SYN; }
    static MILLIGRAM_SYN_$LI$() { if (Unit.MILLIGRAM_SYN == null) {
        Unit.MILLIGRAM_SYN = Unit.MILLIGRAM_STR;
    } return Unit.MILLIGRAM_SYN; }
    static DECAGRAM_SYN_$LI$() { if (Unit.DECAGRAM_SYN == null) {
        Unit.DECAGRAM_SYN = Unit.DECAGRAM_STR;
    } return Unit.DECAGRAM_SYN; }
    static TONNE_SYN_$LI$() { if (Unit.TONNE_SYN == null) {
        Unit.TONNE_SYN = Unit.TONNE_STR;
    } return Unit.TONNE_SYN; }
    static OUNCE_SYN_$LI$() { if (Unit.OUNCE_SYN == null) {
        Unit.OUNCE_SYN = Unit.OUNCE_STR;
    } return Unit.OUNCE_SYN; }
    static POUND_SYN_$LI$() { if (Unit.POUND_SYN == null) {
        Unit.POUND_SYN = Unit.POUND_STR;
    } return Unit.POUND_SYN; }
    static BIT_SYN_$LI$() { if (Unit.BIT_SYN == null) {
        Unit.BIT_SYN = Unit.BIT_STR;
    } return Unit.BIT_SYN; }
    static KILOBIT_SYN_$LI$() { if (Unit.KILOBIT_SYN == null) {
        Unit.KILOBIT_SYN = Unit.KILOBIT_STR;
    } return Unit.KILOBIT_SYN; }
    static MEGABIT_SYN_$LI$() { if (Unit.MEGABIT_SYN == null) {
        Unit.MEGABIT_SYN = Unit.MEGABIT_STR;
    } return Unit.MEGABIT_SYN; }
    static GIGABIT_SYN_$LI$() { if (Unit.GIGABIT_SYN == null) {
        Unit.GIGABIT_SYN = Unit.GIGABIT_STR;
    } return Unit.GIGABIT_SYN; }
    static TERABIT_SYN_$LI$() { if (Unit.TERABIT_SYN == null) {
        Unit.TERABIT_SYN = Unit.TERABIT_STR;
    } return Unit.TERABIT_SYN; }
    static PETABIT_SYN_$LI$() { if (Unit.PETABIT_SYN == null) {
        Unit.PETABIT_SYN = Unit.PETABIT_STR;
    } return Unit.PETABIT_SYN; }
    static EXABIT_SYN_$LI$() { if (Unit.EXABIT_SYN == null) {
        Unit.EXABIT_SYN = Unit.EXABIT_STR;
    } return Unit.EXABIT_SYN; }
    static ZETTABIT_SYN_$LI$() { if (Unit.ZETTABIT_SYN == null) {
        Unit.ZETTABIT_SYN = Unit.ZETTABIT_STR;
    } return Unit.ZETTABIT_SYN; }
    static YOTTABIT_SYN_$LI$() { if (Unit.YOTTABIT_SYN == null) {
        Unit.YOTTABIT_SYN = Unit.YOTTABIT_STR;
    } return Unit.YOTTABIT_SYN; }
    static BYTE_SYN_$LI$() { if (Unit.BYTE_SYN == null) {
        Unit.BYTE_SYN = Unit.BYTE_STR;
    } return Unit.BYTE_SYN; }
    static KILOBYTE_SYN_$LI$() { if (Unit.KILOBYTE_SYN == null) {
        Unit.KILOBYTE_SYN = Unit.KILOBYTE_STR;
    } return Unit.KILOBYTE_SYN; }
    static MEGABYTE_SYN_$LI$() { if (Unit.MEGABYTE_SYN == null) {
        Unit.MEGABYTE_SYN = Unit.MEGABYTE_STR;
    } return Unit.MEGABYTE_SYN; }
    static GIGABYTE_SYN_$LI$() { if (Unit.GIGABYTE_SYN == null) {
        Unit.GIGABYTE_SYN = Unit.GIGABYTE_STR;
    } return Unit.GIGABYTE_SYN; }
    static TERABYTE_SYN_$LI$() { if (Unit.TERABYTE_SYN == null) {
        Unit.TERABYTE_SYN = Unit.TERABYTE_STR;
    } return Unit.TERABYTE_SYN; }
    static PETABYTE_SYN_$LI$() { if (Unit.PETABYTE_SYN == null) {
        Unit.PETABYTE_SYN = Unit.PETABYTE_STR;
    } return Unit.PETABYTE_SYN; }
    static EXABYTE_SYN_$LI$() { if (Unit.EXABYTE_SYN == null) {
        Unit.EXABYTE_SYN = Unit.EXABYTE_STR;
    } return Unit.EXABYTE_SYN; }
    static ZETTABYTE_SYN_$LI$() { if (Unit.ZETTABYTE_SYN == null) {
        Unit.ZETTABYTE_SYN = Unit.ZETTABYTE_STR;
    } return Unit.ZETTABYTE_SYN; }
    static YOTTABYTE_SYN_$LI$() { if (Unit.YOTTABYTE_SYN == null) {
        Unit.YOTTABYTE_SYN = Unit.YOTTABYTE_STR;
    } return Unit.YOTTABYTE_SYN; }
    static JOULE_SYN_$LI$() { if (Unit.JOULE_SYN == null) {
        Unit.JOULE_SYN = Unit.JOULE_STR;
    } return Unit.JOULE_SYN; }
    static ELECTRONO_VOLT_SYN_$LI$() { if (Unit.ELECTRONO_VOLT_SYN == null) {
        Unit.ELECTRONO_VOLT_SYN = Unit.ELECTRONO_VOLT_STR;
    } return Unit.ELECTRONO_VOLT_SYN; }
    static KILO_ELECTRONO_VOLT_SYN_$LI$() { if (Unit.KILO_ELECTRONO_VOLT_SYN == null) {
        Unit.KILO_ELECTRONO_VOLT_SYN = Unit.KILO_ELECTRONO_VOLT_STR;
    } return Unit.KILO_ELECTRONO_VOLT_SYN; }
    static MEGA_ELECTRONO_VOLT_SYN_$LI$() { if (Unit.MEGA_ELECTRONO_VOLT_SYN == null) {
        Unit.MEGA_ELECTRONO_VOLT_SYN = Unit.MEGA_ELECTRONO_VOLT_STR;
    } return Unit.MEGA_ELECTRONO_VOLT_SYN; }
    static GIGA_ELECTRONO_VOLT_SYN_$LI$() { if (Unit.GIGA_ELECTRONO_VOLT_SYN == null) {
        Unit.GIGA_ELECTRONO_VOLT_SYN = Unit.GIGA_ELECTRONO_VOLT_STR;
    } return Unit.GIGA_ELECTRONO_VOLT_SYN; }
    static TERA_ELECTRONO_VOLT_SYN_$LI$() { if (Unit.TERA_ELECTRONO_VOLT_SYN == null) {
        Unit.TERA_ELECTRONO_VOLT_SYN = Unit.TERA_ELECTRONO_VOLT_STR;
    } return Unit.TERA_ELECTRONO_VOLT_SYN; }
    static METRE_PER_SECOND_SYN_$LI$() { if (Unit.METRE_PER_SECOND_SYN == null) {
        Unit.METRE_PER_SECOND_SYN = Unit.METRE_PER_SECOND_STR;
    } return Unit.METRE_PER_SECOND_SYN; }
    static KILOMETRE_PER_HOUR_SYN_$LI$() { if (Unit.KILOMETRE_PER_HOUR_SYN == null) {
        Unit.KILOMETRE_PER_HOUR_SYN = Unit.KILOMETRE_PER_HOUR_STR;
    } return Unit.KILOMETRE_PER_HOUR_SYN; }
    static MILE_PER_HOUR_SYN_$LI$() { if (Unit.MILE_PER_HOUR_SYN == null) {
        Unit.MILE_PER_HOUR_SYN = Unit.MILE_PER_HOUR_STR;
    } return Unit.MILE_PER_HOUR_SYN; }
    static KNOT_SYN_$LI$() { if (Unit.KNOT_SYN == null) {
        Unit.KNOT_SYN = Unit.KNOT_STR;
    } return Unit.KNOT_SYN; }
    static METRE_PER_SECOND2_SYN_$LI$() { if (Unit.METRE_PER_SECOND2_SYN == null) {
        Unit.METRE_PER_SECOND2_SYN = Unit.METRE_PER_SECOND2_STR;
    } return Unit.METRE_PER_SECOND2_SYN; }
    static KILOMETRE_PER_HOUR2_SYN_$LI$() { if (Unit.KILOMETRE_PER_HOUR2_SYN == null) {
        Unit.KILOMETRE_PER_HOUR2_SYN = Unit.KILOMETRE_PER_HOUR2_STR;
    } return Unit.KILOMETRE_PER_HOUR2_SYN; }
    static MILE_PER_HOUR2_SYN_$LI$() { if (Unit.MILE_PER_HOUR2_SYN == null) {
        Unit.MILE_PER_HOUR2_SYN = Unit.MILE_PER_HOUR2_STR;
    } return Unit.MILE_PER_HOUR2_SYN; }
    static RADIAN_ARC_SYN_$LI$() { if (Unit.RADIAN_ARC_SYN == null) {
        Unit.RADIAN_ARC_SYN = Unit.RADIAN_ARC_STR;
    } return Unit.RADIAN_ARC_SYN; }
    static DEGREE_ARC_SYN_$LI$() { if (Unit.DEGREE_ARC_SYN == null) {
        Unit.DEGREE_ARC_SYN = Unit.DEGREE_ARC_STR;
    } return Unit.DEGREE_ARC_SYN; }
    static MINUTE_ARC_SYN_$LI$() { if (Unit.MINUTE_ARC_SYN == null) {
        Unit.MINUTE_ARC_SYN = Unit.MINUTE_ARC_STR;
    } return Unit.MINUTE_ARC_SYN; }
    static SECOND_ARC_SYN_$LI$() { if (Unit.SECOND_ARC_SYN == null) {
        Unit.SECOND_ARC_SYN = Unit.SECOND_ARC_STR;
    } return Unit.SECOND_ARC_SYN; }
    static PERC_SINCE_$LI$() { if (Unit.PERC_SINCE == null) {
        Unit.PERC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PERC_SINCE; }
    static PROMIL_SINCE_$LI$() { if (Unit.PROMIL_SINCE == null) {
        Unit.PROMIL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PROMIL_SINCE; }
    static YOTTA_SINCE_$LI$() { if (Unit.YOTTA_SINCE == null) {
        Unit.YOTTA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.YOTTA_SINCE; }
    static YOTTA_SEPT_SINCE_$LI$() { if (Unit.YOTTA_SEPT_SINCE == null) {
        Unit.YOTTA_SEPT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.YOTTA_SEPT_SINCE; }
    static ZETTA_SINCE_$LI$() { if (Unit.ZETTA_SINCE == null) {
        Unit.ZETTA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ZETTA_SINCE; }
    static ZETTA_SEXT_SINCE_$LI$() { if (Unit.ZETTA_SEXT_SINCE == null) {
        Unit.ZETTA_SEXT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ZETTA_SEXT_SINCE; }
    static EXA_SINCE_$LI$() { if (Unit.EXA_SINCE == null) {
        Unit.EXA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.EXA_SINCE; }
    static EXA_QUINT_SINCE_$LI$() { if (Unit.EXA_QUINT_SINCE == null) {
        Unit.EXA_QUINT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.EXA_QUINT_SINCE; }
    static PETA_SINCE_$LI$() { if (Unit.PETA_SINCE == null) {
        Unit.PETA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PETA_SINCE; }
    static PETA_QUAD_SINCE_$LI$() { if (Unit.PETA_QUAD_SINCE == null) {
        Unit.PETA_QUAD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PETA_QUAD_SINCE; }
    static TERA_SINCE_$LI$() { if (Unit.TERA_SINCE == null) {
        Unit.TERA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.TERA_SINCE; }
    static TERA_TRIL_SINCE_$LI$() { if (Unit.TERA_TRIL_SINCE == null) {
        Unit.TERA_TRIL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.TERA_TRIL_SINCE; }
    static GIGA_SINCE_$LI$() { if (Unit.GIGA_SINCE == null) {
        Unit.GIGA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.GIGA_SINCE; }
    static GIGA_BIL_SINCE_$LI$() { if (Unit.GIGA_BIL_SINCE == null) {
        Unit.GIGA_BIL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.GIGA_BIL_SINCE; }
    static MEGA_SINCE_$LI$() { if (Unit.MEGA_SINCE == null) {
        Unit.MEGA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MEGA_SINCE; }
    static MEGA_MIL_SINCE_$LI$() { if (Unit.MEGA_MIL_SINCE == null) {
        Unit.MEGA_MIL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MEGA_MIL_SINCE; }
    static KILO_SINCE_$LI$() { if (Unit.KILO_SINCE == null) {
        Unit.KILO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILO_SINCE; }
    static KILO_TH_SINCE_$LI$() { if (Unit.KILO_TH_SINCE == null) {
        Unit.KILO_TH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILO_TH_SINCE; }
    static HECTO_SINCE_$LI$() { if (Unit.HECTO_SINCE == null) {
        Unit.HECTO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.HECTO_SINCE; }
    static HECTO_HUND_SINCE_$LI$() { if (Unit.HECTO_HUND_SINCE == null) {
        Unit.HECTO_HUND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.HECTO_HUND_SINCE; }
    static DECA_SINCE_$LI$() { if (Unit.DECA_SINCE == null) {
        Unit.DECA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.DECA_SINCE; }
    static DECA_TEN_SINCE_$LI$() { if (Unit.DECA_TEN_SINCE == null) {
        Unit.DECA_TEN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.DECA_TEN_SINCE; }
    static DECI_SINCE_$LI$() { if (Unit.DECI_SINCE == null) {
        Unit.DECI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.DECI_SINCE; }
    static CENTI_SINCE_$LI$() { if (Unit.CENTI_SINCE == null) {
        Unit.CENTI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.CENTI_SINCE; }
    static MILLI_SINCE_$LI$() { if (Unit.MILLI_SINCE == null) {
        Unit.MILLI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILLI_SINCE; }
    static MICRO_SINCE_$LI$() { if (Unit.MICRO_SINCE == null) {
        Unit.MICRO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MICRO_SINCE; }
    static NANO_SINCE_$LI$() { if (Unit.NANO_SINCE == null) {
        Unit.NANO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.NANO_SINCE; }
    static PICO_SINCE_$LI$() { if (Unit.PICO_SINCE == null) {
        Unit.PICO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PICO_SINCE; }
    static FEMTO_SINCE_$LI$() { if (Unit.FEMTO_SINCE == null) {
        Unit.FEMTO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.FEMTO_SINCE; }
    static ATTO_SINCE_$LI$() { if (Unit.ATTO_SINCE == null) {
        Unit.ATTO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ATTO_SINCE; }
    static ZEPTO_SINCE_$LI$() { if (Unit.ZEPTO_SINCE == null) {
        Unit.ZEPTO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ZEPTO_SINCE; }
    static YOCTO_SINCE_$LI$() { if (Unit.YOCTO_SINCE == null) {
        Unit.YOCTO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.YOCTO_SINCE; }
    static METRE_SINCE_$LI$() { if (Unit.METRE_SINCE == null) {
        Unit.METRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.METRE_SINCE; }
    static KILOMETRE_SINCE_$LI$() { if (Unit.KILOMETRE_SINCE == null) {
        Unit.KILOMETRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOMETRE_SINCE; }
    static CENTIMETRE_SINCE_$LI$() { if (Unit.CENTIMETRE_SINCE == null) {
        Unit.CENTIMETRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.CENTIMETRE_SINCE; }
    static MILLIMETRE_SINCE_$LI$() { if (Unit.MILLIMETRE_SINCE == null) {
        Unit.MILLIMETRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILLIMETRE_SINCE; }
    static INCH_SINCE_$LI$() { if (Unit.INCH_SINCE == null) {
        Unit.INCH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.INCH_SINCE; }
    static YARD_SINCE_$LI$() { if (Unit.YARD_SINCE == null) {
        Unit.YARD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.YARD_SINCE; }
    static FEET_SINCE_$LI$() { if (Unit.FEET_SINCE == null) {
        Unit.FEET_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.FEET_SINCE; }
    static MILE_SINCE_$LI$() { if (Unit.MILE_SINCE == null) {
        Unit.MILE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILE_SINCE; }
    static NAUTICAL_MILE_SINCE_$LI$() { if (Unit.NAUTICAL_MILE_SINCE == null) {
        Unit.NAUTICAL_MILE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.NAUTICAL_MILE_SINCE; }
    static METRE2_SINCE_$LI$() { if (Unit.METRE2_SINCE == null) {
        Unit.METRE2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.METRE2_SINCE; }
    static CENTIMETRE2_SINCE_$LI$() { if (Unit.CENTIMETRE2_SINCE == null) {
        Unit.CENTIMETRE2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.CENTIMETRE2_SINCE; }
    static MILLIMETRE2_SINCE_$LI$() { if (Unit.MILLIMETRE2_SINCE == null) {
        Unit.MILLIMETRE2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILLIMETRE2_SINCE; }
    static ARE_SINCE_$LI$() { if (Unit.ARE_SINCE == null) {
        Unit.ARE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ARE_SINCE; }
    static HECTARE_SINCE_$LI$() { if (Unit.HECTARE_SINCE == null) {
        Unit.HECTARE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.HECTARE_SINCE; }
    static ACRE_SINCE_$LI$() { if (Unit.ACRE_SINCE == null) {
        Unit.ACRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ACRE_SINCE; }
    static KILOMETRE2_SINCE_$LI$() { if (Unit.KILOMETRE2_SINCE == null) {
        Unit.KILOMETRE2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOMETRE2_SINCE; }
    static MILLIMETRE3_SINCE_$LI$() { if (Unit.MILLIMETRE3_SINCE == null) {
        Unit.MILLIMETRE3_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILLIMETRE3_SINCE; }
    static CENTIMETRE3_SINCE_$LI$() { if (Unit.CENTIMETRE3_SINCE == null) {
        Unit.CENTIMETRE3_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.CENTIMETRE3_SINCE; }
    static METRE3_SINCE_$LI$() { if (Unit.METRE3_SINCE == null) {
        Unit.METRE3_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.METRE3_SINCE; }
    static KILOMETRE3_SINCE_$LI$() { if (Unit.KILOMETRE3_SINCE == null) {
        Unit.KILOMETRE3_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOMETRE3_SINCE; }
    static MILLILITRE_SINCE_$LI$() { if (Unit.MILLILITRE_SINCE == null) {
        Unit.MILLILITRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILLILITRE_SINCE; }
    static LITRE_SINCE_$LI$() { if (Unit.LITRE_SINCE == null) {
        Unit.LITRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.LITRE_SINCE; }
    static GALLON_SINCE_$LI$() { if (Unit.GALLON_SINCE == null) {
        Unit.GALLON_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.GALLON_SINCE; }
    static PINT_SINCE_$LI$() { if (Unit.PINT_SINCE == null) {
        Unit.PINT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PINT_SINCE; }
    static SECOND_SINCE_$LI$() { if (Unit.SECOND_SINCE == null) {
        Unit.SECOND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.SECOND_SINCE; }
    static MILLISECOND_SINCE_$LI$() { if (Unit.MILLISECOND_SINCE == null) {
        Unit.MILLISECOND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILLISECOND_SINCE; }
    static MINUTE_SINCE_$LI$() { if (Unit.MINUTE_SINCE == null) {
        Unit.MINUTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MINUTE_SINCE; }
    static HOUR_SINCE_$LI$() { if (Unit.HOUR_SINCE == null) {
        Unit.HOUR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.HOUR_SINCE; }
    static DAY_SINCE_$LI$() { if (Unit.DAY_SINCE == null) {
        Unit.DAY_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.DAY_SINCE; }
    static WEEK_SINCE_$LI$() { if (Unit.WEEK_SINCE == null) {
        Unit.WEEK_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.WEEK_SINCE; }
    static JULIAN_YEAR_SINCE_$LI$() { if (Unit.JULIAN_YEAR_SINCE == null) {
        Unit.JULIAN_YEAR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.JULIAN_YEAR_SINCE; }
    static KILOGRAM_SINCE_$LI$() { if (Unit.KILOGRAM_SINCE == null) {
        Unit.KILOGRAM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOGRAM_SINCE; }
    static GRAM_SINCE_$LI$() { if (Unit.GRAM_SINCE == null) {
        Unit.GRAM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.GRAM_SINCE; }
    static MILLIGRAM_SINCE_$LI$() { if (Unit.MILLIGRAM_SINCE == null) {
        Unit.MILLIGRAM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILLIGRAM_SINCE; }
    static DECAGRAM_SINCE_$LI$() { if (Unit.DECAGRAM_SINCE == null) {
        Unit.DECAGRAM_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.DECAGRAM_SINCE; }
    static TONNE_SINCE_$LI$() { if (Unit.TONNE_SINCE == null) {
        Unit.TONNE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.TONNE_SINCE; }
    static OUNCE_SINCE_$LI$() { if (Unit.OUNCE_SINCE == null) {
        Unit.OUNCE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.OUNCE_SINCE; }
    static POUND_SINCE_$LI$() { if (Unit.POUND_SINCE == null) {
        Unit.POUND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.POUND_SINCE; }
    static BIT_SINCE_$LI$() { if (Unit.BIT_SINCE == null) {
        Unit.BIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.BIT_SINCE; }
    static KILOBIT_SINCE_$LI$() { if (Unit.KILOBIT_SINCE == null) {
        Unit.KILOBIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOBIT_SINCE; }
    static MEGABIT_SINCE_$LI$() { if (Unit.MEGABIT_SINCE == null) {
        Unit.MEGABIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MEGABIT_SINCE; }
    static GIGABIT_SINCE_$LI$() { if (Unit.GIGABIT_SINCE == null) {
        Unit.GIGABIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.GIGABIT_SINCE; }
    static TERABIT_SINCE_$LI$() { if (Unit.TERABIT_SINCE == null) {
        Unit.TERABIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.TERABIT_SINCE; }
    static PETABIT_SINCE_$LI$() { if (Unit.PETABIT_SINCE == null) {
        Unit.PETABIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PETABIT_SINCE; }
    static EXABIT_SINCE_$LI$() { if (Unit.EXABIT_SINCE == null) {
        Unit.EXABIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.EXABIT_SINCE; }
    static ZETTABIT_SINCE_$LI$() { if (Unit.ZETTABIT_SINCE == null) {
        Unit.ZETTABIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ZETTABIT_SINCE; }
    static YOTTABIT_SINCE_$LI$() { if (Unit.YOTTABIT_SINCE == null) {
        Unit.YOTTABIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.YOTTABIT_SINCE; }
    static BYTE_SINCE_$LI$() { if (Unit.BYTE_SINCE == null) {
        Unit.BYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.BYTE_SINCE; }
    static KILOBYTE_SINCE_$LI$() { if (Unit.KILOBYTE_SINCE == null) {
        Unit.KILOBYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOBYTE_SINCE; }
    static MEGABYTE_SINCE_$LI$() { if (Unit.MEGABYTE_SINCE == null) {
        Unit.MEGABYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MEGABYTE_SINCE; }
    static GIGABYTE_SINCE_$LI$() { if (Unit.GIGABYTE_SINCE == null) {
        Unit.GIGABYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.GIGABYTE_SINCE; }
    static TERABYTE_SINCE_$LI$() { if (Unit.TERABYTE_SINCE == null) {
        Unit.TERABYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.TERABYTE_SINCE; }
    static PETABYTE_SINCE_$LI$() { if (Unit.PETABYTE_SINCE == null) {
        Unit.PETABYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.PETABYTE_SINCE; }
    static EXABYTE_SINCE_$LI$() { if (Unit.EXABYTE_SINCE == null) {
        Unit.EXABYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.EXABYTE_SINCE; }
    static ZETTABYTE_SINCE_$LI$() { if (Unit.ZETTABYTE_SINCE == null) {
        Unit.ZETTABYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ZETTABYTE_SINCE; }
    static YOTTABYTE_SINCE_$LI$() { if (Unit.YOTTABYTE_SINCE == null) {
        Unit.YOTTABYTE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.YOTTABYTE_SINCE; }
    static JOULE_SINCE_$LI$() { if (Unit.JOULE_SINCE == null) {
        Unit.JOULE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.JOULE_SINCE; }
    static ELECTRONO_VOLT_SINCE_$LI$() { if (Unit.ELECTRONO_VOLT_SINCE == null) {
        Unit.ELECTRONO_VOLT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.ELECTRONO_VOLT_SINCE; }
    static KILO_ELECTRONO_VOLT_SINCE_$LI$() { if (Unit.KILO_ELECTRONO_VOLT_SINCE == null) {
        Unit.KILO_ELECTRONO_VOLT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILO_ELECTRONO_VOLT_SINCE; }
    static MEGA_ELECTRONO_VOLT_SINCE_$LI$() { if (Unit.MEGA_ELECTRONO_VOLT_SINCE == null) {
        Unit.MEGA_ELECTRONO_VOLT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MEGA_ELECTRONO_VOLT_SINCE; }
    static GIGA_ELECTRONO_VOLT_SINCE_$LI$() { if (Unit.GIGA_ELECTRONO_VOLT_SINCE == null) {
        Unit.GIGA_ELECTRONO_VOLT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.GIGA_ELECTRONO_VOLT_SINCE; }
    static TERA_ELECTRONO_VOLT_SINCE_$LI$() { if (Unit.TERA_ELECTRONO_VOLT_SINCE == null) {
        Unit.TERA_ELECTRONO_VOLT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.TERA_ELECTRONO_VOLT_SINCE; }
    static METRE_PER_SECOND_SINCE_$LI$() { if (Unit.METRE_PER_SECOND_SINCE == null) {
        Unit.METRE_PER_SECOND_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.METRE_PER_SECOND_SINCE; }
    static KILOMETRE_PER_HOUR_SINCE_$LI$() { if (Unit.KILOMETRE_PER_HOUR_SINCE == null) {
        Unit.KILOMETRE_PER_HOUR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOMETRE_PER_HOUR_SINCE; }
    static MILE_PER_HOUR_SINCE_$LI$() { if (Unit.MILE_PER_HOUR_SINCE == null) {
        Unit.MILE_PER_HOUR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILE_PER_HOUR_SINCE; }
    static KNOT_SINCE_$LI$() { if (Unit.KNOT_SINCE == null) {
        Unit.KNOT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KNOT_SINCE; }
    static METRE_PER_SECOND2_SINCE_$LI$() { if (Unit.METRE_PER_SECOND2_SINCE == null) {
        Unit.METRE_PER_SECOND2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.METRE_PER_SECOND2_SINCE; }
    static KILOMETRE_PER_HOUR2_SINCE_$LI$() { if (Unit.KILOMETRE_PER_HOUR2_SINCE == null) {
        Unit.KILOMETRE_PER_HOUR2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.KILOMETRE_PER_HOUR2_SINCE; }
    static MILE_PER_HOUR2_SINCE_$LI$() { if (Unit.MILE_PER_HOUR2_SINCE == null) {
        Unit.MILE_PER_HOUR2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MILE_PER_HOUR2_SINCE; }
    static RADIAN_ARC_SINCE_$LI$() { if (Unit.RADIAN_ARC_SINCE == null) {
        Unit.RADIAN_ARC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.RADIAN_ARC_SINCE; }
    static DEGREE_ARC_SINCE_$LI$() { if (Unit.DEGREE_ARC_SINCE == null) {
        Unit.DEGREE_ARC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.DEGREE_ARC_SINCE; }
    static MINUTE_ARC_SINCE_$LI$() { if (Unit.MINUTE_ARC_SINCE == null) {
        Unit.MINUTE_ARC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.MINUTE_ARC_SINCE; }
    static SECOND_ARC_SINCE_$LI$() { if (Unit.SECOND_ARC_SINCE == null) {
        Unit.SECOND_ARC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return Unit.SECOND_ARC_SINCE; }
}
exports.Unit = Unit;
Unit.TYPE_ID = 12;
Unit.TYPE_DESC = "Unit";
Unit.PERC_ID = 1;
Unit.PROMIL_ID = 2;
Unit.YOTTA_ID = 101;
Unit.ZETTA_ID = 102;
Unit.EXA_ID = 103;
Unit.PETA_ID = 104;
Unit.TERA_ID = 105;
Unit.GIGA_ID = 106;
Unit.MEGA_ID = 107;
Unit.KILO_ID = 108;
Unit.HECTO_ID = 109;
Unit.DECA_ID = 110;
Unit.DECI_ID = 111;
Unit.CENTI_ID = 112;
Unit.MILLI_ID = 113;
Unit.MICRO_ID = 114;
Unit.NANO_ID = 115;
Unit.PICO_ID = 116;
Unit.FEMTO_ID = 117;
Unit.ATTO_ID = 118;
Unit.ZEPTO_ID = 119;
Unit.YOCTO_ID = 120;
Unit.METRE_ID = 201;
Unit.KILOMETRE_ID = 202;
Unit.CENTIMETRE_ID = 203;
Unit.MILLIMETRE_ID = 204;
Unit.INCH_ID = 205;
Unit.YARD_ID = 206;
Unit.FEET_ID = 207;
Unit.MILE_ID = 208;
Unit.NAUTICAL_MILE_ID = 209;
Unit.METRE2_ID = 301;
Unit.CENTIMETRE2_ID = 302;
Unit.MILLIMETRE2_ID = 303;
Unit.ARE_ID = 304;
Unit.HECTARE_ID = 305;
Unit.ACRE_ID = 306;
Unit.KILOMETRE2_ID = 307;
Unit.MILLIMETRE3_ID = 401;
Unit.CENTIMETRE3_ID = 402;
Unit.METRE3_ID = 403;
Unit.KILOMETRE3_ID = 404;
Unit.MILLILITRE_ID = 405;
Unit.LITRE_ID = 406;
Unit.GALLON_ID = 407;
Unit.PINT_ID = 408;
Unit.SECOND_ID = 501;
Unit.MILLISECOND_ID = 502;
Unit.MINUTE_ID = 503;
Unit.HOUR_ID = 504;
Unit.DAY_ID = 505;
Unit.WEEK_ID = 506;
Unit.JULIAN_YEAR_ID = 507;
Unit.KILOGRAM_ID = 508;
Unit.GRAM_ID = 509;
Unit.MILLIGRAM_ID = 510;
Unit.DECAGRAM_ID = 511;
Unit.TONNE_ID = 512;
Unit.OUNCE_ID = 513;
Unit.POUND_ID = 514;
Unit.BIT_ID = 601;
Unit.KILOBIT_ID = 602;
Unit.MEGABIT_ID = 603;
Unit.GIGABIT_ID = 604;
Unit.TERABIT_ID = 605;
Unit.PETABIT_ID = 606;
Unit.EXABIT_ID = 607;
Unit.ZETTABIT_ID = 608;
Unit.YOTTABIT_ID = 609;
Unit.BYTE_ID = 610;
Unit.KILOBYTE_ID = 611;
Unit.MEGABYTE_ID = 612;
Unit.GIGABYTE_ID = 613;
Unit.TERABYTE_ID = 614;
Unit.PETABYTE_ID = 615;
Unit.EXABYTE_ID = 616;
Unit.ZETTABYTE_ID = 617;
Unit.YOTTABYTE_ID = 618;
Unit.JOULE_ID = 701;
Unit.ELECTRONO_VOLT_ID = 702;
Unit.KILO_ELECTRONO_VOLT_ID = 703;
Unit.MEGA_ELECTRONO_VOLT_ID = 704;
Unit.GIGA_ELECTRONO_VOLT_ID = 705;
Unit.TERA_ELECTRONO_VOLT_ID = 706;
Unit.METRE_PER_SECOND_ID = 801;
Unit.KILOMETRE_PER_HOUR_ID = 802;
Unit.MILE_PER_HOUR_ID = 803;
Unit.KNOT_ID = 804;
Unit.METRE_PER_SECOND2_ID = 901;
Unit.KILOMETRE_PER_HOUR2_ID = 902;
Unit.MILE_PER_HOUR2_ID = 903;
Unit.RADIAN_ARC_ID = 1001;
Unit.DEGREE_ARC_ID = 1002;
Unit.MINUTE_ARC_ID = 1003;
Unit.SECOND_ARC_ID = 1004;
Unit.PERC_STR = "[%]";
Unit.PROMIL_STR = "[%%]";
Unit.YOTTA_STR = "[Y]";
Unit.YOTTA_SEPT_STR = "[sept]";
Unit.ZETTA_STR = "[Z]";
Unit.ZETTA_SEXT_STR = "[sext]";
Unit.EXA_STR = "[E]";
Unit.EXA_QUINT_STR = "[quint]";
Unit.PETA_STR = "[P]";
Unit.PETA_QUAD_STR = "[quad]";
Unit.TERA_STR = "[T]";
Unit.TERA_TRIL_STR = "[tril]";
Unit.GIGA_STR = "[G]";
Unit.GIGA_BIL_STR = "[bil]";
Unit.MEGA_STR = "[M]";
Unit.MEGA_MIL_STR = "[mil]";
Unit.KILO_STR = "[k]";
Unit.KILO_TH_STR = "[th]";
Unit.HECTO_STR = "[hecto]";
Unit.HECTO_HUND_STR = "[hund]";
Unit.DECA_STR = "[deca]";
Unit.DECA_TEN_STR = "[ten]";
Unit.DECI_STR = "[deci]";
Unit.CENTI_STR = "[centi]";
Unit.MILLI_STR = "[milli]";
Unit.MICRO_STR = "[mic]";
Unit.NANO_STR = "[n]";
Unit.PICO_STR = "[p]";
Unit.FEMTO_STR = "[f]";
Unit.ATTO_STR = "[a]";
Unit.ZEPTO_STR = "[z]";
Unit.YOCTO_STR = "[y]";
Unit.METRE_STR = "[m]";
Unit.KILOMETRE_STR = "[km]";
Unit.CENTIMETRE_STR = "[cm]";
Unit.MILLIMETRE_STR = "[mm]";
Unit.INCH_STR = "[inch]";
Unit.YARD_STR = "[yd]";
Unit.FEET_STR = "[ft]";
Unit.MILE_STR = "[mile]";
Unit.NAUTICAL_MILE_STR = "[nmi]";
Unit.METRE2_STR = "[m2]";
Unit.CENTIMETRE2_STR = "[cm2]";
Unit.MILLIMETRE2_STR = "[mm2]";
Unit.ARE_STR = "[are]";
Unit.HECTARE_STR = "[ha]";
Unit.ACRE_STR = "[acre]";
Unit.KILOMETRE2_STR = "[km2]";
Unit.MILLIMETRE3_STR = "[mm3]";
Unit.CENTIMETRE3_STR = "[cm3]";
Unit.METRE3_STR = "[m3]";
Unit.KILOMETRE3_STR = "[km3]";
Unit.MILLILITRE_STR = "[ml]";
Unit.LITRE_STR = "[l]";
Unit.GALLON_STR = "[gall]";
Unit.PINT_STR = "[pint]";
Unit.SECOND_STR = "[s]";
Unit.MILLISECOND_STR = "[ms]";
Unit.MINUTE_STR = "[min]";
Unit.HOUR_STR = "[h]";
Unit.DAY_STR = "[day]";
Unit.WEEK_STR = "[week]";
Unit.JULIAN_YEAR_STR = "[yearj]";
Unit.KILOGRAM_STR = "[kg]";
Unit.GRAM_STR = "[gr]";
Unit.MILLIGRAM_STR = "[mg]";
Unit.DECAGRAM_STR = "[dag]";
Unit.TONNE_STR = "[t]";
Unit.OUNCE_STR = "[oz]";
Unit.POUND_STR = "[lb]";
Unit.BIT_STR = "[b]";
Unit.KILOBIT_STR = "[kb]";
Unit.MEGABIT_STR = "[Mb]";
Unit.GIGABIT_STR = "[Gb]";
Unit.TERABIT_STR = "[Tb]";
Unit.PETABIT_STR = "[Pb]";
Unit.EXABIT_STR = "[Eb]";
Unit.ZETTABIT_STR = "[Zb]";
Unit.YOTTABIT_STR = "[Yb]";
Unit.BYTE_STR = "[B]";
Unit.KILOBYTE_STR = "[kB]";
Unit.MEGABYTE_STR = "[MB]";
Unit.GIGABYTE_STR = "[GB]";
Unit.TERABYTE_STR = "[TB]";
Unit.PETABYTE_STR = "[PB]";
Unit.EXABYTE_STR = "[EB]";
Unit.ZETTABYTE_STR = "[ZB]";
Unit.YOTTABYTE_STR = "[YB]";
Unit.JOULE_STR = "[J]";
Unit.ELECTRONO_VOLT_STR = "[eV]";
Unit.KILO_ELECTRONO_VOLT_STR = "[keV]";
Unit.MEGA_ELECTRONO_VOLT_STR = "[MeV]";
Unit.GIGA_ELECTRONO_VOLT_STR = "[GeV]";
Unit.TERA_ELECTRONO_VOLT_STR = "[TeV]";
Unit.METRE_PER_SECOND_STR = "[m/s]";
Unit.KILOMETRE_PER_HOUR_STR = "[km/h]";
Unit.MILE_PER_HOUR_STR = "[mi/h]";
Unit.KNOT_STR = "[knot]";
Unit.METRE_PER_SECOND2_STR = "[m/s2]";
Unit.KILOMETRE_PER_HOUR2_STR = "[km/h2]";
Unit.MILE_PER_HOUR2_STR = "[mi/h2]";
Unit.RADIAN_ARC_STR = "[rad]";
Unit.DEGREE_ARC_STR = "[deg]";
Unit.MINUTE_ARC_STR = "[\']";
Unit.SECOND_ARC_STR = "[\'\']";
Unit.PERC_DESC = "<Ratio, Fraction> Percentage = 0.01";
Unit.PROMIL_DESC = "<Ratio, Fraction> Promil, Per mille = 0.001";
Unit.YOTTA_DESC = "<Metric prefix> Septillion / Yotta = 10^24";
Unit.ZETTA_DESC = "<Metric prefix> Sextillion / Zetta = 10^21";
Unit.EXA_DESC = "<Metric prefix> Quintillion / Exa = 10^18";
Unit.PETA_DESC = "<Metric prefix> Quadrillion / Peta = 10^15";
Unit.TERA_DESC = "<Metric prefix> Trillion / Tera = 10^12";
Unit.GIGA_DESC = "<Metric prefix> Billion / Giga = 10^9";
Unit.MEGA_DESC = "<Metric prefix> Million / Mega = 10^6";
Unit.KILO_DESC = "<Metric prefix> Thousand / Kilo = 10^3";
Unit.HECTO_DESC = "<Metric prefix> Hundred / Hecto = 10^2";
Unit.DECA_DESC = "<Metric prefix> Ten / Deca = 10";
Unit.DECI_DESC = "<Metric prefix> Tenth / Deci = 0.1";
Unit.CENTI_DESC = "<Metric prefix> Hundredth / Centi = 0.01";
Unit.MILLI_DESC = "<Metric prefix> Thousandth / Milli = 0.001";
Unit.MICRO_DESC = "<Metric prefix> Millionth / Micro = 10^-6";
Unit.NANO_DESC = "<Metric prefix> Billionth / Nano = 10^-9";
Unit.PICO_DESC = "<Metric prefix> Trillionth / Pico = 10^-12";
Unit.FEMTO_DESC = "<Metric prefix> Quadrillionth / Femto = 10^-15";
Unit.ATTO_DESC = "<Metric prefix> Quintillionth / Atoo = 10^-18";
Unit.ZEPTO_DESC = "<Metric prefix> Sextillionth / Zepto = 10^-21";
Unit.YOCTO_DESC = "<Metric prefix> Septillionth / Yocto = 10^-24";
Unit.METRE_DESC = "<Unit of length> Metre / Meter (m=1)";
Unit.KILOMETRE_DESC = "<Unit of length> Kilometre / Kilometer (m=1)";
Unit.CENTIMETRE_DESC = "<Unit of length> Centimetre / Centimeter (m=1)";
Unit.MILLIMETRE_DESC = "<Unit of length> Millimetre / Millimeter (m=1)";
Unit.INCH_DESC = "<Unit of length> Inch (m=1)";
Unit.YARD_DESC = "<Unit of length> Yard (m=1)";
Unit.FEET_DESC = "<Unit of length> Feet (m=1)";
Unit.MILE_DESC = "<Unit of length> Mile (m=1)";
Unit.NAUTICAL_MILE_DESC = "<Unit of length> Nautical mile (m=1)";
Unit.METRE2_DESC = "<Unit of area> Square metre / Square meter (m=1)";
Unit.CENTIMETRE2_DESC = "<Unit of area> Square centimetre / Square centimeter (m=1)";
Unit.MILLIMETRE2_DESC = "<Unit of area> Square millimetre / Square millimeter (m=1)";
Unit.ARE_DESC = "<Unit of area> Are (m=1)";
Unit.HECTARE_DESC = "<Unit of area> Hectare (m=1)";
Unit.ACRE_DESC = "<Unit of area> Acre (m=1)";
Unit.KILOMETRE2_DESC = "<Unit of area> Square kilometre / Square kilometer (m=1)";
Unit.MILLIMETRE3_DESC = "<Unit of volume> Cubic millimetre / Cubic millimeter (m=1)";
Unit.CENTIMETRE3_DESC = "<Unit of volume> Cubic centimetre / Cubic centimeter (m=1)";
Unit.METRE3_DESC = "<Unit of volume> Cubic metre / Cubic meter (m=1)";
Unit.KILOMETRE3_DESC = "<Unit of volume> Cubic kilometre / Cubic kilometer (m=1)";
Unit.MILLILITRE_DESC = "<Unit of volume> Millilitre / Milliliter (m=1)";
Unit.LITRE_DESC = "<Unit of volume> Litre / Liter (m=1)";
Unit.GALLON_DESC = "<Unit of volume> Gallon (m=1)";
Unit.PINT_DESC = "<Unit of volume> Pint (m=1)";
Unit.SECOND_DESC = "<Unit of time> Second (s=1)";
Unit.MILLISECOND_DESC = "<Unit of time> Millisecond (s=1)";
Unit.MINUTE_DESC = "<Unit of time> Minute (s=1)";
Unit.HOUR_DESC = "<Unit of time> Hour (s=1)";
Unit.DAY_DESC = "<Unit of time> Day (s=1)";
Unit.WEEK_DESC = "<Unit of time> Week (s=1)";
Unit.JULIAN_YEAR_DESC = "<Unit of time> Julian year = 365.25 days (s=1)";
Unit.KILOGRAM_DESC = "<Unit of mass> Kilogram (kg=1)";
Unit.GRAM_DESC = "<Unit of mass> Gram (kg=1)";
Unit.MILLIGRAM_DESC = "<Unit of mass> Milligram (kg=1)";
Unit.DECAGRAM_DESC = "<Unit of mass> Decagram (kg=1)";
Unit.TONNE_DESC = "<Unit of mass> Tonne (kg=1)";
Unit.OUNCE_DESC = "<Unit of mass> Ounce (kg=1)";
Unit.POUND_DESC = "<Unit of mass> Pound (kg=1)";
Unit.BIT_DESC = "<Unit of information> Bit (bit=1)";
Unit.KILOBIT_DESC = "<Unit of information> Kilobit (bit=1)";
Unit.MEGABIT_DESC = "<Unit of information> Megabit (bit=1)";
Unit.GIGABIT_DESC = "<Unit of information> Gigabit (bit=1)";
Unit.TERABIT_DESC = "<Unit of information> Terabit (bit=1)";
Unit.PETABIT_DESC = "<Unit of information> Petabit (bit=1)";
Unit.EXABIT_DESC = "<Unit of information> Exabit (bit=1)";
Unit.ZETTABIT_DESC = "<Unit of information> Zettabit (bit=1)";
Unit.YOTTABIT_DESC = "<Unit of information> Yottabit (bit=1)";
Unit.BYTE_DESC = "<Unit of information> Byte (bit=1)";
Unit.KILOBYTE_DESC = "<Unit of information> Kilobyte (bit=1)";
Unit.MEGABYTE_DESC = "<Unit of information> Megabyte (bit=1)";
Unit.GIGABYTE_DESC = "<Unit of information> Gigabyte (bit=1)";
Unit.TERABYTE_DESC = "<Unit of information> Terabyte (bit=1)";
Unit.PETABYTE_DESC = "<Unit of information> Petabyte (bit=1)";
Unit.EXABYTE_DESC = "<Unit of information> Exabyte (bit=1)";
Unit.ZETTABYTE_DESC = "<Unit of information> Zettabyte (bit=1)";
Unit.YOTTABYTE_DESC = "<Unit of information> Yottabyte (bit=1)";
Unit.JOULE_DESC = "<Unit of energy> Joule (m=1, kg=1, s=1)";
Unit.ELECTRONO_VOLT_DESC = "<Unit of energy> Electronovolt (m=1, kg=1, s=1)";
Unit.KILO_ELECTRONO_VOLT_DESC = "<Unit of energy> Kiloelectronovolt (m=1, kg=1, s=1)";
Unit.MEGA_ELECTRONO_VOLT_DESC = "<Unit of energy> Megaelectronovolt (m=1, kg=1, s=1)";
Unit.GIGA_ELECTRONO_VOLT_DESC = "<Unit of energy> Gigaelectronovolt (m=1, kg=1, s=1)";
Unit.TERA_ELECTRONO_VOLT_DESC = "<Unit of energy> Teraelectronovolt (m=1, kg=1, s=1)";
Unit.METRE_PER_SECOND_DESC = "<Unit of speed> Metre / Meter per second (m=1, s=1)";
Unit.KILOMETRE_PER_HOUR_DESC = "<Unit of speed> Kilometre / Kilometer per hour (m=1, s=1)";
Unit.MILE_PER_HOUR_DESC = "<Unit of speed> Mile per hour (m=1, s=1)";
Unit.KNOT_DESC = "<Unit of speed> Knot (m=1, s=1)";
Unit.METRE_PER_SECOND2_DESC = "<Unit of acceleration> Metre / Meter per square second (m=1, s=1)";
Unit.KILOMETRE_PER_HOUR2_DESC = "<Unit of acceleration> Kilometre / Kilometer per square hour (m=1, s=1)";
Unit.MILE_PER_HOUR2_DESC = "<Unit of acceleration> Mile per square hour (m=1, s=1)";
Unit.RADIAN_ARC_DESC = "<Unit of angle> Radian (rad=1)";
Unit.DEGREE_ARC_DESC = "<Unit of angle> Degree of arc (rad=1)";
Unit.MINUTE_ARC_DESC = "<Unit of angle> Minute of arc (rad=1)";
Unit.SECOND_ARC_DESC = "<Unit of angle> Second of arc (rad=1)";
Unit["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.Unit";
//# sourceMappingURL=Unit.js.map