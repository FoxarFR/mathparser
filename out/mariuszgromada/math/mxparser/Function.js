"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
const ParserSymbol_1 = require("./parsertokens/ParserSymbol");
const PrimitiveElement_1 = require("./PrimitiveElement");
const Expression_1 = require("./Expression");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
const FunctionConstants_1 = require("./FunctionConstants");
const ArgumentConstants_1 = require("./ArgumentConstants");
const ExpressionConstants_1 = require("./ExpressionConstants");
const Constant_1 = require("./Constant");
const Miscellaneous_1 = require("./Miscellaneous");
const Argument_1 = require("./Argument");
const mXparserConstants_1 = require("./mXparserConstants");
/**
 * Constructor - creates function from function name
 * and function expression string.
 *
 * @param      {string} functionName              the function name
 * @param      {string} functionExpressionString  the function expression string
 * @param      {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements                  Optional elements list (variadic - comma separated) of types: Argument, Constant, Function
 *
 * @see        PrimitiveElement
 * @see        Expression
 * @class
 * @extends PrimitiveElement
 */
class Function extends PrimitiveElement_1.PrimitiveElement {
    static createWithFunctionDefinition(functionDefinition) {
        const newFunction = new Function(null, null, null);
        if (mXparserConstants_1.mXparserConstants.regexMatch(functionDefinition, ParserSymbol_1.ParserSymbol.functionDefStrRegExp_$LI$())) {
            const headEqBody = new Miscellaneous_1.HeadEqBody(functionDefinition);
            newFunction.functionName = headEqBody.headTokens.get(0).tokenStr;
            newFunction.functionExpression = new Expression_1.Expression(headEqBody.bodyStr, null);
            newFunction.functionExpression.setDescription(headEqBody.headStr);
            newFunction.functionExpression.UDFExpression = true;
            newFunction.isVariadic = false;
            if (headEqBody.headTokens.size() > 1) {
                for (let i = 1; i < headEqBody.headTokens.size(); i++) {
                    const token = headEqBody.headTokens.get(i);
                    if (token.tokenTypeId !== ParserSymbol_1.ParserSymbol.TYPE_ID) {
                        newFunction.functionExpression.addArguments(Argument_1.Argument.createArgumentWithName(token.tokenStr));
                    }
                }
            }
            newFunction.parametersNumber = newFunction.functionExpression.getArgumentsNumber()
                - newFunction.countRecursiveArguments();
            newFunction.setDescription("");
            newFunction.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
            newFunction.addFunctions(newFunction);
        }
        else if (mXparserConstants_1.mXparserConstants.regexMatch(functionDefinition, ParserSymbol_1.ParserSymbol.functionVariadicDefStrRegExp_$LI$())) {
            const headEqBody = new Miscellaneous_1.HeadEqBody(functionDefinition);
            newFunction.functionName = headEqBody.headTokens.get(0).tokenStr;
            newFunction.functionExpression = new Expression_1.Expression(headEqBody.bodyStr, null);
            newFunction.functionExpression.setDescription(headEqBody.headStr);
            newFunction.functionExpression.UDFExpression = true;
            newFunction.isVariadic = true;
            newFunction.parametersNumber = -1;
            newFunction.setDescription("");
            newFunction.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
            newFunction.addFunctions(newFunction);
        }
        else {
            newFunction.functionExpression.setDescription(functionDefinition);
            let errorMessage = "";
            errorMessage = errorMessage + "\n [" + functionDefinition + "] " +
                "--> pattern not mathes: f(x1,...,xn) = ... reg exp: " +
                ParserSymbol_1.ParserSymbol.functionDefStrRegExp;
            newFunction.functionExpression.setSyntaxStatus(ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN, errorMessage);
        }
        return newFunction;
    }
    constructor(functionName, functionExpressionString, ...elements) {
        if (functionExpressionString !== null && functionExpressionString !== undefined &&
            ((typeof functionExpressionString === 'string') || functionExpressionString.constructor.name === 'String')) {
            functionExpressionString = functionExpressionString.split(' ').join('');
        }
        if (((typeof functionName === 'string') || functionName === null) && ((typeof functionExpressionString === 'string') || functionExpressionString === null) && ((elements != null && elements instanceof Array && (elements.length == 0 || elements[0] == null || (elements[0] != null && elements[0] instanceof PrimitiveElement_1.PrimitiveElement))) || elements === null)) {
            let __args = arguments;
            super(FunctionConstants_1.FunctionConstants.TYPE_ID);
            if (this.functionBodyType === undefined) {
                this.functionBodyType = 0;
            }
            if (this.functionExpression === undefined) {
                this.functionExpression = null;
            }
            if (this.functionName === undefined) {
                this.functionName = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.isVariadic === undefined) {
                this.isVariadic = false;
            }
            if (this.parametersNumber === undefined) {
                this.parametersNumber = 0;
            }
            if (this.functionExtension === undefined) {
                this.functionExtension = null;
            }
            if (this.functionExtensionVariadic === undefined) {
                this.functionExtensionVariadic = null;
            }
            if (functionName !== null && mXparserConstants_1.mXparserConstants.regexMatch(functionName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.functionName = functionName;
                this.functionExpression = new Expression_1.Expression(functionExpressionString, elements);
                this.functionExpression.setDescription(functionName);
                this.functionExpression.UDFExpression = true;
                this.isVariadic = false;
                this.parametersNumber = 0;
                this.description = "";
                this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
                this.addFunctions(this);
            }
            else {
                this.parametersNumber = 0;
                this.description = "";
                this.functionExpression = Expression_1.Expression.create();
                this.functionExpression.setSyntaxStatus(FunctionConstants_1.FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + functionName + "]Invalid function name, pattern not matches: " + ParserSymbol_1.ParserSymbol.nameTokenRegExp_$LI$());
            }
        }
        else if (((typeof functionName === 'string') || functionName === null) && ((typeof functionExpressionString === 'string') || functionExpressionString === null) && ((elements != null && elements instanceof Array && (elements.length == 0 || elements[0] == null || (typeof elements[0] === 'string'))) || elements === null)) {
            let __args = elements;
            let argumentsNames = __args;
            super(FunctionConstants_1.FunctionConstants.TYPE_ID);
            if (this.functionBodyType === undefined) {
                this.functionBodyType = 0;
            }
            if (this.functionExpression === undefined) {
                this.functionExpression = null;
            }
            if (this.functionName === undefined) {
                this.functionName = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.isVariadic === undefined) {
                this.isVariadic = false;
            }
            if (this.parametersNumber === undefined) {
                this.parametersNumber = 0;
            }
            if (this.functionExtension === undefined) {
                this.functionExtension = null;
            }
            if (this.functionExtensionVariadic === undefined) {
                this.functionExtensionVariadic = null;
            }
            if (functionName !== null && mXparserConstants_1.mXparserConstants.regexMatch(functionName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.functionName = functionName;
                this.functionExpression = Expression_1.Expression.createWithExpression(functionExpressionString);
                this.functionExpression.setDescription(functionName);
                this.functionExpression.UDFExpression = true;
                this.isVariadic = false;
                for (let index197 = 0; index197 < argumentsNames.length; index197++) {
                    let argName = argumentsNames[index197];
                    this.functionExpression.addArguments(new Argument_1.Argument(argName));
                }
                this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
                this.description = "";
                this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
                this.addFunctions(this);
            }
            else {
                this.parametersNumber = 0;
                this.description = "";
                this.functionExpression = Expression_1.Expression.create();
                this.functionExpression.setSyntaxStatus(FunctionConstants_1.FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + functionName + "]Invalid function name, pattern not matches: " + ParserSymbol_1.ParserSymbol.nameTokenRegExp_$LI$());
            }
        }
        else if (((typeof functionName === 'string') || functionName === null) && ((functionExpressionString != null && functionExpressionString instanceof Array && (functionExpressionString.length == 0 || functionExpressionString[0] == null || (functionExpressionString[0] != null && functionExpressionString[0] instanceof PrimitiveElement_1.PrimitiveElement))) || functionExpressionString === null) && (elements === undefined || elements.length === 0)) {
            let __args = arguments;
            let functionDefinitionString = __args[0];
            let elements = __args[1];
            super(FunctionConstants_1.FunctionConstants.TYPE_ID);
            if (this.functionBodyType === undefined) {
                this.functionBodyType = 0;
            }
            if (this.functionExpression === undefined) {
                this.functionExpression = null;
            }
            if (this.functionName === undefined) {
                this.functionName = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.isVariadic === undefined) {
                this.isVariadic = false;
            }
            if (this.parametersNumber === undefined) {
                this.parametersNumber = 0;
            }
            if (this.functionExtension === undefined) {
                this.functionExtension = null;
            }
            if (this.functionExtensionVariadic === undefined) {
                this.functionExtensionVariadic = null;
            }
            this.parametersNumber = 0;
            if (functionDefinitionString !== null && mXparserConstants_1.mXparserConstants.regexMatch(functionDefinitionString, ParserSymbol_1.ParserSymbol.functionDefStrRegExp_$LI$())) {
                const headEqBody = new Miscellaneous_1.HeadEqBody(functionDefinitionString);
                this.functionName = headEqBody.headTokens.get(0).tokenStr;
                this.functionExpression = Expression_1.Expression.createWithExpression(headEqBody.bodyStr);
                this.functionExpression.setDescription(headEqBody.headStr);
                this.functionExpression.UDFExpression = true;
                this.isVariadic = false;
                if (headEqBody.headTokens.size() > 1) {
                    let t;
                    for (let i = 1; i < headEqBody.headTokens.size(); i++) {
                        {
                            t = headEqBody.headTokens.get(i);
                            if (t.tokenTypeId !== ParserSymbol_1.ParserSymbol.TYPE_ID)
                                this.functionExpression.addArguments(new Argument_1.Argument(t.tokenStr));
                        }
                        ;
                    }
                }
                this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
                this.description = "";
                this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
                this.addFunctions(this);
            }
            else if (functionDefinitionString !== null && mXparserConstants_1.mXparserConstants.regexMatch(functionDefinitionString, ParserSymbol_1.ParserSymbol.functionVariadicDefStrRegExp_$LI$())) {
                const headEqBody = new Miscellaneous_1.HeadEqBody(functionDefinitionString);
                this.functionName = headEqBody.headTokens.get(0).tokenStr;
                this.functionExpression = new Expression_1.Expression(headEqBody.bodyStr, elements);
                this.functionExpression.setDescription(headEqBody.headStr);
                this.functionExpression.UDFExpression = true;
                this.isVariadic = true;
                this.parametersNumber = -1;
                this.description = "";
                this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
                this.addFunctions(this);
            }
            else {
                this.functionExpression = new Expression_1.Expression();
                this.functionExpression.setDescription(functionDefinitionString);
                let errorMessage = "";
                errorMessage = errorMessage + "\n [" + functionDefinitionString + "] --> pattern not mathes: f(x1,...,xn) = ... reg exp: " + ParserSymbol_1.ParserSymbol.functionDefStrRegExp_$LI$();
                this.functionExpression.setSyntaxStatus(ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN, errorMessage);
            }
        }
        else if (((typeof functionName === 'string') || functionName === null) && ((functionExpressionString != null && (functionExpressionString.constructor != null && functionExpressionString.constructor["__interfaces"] != null && functionExpressionString.constructor["__interfaces"].indexOf("org.mariuszgromada.math.mxparser.FunctionExtension") >= 0)) || functionExpressionString === null) && (elements === undefined || elements.length === 0)) {
            let __args = arguments;
            let functionExtension = __args[1];
            super(FunctionConstants_1.FunctionConstants.TYPE_ID);
            if (this.functionBodyType === undefined) {
                this.functionBodyType = 0;
            }
            if (this.functionExpression === undefined) {
                this.functionExpression = null;
            }
            if (this.functionName === undefined) {
                this.functionName = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.isVariadic === undefined) {
                this.isVariadic = false;
            }
            if (this.parametersNumber === undefined) {
                this.parametersNumber = 0;
            }
            if (this.functionExtension === undefined) {
                this.functionExtension = null;
            }
            if (this.functionExtensionVariadic === undefined) {
                this.functionExtensionVariadic = null;
            }
            if (functionName !== null && mXparserConstants_1.mXparserConstants.regexMatch(functionName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.functionName = functionName;
                this.functionExpression = new Expression_1.Expression("{body-ext}");
                this.isVariadic = false;
                this.parametersNumber = functionExtension.getParametersNumber();
                this.description = "";
                this.functionExtension = functionExtension;
                this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_EXTENDED;
            }
            else {
                this.parametersNumber = 0;
                this.description = "";
                this.functionExpression = new Expression_1.Expression("");
                this.functionExpression.setSyntaxStatus(FunctionConstants_1.FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + functionName + "]Invalid function name, pattern not matches: " + ParserSymbol_1.ParserSymbol.nameTokenRegExp_$LI$());
            }
        }
        else if (((typeof functionName === 'string') || functionName === null) && ((functionExpressionString != null && (functionExpressionString.constructor != null && functionExpressionString.constructor["__interfaces"] != null && functionExpressionString.constructor["__interfaces"].indexOf("org.mariuszgromada.math.mxparser.FunctionExtensionVariadic") >= 0)) || functionExpressionString === null) && (elements === undefined || elements.length === 0)) {
            let __args = arguments;
            let functionExtensionVariadic = __args[1];
            super(FunctionConstants_1.FunctionConstants.TYPE_ID);
            if (this.functionBodyType === undefined) {
                this.functionBodyType = 0;
            }
            if (this.functionExpression === undefined) {
                this.functionExpression = null;
            }
            if (this.functionName === undefined) {
                this.functionName = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.isVariadic === undefined) {
                this.isVariadic = false;
            }
            if (this.parametersNumber === undefined) {
                this.parametersNumber = 0;
            }
            if (this.functionExtension === undefined) {
                this.functionExtension = null;
            }
            if (this.functionExtensionVariadic === undefined) {
                this.functionExtensionVariadic = null;
            }
            if (functionName !== null && mXparserConstants_1.mXparserConstants.regexMatch(functionName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                this.functionName = functionName;
                this.functionExpression = new Expression_1.Expression("{body-ext-var}");
                this.isVariadic = true;
                this.parametersNumber = -1;
                this.description = "";
                this.functionExtensionVariadic = functionExtensionVariadic;
                this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_EXTENDED;
            }
            else {
                this.parametersNumber = 0;
                this.description = "";
                this.functionExpression = new Expression_1.Expression("");
                this.functionExpression.setSyntaxStatus(FunctionConstants_1.FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + functionName + "]Invalid function name, pattern not matches: " + ParserSymbol_1.ParserSymbol.nameTokenRegExp_$LI$());
            }
        }
        else if (((functionName != null && functionName instanceof Function) || functionName === null) && functionExpressionString === undefined && elements === undefined || elements.length === 0) {
            let __args = arguments;
            let __function = __args[0];
            super(FunctionConstants_1.FunctionConstants.TYPE_ID);
            if (this.functionBodyType === undefined) {
                this.functionBodyType = 0;
            }
            if (this.functionExpression === undefined) {
                this.functionExpression = null;
            }
            if (this.functionName === undefined) {
                this.functionName = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.isVariadic === undefined) {
                this.isVariadic = false;
            }
            if (this.parametersNumber === undefined) {
                this.parametersNumber = 0;
            }
            if (this.functionExtension === undefined) {
                this.functionExtension = null;
            }
            if (this.functionExtensionVariadic === undefined) {
                this.functionExtensionVariadic = null;
            }
            this.functionName = __function.functionName;
            this.description = __function.description;
            this.parametersNumber = __function.parametersNumber;
            this.functionExpression = /* clone */ ((o) => { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                let clone = Object.create(o);
                for (let p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(__function.functionExpression);
            this.functionBodyType = __function.functionBodyType;
            this.isVariadic = __function.isVariadic;
            if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_EXTENDED) {
                if (__function.functionExtension != null)
                    this.functionExtension = /* clone */ ((o) => { if (o.clone != undefined) {
                        return o.clone();
                    }
                    else {
                        let clone = Object.create(o);
                        for (let p in o) {
                            if (o.hasOwnProperty(p))
                                clone[p] = o[p];
                        }
                        return clone;
                    } })(__function.functionExtension);
                if (__function.functionExtensionVariadic != null)
                    this.functionExtensionVariadic = /* clone */ ((o) => { if (o.clone != undefined) {
                        return o.clone();
                    }
                    else {
                        let clone = Object.create(o);
                        for (let p in o) {
                            if (o.hasOwnProperty(p))
                                clone[p] = o[p];
                        }
                        return clone;
                    } })(__function.functionExtensionVariadic);
            }
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Constructor for function definition in natural math language,
     * for instance providing on string "f(x,y) = sin(x) + cos(x)"
     * is enough to define function "f" with parameters "x and y"
     * and function body "sin(x) + cos(x)".
     *
     * @param {string} functionDefinitionString      Function definition in the form
     * of one String, ie "f(x,y) = sin(x) + cos(x)"
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements                      Optional elements list (variadic - comma separated)
     * of types: Argument, Constant, Function
     *
     * @see    PrimitiveElement
     */
    setFunction(functionDefinitionString, ...elements) {
        this.parametersNumber = 0;
        if (mXparserConstants_1.mXparserConstants.regexMatch(functionDefinitionString, ParserSymbol_1.ParserSymbol.functionDefStrRegExp_$LI$())) {
            const headEqBody = new Miscellaneous_1.HeadEqBody(functionDefinitionString);
            this.functionName = headEqBody.headTokens.get(0).tokenStr;
            this.functionExpression = new Expression_1.Expression(headEqBody.bodyStr, elements);
            this.functionExpression.setDescription(headEqBody.headStr);
            this.functionExpression.UDFExpression = true;
            this.isVariadic = false;
            if (headEqBody.headTokens.size() > 1) {
                let t;
                for (let i = 1; i < headEqBody.headTokens.size(); i++) {
                    {
                        t = headEqBody.headTokens.get(i);
                        if (t.tokenTypeId !== ParserSymbol_1.ParserSymbol.TYPE_ID)
                            this.functionExpression.addArguments(new Argument_1.Argument(t.tokenStr));
                    }
                    ;
                }
            }
            this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
            this.description = "";
            this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
            this.addFunctions(this);
        }
        else if (mXparserConstants_1.mXparserConstants.regexMatch(functionDefinitionString, ParserSymbol_1.ParserSymbol.functionVariadicDefStrRegExp_$LI$())) {
            const headEqBody = new Miscellaneous_1.HeadEqBody(functionDefinitionString);
            this.functionName = headEqBody.headTokens.get(0).tokenStr;
            this.functionExpression = new Expression_1.Expression(headEqBody.bodyStr, elements);
            this.functionExpression.setDescription(headEqBody.headStr);
            this.functionExpression.UDFExpression = true;
            this.isVariadic = true;
            this.parametersNumber = -1;
            this.description = "";
            this.functionBodyType = FunctionConstants_1.FunctionConstants.BODY_RUNTIME;
            this.addFunctions(this);
        }
        else {
            this.functionExpression = new Expression_1.Expression();
            this.functionExpression.setDescription(functionDefinitionString);
            let errorMessage = "";
            errorMessage = errorMessage + "\n [" + functionDefinitionString + "] --> pattern not mathes: f(x1,...,xn) = ... reg exp: " + ParserSymbol_1.ParserSymbol.functionDefStrRegExp_$LI$();
            this.functionExpression.setSyntaxStatus(ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN, errorMessage);
        }
    }
    /**
     * Sets function description.
     *
     * @param      {string} description         the function description
     */
    setDescription(description) {
        this.description = description;
    }
    /**
     * Gets function description
     *
     * @return     {string} Function description as string
     */
    getDescription() {
        return this.description;
    }
    /**
     * Gets function name.
     *
     * @return     {string} Function name as string.
     */
    getFunctionName() {
        return this.functionName;
    }
    /**
     * Gets function expression string
     *
     * @return     {string} Function expression as string.
     */
    getFunctionExpressionString() {
        return this.functionExpression.getExpressionString();
    }
    /**
     * Sets function name.
     *
     * @param      {string} functionName        the function name
     */
    setFunctionName(functionName) {
        if (mXparserConstants_1.mXparserConstants.regexMatch(functionName, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
            this.functionName = functionName;
            this.setExpressionModifiedFlags();
        }
        else
            this.functionExpression.setSyntaxStatus(FunctionConstants_1.FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + functionName + "]Invalid function name, pattern not matches: " + ParserSymbol_1.ParserSymbol.nameTokenRegExp_$LI$());
    }
    /**
     * Sets value of function argument (function parameter).
     *
     * @param      {number} argumentIndex   the argument index (in accordance to
     * arguments declaration sequence)
     * @param      {number} argumentValue   the argument value
     */
    setArgumentValue(argumentIndex, argumentValue) {
        if (this.isVariadic === false)
            if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
                this.functionExpression.argumentsList.get(argumentIndex).argumentValue = argumentValue;
            else if (this.isVariadic === false)
                this.functionExtension.setParameterValue(argumentIndex, argumentValue);
    }
    /**
     * Returns function body type: {@link Function#BODY_RUNTIME} {@link Function#BODY_EXTENDED}
     * @return {number} Returns function body type: {@link Function#BODY_RUNTIME} {@link Function#BODY_EXTENDED}
     */
    getFunctionBodyType() {
        return this.functionBodyType;
    }
    /**
     * Checks function syntax
     *
     * @return     {boolean} syntax status: FunctionConstants.NO_SYNTAX_ERRORS,
     * FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN
     */
    checkSyntax() {
        let syntaxStatus = FunctionConstants_1.FunctionConstants.NO_SYNTAX_ERRORS_$LI$();
        if (this.functionBodyType !== FunctionConstants_1.FunctionConstants.BODY_EXTENDED)
            syntaxStatus = this.functionExpression.checkSyntax$();
        this.checkRecursiveMode();
        return syntaxStatus;
    }
    /**
     * Returns error message after checking the syntax.
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage() {
        return this.functionExpression.getErrorMessage();
    }
    /**
     * clone method
     * @return {Function}
     */
    clone() {
        const newFunction = new Function(null, null, null);
        newFunction.functionName = this.functionName;
        newFunction.description = this.description;
        newFunction.parametersNumber = this.parametersNumber;
        newFunction.functionExpression = this.functionExpression.clone();
        newFunction.functionBodyType = this.functionBodyType;
        newFunction.isVariadic = this.isVariadic;
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_EXTENDED) {
            if (this.functionExtension !== null)
                newFunction.functionExtension = this.functionExtension.clone();
            if (this.functionExtensionVariadic !== null)
                newFunction.functionExtensionVariadic = this.functionExtensionVariadic.clone();
        }
        return newFunction;
    }
    calculate$() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.calculate();
        else if (this.isVariadic === false)
            return this.functionExtension.calculate();
        else {
            const paramsList = this.functionExpression.UDFVariadicParamsAtRunTime;
            if (paramsList != null) {
                const n = paramsList.size();
                const parameters = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(n);
                for (let i = 0; i < n; i++) {
                    parameters[i] = paramsList.get(i);
                }
                return (o => o.calculate.apply(o, parameters))(this.functionExtensionVariadic);
            }
            else
                return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
    }
    calculate$double_A(...parameters) {
        if (parameters.length > 0) {
            this.functionExpression.UDFVariadicParamsAtRunTime = (new j4ts_1.java.util.ArrayList());
            for (let index198 = 0; index198 < parameters.length; index198++) {
                let x = parameters[index198];
                this.functionExpression.UDFVariadicParamsAtRunTime.add(x);
            }
        }
        else
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (this.isVariadic) {
            if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
                return this.functionExpression.calculate();
            else
                return (o => o.calculate.apply(o, parameters))(this.functionExtensionVariadic);
        }
        else if (parameters.length === this.getParametersNumber()) {
            if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
                for (let p = 0; p < parameters.length; p++) {
                    this.setArgumentValue(p, parameters[p]);
                }
                return this.functionExpression.calculate();
            }
            else {
                for (let p = 0; p < parameters.length; p++) {
                    this.functionExtension.setParameterValue(p, parameters[p]);
                }
                return this.functionExtension.calculate();
            }
        }
        else {
            this.functionExpression.setSyntaxStatus(FunctionConstants_1.FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + this.functionName + "] incorrect number of function parameters (expecting " + this.getParametersNumber() + ", provided " + parameters.length + ")!");
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
    }
    /**
     * Calculates function value
     *
     * @param      {double[]} parameters              the function parameters values (as doubles)
     *
     * @return     {number} function value as double.
     */
    calculate(...parameters) {
        if (((parameters != null && parameters instanceof Array && (parameters.length == 0 || parameters[0] == null || (typeof parameters[0] === 'number'))) || parameters === null)) {
            return this.calculate$double_A(...parameters);
        }
        else if (((parameters != null && parameters instanceof Array && (parameters.length == 0 || parameters[0] == null || (parameters[0] != null && parameters[0] instanceof Argument_1.Argument))) || parameters === null)) {
            return this.calculate$org_mariuszgromada_math_mxparser_Argument_A(...parameters);
        }
        else if (parameters === undefined || parameters.length === 0) {
            return this.calculate$();
        }
        else
            throw new Error('invalid overload');
    }
    calculate$org_mariuszgromada_math_mxparser_Argument_A(...__arguments) {
        let parameters;
        if (__arguments.length > 0) {
            this.functionExpression.UDFVariadicParamsAtRunTime = (new j4ts_1.java.util.ArrayList());
            parameters = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(__arguments.length);
            let x;
            for (let i = 0; i < __arguments.length; i++) {
                {
                    x = __arguments[i].getArgumentValue();
                    this.functionExpression.UDFVariadicParamsAtRunTime.add(x);
                    parameters[i] = x;
                }
                ;
            }
        }
        else
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if (this.isVariadic) {
            if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
                return this.functionExpression.calculate();
            else
                return (o => o.calculate.apply(o, parameters))(this.functionExtensionVariadic);
        }
        else if (__arguments.length === this.getParametersNumber()) {
            if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
                for (let p = 0; p < __arguments.length; p++) {
                    this.setArgumentValue(p, __arguments[p].getArgumentValue());
                }
                return this.functionExpression.calculate();
            }
            else {
                for (let p = 0; p < __arguments.length; p++) {
                    this.functionExtension.setParameterValue(p, __arguments[p].getArgumentValue());
                }
                return this.functionExtension.calculate();
            }
        }
        else {
            this.functionExpression.setSyntaxStatus(FunctionConstants_1.FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(), "[" + this.functionName + "] incorrect number of function parameters (expecting " + this.getParametersNumber() + ", provided " + __arguments.length + ")!");
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
    }
    /**
     * Adds user defined elements (such as: Arguments, Constants, Functions)
     * to the function expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    addDefinitions(...elements) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.addDefinitions.apply(o, elements))(this.functionExpression);
    }
    /**
     * Removes user defined elements (such as: Arguments, Constants, Functions)
     * from the function expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    removeDefinitions(...elements) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.removeDefinitions.apply(o, elements))(this.functionExpression);
    }
    /*private*/ countRecursiveArguments() {
        let numOfRecursiveArguments = 0;
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            for (let index199 = this.functionExpression.argumentsList.iterator(); index199.hasNext();) {
                let argument = index199.next();
                if (argument.getArgumentType() === ArgumentConstants_1.ArgumentConstants.RECURSIVE_ARGUMENT)
                    numOfRecursiveArguments++;
            }
        return numOfRecursiveArguments;
    }
    /**
     * Adds arguments (variadic) to the function expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Argument[]} arguments           the arguments list
     * (comma separated list)
     * @see        Argument
     * @see        RecursiveArgument
     */
    addArguments(...__arguments) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            (o => o.addArguments.apply(o, __arguments))(this.functionExpression);
            this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
        }
    }
    /**
     * Enables to define the arguments (associated with
     * the function expression) based on the given arguments names.
     *
     * @param      {java.lang.String[]} argumentsNames      the arguments names (variadic)
     * comma separated list
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    defineArguments(...argumentsNames) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            (o => o.defineArguments.apply(o, argumentsNames))(this.functionExpression);
            this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
        }
    }
    /**
     * Enables to define the argument (associated with the function expression)
     * based on the argument name and the argument value.
     *
     * @param      {string} argumentName        the argument name
     * @param      {number} argumentValue       the the argument value
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    defineArgument(argumentName, argumentValue) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            this.functionExpression.defineArgument(argumentName, argumentValue);
            this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
        }
    }
    /**
     * Gets argument index from the function expression.
     *
     * @param      {string} argumentName        the argument name
     *
     * @return     {number} The argument index if the argument name was found,
     * otherwise returns Argument.NOT_FOUND
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgumentIndex(argumentName) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getArgumentIndex(argumentName);
        else
            return -1;
    }
    getArgument$java_lang_String(argumentName) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getArgument$java_lang_String(argumentName);
        else
            return null;
    }
    /**
     * Gets argument from the function expression.
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
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getArgument$int(argumentIndex);
        else
            return null;
    }
    /**
     * Gets number of parameters associated with the function expression.
     *
     * @return     {number} The number of function parameters (int &gt;= 0)
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getParametersNumber() {
        if (this.isVariadic === false)
            return this.parametersNumber;
        else {
            if (this.functionExpression.UDFVariadicParamsAtRunTime != null)
                return this.functionExpression.UDFVariadicParamsAtRunTime.size();
            else
                return -1;
        }
    }
    /**
     * Set parameters number.
     *
     * @param      {number} parametersNumber    the number of function parameters (default = number of arguments
     * (less number might be specified).
     */
    setParametersNumber(parametersNumber) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            this.parametersNumber = parametersNumber;
            this.functionExpression.setExpressionModifiedFlag();
        }
    }
    /**
     * Gets user defined function parameter name
     *
     * @param {number} parameterIndex  Parameter index between 0 and n-1
     * @return {string} If parameter exists returns parameters name, otherwise empty string is returned.
     */
    getParameterName(parameterIndex) {
        if (parameterIndex < 0)
            return "";
        if (parameterIndex >= this.parametersNumber)
            return "";
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.getArgument$int(parameterIndex).getArgumentName();
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_EXTENDED)
            return this.functionExtension.getParameterName(parameterIndex);
        return "";
    }
    /**
     * Gets number of arguments associated with the function expression.
     *
     * @return     {number} The number of arguments (int &gt;= 0)
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgumentsNumber() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getArgumentsNumber();
        else
            return 0;
    }
    removeArguments$java_lang_String_A(...argumentsNames) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            (o => o.removeArguments.apply(o, argumentsNames))(this.functionExpression);
            this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
        }
    }
    /**
     * Removes first occurrences of the arguments
     * associated with the function expression.
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
        else if (((argumentsNames != null && argumentsNames instanceof Array && (argumentsNames.length == 0 || argumentsNames[0] == null || (argumentsNames[0] != null && argumentsNames[0] instanceof Argument_1.Argument))) || argumentsNames === null)) {
            return this.removeArguments$org_mariuszgromada_math_mxparser_Argument_A(...argumentsNames);
        }
        else
            throw new Error('invalid overload');
    }
    removeArguments$org_mariuszgromada_math_mxparser_Argument_A(...__arguments) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            (o => o.removeArguments.apply(o, __arguments))(this.functionExpression);
            this.parametersNumber = this.functionExpression.getArgumentsNumber() - this.countRecursiveArguments();
        }
    }
    /**
     * Removes all arguments associated with the function expression.
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    removeAllArguments() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            this.functionExpression.removeAllArguments();
            this.parametersNumber = 0;
        }
    }
    addConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.addConstants.apply(o, constants))(this.functionExpression);
    }
    /**
     * Adds constants (variadic parameters) to the function expression definition.
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
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            this.functionExpression.addConstants$java_util_List(constantsList);
    }
    /**
     * Enables to define the constant (associated with
     * the function expression) based on the constant name and
     * constant value.
     *
     * @param      {string} constantName        the constant name
     * @param      {number} constantValue       the constant value
     *
     * @see        Constant
     */
    defineConstant(constantName, constantValue) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            this.functionExpression.defineConstant(constantName, constantValue);
    }
    /**
     * Gets constant index associated with the function expression.
     *
     * @param      {string} constantName        the constant name
     *
     * @return     {number} Constant index if constant name was found,
     * otherwise return Constant.NOT_FOUND.
     *
     * @see        Constant
     */
    getConstantIndex(constantName) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getConstantIndex(constantName);
        else
            return -1;
    }
    getConstant$java_lang_String(constantName) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getConstant$java_lang_String(constantName);
        else
            return null;
    }
    /**
     * Gets constant associated with the function expression.
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
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getConstant$int(constantIndex);
        else
            return null;
    }
    /**
     * Gets number of constants associated with the function expression.
     *
     * @return     {number} number of constants (int &gt;= 0)
     *
     * @see        Constant
     */
    getConstantsNumber() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getConstantsNumber();
        else
            return 0;
    }
    removeConstants$java_lang_String_A(...constantsNames) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.removeConstants.apply(o, constantsNames))(this.functionExpression);
    }
    /**
     * Removes first occurrences of the constants
     * associated with the function expression.
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
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.removeConstants.apply(o, constants))(this.functionExpression);
    }
    /**
     * Removes all constants
     * associated with the function expression
     *
     * @see        Constant
     */
    removeAllConstants() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            this.functionExpression.removeAllConstants();
    }
    /**
     * Adds functions (variadic parameters) to the function expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Function[]} functions           the functions
     * (variadic parameters) comma separated list
     *
     * @see        Function
     */
    addFunctions(...functions) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.addFunctions.apply(o, functions))(this.functionExpression);
    }
    /**
     * Enables to define the function (associated with
     * the function expression) based on the function name,
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
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.defineFunction.apply(o, [functionName, functionExpressionString].concat(argumentsNames)))(this.functionExpression);
    }
    /**
     * Gets index of function associated with the function expression.
     *
     * @param      {string} functionName        the function name
     *
     * @return     {number} Function index if function name was found,
     * otherwise returns FunctionConstants.NOT_FOUND
     *
     * @see        Function
     */
    getFunctionIndex(functionName) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getFunctionIndex(functionName);
        else
            return -1;
    }
    getFunction$java_lang_String(functionName) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getFunction$java_lang_String(functionName);
        else
            return null;
    }
    /**
     * Gets function associated with the function expression.
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
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getFunction$int(functionIndex);
        else
            return null;
    }
    /**
     * Gets number of functions associated with the function expression.
     *
     * @return     {number} number of functions (int &gt;= 0)
     *
     * @see        Function
     */
    getFunctionsNumber() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            return this.functionExpression.getFunctionsNumber();
        else
            return 0;
    }
    removeFunctions$java_lang_String_A(...functionsNames) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.removeFunctions.apply(o, functionsNames))(this.functionExpression);
    }
    /**
     * Removes first occurrences of the functions
     * associated with the function expression.
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
        else if (((functionsNames != null && functionsNames instanceof Array && (functionsNames.length == 0 || functionsNames[0] == null || (functionsNames[0] != null && functionsNames[0] instanceof Function))) || functionsNames === null)) {
            return this.removeFunctions$org_mariuszgromada_math_mxparser_Function_A(...functionsNames);
        }
        else
            throw new Error('invalid overload');
    }
    removeFunctions$org_mariuszgromada_math_mxparser_Function_A(...functions) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            (o => o.removeFunctions.apply(o, functions))(this.functionExpression);
    }
    /**
     * Removes all functions
     * associated with the function expression.
     *
     * @see        Function
     */
    removeAllFunctions() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            this.functionExpression.removeAllFunctions();
    }
    /**
     * Enables verbose function mode
     */
    setVerboseMode() {
        this.functionExpression.setVerboseMode();
    }
    /**
     * Disables function verbose mode (sets default silent mode)
     */
    setSilentMode() {
        this.functionExpression.setSilentMode();
    }
    /**
     * Returns verbose mode status
     *
     * @return     {boolean} true if verbose mode is on,
     * otherwise returns false
     */
    getVerboseMode() {
        return this.functionExpression.getVerboseMode();
    }
    /**
     * Checks whether function name appears in function body
     * if yes the recursive mode is being set
     */
    checkRecursiveMode() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME) {
            const functionExpressionTokens = this.functionExpression.getInitialTokens();
            this.functionExpression.disableRecursiveMode();
            if (functionExpressionTokens != null)
                for (let index200 = functionExpressionTokens.iterator(); index200.hasNext();) {
                    let t = index200.next();
                    if (t.tokenStr === this.functionName) {
                        this.functionExpression.setRecursiveMode();
                        break;
                    }
                }
        }
    }
    /**
     * Gets recursive mode status
     *
     * @return     {boolean} true if recursive mode is enabled,
     * otherwise returns false
     */
    getRecursiveMode() {
        return this.functionExpression.getRecursiveMode();
    }
    /**
     * Gets computing time
     *
     * @return     {number} computing time in seconds.
     */
    getComputingTime() {
        return this.functionExpression.getComputingTime();
    }
    /**
     * Adds related expression.
     *
     * @param      {Expression} expression          the related expression
     */
    addRelatedExpression(expression) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            this.functionExpression.addRelatedExpression(expression);
    }
    /**
     * Removes related expression.
     *
     * @param      {Expression} expression          the related expression
     */
    removeRelatedExpression(expression) {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            this.functionExpression.removeRelatedExpression(expression);
    }
    /**
     * Set expression modified flags in the related expressions.
     */
    setExpressionModifiedFlags() {
        if (this.functionBodyType === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
            this.functionExpression.setExpressionModifiedFlag();
    }
}
exports.Function = Function;
Function["__class"] = "org.mariuszgromada.math.mxparser.Function";
var __Function = Function;
//# sourceMappingURL=Function.js.map