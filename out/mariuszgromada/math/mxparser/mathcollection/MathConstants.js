"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathConstants = void 0;
const MathFunctions_1 = require("./MathFunctions");
const j4ts_1 = require("j4ts/j4ts");
/**
 * MathConstants - class representing the most important math constants.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.4
 * @class
 */
class MathConstants {
    static PIBY2_$LI$() { if (MathConstants.PIBY2 == null) {
        MathConstants.PIBY2 = MathConstants.PI / 2.0;
    } return MathConstants.PIBY2; }
    static SQRT2_$LI$() { if (MathConstants.SQRT2 == null) {
        MathConstants.SQRT2 = Math.sqrt(2.0);
    } return MathConstants.SQRT2; }
    static LNPI_$LI$() { if (MathConstants.LNPI == null) {
        MathConstants.LNPI = MathFunctions_1.MathFunctions.ln(MathConstants.PI);
    } return MathConstants.LNPI; }
    static EXP_MINUS_E_$LI$() { if (MathConstants.EXP_MINUS_E == null) {
        MathConstants.EXP_MINUS_E = Math.pow(MathConstants.E, -MathConstants.E);
    } return MathConstants.EXP_MINUS_E; }
    static EXP_1_OVER_E_$LI$() { if (MathConstants.EXP_1_OVER_E == null) {
        MathConstants.EXP_1_OVER_E = Math.pow(MathConstants.E, 1.0 / MathConstants.E);
    } return MathConstants.EXP_1_OVER_E; }
    static EXP_MINUS_1_$LI$() { if (MathConstants.EXP_MINUS_1 == null) {
        MathConstants.EXP_MINUS_1 = 1.0 / Math.E;
    } return MathConstants.EXP_MINUS_1; }
    static LN_SQRT2_$LI$() { if (MathConstants.LN_SQRT2 == null) {
        MathConstants.LN_SQRT2 = MathFunctions_1.MathFunctions.ln(MathConstants.SQRT2_$LI$());
    } return MathConstants.LN_SQRT2; }
    static SQRT2BY2_$LI$() { if (MathConstants.SQRT2BY2 == null) {
        MathConstants.SQRT2BY2 = MathConstants.SQRT2_$LI$() / 2.0;
    } return MathConstants.SQRT2BY2; }
    static SQRT3_$LI$() { if (MathConstants.SQRT3 == null) {
        MathConstants.SQRT3 = Math.sqrt(3.0);
    } return MathConstants.SQRT3; }
    static SQRT3BY2_$LI$() { if (MathConstants.SQRT3BY2 == null) {
        MathConstants.SQRT3BY2 = MathConstants.SQRT3_$LI$() / 2.0;
    } return MathConstants.SQRT3BY2; }
    static D2BYSQRT3_$LI$() { if (MathConstants.D2BYSQRT3 == null) {
        MathConstants.D2BYSQRT3 = 2.0 / MathConstants.SQRT3_$LI$();
    } return MathConstants.D2BYSQRT3; }
    static SQRT3BY3_$LI$() { if (MathConstants.SQRT3BY3 == null) {
        MathConstants.SQRT3BY3 = MathConstants.SQRT3_$LI$() / 3.0;
    } return MathConstants.SQRT3BY3; }
    static NOT_A_NUMBER_$LI$() { if (MathConstants.NOT_A_NUMBER == null) {
        MathConstants.NOT_A_NUMBER = j4ts_1.javaemul.internal.DoubleHelper.NaN;
    } return MathConstants.NOT_A_NUMBER; }
}
exports.MathConstants = MathConstants;
/**
 * Pi, Archimedes' constant or Ludolph's number
 */
MathConstants.PI = 3.141592653589793;
/**
 * Napier's constant, or Euler's number, base of Natural logarithm
 */
MathConstants.E = 2.718281828459045;
/**
 * Euler-Mascheroni constant
 */
MathConstants.EULER_MASCHERONI = 0.5772156649015329;
/**
 * Golden ratio
 */
MathConstants.GOLDEN_RATIO = 1.618033988749895;
/**
 * Plastic constant
 */
MathConstants.PLASTIC = 1.324717957244746;
/**
 * Embree-Trefethen constant
 */
MathConstants.EMBREE_TREFETHEN = 0.70258;
/**
 * Feigenbaum constant
 */
