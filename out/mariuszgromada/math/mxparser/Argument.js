"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Argument = void 0;
const ParserSymbol_1 = require("./parsertokens/ParserSymbol");
const PrimitiveElement_1 = require("./PrimitiveElement");
const Expression_1 = require("./Expression");
const j4ts_1 = require("j4ts/j4ts");
const Miscellaneous_1 = require("./Miscellaneous");
const Function_1 = require("./Function");
const Constant_1 = require("./Constant");
const mXparserConstants_1 = require("./mXparserConstants");
const ArgumentConstants_1 = require("./ArgumentConstants");
const ExpressionConstants_1 = require("./ExpressionConstants");
/**
 * Default constructor - creates argument based on the argument definition string.
 *
 * @param      {string} argumentDefinitionString        Argument definition string, i.e.:
 * <ul>
 * <li>'x' - only argument name
 * <li>'x=5' - argument name and argument value
 * <li>'x=2*5' - argument name and argument value given as simple expression
 * <li>'x=2*y' - argument name and argument expression (dependent argument 'x' on argument 'y')
 * </ul>
 *
 * @param      {boolean} forceDependent   If true parser will try to create dependent argument
 * @param      {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements   Optional parameters (comma separated) such as Arguments, Constants, Functions
 * @class
 * @extends PrimitiveElement
 */
