export declare class BinaryRelations {
    /**
     * Default epsilon for comparison
     */
    static DEFAULT_COMPARISON_EPSILON: number;
    /**
     * Epsilon for comparison
     */
    static epsilon: number;
    static epsilon_$LI$(): number;
    /**
     * COmparison mode indicator
     */
    static epsilonComparison: boolean;
    /**
     * Sets comparison mode to EXACT.
     */
    static setExactComparison(): void;
    /**
     * Sets comparison mode to EPSILON.
     */
    static setEpsilonComparison(): void;
    /**
     * Sets epsilon value.
     * @param {number} epsilon   Epsilon value (grater than 0).
     *
     * @see #setEpsilonComparison()
     */
    static setEpsilon(epsilon: number): void;
    /**
     * Sets default epsilon value.
     *
     * @see #setEpsilonComparison()
     * @see #DEFAULT_COMPARISON_EPSILON
     */
    static setDefaultEpsilon(): void;
    /**
     * Returns current epsilon value.
     * @return  {number} Returns current epsilon value.
     *
     * @see #setEpsilonComparison()
     */
    static getEpsilon(): number;
    /**
     * Checks if epsilon comparison mode is active;
     * @return  {boolean} True if epsilon mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     */
    static checkIfEpsilonMode(): boolean;
    /**
     * Checks if exact comparison mode is active;
     * @return  {boolean} True if exact mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     */
    static checkIfExactMode(): boolean;
    /**
     * Equality relation.
     *
     * @param      {number} a                   the a number (a = b)
     * @param      {number} b                   the b number (a = b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a = b return 1,
     * otherwise return 0.
     */
    static eq(a: number, b: number): number;
    /**
     * Inequality relation.
     *
     * @param      {number} a                   the a number (a &lt;&gt; b)
     * @param      {number} b                   the b number (a &lt;&gt; b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &lt;&gt; b return 1,
     * otherwise return 0.
     */
    static neq(a: number, b: number): number;
    /**
     * Lower than relation.
     *
     * @param      {number} a                   the a number (a &lt; b)
     * @param      {number} b                   the b number (a &lt; b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &lt; b return 1,
     * otherwise return 0.
     */
    static lt(a: number, b: number): number;
    /**
     * Greater than relation.
     *
     * @param      {number} a                   the a number (a &gt; b)
     * @param      {number} b                   the b number (a &gt; b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &gt; b return 1,
     * otherwise return 0.
     */
    static gt(a: number, b: number): number;
    /**
     * Lower or equal relation.
     *
     * @param      {number} a                   the a number (a &lt;= b)
     * @param      {number} b                   the b number (a &lt;= b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &lt;= b return 1,
     * otherwise return 0.
     */
    static leq(a: number, b: number): number;
    /**
     * Greater or equal relation.
     *
     * @param      {number} a                   the a number (a &gt;= b)
     * @param      {number} b                   the b number (a &gt;= b)
     *
     * @return     {number} if a = Double.NaN or b = Double.NaN return Double.NaN,
     * else if a &gt;= b return 1,
     * otherwise return 0.
     */
    static geq(a: number, b: number): number;
}
