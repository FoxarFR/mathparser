"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalConstants = void 0;
const Units_1 = require("./Units");
const MathConstants_1 = require("./MathConstants");
/**
 * PhysicalConstants - class representing the most important physical constants.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class PhysicalConstants {
    static LIGHT_SPEED_$LI$() { if (PhysicalConstants.LIGHT_SPEED == null) {
        PhysicalConstants.LIGHT_SPEED = 2.99792458E8 * Units_1.Units.METRE_PER_SECOND_$LI$();
    } return PhysicalConstants.LIGHT_SPEED; }
    static GRAVITATIONAL_CONSTANT_$LI$() { if (PhysicalConstants.GRAVITATIONAL_CONSTANT == null) {
        PhysicalConstants.GRAVITATIONAL_CONSTANT = 6.67408E-11 * Units_1.Units.METRE3_$LI$() * (1.0 / Units_1.Units.KILOGRAM) * (1.0 / (Units_1.Units.SECOND * Units_1.Units.SECOND));
    } return PhysicalConstants.GRAVITATIONAL_CONSTANT; }
    static GRAVIT_ACC_EARTH_$LI$() { if (PhysicalConstants.GRAVIT_ACC_EARTH == null) {
        PhysicalConstants.GRAVIT_ACC_EARTH = 9.80665 * Units_1.Units.METRE_PER_SECOND2_$LI$();
    } return PhysicalConstants.GRAVIT_ACC_EARTH; }
    static PLANCK_CONSTANT_$LI$() { if (PhysicalConstants.PLANCK_CONSTANT == null) {
        PhysicalConstants.PLANCK_CONSTANT = 6.62607004E-34 * Units_1.Units.METRE2_$LI$() * Units_1.Units.KILOGRAM / Units_1.Units.SECOND;
    } return PhysicalConstants.PLANCK_CONSTANT; }
    static PLANCK_CONSTANT_REDUCED_$LI$() { if (PhysicalConstants.PLANCK_CONSTANT_REDUCED == null) {
        PhysicalConstants.PLANCK_CONSTANT_REDUCED = PhysicalConstants.PLANCK_CONSTANT_$LI$() / (2 * MathConstants_1.MathConstants.PI);
    } return PhysicalConstants.PLANCK_CONSTANT_REDUCED; }
    static PLANCK_LENGTH_$LI$() { if (PhysicalConstants.PLANCK_LENGTH == null) {
        PhysicalConstants.PLANCK_LENGTH = 1.616229E-35 * Units_1.Units.METRE;
    } return PhysicalConstants.PLANCK_LENGTH; }
    static PLANCK_MASS_$LI$() { if (PhysicalConstants.PLANCK_MASS == null) {
        PhysicalConstants.PLANCK_MASS = 2.17647E-8 * Units_1.Units.KILOGRAM;
    } return PhysicalConstants.PLANCK_MASS; }
    static PLANCK_TIME_$LI$() { if (PhysicalConstants.PLANCK_TIME == null) {
        PhysicalConstants.PLANCK_TIME = 5.39116E-44 * Units_1.Units.SECOND;
    } return PhysicalConstants.PLANCK_TIME; }
    static N_A_$LI$() { if (PhysicalConstants.N_A == null) {
        PhysicalConstants.N_A = 6.022140857E23 / Units_1.Units.MOLE;
    } return PhysicalConstants.N_A; }
    static R_$LI$() { if (PhysicalConstants.R == null) {
        PhysicalConstants.R = 8.3144598 * Units_1.Units.JOULE_$LI$() / (Units_1.Units.KELVIN * Units_1.Units.MOLE);
    } return PhysicalConstants.R; }
    static BOLTZMANN_CONSTANT_$LI$() { if (PhysicalConstants.BOLTZMANN_CONSTANT == null) {
        PhysicalConstants.BOLTZMANN_CONSTANT = PhysicalConstants.R_$LI$() / PhysicalConstants.N_A_$LI$();
    } return PhysicalConstants.BOLTZMANN_CONSTANT; }
    static NEUTRON_REST_MASS_$LI$() { if (PhysicalConstants.NEUTRON_REST_MASS == null) {
        PhysicalConstants.NEUTRON_REST_MASS = 1.674927471E-27 * Units_1.Units.KILOGRAM;
    } return PhysicalConstants.NEUTRON_REST_MASS; }
    static NEUTRON_EQUIVALENT_REST_MASS_$LI$() { if (PhysicalConstants.NEUTRON_EQUIVALENT_REST_MASS == null) {
        PhysicalConstants.NEUTRON_EQUIVALENT_REST_MASS = 939.5654133 * Units_1.Units.MEGA_ELECTRONO_VOLT_$LI$() / (PhysicalConstants.LIGHT_SPEED_$LI$() * PhysicalConstants.LIGHT_SPEED_$LI$());
    } return PhysicalConstants.NEUTRON_EQUIVALENT_REST_MASS; }
    static PROTON_REST_MASS_$LI$() { if (PhysicalConstants.PROTON_REST_MASS == null) {
        PhysicalConstants.PROTON_REST_MASS = 1.672621898E-27 * Units_1.Units.KILOGRAM;
    } return PhysicalConstants.PROTON_REST_MASS; }
    static PROTON_EQUIVALENT_REST_MASS_$LI$() { if (PhysicalConstants.PROTON_EQUIVALENT_REST_MASS == null) {
        PhysicalConstants.PROTON_EQUIVALENT_REST_MASS = 938.2720813 * Units_1.Units.MEGA_ELECTRONO_VOLT_$LI$() / (PhysicalConstants.LIGHT_SPEED_$LI$() * PhysicalConstants.LIGHT_SPEED_$LI$());
    } return PhysicalConstants.PROTON_EQUIVALENT_REST_MASS; }
    static ELEMENTARY_CHARGE_$LI$() { if (PhysicalConstants.ELEMENTARY_CHARGE == null) {
        PhysicalConstants.ELEMENTARY_CHARGE = 1.6021766208E-19 * Units_1.Units.COULOMB;
    } return PhysicalConstants.ELEMENTARY_CHARGE; }
    static ELECTRON_REST_MASS_$LI$() { if (PhysicalConstants.ELECTRON_REST_MASS == null) {
        PhysicalConstants.ELECTRON_REST_MASS = 9.10938356E-31 * Units_1.Units.KILOGRAM;
    } return PhysicalConstants.ELECTRON_REST_MASS; }
    static ELECTRON_EQUIVALENT_REST_MASS_$LI$() { if (PhysicalConstants.ELECTRON_EQUIVALENT_REST_MASS == null) {
        PhysicalConstants.ELECTRON_EQUIVALENT_REST_MASS = 0.5109989461 * Units_1.Units.MEGA_ELECTRONO_VOLT_$LI$() / (PhysicalConstants.LIGHT_SPEED_$LI$() * PhysicalConstants.LIGHT_SPEED_$LI$());
    } return PhysicalConstants.ELECTRON_EQUIVALENT_REST_MASS; }
    static VACUUM_PERMITTIVITY_$LI$() { if (PhysicalConstants.VACUUM_PERMITTIVITY == null) {
        PhysicalConstants.VACUUM_PERMITTIVITY = 8.854187817E-12 * Units_1.Units.AMPERE_$LI$() * Units_1.Units.AMPERE_$LI$() * Units_1.Units.SECOND * Units_1.Units.SECOND * Units_1.Units.SECOND * Units_1.Units.SECOND / (Units_1.Units.METRE3_$LI$() * Units_1.Units.KILOGRAM);
    } return PhysicalConstants.VACUUM_PERMITTIVITY; }
    static VACUUM_PERMEABILITY_$LI$() { if (PhysicalConstants.VACUUM_PERMEABILITY == null) {
        PhysicalConstants.VACUUM_PERMEABILITY = 4.0E-7 * Math.PI * Units_1.Units.KILOGRAM * Units_1.Units.METRE / (Units_1.Units.SECOND * Units_1.Units.SECOND * Units_1.Units.AMPERE_$LI$() * Units_1.Units.AMPERE_$LI$());
    } return PhysicalConstants.VACUUM_PERMEABILITY; }
}
exports.PhysicalConstants = PhysicalConstants;
PhysicalConstants["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.PhysicalConstants";
//# sourceMappingURL=PhysicalConstants.js.map