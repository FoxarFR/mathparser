"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculus = void 0;
const Argument_1 = require("../Argument");
const Expression_1 = require("../Expression");
const mXparserConstants_1 = require("../mXparserConstants");
const mXparser_1 = require("../mXparser");
const ProbabilityDistributions_1 = require("./ProbabilityDistributions");
const MathFunctions_1 = require("./MathFunctions");
const j4ts_1 = require("j4ts/j4ts");
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
class Calculus {
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
    static integralTrapezoid(f, x, a, b, eps, maxSteps) {
        let h = 0.5 * (b - a);
        let s = mXparser_1.mXparser.getFunctionValue(f, x, a) + mXparser_1.mXparser.getFunctionValue(f, x, b) + 2 * mXparser_1.mXparser.getFunctionValue(f, x, a + h);
        let intF = s * h * 0.5;
        let intFprev = 0;
        let t = a;
        let i;
        let j;
        let n = 1;
        for (i = 1; i <= maxSteps; i++) {
            {
                n += n;
                t = a + 0.5 * h;
                intFprev = intF;
                for (j = 1; j <= n; j++) {
                    {
                        if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                        s += 2 * mXparser_1.mXparser.getFunctionValue(f, x, t);
                        t += h;
                    }
                    ;
                }
                h *= 0.5;
                intF = s * h * 0.5;
                if (Math.abs(intF - intFprev) <= eps)
                    return intF;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
            ;
        }
        return intF;
    }
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
    static derivative(f, x, x0, derType, eps, maxSteps) {
        const START_DX = 0.1;
        let step = 0;
        let error = 2.0 * eps;
        let y0 = 0.0;
        let derF = 0.0;
        let derFprev = 0.0;
        let dx = 0.0;
        if (derType === Calculus.LEFT_DERIVATIVE)
            dx = -START_DX;
        else
            dx = START_DX;
        let dy = 0.0;
        if ((derType === Calculus.LEFT_DERIVATIVE) || (derType === Calculus.RIGHT_DERIVATIVE)) {
            y0 = mXparser_1.mXparser.getFunctionValue(f, x, x0);
            dy = mXparser_1.mXparser.getFunctionValue(f, x, x0 + dx) - y0;
            derF = dy / dx;
        }
        else
            derF = (mXparser_1.mXparser.getFunctionValue(f, x, x0 + dx) - mXparser_1.mXparser.getFunctionValue(f, x, x0 - dx)) / (2.0 * dx);
        do {
            {
                derFprev = derF;
                dx = dx / 2.0;
                if ((derType === Calculus.LEFT_DERIVATIVE) || (derType === Calculus.RIGHT_DERIVATIVE)) {
                    dy = mXparser_1.mXparser.getFunctionValue(f, x, x0 + dx) - y0;
                    derF = dy / dx;
                }
                else
                    derF = (mXparser_1.mXparser.getFunctionValue(f, x, x0 + dx) - mXparser_1.mXparser.getFunctionValue(f, x, x0 - dx)) / (2.0 * dx);
                error = Math.abs(derF - derFprev);
                step++;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        } while (((step < maxSteps) && ((error > eps) || /* isNaN */ isNaN(derF))));
        return derF;
    }
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
    static derivativeNth(f, n, x, x0, derType, eps, maxSteps) {
        n = Math.round(n);
        let step = 0;
        let error = 2 * eps;
        let derFprev = 0;
        let dx = 0.01;
        let derF = 0;
        if (derType === Calculus.RIGHT_DERIVATIVE)
            for (let i = 1; i <= n; i++) {
                derF += MathFunctions_1.MathFunctions.binomCoeff$double$double(-1, n - i) * MathFunctions_1.MathFunctions.binomCoeff$double$long(n, i) * mXparser_1.mXparser.getFunctionValue(f, x, x0 + i * dx);
            }
        else
            for (let i = 1; i <= n; i++) {
                derF += MathFunctions_1.MathFunctions.binomCoeff$double$long(-1, i) * MathFunctions_1.MathFunctions.binomCoeff$double$long(n, i) * mXparser_1.mXparser.getFunctionValue(f, x, x0 - i * dx);
            }
        derF = derF / Math.pow(dx, n);
        do {
            {
                derFprev = derF;
                dx = dx / 2.0;
                derF = 0;
                if (derType === Calculus.RIGHT_DERIVATIVE)
                    for (let i = 1; i <= n; i++) {
                        derF += MathFunctions_1.MathFunctions.binomCoeff$double$double(-1, n - i) * MathFunctions_1.MathFunctions.binomCoeff$double$long(n, i) * mXparser_1.mXparser.getFunctionValue(f, x, x0 + i * dx);
                    }
                else
                    for (let i = 1; i <= n; i++) {
                        derF += MathFunctions_1.MathFunctions.binomCoeff$double$long(-1, i) * MathFunctions_1.MathFunctions.binomCoeff$double$long(n, i) * mXparser_1.mXparser.getFunctionValue(f, x, x0 - i * dx);
                    }
                derF = derF / Math.pow(dx, n);
                error = Math.abs(derF - derFprev);
                step++;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        } while (((step < maxSteps) && ((error > eps) || /* isNaN */ isNaN(derF))));
        return derF;
    }
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double(f, x, x0) {
        if ( /* isNaN */isNaN(x0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const xb = x.getArgumentValue();
        const delta = mXparser_1.mXparser.getFunctionValue(f, x, x0 + 1) - mXparser_1.mXparser.getFunctionValue(f, x, x0);
        x.setArgumentValue(xb);
        return delta;
    }
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument(f, x) {
        const xb = x.getArgumentValue();
        if ( /* isNaN */isNaN(xb))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const fv = f.calculate();
        x.setArgumentValue(xb + 1);
        const delta = f.calculate() - fv;
        x.setArgumentValue(xb);
        return delta;
    }
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double(f, x, x0) {
        if ( /* isNaN */isNaN(x0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const xb = x.getArgumentValue();
        const delta = mXparser_1.mXparser.getFunctionValue(f, x, x0) - mXparser_1.mXparser.getFunctionValue(f, x, x0 - 1);
        x.setArgumentValue(xb);
        return delta;
    }
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument(f, x) {
        const xb = x.getArgumentValue();
        if ( /* isNaN */isNaN(xb))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const fv = f.calculate();
        x.setArgumentValue(xb - 1);
        const delta = fv - f.calculate();
        x.setArgumentValue(xb);
        return delta;
    }
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument$double(f, h, x, x0) {
        if ( /* isNaN */isNaN(x0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const xb = x.getArgumentValue();
        const delta = mXparser_1.mXparser.getFunctionValue(f, x, x0 + h) - mXparser_1.mXparser.getFunctionValue(f, x, x0);
        x.setArgumentValue(xb);
        return delta;
    }
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
    static forwardDifference(f, h, x, x0) {
        if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((typeof h === 'number') || h === null) && ((x != null && x instanceof Argument_1.Argument) || x === null) && ((typeof x0 === 'number') || x0 === null)) {
            return Calculus.forwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument$double(f, h, x, x0);
        }
        else if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((h != null && h instanceof Argument_1.Argument) || h === null) && ((typeof x === 'number') || x === null) && x0 === undefined) {
            return Calculus.forwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double(f, h, x);
        }
        else if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((typeof h === 'number') || h === null) && ((x != null && x instanceof Argument_1.Argument) || x === null) && x0 === undefined) {
            return Calculus.forwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(f, h, x);
        }
        else if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((h != null && h instanceof Argument_1.Argument) || h === null) && x === undefined && x0 === undefined) {
            return Calculus.forwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument(f, h);
        }
        else
            throw new Error('invalid overload');
    }
    static forwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(f, h, x) {
        const xb = x.getArgumentValue();
        if ( /* isNaN */isNaN(xb))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const fv = f.calculate();
        x.setArgumentValue(xb + h);
        const delta = f.calculate() - fv;
        x.setArgumentValue(xb);
        return delta;
    }
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument$double(f, h, x, x0) {
        if ( /* isNaN */isNaN(x0))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const xb = x.getArgumentValue();
        const delta = mXparser_1.mXparser.getFunctionValue(f, x, x0) - mXparser_1.mXparser.getFunctionValue(f, x, x0 - h);
        x.setArgumentValue(xb);
        return delta;
    }
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
    static backwardDifference(f, h, x, x0) {
        if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((typeof h === 'number') || h === null) && ((x != null && x instanceof Argument_1.Argument) || x === null) && ((typeof x0 === 'number') || x0 === null)) {
            return Calculus.backwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument$double(f, h, x, x0);
        }
        else if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((h != null && h instanceof Argument_1.Argument) || h === null) && ((typeof x === 'number') || x === null) && x0 === undefined) {
            return Calculus.backwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double(f, h, x);
        }
        else if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((typeof h === 'number') || h === null) && ((x != null && x instanceof Argument_1.Argument) || x === null) && x0 === undefined) {
            return Calculus.backwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(f, h, x);
        }
        else if (((f != null && f instanceof Expression_1.Expression) || f === null) && ((h != null && h instanceof Argument_1.Argument) || h === null) && x === undefined && x0 === undefined) {
            return Calculus.backwardDifference$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument(f, h);
        }
        else
            throw new Error('invalid overload');
    }
    static backwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(f, h, x) {
        const xb = x.getArgumentValue();
        if ( /* isNaN */isNaN(xb))
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        const fv = f.calculate();
        x.setArgumentValue(xb - h);
        const delta = fv - f.calculate();
        x.setArgumentValue(xb);
        return delta;
    }
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
    static solveBrent(f, x, a, b, eps, maxSteps) {
        let fa;
        let fb;
        let fc;
        let fs;
        let c;
        let c0;
        let c1;
        let c2;
        let tmp;
        let d;
        let s;
        let mflag;
        let iter;
        if (b < a) {
            tmp = a;
            a = b;
            b = tmp;
        }
        fa = mXparser_1.mXparser.getFunctionValue(f, x, a);
        fb = mXparser_1.mXparser.getFunctionValue(f, x, b);
        if (MathFunctions_1.MathFunctions.abs(fa) <= eps)
            return a;
        if (MathFunctions_1.MathFunctions.abs(fb) <= eps)
            return b;
        if (b === a)
            return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        if (fa * fb > 0) {
            let rndflag = false;
            let ap;
            let bp;
            for (let i = 0; i < maxSteps; i++) {
                {
                    ap = ProbabilityDistributions_1.ProbabilityDistributions.rndUniformContinuous$double$double(a, b);
                    bp = ProbabilityDistributions_1.ProbabilityDistributions.rndUniformContinuous$double$double(a, b);
                    if (bp < ap) {
                        tmp = ap;
                        ap = bp;
                        bp = tmp;
                    }
                    fa = mXparser_1.mXparser.getFunctionValue(f, x, ap);
                    fb = mXparser_1.mXparser.getFunctionValue(f, x, bp);
                    if (MathFunctions_1.MathFunctions.abs(fa) <= eps)
                        return ap;
                    if (MathFunctions_1.MathFunctions.abs(fb) <= eps)
                        return bp;
                    if (fa * fb < 0) {
                        rndflag = true;
                        a = ap;
                        b = bp;
                        break;
                    }
                    if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                        return j4ts_1.javaemul.internal.DoubleHelper.NaN;
                }
                ;
            }
            if (rndflag === false)
                return j4ts_1.javaemul.internal.DoubleHelper.NaN;
        }
        c = a;
        d = c;
        fc = mXparser_1.mXparser.getFunctionValue(f, x, c);
        if (MathFunctions_1.MathFunctions.abs(fa) < MathFunctions_1.MathFunctions.abs(fb)) {
            tmp = a;
            a = b;
            b = tmp;
            tmp = fa;
            fa = fb;
            fb = tmp;
        }
        mflag = true;
        iter = 0;
        while (((MathFunctions_1.MathFunctions.abs(fb) > eps) && (MathFunctions_1.MathFunctions.abs(b - a) > eps) && (iter < maxSteps))) {
            {
                if ((fa !== fc) && (fb !== fc)) {
                    c0 = (a * fb * fc) / ((fa - fb) * (fa - fc));
                    c1 = (b * fa * fc) / ((fb - fa) * (fb - fc));
                    c2 = (c * fa * fb) / ((fc - fa) * (fc - fb));
                    s = c0 + c1 + c2;
                }
                else
                    s = b - (fb * (b - a)) / (fb - fa);
                if ((s < (3 * (a + b) / 4) || s > b) || ((mflag === true) && MathFunctions_1.MathFunctions.abs(s - b) >= (MathFunctions_1.MathFunctions.abs(b - c) / 2))) {
                    s = (a + b) / 2;
                    mflag = true;
                }
                else
                    mflag = true;
                fs = mXparser_1.mXparser.getFunctionValue(f, x, s);
                d = c;
                c = b;
                fc = fb;
                if ((fa * fs) < 0)
                    b = s;
                else
                    a = s;
                if (MathFunctions_1.MathFunctions.abs(fa) < MathFunctions_1.MathFunctions.abs(fb)) {
                    tmp = a;
                    a = b;
                    b = tmp;
                    tmp = fa;
                    fa = fb;
                    fb = tmp;
                }
                iter++;
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled())
                    return j4ts_1.javaemul.internal.DoubleHelper.NaN;
            }
        }
        ;
        return MathFunctions_1.MathFunctions.round(b, MathFunctions_1.MathFunctions.decimalDigitsBefore(eps) - 1);
    }
}
exports.Calculus = Calculus;
/**
 * Derivative type specification
 */
Calculus.LEFT_DERIVATIVE = 1;
Calculus.RIGHT_DERIVATIVE = 2;
Calculus.GENERAL_DERIVATIVE = 3;
Calculus["__class"] = "org.mariuszgromada.math.mxparser.mathcollection.Calculus";
//# sourceMappingURL=Calculus.js.map