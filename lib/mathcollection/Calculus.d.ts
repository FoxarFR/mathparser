import { Argument } from '../Argument';
import { Expression } from '../Expression';
/**
 * Calculus - numerical integration, differentiation, etc...
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
export declare class Calculus {
    /**
     * Derivative type specification
     */
    static LEFT_DERIVATIVE: number;
    static RIGHT_DERIVATIVE: number;
    static GENERAL_DERIVATIVE: number;
    /**
     * Trapezoid numerical integration
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} x                   the argument
     * @param      {number} a                   form a ...
     * @param      {number} b                   ... to b
     * @param      {number} eps                 the epsilon (error)
     * @param      {number} maxSteps            the maximum number of steps
     *
     * @return     {number} Integral value as double.
     *
     * @see        Expression
     */
    static integralTrapezoid(f: Expression, x: Argument, a: number, b: number, eps: number, maxSteps: number): number;
    /**
     * Numerical derivative at x = x0
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} x                   the argument
     * @param      {number} x0                  at point x = x0
     * @param      {number} derType             derivative type (LEFT_DERIVATIVE, RIGHT_DERIVATIVE,
     * GENERAL_DERIVATIVE
     * @param      {number} eps                 the epsilon (error)
     * @param      {number} maxSteps            the maximum number of steps
     *
     * @return     {number} Derivative value as double.
     *
     * @see        Expression
     */
    static derivative(f: Expression, x: Argument, x0: number, derType: number, eps: number, maxSteps: number): number;
    /**
     * Numerical n-th derivative at x = x0 (you should avoid calculation
     * of derivatives with order higher than 2).
     *
     * @param      {Expression} f                   the expression
     * @param      {number} n                   the deriviative order
     * @param      {Argument} x                   the argument
     * @param      {number} x0                  at point x = x0
     * @param      {number} derType             derivative type (LEFT_DERIVATIVE, RIGHT_DERIVATIVE,
     * GENERAL_DERIVATIVE
     * @param      {number} eps                 the epsilon (error)
     * @param      {number} maxSteps            the maximum number of steps
     *
     * @return     {number} Derivative value as double.
     *
     * @see        Expression
     */
    static derivativeNth(f: Expression, n: number, x: Argument, x0: number, derType: number, eps: number, maxSteps: number): number;
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double(f: Expression, x: Argument, x0: number): number;
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument(f: Expression, x: Argument): number;
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double(f: Expression, x: Argument, x0: number): number;
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument(f: Expression, x: Argument): number;
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument$double(f: Expression, h: number, x: Argument, x0: number): number;
    /**
     * Forward difference(h) operator (at x = x0)
     *
     * @param      {Expression} f                   the expression
     * @param      {number} h                   the difference
     * @param      {Argument} x                   the argument name
     * @param      {number} x0                  x = x0
     *
     * @return     {number} Forward difference(h) value calculated at x0.
     *
     * @see        Expression
     * @see        Argument
     */
    static forwardDifference(f?: any, h?: any, x?: any, x0?: any): any;
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(f: Expression, h: number, x: Argument): number;
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument$double(f: Expression, h: number, x: Argument, x0: number): number;
    /**
     * Backward difference(h) operator (at x = x0)
     *
     * @param      {Expression} f                   the expression
     * @param      {number} h                   the difference
     * @param      {Argument} x                   the argument name
     * @param      {number} x0                  x = x0
     *
     * @return     {number} Backward difference(h) value calculated at x0.
     *
     * @see        Expression
     * @see        Argument
     */
    static backwardDifference(f?: any, h?: any, x?: any, x0?: any): any;
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(f: Expression, h: number, x: Argument): number;
    /**
     * Brent solver (Brent root finder)
     *
     * @param {Expression} f  Function given in the Expression form
     * @param {Argument} x  Argument
     * @param {number} a  Left limit
     * @param {number} b  Right limit
     * @param {number} eps      Epsilon value (accuracy)
     * @param {number} maxSteps Maximum number of iterations
     * @return   {number} Function root - if found, otherwise Double.NaN.
     */
    static solveBrent(f: Expression, x: Argument, a: number, b: number, eps: number, maxSteps: number): number;
}
