"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantValue = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
/**
 * Constant Values - mXparserConstants tokens definition.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.2.0
 * @class
 */
class ConstantValue {
    static PI_SYN_$LI$() { if (ConstantValue.PI_SYN == null) {
        ConstantValue.PI_SYN = ConstantValue.PI_STR;
    } return ConstantValue.PI_SYN; }
    static EULER_SYN_$LI$() { if (ConstantValue.EULER_SYN == null) {
        ConstantValue.EULER_SYN = ConstantValue.EULER_STR;
    } return ConstantValue.EULER_SYN; }
    static EULER_MASCHERONI_SYN_$LI$() { if (ConstantValue.EULER_MASCHERONI_SYN == null) {
        ConstantValue.EULER_MASCHERONI_SYN = ConstantValue.EULER_MASCHERONI_STR;
    } return ConstantValue.EULER_MASCHERONI_SYN; }
    static GOLDEN_RATIO_SYN_$LI$() { if (ConstantValue.GOLDEN_RATIO_SYN == null) {
        ConstantValue.GOLDEN_RATIO_SYN = ConstantValue.GOLDEN_RATIO_STR;
    } return ConstantValue.GOLDEN_RATIO_SYN; }
    static PLASTIC_SYN_$LI$() { if (ConstantValue.PLASTIC_SYN == null) {
        ConstantValue.PLASTIC_SYN = ConstantValue.PLASTIC_STR;
    } return ConstantValue.PLASTIC_SYN; }
    static EMBREE_TREFETHEN_SYN_$LI$() { if (ConstantValue.EMBREE_TREFETHEN_SYN == null) {
        ConstantValue.EMBREE_TREFETHEN_SYN = ConstantValue.EMBREE_TREFETHEN_STR;
    } return ConstantValue.EMBREE_TREFETHEN_SYN; }
    static FEIGENBAUM_DELTA_SYN_$LI$() { if (ConstantValue.FEIGENBAUM_DELTA_SYN == null) {
        ConstantValue.FEIGENBAUM_DELTA_SYN = ConstantValue.FEIGENBAUM_DELTA_STR;
    } return ConstantValue.FEIGENBAUM_DELTA_SYN; }
    static FEIGENBAUM_ALFA_SYN_$LI$() { if (ConstantValue.FEIGENBAUM_ALFA_SYN == null) {
        ConstantValue.FEIGENBAUM_ALFA_SYN = ConstantValue.FEIGENBAUM_ALFA_STR;
    } return ConstantValue.FEIGENBAUM_ALFA_SYN; }
    static TWIN_PRIME_SYN_$LI$() { if (ConstantValue.TWIN_PRIME_SYN == null) {
        ConstantValue.TWIN_PRIME_SYN = ConstantValue.TWIN_PRIME_STR;
    } return ConstantValue.TWIN_PRIME_SYN; }
    static MEISSEL_MERTEENS_SYN_$LI$() { if (ConstantValue.MEISSEL_MERTEENS_SYN == null) {
        ConstantValue.MEISSEL_MERTEENS_SYN = ConstantValue.MEISSEL_MERTEENS_STR;
    } return ConstantValue.MEISSEL_MERTEENS_SYN; }
    static BRAUN_TWIN_PRIME_SYN_$LI$() { if (ConstantValue.BRAUN_TWIN_PRIME_SYN == null) {
        ConstantValue.BRAUN_TWIN_PRIME_SYN = ConstantValue.BRAUN_TWIN_PRIME_STR;
    } return ConstantValue.BRAUN_TWIN_PRIME_SYN; }
    static BRAUN_PRIME_QUADR_SYN_$LI$() { if (ConstantValue.BRAUN_PRIME_QUADR_SYN == null) {
        ConstantValue.BRAUN_PRIME_QUADR_SYN = ConstantValue.BRAUN_PRIME_QUADR_STR;
    } return ConstantValue.BRAUN_PRIME_QUADR_SYN; }
    static BRUIJN_NEWMAN_SYN_$LI$() { if (ConstantValue.BRUIJN_NEWMAN_SYN == null) {
        ConstantValue.BRUIJN_NEWMAN_SYN = ConstantValue.BRUIJN_NEWMAN_STR;
    } return ConstantValue.BRUIJN_NEWMAN_SYN; }
    static CATALAN_SYN_$LI$() { if (ConstantValue.CATALAN_SYN == null) {
        ConstantValue.CATALAN_SYN = ConstantValue.CATALAN_STR;
    } return ConstantValue.CATALAN_SYN; }
    static LANDAU_RAMANUJAN_SYN_$LI$() { if (ConstantValue.LANDAU_RAMANUJAN_SYN == null) {
        ConstantValue.LANDAU_RAMANUJAN_SYN = ConstantValue.LANDAU_RAMANUJAN_STR;
    } return ConstantValue.LANDAU_RAMANUJAN_SYN; }
    static VISWANATH_SYN_$LI$() { if (ConstantValue.VISWANATH_SYN == null) {
        ConstantValue.VISWANATH_SYN = ConstantValue.VISWANATH_STR;
    } return ConstantValue.VISWANATH_SYN; }
    static LEGENDRE_SYN_$LI$() { if (ConstantValue.LEGENDRE_SYN == null) {
        ConstantValue.LEGENDRE_SYN = ConstantValue.LEGENDRE_STR;
    } return ConstantValue.LEGENDRE_SYN; }
    static RAMANUJAN_SOLDNER_SYN_$LI$() { if (ConstantValue.RAMANUJAN_SOLDNER_SYN == null) {
        ConstantValue.RAMANUJAN_SOLDNER_SYN = ConstantValue.RAMANUJAN_SOLDNER_STR;
    } return ConstantValue.RAMANUJAN_SOLDNER_SYN; }
    static ERDOS_BORWEIN_SYN_$LI$() { if (ConstantValue.ERDOS_BORWEIN_SYN == null) {
        ConstantValue.ERDOS_BORWEIN_SYN = ConstantValue.ERDOS_BORWEIN_STR;
    } return ConstantValue.ERDOS_BORWEIN_SYN; }
    static BERNSTEIN_SYN_$LI$() { if (ConstantValue.BERNSTEIN_SYN == null) {
        ConstantValue.BERNSTEIN_SYN = ConstantValue.BERNSTEIN_STR;
    } return ConstantValue.BERNSTEIN_SYN; }
    static GAUSS_KUZMIN_WIRSING_SYN_$LI$() { if (ConstantValue.GAUSS_KUZMIN_WIRSING_SYN == null) {
        ConstantValue.GAUSS_KUZMIN_WIRSING_SYN = ConstantValue.GAUSS_KUZMIN_WIRSING_STR;
    } return ConstantValue.GAUSS_KUZMIN_WIRSING_SYN; }
    static HAFNER_SARNAK_MCCURLEY_SYN_$LI$() { if (ConstantValue.HAFNER_SARNAK_MCCURLEY_SYN == null) {
        ConstantValue.HAFNER_SARNAK_MCCURLEY_SYN = ConstantValue.HAFNER_SARNAK_MCCURLEY_STR;
    } return ConstantValue.HAFNER_SARNAK_MCCURLEY_SYN; }
    static GOLOMB_DICKMAN_SYN_$LI$() { if (ConstantValue.GOLOMB_DICKMAN_SYN == null) {
        ConstantValue.GOLOMB_DICKMAN_SYN = ConstantValue.GOLOMB_DICKMAN_STR;
    } return ConstantValue.GOLOMB_DICKMAN_SYN; }
    static CAHEN_SYN_$LI$() { if (ConstantValue.CAHEN_SYN == null) {
        ConstantValue.CAHEN_SYN = ConstantValue.CAHEN_STR;
    } return ConstantValue.CAHEN_SYN; }
    static LAPLACE_LIMIT_SYN_$LI$() { if (ConstantValue.LAPLACE_LIMIT_SYN == null) {
        ConstantValue.LAPLACE_LIMIT_SYN = ConstantValue.LAPLACE_LIMIT_STR;
    } return ConstantValue.LAPLACE_LIMIT_SYN; }
    static ALLADI_GRINSTEAD_SYN_$LI$() { if (ConstantValue.ALLADI_GRINSTEAD_SYN == null) {
        ConstantValue.ALLADI_GRINSTEAD_SYN = ConstantValue.ALLADI_GRINSTEAD_STR;
    } return ConstantValue.ALLADI_GRINSTEAD_SYN; }
    static LENGYEL_SYN_$LI$() { if (ConstantValue.LENGYEL_SYN == null) {
        ConstantValue.LENGYEL_SYN = ConstantValue.LENGYEL_STR;
    } return ConstantValue.LENGYEL_SYN; }
    static LEVY_SYN_$LI$() { if (ConstantValue.LEVY_SYN == null) {
        ConstantValue.LEVY_SYN = ConstantValue.LEVY_STR;
    } return ConstantValue.LEVY_SYN; }
    static APERY_SYN_$LI$() { if (ConstantValue.APERY_SYN == null) {
        ConstantValue.APERY_SYN = ConstantValue.APERY_STR;
    } return ConstantValue.APERY_SYN; }
    static MILLS_SYN_$LI$() { if (ConstantValue.MILLS_SYN == null) {
        ConstantValue.MILLS_SYN = ConstantValue.MILLS_STR;
    } return ConstantValue.MILLS_SYN; }
    static BACKHOUSE_SYN_$LI$() { if (ConstantValue.BACKHOUSE_SYN == null) {
        ConstantValue.BACKHOUSE_SYN = ConstantValue.BACKHOUSE_STR;
    } return ConstantValue.BACKHOUSE_SYN; }
    static PORTER_SYN_$LI$() { if (ConstantValue.PORTER_SYN == null) {
        ConstantValue.PORTER_SYN = ConstantValue.PORTER_STR;
    } return ConstantValue.PORTER_SYN; }
    static LIEB_QUARE_ICE_SYN_$LI$() { if (ConstantValue.LIEB_QUARE_ICE_SYN == null) {
        ConstantValue.LIEB_QUARE_ICE_SYN = ConstantValue.LIEB_QUARE_ICE_STR;
    } return ConstantValue.LIEB_QUARE_ICE_SYN; }
    static NIVEN_SYN_$LI$() { if (ConstantValue.NIVEN_SYN == null) {
        ConstantValue.NIVEN_SYN = ConstantValue.NIVEN_STR;
    } return ConstantValue.NIVEN_SYN; }
    static SIERPINSKI_SYN_$LI$() { if (ConstantValue.SIERPINSKI_SYN == null) {
        ConstantValue.SIERPINSKI_SYN = ConstantValue.SIERPINSKI_STR;
    } return ConstantValue.SIERPINSKI_SYN; }
    static KHINCHIN_SYN_$LI$() { if (ConstantValue.KHINCHIN_SYN == null) {
        ConstantValue.KHINCHIN_SYN = ConstantValue.KHINCHIN_STR;
    } return ConstantValue.KHINCHIN_SYN; }
    static FRANSEN_ROBINSON_SYN_$LI$() { if (ConstantValue.FRANSEN_ROBINSON_SYN == null) {
        ConstantValue.FRANSEN_ROBINSON_SYN = ConstantValue.FRANSEN_ROBINSON_STR;
    } return ConstantValue.FRANSEN_ROBINSON_SYN; }
    static LANDAU_SYN_$LI$() { if (ConstantValue.LANDAU_SYN == null) {
        ConstantValue.LANDAU_SYN = ConstantValue.LANDAU_STR;
    } return ConstantValue.LANDAU_SYN; }
    static PARABOLIC_SYN_$LI$() { if (ConstantValue.PARABOLIC_SYN == null) {
        ConstantValue.PARABOLIC_SYN = ConstantValue.PARABOLIC_STR;
    } return ConstantValue.PARABOLIC_SYN; }
    static OMEGA_SYN_$LI$() { if (ConstantValue.OMEGA_SYN == null) {
        ConstantValue.OMEGA_SYN = ConstantValue.OMEGA_STR;
    } return ConstantValue.OMEGA_SYN; }
    static MRB_SYN_$LI$() { if (ConstantValue.MRB_SYN == null) {
        ConstantValue.MRB_SYN = ConstantValue.MRB_STR;
    } return ConstantValue.MRB_SYN; }
    static LI2_SYN_$LI$() { if (ConstantValue.LI2_SYN == null) {
        ConstantValue.LI2_SYN = ConstantValue.LI2_STR;
    } return ConstantValue.LI2_SYN; }
    static GOMPERTZ_SYN_$LI$() { if (ConstantValue.GOMPERTZ_SYN == null) {
        ConstantValue.GOMPERTZ_SYN = ConstantValue.GOMPERTZ_STR;
    } return ConstantValue.GOMPERTZ_SYN; }
    static LIGHT_SPEED_SYN_$LI$() { if (ConstantValue.LIGHT_SPEED_SYN == null) {
        ConstantValue.LIGHT_SPEED_SYN = ConstantValue.LIGHT_SPEED_STR;
    } return ConstantValue.LIGHT_SPEED_SYN; }
    static GRAVITATIONAL_CONSTANT_SYN_$LI$() { if (ConstantValue.GRAVITATIONAL_CONSTANT_SYN == null) {
        ConstantValue.GRAVITATIONAL_CONSTANT_SYN = ConstantValue.GRAVITATIONAL_CONSTANT_STR;
    } return ConstantValue.GRAVITATIONAL_CONSTANT_SYN; }
    static GRAVIT_ACC_EARTH_SYN_$LI$() { if (ConstantValue.GRAVIT_ACC_EARTH_SYN == null) {
        ConstantValue.GRAVIT_ACC_EARTH_SYN = ConstantValue.GRAVIT_ACC_EARTH_STR;
    } return ConstantValue.GRAVIT_ACC_EARTH_SYN; }
    static PLANCK_CONSTANT_SYN_$LI$() { if (ConstantValue.PLANCK_CONSTANT_SYN == null) {
        ConstantValue.PLANCK_CONSTANT_SYN = ConstantValue.PLANCK_CONSTANT_STR;
    } return ConstantValue.PLANCK_CONSTANT_SYN; }
    static PLANCK_CONSTANT_REDUCED_SYN_$LI$() { if (ConstantValue.PLANCK_CONSTANT_REDUCED_SYN == null) {
        ConstantValue.PLANCK_CONSTANT_REDUCED_SYN = ConstantValue.PLANCK_CONSTANT_REDUCED_STR;
    } return ConstantValue.PLANCK_CONSTANT_REDUCED_SYN; }
    static PLANCK_LENGTH_SYN_$LI$() { if (ConstantValue.PLANCK_LENGTH_SYN == null) {
        ConstantValue.PLANCK_LENGTH_SYN = ConstantValue.PLANCK_LENGTH_STR;
    } return ConstantValue.PLANCK_LENGTH_SYN; }
    static PLANCK_MASS_SYN_$LI$() { if (ConstantValue.PLANCK_MASS_SYN == null) {
        ConstantValue.PLANCK_MASS_SYN = ConstantValue.PLANCK_MASS_STR;
    } return ConstantValue.PLANCK_MASS_SYN; }
    static PLANCK_TIME_SYN_$LI$() { if (ConstantValue.PLANCK_TIME_SYN == null) {
        ConstantValue.PLANCK_TIME_SYN = ConstantValue.PLANCK_TIME_STR;
    } return ConstantValue.PLANCK_TIME_SYN; }
    static LIGHT_YEAR_SYN_$LI$() { if (ConstantValue.LIGHT_YEAR_SYN == null) {
        ConstantValue.LIGHT_YEAR_SYN = ConstantValue.LIGHT_YEAR_STR;
    } return ConstantValue.LIGHT_YEAR_SYN; }
    static ASTRONOMICAL_UNIT_SYN_$LI$() { if (ConstantValue.ASTRONOMICAL_UNIT_SYN == null) {
        ConstantValue.ASTRONOMICAL_UNIT_SYN = ConstantValue.ASTRONOMICAL_UNIT_STR;
    } return ConstantValue.ASTRONOMICAL_UNIT_SYN; }
    static PARSEC_SYN_$LI$() { if (ConstantValue.PARSEC_SYN == null) {
        ConstantValue.PARSEC_SYN = ConstantValue.PARSEC_STR;
    } return ConstantValue.PARSEC_SYN; }
    static KILOPARSEC_SYN_$LI$() { if (ConstantValue.KILOPARSEC_SYN == null) {
        ConstantValue.KILOPARSEC_SYN = ConstantValue.KILOPARSEC_STR;
    } return ConstantValue.KILOPARSEC_SYN; }
    static EARTH_RADIUS_EQUATORIAL_SYN_$LI$() { if (ConstantValue.EARTH_RADIUS_EQUATORIAL_SYN == null) {
        ConstantValue.EARTH_RADIUS_EQUATORIAL_SYN = ConstantValue.EARTH_RADIUS_EQUATORIAL_STR;
    } return ConstantValue.EARTH_RADIUS_EQUATORIAL_SYN; }
    static EARTH_RADIUS_POLAR_SYN_$LI$() { if (ConstantValue.EARTH_RADIUS_POLAR_SYN == null) {
        ConstantValue.EARTH_RADIUS_POLAR_SYN = ConstantValue.EARTH_RADIUS_POLAR_STR;
    } return ConstantValue.EARTH_RADIUS_POLAR_SYN; }
    static EARTH_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.EARTH_RADIUS_MEAN_SYN == null) {
        ConstantValue.EARTH_RADIUS_MEAN_SYN = ConstantValue.EARTH_RADIUS_MEAN_STR;
    } return ConstantValue.EARTH_RADIUS_MEAN_SYN; }
    static EARTH_MASS_SYN_$LI$() { if (ConstantValue.EARTH_MASS_SYN == null) {
        ConstantValue.EARTH_MASS_SYN = ConstantValue.EARTH_MASS_STR;
    } return ConstantValue.EARTH_MASS_SYN; }
    static EARTH_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.EARTH_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.EARTH_SEMI_MAJOR_AXIS_SYN = ConstantValue.EARTH_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.EARTH_SEMI_MAJOR_AXIS_SYN; }
    static MOON_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.MOON_RADIUS_MEAN_SYN == null) {
        ConstantValue.MOON_RADIUS_MEAN_SYN = ConstantValue.MOON_RADIUS_MEAN_STR;
    } return ConstantValue.MOON_RADIUS_MEAN_SYN; }
    static MOON_MASS_SYN_$LI$() { if (ConstantValue.MOON_MASS_SYN == null) {
        ConstantValue.MOON_MASS_SYN = ConstantValue.MOON_MASS_STR;
    } return ConstantValue.MOON_MASS_SYN; }
    static MONN_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.MONN_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.MONN_SEMI_MAJOR_AXIS_SYN = ConstantValue.MONN_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.MONN_SEMI_MAJOR_AXIS_SYN; }
    static SOLAR_RADIUS_SYN_$LI$() { if (ConstantValue.SOLAR_RADIUS_SYN == null) {
        ConstantValue.SOLAR_RADIUS_SYN = ConstantValue.SOLAR_RADIUS_STR;
    } return ConstantValue.SOLAR_RADIUS_SYN; }
    static SOLAR_MASS_SYN_$LI$() { if (ConstantValue.SOLAR_MASS_SYN == null) {
        ConstantValue.SOLAR_MASS_SYN = ConstantValue.SOLAR_MASS_STR;
    } return ConstantValue.SOLAR_MASS_SYN; }
    static MERCURY_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.MERCURY_RADIUS_MEAN_SYN == null) {
        ConstantValue.MERCURY_RADIUS_MEAN_SYN = ConstantValue.MERCURY_RADIUS_MEAN_STR;
    } return ConstantValue.MERCURY_RADIUS_MEAN_SYN; }
    static MERCURY_MASS_SYN_$LI$() { if (ConstantValue.MERCURY_MASS_SYN == null) {
        ConstantValue.MERCURY_MASS_SYN = ConstantValue.MERCURY_MASS_STR;
    } return ConstantValue.MERCURY_MASS_SYN; }
    static MERCURY_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SYN = ConstantValue.MERCURY_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SYN; }
    static VENUS_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.VENUS_RADIUS_MEAN_SYN == null) {
        ConstantValue.VENUS_RADIUS_MEAN_SYN = ConstantValue.VENUS_RADIUS_MEAN_STR;
    } return ConstantValue.VENUS_RADIUS_MEAN_SYN; }
    static VENUS_MASS_SYN_$LI$() { if (ConstantValue.VENUS_MASS_SYN == null) {
        ConstantValue.VENUS_MASS_SYN = ConstantValue.VENUS_MASS_STR;
    } return ConstantValue.VENUS_MASS_SYN; }
    static VENUS_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.VENUS_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.VENUS_SEMI_MAJOR_AXIS_SYN = ConstantValue.VENUS_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.VENUS_SEMI_MAJOR_AXIS_SYN; }
    static MARS_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.MARS_RADIUS_MEAN_SYN == null) {
        ConstantValue.MARS_RADIUS_MEAN_SYN = ConstantValue.MARS_RADIUS_MEAN_STR;
    } return ConstantValue.MARS_RADIUS_MEAN_SYN; }
    static MARS_MASS_SYN_$LI$() { if (ConstantValue.MARS_MASS_SYN == null) {
        ConstantValue.MARS_MASS_SYN = ConstantValue.MARS_MASS_STR;
    } return ConstantValue.MARS_MASS_SYN; }
    static MARS_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.MARS_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.MARS_SEMI_MAJOR_AXIS_SYN = ConstantValue.MARS_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.MARS_SEMI_MAJOR_AXIS_SYN; }
    static JUPITER_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.JUPITER_RADIUS_MEAN_SYN == null) {
        ConstantValue.JUPITER_RADIUS_MEAN_SYN = ConstantValue.JUPITER_RADIUS_MEAN_STR;
    } return ConstantValue.JUPITER_RADIUS_MEAN_SYN; }
    static JUPITER_MASS_SYN_$LI$() { if (ConstantValue.JUPITER_MASS_SYN == null) {
        ConstantValue.JUPITER_MASS_SYN = ConstantValue.JUPITER_MASS_STR;
    } return ConstantValue.JUPITER_MASS_SYN; }
    static JUPITER_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SYN = ConstantValue.JUPITER_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SYN; }
    static SATURN_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.SATURN_RADIUS_MEAN_SYN == null) {
        ConstantValue.SATURN_RADIUS_MEAN_SYN = ConstantValue.SATURN_RADIUS_MEAN_STR;
    } return ConstantValue.SATURN_RADIUS_MEAN_SYN; }
    static SATURN_MASS_SYN_$LI$() { if (ConstantValue.SATURN_MASS_SYN == null) {
        ConstantValue.SATURN_MASS_SYN = ConstantValue.SATURN_MASS_STR;
    } return ConstantValue.SATURN_MASS_SYN; }
    static SATURN_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.SATURN_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.SATURN_SEMI_MAJOR_AXIS_SYN = ConstantValue.SATURN_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.SATURN_SEMI_MAJOR_AXIS_SYN; }
    static URANUS_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.URANUS_RADIUS_MEAN_SYN == null) {
        ConstantValue.URANUS_RADIUS_MEAN_SYN = ConstantValue.URANUS_RADIUS_MEAN_STR;
    } return ConstantValue.URANUS_RADIUS_MEAN_SYN; }
    static URANUS_MASS_SYN_$LI$() { if (ConstantValue.URANUS_MASS_SYN == null) {
        ConstantValue.URANUS_MASS_SYN = ConstantValue.URANUS_MASS_STR;
    } return ConstantValue.URANUS_MASS_SYN; }
    static URANUS_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.URANUS_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.URANUS_SEMI_MAJOR_AXIS_SYN = ConstantValue.URANUS_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.URANUS_SEMI_MAJOR_AXIS_SYN; }
    static NEPTUNE_RADIUS_MEAN_SYN_$LI$() { if (ConstantValue.NEPTUNE_RADIUS_MEAN_SYN == null) {
        ConstantValue.NEPTUNE_RADIUS_MEAN_SYN = ConstantValue.NEPTUNE_RADIUS_MEAN_STR;
    } return ConstantValue.NEPTUNE_RADIUS_MEAN_SYN; }
    static NEPTUNE_MASS_SYN_$LI$() { if (ConstantValue.NEPTUNE_MASS_SYN == null) {
        ConstantValue.NEPTUNE_MASS_SYN = ConstantValue.NEPTUNE_MASS_STR;
    } return ConstantValue.NEPTUNE_MASS_SYN; }
    static NEPTUNE_SEMI_MAJOR_AXIS_SYN_$LI$() { if (ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SYN == null) {
        ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SYN = ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_STR;
    } return ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SYN; }
    static TRUE_SYN_$LI$() { if (ConstantValue.TRUE_SYN == null) {
        ConstantValue.TRUE_SYN = ConstantValue.TRUE_STR;
    } return ConstantValue.TRUE_SYN; }
    static FALSE_SYN_$LI$() { if (ConstantValue.FALSE_SYN == null) {
        ConstantValue.FALSE_SYN = ConstantValue.FALSE_STR;
    } return ConstantValue.FALSE_SYN; }
    static NPAR_SYN_$LI$() { if (ConstantValue.NPAR_SYN == null) {
        ConstantValue.NPAR_SYN = ConstantValue.NPAR_STR;
    } return ConstantValue.NPAR_SYN; }
    static NAN_SYN_$LI$() { if (ConstantValue.NAN_SYN == null) {
        ConstantValue.NAN_SYN = ConstantValue.NAN_STR;
    } return ConstantValue.NAN_SYN; }
    static PI_SINCE_$LI$() { if (ConstantValue.PI_SINCE == null) {
        ConstantValue.PI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.PI_SINCE; }
    static EULER_SINCE_$LI$() { if (ConstantValue.EULER_SINCE == null) {
        ConstantValue.EULER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.EULER_SINCE; }
    static EULER_MASCHERONI_SINCE_$LI$() { if (ConstantValue.EULER_MASCHERONI_SINCE == null) {
        ConstantValue.EULER_MASCHERONI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.EULER_MASCHERONI_SINCE; }
    static GOLDEN_RATIO_SINCE_$LI$() { if (ConstantValue.GOLDEN_RATIO_SINCE == null) {
        ConstantValue.GOLDEN_RATIO_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.GOLDEN_RATIO_SINCE; }
    static PLASTIC_SINCE_$LI$() { if (ConstantValue.PLASTIC_SINCE == null) {
        ConstantValue.PLASTIC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.PLASTIC_SINCE; }
    static EMBREE_TREFETHEN_SINCE_$LI$() { if (ConstantValue.EMBREE_TREFETHEN_SINCE == null) {
        ConstantValue.EMBREE_TREFETHEN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.EMBREE_TREFETHEN_SINCE; }
    static FEIGENBAUM_DELTA_SINCE_$LI$() { if (ConstantValue.FEIGENBAUM_DELTA_SINCE == null) {
        ConstantValue.FEIGENBAUM_DELTA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.FEIGENBAUM_DELTA_SINCE; }
    static FEIGENBAUM_ALFA_SINCE_$LI$() { if (ConstantValue.FEIGENBAUM_ALFA_SINCE == null) {
        ConstantValue.FEIGENBAUM_ALFA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.FEIGENBAUM_ALFA_SINCE; }
    static TWIN_PRIME_SINCE_$LI$() { if (ConstantValue.TWIN_PRIME_SINCE == null) {
        ConstantValue.TWIN_PRIME_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.TWIN_PRIME_SINCE; }
    static MEISSEL_MERTEENS_SINCE_$LI$() { if (ConstantValue.MEISSEL_MERTEENS_SINCE == null) {
        ConstantValue.MEISSEL_MERTEENS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.MEISSEL_MERTEENS_SINCE; }
    static BRAUN_TWIN_PRIME_SINCE_$LI$() { if (ConstantValue.BRAUN_TWIN_PRIME_SINCE == null) {
        ConstantValue.BRAUN_TWIN_PRIME_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.BRAUN_TWIN_PRIME_SINCE; }
    static BRAUN_PRIME_QUADR_SINCE_$LI$() { if (ConstantValue.BRAUN_PRIME_QUADR_SINCE == null) {
        ConstantValue.BRAUN_PRIME_QUADR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.BRAUN_PRIME_QUADR_SINCE; }
    static BRUIJN_NEWMAN_SINCE_$LI$() { if (ConstantValue.BRUIJN_NEWMAN_SINCE == null) {
        ConstantValue.BRUIJN_NEWMAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.BRUIJN_NEWMAN_SINCE; }
    static CATALAN_SINCE_$LI$() { if (ConstantValue.CATALAN_SINCE == null) {
        ConstantValue.CATALAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.CATALAN_SINCE; }
    static LANDAU_RAMANUJAN_SINCE_$LI$() { if (ConstantValue.LANDAU_RAMANUJAN_SINCE == null) {
        ConstantValue.LANDAU_RAMANUJAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.LANDAU_RAMANUJAN_SINCE; }
    static VISWANATH_SINCE_$LI$() { if (ConstantValue.VISWANATH_SINCE == null) {
        ConstantValue.VISWANATH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.VISWANATH_SINCE; }
    static LEGENDRE_SINCE_$LI$() { if (ConstantValue.LEGENDRE_SINCE == null) {
        ConstantValue.LEGENDRE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.LEGENDRE_SINCE; }
    static RAMANUJAN_SOLDNER_SINCE_$LI$() { if (ConstantValue.RAMANUJAN_SOLDNER_SINCE == null) {
        ConstantValue.RAMANUJAN_SOLDNER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.RAMANUJAN_SOLDNER_SINCE; }
    static ERDOS_BORWEIN_SINCE_$LI$() { if (ConstantValue.ERDOS_BORWEIN_SINCE == null) {
        ConstantValue.ERDOS_BORWEIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.ERDOS_BORWEIN_SINCE; }
    static BERNSTEIN_SINCE_$LI$() { if (ConstantValue.BERNSTEIN_SINCE == null) {
        ConstantValue.BERNSTEIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.BERNSTEIN_SINCE; }
    static GAUSS_KUZMIN_WIRSING_SINCE_$LI$() { if (ConstantValue.GAUSS_KUZMIN_WIRSING_SINCE == null) {
        ConstantValue.GAUSS_KUZMIN_WIRSING_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.GAUSS_KUZMIN_WIRSING_SINCE; }
    static HAFNER_SARNAK_MCCURLEY_SINCE_$LI$() { if (ConstantValue.HAFNER_SARNAK_MCCURLEY_SINCE == null) {
        ConstantValue.HAFNER_SARNAK_MCCURLEY_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.HAFNER_SARNAK_MCCURLEY_SINCE; }
    static GOLOMB_DICKMAN_SINCE_$LI$() { if (ConstantValue.GOLOMB_DICKMAN_SINCE == null) {
        ConstantValue.GOLOMB_DICKMAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.GOLOMB_DICKMAN_SINCE; }
    static CAHEN_SINCE_$LI$() { if (ConstantValue.CAHEN_SINCE == null) {
        ConstantValue.CAHEN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.CAHEN_SINCE; }
    static LAPLACE_LIMIT_SINCE_$LI$() { if (ConstantValue.LAPLACE_LIMIT_SINCE == null) {
        ConstantValue.LAPLACE_LIMIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.LAPLACE_LIMIT_SINCE; }
    static ALLADI_GRINSTEAD_SINCE_$LI$() { if (ConstantValue.ALLADI_GRINSTEAD_SINCE == null) {
        ConstantValue.ALLADI_GRINSTEAD_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.ALLADI_GRINSTEAD_SINCE; }
    static LENGYEL_SINCE_$LI$() { if (ConstantValue.LENGYEL_SINCE == null) {
        ConstantValue.LENGYEL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.LENGYEL_SINCE; }
    static LEVY_SINCE_$LI$() { if (ConstantValue.LEVY_SINCE == null) {
        ConstantValue.LEVY_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.LEVY_SINCE; }
    static APERY_SINCE_$LI$() { if (ConstantValue.APERY_SINCE == null) {
        ConstantValue.APERY_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.APERY_SINCE; }
    static MILLS_SINCE_$LI$() { if (ConstantValue.MILLS_SINCE == null) {
        ConstantValue.MILLS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.MILLS_SINCE; }
    static BACKHOUSE_SINCE_$LI$() { if (ConstantValue.BACKHOUSE_SINCE == null) {
        ConstantValue.BACKHOUSE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.BACKHOUSE_SINCE; }
    static PORTER_SINCE_$LI$() { if (ConstantValue.PORTER_SINCE == null) {
        ConstantValue.PORTER_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.PORTER_SINCE; }
    static LIEB_QUARE_ICE_SINCE_$LI$() { if (ConstantValue.LIEB_QUARE_ICE_SINCE == null) {
        ConstantValue.LIEB_QUARE_ICE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.LIEB_QUARE_ICE_SINCE; }
    static NIVEN_SINCE_$LI$() { if (ConstantValue.NIVEN_SINCE == null) {
        ConstantValue.NIVEN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.NIVEN_SINCE; }
    static SIERPINSKI_SINCE_$LI$() { if (ConstantValue.SIERPINSKI_SINCE == null) {
        ConstantValue.SIERPINSKI_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.SIERPINSKI_SINCE; }
    static KHINCHIN_SINCE_$LI$() { if (ConstantValue.KHINCHIN_SINCE == null) {
        ConstantValue.KHINCHIN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.KHINCHIN_SINCE; }
    static FRANSEN_ROBINSON_SINCE_$LI$() { if (ConstantValue.FRANSEN_ROBINSON_SINCE == null) {
        ConstantValue.FRANSEN_ROBINSON_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.FRANSEN_ROBINSON_SINCE; }
    static LANDAU_SINCE_$LI$() { if (ConstantValue.LANDAU_SINCE == null) {
        ConstantValue.LANDAU_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.LANDAU_SINCE; }
    static PARABOLIC_SINCE_$LI$() { if (ConstantValue.PARABOLIC_SINCE == null) {
        ConstantValue.PARABOLIC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.PARABOLIC_SINCE; }
    static OMEGA_SINCE_$LI$() { if (ConstantValue.OMEGA_SINCE == null) {
        ConstantValue.OMEGA_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.OMEGA_SINCE; }
    static MRB_SINCE_$LI$() { if (ConstantValue.MRB_SINCE == null) {
        ConstantValue.MRB_SINCE = mXparserConstants_1.mXparserConstants.NAMEv10;
    } return ConstantValue.MRB_SINCE; }
    static LI2_SINCE_$LI$() { if (ConstantValue.LI2_SINCE == null) {
        ConstantValue.LI2_SINCE = mXparserConstants_1.mXparserConstants.NAMEv23;
    } return ConstantValue.LI2_SINCE; }
    static GOMPERTZ_SINCE_$LI$() { if (ConstantValue.GOMPERTZ_SINCE == null) {
        ConstantValue.GOMPERTZ_SINCE = mXparserConstants_1.mXparserConstants.NAMEv23;
    } return ConstantValue.GOMPERTZ_SINCE; }
    static LIGHT_SPEED_SINCE_$LI$() { if (ConstantValue.LIGHT_SPEED_SINCE == null) {
        ConstantValue.LIGHT_SPEED_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.LIGHT_SPEED_SINCE; }
    static GRAVITATIONAL_CONSTANT_SINCE_$LI$() { if (ConstantValue.GRAVITATIONAL_CONSTANT_SINCE == null) {
        ConstantValue.GRAVITATIONAL_CONSTANT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.GRAVITATIONAL_CONSTANT_SINCE; }
    static GRAVIT_ACC_EARTH_SINCE_$LI$() { if (ConstantValue.GRAVIT_ACC_EARTH_SINCE == null) {
        ConstantValue.GRAVIT_ACC_EARTH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.GRAVIT_ACC_EARTH_SINCE; }
    static PLANCK_CONSTANT_SINCE_$LI$() { if (ConstantValue.PLANCK_CONSTANT_SINCE == null) {
        ConstantValue.PLANCK_CONSTANT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.PLANCK_CONSTANT_SINCE; }
    static PLANCK_CONSTANT_REDUCED_SINCE_$LI$() { if (ConstantValue.PLANCK_CONSTANT_REDUCED_SINCE == null) {
        ConstantValue.PLANCK_CONSTANT_REDUCED_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.PLANCK_CONSTANT_REDUCED_SINCE; }
    static PLANCK_LENGTH_SINCE_$LI$() { if (ConstantValue.PLANCK_LENGTH_SINCE == null) {
        ConstantValue.PLANCK_LENGTH_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.PLANCK_LENGTH_SINCE; }
    static PLANCK_MASS_SINCE_$LI$() { if (ConstantValue.PLANCK_MASS_SINCE == null) {
        ConstantValue.PLANCK_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.PLANCK_MASS_SINCE; }
    static PLANCK_TIME_SINCE_$LI$() { if (ConstantValue.PLANCK_TIME_SINCE == null) {
        ConstantValue.PLANCK_TIME_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.PLANCK_TIME_SINCE; }
    static LIGHT_YEAR_SINCE_$LI$() { if (ConstantValue.LIGHT_YEAR_SINCE == null) {
        ConstantValue.LIGHT_YEAR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.LIGHT_YEAR_SINCE; }
    static ASTRONOMICAL_UNIT_SINCE_$LI$() { if (ConstantValue.ASTRONOMICAL_UNIT_SINCE == null) {
        ConstantValue.ASTRONOMICAL_UNIT_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.ASTRONOMICAL_UNIT_SINCE; }
    static PARSEC_SINCE_$LI$() { if (ConstantValue.PARSEC_SINCE == null) {
        ConstantValue.PARSEC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.PARSEC_SINCE; }
    static KILOPARSEC_SINCE_$LI$() { if (ConstantValue.KILOPARSEC_SINCE == null) {
        ConstantValue.KILOPARSEC_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.KILOPARSEC_SINCE; }
    static EARTH_RADIUS_EQUATORIAL_SINCE_$LI$() { if (ConstantValue.EARTH_RADIUS_EQUATORIAL_SINCE == null) {
        ConstantValue.EARTH_RADIUS_EQUATORIAL_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.EARTH_RADIUS_EQUATORIAL_SINCE; }
    static EARTH_RADIUS_POLAR_SINCE_$LI$() { if (ConstantValue.EARTH_RADIUS_POLAR_SINCE == null) {
        ConstantValue.EARTH_RADIUS_POLAR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.EARTH_RADIUS_POLAR_SINCE; }
    static EARTH_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.EARTH_RADIUS_MEAN_SINCE == null) {
        ConstantValue.EARTH_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.EARTH_RADIUS_MEAN_SINCE; }
    static EARTH_MASS_SINCE_$LI$() { if (ConstantValue.EARTH_MASS_SINCE == null) {
        ConstantValue.EARTH_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.EARTH_MASS_SINCE; }
    static EARTH_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.EARTH_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.EARTH_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.EARTH_SEMI_MAJOR_AXIS_SINCE; }
    static MOON_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.MOON_RADIUS_MEAN_SINCE == null) {
        ConstantValue.MOON_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MOON_RADIUS_MEAN_SINCE; }
    static MOON_MASS_SINCE_$LI$() { if (ConstantValue.MOON_MASS_SINCE == null) {
        ConstantValue.MOON_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MOON_MASS_SINCE; }
    static MONN_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.MONN_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.MONN_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MONN_SEMI_MAJOR_AXIS_SINCE; }
    static SOLAR_RADIUS_SINCE_$LI$() { if (ConstantValue.SOLAR_RADIUS_SINCE == null) {
        ConstantValue.SOLAR_RADIUS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.SOLAR_RADIUS_SINCE; }
    static SOLAR_MASS_SINCE_$LI$() { if (ConstantValue.SOLAR_MASS_SINCE == null) {
        ConstantValue.SOLAR_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.SOLAR_MASS_SINCE; }
    static MERCURY_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.MERCURY_RADIUS_MEAN_SINCE == null) {
        ConstantValue.MERCURY_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MERCURY_RADIUS_MEAN_SINCE; }
    static MERCURY_MASS_SINCE_$LI$() { if (ConstantValue.MERCURY_MASS_SINCE == null) {
        ConstantValue.MERCURY_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MERCURY_MASS_SINCE; }
    static MERCURY_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SINCE; }
    static VENUS_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.VENUS_RADIUS_MEAN_SINCE == null) {
        ConstantValue.VENUS_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.VENUS_RADIUS_MEAN_SINCE; }
    static VENUS_MASS_SINCE_$LI$() { if (ConstantValue.VENUS_MASS_SINCE == null) {
        ConstantValue.VENUS_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.VENUS_MASS_SINCE; }
    static VENUS_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.VENUS_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.VENUS_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.VENUS_SEMI_MAJOR_AXIS_SINCE; }
    static MARS_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.MARS_RADIUS_MEAN_SINCE == null) {
        ConstantValue.MARS_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MARS_RADIUS_MEAN_SINCE; }
    static MARS_MASS_SINCE_$LI$() { if (ConstantValue.MARS_MASS_SINCE == null) {
        ConstantValue.MARS_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MARS_MASS_SINCE; }
    static MARS_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.MARS_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.MARS_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.MARS_SEMI_MAJOR_AXIS_SINCE; }
    static JUPITER_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.JUPITER_RADIUS_MEAN_SINCE == null) {
        ConstantValue.JUPITER_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.JUPITER_RADIUS_MEAN_SINCE; }
    static JUPITER_MASS_SINCE_$LI$() { if (ConstantValue.JUPITER_MASS_SINCE == null) {
        ConstantValue.JUPITER_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.JUPITER_MASS_SINCE; }
    static JUPITER_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SINCE; }
    static SATURN_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.SATURN_RADIUS_MEAN_SINCE == null) {
        ConstantValue.SATURN_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.SATURN_RADIUS_MEAN_SINCE; }
    static SATURN_MASS_SINCE_$LI$() { if (ConstantValue.SATURN_MASS_SINCE == null) {
        ConstantValue.SATURN_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.SATURN_MASS_SINCE; }
    static SATURN_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.SATURN_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.SATURN_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.SATURN_SEMI_MAJOR_AXIS_SINCE; }
    static URANUS_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.URANUS_RADIUS_MEAN_SINCE == null) {
        ConstantValue.URANUS_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.URANUS_RADIUS_MEAN_SINCE; }
    static URANUS_MASS_SINCE_$LI$() { if (ConstantValue.URANUS_MASS_SINCE == null) {
        ConstantValue.URANUS_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.URANUS_MASS_SINCE; }
    static URANUS_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.URANUS_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.URANUS_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.URANUS_SEMI_MAJOR_AXIS_SINCE; }
    static NEPTUNE_RADIUS_MEAN_SINCE_$LI$() { if (ConstantValue.NEPTUNE_RADIUS_MEAN_SINCE == null) {
        ConstantValue.NEPTUNE_RADIUS_MEAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.NEPTUNE_RADIUS_MEAN_SINCE; }
    static NEPTUNE_MASS_SINCE_$LI$() { if (ConstantValue.NEPTUNE_MASS_SINCE == null) {
        ConstantValue.NEPTUNE_MASS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.NEPTUNE_MASS_SINCE; }
    static NEPTUNE_SEMI_MAJOR_AXIS_SINCE_$LI$() { if (ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SINCE == null) {
        ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SINCE = mXparserConstants_1.mXparserConstants.NAMEv40;
    } return ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SINCE; }
    static TRUE_SINCE_$LI$() { if (ConstantValue.TRUE_SINCE == null) {
        ConstantValue.TRUE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return ConstantValue.TRUE_SINCE; }
    static FALSE_SINCE_$LI$() { if (ConstantValue.FALSE_SINCE == null) {
        ConstantValue.FALSE_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return ConstantValue.FALSE_SINCE; }
    static NPAR_SINCE_$LI$() { if (ConstantValue.NPAR_SINCE == null) {
        ConstantValue.NPAR_SINCE = mXparserConstants_1.mXparserConstants.NAMEv42;
    } return ConstantValue.NPAR_SINCE; }
    static NAN_SINCE_$LI$() { if (ConstantValue.NAN_SINCE == null) {
        ConstantValue.NAN_SINCE = mXparserConstants_1.mXparserConstants.NAMEv41;
    } return ConstantValue.NAN_SINCE; }
}
exports.ConstantValue = ConstantValue;
ConstantValue.TYPE_ID = 9;
ConstantValue.TYPE_DESC = "Constant Value";
ConstantValue.PI_ID = 1;
ConstantValue.EULER_ID = 2;
ConstantValue.EULER_MASCHERONI_ID = 3;
ConstantValue.GOLDEN_RATIO_ID = 4;
ConstantValue.PLASTIC_ID = 5;
ConstantValue.EMBREE_TREFETHEN_ID = 6;
ConstantValue.FEIGENBAUM_DELTA_ID = 7;
ConstantValue.FEIGENBAUM_ALFA_ID = 8;
ConstantValue.TWIN_PRIME_ID = 9;
ConstantValue.MEISSEL_MERTEENS_ID = 10;
ConstantValue.BRAUN_TWIN_PRIME_ID = 11;
ConstantValue.BRAUN_PRIME_QUADR_ID = 12;
ConstantValue.BRUIJN_NEWMAN_ID = 13;
ConstantValue.CATALAN_ID = 14;
ConstantValue.LANDAU_RAMANUJAN_ID = 15;
ConstantValue.VISWANATH_ID = 16;
ConstantValue.LEGENDRE_ID = 17;
ConstantValue.RAMANUJAN_SOLDNER_ID = 18;
ConstantValue.ERDOS_BORWEIN_ID = 19;
ConstantValue.BERNSTEIN_ID = 20;
ConstantValue.GAUSS_KUZMIN_WIRSING_ID = 21;
ConstantValue.HAFNER_SARNAK_MCCURLEY_ID = 22;
ConstantValue.GOLOMB_DICKMAN_ID = 23;
ConstantValue.CAHEN_ID = 24;
ConstantValue.LAPLACE_LIMIT_ID = 25;
ConstantValue.ALLADI_GRINSTEAD_ID = 26;
ConstantValue.LENGYEL_ID = 27;
ConstantValue.LEVY_ID = 28;
ConstantValue.APERY_ID = 29;
ConstantValue.MILLS_ID = 30;
ConstantValue.BACKHOUSE_ID = 31;
ConstantValue.PORTER_ID = 32;
ConstantValue.LIEB_QUARE_ICE_ID = 33;
ConstantValue.NIVEN_ID = 34;
ConstantValue.SIERPINSKI_ID = 35;
ConstantValue.KHINCHIN_ID = 36;
ConstantValue.FRANSEN_ROBINSON_ID = 37;
ConstantValue.LANDAU_ID = 38;
ConstantValue.PARABOLIC_ID = 39;
ConstantValue.OMEGA_ID = 40;
ConstantValue.MRB_ID = 41;
ConstantValue.LI2_ID = 42;
ConstantValue.GOMPERTZ_ID = 43;
ConstantValue.LIGHT_SPEED_ID = 101;
ConstantValue.GRAVITATIONAL_CONSTANT_ID = 102;
ConstantValue.GRAVIT_ACC_EARTH_ID = 103;
ConstantValue.PLANCK_CONSTANT_ID = 104;
ConstantValue.PLANCK_CONSTANT_REDUCED_ID = 105;
ConstantValue.PLANCK_LENGTH_ID = 106;
ConstantValue.PLANCK_MASS_ID = 107;
ConstantValue.PLANCK_TIME_ID = 108;
ConstantValue.LIGHT_YEAR_ID = 201;
ConstantValue.ASTRONOMICAL_UNIT_ID = 202;
ConstantValue.PARSEC_ID = 203;
ConstantValue.KILOPARSEC_ID = 204;
ConstantValue.EARTH_RADIUS_EQUATORIAL_ID = 205;
ConstantValue.EARTH_RADIUS_POLAR_ID = 206;
ConstantValue.EARTH_RADIUS_MEAN_ID = 207;
ConstantValue.EARTH_MASS_ID = 208;
ConstantValue.EARTH_SEMI_MAJOR_AXIS_ID = 209;
ConstantValue.MOON_RADIUS_MEAN_ID = 210;
ConstantValue.MOON_MASS_ID = 211;
ConstantValue.MONN_SEMI_MAJOR_AXIS_ID = 212;
ConstantValue.SOLAR_RADIUS_ID = 213;
ConstantValue.SOLAR_MASS_ID = 214;
ConstantValue.MERCURY_RADIUS_MEAN_ID = 215;
ConstantValue.MERCURY_MASS_ID = 216;
ConstantValue.MERCURY_SEMI_MAJOR_AXIS_ID = 217;
ConstantValue.VENUS_RADIUS_MEAN_ID = 218;
ConstantValue.VENUS_MASS_ID = 219;
ConstantValue.VENUS_SEMI_MAJOR_AXIS_ID = 220;
ConstantValue.MARS_RADIUS_MEAN_ID = 221;
ConstantValue.MARS_MASS_ID = 222;
ConstantValue.MARS_SEMI_MAJOR_AXIS_ID = 223;
ConstantValue.JUPITER_RADIUS_MEAN_ID = 224;
ConstantValue.JUPITER_MASS_ID = 225;
ConstantValue.JUPITER_SEMI_MAJOR_AXIS_ID = 226;
ConstantValue.SATURN_RADIUS_MEAN_ID = 227;
ConstantValue.SATURN_MASS_ID = 228;
ConstantValue.SATURN_SEMI_MAJOR_AXIS_ID = 229;
ConstantValue.URANUS_RADIUS_MEAN_ID = 230;
ConstantValue.URANUS_MASS_ID = 231;
ConstantValue.URANUS_SEMI_MAJOR_AXIS_ID = 232;
ConstantValue.NEPTUNE_RADIUS_MEAN_ID = 233;
ConstantValue.NEPTUNE_MASS_ID = 234;
ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_ID = 235;
ConstantValue.TRUE_ID = 301;
ConstantValue.FALSE_ID = 302;
ConstantValue.NPAR_ID = 303;
ConstantValue.NAN_ID = 999;
ConstantValue.NaN = -1;
ConstantValue.PI_STR = "pi";
ConstantValue.EULER_STR = "e";
ConstantValue.EULER_MASCHERONI_STR = "[gam]";
ConstantValue.GOLDEN_RATIO_STR = "[phi]";
ConstantValue.PLASTIC_STR = "[PN]";
ConstantValue.EMBREE_TREFETHEN_STR = "[B*]";
ConstantValue.FEIGENBAUM_DELTA_STR = "[F\'d]";
ConstantValue.FEIGENBAUM_ALFA_STR = "[F\'a]";
ConstantValue.TWIN_PRIME_STR = "[C2]";
ConstantValue.MEISSEL_MERTEENS_STR = "[M1]";
ConstantValue.BRAUN_TWIN_PRIME_STR = "[B2]";
ConstantValue.BRAUN_PRIME_QUADR_STR = "[B4]";
ConstantValue.BRUIJN_NEWMAN_STR = "[BN\'L]";
ConstantValue.CATALAN_STR = "[Kat]";
ConstantValue.LANDAU_RAMANUJAN_STR = "[K*]";
ConstantValue.VISWANATH_STR = "[K.]";
ConstantValue.LEGENDRE_STR = "[B\'L]";
ConstantValue.RAMANUJAN_SOLDNER_STR = "[RS\'m]";
ConstantValue.ERDOS_BORWEIN_STR = "[EB\'e]";
ConstantValue.BERNSTEIN_STR = "[Bern]";
ConstantValue.GAUSS_KUZMIN_WIRSING_STR = "[GKW\'l]";
ConstantValue.HAFNER_SARNAK_MCCURLEY_STR = "[HSM\'s]";
ConstantValue.GOLOMB_DICKMAN_STR = "[lm]";
ConstantValue.CAHEN_STR = "[Cah]";
ConstantValue.LAPLACE_LIMIT_STR = "[Ll]";
ConstantValue.ALLADI_GRINSTEAD_STR = "[AG]";
ConstantValue.LENGYEL_STR = "[L*]";
ConstantValue.LEVY_STR = "[L.]";
ConstantValue.APERY_STR = "[Dz3]";
ConstantValue.MILLS_STR = "[A3n]";
ConstantValue.BACKHOUSE_STR = "[Bh]";
ConstantValue.PORTER_STR = "[Pt]";
ConstantValue.LIEB_QUARE_ICE_STR = "[L2]";
ConstantValue.NIVEN_STR = "[Nv]";
ConstantValue.SIERPINSKI_STR = "[Ks]";
ConstantValue.KHINCHIN_STR = "[Kh]";
ConstantValue.FRANSEN_ROBINSON_STR = "[FR]";
ConstantValue.LANDAU_STR = "[La]";
ConstantValue.PARABOLIC_STR = "[P2]";
ConstantValue.OMEGA_STR = "[Om]";
ConstantValue.MRB_STR = "[MRB]";
ConstantValue.LI2_STR = "[li2]";
ConstantValue.GOMPERTZ_STR = "[EG]";
ConstantValue.LIGHT_SPEED_STR = "[c]";
ConstantValue.GRAVITATIONAL_CONSTANT_STR = "[G.]";
ConstantValue.GRAVIT_ACC_EARTH_STR = "[g]";
ConstantValue.PLANCK_CONSTANT_STR = "[hP]";
ConstantValue.PLANCK_CONSTANT_REDUCED_STR = "[h-]";
ConstantValue.PLANCK_LENGTH_STR = "[lP]";
ConstantValue.PLANCK_MASS_STR = "[mP]";
ConstantValue.PLANCK_TIME_STR = "[tP]";
ConstantValue.LIGHT_YEAR_STR = "[ly]";
ConstantValue.ASTRONOMICAL_UNIT_STR = "[au]";
ConstantValue.PARSEC_STR = "[pc]";
ConstantValue.KILOPARSEC_STR = "[kpc]";
ConstantValue.EARTH_RADIUS_EQUATORIAL_STR = "[Earth-R-eq]";
ConstantValue.EARTH_RADIUS_POLAR_STR = "[Earth-R-po]";
ConstantValue.EARTH_RADIUS_MEAN_STR = "[Earth-R]";
ConstantValue.EARTH_MASS_STR = "[Earth-M]";
ConstantValue.EARTH_SEMI_MAJOR_AXIS_STR = "[Earth-D]";
ConstantValue.MOON_RADIUS_MEAN_STR = "[Moon-R]";
ConstantValue.MOON_MASS_STR = "[Moon-M]";
ConstantValue.MONN_SEMI_MAJOR_AXIS_STR = "[Moon-D]";
ConstantValue.SOLAR_RADIUS_STR = "[Solar-R]";
ConstantValue.SOLAR_MASS_STR = "[Solar-M]";
ConstantValue.MERCURY_RADIUS_MEAN_STR = "[Mercury-R]";
ConstantValue.MERCURY_MASS_STR = "[Mercury-M]";
ConstantValue.MERCURY_SEMI_MAJOR_AXIS_STR = "[Mercury-D]";
ConstantValue.VENUS_RADIUS_MEAN_STR = "[Venus-R]";
ConstantValue.VENUS_MASS_STR = "[Venus-M]";
ConstantValue.VENUS_SEMI_MAJOR_AXIS_STR = "[Venus-D]";
ConstantValue.MARS_RADIUS_MEAN_STR = "[Mars-R]";
ConstantValue.MARS_MASS_STR = "[Mars-M]";
ConstantValue.MARS_SEMI_MAJOR_AXIS_STR = "[Mars-D]";
ConstantValue.JUPITER_RADIUS_MEAN_STR = "[Jupiter-R]";
ConstantValue.JUPITER_MASS_STR = "[Jupiter-M]";
ConstantValue.JUPITER_SEMI_MAJOR_AXIS_STR = "[Jupiter-D]";
ConstantValue.SATURN_RADIUS_MEAN_STR = "[Saturn-R]";
ConstantValue.SATURN_MASS_STR = "[Saturn-M]";
ConstantValue.SATURN_SEMI_MAJOR_AXIS_STR = "[Saturn-D]";
ConstantValue.URANUS_RADIUS_MEAN_STR = "[Uranus-R]";
ConstantValue.URANUS_MASS_STR = "[Uranus-M]";
ConstantValue.URANUS_SEMI_MAJOR_AXIS_STR = "[Uranus-D]";
ConstantValue.NEPTUNE_RADIUS_MEAN_STR = "[Neptune-R]";
ConstantValue.NEPTUNE_MASS_STR = "[Neptune-M]";
ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_STR = "[Neptune-D]";
ConstantValue.TRUE_STR = "[true]";
ConstantValue.FALSE_STR = "[false]";
ConstantValue.NPAR_STR = "[npar]";
ConstantValue.NAN_STR = "[NaN]";
ConstantValue.PI_DESC = "Pi, Archimedes\' constant or Ludolph\'s number";
ConstantValue.EULER_DESC = "Napier\'s constant, or Euler\'s number, base of Natural logarithm";
ConstantValue.EULER_MASCHERONI_DESC = "Euler-Mascheroni constant";
ConstantValue.GOLDEN_RATIO_DESC = "Golden ratio";
ConstantValue.PLASTIC_DESC = "Plastic constant";
ConstantValue.EMBREE_TREFETHEN_DESC = "Embree-Trefethen constant";
ConstantValue.FEIGENBAUM_DELTA_DESC = "Feigenbaum constant alfa";
ConstantValue.FEIGENBAUM_ALFA_DESC = "Feigenbaum constant delta";
ConstantValue.TWIN_PRIME_DESC = "Twin prime constant";
ConstantValue.MEISSEL_MERTEENS_DESC = "Meissel-Mertens constant";
ConstantValue.BRAUN_TWIN_PRIME_DESC = "Brun\'s constant for twin primes";
ConstantValue.BRAUN_PRIME_QUADR_DESC = "Brun\'s constant for prime quadruplets";
ConstantValue.BRUIJN_NEWMAN_DESC = "de Bruijn-Newman constant";
ConstantValue.CATALAN_DESC = "Catalan\'s constant";
ConstantValue.LANDAU_RAMANUJAN_DESC = "Landau-Ramanujan constant";
ConstantValue.VISWANATH_DESC = "Viswanath\'s constant";
ConstantValue.LEGENDRE_DESC = "Legendre\'s constant";
ConstantValue.RAMANUJAN_SOLDNER_DESC = "Ramanujan-Soldner constant";
ConstantValue.ERDOS_BORWEIN_DESC = "Erdos-Borwein constant";
ConstantValue.BERNSTEIN_DESC = "Bernstein\'s constant";
ConstantValue.GAUSS_KUZMIN_WIRSING_DESC = "Gauss-Kuzmin-Wirsing constant";
ConstantValue.HAFNER_SARNAK_MCCURLEY_DESC = "Hafner-Sarnak-McCurley constant";
ConstantValue.GOLOMB_DICKMAN_DESC = "Golomb-Dickman constant";
ConstantValue.CAHEN_DESC = "Cahen\'s constant";
ConstantValue.LAPLACE_LIMIT_DESC = "Laplace limit";
ConstantValue.ALLADI_GRINSTEAD_DESC = "Alladi-Grinstead constant";
ConstantValue.LENGYEL_DESC = "Lengyel\'s constant";
ConstantValue.LEVY_DESC = "Levy\'s constant";
ConstantValue.APERY_DESC = "Apery\'s constant";
ConstantValue.MILLS_DESC = "Mills\' constant";
ConstantValue.BACKHOUSE_DESC = "Backhouse\'s constant";
ConstantValue.PORTER_DESC = "Porter\'s constant";
ConstantValue.LIEB_QUARE_ICE_DESC = "Lieb\'s square ice constant";
ConstantValue.NIVEN_DESC = "Niven\'s constant";
ConstantValue.SIERPINSKI_DESC = "Sierpinski\'s constant";
ConstantValue.KHINCHIN_DESC = "Khinchin\'s constant";
ConstantValue.FRANSEN_ROBINSON_DESC = "Fransen-Robinson constant";
ConstantValue.LANDAU_DESC = "Landau\'s constant";
ConstantValue.PARABOLIC_DESC = "Parabolic constant";
ConstantValue.OMEGA_DESC = "Omega constant";
ConstantValue.MRB_DESC = "MRB constant";
ConstantValue.LI2_DESC = "li(2) - Logarithmic integral function at x=2";
ConstantValue.GOMPERTZ_DESC = "Gompertz constant";
ConstantValue.LIGHT_SPEED_DESC = "<Physical Constant> Light speed in vacuum [m/s] (m=1, s=1)";
ConstantValue.GRAVITATIONAL_CONSTANT_DESC = "<Physical Constant> Gravitational constant (m=1, kg=1, s=1)]";
ConstantValue.GRAVIT_ACC_EARTH_DESC = "<Physical Constant> Gravitational acceleration on Earth [m/s^2] (m=1, s=1)";
ConstantValue.PLANCK_CONSTANT_DESC = "<Physical Constant> Planck constant (m=1, kg=1, s=1)";
ConstantValue.PLANCK_CONSTANT_REDUCED_DESC = "<Physical Constant> Reduced Planck constant / Dirac constant (m=1, kg=1, s=1)]";
ConstantValue.PLANCK_LENGTH_DESC = "<Physical Constant> Planck length [m] (m=1)";
ConstantValue.PLANCK_MASS_DESC = "<Physical Constant> Planck mass [kg] (kg=1)";
ConstantValue.PLANCK_TIME_DESC = "<Physical Constant> Planck time [s] (s=1)";
ConstantValue.LIGHT_YEAR_DESC = "<Astronomical Constant> Light year [m] (m=1)";
ConstantValue.ASTRONOMICAL_UNIT_DESC = "<Astronomical Constant> Astronomical unit [m] (m=1)";
ConstantValue.PARSEC_DESC = "<Astronomical Constant> Parsec [m] (m=1)";
ConstantValue.KILOPARSEC_DESC = "<Astronomical Constant> Kiloparsec [m] (m=1)";
ConstantValue.EARTH_RADIUS_EQUATORIAL_DESC = "<Astronomical Constant> Earth equatorial radius [m] (m=1)";
ConstantValue.EARTH_RADIUS_POLAR_DESC = "<Astronomical Constant> Earth polar radius [m] (m=1)";
ConstantValue.EARTH_RADIUS_MEAN_DESC = "<Astronomical Constant> Earth mean radius (m=1)";
ConstantValue.EARTH_MASS_DESC = "<Astronomical Constant> Earth mass [kg] (kg=1)";
ConstantValue.EARTH_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Earth-Sun distance - semi major axis [m] (m=1)";
ConstantValue.MOON_RADIUS_MEAN_DESC = "<Astronomical Constant> Moon mean radius [m] (m=1)";
ConstantValue.MOON_MASS_DESC = "<Astronomical Constant> Moon mass [kg] (kg=1)";
ConstantValue.MONN_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Moon-Earth distance - semi major axis [m] (m=1)";
ConstantValue.SOLAR_RADIUS_DESC = "<Astronomical Constant> Solar mean radius [m] (m=1)";
ConstantValue.SOLAR_MASS_DESC = "<Astronomical Constant> Solar mass [kg] (kg=1)";
ConstantValue.MERCURY_RADIUS_MEAN_DESC = "<Astronomical Constant> Mercury mean radius [m] (m=1)";
ConstantValue.MERCURY_MASS_DESC = "<Astronomical Constant> Mercury mass [kg] (kg=1)";
ConstantValue.MERCURY_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Mercury-Sun distance - semi major axis [m] (m=1)";
ConstantValue.VENUS_RADIUS_MEAN_DESC = "<Astronomical Constant> Venus mean radius [m] (m=1)";
ConstantValue.VENUS_MASS_DESC = "<Astronomical Constant> Venus mass [kg] (kg=1)";
ConstantValue.VENUS_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Venus-Sun distance - semi major axis [m] (m=1)";
ConstantValue.MARS_RADIUS_MEAN_DESC = "<Astronomical Constant> Mars mean radius [m] (m=1)";
ConstantValue.MARS_MASS_DESC = "<Astronomical Constant> Mars mass [kg] (kg=1)";
ConstantValue.MARS_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Mars-Sun distance - semi major axis [m] (m=1)";
ConstantValue.JUPITER_RADIUS_MEAN_DESC = "<Astronomical Constant> Jupiter mean radius [m] (m=1)";
ConstantValue.JUPITER_MASS_DESC = "<Astronomical Constant> Jupiter mass [kg] (kg=1)";
ConstantValue.JUPITER_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Jupiter-Sun distance - semi major axis [m] (m=1)";
ConstantValue.SATURN_RADIUS_MEAN_DESC = "<Astronomical Constant> Saturn mean radius [m] (m=1)";
ConstantValue.SATURN_MASS_DESC = "<Astronomical Constant> Saturn mass [kg] (kg=1)";
ConstantValue.SATURN_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Saturn-Sun distance - semi major axis [m] (m=1)";
ConstantValue.URANUS_RADIUS_MEAN_DESC = "<Astronomical Constant> Uranus mean radius [m] (m=1)";
ConstantValue.URANUS_MASS_DESC = "<Astronomical Constant> Uranus mass [kg] (kg=1)";
ConstantValue.URANUS_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Uranus-Sun distance - semi major axis [m] (m=1)";
ConstantValue.NEPTUNE_RADIUS_MEAN_DESC = "<Astronomical Constant> Neptune mean radius [m] (m=1)";
ConstantValue.NEPTUNE_MASS_DESC = "<Astronomical Constant> Neptune mass [kg] (kg=1)";
ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_DESC = "<Astronomical Constant> Neptune-Sun distance - semi major axis [m] (m=1)";
ConstantValue.TRUE_DESC = "Boolean True represented as double, [true] = 1";
ConstantValue.FALSE_DESC = "Boolean False represented as double, [false] = 0";
ConstantValue.NPAR_DESC = "Automatically generated constant for user defined functions, returns number of given function parameters";
ConstantValue.NAN_DESC = "Not-a-Number";
ConstantValue["__class"] = "org.mariuszgromada.math.mxparser.parsertokens.ConstantValue";
//# sourceMappingURL=ConstantValue.js.map