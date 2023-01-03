import { Argument } from '../Argument';
import { Expression } from '../Expression';
/**
 * Statistics - i.e.: mean, variance, standard deviation, etc.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
export declare class Statistics {
    static avg$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f: Expression, index: Argument, from: number, to: number, delta: number): number;
    /**
     * Average from sample function values - iterative operator.
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} index               the name of index argument
     * @param      {number} from                FROM index = form
     * @param      {number} to                  TO index = to
     * @param      {number} delta               BY delta
     *
     * @return     {number} product operation (for empty product operations returns 1).
     *
     * @see        Expression
     * @see        Argument
     */
    static avg(f?: any, index?: any, from?: any, to?: any, delta?: any): any;
    static var$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f: Expression, index: Argument, from: number, to: number, delta: number): number;
    /**
     * Bias-corrected variance from sample function values - iterative operator.
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} index               the name of index argument
     * @param      {number} from                FROM index = form
     * @param      {number} to                  TO index = to
     * @param      {number} delta               BY delta
     *
     * @return     {number} product operation (for empty product operations returns 1).
     *
     * @see        Expression
     * @see        Argument
     */
    static var(f?: any, index?: any, from?: any, to?: any, delta?: any): any;
    static std$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(f: Expression, index: Argument, from: number, to: number, delta: number): number;
    /**
     * Bias-corrected standard deviation from sample function values - iterative operator.
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} index               the name of index argument
     * @param      {number} from                FROM index = form
     * @param      {number} to                  TO index = to
     * @param      {number} delta               BY delta
     *
     * @return     {number} product operation (for empty product operations returns 1).
     *
     * @see        Expression
     * @see        Argument
     */
    static std(f?: any, index?: any, from?: any, to?: any, delta?: any): any;
    static avg$double_A(...numbers: number[]): number;
    static var$double_A(...numbers: number[]): number;
    static std$double_A(...numbers: number[]): number;
    /**
     * Sample median
     * @param {double[]} numbers   List of number
     * @return          {number} Sample median, if table was empty or null then Double.NaN is returned.
     */
    static median(...numbers: number[]): number;
    /**
     * Sample mode
     * @param {double[]} numbers   List of number
     * @return          {number} Sample median, if table was empty or null then Double.NaN is returned.
     */
    static mode(...numbers: number[]): number;
}
