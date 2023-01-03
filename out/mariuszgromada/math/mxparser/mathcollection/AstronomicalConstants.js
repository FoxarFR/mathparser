"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstronomicalConstants = void 0;
const PhysicalConstants_1 = require("./PhysicalConstants");
const Units_1 = require("./Units");
/**
 * AstronomicalConstants - class representing the most important astronomical constants.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.0.0
 * @class
 */
class AstronomicalConstants {
    static LIGHT_YEAR_$LI$() { if (AstronomicalConstants.LIGHT_YEAR == null) {
        AstronomicalConstants.LIGHT_YEAR = PhysicalConstants_1.PhysicalConstants.LIGHT_SPEED_$LI$() * Units_1.Units.JULIAN_YEAR_$LI$();
    } return AstronomicalConstants.LIGHT_YEAR; }
    static ASTRONOMICAL_UNIT_$LI$() { if (AstronomicalConstants.ASTRONOMICAL_UNIT == null) {
        AstronomicalConstants.ASTRONOMICAL_UNIT = 1.495978707E11 * Units_1.Units.METRE;
    } return AstronomicalConstants.ASTRONOMICAL_UNIT; }
    static PARSEC_$LI$() { if (AstronomicalConstants.PARSEC == null) {
        AstronomicalConstants.PARSEC = 206264.806247096 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.PARSEC; }
    static KILOPARSEC_$LI$() { if (AstronomicalConstants.KILOPARSEC == null) {
        AstronomicalConstants.KILOPARSEC = Units_1.Units.KILO * AstronomicalConstants.PARSEC_$LI$();
    } return AstronomicalConstants.KILOPARSEC; }
    static EARTH_RADIUS_EQUATORIAL_$LI$() { if (AstronomicalConstants.EARTH_RADIUS_EQUATORIAL == null) {
        AstronomicalConstants.EARTH_RADIUS_EQUATORIAL = 6378.137 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.EARTH_RADIUS_EQUATORIAL; }
    static EARTH_RADIUS_POLAR_$LI$() { if (AstronomicalConstants.EARTH_RADIUS_POLAR == null) {
        AstronomicalConstants.EARTH_RADIUS_POLAR = 6356.7523 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.EARTH_RADIUS_POLAR; }
    static EARTH_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.EARTH_RADIUS_MEAN == null) {
        AstronomicalConstants.EARTH_RADIUS_MEAN = 6371.0088 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.EARTH_RADIUS_MEAN; }
    static EARTH_MASS_$LI$() { if (AstronomicalConstants.EARTH_MASS == null) {
        AstronomicalConstants.EARTH_MASS = 5.9722 * Units_1.Units.YOTTA * Units_1.Units.KILOGRAM;
    } return AstronomicalConstants.EARTH_MASS; }
    static EARTH_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.EARTH_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.EARTH_SEMI_MAJOR_AXIS = 1.000001018 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.EARTH_SEMI_MAJOR_AXIS; }
    static MOON_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.MOON_RADIUS_MEAN == null) {
        AstronomicalConstants.MOON_RADIUS_MEAN = 1737.1 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.MOON_RADIUS_MEAN; }
    static MOON_MASS_$LI$() { if (AstronomicalConstants.MOON_MASS == null) {
        AstronomicalConstants.MOON_MASS = 0.012300037 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.MOON_MASS; }
    static MONN_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.MONN_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.MONN_SEMI_MAJOR_AXIS = 384399 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.MONN_SEMI_MAJOR_AXIS; }
    static SOLAR_RADIUS_$LI$() { if (AstronomicalConstants.SOLAR_RADIUS == null) {
        AstronomicalConstants.SOLAR_RADIUS = 695700 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.SOLAR_RADIUS; }
    static SOLAR_MASS_$LI$() { if (AstronomicalConstants.SOLAR_MASS == null) {
        AstronomicalConstants.SOLAR_MASS = 332946.0487 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.SOLAR_MASS; }
    static MERCURY_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.MERCURY_RADIUS_MEAN == null) {
        AstronomicalConstants.MERCURY_RADIUS_MEAN = 2439.7 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.MERCURY_RADIUS_MEAN; }
    static MERCURY_MASS_$LI$() { if (AstronomicalConstants.MERCURY_MASS == null) {
        AstronomicalConstants.MERCURY_MASS = 0.0553 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.MERCURY_MASS; }
    static MERCURY_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.MERCURY_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.MERCURY_SEMI_MAJOR_AXIS = 0.387098 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.MERCURY_SEMI_MAJOR_AXIS; }
    static VENUS_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.VENUS_RADIUS_MEAN == null) {
        AstronomicalConstants.VENUS_RADIUS_MEAN = 6051.8 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.VENUS_RADIUS_MEAN; }
    static VENUS_MASS_$LI$() { if (AstronomicalConstants.VENUS_MASS == null) {
        AstronomicalConstants.VENUS_MASS = 0.815 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.VENUS_MASS; }
    static VENUS_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.VENUS_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.VENUS_SEMI_MAJOR_AXIS = 0.723332 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.VENUS_SEMI_MAJOR_AXIS; }
    static MARS_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.MARS_RADIUS_MEAN == null) {
        AstronomicalConstants.MARS_RADIUS_MEAN = 3389.5 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.MARS_RADIUS_MEAN; }
    static MARS_MASS_$LI$() { if (AstronomicalConstants.MARS_MASS == null) {
        AstronomicalConstants.MARS_MASS = 0.107 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.MARS_MASS; }
    static MARS_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.MARS_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.MARS_SEMI_MAJOR_AXIS = 1.523679 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.MARS_SEMI_MAJOR_AXIS; }
    static JUPITER_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.JUPITER_RADIUS_MEAN == null) {
        AstronomicalConstants.JUPITER_RADIUS_MEAN = 69911 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.JUPITER_RADIUS_MEAN; }
    static JUPITER_MASS_$LI$() { if (AstronomicalConstants.JUPITER_MASS == null) {
        AstronomicalConstants.JUPITER_MASS = 317.8 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.JUPITER_MASS; }
    static JUPITER_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.JUPITER_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.JUPITER_SEMI_MAJOR_AXIS = 5.2026 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.JUPITER_SEMI_MAJOR_AXIS; }
    static SATURN_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.SATURN_RADIUS_MEAN == null) {
        AstronomicalConstants.SATURN_RADIUS_MEAN = 58232 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.SATURN_RADIUS_MEAN; }
    static SATURN_MASS_$LI$() { if (AstronomicalConstants.SATURN_MASS == null) {
        AstronomicalConstants.SATURN_MASS = 95.159 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.SATURN_MASS; }
    static SATURN_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.SATURN_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.SATURN_SEMI_MAJOR_AXIS = 9.5549 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.SATURN_SEMI_MAJOR_AXIS; }
    static URANUS_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.URANUS_RADIUS_MEAN == null) {
        AstronomicalConstants.URANUS_RADIUS_MEAN = 25362 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.URANUS_RADIUS_MEAN; }
    static URANUS_MASS_$LI$() { if (AstronomicalConstants.URANUS_MASS == null) {
        AstronomicalConstants.URANUS_MASS = 14.536 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.URANUS_MASS; }
    static URANUS_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.URANUS_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.URANUS_SEMI_MAJOR_AXIS = 19.2184 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.URANUS_SEMI_MAJOR_AXIS; }
    static NEPTUNE_RADIUS_MEAN_$LI$() { if (AstronomicalConstants.NEPTUNE_RADIUS_MEAN == null) {
        AstronomicalConstants.NEPTUNE_RADIUS_MEAN = 24622 * Units_1.Units.KILOMETRE_$LI$();
    } return AstronomicalConstants.NEPTUNE_RADIUS_MEAN; }
    static NEPTUNE_MASS_$LI$() { if (AstronomicalConstants.NEPTUNE_MASS == null) {
        AstronomicalConstants.NEPTUNE_MASS = 17.147 * AstronomicalConstants.EARTH_MASS_$LI$();
    } return AstronomicalConstants.NEPTUNE_MASS; }
    static NEPTUNE_SEMI_MAJOR_AXIS_$LI$() { if (AstronomicalConstants.NEPTUNE_SEMI_MAJOR_AXIS == null) {
        AstronomicalConstants.NEPTUNE_SEMI_MAJOR_AXIS = 30.110387 * AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
    } return AstronomicalConstants.NEPTUNE_SEMI_MAJOR_AXIS; }
}
exports.AstronomicalConstants = AstronomicalConstants;
AstronomicalConstants["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.AstronomicalConstants";
//# sourceMappingURL=AstronomicalConstants.js.map