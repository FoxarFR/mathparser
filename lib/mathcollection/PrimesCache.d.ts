/**
 * Constructor - setting prime cache for a given range if integers
 * @param {number} maxNumInCache Range of integers to be stored in prime cache
 * @class
 */
export declare class PrimesCache {
    /**
     * Default range of integer to store in cache
     */
    static DEFAULT_MAX_NUM_IN_CACHE: number;
    /**
     * Empty cache status
     */
    static CACHE_EMPTY: boolean;
    /**
     * Cache ready to use
     */
    static CACHING_FINISHED: boolean;
    /**
     * Indicator if given number is a prime
     */
    static IS_PRIME: number;
    /**
     * Indicator if given number is not a prime
     */
    static IS_NOT_PRIME: number;
    /**
     * Indicator that the value is not stored
     * in cache
     */
    static NOT_IN_CACHE: number;
    /**
     * Primes between 0 ... and ... maximumNumberInCache
     * will be cached
     */
    maxNumInCache: number;
    /**
     * Number of cached prime numbers
     */
    numberOfPrimes: number;
    /**
     * Time in seconds showing
     * how long did it take to finalize prime numbers
     * caching.
     */
    computingTime: number;
    /**
     * Caching process status
     */
    cacheStatus: boolean;
    /**
     * Integers table to store number and indicate
     * whether they are prime or not
     */
    isPrime: boolean[];
    /**
     * Internal flag marking that primes cache initialization was successful;
     */
    initSuccessful: boolean;
    /**
     * Eratosthenes Sieve implementation
     * @private
     */
    EratosthenesSieve(): void;
    /**
     * Counting found primes
     * @private
     */
    countPrimes(): void;
    constructor(maxNumInCache?: any);
    /**
     * Returns computing time of Eratosthenes Sieve
     * @return {number} Computing time in seconds
     */
    getComputingTime(): number;
    /**
     * Returns cache status
     * @return {boolean} PrimesCache.CACHE_EMPTY or PrimesCache.CACHING_FINISHED;
     */
    getCacheStatus(): boolean;
    /**
     * Returns number of found primes.
     * @return {number} Number of found primes.
     */
    getNumberOfPrimes(): number;
    /**
     * Returns cache range.
     * @return {number} Maximum integera number in cache/
     */
    getMaxNumInCache(): number;
    /**
     * Check whether given number is prime
     * @param {number} n Given integer number.
     * @return {number} PrimesCache.IS_PRIME or PrimesCache.IS_NOT_PRIME or PrimesCache.NOT_IN_CACHE
     */
    primeTest(n: number): number;
    /**
     * Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     *
     * @return {boolean} Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     */
    isInitSuccessful(): boolean;
    /**
     * Gets underlying primes cache boolean table
     * @return {boolean[]} Underlying primes cache boolean table
     */
    getPrimes(): boolean[];
}
