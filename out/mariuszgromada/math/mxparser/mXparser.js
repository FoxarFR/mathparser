"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mXparser = void 0;
const BinaryRelations_1 = require("./mathcollection/BinaryRelations");
const NumberTheory_1 = require("./mathcollection/NumberTheory");
const PrimesCache_1 = require("./mathcollection/PrimesCache");
const ProbabilityDistributions_1 = require("./mathcollection/ProbabilityDistributions");
const BinaryRelation_1 = require("./parsertokens/BinaryRelation");
const BitwiseOperator_1 = require("./parsertokens/BitwiseOperator");
const BooleanOperator_1 = require("./parsertokens/BooleanOperator");
const CalculusOperator_1 = require("./parsertokens/CalculusOperator");
const ConstantValue_1 = require("./parsertokens/ConstantValue");
const Function1Arg_1 = require("./parsertokens/Function1Arg");
const Function2Arg_1 = require("./parsertokens/Function2Arg");
const Function3Arg_1 = require("./parsertokens/Function3Arg");
const FunctionVariadic_1 = require("./parsertokens/FunctionVariadic");
const Operator_1 = require("./parsertokens/Operator");
const ParserSymbol_1 = require("./parsertokens/ParserSymbol");
const RandomVariable_1 = require("./parsertokens/RandomVariable");
const Unit_1 = require("./parsertokens/Unit");
const Expression_1 = require("./Expression");
const Constant_1 = require("./Constant");
const FunctionConstants_1 = require("./FunctionConstants");
const RecursiveArgument_1 = require("./RecursiveArgument");
const ArgumentConstants_1 = require("./ArgumentConstants");
const mXparserConstants_1 = require("./mXparserConstants");
const Miscellaneous_1 = require("./Miscellaneous");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
/**
 * mXparser class provides usefull methods when parsing, calculating or
 * parameters transforming.
 *
 * @author         <b>Mariusz Gromada</b><br>
 * <a href="mailto:mariuszgromada.org@gmail.com">mariuszgromada.org@gmail.com</a><br>
 * <a href="http://github.com/mariuszgromada/MathParser.org-mXparser" target="_blank">mXparser on GitHub</a><br>
 *
 * @version        4.4.2
 *
 * @see RecursiveArgument
 * @see Expression
 * @see Function
 * @see Constant
 * @class
 */
