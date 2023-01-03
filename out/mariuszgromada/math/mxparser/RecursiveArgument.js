"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursiveArgument = void 0;
const ParserSymbol_1 = require("./parsertokens/ParserSymbol");
const Argument_1 = require("./Argument");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
const Expression_1 = require("./Expression");
const PrimitiveElement_1 = require("./PrimitiveElement");
const ArgumentConstants_1 = require("./ArgumentConstants");
const ExpressionConstants_1 = require("./ExpressionConstants");
/**
 * Constructor - creates recursive argument.
 *
 * @param      {string} argumentName                  the argument name
 * @param      {string} recursiveExpressionString     the recursive expression string
 * @param      {Argument} n                             the index argument
 * @param      {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements                      Optional elements list (variadic - comma
 * separated) of types: Argument, Constant, Function
 *
 * @see        PrimitiveElement
 * @see        Argument
 * @class
 * @extends Argument
 */
class RecursiveArgument extends Argument_1.Argument {
    constructor(argumentName, recursiveExpressionString, n, ...elements) {
        if (((typeof argumentName === 'string') || argumentName === null) && ((typeof recursiveExpressionString === 'string') || recursiveExpressionString === null) && ((n != null && n instanceof Argument_1.Argument) || n === null) && ((elements != null && elements instanceof Array && (elements.length == 0 || elements[0] == null || (elements[0] != null && elements[0] instanceof PrimitiveElement_1.PrimitiveElement))) || elements === null)) {
            let __args = arguments;
            super(argumentName, recursiveExpressionString);
            if (this.baseValues === undefined) {
                this.baseValues = null;
            }
            if (this.recursiveCounter === undefined) {
                this.recursiveCounter = 0;
            }
            if (this.startingIndex === undefined) {
                this.startingIndex = 0;
            }
            if (argumentName === this.getArgumentName()) {
                this.argumentType = ArgumentConstants_1.ArgumentConstants.RECURSIVE_ARGUMENT;
                this.baseValues = (new j4ts_1.java.util.ArrayList());
                this.n = n;
                this.argumentExpression.addArguments(n);
                this.argumentExpression.addArguments(this);
                (o => o.addDefinitions.apply(o, elements))(this.argumentExpression);
                this.argumentExpression.setDescription(argumentName);
                this.recursiveCounter = -1;
            }
        }
        else if (((typeof argumentName === 'string') || argumentName === null) && ((typeof recursiveExpressionString === 'string') || recursiveExpressionString === null) && ((typeof n === 'string') || n === null) && elements === undefined || elements.length === 0) {
            let __args = arguments;
            let indexName = __args[2];
            super(argumentName, recursiveExpressionString);
            if (this.baseValues === undefined) {
                this.baseValues = null;
            }
            if (this.recursiveCounter === undefined) {
                this.recursiveCounter = 0;
            }
            if (this.startingIndex === undefined) {
                this.startingIndex = 0;
            }
            if (argumentName === this.getArgumentName()) {
                this.argumentType = ArgumentConstants_1.ArgumentConstants.RECURSIVE_ARGUMENT;
                this.baseValues = (new j4ts_1.java.util.ArrayList());
                this.n = new Argument_1.Argument(indexName);
                this.argumentExpression.addArguments(this.n);
                this.argumentExpression.addArguments(this);
                this.argumentExpression.setDescription(argumentName);
                this.recursiveCounter = -1;
            }
        }
        else if (((typeof argumentName === 'string') || argumentName === null) && ((recursiveExpressionString != null && recursiveExpressionString instanceof Array && (recursiveExpressionString.length == 0 || recursiveExpressionString[0] == null || (recursiveExpressionString[0] != null && recursiveExpressionString[0] instanceof PrimitiveElement_1.PrimitiveElement))) || recursiveExpressionString === null) && n === undefined && elements === undefined || elements.length === 0) {
            let __args = arguments;
            let argumentDefinitionString = __args[0];
            let elements = __args[1];
            super(argumentDefinitionString);
            if (this.baseValues === undefined) {
                this.baseValues = null;
            }
            if (this.recursiveCounter === undefined) {
                this.recursiveCounter = 0;
            }
            if (this.startingIndex === undefined) {
                this.startingIndex = 0;
            }
            if (j4ts_1.java.util.regex.Pattern.matches(argumentDefinitionString, ParserSymbol_1.ParserSymbol.function1ArgDefStrRegExp_$LI$())) {
                this.argumentType = ArgumentConstants_1.ArgumentConstants.RECURSIVE_ARGUMENT;
                this.baseValues = (new j4ts_1.java.util.ArrayList());
                this.recursiveCounter = -1;
                this.argumentExpression.addArguments(this.n);
                this.argumentExpression.addArguments(this);
                (o => o.addDefinitions.apply(o, elements))(this.argumentExpression);
                this.argumentExpression.setDescription(argumentDefinitionString);
            }
            else {
                this.argumentExpression = new Expression_1.Expression();
                this.argumentExpression.setSyntaxStatus(ArgumentConstants_1.ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + argumentDefinitionString + "] Invalid argument definition (patterns: f(n) = f(n-1) ...  ).");
            }
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Adds base case
     *
     * @param      {number} index               the base case index
     * @param      {number} value               the base case value
     */
    addBaseCase(index, value) {
        const recSize = this.baseValues.size();
        if (index > recSize - 1) {
            for (let i = recSize; i < index; i++) {
                this.baseValues.add(j4ts_2.javaemul.internal.DoubleHelper.NaN);
            }
            this.baseValues.add(value);
        }
        else
            this.baseValues.set(index, value);
    }
    /**
     * Clears all based cases and stored calculated values
     */
    resetAllCases() {
        this.baseValues.clear();
        this.recursiveCounter = -1;
    }
    getArgumentValue$double(index) {
        if (this.recursiveCounter === -1)
            this.startingIndex = (Math.round(index) | 0);
        const recSize = this.baseValues.size();
        const idx = (Math.round(index) | 0);
        this.recursiveCounter++;
        if ((this.recursiveCounter <= this.startingIndex) && (idx <= this.startingIndex)) {
            if ((idx >= 0) && (idx < recSize) && (!isNaN(/* doubleValue */ this.baseValues.get(idx)))) {
                this.recursiveCounter--;
                return /* doubleValue */ this.baseValues.get(idx);
            }
            else if (idx >= 0) {
                this.n.setArgumentValue(idx);
                const newExp = new Expression_1.Expression(this.argumentExpression.expressionString, null, this.argumentExpression.argumentsList, this.argumentExpression.functionsList, this.argumentExpression.constantsList, ExpressionConstants_1.ExpressionConstants.INTERNAL, this.argumentExpression.UDFExpression, this.argumentExpression.UDFVariadicParamsAtRunTime);
                newExp.setDescription(super.getArgumentName());
                newExp.setExpressionModifiedFlag();
                if (super.getVerboseMode() === true)
                    newExp.setVerboseMode();
                const value = newExp.calculate();
                this.addBaseCase(idx, value);
                this.recursiveCounter--;
                return value;
            }
            else {
                this.recursiveCounter--;
                return j4ts_2.javaemul.internal.DoubleHelper.NaN;
            }
        }
        else {
            this.recursiveCounter--;
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
    }
    /**
     * Gets recursive argument value
     *
     * @param      {number} index               the index
     *
     * @return     {number} value as double
     */
    getArgumentValue(index) {
        if (((typeof index === 'number') || index === null)) {
            return this.getArgumentValue$double(index);
        }
        else if (index === undefined) {
            return super.getArgumentValue();
        }
        else
            throw new Error('invalid overload');
    }
}
exports.RecursiveArgument = RecursiveArgument;
/**
 * Type identifier for recursive arguments.
 */
RecursiveArgument.TYPE_ID_RECURSIVE = 102;
RecursiveArgument.TYPE_DESC_RECURSIVE = "User defined recursive argument";
RecursiveArgument["__class"] = "org.mariuszgromada.math.mxparser.RecursiveArgument";
//# sourceMappingURL=RecursiveArgument.js.map