MathConstants.FEIGENBAUM_DELTA = 4.66920160910299;
/**
 * Feigenbaum constant
 */
MathConstants.FEIGENBAUM_ALFA = 2.5029078750958926;
/**
 * Feigenbaum constant
 */
MathConstants.TWIN_PRIME = 0.6601618158468696;
/**
 * Meissel-Mertens constant
 */
MathConstants.MEISSEL_MERTEENS = 0.26149721284764277;
/**
 * Brun's constant for twin primes
 */
MathConstants.BRAUN_TWIN_PRIME = 1.9021605823;
/**
 * Brun's constant for prime quadruplets
 */
MathConstants.BRAUN_PRIME_QUADR = 0.87058838;
/**
 * de Bruijn-Newman constant
 */
MathConstants.BRUIJN_NEWMAN = -2.7E-9;
/**
 * Catalan's constant
 */
MathConstants.CATALAN = 0.915965594177219;
/**
 * Landau-Ramanujan constant
 */
MathConstants.LANDAU_RAMANUJAN = 0.7642236535892206;
/**
 * Viswanath's constant
 */
MathConstants.VISWANATH = 1.13198824;
/**
 * Legendre's constant
 */
MathConstants.LEGENDRE = 1.0;
/**
 * Ramanujan-Soldner constant
 */
MathConstants.RAMANUJAN_SOLDNER = 1.451369234883381;
/**
 * Erdos-Borwein constant
 */
MathConstants.ERDOS_BORWEIN = 1.6066951524152917;
/**
 * Bernstein's constant
 */
MathConstants.BERNSTEIN = 0.2801694990238691;
/**
 * Gauss-Kuzmin-Wirsing constant
 */
MathConstants.GAUSS_KUZMIN_WIRSING = 0.30366300289873266;
/**
 * Hafner-Sarnak-McCurley constant
 */
MathConstants.HAFNER_SARNAK_MCCURLEY = 0.353236371854996;
/**
 * Golomb-Dickman constant
 */
MathConstants.GOLOMB_DICKMAN = 0.6243299885435508;
/**
 * Cahen's constant
 */
MathConstants.CAHEN = 0.6434105463;
/**
 * Laplace limit
 */
MathConstants.LAPLACE_LIMIT = 0.6627434193491816;
/**
 * Alladi-Grinstead constant
 */
MathConstants.ALLADI_GRINSTEAD = 0.8093940205;
/**
 * Lengyel's constant
 */
MathConstants.LENGYEL = 1.0986858055;
/**
 * Levy's constant
 */
MathConstants.LEVY = 3.2758229187218113;
/**
 * Apery's constant
 */
MathConstants.APERY = 1.2020569031595942;
/**
 * Mills' constant
 */
MathConstants.MILLS = 1.3063778838630806;
/**
 * Backhouse's constant
 */
MathConstants.BACKHOUSE = 1.4560749485826896;
/**
 * Porter's constant
 */
MathConstants.PORTER = 1.4670780794;
/**
 * Porter's constant
 */
MathConstants.LIEB_QUARE_ICE = 1.5396007178;
/**
 * Niven's constant
 */
MathConstants.NIVEN = 1.7052111401053678;
/**
 * Sierpiński's constant
 */
MathConstants.SIERPINSKI = 2.5849817595792532;
/**
 * Khinchin's constant
 */
MathConstants.KHINCHIN = 2.6854520010653062;
/**
 * Fransén-Robinson constant
 */
MathConstants.FRANSEN_ROBINSON = 2.8077702420285195;
/**
 * Landau's constant
 */
MathConstants.LANDAU = 0.5;
/**
 * Parabolic constant
 */
MathConstants.PARABOLIC = 2.295587149392638;
/**
 * Omega constant
 */
MathConstants.OMEGA = 0.5671432904097838;
/**
 * MRB constant
 */
MathConstants.MRB = 0.187859;
/**
 * A069284 - Logarithmic integral function li(2)
 */
MathConstants.LI2 = 1.045163780117493;
/**
 * Gompertz Constant OEIS A073003
 */
MathConstants.GOMPERTZ = 0.5963473623231941;
/**
 * Square root of pi
 */
MathConstants.SQRTPi = 1.772453850905516;
/**
 * Square root of 2*pi
 */
MathConstants.SQRT2Pi = 2.5066282746310007;
MathConstants["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.MathConstants";
//# sourceMappingURL=MathConstants.js.map