class mXparser {
    static mXparserExp_$LI$() { if (mXparser.mXparserExp == null) {
        mXparser.mXparserExp = new Expression_1.Expression();
    } return mXparser.mXparserExp; }
    static initPrimesCache$() {
        mXparser.primesCache = new PrimesCache_1.PrimesCache();
    }
    static initPrimesCache$int(mximumNumberInCache) {
        mXparser.primesCache = new PrimesCache_1.PrimesCache(mximumNumberInCache);
    }
    static initPrimesCache$org_mariuszgromada_math_mxparser_mathcollection_PrimesCache(primesCache) {
        mXparser.primesCache = primesCache;
    }
    /**
     * Initialization of prime numbers cache.
     * @param {PrimesCache} primesCache The primes cache object
     * @see PrimesCache
     */
    static initPrimesCache(primesCache) {
        if (((primesCache != null && primesCache instanceof PrimesCache_1.PrimesCache) || primesCache === null)) {
            return mXparser.initPrimesCache$org_mariuszgromada_math_mxparser_mathcollection_PrimesCache(primesCache);
        }
        else if (((typeof primesCache === 'number') || primesCache === null)) {
            return mXparser.initPrimesCache$int(primesCache);
        }
        else if (primesCache === undefined) {
            return mXparser.initPrimesCache$();
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     *
     * @return {boolean} Returns true in case when primes cache initialization was successful,
     * otherwise returns false.
     */
    static isInitPrimesCacheSuccessful() {
        if (mXparser.primesCache == null)
            return false;
        {
            return mXparser.primesCache.isInitSuccessful();
        }
        ;
    }
    /**
     * Sets {@link mXparser#primesCache} to null
     */
    static setNoPrimesCache() {
        mXparser.primesCache = null;
    }
    /**
     * Returns maximum integer number in primes cache
     * @return {number} If primes cache was initialized then maximum number in
     * primes cache, otherwise {@link mXparser#PRIMES_CACHE_NOT_INITIALIZED}
     */
    static getMaxNumInPrimesCache() {
        if (mXparser.primesCache != null) {
            {
                return mXparser.primesCache.getMaxNumInCache();
            }
            ;
        }
        else
            return mXparserConstants_1.mXparserConstants.PRIMES_CACHE_NOT_INITIALIZED;
    }
    /**
     * Gets maximum threads number
     *
     * @return {number} Threads number.
     */
    static getThreadsNumber() {
        return mXparserConstants_1.mXparserConstants.THREADS_NUMBER_$LI$();
    }
    /**
     * Sets default threads number
     */
    static setDefaultThreadsNumber() {
        mXparserConstants_1.mXparserConstants.THREADS_NUMBER = 1;
    }
    /**
     * Sets threads number
     *
     * @param {number} threadsNumber  Thread number.
     */
    static setThreadsNumber(threadsNumber) {
        if (threadsNumber > 0)
            mXparserConstants_1.mXparserConstants.THREADS_NUMBER = threadsNumber;
    }
    /**
     * Calculates function f(x0) (given as expression) assigning Argument x = x0;
     *
     *
     * @param      {Expression} f                   the expression
     * @param      {Argument} x                   the argument
     * @param      {number} x0                  the argument value
     *
     * @return     {number} f.calculate()
     *
     * @see        Expression
     */
    static getFunctionValue(f, x, x0) {
        x.setArgumentValue(x0);
        return f.calculate();
    }
    /**
     * Returns array of double values of the function f(i)
     * calculated on the range: i = from to i = to by step = delta
     *
     * @param {Expression} f            Function expression
     * @param {Argument} index        Index argument
     * @param {number} from         'from' value
     * @param {number} to           'to' value
     * @param {number} delta        'delta' step definition
     * @return             {double[]} Array of function values
     */
    static getFunctionValues(f, index, from, to, delta) {
        if (( /* isNaN */isNaN(delta)) || ( /* isNaN */isNaN(from)) || ( /* isNaN */isNaN(to)) || (delta === 0))
            return null;
        let n = 0;
        let values;
        if ((to >= from) && (delta > 0)) {
            for (let i = from; i < to; i += delta) {
                n++;
            }
            n++;
            values = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(n);
            let j = 0;
            for (let i = from; i < to; i += delta) {
                {
                    values[j] = mXparser.getFunctionValue(f, index, i);
                    j++;
                }
                ;
            }
            values[j] = mXparser.getFunctionValue(f, index, to);
        }
        else if ((to <= from) && (delta < 0)) {
            for (let i = from; i > to; i += delta) {
                n++;
            }
            n++;
            values = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(n);
            let j = 0;
            for (let i = from; i > to; i += delta) {
                {
                    values[j] = mXparser.getFunctionValue(f, index, i);
                    j++;
                }
                ;
            }
            values[j] = mXparser.getFunctionValue(f, index, to);
        }
        else if (from === to) {
            n = 1;
            values = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(n);
            values[0] = mXparser.getFunctionValue(f, index, from);
        }
        else
            values = null;
        return values;
    }
    /**
     * Modifies random generator used by the ProbabilityDistributions class.
     *
     * @param {Random} randomGenerator      Random generator.
     * @see ProbabilityDistributions
     * @see ProbabilityDistributions#randomGenerator
     */
    static setRandomGenerator(randomGenerator) {
        if (randomGenerator != null)
            ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator = randomGenerator;
    }
    /**
     * Sets comparison mode to EXACT.
     * @see BinaryRelations
     */
    static setExactComparison() {
        BinaryRelations_1.BinaryRelations.setExactComparison();
    }
    /**
     * Sets comparison mode to EPSILON.
     * @see BinaryRelations
     */
    static setEpsilonComparison() {
        BinaryRelations_1.BinaryRelations.setEpsilonComparison();
    }
    /**
     * Sets epsilon value.
     * @param {number} epsilon   Epsilon value (grater than 0).
     *
     * @see #setEpsilonComparison()
     * @see BinaryRelations
     */
    static setEpsilon(epsilon) {
        BinaryRelations_1.BinaryRelations.setEpsilon(epsilon);
    }
    /**
     * Sets default epsilon value.
     *
     * @see #setEpsilonComparison()
     * @see BinaryRelations#DEFAULT_COMPARISON_EPSILON
     * @see BinaryRelations
     */
    static setDefaultEpsilon() {
        BinaryRelations_1.BinaryRelations.setDefaultEpsilon();
    }
    /**
     * Returns current epsilon value.
     * @return  {number} Returns current epsilon value.
     *
     * @see #setEpsilonComparison()
     * @see BinaryRelations
     */
    static getEpsilon() {
        return BinaryRelations_1.BinaryRelations.getEpsilon();
    }
    /**
     * Checks if epsilon comparison mode is active;
     * @return  {boolean} True if epsilon mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     * @see BinaryRelations
     */
    static checkIfEpsilonMode() {
        return BinaryRelations_1.BinaryRelations.checkIfEpsilonMode();
    }
    /**
     * Checks if exact comparison mode is active;
     * @return  {boolean} True if exact mode is active, otherwise returns false.
     * @see #setEpsilonComparison()
     * @see #setExactComparison()
     * @see BinaryRelations
     */
    static checkIfExactMode() {
        return BinaryRelations_1.BinaryRelations.checkIfExactMode();
    }
    /**
     * Enables ULP rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 0.1 + 0.1 + 0.1 = 0.3
     */
    static enableUlpRounding() {
        mXparserConstants_1.mXparserConstants.ulpRounding = true;
    }
    /**
     * Disables ULP rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Disabling this mode 0.1 + 0.1 + 0.1 will be slightly different than 0.3.
     */
    static disableUlpRounding() {
        mXparserConstants_1.mXparserConstants.ulpRounding = false;
    }
    /**
     * Enables / disables ULP rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Disabling this mode 0.1 + 0.1 + 0.1 will be slightly different than 0.3.
     *
     * @param {boolean} ulpRoundingState    True to enable, false to disable
     */
    static setUlpRounding(ulpRoundingState) {
        mXparserConstants_1.mXparserConstants.ulpRounding = ulpRoundingState;
    }
    /**
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 0.1 + 0.1 + 0.1 = 0.3
     *
     * @return {boolean} True if ULP rounding is enabled, otherwise false.
     */
    static checkIfUlpRounding() {
        return mXparserConstants_1.mXparserConstants.ulpRounding;
    }
    /**
     * Enables canonical rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent canonical rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 2.5 - 2.2 = 0.3
     */
    static enableCanonicalRounding() {
        mXparserConstants_1.mXparserConstants.canonicalRounding = true;
    }
    /**
     * Disables canonical rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent canonical rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Using this mode 2.5 - 2.2 = 0.3
     */
    static disableCanonicalRounding() {
        mXparserConstants_1.mXparserConstants.canonicalRounding = false;
    }
    /**
     * Enables / disables canonical rounding.
     * Double floating-point precision arithmetic causes
     * rounding problems, i.e. 0.1 + 0.1 + 0.1 is slightly different than 0.3,
     * additionally doubles are having a lot of advantages
     * providing flexible number representation regardless of
     * number size. mXparser is fully based on double numbers
     * and that is why is providing intelligent ULP rounding
     * to minimize misleading results. By default this option is
     * enabled resulting in automatic rounding only in some cases.
     * Disabling this mode 0.1 + 0.1 + 0.1 will be slightly different than 0.3.
     *
     * @param {boolean} canonicalRoundingState    True to enable, false to disable
     */
    static setCanonicalRounding(canonicalRoundingState) {
        mXparserConstants_1.mXparserConstants.canonicalRounding = canonicalRoundingState;
    }
    /**
     * Enables almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @see mXparser#setEpsilon(double)
     * @see mXparser#getEpsilon()
     * @see Expression#calculate()
     */
    static enableAlmostIntRounding() {
        mXparserConstants_1.mXparserConstants.almostIntRounding = true;
    }
    /**
     * Disables almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @see mXparser#setEpsilon(double)
     * @see mXparser#getEpsilon()
     * @see Expression#calculate()
     */
    static disableAlmostIntRounding() {
        mXparserConstants_1.mXparserConstants.almostIntRounding = false;
    }
    /**
     * Enables / disables almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @param {boolean} almostIntRoundingState    True to enable, false to disable
     */
    static setAlmostIntRounding(almostIntRoundingState) {
        mXparserConstants_1.mXparserConstants.almostIntRounding = almostIntRoundingState;
    }
    /**
     * Returns state of almost integer rounding option causing
     * rounding final calculation result to precise integer
     * if and only if result is very close to integer.
     * Very close condition depends on epsilon.
     *
     * @return {boolean} true if option enabled, false otherwise
     *
     * @see mXparser#setEpsilon(double)
     * @see mXparser#getEpsilon()
     * @see Expression#calculate()
     */
    static checkIfAlmostIntRounding() {
        return mXparserConstants_1.mXparserConstants.almostIntRounding;
    }
    /**
     * Internal limit to avoid infinite loops while calculating
     * expression defined in the way shown by below examples.
     *
     * Argument x = new Argument("x = 2*y");
     * Argument y = new Argument("y = 2*x");
     * x.addDefinitions(y);
     * y.addDefinitions(x);
     *
     * Function f = new Function("f(x) = 2*g(x)");
     * Function g = new Function("g(x) = 2*f(x)");
     * f.addDefinitions(g);
     * g.addDefinitions(f);
     *
     * Currently does not affect properly defined recursive mode.
     *
     * @param {number} maxAllowedRecursionDepth  Maximum number of allowed recursion calls
     */
    static setMaxAllowedRecursionDepth(maxAllowedRecursionDepth) {
        mXparserConstants_1.mXparserConstants.MAX_RECURSION_CALLS = maxAllowedRecursionDepth;
    }
    /**
     * Internal limit to avoid infinite loops while calculating
     * expression defined in the way shown by below examples.
     *
     * Argument x = new Argument("x = 2*y");
     * Argument y = new Argument("y = 2*x");
     * x.addDefinitions(y);
     * y.addDefinitions(x);
     *
     * Function f = new Function("f(x) = 2*g(x)");
     * Function g = new Function("g(x) = 2*f(x)");
     * f.addDefinitions(g);
     * g.addDefinitions(f);
     *
     * Currently does not affect properly defined recursive mode.
     *
     * @return {number} Max allowed recursion calls
     */
    static getMaxAllowedRecursionDepth() {
        return mXparserConstants_1.mXparserConstants.MAX_RECURSION_CALLS_$LI$();
    }
    /**
     * Set mXparser to operate in radians mode for
     * trigonometric functions
     */
    static setRadiansMode() {
        mXparserConstants_1.mXparserConstants.degreesMode = false;
    }
    /**
     * Set mXparser to operate in degrees mode for
     * trigonometric functions
     */
    static setDegreesMode() {
        mXparserConstants_1.mXparserConstants.degreesMode = true;
    }
    /**
     * Sets initial search size for the toFraction method
     *
     * @param {number} n initial search size, has to be non-zero positive.
     * @see NumberTheory#toFraction(double)
     */
    static setToFractionInitSearchSize(n) {
        NumberTheory_1.NumberTheory.setToFractionInitSearchSize(n);
    }
    /**
     * Gets initial search size used by the toFraction method
     *
     * @return {number} initial search size used by the toFraction method
     * @see NumberTheory#toFraction(double)
     */
    static getToFractionInitSearchSize() {
        return NumberTheory_1.NumberTheory.getToFractionInitSearchSize();
    }
    /**
     * Removes built-in tokens form the list of tokens recognized by the parsers.
     * Procedure affects only tokens classified to built-in functions, built-in
     * constants, built-in units, built-in random variables.
     *
     * @param {java.lang.String[]} tokens  List of tokens to remove.
     */
    static removeBuiltinTokens(...tokens) {
        if (tokens == null)
            return;
        {
            for (let index189 = 0; index189 < tokens.length; index189++) {
                let token = tokens[index189];
                if (token != null)
                    if (token.length > 0)
                        if (!mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().contains(token))
                            mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().add(token);
            }
            mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
        }
        ;
    }
    /**
     * Un-marks tokens previously marked to be removed.
     * @param {java.lang.String[]} tokens List of tokens to un-mark.
     */
    static unremoveBuiltinTokens(...tokens) {
        if (tokens == null)
            return;
        if (tokens.length === 0)
            return;
        if (mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().size() === 0)
            return;
        {
            for (let index190 = 0; index190 < tokens.length; index190++) {
                let token = tokens[index190];
                if (token != null)
                    mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().remove(token);
            }
            mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
        }
        ;
    }
    /**
     * Un-marks all tokens previously marked to be removed.
     */
    static unremoveAllBuiltinTokens() {
        {
            mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().clear();
            mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
        }
        ;
    }
    /**
     * Returns current list of tokens marked to be removed.
     * @return {java.lang.String[]} Current list of tokens marked to be removed
     */
    static getBuiltinTokensToRemove() {
        {
            const tokensNum = mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().size();
            const tokensToRemoveArray = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })(tokensNum);
            for (let i = 0; i < tokensNum; i++) {
                tokensToRemoveArray[i] = mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().get(i);
            }
            return tokensToRemoveArray;
        }
        ;
    }
    static modifyBuiltinToken$java_lang_String$java_lang_String(currentToken, newToken) {
        if (currentToken == null)
            return;
        if (currentToken.length === 0)
            return;
        if (newToken == null)
            return;
        if (newToken.length === 0)
            return;
        {
            for (let index191 = mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().iterator(); index191.hasNext();) {
                let tm = index191.next();
                if (tm.currentToken === currentToken)
                    return;
            }
            const tma = new Miscellaneous_1.TokenModification();
            tma.currentToken = currentToken;
            tma.newToken = newToken;
            tma.newTokenDescription = null;
            mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().add(tma);
            mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
        }
        ;
    }
    static modifyBuiltinToken$java_lang_String$java_lang_String$java_lang_String(currentToken, newToken, newTokenDescription) {
        if (currentToken == null)
            return;
        if (currentToken.length === 0)
            return;
        if (newToken == null)
            return;
        if (newToken.length === 0)
            return;
        {
            for (let index192 = mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().iterator(); index192.hasNext();) {
                let tm = index192.next();
                if (tm.currentToken === currentToken)
                    return;
            }
            const tma = new Miscellaneous_1.TokenModification();
            tma.currentToken = currentToken;
            tma.newToken = newToken;
            tma.newTokenDescription = newTokenDescription;
            mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().add(tma);
            mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
        }
        ;
    }
    /**
     * Method to change definition of built-in token - more precisely
     * using this method allows to modify token string recognized by the parser
     * (i.e. sin(x) to sinus(x)).
     * Procedure affects only tokens classified to built-in functions, built-in
     * constants, built-in units, built-in random variables.
     * @param {string} currentToken          Current token name
     * @param {string} newToken              New token name
     * @param {string} newTokenDescription   New token description (if null the previous one will be used)
     */
    static modifyBuiltinToken(currentToken, newToken, newTokenDescription) {
        if (((typeof currentToken === 'string') || currentToken === null) && ((typeof newToken === 'string') || newToken === null) && ((typeof newTokenDescription === 'string') || newTokenDescription === null)) {
            return mXparser.modifyBuiltinToken$java_lang_String$java_lang_String$java_lang_String(currentToken, newToken, newTokenDescription);
        }
        else if (((typeof currentToken === 'string') || currentToken === null) && ((typeof newToken === 'string') || newToken === null) && newTokenDescription === undefined) {
            return mXparser.modifyBuiltinToken$java_lang_String$java_lang_String(currentToken, newToken);
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Un-marks tokens previously marked to be modified.
     * @param {java.lang.String[]} currentOrNewTokens   List of tokens to be un-marked (current or modified).
     */
    static unmodifyBuiltinTokens(...currentOrNewTokens) {
        if (currentOrNewTokens == null)
            return;
        if (currentOrNewTokens.length === 0)
            return;
        if (mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().size() === 0)
            return;
        {
            const toRemove = (new j4ts_1.java.util.ArrayList());
            for (let index193 = 0; index193 < currentOrNewTokens.length; index193++) {
                let token = currentOrNewTokens[index193];
                if (token != null)
                    if (token.length > 0) {
                        for (let index194 = mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().iterator(); index194.hasNext();) {
                            let tm = index194.next();
                            if ((token === tm.currentToken) || (token === tm.newToken))
                                toRemove.add(tm);
                        }
                    }
            }
            for (let index195 = toRemove.iterator(); index195.hasNext();) {
                let tm = index195.next();
                mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().remove(tm);
            }
            mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
        }
        ;
    }
    /**
     * Un-marks all tokens previously marked to be modified.
     */
    static unmodifyAllBuiltinTokens() {
        {
            mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().clear();
            mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
        }
        ;
    }
    /**
     * Return details on tokens marked to be modified.
     * @return {java.lang.String[][]} String[i][0] - current token, String[i][1] - new token,
     * String[i][2] - new token description.
     */
    static getBuiltinTokensToModify() {
        {
            const tokensNum = mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().size();
            const tokensToModifyArray = (function (dims) { let allocate = function (dims) { if (dims.length === 0) {
                return null;
            }
            else {
                let array = [];
                for (let i = 0; i < dims[0]; i++) {
                    array.push(allocate(dims.slice(1)));
                }
                return array;
            } }; return allocate(dims); })([tokensNum, 3]);
            for (let i = 0; i < tokensNum; i++) {
                {
                    const tm = mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().get(i);
                    tokensToModifyArray[i][0] = tm.currentToken;
                    tokensToModifyArray[i][1] = tm.newToken;
                    tokensToModifyArray[i][2] = tm.newTokenDescription;
                }
                ;
            }
            return tokensToModifyArray;
        }
        ;
    }
    /**
     * Sets mXparser to override built-in tokens
     * by user defined tokens.
     */
    static setToOverrideBuiltinTokens() {
        mXparserConstants_1.mXparserConstants.overrideBuiltinTokens = true;
        mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
    }
    /**
     * Sets mXparser not to override built-in tokens
     * by user defined tokens.
     */
    static setNotToOverrideBuiltinTokens() {
        mXparserConstants_1.mXparserConstants.overrideBuiltinTokens = false;
        mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
    }
    /**
     * Checks whether mXparser is set to override built-in tokens.
     *
     * @return {boolean} True if mXparser is set to override built-in tokens by
     * user defined tokens, otherwise false.
     */
    static checkIfsetToOverrideBuiltinTokens() {
        return mXparserConstants_1.mXparserConstants.overrideBuiltinTokens;
    }
    /**
     * Sets default mXparser options
     */
    static setDefaultOptions() {
        mXparser.enableUlpRounding();
        mXparser.enableAlmostIntRounding();
        mXparser.setMaxAllowedRecursionDepth(mXparserConstants_1.mXparserConstants.DEFAULT_MAX_RECURSION_CALLS);
        mXparser.setNotToOverrideBuiltinTokens();
        mXparser.unmodifyAllBuiltinTokens();
        mXparser.setRadiansMode();
        mXparserConstants_1.mXparserConstants.resetCancelCurrentCalculationFlag();
        mXparser.setDefaultEpsilon();
        mXparser.setEpsilonComparison();
        mXparser.setToFractionInitSearchSize(NumberTheory_1.NumberTheory.DEFAULT_TO_FRACTION_INIT_SEARCH_SIZE);
        mXparserConstants_1.mXparserConstants.optionsChangesetNumber++;
    }
    /**
     * Returns token type description.
     *
     * @param {number} tokenTypeId Token type id
     * @return {string} String representing token type description.
     */
    static getTokenTypeDescription(tokenTypeId) {
        let type = "";
        switch ((tokenTypeId)) {
            case ParserSymbol_1.ParserSymbol.TYPE_ID:
                type = ParserSymbol_1.ParserSymbol.TYPE_DESC;
                break;
            case ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID:
                type = "Number";
                break;
            case Operator_1.Operator.TYPE_ID:
                type = Operator_1.Operator.TYPE_DESC;
                break;
            case BooleanOperator_1.BooleanOperator.TYPE_ID:
                type = BooleanOperator_1.BooleanOperator.TYPE_DESC;
                break;
            case BinaryRelation_1.BinaryRelation.TYPE_ID:
                type = BinaryRelation_1.BinaryRelation.TYPE_DESC;
                break;
            case Function1Arg_1.Function1Arg.TYPE_ID:
                type = Function1Arg_1.Function1Arg.TYPE_DESC;
                break;
            case Function2Arg_1.Function2Arg.TYPE_ID:
                type = Function2Arg_1.Function2Arg.TYPE_DESC;
                break;
            case Function3Arg_1.Function3Arg.TYPE_ID:
                type = Function3Arg_1.Function3Arg.TYPE_DESC;
                break;
            case FunctionVariadic_1.FunctionVariadic.TYPE_ID:
                type = FunctionVariadic_1.FunctionVariadic.TYPE_DESC;
                break;
            case CalculusOperator_1.CalculusOperator.TYPE_ID:
                type = CalculusOperator_1.CalculusOperator.TYPE_DESC;
                break;
            case RandomVariable_1.RandomVariable.TYPE_ID:
                type = RandomVariable_1.RandomVariable.TYPE_DESC;
                break;
            case ConstantValue_1.ConstantValue.TYPE_ID:
                type = ConstantValue_1.ConstantValue.TYPE_DESC;
                break;
            case ArgumentConstants_1.ArgumentConstants.TYPE_ID:
                type = ArgumentConstants_1.ArgumentConstants.TYPE_DESC;
                break;
            case RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE:
                type = RecursiveArgument_1.RecursiveArgument.TYPE_DESC_RECURSIVE;
                break;
            case FunctionConstants_1.FunctionConstants.TYPE_ID:
                type = FunctionConstants_1.FunctionConstants.TYPE_DESC;
                break;
            case Constant_1.Constant.TYPE_ID:
                type = Constant_1.Constant.TYPE_DESC;
                break;
            case Unit_1.Unit.TYPE_ID:
                type = Unit_1.Unit.TYPE_DESC;
                break;
            case BitwiseOperator_1.BitwiseOperator.TYPE_ID:
                type = BitwiseOperator_1.BitwiseOperator.TYPE_DESC;
                break;
        }
        return type;
    }
    static numberToHexString$int(number) {
        return j4ts_2.javaemul.internal.IntegerHelper.toHexString(number);
    }
    /**
     * Converts integer number to hex string (plain text)
     *
     * @param {number} number   Integer number
     * @return         {string} Hex string (i.e. FF23)
     */
    static numberToHexString(number) {
        if (((typeof number === 'number') || number === null)) {
            return mXparser.numberToHexString$int(number);
        }
        else if (((typeof number === 'number') || number === null)) {
            return mXparser.numberToHexString$long(number);
        }
        else if (((typeof number === 'number') || number === null)) {
            return mXparser.numberToHexString$double(number);
        }
        else
            throw new Error('invalid overload');
    }
    static numberToHexString$long(number) {
        return j4ts_2.javaemul.internal.LongHelper.toHexString(number);
    }
    static numberToHexString$double(number) {
        return mXparser.numberToHexString$long((n => n < 0 ? Math.ceil(n) : Math.floor(n))(number));
    }
    /**
     * Converts hex string into ASCII string, where each letter is
     * represented by two hex digits (byte) from the hex string.
     *
     * @param {string} hexString   Hex string (i.e. 48656C6C6F)
     * @return         {string} ASCII string (i.e. '48656C6C6F' = 'Hello')
     */
    static hexString2AsciiString(hexString) {
        let hexByteStr;
        let hexByteInt;
        let asciiString = "";
        for (let i = 0; i < hexString.length; i += 2) {
            {
                hexByteStr = hexString.substring(i, i + 2);
                hexByteInt = j4ts_2.javaemul.internal.IntegerHelper.parseInt(hexByteStr, 16);
                asciiString = asciiString + String.fromCharCode(hexByteInt);
            }
            ;
        }
        return asciiString;
    }
    static numberToAsciiString$int(number) {
        return mXparser.hexString2AsciiString(mXparser.numberToHexString$int(number));
    }
    /**
     * Converts number into ASCII string, where each letter is
     * represented by two hex digits (byte) from the hex representation
     * of the original number
     *
     * @param {number} number   Integer number (i.e. 310939249775 = '48656C6C6F')
     * @return         {string} ASCII string (i.e. '48656C6C6F' = 'Hello')
     */
    static numberToAsciiString(number) {
        if (((typeof number === 'number') || number === null)) {
            return mXparser.numberToAsciiString$int(number);
        }
        else if (((typeof number === 'number') || number === null)) {
            return mXparser.numberToAsciiString$long(number);
        }
        else if (((typeof number === 'number') || number === null)) {
            return mXparser.numberToAsciiString$double(number);
        }
        else
            throw new Error('invalid overload');
    }
    static numberToAsciiString$long(number) {
        return mXparser.hexString2AsciiString(mXparser.numberToHexString$long(number));
    }
    static numberToAsciiString$double(number) {
        return mXparser.hexString2AsciiString(mXparser.numberToHexString$double(number));
    }
    static convOthBase2Decimal$java_lang_String$int(numberLiteral, numeralSystemBase) {
        return NumberTheory_1.NumberTheory.convOthBase2Decimal$java_lang_String$int(numberLiteral, numeralSystemBase);
    }
    /**
     * Other base (base between 1 and 36) number literal conversion to decimal number.
     *
     * @param {string} numberLiteral    Number literal in given numeral system with base between
     * 1 and 36. Digits: 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7,
     * 8:8, 9:9, 10:A, 11:B, 12:C, 13:D, 14:E, 15:F, 16:G, 17:H,
     * 18:I, 19:J, 20:K, 21:L, 22:M, 23:N, 24:O, 25:P, 26:Q, 27:R,
     * 28:S, 29:T, 30:U, 31:V, 32:W, 33:X, 34:Y, 35:Z
     * @param {number} numeralSystemBase             Numeral system base, between 1 and 36
     * @return                 {number} Decimal number after conversion. If conversion was not
     * possible the Double.NaN is returned.
     */
    static convOthBase2Decimal(numberLiteral, numeralSystemBase) {
        if (((typeof numberLiteral === 'string') || numberLiteral === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null)) {
            return mXparser.convOthBase2Decimal$java_lang_String$int(numberLiteral, numeralSystemBase);
        }
        else if (((typeof numberLiteral === 'number') || numberLiteral === null) && ((numeralSystemBase != null && numeralSystemBase instanceof Array && (numeralSystemBase.length == 0 || numeralSystemBase[0] == null || (typeof numeralSystemBase[0] === 'number'))) || numeralSystemBase === null)) {
            return mXparser.convOthBase2Decimal$int$int_A(numberLiteral, ...numeralSystemBase);
        }
        else if (((typeof numberLiteral === 'number') || numberLiteral === null) && ((numeralSystemBase != null && numeralSystemBase instanceof Array && (numeralSystemBase.length == 0 || numeralSystemBase[0] == null || (typeof numeralSystemBase[0] === 'number'))) || numeralSystemBase === null)) {
            return mXparser.convOthBase2Decimal$double$double_A(numberLiteral, ...numeralSystemBase);
        }
        else if (((typeof numberLiteral === 'string') || numberLiteral === null) && numeralSystemBase === undefined) {
            return mXparser.convOthBase2Decimal$java_lang_String(numberLiteral);
        }
        else
            throw new Error('invalid overload');
    }
    static convOthBase2Decimal$java_lang_String(numberLiteral) {
        return NumberTheory_1.NumberTheory.convOthBase2Decimal$java_lang_String(numberLiteral);
    }
    static convOthBase2Decimal$int$int_A(numeralSystemBase, ...digits) {
        return NumberTheory_1.NumberTheory.convOthBase2Decimal$int$int_A.apply(null, [numeralSystemBase].concat(digits));
    }
    static convOthBase2Decimal$double$double_A(numeralSystemBase, ...digits) {
        return NumberTheory_1.NumberTheory.convOthBase2Decimal$double$double_A.apply(null, [numeralSystemBase].concat(digits));
    }
    static convDecimal2OthBase$double$int(decimalNumber, numeralSystemBase) {
        return NumberTheory_1.NumberTheory.convDecimal2OthBase$double$int(decimalNumber, numeralSystemBase);
    }
    static convDecimal2OthBase$double$int$int(decimalNumber, numeralSystemBase, format) {
        return NumberTheory_1.NumberTheory.convDecimal2OthBase$double$int$int(decimalNumber, numeralSystemBase, format);
    }
    /**
     * Decimal number to other numeral system conversion with base
     * between 1 and 36.
     *
     * @param {number} decimalNumber    Decimal number
     * @param {number} numeralSystemBase       Numeral system base between 1 and 36
     * @param {number} format     If 1 then always bxx. is used, i.e. b1. or b16.
     * If 2 then for binary b. is used, for octal o. is used,
     * for hexadecimal h. is used, otherwise bxx. is used
     * where xx is the numeral system base specification.
     *
     * @return           {string} Number literal representing decimal number in
     * given numeral numeral system.
     *
     * Base format: b1. b2. b. b3. b4. b5. b6. b7. b8. o. b9. b10. b11. b12.
     * b13. b14. b15. b16. h. b17. b18. b19. b20. b21. b22. b23. b24. b25. b26.
     * b27. b28. b29. b30. b31. b32. b33. b34. b35. b36.
     *
     * Digits: 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:A, 11:B, 12:C,
     * 13:D, 14:E, 15:F, 16:G, 17:H, 18:I, 19:J, 20:K, 21:L, 22:M, 23:N, 24:O, 25:P,
     * 26:Q, 27:R, 28:S, 29:T, 30:U, 31:V, 32:W, 33:X, 34:Y, 35:Z
     *
     * If conversion was not possible the "NaN" string is returned.
     */
    static convDecimal2OthBase(decimalNumber, numeralSystemBase, format) {
        if (((typeof decimalNumber === 'number') || decimalNumber === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null) && ((typeof format === 'number') || format === null)) {
            return mXparser.convDecimal2OthBase$double$int$int(decimalNumber, numeralSystemBase, format);
        }
        else if (((typeof decimalNumber === 'number') || decimalNumber === null) && ((typeof numeralSystemBase === 'number') || numeralSystemBase === null) && format === undefined) {
            return mXparser.convDecimal2OthBase$double$int(decimalNumber, numeralSystemBase);
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Converts double value to its fraction representation.
     *
     * @param {number} value Value to be converted
     *
     * @return {double[]} Array representing fraction. Sign at index 0,
     * numerator at index 1, denominator at index 2.
     * If conversion is not possible then Double.NaN is
     * assigned to all the fields.
     */
    static toFraction(value) {
        return NumberTheory_1.NumberTheory.toFraction(value);
    }
    /**
     * Converts double value to its mixed fraction representation.
     *
     * @param {number} value Value to be converted
     *
     * @return {double[]} Array representing fraction.
     * Sign at index 0, whole number at index 1,
     * numerator at index 2, denominator at index 3.
     * If conversion is not possible then Double.NaN is
     * assigned to both numerator and denominator.
     */
    static toMixedFraction(value) {
        return NumberTheory_1.NumberTheory.toMixedFraction(value);
    }
    /**
     * Converts array representing fraction to fraction string representation.
     *
     * @param {double[]} fraction    Array representing fraction (including mix fractions)
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toFraction(double)
     * @see NumberTheory#toMixedFraction(double)
     */
    static fractionToString(fraction) {
        return NumberTheory_1.NumberTheory.fractionToString(fraction);
    }
    /**
     * Converts number to its fraction string representation.
     *
     * @param {number} value   Given number
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toFraction(double)
     * @see NumberTheory#fractionToString(double[])
     */
    static toFractionString(value) {
        return NumberTheory_1.NumberTheory.toFractionString(value);
    }
    /**
     * Converts number to its mixed fraction string representation.
     *
     * @param {number} value   Given number
     * @return  {string} String representation of fraction.
     *
     * @see NumberTheory#toMixedFraction(double)
     * @see NumberTheory#fractionToString(double[])
     */
    static toMixedFractionString(value) {
        return NumberTheory_1.NumberTheory.toMixedFractionString(value);
    }
    /**
     * Resets console output string, console output
     * string is being built by consolePrintln(), consolePrint().
     *
     * @see mXparser#consolePrint(Object)
     * @see mXparser#consolePrintln(Object)
     * @see mXparser#consolePrintln()
     * @see mXparser#resetConsoleOutput()
     */
    static resetConsoleOutput() {
        {
            mXparserConstants_1.mXparserConstants.CONSOLE_OUTPUT = "";
            mXparserConstants_1.mXparserConstants.CONSOLE_ROW_NUMBER = 1;
        }
        ;
    }
    /**
     * Sets default console prefix.
     */
    static setDefaultConsolePrefix() {
        {
            mXparserConstants_1.mXparserConstants.CONSOLE_PREFIX = "[mXparser-v." + mXparserConstants_1.mXparserConstants.VERSION + "] ";
        }
        ;
    }
    /**
     * Sets default console output string prefix.
     */
    static setDefaultConsoleOutputPrefix() {
        {
            mXparserConstants_1.mXparserConstants.CONSOLE_OUTPUT_PREFIX = "[mXparser-v." + mXparserConstants_1.mXparserConstants.VERSION + "] ";
        }
        ;
    }
    /**
     * Sets console prefix.
     *
     * @param {string} consolePrefix String containing console prefix definition.
     */
    static setConsolePrefix(consolePrefix) {
        {
            mXparserConstants_1.mXparserConstants.CONSOLE_PREFIX = consolePrefix;
        }
        ;
    }
    /**
     * Sets console output string prefix.
     *
     * @param {string} consoleOutputPrefix String containing console output prefix definition.
     */
    static setConsoleOutputPrefix(consoleOutputPrefix) {
        {
            mXparserConstants_1.mXparserConstants.CONSOLE_OUTPUT_PREFIX = consoleOutputPrefix;
        }
        ;
    }
    /**
     * Returns console output string, console output string
     * is being built by consolePrintln(), consolePrint().
     *
     * @return {string} Console output string
     *
     * @see mXparser#consolePrint(Object)
     * @see mXparser#consolePrintln(Object)
     * @see mXparser#consolePrintln()
     * @see mXparser#resetConsoleOutput()
     */
    static getConsoleOutput() {
        return mXparserConstants_1.mXparserConstants.CONSOLE_OUTPUT;
    }
    static getHelp$() {
        {
            return mXparser.mXparserExp_$LI$().getHelp$();
        }
        ;
    }
    static getHelp$java_lang_String(word) {
        {
            return mXparser.mXparserExp_$LI$().getHelp$java_lang_String(word);
        }
        ;
    }
    /**
     * General mXparser expression help - in-line key word searching
     * @param   {string} word    Key word to be searched
     * @return  {string} String with all help content
     * lines containing given keyword
     */
    static getHelp(word) {
        if (((typeof word === 'string') || word === null)) {
            return mXparser.getHelp$java_lang_String(word);
        }
        else if (word === undefined) {
            return mXparser.getHelp$();
        }
        else
            throw new Error('invalid overload');
    }
    static consolePrintHelp$() {
        console.info(mXparser.getHelp$());
    }
    static consolePrintHelp$java_lang_String(word) {
        console.info(mXparser.getHelp$java_lang_String(word));
    }
    /**
     * Prints filtered help content.
     * @param {string} word      Key word.
     */
    static consolePrintHelp(word) {
        if (((typeof word === 'string') || word === null)) {
            return mXparser.consolePrintHelp$java_lang_String(word);
        }
        else if (word === undefined) {
            return mXparser.consolePrintHelp$();
        }
        else
            throw new Error('invalid overload');
    }
    static getKeyWords$() {
        {
            return mXparser.mXparserExp_$LI$().getKeyWords$();
        }
        ;
    }
    static getKeyWords$java_lang_String(query) {
        {
            return mXparser.mXparserExp_$LI$().getKeyWords$java_lang_String(query);
        }
        ;
    }
    /**
     * Returns list of key words known to the parser
     *
     * @param {string} query Give any string to filter list of key words against this string.
     * User more precise syntax: str=tokenString, desc=tokenDescription,
     * syn=TokenSyntax, sin=tokenSince, wid=wordId, tid=wordTypeId
     * to narrow the result.
     *
     * @return      {*} List of keywords known to the parser filter against query string.
     *
     * @see KeyWord
     * @see KeyWord#wordTypeId
     * @see mXparser#getHelp(String)
     */
    static getKeyWords(query) {
        if (((typeof query === 'string') || query === null)) {
            return mXparser.getKeyWords$java_lang_String(query);
        }
        else if (query === undefined) {
            return mXparser.getKeyWords$();
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Prints tokens to the console.
     * @param {*} tokens   Tokens list.
     *
     * @see Expression#getCopyOfInitialTokens()
     * @see Token
     */
    static consolePrintTokens(tokens) {
        Expression_1.Expression.showTokens(tokens);
    }
    /**
     * Gets license info
     *
     * @return     {string} license info as string
     */
    static getLicense() {
        return mXparserConstants_1.mXparserConstants.LICENSE_$LI$();
    }
    /**
     * Waits given number of milliseconds
     *
     * @param {number} n Number of milliseconds
     */
    static wait(n) {
        let t0;
        let t1;
        t0 = j4ts_1.java.lang.System.currentTimeMillis();
        do {
            {
                t1 = j4ts_1.java.lang.System.currentTimeMillis();
            }
        } while ((t1 - t0 < n));
    }
}
exports.mXparser = mXparser;
/**
 * Prime numbers cache
 */
mXparser.primesCache = null;
mXparser["__class"] = "org.mariuszgromada.math.mxparser.mXparser";
//# sourceMappingURL=mXparser.js.map