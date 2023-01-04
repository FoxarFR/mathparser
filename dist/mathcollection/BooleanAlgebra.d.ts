/**
 * BooleanAlgebra - class for boolean operators.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.3.0
 * @class
 */
export declare class BooleanAlgebra {
    /**
     * False as integer
     */
    static FALSE: number;
    /**
     * True as integer
     */
    static TRUE: number;
    /**
     * Null as integer
     */
    static NULL: number;
    /**
     * False as double
     */
    static F: number;
    /**
     * True as double
     */
    static T: number;
    /**
     * Null as double
     */
    static N: number;
    static N_$LI$(): number;
    /**
     * AND truth table
     */
    static AND_TRUTH_TABLE: number[][];
    static AND_TRUTH_TABLE_$LI$(): number[][];
    /**
     * NAND truth table
     */
    static NAND_TRUTH_TABLE: number[][];
    static NAND_TRUTH_TABLE_$LI$(): number[][];
    /**
     * OR truth table
     */
    static OR_TRUTH_TABLE: number[][];
    static OR_TRUTH_TABLE_$LI$(): number[][];
    /**
     * NOR truth table
     */
    static NOR_TRUTH_TABLE: number[][];
    static NOR_TRUTH_TABLE_$LI$(): number[][];
    /**
     * XOR truth table
     */
    static XOR_TRUTH_TABLE: number[][];
    static XOR_TRUTH_TABLE_$LI$(): number[][];
    /**
     * XNOR truth table
     */
    static XNOR_TRUTH_TABLE: number[][];
    static XNOR_TRUTH_TABLE_$LI$(): number[][];
    /**
     * IMP truth table
     */
    static IMP_TRUTH_TABLE: number[][];
    static IMP_TRUTH_TABLE_$LI$(): number[][];
    /**
     * CIMP truth table
     */
    static CIMP_TRUTH_TABLE: number[][];
    static CIMP_TRUTH_TABLE_$LI$(): number[][];
    /**
     * EQV truth table
     */
    static EQV_TRUTH_TABLE: number[][];
    static EQV_TRUTH_TABLE_$LI$(): number[][];
    /**
     * NIMP truth table
     */
    static NIMP_TRUTH_TABLE: number[][];
    static NIMP_TRUTH_TABLE_$LI$(): number[][];
    /**
     * CNIMP truth table
     */
    static CNIMP_TRUTH_TABLE: number[][];
    static CNIMP_TRUTH_TABLE_$LI$(): number[][];
    /**
     * NOT truth table
     */
    static NOT_TRUTH_TABLE: number[];
    static NOT_TRUTH_TABLE_$LI$(): number[];
    /**
     * Double to integer boolean translation
     *
     * @param      {number} a                   the double number
     *
     * @return     {number} If a = Double.NaN return NULL,
     * else if a &lt;&gt; 0 return TRUE,
     * else return FALSE.
     */
    static double2IntBoolean(a: number): number;
    /**
     * Boolean AND
     *
     * @param      {number} a                   the a number (a AND b)
     * @param      {number} b                   the b number (a AND b)
     *
     * @return     {number} Truth table element AND[A][B] where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static and(a: number, b: number): number;
    /**
     * Boolean OR
     *
     * @param      {number} a                   the a number (a OR b)
     * @param      {number} b                   the b number (a OR b)
     *
     * @return     {number} Truth table element OR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static or(a: number, b: number): number;
    /**
     * Boolean XOR
     *
     * @param      {number} a                   the a number (a XOR b)
     * @param      {number} b                   the b number (a XOR b)
     *
     * @return     {number} Truth table element XOR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static xor(a: number, b: number): number;
    /**
     * Boolean NAND
     *
     * @param      {number} a                   the a number (a NAND b)
     * @param      {number} b                   the b number (a NAND b)
     *
     * @return     {number} Truth table element NAND[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static nand(a: number, b: number): number;
    /**
     * Boolean NOR
     *
     * @param      {number} a                   the a number (a NOR b)
     * @param      {number} b                   the b number (a NOR b)
     *
     * @return     {number} Truth table element NOR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static nor(a: number, b: number): number;
    /**
     * Boolean XNOR
     *
     * @param      {number} a                   the a number (a XNOR b)
     * @param      {number} b                   the b number (a XNOR b)
     *
     * @return     {number} Truth table element XNOR[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static xnor(a: number, b: number): number;
    /**
     * Boolean IMP
     *
     * @param      {number} a                   the a number (a IMP b)
     * @param      {number} b                   the b number (a IMP b)
     *
     * @return     {number} Truth table element IMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static imp(a: number, b: number): number;
    /**
     * Boolean EQV
     *
     * @param      {number} a                   the a number (a EQV b)
     * @param      {number} b                   the b number (a EQV b)
     *
     * @return     {number} Truth table element EQV[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static eqv(a: number, b: number): number;
    /**
     * Boolean NOT
     *
     * @param      {number} a                   the a number (NOT a)
     *
     * @return     {number} Truth table element NOT[A]
     * where A = double2IntBoolean(a)
     */
    static not(a: number): number;
    /**
     * Boolean CIMP
     *
     * @param      {number} a                   the a number (a CIMP b)
     * @param      {number} b                   the b number (a CIMP b)
     *
     * @return     {number} Truth table element CIMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static cimp(a: number, b: number): number;
    /**
     * Boolean NIMP
     *
     * @param      {number} a                   the a number (a NIMP b)
     * @param      {number} b                   the b number (a NIMP b)
     *
     * @return     {number} Truth table element NIMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static nimp(a: number, b: number): number;
    /**
     * Boolean CNIMP
     *
     * @param      {number} a                   the a number (a CNIMP b)
     * @param      {number} b                   the b number (a CNIMP b)
     *
     * @return     {number} Truth table element CNIMP[A][B]
     * where A = double2IntBoolean(a), B = double2IntBoolean(b)
     */
    static cnimp(a: number, b: number): number;
    /**
     * Boolean AND variadic
     *
     * @param {double[]} values   List of values
     * @return   {number} Returns BooleanAlgebra.TRUE if all values on the list are BooleanAlgebra.TURE,
     * otherwise returns BooleanAlgebra.FALSE
     */
    static andVariadic(values: number[]): number;
    /**
     * Boolean OR variadic
     *
     * @param {double[]} values   List of values
     * @return   {number} Returns BooleanAlgebra.TRUE if at least one value on the list is BooleanAlgebra.TURE,
     * otherwise returns BooleanAlgebra.FALSE
     */
    static orVariadic(values: number[]): number;
    /**
     * Boolean XOR variadic
     *
     * @param {double[]} values   List of values
     * @return   {number} Returns BooleanAlgebra.TRUE if exactly one value on the list is BooleanAlgebra.TURE,
     * otherwise returns BooleanAlgebra.FALSE
     */
    static xorVariadic(values: number[]): number;
}
