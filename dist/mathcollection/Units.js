"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Units = void 0;
/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
const MathConstants_1 = require("./MathConstants");
/**
 * Units - class representing the most important units (length, area, volume, mass).
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class Units {
    static KILOMETRE_$LI$() { if (Units.KILOMETRE == null) {
        Units.KILOMETRE = 1000.0 * Units.METRE;
    } return Units.KILOMETRE; }
    static CENTIMETRE_$LI$() { if (Units.CENTIMETRE == null) {
        Units.CENTIMETRE = Units.CENTI * Units.METRE;
    } return Units.CENTIMETRE; }
    static MILLIMETRE_$LI$() { if (Units.MILLIMETRE == null) {
        Units.MILLIMETRE = Units.MILLI * Units.METRE;
    } return Units.MILLIMETRE; }
    static INCH_$LI$() { if (Units.INCH == null) {
        Units.INCH = 2.54 * Units.CENTIMETRE_$LI$();
    } return Units.INCH; }
    static YARD_$LI$() { if (Units.YARD == null) {
        Units.YARD = 0.9144 * Units.METRE;
    } return Units.YARD; }
    static FEET_$LI$() { if (Units.FEET == null) {
        Units.FEET = 30.48 * Units.CENTIMETRE_$LI$();
    } return Units.FEET; }
    static MILE_$LI$() { if (Units.MILE == null) {
        Units.MILE = 1.609344 * Units.KILOMETRE_$LI$();
    } return Units.MILE; }
    static NAUTICAL_MILE_$LI$() { if (Units.NAUTICAL_MILE == null) {
        Units.NAUTICAL_MILE = 1.852 * Units.KILOMETRE_$LI$();
    } return Units.NAUTICAL_MILE; }
    static METRE2_$LI$() { if (Units.METRE2 == null) {
        Units.METRE2 = Units.METRE * Units.METRE;
    } return Units.METRE2; }
    static CENTIMETRE2_$LI$() { if (Units.CENTIMETRE2 == null) {
        Units.CENTIMETRE2 = Units.CENTIMETRE_$LI$() * Units.CENTIMETRE_$LI$();
    } return Units.CENTIMETRE2; }
    static MILLIMETRE2_$LI$() { if (Units.MILLIMETRE2 == null) {
        Units.MILLIMETRE2 = Units.MILLIMETRE_$LI$() * Units.MILLIMETRE_$LI$();
    } return Units.MILLIMETRE2; }
    static ARE_$LI$() { if (Units.ARE == null) {
        Units.ARE = (10.0 * Units.METRE) * (10.0 * Units.METRE);
    } return Units.ARE; }
    static HECTARE_$LI$() { if (Units.HECTARE == null) {
        Units.HECTARE = (100.0 * Units.METRE) * (100.0 * Units.METRE);
    } return Units.HECTARE; }
    static KILOMETRE2_$LI$() { if (Units.KILOMETRE2 == null) {
        Units.KILOMETRE2 = Units.KILOMETRE_$LI$() * Units.KILOMETRE_$LI$();
    } return Units.KILOMETRE2; }
    static ACRE_$LI$() { if (Units.ACRE == null) {
        Units.ACRE = (66.0 * Units.FEET_$LI$()) * (660.0 * Units.FEET_$LI$());
    } return Units.ACRE; }
    static MILLIMETRE3_$LI$() { if (Units.MILLIMETRE3 == null) {
        Units.MILLIMETRE3 = Units.MILLIMETRE_$LI$() * Units.MILLIMETRE_$LI$() * Units.MILLIMETRE_$LI$();
    } return Units.MILLIMETRE3; }
    static CENTIMETRE3_$LI$() { if (Units.CENTIMETRE3 == null) {
        Units.CENTIMETRE3 = Units.CENTIMETRE_$LI$() * Units.CENTIMETRE_$LI$() * Units.CENTIMETRE_$LI$();
    } return Units.CENTIMETRE3; }
    static METRE3_$LI$() { if (Units.METRE3 == null) {
        Units.METRE3 = Units.METRE * Units.METRE * Units.METRE;
    } return Units.METRE3; }
    static KILOMETRE3_$LI$() { if (Units.KILOMETRE3 == null) {
        Units.KILOMETRE3 = Units.KILOMETRE_$LI$() * Units.KILOMETRE_$LI$() * Units.KILOMETRE_$LI$();
    } return Units.KILOMETRE3; }
    static MILLILITRE_$LI$() { if (Units.MILLILITRE == null) {
        Units.MILLILITRE = Units.CENTIMETRE3_$LI$();
    } return Units.MILLILITRE; }
    static LITRE_$LI$() { if (Units.LITRE == null) {
        Units.LITRE = 1000.0 * Units.MILLILITRE_$LI$();
    } return Units.LITRE; }
    static GALLON_$LI$() { if (Units.GALLON == null) {
        Units.GALLON = 3.78541178 * Units.LITRE_$LI$();
    } return Units.GALLON; }
    static PINT_$LI$() { if (Units.PINT == null) {
        Units.PINT = 473.176473 * Units.MILLILITRE_$LI$();
    } return Units.PINT; }
    static MILLISECOND_$LI$() { if (Units.MILLISECOND == null) {
        Units.MILLISECOND = Units.MILLI * Units.SECOND;
    } return Units.MILLISECOND; }
    static MINUTE_$LI$() { if (Units.MINUTE == null) {
        Units.MINUTE = 60.0 * Units.SECOND;
    } return Units.MINUTE; }
    static HOUR_$LI$() { if (Units.HOUR == null) {
        Units.HOUR = 60.0 * Units.MINUTE_$LI$();
    } return Units.HOUR; }
    static DAY_$LI$() { if (Units.DAY == null) {
        Units.DAY = 24.0 * Units.HOUR_$LI$();
    } return Units.DAY; }
    static WEEK_$LI$() { if (Units.WEEK == null) {
        Units.WEEK = 7.0 * Units.DAY_$LI$();
    } return Units.WEEK; }
    static JULIAN_YEAR_$LI$() { if (Units.JULIAN_YEAR == null) {
        Units.JULIAN_YEAR = 365.25 * Units.DAY_$LI$();
    } return Units.JULIAN_YEAR; }
    static GRAM_$LI$() { if (Units.GRAM == null) {
        Units.GRAM = 0.001 * Units.KILOGRAM;
    } return Units.GRAM; }
    static MILLIGRAM_$LI$() { if (Units.MILLIGRAM == null) {
        Units.MILLIGRAM = Units.MILLI * Units.GRAM_$LI$();
    } return Units.MILLIGRAM; }
    static DECAGRAM_$LI$() { if (Units.DECAGRAM == null) {
        Units.DECAGRAM = Units.DECA * Units.GRAM_$LI$();
    } return Units.DECAGRAM; }
    static TONNE_$LI$() { if (Units.TONNE == null) {
        Units.TONNE = 1000.0 * Units.KILOGRAM;
    } return Units.TONNE; }
    static OUNCE_$LI$() { if (Units.OUNCE == null) {
        Units.OUNCE = 28.3495231 * Units.GRAM_$LI$();
    } return Units.OUNCE; }
    static POUND_$LI$() { if (Units.POUND == null) {
        Units.POUND = 0.45359237 * Units.KILOGRAM;
    } return Units.POUND; }
    static AMPERE_$LI$() { if (Units.AMPERE == null) {
        Units.AMPERE = Units.COULOMB / Units.SECOND;
    } return Units.AMPERE; }
    static KILOBIT_$LI$() { if (Units.KILOBIT == null) {
        Units.KILOBIT = 1024.0 * Units.BIT;
    } return Units.KILOBIT; }
    static MEGABIT_$LI$() { if (Units.MEGABIT == null) {
        Units.MEGABIT = 1024.0 * Units.KILOBIT_$LI$();
    } return Units.MEGABIT; }
    static GIGABIT_$LI$() { if (Units.GIGABIT == null) {
        Units.GIGABIT = 1024.0 * Units.MEGABIT_$LI$();
    } return Units.GIGABIT; }
    static TERABIT_$LI$() { if (Units.TERABIT == null) {
        Units.TERABIT = 1024.0 * Units.GIGABIT_$LI$();
    } return Units.TERABIT; }
    static PETABIT_$LI$() { if (Units.PETABIT == null) {
        Units.PETABIT = 1024.0 * Units.TERABIT_$LI$();
    } return Units.PETABIT; }
    static EXABIT_$LI$() { if (Units.EXABIT == null) {
        Units.EXABIT = 1024.0 * Units.PETABIT_$LI$();
    } return Units.EXABIT; }
    static ZETTABIT_$LI$() { if (Units.ZETTABIT == null) {
        Units.ZETTABIT = 1024.0 * Units.EXABIT_$LI$();
    } return Units.ZETTABIT; }
    static YOTTABIT_$LI$() { if (Units.YOTTABIT == null) {
        Units.YOTTABIT = 1024.0 * Units.ZETTABIT_$LI$();
    } return Units.YOTTABIT; }
    static BYTE_$LI$() { if (Units.BYTE == null) {
        Units.BYTE = 8.0 * Units.BIT;
    } return Units.BYTE; }
    static KILOBYTE_$LI$() { if (Units.KILOBYTE == null) {
        Units.KILOBYTE = 1024.0 * Units.BYTE_$LI$();
    } return Units.KILOBYTE; }
    static MEGABYTE_$LI$() { if (Units.MEGABYTE == null) {
        Units.MEGABYTE = 1024.0 * Units.KILOBYTE_$LI$();
    } return Units.MEGABYTE; }
    static GIGABYTE_$LI$() { if (Units.GIGABYTE == null) {
        Units.GIGABYTE = 1024.0 * Units.MEGABYTE_$LI$();
    } return Units.GIGABYTE; }
    static TERABYTE_$LI$() { if (Units.TERABYTE == null) {
        Units.TERABYTE = 1024.0 * Units.GIGABYTE_$LI$();
    } return Units.TERABYTE; }
    static PETABYTE_$LI$() { if (Units.PETABYTE == null) {
        Units.PETABYTE = 1024.0 * Units.TERABYTE_$LI$();
    } return Units.PETABYTE; }
    static EXABYTE_$LI$() { if (Units.EXABYTE == null) {
        Units.EXABYTE = 1024.0 * Units.PETABYTE_$LI$();
    } return Units.EXABYTE; }
    static ZETTABYTE_$LI$() { if (Units.ZETTABYTE == null) {
        Units.ZETTABYTE = 1024.0 * Units.EXABYTE_$LI$();
    } return Units.ZETTABYTE; }
    static YOTTABYTE_$LI$() { if (Units.YOTTABYTE == null) {
        Units.YOTTABYTE = 1024.0 * Units.ZETTABYTE_$LI$();
    } return Units.YOTTABYTE; }
    static JOULE_$LI$() { if (Units.JOULE == null) {
        Units.JOULE = (Units.KILOGRAM * Units.METRE * Units.METRE) / (Units.SECOND * Units.SECOND);
    } return Units.JOULE; }
    static ELECTRONO_VOLT_$LI$() { if (Units.ELECTRONO_VOLT == null) {
        Units.ELECTRONO_VOLT = 1.6021766208E-19 * Units.JOULE_$LI$();
    } return Units.ELECTRONO_VOLT; }
    static KILO_ELECTRONO_VOLT_$LI$() { if (Units.KILO_ELECTRONO_VOLT == null) {
        Units.KILO_ELECTRONO_VOLT = Units.KILO * Units.ELECTRONO_VOLT_$LI$();
    } return Units.KILO_ELECTRONO_VOLT; }
    static MEGA_ELECTRONO_VOLT_$LI$() { if (Units.MEGA_ELECTRONO_VOLT == null) {
        Units.MEGA_ELECTRONO_VOLT = Units.MEGA * Units.ELECTRONO_VOLT_$LI$();
    } return Units.MEGA_ELECTRONO_VOLT; }
    static GIGA_ELECTRONO_VOLT_$LI$() { if (Units.GIGA_ELECTRONO_VOLT == null) {
        Units.GIGA_ELECTRONO_VOLT = Units.GIGA * Units.ELECTRONO_VOLT_$LI$();
    } return Units.GIGA_ELECTRONO_VOLT; }
    static TERA_ELECTRONO_VOLT_$LI$() { if (Units.TERA_ELECTRONO_VOLT == null) {
        Units.TERA_ELECTRONO_VOLT = Units.TERA * Units.ELECTRONO_VOLT_$LI$();
    } return Units.TERA_ELECTRONO_VOLT; }
    static METRE_PER_SECOND_$LI$() { if (Units.METRE_PER_SECOND == null) {
        Units.METRE_PER_SECOND = Units.METRE / Units.SECOND;
    } return Units.METRE_PER_SECOND; }
    static KILOMETRE_PER_HOUR_$LI$() { if (Units.KILOMETRE_PER_HOUR == null) {
        Units.KILOMETRE_PER_HOUR = Units.KILOMETRE_$LI$() / Units.HOUR_$LI$();
    } return Units.KILOMETRE_PER_HOUR; }
    static MILE_PER_HOUR_$LI$() { if (Units.MILE_PER_HOUR == null) {
        Units.MILE_PER_HOUR = Units.MILE_$LI$() / Units.HOUR_$LI$();
    } return Units.MILE_PER_HOUR; }
    static KNOT_$LI$() { if (Units.KNOT == null) {
        Units.KNOT = 0.514444444 * Units.METRE / Units.SECOND;
    } return Units.KNOT; }
    static METRE_PER_SECOND2_$LI$() { if (Units.METRE_PER_SECOND2 == null) {
        Units.METRE_PER_SECOND2 = Units.METRE / (Units.SECOND * Units.SECOND);
    } return Units.METRE_PER_SECOND2; }
    static KILOMETRE_PER_HOUR2_$LI$() { if (Units.KILOMETRE_PER_HOUR2 == null) {
        Units.KILOMETRE_PER_HOUR2 = Units.KILOMETRE_$LI$() / (Units.HOUR_$LI$() * Units.HOUR_$LI$());
    } return Units.KILOMETRE_PER_HOUR2; }
    static MILE_PER_HOUR2_$LI$() { if (Units.MILE_PER_HOUR2 == null) {
        Units.MILE_PER_HOUR2 = Units.MILE_$LI$() / (Units.HOUR_$LI$() * Units.HOUR_$LI$());
    } return Units.MILE_PER_HOUR2; }
    static DEGREE_ARC_$LI$() { if (Units.DEGREE_ARC == null) {
        Units.DEGREE_ARC = (MathConstants_1.MathConstants.PI / 180.0) * Units.RADIAN_ARC;
    } return Units.DEGREE_ARC; }
    static MINUTE_ARC_$LI$() { if (Units.MINUTE_ARC == null) {
        Units.MINUTE_ARC = Units.DEGREE_ARC_$LI$() / 60.0;
    } return Units.MINUTE_ARC; }
    static SECOND_ARC_$LI$() { if (Units.SECOND_ARC == null) {
        Units.SECOND_ARC = Units.MINUTE_ARC_$LI$() / 60.0;
    } return Units.SECOND_ARC; }
}
exports.Units = Units;
/**
 * Percentage
 */
