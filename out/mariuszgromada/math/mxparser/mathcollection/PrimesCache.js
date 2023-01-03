"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimesCache = void 0;
const mXparserConstants_1 = require("../mXparserConstants");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
/**
 * Constructor - setting prime cache for a given range if integers
 * @param {number} maxNumInCache Range of integers to be stored in prime cache
 * @class
 */
class PrimesCache {
    /**
     * Eratosthenes Sieve implementation
     * @private
     */
    /*private*/ EratosthenesSieve() {
        const startTime = j4ts_1.java.lang.System.currentTimeMillis();
        try {
            const size = this.maxNumInCache + 1;
            if (size <= 0) {
                this.numberOfPrimes = 0;
                this.maxNumInCache = 0;
                this.initSuccessful = false;
                const endTime = j4ts_1.java.lang.System.currentTimeMillis();
                this.computingTime = (endTime - startTime) / 1000.0;
                return;
            }
            this.isPrime = (s => { let a = []; while (s-- > 0)
                a.push(false); return a; })(size);
            this.numberOfPrimes = 0;
            this.isPrime[0] = false;
            this.isPrime[1] = false;
            for (let i = 2; i <= this.maxNumInCache; i++) {
                {
                    this.isPrime[i] = true;
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return;
                }
                ;
            }
            for (let i = 2; i * i <= this.maxNumInCache; i++) {
                {
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return;
                    if (this.isPrime[i] === true)
                        for (let j = i; i * j <= this.maxNumInCache; j++) {
                            {
                                this.isPrime[i * j] = false;
                                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                                    return;
                            }
                            ;
                        }
                }
                ;
            }
            this.initSuccessful = true;
        }
        catch (e) {
            this.initSuccessful = false;
        }
        finally {
            const endTime = j4ts_1.java.lang.System.currentTimeMillis();
            this.computingTime = (endTime - startTime) / 1000.0;
        }
    }
    /**
     * Counting found primes
     * @private
     */
    /*private*/ countPrimes() {
        for (let i = 0; i <= this.maxNumInCache; i++) {
            {
                if (this.isPrime[i] === true)
                    this.numberOfPrimes++;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return;
            }
            ;
        }
    }
    constructor(maxNumInCache) {
        if (((typeof maxNumInCache === 'number') || maxNumInCache === null)) {
            let __args = arguments;
            if (this.maxNumInCache === undefined) {
                this.maxNumInCache = 0;
            }
            if (this.numberOfPrimes === undefined) {
                this.numberOfPrimes = 0;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.cacheStatus === undefined) {
                this.cacheStatus = false;
            }
            if (this.isPrime === undefined) {
                this.isPrime = null;
            }
            if (this.initSuccessful === undefined) {
                this.initSuccessful = false;
            }
            if (maxNumInCache > 2)
                this.maxNumInCache = Math.min(maxNumInCache, j4ts_2.javaemul.internal.IntegerHelper.MAX_VALUE - 1);
            else
                this.maxNumInCache = PrimesCache.DEFAULT_MAX_NUM_IN_CACHE;
            this.initSuccessful = false;
            this.cacheStatus = PrimesCache.CACHE_EMPTY;
            maxNumInCache = PrimesCache.DEFAULT_MAX_NUM_IN_CACHE;
            this.EratosthenesSieve();
            if (this.initSuccessful) {
                this.countPrimes();
                this.cacheStatus = PrimesCache.CACHING_FINISHED;
            }
            else {
                maxNumInCache = 0;
                this.numberOfPrimes = 0;
            }
        }
        else if (maxNumInCache === undefined) {
            let __args = arguments;
            if (this.maxNumInCache === undefined) {
                this.maxNumInCache = 0;
            }
            if (this.numberOfPrimes === undefined) {
                this.numberOfPrimes = 0;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.cacheStatus === undefined) {
                this.cacheStatus = false;
            }
            if (this.isPrime === undefined) {
                this.isPrime = null;
            }
            if (this.initSuccessful === undefined) {
                this.initSuccessful = false;
            }
            this.initSuccessful = false;
            this.cacheStatus = PrimesCache.CACHE_EMPTY;
            this.maxNumInCache = PrimesCache.DEFAULT_MAX_NUM_IN_CACHE;
            this.EratosthenesSieve();
            if (this.initSuccessful) {
                this.countPrimes();
                this.cacheStatus = PrimesCache.CACHING_FINISHED;
            }
            else {
                this.maxNumInCache = 0;
                this.numberOfPrimes = 0;
            }
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Returns computing time of Eratosthenes Sieve
     * @return {number} Computing time in seconds
     */
    getComputingTime() {
        return this.computingTime;
    }
    /**
     * Returns cache status
     * @return {boolean} PrimesCache.CACHE_EMPTY or PrimesCache.CACHING_FINISHED;
     */
    getCacheStatus() {
        return this.cacheStatus;
    }
    /**
     * Returns number of found primes.
     * @return {number} Number of found primes.
     */
    getNumberOfPrimes() {
        return this.numberOfPrimes;
    }
    /**
     * Returns cache range.
     * @return {number} Maximum integera number in cache/
     */
    getMaxNumInCache() {
        return this.maxNumInCache;
    }
    /**
     * Check whether given number is prime
     * @param {number} n Given integer number.
     * @return {number} PrimesCache.IS_PRIME or PrimesCache.IS_NOT_PRIME or PrimesCache.NOT_IN_CACHE
     */
    primeTest(n) {
        if (n <= 1)
            return PrimesCache.IS_NOT_PRIME;
        if ((n <= this.maxNumInCache) && (this.cacheStatus = PrimesCache.CACHING_FINISHED))
            if (this.isPrime[n] === true)
                return PrimesCache.IS_PRIME;
            else
                return PrimesCache.IS_NOT_PRIME;
        else
            return PrimesCache.NOT_IN_CACHE;
    }
    /**
     * Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     *
     * @return {boolean} Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     */
    isInitSuccessful() {
        return this.initSuccessful;
    }
    /**
     * Gets underlying primes cache boolean table
     * @return {boolean[]} Underlying primes cache boolean table
     */
    getPrimes() {
        return this.isPrime;
    }
}
exports.PrimesCache = PrimesCache;
/**
 * Default range of integer to store in cache
 */
PrimesCache.DEFAULT_MAX_NUM_IN_CACHE = 10000000;
/**
 * Empty cache status
 */
PrimesCache.CACHE_EMPTY = false;
/**
 * Cache ready to use
 */
PrimesCache.CACHING_FINISHED = true;
/**
 * Indicator if given number is a prime
 */
PrimesCache.IS_PRIME = 1;
/**
 * Indicator if given number is not a prime
 */
PrimesCache.IS_NOT_PRIME = 0;
/**
 * Indicator that the value is not stored
 * in cache
 */
PrimesCache.NOT_IN_CACHE = -1;
PrimesCache["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.PrimesCache";
//# sourceMappingURL=PrimesCache.js.map