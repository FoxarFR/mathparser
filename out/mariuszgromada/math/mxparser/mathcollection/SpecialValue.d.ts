/**
 * Constructor - functions only with values in radians and degrees
 * @param {number} x       The value of x from f(x)
 * @param {number} fv      The value of f(x) in radians for a given x
 * @param {number} fvdeg   The value of f(x) in degrees for a given x
 * @class
 */
export declare class SpecialValue {
    /**
     * Epsilon is used to compare the x value with regards to some given small interval
     */
    static EPSILON: number;
    static EPSILON_$LI$(): number;
    /**
     * The x value from f(x)
     */
    x: number;
    /**
     * The start of the interval where the function value is considered to be by fv and fvdeg
     */
    xFrom: number;
    /**
     * The end of the interval where the function value is considered to be by fv and fvdeg
     */
    xTo: number;
    /**
     * The function value in main unit
     */
    fv: number;
    /**
     * The function value in degrees for inverse trigonometric functions
     */
    fvdeg: number;
    constructor(x?: any, fv?: any, fvdeg?: any);
}