Units.PERC = 0.01;
/**
 * Promil, Per mille
 */
Units.PROMIL = 0.001;
/**
 * Yotta
 */
Units.YOTTA = 1.0E24;
/**
 * Zetta
 */
Units.ZETTA = 1.0E21;
/**
 * Exa
 */
Units.EXA = 1.0E18;
/**
 * Peta
 */
Units.PETA = 1.0E15;
/**
 * Tera
 */
Units.TERA = 1.0E12;
/**
 * Giga
 */
Units.GIGA = 1.0E9;
/**
 * Mega
 */
Units.MEGA = 1000000.0;
/**
 * Kilo
 */
Units.KILO = 1000.0;
/**
 * Hecto
 */
Units.HECTO = 100.0;
/**
 * Deca
 */
Units.DECA = 10.0;
/**
 * Deci
 */
Units.DECI = 0.1;
/**
 * Centi
 */
Units.CENTI = 0.01;
/**
 * Milli
 */
Units.MILLI = 0.001;
/**
 * Micro
 */
Units.MICRO = 1.0E-6;
/**
 * Nano
 */
Units.NANO = 1.0E-9;
/**
 * Pico
 */
Units.PICO = 1.0E-12;
/**
 * Femto
 */
Units.FEMTO = 1.0E-15;
/**
 * Atto
 */
Units.ATTO = 1.0E-18;
/**
 * Zepto
 */
Units.ZEPTO = 1.0E-21;
/**
 * Yocto
 */
Units.YOCTO = 1.0E-24;
/**
 * Meter
 */
Units.METRE = 1.0;
/**
 * Second
 */
Units.SECOND = 1.0;
/**
 * Kilogram
 */
Units.KILOGRAM = 1.0;
Units.MOLE = 1.0;
/**
 * Coulomb
 */
Units.COULOMB = 1.0;
/**
 * Kelvin
 */
Units.KELVIN = 1.0;
/**
 * Celcius
 */
Units.CELCIUS = 1.0;
/**
 * Farenheight
 */
Units.FARENHEIGHT = 1.8;
/**
 * Bit
 */
Units.BIT = 1.0;
/**
 * Radian (angle)
 */
Units.RADIAN_ARC = 1.0;
Units["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.Units";
//# sourceMappingURL=Units.js.map