class Argument extends PrimitiveElement_1.PrimitiveElement {
    static createArgumentWithExpression(argumentExpression) {
        return Argument.createArgumentWithExpressionArgumentAndValue(argumentExpression, null, null);
    }
    static createArgumentWithName(argumentName) {
        return Argument.createArgumentWithExpressionArgumentAndValue(null, argumentName, null);
    }
    static createArgumentWithNameAndValue(argumentName, argumentValue) {
        return Argument.createArgumentWithExpressionArgumentAndValue(null, argumentName, argumentValue);
    }
    static createArgumentWithExpressionArgumentAndValue(argumentExpression, argumentName, argumentValue) {
        let x = new Argument(null, null, null);
        if (argumentExpression !== null) {
            x.setArgumentExpressionString(argumentExpression);
        }
        else if (argumentName !== null && argumentValue !== null) {
            x.setArgumentName(argumentName);
            x.setArgumentValue(argumentValue);
        }
        else if (argumentName !== null && argumentValue === null) {
            x.setArgumentName(argumentName);
        }
        x.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
        return x;
    }
    constructor(argumentName, argumentExpressionString, ...elements) {
        if (((typeof argumentName === 'string') || argumentName === null) && ((typeof argumentExpressionString === 'string') || argumentExpressionString === null) && ((elements != null && elements instanceof Array && (elements.length == 0 || elements[0] == null || (elements[0] != null && elements[0] instanceof PrimitiveElement_1.PrimitiveElement))) || elements === null)) {
            let __args = arguments;
            super(ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            if (this.argumentBodyType === undefined) {
                this.argumentBodyType = 0;
            }
            if (this.argumentExtension === undefined) {
                this.argumentExtension = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentExpression === undefined) {
                this.argumentExpression = null;
            }
            if (this.argumentName === undefined) {
                this.argumentName = null;
            }
            if (this.argumentType === undefined) {
                this.argumentType = 0;
            }
            if (this.argumentValue === undefined) {
                this.argumentValue = 0;
            }
            if (this.n === undefined) {
                this.n = null;
            }
            if (argumentName !== null && mXparserConstants_1.mXparserConstants.regexMatch(argumentName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.argumentName = argumentName;
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentExpression = new Expression_1.Expression(argumentExpressionString, elements);
                this.argumentExpression.setDescription(argumentName);
                this.argumentType = ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT;
            }
            else {
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentExpression = Expression_1.Expression.create();
                this.argumentExpression.setSyntaxStatus(ArgumentConstants_1.ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + argumentName + "] Invalid argument name, pattern not match: " + ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp);
            }
            this.argumentBodyType = ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME;
            this.setSilentMode();
            this.description = "";
        }
        else if (((typeof argumentName === 'string') || argumentName === null) && ((typeof argumentExpressionString === 'boolean') || argumentExpressionString === null) && ((elements != null && elements instanceof Array && (elements.length == 0 || elements[0] == null || (elements[0] != null && elements[0] instanceof PrimitiveElement_1.PrimitiveElement))) || elements === null)) {
            let __args = arguments;
            let argumentDefinitionString = __args[0];
            let forceDependent = __args[1];
            super(ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            if (this.argumentBodyType === undefined) {
                this.argumentBodyType = 0;
            }
            if (this.argumentExtension === undefined) {
                this.argumentExtension = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentExpression === undefined) {
                this.argumentExpression = null;
            }
            if (this.argumentName === undefined) {
                this.argumentName = null;
            }
            if (this.argumentType === undefined) {
                this.argumentType = 0;
            }
            if (this.argumentValue === undefined) {
                this.argumentValue = 0;
            }
            if (this.n === undefined) {
                this.n = null;
            }
            if (mXparserConstants_1.mXparserConstants.regexMatch(argumentDefinitionString, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.argumentName = argumentDefinitionString;
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
                this.argumentExpression = new Expression_1.Expression(null, elements);
            }
            else if (mXparserConstants_1.mXparserConstants.regexMatch(argumentDefinitionString, ParserSymbol_1.ParserSymbol.constArgDefStrRegExp_$LI$())) {
                const headEqBody = new Miscellaneous_1.HeadEqBody(argumentDefinitionString);
                this.argumentName = headEqBody.headTokens.get(0).tokenStr;
                const bodyExpr = new Expression_1.Expression(headEqBody.bodyStr);
                if (forceDependent === true) {
                    this.argumentExpression = bodyExpr;
                    this.addDefinitions.apply(this, elements);
                    this.argumentType = ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT;
                }
                else {
                    const bodyValue = bodyExpr.calculate();
                    if ((bodyExpr.getSyntaxStatus() === ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS) && (bodyValue !== j4ts_1.javaemul.internal.DoubleHelper.NaN)) {
                        this.argumentExpression = new Expression_1.Expression();
                        this.argumentValue = bodyValue;
                        this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
                    }
                    else {
                        this.argumentExpression = bodyExpr;
                        this.addDefinitions.apply(this, elements);
                        this.argumentType = ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT;
                    }
                }
            }
            else if (mXparserConstants_1.mXparserConstants.regexMatch(argumentDefinitionString, ParserSymbol_1.ParserSymbol.functionDefStrRegExp_$LI$())) {
                const headEqBody = new Miscellaneous_1.HeadEqBody(argumentDefinitionString);
                this.argumentName = headEqBody.headTokens.get(0).tokenStr;
                this.argumentExpression = new Expression_1.Expression(headEqBody.bodyStr, elements);
                this.argumentExpression.setDescription(headEqBody.headStr);
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentType = ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT;
                this.n = new Argument(headEqBody.headTokens.get(2).tokenStr);
            }
            else {
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
                this.argumentExpression = new Expression_1.Expression();
                this.argumentExpression.setSyntaxStatus(ArgumentConstants_1.ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + argumentDefinitionString + "] Invalid argument definition (patterns: \'x\', \'x=5\', \'x=5+3/2\', \'x=2*y\').");
            }
            this.argumentBodyType = ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME;
            this.setSilentMode();
            this.description = "";
        }
        else if (((typeof argumentName === 'string') || argumentName === null) && ((argumentExpressionString != null && argumentExpressionString instanceof Array && (argumentExpressionString.length == 0 || argumentExpressionString[0] == null || (argumentExpressionString[0] != null && argumentExpressionString[0] instanceof PrimitiveElement_1.PrimitiveElement))) || argumentExpressionString === null) && elements === undefined || elements.length === 0) {
            let __args = arguments;
            let argumentDefinitionString = __args[0];
            let elements = __args[1];
            super(ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            if (this.argumentBodyType === undefined) {
                this.argumentBodyType = 0;
            }
            if (this.argumentExtension === undefined) {
                this.argumentExtension = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentExpression === undefined) {
                this.argumentExpression = null;
            }
            if (this.argumentName === undefined) {
                this.argumentName = null;
            }
            if (this.argumentType === undefined) {
                this.argumentType = 0;
            }
            if (this.argumentValue === undefined) {
                this.argumentValue = 0;
            }
            if (this.n === undefined) {
                this.n = null;
            }
            if (mXparserConstants_1.mXparserConstants.regexMatch(argumentDefinitionString, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.argumentName = argumentDefinitionString;
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
                this.argumentExpression = new Expression_1.Expression(null, elements);
            }
            else if (mXparserConstants_1.mXparserConstants.regexMatch(argumentDefinitionString, ParserSymbol_1.ParserSymbol.constArgDefStrRegExp_$LI$())) {
                const headEqBody = new Miscellaneous_1.HeadEqBody(argumentDefinitionString);
                this.argumentName = headEqBody.headTokens.get(0).tokenStr;
                const bodyExpr = new Expression_1.Expression(headEqBody.bodyStr);
                const bodyValue = bodyExpr.calculate();
                if ((bodyExpr.getSyntaxStatus() === ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS) && (bodyValue !== j4ts_1.javaemul.internal.DoubleHelper.NaN)) {
                    this.argumentExpression = new Expression_1.Expression();
                    this.argumentValue = bodyValue;
                    this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
                }
                else {
                    this.argumentExpression = bodyExpr;
                    this.addDefinitions.apply(this, elements);
                    this.argumentType = ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT;
                }
            }
            else if (mXparserConstants_1.mXparserConstants.regexMatch(argumentDefinitionString, ParserSymbol_1.ParserSymbol.functionDefStrRegExp_$LI$())) {
                const headEqBody = new Miscellaneous_1.HeadEqBody(argumentDefinitionString);
                this.argumentName = headEqBody.headTokens.get(0).tokenStr;
                this.argumentExpression = new Expression_1.Expression(headEqBody.bodyStr, elements);
                this.argumentExpression.setDescription(headEqBody.headStr);
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentType = ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT;
                this.n = new Argument(headEqBody.headTokens.get(2).tokenStr);
            }
            else {
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
                this.argumentExpression = new Expression_1.Expression();
                this.argumentExpression.setSyntaxStatus(ArgumentConstants_1.ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + argumentDefinitionString + "] Invalid argument definition (patterns: \'x\', \'x=5\', \'x=5+3/2\', \'x=2*y\').");
            }
            this.argumentBodyType = ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME;
            this.setSilentMode();
            this.description = "";
        }
        else if (((typeof argumentName === 'string') || argumentName === null) && ((argumentExpressionString != null && (argumentExpressionString.constructor != null && argumentExpressionString.constructor["__interfaces"] != null && argumentExpressionString.constructor["__interfaces"].indexOf("org.mariuszgromada.math.mxparser.ArgumentExtension") >= 0)) || argumentExpressionString === null) && elements === undefined || elements.length === 0) {
            let __args = arguments;
            let argumentExtension = __args[1];
            super(ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            if (this.argumentBodyType === undefined) {
                this.argumentBodyType = 0;
            }
            if (this.argumentExtension === undefined) {
                this.argumentExtension = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentExpression === undefined) {
                this.argumentExpression = null;
            }
            if (this.argumentName === undefined) {
                this.argumentName = null;
            }
            if (this.argumentType === undefined) {
                this.argumentType = 0;
            }
            if (this.argumentValue === undefined) {
                this.argumentValue = 0;
            }
            if (this.n === undefined) {
                this.n = null;
            }
            this.argumentExpression = new Expression_1.Expression();
            if (mXparserConstants_1.mXparserConstants.regexMatch(argumentName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.argumentName = argumentName;
                this.argumentExtension = argumentExtension;
                this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
                this.argumentBodyType = Argument.BODY_EXTENDED;
            }
            else {
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentExpression.setSyntaxStatus(ArgumentConstants_1.ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + argumentName + "] Invalid argument name, pattern not match: " + ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp);
                this.argumentBodyType = ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME;
            }
            this.setSilentMode();
            this.description = "";
        }
        else if (((typeof argumentName === 'string') || argumentName === null) && ((typeof argumentExpressionString === 'number') || argumentExpressionString === null) && elements === undefined || elements.length === 0) {
            let __args = arguments;
            let argumentValue = __args[1];
            super(ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            if (this.argumentBodyType === undefined) {
                this.argumentBodyType = 0;
            }
            if (this.argumentExtension === undefined) {
                this.argumentExtension = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentExpression === undefined) {
                this.argumentExpression = null;
            }
            if (this.argumentName === undefined) {
                this.argumentName = null;
            }
            if (this.argumentType === undefined) {
                this.argumentType = 0;
            }
            if (this.argumentValue === undefined) {
                this.argumentValue = 0;
            }
            if (this.n === undefined) {
                this.n = null;
            }
            this.argumentExpression = new Expression_1.Expression();
            if (mXparserConstants_1.mXparserConstants.regexMatch(argumentName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.argumentName = argumentName;
                this.argumentValue = argumentValue;
                this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
            }
            else {
                this.argumentValue = ArgumentConstants_1.ArgumentConstants.ARGUMENT_INITIAL_VALUE_$LI$();
                this.argumentExpression.setSyntaxStatus(ArgumentConstants_1.ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + argumentName + "] Invalid argument name, pattern not match: " + ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp);
            }
            this.argumentBodyType = ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME;
            this.setSilentMode();
            this.description = "";
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Sets argument description.
     *
     * @param      {string} description         the argument description.
     */
    setDescription(description) {
        this.description = description;
    }
    /**
     * Gets argument description.
     *
     * @return     {string} The argument description string.
     */
    getDescription() {
        return this.description;
    }
    /**
     * Enables argument verbose mode
     */
    setVerboseMode() {
        this.argumentExpression.setVerboseMode();
    }
    /**
     * Disables argument verbose mode (sets default silent mode)
     */
    setSilentMode() {
        this.argumentExpression.setSilentMode();
    }
    /**
     * Returns verbose mode status
     *
     * @return     {boolean} true if verbose mode is on,
     * otherwise returns false.
     */
    getVerboseMode() {
        return this.argumentExpression.getVerboseMode();
    }
    /**
     * Gets recursive mode status
     *
     * @return      {boolean} true if recursive mode is enabled,
     * otherwise returns false
     */
    getRecursiveMode() {
        return this.argumentExpression.getRecursiveMode();
    }
    /**
     * Gets computing time
     *
     * @return     {number} Computing time in seconds.
     */
    getComputingTime() {
        return this.argumentExpression.getComputingTime();
    }
    /**
     * Sets (modifies) argument name.
     * Each expression / function / dependent argument associated
     * with this argument will be marked as modified
     * (requires new syntax checking).
     *
     * @param      {string} argumentName        the argument name
     */
    setArgumentName(argumentName) {
        if (mXparserConstants_1.mXparserConstants.regexMatch(argumentName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
            this.argumentName = argumentName;
            this.setExpressionModifiedFlags();
        }
        else if (this.argumentExpression != null)
            this.argumentExpression.setSyntaxStatus(ArgumentConstants_1.ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + argumentName + "] Invalid argument name, pattern not match: " + ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp);
    }
    /**
     * Sets argument expression string.
     * Each expression / function / dependent argument associated
     * with this argument will be marked as modified
     * (requires new syntax checking).
     * If BODY_EXTENDED argument then BODY_RUNTIME is set.
     *
     * @param      {string} argumentExpressionString      the argument expression string
     *
     * @see        Expression
     */
    setArgumentExpressionString(argumentExpressionString) {
        this.argumentExpression.setExpressionString(argumentExpressionString);
        if (this.argumentType === ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT)
            this.argumentType = ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT;
        this.argumentBodyType = ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME;
    }
    /**
     * Gets argument name
     *
     * @return     {string} the argument name as string
     */
    getArgumentName() {
        return this.argumentName;
    }
    /**
     * Gets argument expression string
     *
     * @return {string} the argument expression string
     */
    getArgumentExpressionString() {
        return this.argumentExpression.getExpressionString();
    }
    /**
     * Gets argument type
     *
     * @return     {number} Argument type: ArgumentConstants.FREE_ARGUMENT,
     * ArgumentConstants.DEPENDENT_ARGUMENT,
     * ArgumentConstants.RECURSIVE_ARGUMENT
     */
    getArgumentType() {
        return this.argumentType;
    }
    /**
     * Sets argument value, if DEPENDENT_ARGUMENT then argument type
     * is set to FREE_ARGUMENT.
     * If BODY_EXTENDED argument the BODY_RUNTIME argument is set.
     *
     * @param  {number} argumentValue       the value of argument
     */
    setArgumentValue(argumentValue) {
        if (this.argumentType === ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT) {
            this.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
            this.argumentExpression.setExpressionString("");
        }
        this.argumentBodyType = ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME;
        this.argumentValue = argumentValue;
    }
    /**
     * Returns argument body type: {@link Argument#BODY_RUNTIME} {@link Argument#BODY_EXTENDED}
     * @return {number} Returns argument body type: {@link Argument#BODY_RUNTIME} {@link Argument#BODY_EXTENDED}
     */
    getArgumentBodyType() {
        return this.argumentBodyType;
    }
    /**
     * Checks argument syntax
     *
     * @return    {boolean} syntax status: ArgumentConstants.NO_SYNTAX_ERRORS,
     * ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN
     */
    checkSyntax() {
        if (this.argumentBodyType === Argument.BODY_EXTENDED)
            return ArgumentConstants_1.ArgumentConstants.NO_SYNTAX_ERRORS_$LI$();
        if (this.argumentType === ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT)
            return ArgumentConstants_1.ArgumentConstants.NO_SYNTAX_ERRORS_$LI$();
        else
            return this.argumentExpression.checkSyntax$();
    }
    /**
     * Returns error message after checking the syntax
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage() {
        return this.argumentExpression.getErrorMessage();
    }
    /**
     * Gets argument value.
     *
     * @return     {number} direct argument value for free argument,
     * otherwise returns calculated argument value
     * based on the argument expression.
     */
    getArgumentValue() {
        if (this.argumentBodyType === Argument.BODY_EXTENDED)
            return this.argumentExtension.getArgumentValue();
        if (this.argumentType === ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT)
            return this.argumentValue;
        else
            return this.argumentExpression.calculate();
    }
    /**
     * Adds user defined elements (such as: Arguments, Constants, Functions)
     * to the argument expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic - comma separated) of types: Argument, Constant, Function
     *
     * @see PrimitiveElement
     */
    addDefinitions(...elements) {
        (o => o.addDefinitions.apply(o, elements))(this.argumentExpression);
    }
    /**
     * Removes user defined elements (such as: Arguments, Constants, Functions)
     * from the argument expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic - comma separated) of types: Argument, Constant, Function
     *
     * @see PrimitiveElement
     */
    removeDefinitions(...elements) {
        (o => o.removeDefinitions.apply(o, elements))(this.argumentExpression);
    }
    /**
     * Adds arguments (variadic) to the argument expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Argument[]} arguments           the arguments list
     * (comma separated list)
     * @see        Argument
     * @see        RecursiveArgument
     */
    addArguments(...__arguments) {
        (o => o.addArguments.apply(o, __arguments))(this.argumentExpression);
    }
    /**
     * Enables to define the arguments (associated with
     * the argument expression) based on the given arguments names.
     *
     * @param      {java.lang.String[]} argumentsNames      the arguments names (variadic)
     * comma separated list
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    defineArguments(...argumentsNames) {
        (o => o.defineArguments.apply(o, argumentsNames))(this.argumentExpression);
    }
    /**
     * Enables to define the argument (associated with the argument expression)
     * based on the argument name and the argument value.
     *
     * @param      {string} argumentName        the argument name
     * @param      {number} argumentValue       the the argument value
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    defineArgument(argumentName, argumentValue) {
        this.argumentExpression.defineArgument(argumentName, argumentValue);
    }
    /**
     * Gets argument index from the argument expression.
     *
     * @param      {string} argumentName        the argument name
     *
     * @return     {number} The argument index if the argument name was found,
     * otherwise returns ArgumentConstants.NOT_FOUND
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgumentIndex(argumentName) {
        return this.argumentExpression.getArgumentIndex(argumentName);
    }
    getArgument$java_lang_String(argumentName) {
        return this.argumentExpression.getArgument$java_lang_String(argumentName);
    }
    /**
     * Gets argument from the argument expression.
     *
     *
     * @param      {string} argumentName        the argument name
     *
     * @return     {Argument} The argument if the argument name was found,
     * otherwise returns null.
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgument(argumentName) {
        if (((typeof argumentName === 'string') || argumentName === null)) {
            return this.getArgument$java_lang_String(argumentName);
        }
        else if (((typeof argumentName === 'number') || argumentName === null)) {
            return this.getArgument$int(argumentName);
        }
        else
            throw new Error('invalid overload');
    }
    getArgument$int(argumentIndex) {
        return this.argumentExpression.getArgument$int(argumentIndex);
    }
    /**
     * Gets number of arguments associated with the argument expression.
     *
     * @return     {number} The number of arguments (int &gt;= 0)
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgumentsNumber() {
        return this.argumentExpression.getArgumentsNumber();
    }
    removeArguments$java_lang_String_A(...argumentsNames) {
        (o => o.removeArguments.apply(o, argumentsNames))(this.argumentExpression);
    }
    /**
     * Removes first occurrences of the arguments
     * associated with the argument expression.
     *
     * @param      {java.lang.String[]} argumentsNames      the arguments names
     * (variadic parameters) comma separated
     * list
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    removeArguments(...argumentsNames) {
        if (((argumentsNames != null && argumentsNames instanceof Array && (argumentsNames.length == 0 || argumentsNames[0] == null || (typeof argumentsNames[0] === 'string'))) || argumentsNames === null)) {
            return this.removeArguments$java_lang_String_A(...argumentsNames);
        }
        else if (((argumentsNames != null && argumentsNames instanceof Array && (argumentsNames.length == 0 || argumentsNames[0] == null || (argumentsNames[0] != null && argumentsNames[0] instanceof Argument))) || argumentsNames === null)) {
            return this.removeArguments$org_mariuszgromada_math_mxparser_Argument_A(...argumentsNames);
        }
        else
            throw new Error('invalid overload');
    }
    removeArguments$org_mariuszgromada_math_mxparser_Argument_A(...__arguments) {
        (o => o.removeArguments.apply(o, __arguments))(this.argumentExpression);
    }
    /**
     * Removes all arguments associated with the argument expression.
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    removeAllArguments() {
        this.argumentExpression.removeAllArguments();
    }
    addConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants) {
        (o => o.addConstants.apply(o, constants))(this.argumentExpression);
    }
    /**
     * Adds constants (variadic parameters) to the argument expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Constant[]} constants           the constants
     * (comma separated list)
     *
     * @see        Constant
     */
    addConstants(...constants) {
        if (((constants != null && constants instanceof Array && (constants.length == 0 || constants[0] == null || (constants[0] != null && constants[0] instanceof Constant_1.Constant))) || constants === null)) {
            return this.addConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants);
        }
        else if (((constants != null && (constants.constructor != null && constants.constructor["__interfaces"] != null && constants.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || constants === null)) {
            return this.addConstants$java_util_List(constants);
        }
        else
            throw new Error('invalid overload');
    }
    addConstants$java_util_List(constantsList) {
        this.argumentExpression.addConstants$java_util_List(constantsList);
    }
    /**
     * Enables to define the constant (associated with
     * the argument expression) based on the constant name and
     * constant value.
     *
     * @param      {string} constantName        the constant name
     * @param      {number} constantValue       the constant value
     *
     * @see        Constant
     */
    defineConstant(constantName, constantValue) {
        this.argumentExpression.defineConstant(constantName, constantValue);
    }
    /**
     * Gets constant index associated with the argument expression.
     *
     * @param      {string} constantName        the constant name
     *
     * @return     {number} Constant index if constant name was found,
     * otherwise return Constant.NOT_FOUND.
     *
     * @see        Constant
     */
    getConstantIndex(constantName) {
        return this.argumentExpression.getConstantIndex(constantName);
    }
    getConstant$java_lang_String(constantName) {
        return this.argumentExpression.getConstant$java_lang_String(constantName);
    }
    /**
     * Gets constant associated with the argument expression.
     *
     * @param      {string} constantName        the constant name
     *
     * @return     {Constant} Constant if constant name was found,
     * otherwise return null.
     *
     * @see        Constant
     */
    getConstant(constantName) {
        if (((typeof constantName === 'string') || constantName === null)) {
            return this.getConstant$java_lang_String(constantName);
        }
        else if (((typeof constantName === 'number') || constantName === null)) {
            return this.getConstant$int(constantName);
        }
        else
            throw new Error('invalid overload');
    }
    getConstant$int(constantIndex) {
        return this.argumentExpression.getConstant$int(constantIndex);
    }
    /**
     * Gets number of constants associated with the argument expression.
     *
     * @return     {number} number of constants (int &gt;= 0)
     *
     * @see        Constant
     */
    getConstantsNumber() {
        return this.argumentExpression.getConstantsNumber();
    }
    removeConstants$java_lang_String_A(...constantsNames) {
        (o => o.removeConstants.apply(o, constantsNames))(this.argumentExpression);
    }
    /**
     * Removes first occurrences of the constants
     * associated with the argument expression.
     *
     * @param      {java.lang.String[]} constantsNames      the constants names (variadic parameters)
     * comma separated list
     *
     * @see        Constant
     */
    removeConstants(...constantsNames) {
        if (((constantsNames != null && constantsNames instanceof Array && (constantsNames.length == 0 || constantsNames[0] == null || (typeof constantsNames[0] === 'string'))) || constantsNames === null)) {
            return this.removeConstants$java_lang_String_A(...constantsNames);
        }
        else if (((constantsNames != null && constantsNames instanceof Array && (constantsNames.length == 0 || constantsNames[0] == null || (constantsNames[0] != null && constantsNames[0] instanceof Constant_1.Constant))) || constantsNames === null)) {
            return this.removeConstants$org_mariuszgromada_math_mxparser_Constant_A(...constantsNames);
        }
        else
            throw new Error('invalid overload');
    }
    removeConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants) {
        (o => o.removeConstants.apply(o, constants))(this.argumentExpression);
    }
    /**
     * Removes all constants
     * associated with the argument expression
     *
     * @see        Constant
     */
    removeAllConstants() {
        this.argumentExpression.removeAllConstants();
    }
    /**
     * Adds functions (variadic parameters) to the argument expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Function[]} functions           the functions
     * (variadic parameters) comma separated list
     *
     * @see        Function
     */
    addFunctions(...functions) {
        (o => o.addFunctions.apply(o, functions))(this.argumentExpression);
    }
    /**
     * Enables to define the function (associated with
     * the argument expression) based on the function name,
     * function expression string and arguments names (variadic parameters).
     *
     * @param      {string} functionName                  the function name
     * @param      {string} functionExpressionString      the expression string
     * @param      {java.lang.String[]} argumentsNames                the function arguments names
     * (variadic parameters)
     * comma separated list
     *
     * @see        Function
     */
    defineFunction(functionName, functionExpressionString, ...argumentsNames) {
        (o => o.defineFunction.apply(o, [functionName, functionExpressionString].concat(argumentsNames)))(this.argumentExpression);
    }
    /**
     * Gets index of function associated with the argument expression.
     *
     * @param      {string} functionName        the function name
     *
     * @return     {number} Function index if function name was found,
     * otherwise returns Function.NOT_FOUND
     *
     * @see        Function
     */
    getFunctionIndex(functionName) {
        return this.argumentExpression.getFunctionIndex(functionName);
    }
    getFunction$java_lang_String(functionName) {
        return this.argumentExpression.getFunction$java_lang_String(functionName);
    }
    /**
     * Gets function associated with the argument expression.
     *
     * @param      {string} functionName        the function name
     *
     * @return     {Function} Function if function name was found,
     * otherwise returns null.
     *
     * @see        Function
     */
    getFunction(functionName) {
        if (((typeof functionName === 'string') || functionName === null)) {
            return this.getFunction$java_lang_String(functionName);
        }
        else if (((typeof functionName === 'number') || functionName === null)) {
            return this.getFunction$int(functionName);
        }
        else
            throw new Error('invalid overload');
    }
    getFunction$int(functionIndex) {
        return this.argumentExpression.getFunction$int(functionIndex);
    }
    /**
     * Gets number of functions associated with the argument expression.
     *
     * @return     {number} number of functions (int &gt;= 0)
     *
     * @see        Function
     */
    getFunctionsNumber() {
        return this.argumentExpression.getFunctionsNumber();
    }
    removeFunctions$java_lang_String_A(...functionsNames) {
        (o => o.removeFunctions.apply(o, functionsNames))(this.argumentExpression);
    }
    /**
     * Removes first occurrences of the functions
     * associated with the argument expression.
     *
     * @param      {java.lang.String[]} functionsNames      the functions names (variadic parameters)
     * comma separated list
     *
     * @see        Function
     */
    removeFunctions(...functionsNames) {
        if (((functionsNames != null && functionsNames instanceof Array && (functionsNames.length == 0 || functionsNames[0] == null || (typeof functionsNames[0] === 'string'))) || functionsNames === null)) {
            return this.removeFunctions$java_lang_String_A(...functionsNames);
        }
        else if (((functionsNames != null && functionsNames instanceof Array && (functionsNames.length == 0 || functionsNames[0] == null || (functionsNames[0] != null && functionsNames[0] instanceof Function_1.Function))) || functionsNames === null)) {
            return this.removeFunctions$org_mariuszgromada_math_mxparser_Function_A(...functionsNames);
        }
        else
            throw new Error('invalid overload');
    }
    removeFunctions$org_mariuszgromada_math_mxparser_Function_A(...functions) {
        (o => o.removeFunctions.apply(o, functions))(this.argumentExpression);
    }
    /**
     * Removes all functions
     * associated with the argument expression.
     *
     * @see        Function
     */
    removeAllFunctions() {
        this.argumentExpression.removeAllFunctions();
    }
    /**
     * Adds related expression to the argumentExpression
     *
     * @param      {Expression} expression          the related expression
     * @see        Expression
     */
    addRelatedExpression(expression) {
        this.argumentExpression.addRelatedExpression(expression);
    }
    /**
     * Adds related expression form the argumentExpression
     *
     * @param      {Expression} expression          related expression
     *
     * @see        Expression
     */
    removeRelatedExpression(expression) {
        this.argumentExpression.removeRelatedExpression(expression);
    }
    /**
     * Sets expression was modified flag to all related expressions
     * to the argumentExpression.
     *
     * @see        Expression
     */
    setExpressionModifiedFlags() {
        this.argumentExpression.setExpressionModifiedFlag();
    }
    /**
     * Creates cloned object of the this argument.''
     *
     * @return     {Argument} clone of the argument.
     */
    clone() {
        const newArg = new Argument(this.argumentName);
        newArg.argumentExpression = this.argumentExpression;
        newArg.argumentType = this.argumentType;
        newArg.argumentBodyType = this.argumentBodyType;
        newArg.argumentValue = this.argumentValue;
        newArg.description = this.description;
        newArg.n = this.n;
        if (this.argumentExtension != null)
            newArg.argumentExtension = /* clone */ ((o) => { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                let clone = Object.create(o);
                for (let p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(this.argumentExtension);
        else
            newArg.argumentExtension = null;
        return newArg;
    }
}
exports.Argument = Argument;
/**
 * Argument with body based on the extended code.
 *
 * @see ArgumentExtension
 * @see Argument#getArgumentBodyType()
 */
Argument.BODY_EXTENDED = 2;
Argument["__class"] = "org.mariuszgromada.math.mxparser.Argument";
var __Function = Function_1.Function;
//# sourceMappingURL=Argument.js.map