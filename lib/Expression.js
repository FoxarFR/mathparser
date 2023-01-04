"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
const AstronomicalConstants_1 = require("./mathcollection/AstronomicalConstants");
const BinaryRelations_1 = require("./mathcollection/BinaryRelations");
const BooleanAlgebra_1 = require("./mathcollection/BooleanAlgebra");
const MathConstants_1 = require("./mathcollection/MathConstants");
const MathFunctions_1 = require("./mathcollection/MathFunctions");
const NumberTheory_1 = require("./mathcollection/NumberTheory");
const PhysicalConstants_1 = require("./mathcollection/PhysicalConstants");
const Calculus_1 = require("./mathcollection/Calculus");
const ProbabilityDistributions_1 = require("./mathcollection/ProbabilityDistributions");
const SpecialFunctions_1 = require("./mathcollection/SpecialFunctions");
const Statistics_1 = require("./mathcollection/Statistics");
const Units_1 = require("./mathcollection/Units");
const BinaryRelation_1 = require("./parsertokens/BinaryRelation");
const BitwiseOperator_1 = require("./parsertokens/BitwiseOperator");
const BooleanOperator_1 = require("./parsertokens/BooleanOperator");
const CalculusOperator_1 = require("./parsertokens/CalculusOperator");
const ConstantValue_1 = require("./parsertokens/ConstantValue");
const Function1Arg_1 = require("./parsertokens/Function1Arg");
const Function2Arg_1 = require("./parsertokens/Function2Arg");
const Function3Arg_1 = require("./parsertokens/Function3Arg");
const FunctionVariadic_1 = require("./parsertokens/FunctionVariadic");
const KeyWord_1 = require("./parsertokens/KeyWord");
const Operator_1 = require("./parsertokens/Operator");
const ParserSymbol_1 = require("./parsertokens/ParserSymbol");
const RandomVariable_1 = require("./parsertokens/RandomVariable");
const Token_1 = require("./parsertokens/Token");
const Unit_1 = require("./parsertokens/Unit");
const SyntaxChecker_1 = require("./syntaxchecker/SyntaxChecker");
const PrimitiveElement_1 = require("./PrimitiveElement");
const mXparserConstants_1 = require("./mXparserConstants");
const j4ts_1 = require("j4ts/j4ts");
const j4ts_2 = require("j4ts/j4ts");
const Miscellaneous_1 = require("./Miscellaneous");
const Miscellaneous_2 = require("./Miscellaneous");
const Miscellaneous_3 = require("./Miscellaneous");
const Miscellaneous_4 = require("./Miscellaneous");
const Miscellaneous_5 = require("./Miscellaneous");
const Miscellaneous_6 = require("./Miscellaneous");
const Miscellaneous_7 = require("./Miscellaneous");
const Miscellaneous_8 = require("./Miscellaneous");
const RecursiveArgument_1 = require("./RecursiveArgument");
const Constant_1 = require("./Constant");
const Function_1 = require("./Function");
const Argument_1 = require("./Argument");
const ExpressionConstants_1 = require("./ExpressionConstants");
const ArgumentConstants_1 = require("./ArgumentConstants");
const FunctionConstants_1 = require("./FunctionConstants");
/**
 * Constructor - creates new expression from expression string.
 *
 * @param      {string} expressionString    definition of the expression
 * @param      {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements     Optional elements list (variadic - comma separated) of types: Argument, Constant, Function
 *
 * @see    PrimitiveElement
 * @class
 * @extends PrimitiveElement
 */
class Expression extends PrimitiveElement_1.PrimitiveElement {
    /**
     * Adds related expression
     * The same expression could be added more than once
     * For example when
     *
     * @param      {Expression} expression          the expression
     */
    addRelatedExpression(expression) {
        if (expression != null && expression !== this) {
            if (!this.relatedExpressionsList.contains(expression))
                this.relatedExpressionsList.add(expression);
        }
    }
    /**
     * Removes related expression
     *
     * @param      {Expression} expression          the expression
     */
    removeRelatedExpression(expression) {
        this.relatedExpressionsList.remove(expression);
    }
    /**
     * Prints related expression list
     */
    showRelatedExpressions() {
        j4ts_1.java.lang.System.out.println;
        j4ts_1.java.lang.System.out.println$java_lang_Object(this.description + " = " + this.expressionString + ":");
        for (let index140 = this.relatedExpressionsList.iterator(); index140.hasNext();) {
            let e = index140.next();
            j4ts_1.java.lang.System.out.println$java_lang_Object("-> " + e.description + " = " + e.expressionString);
        }
    }
    /**
     * Method return error message after
     * calling checkSyntax() method or
     * calculate().
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage() {
        return this.errorMessage;
    }
    /**
     * Gets syntax status of the expression.
     *
     * @return     {boolean} true if there are no syntax errors,
     * false when syntax error was found or
     * syntax status is unknown
     */
    getSyntaxStatus() {
        return this.syntaxStatus;
    }
    /**
     * Package level method for passing
     * information about errors identified
     * on the constructors level
     *
     * @param {boolean} syntaxStatus Syntax status
     * @param {string} errorMessage Error message
     *
     * @see Function
     */
    setSyntaxStatus(syntaxStatus, errorMessage) {
        this.syntaxStatus = syntaxStatus;
        this.errorMessage = errorMessage;
        this.expressionWasModified = false;
    }
    /**
     * Sets expression status to modified
     * Calls setExpressionModifiedFlag() method
     * to all related expressions.
     */
    setExpressionModifiedFlag() {
        if (this.recursionCallPending === false) {
            this.recursionCallPending = true;
            this.recursionCallsCounter = 0;
            this.internalClone = false;
            this.expressionWasModified = true;
            this.syntaxStatus = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
            this.errorMessage = "Syntax status unknown.";
            for (let index141 = this.relatedExpressionsList.iterator(); index141.hasNext();) {
                let e = index141.next();
                e.setExpressionModifiedFlag();
            }
            this.recursionCallPending = false;
        }
    }
    /**
     * Common variables while expression initializing
     * @private
     */
    /*private*/ expressionInternalVarsInit() {
        this.description = "";
        this.errorMessage = "";
        this.computingTime = 0;
        this.recursionCallPending = false;
        this.recursionCallsCounter = 0;
        this.internalClone = false;
        this.parserKeyWordsOnly = false;
        this.disableRounding = Expression.KEEP_ROUNDING_SETTINGS;
    }
    /**
     * Common elements while expression initializing
     * @private
     */
    /*private*/ expressionInit() {
        this.argumentsList = (new j4ts_1.java.util.ArrayList());
        this.functionsList = (new j4ts_1.java.util.ArrayList());
        this.constantsList = (new j4ts_1.java.util.ArrayList());
        this.relatedExpressionsList = (new j4ts_1.java.util.ArrayList());
        this.setSilentMode();
        this.disableRecursiveMode();
        this.expressionInternalVarsInit();
    }
    constructor(expressionString, initialTokens, argumentsList, functionsList, constantsList, disableUlpRounding, UDFExpression, UDFVariadicParamsAtRunTime) {
        if (expressionString !== null && expressionString !== undefined) {
            let expStringConst = expressionString.constructor;
            if (expStringConst.name.toLowerCase() === 'string')
                expressionString = expressionString.split(' ').join('');
        }
        if (((typeof expressionString === 'string') || (expressionString === null || expressionString === undefined)) && ((initialTokens != null && (initialTokens.constructor != null && initialTokens.constructor["__interfaces"] != null && initialTokens.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || initialTokens === null || initialTokens === undefined) && ((argumentsList != null && (argumentsList.constructor != null && argumentsList.constructor["__interfaces"] != null && argumentsList.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || argumentsList === null) && ((functionsList != null && (functionsList.constructor != null && functionsList.constructor["__interfaces"] != null && functionsList.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || functionsList === null) && ((constantsList != null && (constantsList.constructor != null && constantsList.constructor["__interfaces"] != null && constantsList.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || constantsList === null) && ((typeof disableUlpRounding === 'boolean') || disableUlpRounding === null) && ((typeof UDFExpression === 'boolean') || UDFExpression === null) && ((UDFVariadicParamsAtRunTime != null && (UDFVariadicParamsAtRunTime.constructor != null && UDFVariadicParamsAtRunTime.constructor["__interfaces"] != null && UDFVariadicParamsAtRunTime.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || UDFVariadicParamsAtRunTime === null)) {
            let __args = arguments;
            super(ExpressionConstants_1.ExpressionConstants.TYPE_ID);
            if (this.expressionString === undefined) {
                this.expressionString = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentsList === undefined) {
                this.argumentsList = null;
            }
            if (this.functionsList === undefined) {
                this.functionsList = null;
            }
            if (this.constantsList === undefined) {
                this.constantsList = null;
            }
            if (this.keyWordsList === undefined) {
                this.keyWordsList = null;
            }
            if (this.initialTokens === undefined) {
                this.initialTokens = null;
            }
            if (this.tokensList === undefined) {
                this.tokensList = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.expressionWasModified === undefined) {
                this.expressionWasModified = false;
            }
            if (this.recursiveMode === undefined) {
                this.recursiveMode = false;
            }
            if (this.verboseMode === undefined) {
                this.verboseMode = false;
            }
            if (this.disableRounding === undefined) {
                this.disableRounding = false;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            if (this.recursionCallPending === undefined) {
                this.recursionCallPending = false;
            }
            if (this.recursionCallsCounter === undefined) {
                this.recursionCallsCounter = 0;
            }
            if (this.parserKeyWordsOnly === undefined) {
                this.parserKeyWordsOnly = false;
            }
            if (this.UDFVariadicParamsAtRunTime === undefined) {
                this.UDFVariadicParamsAtRunTime = null;
            }
            if (this.internalClone === undefined) {
                this.internalClone = false;
            }
            this.UDFExpression = false;
            this.optionsChangesetNumber = -1;
            this.FUNCTION = "function";
            this.ARGUMENT = "argument";
            this.UNITCONST = "unit/const";
            this.ERROR = "error";
            this.expressionString = expressionString;
            this.initialTokens = initialTokens;
            this.argumentsList = argumentsList;
            this.functionsList = functionsList;
            this.constantsList = constantsList;
            this.relatedExpressionsList = (new j4ts_1.java.util.ArrayList());
            this.expressionWasModified = false;
            this.syntaxStatus = ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
            this.description = "_internal_";
            this.errorMessage = "";
            this.computingTime = 0;
            this.recursionCallPending = false;
            this.recursionCallsCounter = 0;
            this.internalClone = false;
            this.parserKeyWordsOnly = false;
            this.UDFExpression = UDFExpression;
            this.UDFVariadicParamsAtRunTime = UDFVariadicParamsAtRunTime;
            this.disableRounding = disableUlpRounding;
            this.setSilentMode();
            this.disableRecursiveMode();
        }
        else if (((typeof expressionString === 'string') || (expressionString === null || expressionString === undefined)) && ((initialTokens != null && (initialTokens.constructor != null && initialTokens.constructor["__interfaces"] != null && initialTokens.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || initialTokens === null || initialTokens === undefined) && ((argumentsList != null && (argumentsList.constructor != null && argumentsList.constructor["__interfaces"] != null && argumentsList.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || argumentsList === null) && ((functionsList != null && (functionsList.constructor != null && functionsList.constructor["__interfaces"] != null && functionsList.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || functionsList === null) && ((typeof constantsList === 'boolean') || constantsList === null) && ((typeof disableUlpRounding === 'boolean') || disableUlpRounding === null) && ((UDFExpression != null && (UDFExpression.constructor != null && UDFExpression.constructor["__interfaces"] != null && UDFExpression.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || UDFExpression === null) && UDFVariadicParamsAtRunTime === undefined) {
            let __args = arguments;
            let argumentsList = __args[1];
            let functionsList = __args[2];
            let constantsList = __args[3];
            let internal = __args[4];
            let UDFExpression = __args[5];
            let UDFVariadicParamsAtRunTime = __args[6];
            super(ExpressionConstants_1.ExpressionConstants.TYPE_ID);
            if (this.expressionString === undefined) {
                this.expressionString = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentsList === undefined) {
                this.argumentsList = null;
            }
            if (this.functionsList === undefined) {
                this.functionsList = null;
            }
            if (this.constantsList === undefined) {
                this.constantsList = null;
            }
            if (this.keyWordsList === undefined) {
                this.keyWordsList = null;
            }
            if (this.initialTokens === undefined) {
                this.initialTokens = null;
            }
            if (this.tokensList === undefined) {
                this.tokensList = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.expressionWasModified === undefined) {
                this.expressionWasModified = false;
            }
            if (this.recursiveMode === undefined) {
                this.recursiveMode = false;
            }
            if (this.verboseMode === undefined) {
                this.verboseMode = false;
            }
            if (this.disableRounding === undefined) {
                this.disableRounding = false;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            if (this.recursionCallPending === undefined) {
                this.recursionCallPending = false;
            }
            if (this.recursionCallsCounter === undefined) {
                this.recursionCallsCounter = 0;
            }
            if (this.parserKeyWordsOnly === undefined) {
                this.parserKeyWordsOnly = false;
            }
            if (this.UDFVariadicParamsAtRunTime === undefined) {
                this.UDFVariadicParamsAtRunTime = null;
            }
            if (this.internalClone === undefined) {
                this.internalClone = false;
            }
            this.UDFExpression = false;
            this.optionsChangesetNumber = -1;
            this.FUNCTION = "function";
            this.ARGUMENT = "argument";
            this.UNITCONST = "unit/const";
            this.ERROR = "error";
            this.expressionString = new String(expressionString);
            this.expressionInternalVarsInit();
            this.setSilentMode();
            this.disableRecursiveMode();
            this.argumentsList = argumentsList;
            this.functionsList = functionsList;
            this.constantsList = constantsList;
            this.UDFExpression = UDFExpression;
            this.UDFVariadicParamsAtRunTime = UDFVariadicParamsAtRunTime;
            this.relatedExpressionsList = (new j4ts_1.java.util.ArrayList());
            this.setExpressionModifiedFlag();
        }
        else if (((typeof expressionString === 'string') || (expressionString === null || expressionString === undefined)) && ((initialTokens != null && initialTokens instanceof Array && (initialTokens.length == 0 || initialTokens[0] == null || (initialTokens[0] != null && initialTokens[0] instanceof PrimitiveElement_1.PrimitiveElement))) || initialTokens === null || initialTokens === undefined) && argumentsList === undefined && functionsList === undefined && constantsList === undefined && disableUlpRounding === undefined && UDFExpression === undefined && UDFVariadicParamsAtRunTime === undefined) {
            let __args = arguments;
            let elements = __args[1];
            super(ExpressionConstants_1.ExpressionConstants.TYPE_ID);
            if (this.expressionString === undefined) {
                this.expressionString = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentsList === undefined) {
                this.argumentsList = null;
            }
            if (this.functionsList === undefined) {
                this.functionsList = null;
            }
            if (this.constantsList === undefined) {
                this.constantsList = null;
            }
            if (this.keyWordsList === undefined) {
                this.keyWordsList = null;
            }
            if (this.initialTokens === undefined) {
                this.initialTokens = null;
            }
            if (this.tokensList === undefined) {
                this.tokensList = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.expressionWasModified === undefined) {
                this.expressionWasModified = false;
            }
            if (this.recursiveMode === undefined) {
                this.recursiveMode = false;
            }
            if (this.verboseMode === undefined) {
                this.verboseMode = false;
            }
            if (this.disableRounding === undefined) {
                this.disableRounding = false;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            if (this.recursionCallPending === undefined) {
                this.recursionCallPending = false;
            }
            if (this.recursionCallsCounter === undefined) {
                this.recursionCallsCounter = 0;
            }
            if (this.parserKeyWordsOnly === undefined) {
                this.parserKeyWordsOnly = false;
            }
            if (this.UDFVariadicParamsAtRunTime === undefined) {
                this.UDFVariadicParamsAtRunTime = null;
            }
            if (this.internalClone === undefined) {
                this.internalClone = false;
            }
            this.UDFExpression = false;
            this.optionsChangesetNumber = -1;
            this.FUNCTION = "function";
            this.ARGUMENT = "argument";
            this.UNITCONST = "unit/const";
            this.ERROR = "error";
            this.expressionInit();
            this.expressionString = new String(expressionString);
            this.setExpressionModifiedFlag();
            this.addDefinitions.apply(this, elements);
        }
        else if (((typeof expressionString === 'string') || (expressionString === null || expressionString === undefined)) && ((typeof initialTokens === 'boolean') || initialTokens === null || initialTokens === undefined) && argumentsList === undefined && functionsList === undefined && constantsList === undefined && disableUlpRounding === undefined && UDFExpression === undefined && UDFVariadicParamsAtRunTime === undefined) {
            let __args = arguments;
            let parserKeyWordsOnly = __args[1];
            super(ExpressionConstants_1.ExpressionConstants.TYPE_ID);
            if (this.expressionString === undefined) {
                this.expressionString = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentsList === undefined) {
                this.argumentsList = null;
            }
            if (this.functionsList === undefined) {
                this.functionsList = null;
            }
            if (this.constantsList === undefined) {
                this.constantsList = null;
            }
            if (this.keyWordsList === undefined) {
                this.keyWordsList = null;
            }
            if (this.initialTokens === undefined) {
                this.initialTokens = null;
            }
            if (this.tokensList === undefined) {
                this.tokensList = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.expressionWasModified === undefined) {
                this.expressionWasModified = false;
            }
            if (this.recursiveMode === undefined) {
                this.recursiveMode = false;
            }
            if (this.verboseMode === undefined) {
                this.verboseMode = false;
            }
            if (this.disableRounding === undefined) {
                this.disableRounding = false;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            if (this.recursionCallPending === undefined) {
                this.recursionCallPending = false;
            }
            if (this.recursionCallsCounter === undefined) {
                this.recursionCallsCounter = 0;
            }
            if (this.parserKeyWordsOnly === undefined) {
                this.parserKeyWordsOnly = false;
            }
            if (this.UDFVariadicParamsAtRunTime === undefined) {
                this.UDFVariadicParamsAtRunTime = null;
            }
            if (this.internalClone === undefined) {
                this.internalClone = false;
            }
            this.UDFExpression = false;
            this.optionsChangesetNumber = -1;
            this.FUNCTION = "function";
            this.ARGUMENT = "argument";
            this.UNITCONST = "unit/const";
            this.ERROR = "error";
            this.expressionInit();
            this.expressionString = new String(expressionString);
            this.setExpressionModifiedFlag();
            this.parserKeyWordsOnly = parserKeyWordsOnly;
        }
        else if (((expressionString != null && expressionString instanceof Array && (expressionString.length == 0 || expressionString[0] == null || (expressionString[0] != null && expressionString[0] instanceof PrimitiveElement_1.PrimitiveElement))) || (expressionString === null || expressionString === undefined)) && initialTokens === undefined && argumentsList === undefined && functionsList === undefined && constantsList === undefined && disableUlpRounding === undefined && UDFExpression === undefined && UDFVariadicParamsAtRunTime === undefined) {
            let __args = arguments;
            let elements = __args[0];
            super(ExpressionConstants_1.ExpressionConstants.TYPE_ID);
            if (this.expressionString === undefined) {
                this.expressionString = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentsList === undefined) {
                this.argumentsList = null;
            }
            if (this.functionsList === undefined) {
                this.functionsList = null;
            }
            if (this.constantsList === undefined) {
                this.constantsList = null;
            }
            if (this.keyWordsList === undefined) {
                this.keyWordsList = null;
            }
            if (this.initialTokens === undefined) {
                this.initialTokens = null;
            }
            if (this.tokensList === undefined) {
                this.tokensList = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.expressionWasModified === undefined) {
                this.expressionWasModified = false;
            }
            if (this.recursiveMode === undefined) {
                this.recursiveMode = false;
            }
            if (this.verboseMode === undefined) {
                this.verboseMode = false;
            }
            if (this.disableRounding === undefined) {
                this.disableRounding = false;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            if (this.recursionCallPending === undefined) {
                this.recursionCallPending = false;
            }
            if (this.recursionCallsCounter === undefined) {
                this.recursionCallsCounter = 0;
            }
            if (this.parserKeyWordsOnly === undefined) {
                this.parserKeyWordsOnly = false;
            }
            if (this.UDFVariadicParamsAtRunTime === undefined) {
                this.UDFVariadicParamsAtRunTime = null;
            }
            if (this.internalClone === undefined) {
                this.internalClone = false;
            }
            this.UDFExpression = false;
            this.optionsChangesetNumber = -1;
            this.FUNCTION = "function";
            this.ARGUMENT = "argument";
            this.UNITCONST = "unit/const";
            this.ERROR = "error";
            this.expressionString = "";
            this.expressionInit();
            this.setExpressionModifiedFlag();
            this.addDefinitions.apply(this, elements);
        }
        else if (((expressionString != null && expressionString instanceof Expression) || (expressionString === null || expressionString === undefined)) && initialTokens === undefined && argumentsList === undefined && functionsList === undefined && constantsList === undefined && disableUlpRounding === undefined && UDFExpression === undefined && UDFVariadicParamsAtRunTime === undefined) {
            let __args = arguments;
            let expression = __args[0];
            super(ExpressionConstants_1.ExpressionConstants.TYPE_ID);
            if (this.expressionString === undefined) {
                this.expressionString = null;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.argumentsList === undefined) {
                this.argumentsList = null;
            }
            if (this.functionsList === undefined) {
                this.functionsList = null;
            }
            if (this.constantsList === undefined) {
                this.constantsList = null;
            }
            if (this.keyWordsList === undefined) {
                this.keyWordsList = null;
            }
            if (this.initialTokens === undefined) {
                this.initialTokens = null;
            }
            if (this.tokensList === undefined) {
                this.tokensList = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.computingTime === undefined) {
                this.computingTime = 0;
            }
            if (this.expressionWasModified === undefined) {
                this.expressionWasModified = false;
            }
            if (this.recursiveMode === undefined) {
                this.recursiveMode = false;
            }
            if (this.verboseMode === undefined) {
                this.verboseMode = false;
            }
            if (this.disableRounding === undefined) {
                this.disableRounding = false;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            if (this.recursionCallPending === undefined) {
                this.recursionCallPending = false;
            }
            if (this.recursionCallsCounter === undefined) {
                this.recursionCallsCounter = 0;
            }
            if (this.parserKeyWordsOnly === undefined) {
                this.parserKeyWordsOnly = false;
            }
            if (this.UDFVariadicParamsAtRunTime === undefined) {
                this.UDFVariadicParamsAtRunTime = null;
            }
            if (this.internalClone === undefined) {
                this.internalClone = false;
            }
            this.UDFExpression = false;
            this.optionsChangesetNumber = -1;
            this.FUNCTION = "function";
            this.ARGUMENT = "argument";
            this.UNITCONST = "unit/const";
            this.ERROR = "error";
            this.expressionString = new String(expression.expressionString);
            this.description = new String(expression.description);
            this.argumentsList = expression.argumentsList;
            this.functionsList = expression.functionsList;
            this.constantsList = expression.constantsList;
            this.keyWordsList = expression.keyWordsList;
            this.relatedExpressionsList = expression.relatedExpressionsList;
            this.computingTime = 0;
            this.expressionWasModified = expression.expressionWasModified;
            this.recursiveMode = expression.recursiveMode;
            this.verboseMode = expression.verboseMode;
            this.syntaxStatus = expression.syntaxStatus;
            this.errorMessage = new String(expression.errorMessage);
            this.recursionCallPending = expression.recursionCallPending;
            this.recursionCallsCounter = expression.recursionCallsCounter;
            this.parserKeyWordsOnly = expression.parserKeyWordsOnly;
            this.disableRounding = expression.disableRounding;
            this.UDFExpression = expression.UDFExpression;
            this.UDFVariadicParamsAtRunTime = expression.UDFVariadicParamsAtRunTime;
            this.internalClone = true;
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Sets (modifies expression) expression string.
     *
     * @param      {string} expressionString    the expression string
     */
    setExpressionString(expressionString) {
        this.expressionString = expressionString;
        this.setExpressionModifiedFlag();
    }
    /**
     * Returns expression string
     *
     * @return {string} Expression string definition.
     */
    getExpressionString() {
        return this.expressionString;
    }
    /**
     * Clears expression string
     */
    clearExpressionString() {
        this.expressionString = "";
        this.setExpressionModifiedFlag();
    }
    /**
     * Sets expression description.
     *
     * @param      {string} description         the description string
     */
    setDescription(description) {
        this.description = description;
    }
    /**
     * Gets expression description.
     *
     * @return     {string} String description.
     */
    getDescription() {
        return this.description;
    }
    /**
     * Clears expression description
     */
    clearDescription() {
        this.description = "";
    }
    /**
     * Enables verbose mode.
     */
    setVerboseMode() {
        this.verboseMode = true;
    }
    /**
     * Disables verbose mode (default silent mode).
     */
    setSilentMode() {
        this.verboseMode = false;
    }
    /**
     * Returns verbose mode status.
     *
     * @return     {boolean} true if verbose mode is on,
     * otherwise returns false.
     */
    getVerboseMode() {
        return this.verboseMode;
    }
    /**
     * Sets recursive mode
     */
    setRecursiveMode() {
        this.recursiveMode = true;
    }
    /**
     * Disables recursive mode
     */
    disableRecursiveMode() {
        this.recursiveMode = false;
    }
    /**
     * Gets recursive mode status
     *
     * @return     {boolean} true if recursive mode is enabled,
     * otherwise returns false.
     */
    getRecursiveMode() {
        return this.recursiveMode;
    }
    /**
     * Gets computing time.
     *
     * @return     {number} computing time in seconds.
     */
    getComputingTime() {
        return this.computingTime;
    }
    /**
     * Adds user defined elements (such as: Arguments, Constants, Functions)
     * to the expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    addDefinitions(...elements) {
        for (let index142 = 0; index142 < elements.length; index142++) {
            let e = elements[index142];
            {
                if (e != null) {
                    const elementTypeId = e.getMyTypeId();
                    if (elementTypeId === ArgumentConstants_1.ArgumentConstants.TYPE_ID)
                        this.addArguments(e);
                    else if (elementTypeId === Constant_1.Constant.TYPE_ID)
                        this.addConstants$org_mariuszgromada_math_mxparser_Constant_A(e);
                    else if (elementTypeId === FunctionConstants_1.FunctionConstants.TYPE_ID)
                        this.addFunctions(e);
                    else if (elementTypeId === RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE)
                        this.addArguments(e);
                }
            }
        }
    }
    /**
     * Removes user defined elements (such as: Arguments, Constants, Functions)
     * to the expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    removeDefinitions(...elements) {
        for (let index143 = 0; index143 < elements.length; index143++) {
            let e = elements[index143];
            {
                if (e != null) {
                    const elementTypeId = e.getMyTypeId();
                    if (elementTypeId === ArgumentConstants_1.ArgumentConstants.TYPE_ID)
                        this.removeArguments$org_mariuszgromada_math_mxparser_Argument_A(e);
                    else if (elementTypeId === Constant_1.Constant.TYPE_ID)
                        this.removeConstants$org_mariuszgromada_math_mxparser_Constant_A(e);
                    else if (elementTypeId === FunctionConstants_1.FunctionConstants.TYPE_ID)
                        this.removeFunctions$org_mariuszgromada_math_mxparser_Function_A(e);
                    else if (elementTypeId === RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE)
                        this.removeArguments$org_mariuszgromada_math_mxparser_Argument_A(e);
                }
            }
        }
    }
    /**
     * Adds arguments (variadic) to the expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Argument[]} arguments           the arguments list
     * (comma separated list)
     * @see        Argument
     * @see        RecursiveArgument
     */
    addArguments(...__arguments) {
        for (let index144 = 0; index144 < __arguments.length; index144++) {
            let arg = __arguments[index144];
            {
                if (arg != null) {
                    this.argumentsList.add(arg);
                    if (arg.getArgumentBodyType() === ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME)
                        arg.addRelatedExpression(this);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Enables to define the arguments (associated with
     * the expression) based on the given arguments names.
     *
     * @param      {java.lang.String[]} argumentsNames      the arguments names (variadic)
     * comma separated list
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    defineArguments(...argumentsNames) {
        for (let index145 = 0; index145 < argumentsNames.length; index145++) {
            let argName = argumentsNames[index145];
            {
                const arg = new Argument_1.Argument(argName);
                arg.addRelatedExpression(this);
                this.argumentsList.add(arg);
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Enables to define the argument (associated with the expression)
     * based on the argument name and the argument value.
     *
     * @param      {string} argumentName        the argument name
     * @param      {number} argumentValue       the the argument value
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    defineArgument(argumentName, argumentValue) {
        const arg = new Argument_1.Argument(argumentName, argumentValue);
        arg.addRelatedExpression(this);
        this.argumentsList.add(arg);
        this.setExpressionModifiedFlag();
    }
    /**
     * Gets argument index from the expression.
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
        const argumentsNumber = this.argumentsList.size();
        if (argumentsNumber > 0) {
            let argumentIndex = 0;
            let searchResult = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
            while (((argumentIndex < argumentsNumber) && (searchResult === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()))) {
                {
                    if (this.argumentsList.get(argumentIndex).getArgumentName() === argumentName)
                        searchResult = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
                    else
                        argumentIndex++;
                }
            }
            ;
            if (searchResult === ExpressionConstants_1.ExpressionConstants.FOUND_$LI$())
                return argumentIndex;
            else
                return ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
        }
        else
            return ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
    }
    getArgument$java_lang_String(argumentName) {
        const argumentIndex = this.getArgumentIndex(argumentName);
        if (argumentIndex === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$())
            return null;
        else
            return this.argumentsList.get(argumentIndex);
    }
    /**
     * Gets argument from the expression.
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
        if ((argumentIndex < 0) || (argumentIndex >= this.argumentsList.size()))
            return null;
        else
            return this.argumentsList.get(argumentIndex);
    }
    /**
     * Gets number of arguments associated with the expression.
     *
     * @return     {number} The number of arguments (int &gt;= 0)
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgumentsNumber() {
        return this.argumentsList.size();
    }
    /**
     * Sets argument value.
     *
     * @param      {string} argumentName        the argument name
     * @param      {number} argumentValue       the argument value
     */
    setArgumentValue(argumentName, argumentValue) {
        const argumentIndex = this.getArgumentIndex(argumentName);
        if (argumentIndex !== ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$())
            this.argumentsList.get(argumentIndex).setArgumentValue(argumentValue);
    }
    /**
     * Gets argument vale.
     *
     * @param      {string} argumentName        the argument name
     *
     * @return     {number} Argument value if argument name was found,
     * otherwise return Double.NaN.
     */
    getArgumentValue(argumentName) {
        const argumentIndex = this.getArgumentIndex(argumentName);
        if (argumentIndex !== ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$())
            return this.argumentsList.get(argumentIndex).getArgumentValue();
        else
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
    }
    removeArguments$java_lang_String_A(...argumentsNames) {
        for (let index146 = 0; index146 < argumentsNames.length; index146++) {
            let argumentName = argumentsNames[index146];
            {
                const argumentIndex = this.getArgumentIndex(argumentName);
                if (argumentIndex !== ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()) {
                    const arg = this.argumentsList.get(argumentIndex);
                    arg.removeRelatedExpression(this);
                    this.argumentsList.remove(argumentIndex);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Removes first occurrences of the arguments
     * associated with the expression.
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
        for (let index147 = 0; index147 < __arguments.length; index147++) {
            let argument = __arguments[index147];
            {
                if (argument != null) {
                    this.argumentsList.remove(argument);
                    argument.removeRelatedExpression(this);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Removes all arguments associated with the expression.
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    removeAllArguments() {
        for (let index148 = this.argumentsList.iterator(); index148.hasNext();) {
            let arg = index148.next();
            arg.removeRelatedExpression(this);
        }
        this.argumentsList.clear();
        this.setExpressionModifiedFlag();
    }
    addConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants) {
        for (let index149 = 0; index149 < constants.length; index149++) {
            let constant = constants[index149];
            {
                if (constant != null) {
                    this.constantsList.add(constant);
                    constant.addRelatedExpression(this);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Adds constants (variadic parameters) to the expression definition.
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
        this.constantsList.addAll(constantsList);
        for (let index150 = constantsList.iterator(); index150.hasNext();) {
            let c = index150.next();
            c.addRelatedExpression(this);
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Enables to define the constant (associated with
     * the expression) based on the constant name and
     * constant value.
     *
     * @param      {string} constantName        the constant name
     * @param      {number} constantValue       the constant value
     *
     * @see        Constant
     */
    defineConstant(constantName, constantValue) {
        const c = new Constant_1.Constant(constantName, constantValue);
        c.addRelatedExpression(this);
        this.constantsList.add(c);
        this.setExpressionModifiedFlag();
    }
    /**
     * Gets constant index associated with the expression.
     *
     * @param      {string} constantName        the constant name
     *
     * @return     {number} Constant index if constant name was found,
     * otherwise return Constant.NOT_FOUND.
     *
     * @see        Constant
     */
    getConstantIndex(constantName) {
        const constantsNumber = this.constantsList.size();
        if (constantsNumber > 0) {
            let constantIndex = 0;
            let searchResult = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
            while (((constantIndex < constantsNumber) && (searchResult === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()))) {
                {
                    if (this.constantsList.get(constantIndex).getConstantName() === constantName)
                        searchResult = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
                    else
                        constantIndex++;
                }
            }
            ;
            if (searchResult === ExpressionConstants_1.ExpressionConstants.FOUND_$LI$())
                return constantIndex;
            else
                return ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
        }
        else
            return ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
    }
    getConstant$java_lang_String(constantName) {
        const constantIndex = this.getConstantIndex(constantName);
        if (constantIndex === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$())
            return null;
        else
            return this.constantsList.get(constantIndex);
    }
    /**
     * Gets constant associated with the expression.
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
        if ((constantIndex < 0) || (constantIndex >= this.constantsList.size()))
            return null;
        else
            return this.constantsList.get(constantIndex);
    }
    /**
     * Gets number of constants associated with the expression.
     *
     * @return     {number} number of constants (int &gt;= 0)
     *
     * @see        Constant
     */
    getConstantsNumber() {
        return this.constantsList.size();
    }
    removeConstants$java_lang_String_A(...constantsNames) {
        for (let index151 = 0; index151 < constantsNames.length; index151++) {
            let constantName = constantsNames[index151];
            {
                const constantIndex = this.getConstantIndex(constantName);
                if (constantIndex !== ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()) {
                    const c = this.constantsList.get(constantIndex);
                    c.removeRelatedExpression(this);
                    this.constantsList.remove(constantIndex);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Removes first occurrences of the constants
     * associated with the expression.
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
        for (let index152 = 0; index152 < constants.length; index152++) {
            let constant = constants[index152];
            {
                if (constant != null) {
                    this.constantsList.remove(constant);
                    constant.removeRelatedExpression(this);
                    this.setExpressionModifiedFlag();
                }
            }
        }
    }
    /**
     * Removes all constants
     * associated with the expression
     *
     * @see        Constant
     */
    removeAllConstants() {
        for (let index153 = this.constantsList.iterator(); index153.hasNext();) {
            let c = index153.next();
            c.removeRelatedExpression(this);
        }
        this.constantsList.clear();
        this.setExpressionModifiedFlag();
    }
    /**
     * Adds functions (variadic parameters) to the expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Function[]} functions           the functions
     * (variadic parameters) comma separated list
     *
     * @see        Function
     */
    addFunctions(...functions) {
        for (let index154 = 0; index154 < functions.length; index154++) {
            let f = functions[index154];
            {
                if (f != null) {
                    this.functionsList.add(f);
                    if (f.getFunctionBodyType() === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
                        f.addRelatedExpression(this);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Enables to define the function (associated with
     * the expression) based on the function name,
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
        const f = new Function_1.Function(functionName, functionExpressionString, argumentsNames);
        this.functionsList.add(f);
        f.addRelatedExpression(this);
        this.setExpressionModifiedFlag();
    }
    /**
     * Gets index of function associated with the expression.
     *
     * @param      {string} functionName        the function name
     *
     * @return     {number} Function index if function name was found,
     * otherwise returns Function.NOT_FOUND
     *
     * @see        Function
     */
    getFunctionIndex(functionName) {
        const functionsNumber = this.functionsList.size();
        if (functionsNumber > 0) {
            let functionIndex = 0;
            let searchResult = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
            while (((functionIndex < functionsNumber) && (searchResult === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()))) {
                {
                    if (this.functionsList.get(functionIndex).getFunctionName() === functionName)
                        searchResult = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
                    else
                        functionIndex++;
                }
            }
            ;
            if (searchResult === ExpressionConstants_1.ExpressionConstants.FOUND_$LI$())
                return functionIndex;
            else
                return ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
        }
        else
            return ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
    }
    getFunction$java_lang_String(functionName) {
        const functionIndex = this.getFunctionIndex(functionName);
        if (functionIndex === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$())
            return null;
        else
            return this.functionsList.get(functionIndex);
    }
    /**
     * Gets function associated with the expression.
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
        if ((functionIndex < 0) || (functionIndex >= this.functionsList.size()))
            return null;
        else
            return this.functionsList.get(functionIndex);
    }
    /**
     * Gets number of functions associated with the expression.
     *
     * @return     {number} number of functions (int &gt;= 0)
     *
     * @see        Function
     */
    getFunctionsNumber() {
        return this.functionsList.size();
    }
    removeFunctions$java_lang_String_A(...functionsNames) {
        for (let index155 = 0; index155 < functionsNames.length; index155++) {
            let functionName = functionsNames[index155];
            {
                const functionIndex = this.getFunctionIndex(functionName);
                if (functionIndex !== ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()) {
                    const f = this.functionsList.get(functionIndex);
                    f.removeRelatedExpression(this);
                    this.functionsList.remove(f);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Removes first occurrences of the functions
     * associated with the expression.
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
        for (let index156 = 0; index156 < functions.length; index156++) {
            let __function = functions[index156];
            {
                if (__function != null) {
                    __function.removeRelatedExpression(this);
                    this.functionsList.remove(__function);
                }
            }
        }
        this.setExpressionModifiedFlag();
    }
    /**
     * Removes all functions
     * associated with the expression.
     *
     * @see        Function
     */
    removeAllFunctions() {
        for (let index157 = this.functionsList.iterator(); index157.hasNext();) {
            let f = index157.next();
            f.removeRelatedExpression(this);
        }
        this.functionsList.clear();
        this.setExpressionModifiedFlag();
    }
    setToNumber$int$double$boolean(pos, number, ulpRound) {
        const token = this.tokensList.get(pos);
        if ((mXparserConstants_1.mXparserConstants.ulpRounding) && (this.disableRounding === false)) {
            if (ulpRound) {
                if (( /* isNaN */isNaN(number)) || ( /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(number)))
                    token.tokenValue = number;
                else {
                    const precision = MathFunctions_1.MathFunctions.ulpDecimalDigitsBefore(number);
                    if (precision >= 0)
                        token.tokenValue = MathFunctions_1.MathFunctions.round(number, precision);
                    else
                        token.tokenValue = number;
                }
            }
            else {
                token.tokenValue = number;
            }
        }
        else {
            token.tokenValue = number;
        }
        token.tokenTypeId = ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID;
        token.tokenId = ParserSymbol_1.ParserSymbol.NUMBER_ID;
        token.keyWord = ParserSymbol_1.ParserSymbol.NUMBER_STR;
    }
    /**
     * Sets given token to the number type / value.
     * Method should be called only by the SetDecreaseRemove like methods
     *
     * @param      {number} pos                 the position on which token
     * should be updated to the given number
     * @param      {number} number              the number
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    setToNumber(pos, number, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof number === 'number') || number === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.setToNumber$int$double$boolean(pos, number, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof number === 'number') || number === null) && ulpRound === undefined) {
            return this.setToNumber$int$double(pos, number);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ setToNumber$int$double(pos, number) {
        this.setToNumber$int$double$boolean(pos, number, false);
    }
    f1SetDecreaseRemove$int$double$boolean(pos, result, ulpRound) {
        this.setToNumber$int$double$boolean(pos, result, ulpRound);
        this.tokensList.get(pos).tokenLevel--;
        this.tokensList.remove(pos + 1);
    }
    /**
     * SetDecreaseRemove for 1 arg functions
     *
     * SetDecreaseRemove like methods are called by the methods
     * calculating values of the unary operation, binary relations
     * and functions.
     *
     * 3 things are done by this type of methods
     * 1) Set token type to number type / value
     * 2) Decrease level of the token
     * 3) Remove no longer needed tokens
     *
     * For example:
     *
     * Expression string: 1+cos(0)
     * will be tokened as follows:
     *
     * idx   :  0   1    2    3   4   5
     * token :  1   +   cos   (   0   )
     * level :  0   0    1    2   2   2
     *
     * Partitions with the highest level will be handled first.
     * In the case presented above, it means, that the parenthesis will be removed
     *
     * idx   :  0   1    2    3
     * token :  1   +   cos   0
     * level :  0   0    1    2
     *
     * Next step is to calculate cos(0) = 1
     *
     * SetDecreaseRemove like methods
     *
     * 1) Set cos token to 1 (pos=2, result=1):
     * idx   :  0   1    2    3
     * token :  1   +    1    0
     * level :  0   0    1    2
     *
     * 2) Decrease level (pos=2):
     * idx   :  0   1    2    3
     * token :  1   +    1    0
     * level :  0   0    0    2
     *
     * 3) Remove no longer needed tokens (pos+1=3):
     * idx   :  0   1    2
     * token :  1   +    1
     * level :  0   0    0
     *
     * @param      {number} pos                 the position on which token
     * should be updated to the given number
     * @param      {number} result              the number
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    f1SetDecreaseRemove(pos, result, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.f1SetDecreaseRemove$int$double$boolean(pos, result, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ulpRound === undefined) {
            return this.f1SetDecreaseRemove$int$double(pos, result);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ f1SetDecreaseRemove$int$double(pos, result) {
        this.f1SetDecreaseRemove$int$double$boolean(pos, result, false);
    }
    f2SetDecreaseRemove$int$double$boolean(pos, result, ulpRound) {
        this.setToNumber$int$double$boolean(pos, result, ulpRound);
        this.tokensList.get(pos).tokenLevel--;
        this.tokensList.remove(pos + 2);
        this.tokensList.remove(pos + 1);
    }
    /**
     * SetDecreaseRemove for 2-args functions
     *
     * For detailed specification refer to the
     * f1SetDecreaseRemove()
     *
     * @param      {number} pos                 the position on which token
     * should be updated to the given number
     * @param      {number} result              the number
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    f2SetDecreaseRemove(pos, result, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.f2SetDecreaseRemove$int$double$boolean(pos, result, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ulpRound === undefined) {
            return this.f2SetDecreaseRemove$int$double(pos, result);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ f2SetDecreaseRemove$int$double(pos, result) {
        this.f2SetDecreaseRemove$int$double$boolean(pos, result, false);
    }
    f3SetDecreaseRemove$int$double$boolean(pos, result, ulpRound) {
        this.setToNumber$int$double$boolean(pos, result, ulpRound);
        this.tokensList.get(pos).tokenLevel--;
        this.tokensList.remove(pos + 3);
        this.tokensList.remove(pos + 2);
        this.tokensList.remove(pos + 1);
    }
    /**
     * SetDecreaseRemove for 3-args functions
     *
     * For detailed specification refer to the
     * f1SetDecreaseRemove()
     *
     * @param      {number} pos                 the position on which token
     * should be updated to the given number
     * @param      {number} result              the number
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    f3SetDecreaseRemove(pos, result, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.f3SetDecreaseRemove$int$double$boolean(pos, result, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ulpRound === undefined) {
            return this.f3SetDecreaseRemove$int$double(pos, result);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ f3SetDecreaseRemove$int$double(pos, result) {
        this.f3SetDecreaseRemove$int$double$boolean(pos, result, false);
    }
    opSetDecreaseRemove$int$double$boolean(pos, result, ulpRound) {
        this.setToNumber$int$double$boolean(pos, result, ulpRound);
        this.tokensList.remove(pos + 1);
        this.tokensList.remove(pos - 1);
    }
    /**
     * SetDecreaseRemove for operators
     *
     * For detailed specification refer to the
     * f1SetDecreaseRemove()
     *
     * @param      {number} pos                 the position on which token
     * should be updated to the given number
     * @param      {number} result              the number
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    opSetDecreaseRemove(pos, result, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.opSetDecreaseRemove$int$double$boolean(pos, result, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ulpRound === undefined) {
            return this.opSetDecreaseRemove$int$double(pos, result);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ opSetDecreaseRemove$int$double(pos, result) {
        this.opSetDecreaseRemove$int$double$boolean(pos, result, false);
    }
    calcSetDecreaseRemove$int$double$boolean(pos, result, ulpRound) {
        this.setToNumber$int$double$boolean(pos, result, ulpRound);
        this.tokensList.get(pos).tokenLevel--;
        const lPos = pos + 1;
        let rPos = lPos + 1;
        while ((!((this.tokensList.get(rPos).tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (this.tokensList.get(rPos).tokenId === ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID) && (this.tokensList.get(rPos).tokenLevel === this.tokensList.get(lPos).tokenLevel)))) {
            rPos++;
        }
        ;
        for (let p = rPos; p >= lPos; p--) {
            this.tokensList.remove(p);
        }
    }
    /**
     * SetDecreaseRemove for calculus operators.
     *
     * For detailed specification refer to the
     * f1SetDecreaseRemove()
     *
     * @param      {number} pos                 the position on which token
     * should be updated to the given number
     * @param      {number} result              the number
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    calcSetDecreaseRemove(pos, result, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.calcSetDecreaseRemove$int$double$boolean(pos, result, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof result === 'number') || result === null) && ulpRound === undefined) {
            return this.calcSetDecreaseRemove$int$double(pos, result);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ calcSetDecreaseRemove$int$double(pos, result) {
        this.calcSetDecreaseRemove$int$double$boolean(pos, result, false);
    }
    variadicSetDecreaseRemove$int$double$int$boolean(pos, value, length, ulpRound) {
        this.setToNumber$int$double$boolean(pos, value, ulpRound);
        this.tokensList.get(pos).tokenLevel--;
        for (let p = pos + length; p > pos; p--) {
            this.tokensList.remove(p);
        }
    }
    /**
     * SetDecreaseRemove for special functions.
     *
     * For detailed specification refer to the
     * f1SetDecreaseRemove()
     *
     * @param      {number} pos                 the position on which token
     * should be updated to the given number
     * @param      result              the number
     * @param      {number} length              the special function range
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @param {number} value
     * @private
     */
    variadicSetDecreaseRemove(pos, value, length, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof value === 'number') || value === null) && ((typeof length === 'number') || length === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.variadicSetDecreaseRemove$int$double$int$boolean(pos, value, length, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof value === 'number') || value === null) && ((typeof length === 'number') || length === null) && ulpRound === undefined) {
            return this.variadicSetDecreaseRemove$int$double$int(pos, value, length);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ variadicSetDecreaseRemove$int$double$int(pos, value, length) {
        this.variadicSetDecreaseRemove$int$double$int$boolean(pos, value, length, false);
    }
    ifSetRemove$int$double$boolean(pos, ifCondition, ulpRound) {
        const lPos = pos + 1;
        const ifLevel = this.tokensList.get(lPos).tokenLevel;
        let c1Pos = lPos + 1;
        while ((!((this.tokensList.get(c1Pos).tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (this.tokensList.get(c1Pos).tokenId === ParserSymbol_1.ParserSymbol.COMMA_ID) && (this.tokensList.get(c1Pos).tokenLevel === ifLevel)))) {
            c1Pos++;
        }
        ;
        let c2Pos = c1Pos + 1;
        while ((!((this.tokensList.get(c2Pos).tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (this.tokensList.get(c2Pos).tokenId === ParserSymbol_1.ParserSymbol.COMMA_ID) && (this.tokensList.get(c2Pos).tokenLevel === ifLevel)))) {
            c2Pos++;
        }
        ;
        let rPos = c2Pos + 1;
        while ((!((this.tokensList.get(rPos).tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (this.tokensList.get(rPos).tokenId === ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID) && (this.tokensList.get(rPos).tokenLevel === ifLevel)))) {
            rPos++;
        }
        ;
        if (!isNaN(ifCondition)) {
            if (ifCondition !== 0) {
                this.setToNumber$int$double(c2Pos + 1, j4ts_2.javaemul.internal.DoubleHelper.NaN);
                this.tokensList.get(c2Pos + 1).tokenLevel = ifLevel;
                this.removeTokens(c2Pos + 2, rPos - 1);
            }
            else {
                this.setToNumber$int$double(c1Pos + 1, j4ts_2.javaemul.internal.DoubleHelper.NaN);
                this.tokensList.get(c1Pos + 1).tokenLevel = ifLevel;
                this.removeTokens(c1Pos + 2, c2Pos - 1);
            }
        }
        else {
            this.setToNumber$int$double(c1Pos + 1, j4ts_2.javaemul.internal.DoubleHelper.NaN);
            this.setToNumber$int$double(c2Pos + 1, j4ts_2.javaemul.internal.DoubleHelper.NaN);
            this.tokensList.get(c1Pos + 1).tokenLevel = ifLevel;
            this.tokensList.get(c2Pos + 1).tokenLevel = ifLevel;
            this.removeTokens(c2Pos + 2, rPos - 1);
            this.removeTokens(c1Pos + 2, c2Pos - 1);
        }
        this.setToNumber$int$double$boolean(lPos + 1, ifCondition, ulpRound);
        this.tokensList.get(lPos + 1).tokenLevel = ifLevel;
        this.removeTokens(lPos + 2, c1Pos - 1);
        this.tokensList.get(pos).tokenId = Function3Arg_1.Function3Arg.IF_ID;
    }
    /**
     * If set remove method for the if function.
     *
     * @param      {number} pos                 the position
     * @param      {number} ifCondition         the result of if condition
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    ifSetRemove(pos, ifCondition, ulpRound) {
        if (((typeof pos === 'number') || pos === null) && ((typeof ifCondition === 'number') || ifCondition === null) && ((typeof ulpRound === 'boolean') || ulpRound === null)) {
            return this.ifSetRemove$int$double$boolean(pos, ifCondition, ulpRound);
        }
        else if (((typeof pos === 'number') || pos === null) && ((typeof ifCondition === 'number') || ifCondition === null) && ulpRound === undefined) {
            return this.ifSetRemove$int$double(pos, ifCondition);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ removeTokens(from, to) {
        if (from < to) {
            for (let p = to; p >= from; p--) {
                this.tokensList.remove(p);
            }
        }
        else if (from === to)
            this.tokensList.remove(from);
    }
    /*private*/ ifSetRemove$int$double(pos, ifCondition) {
        this.ifSetRemove$int$double$boolean(pos, ifCondition, false);
    }
    /**
     * Creates string tokens list from the subexpression.
     *
     * @param      {number} startPos            start position (index)
     * @param      {number} endPos              end position   (index)
     *
     * @return     {*} tokens list representing requested subexpression.
     * @param {*} tokensList
     * @private
     */
    /*private*/ createInitialTokens(startPos, endPos, tokensList) {
        const tokens = (new j4ts_1.java.util.ArrayList());
        let t;
        for (let p = startPos; p <= endPos; p++) {
            {
                t = /* clone */ ((o) => { if (o.clone != undefined) {
                    return o.clone();
                }
                else {
                    let clone = Object.create(o);
                    for (let p in o) {
                        if (o.hasOwnProperty(p))
                            clone[p] = o[p];
                    }
                    return clone;
                } })(tokensList.get(p));
                tokens.add(t);
            }
            ;
        }
        return tokens;
    }
    /**
     * Return number of functions parameters.
     *
     * @param      {number} pos                 the function position
     * @return {number}
     * @private
     */
    /*private*/ getParametersNumber(pos) {
        const lPpos = pos + 1;
        if (lPpos === this.initialTokens.size())
            return -1;
        if ((this.initialTokens.get(lPpos).tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (this.initialTokens.get(lPpos).tokenId === ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_ID)) {
            const tokenLevel = this.initialTokens.get(lPpos).tokenLevel;
            let endPos = lPpos + 1;
            while ((!((this.initialTokens.get(endPos).tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (this.initialTokens.get(endPos).tokenId === ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID) && (this.initialTokens.get(endPos).tokenLevel === tokenLevel)))) {
                endPos++;
            }
            ;
            if (endPos === lPpos + 1)
                return 0;
            let numberOfCommas = 0;
            for (let p = lPpos; p < endPos; p++) {
                {
                    const token = this.initialTokens.get(p);
                    if ((token.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (token.tokenId === ParserSymbol_1.ParserSymbol.COMMA_ID) && (token.tokenLevel === tokenLevel))
                        numberOfCommas++;
                }
                ;
            }
            return numberOfCommas + 1;
        }
        else {
            return -1;
        }
    }
    /**
     * Returns list of the functions parameters.
     *
     * @param      {number} pos                 the function position
     * @param      {*} tokensList          the tokens list
     *
     * @return     {*} the list of function parameters
     *
     * @see        FunctionParameter
     * @private
     */
    /*private*/ getFunctionParameters(pos, tokensList) {
        const functionParameters = (new j4ts_1.java.util.ArrayList());
        let cPos = pos + 2;
        const tokenLevel = tokensList.get(pos + 1).tokenLevel;
        let pPos = cPos;
        let comma;
        let paren;
        let end = false;
        let paramTkones = (new j4ts_1.java.util.ArrayList());
        let paramStr = "";
        do {
            {
                const t = tokensList.get(cPos);
                comma = false;
                paren = false;
                if (t.tokenLevel === tokenLevel)
                    if (t.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) {
                        if (t.tokenId === ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID)
                            paren = true;
                        else if (t.tokenId === ParserSymbol_1.ParserSymbol.COMMA_ID)
                            comma = true;
                    }
                if ((paren === true) || (comma === true)) {
                    if (cPos > pos + 2) {
                        functionParameters.add(new Miscellaneous_8.FunctionParameter(paramTkones, paramStr, pPos, cPos - 1));
                        paramTkones = (new j4ts_1.java.util.ArrayList());
                        paramStr = "";
                        pPos = cPos + 1;
                    }
                }
                else {
                    paramTkones.add(t);
                    paramStr = paramStr + t.tokenStr;
                }
                if (paren)
                    end = true;
                else
                    cPos++;
            }
        } while ((!end));
        return functionParameters;
    }
    /**
     * Gets / returns argument representing given argument name. If
     * argument name exists on the list of known arguments
     * the the initial status of the found argument is remembered, otherwise new
     * argument will be created.
     *
     * @param      {string} argumentName        the argument name
     *
     * @return     {ArgumentParameter} Argument parameter representing given argument name:
     *
     *
     * @see        ArgumentParameter
     * @see        Argument
     * @private
     */
    /*private*/ getParamArgument(argumentName) {
        const argParam = new Miscellaneous_7.ArgumentParameter();
        argParam.index = this.getArgumentIndex(argumentName);
        argParam.argument = this.getArgument$int(argParam.index);
        argParam.presence = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
        if (argParam.argument == null) {
            argParam.argument = new Argument_1.Argument(argumentName);
            this.argumentsList.add(argParam.argument);
            argParam.index = this.argumentsList.size() - 1;
            argParam.presence = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
        }
        else {
            argParam.initialValue = argParam.argument.argumentValue;
            argParam.initialType = argParam.argument.argumentType;
            argParam.argument.argumentValue = argParam.argument.getArgumentValue();
            argParam.argument.argumentType = ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT;
        }
        return argParam;
    }
    /**
     * Clears argument parameter.
     *
     * @param      {ArgumentParameter} argParam            the argument parameter.
     * @private
     */
    /*private*/ clearParamArgument(argParam) {
        if (argParam.presence === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$())
            this.argumentsList.remove(argParam.index);
        else {
            argParam.argument.argumentValue = argParam.initialValue;
            argParam.argument.argumentType = argParam.initialType;
        }
    }
    /**
     * Free Arguments handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ FREE_ARGUMENT(pos) {
        const argument = this.argumentsList.get(this.tokensList.get(pos).tokenId);
        const argumentVerboseMode = argument.getVerboseMode();
        if (this.verboseMode === true)
            argument.setVerboseMode();
        this.setToNumber$int$double(pos, argument.getArgumentValue());
        if (argumentVerboseMode === false)
            argument.setSilentMode();
    }
    /**
     * Dependent Arguments handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ DEPENDENT_ARGUMENT(pos) {
        const argument = this.argumentsList.get(this.tokensList.get(pos).tokenId);
        const argumentVerboseMode = argument.getVerboseMode();
        if (this.verboseMode === true)
            argument.setVerboseMode();
        const tokensListSizeBefore = this.tokensList.size();
        const tokenBefore = this.tokensList.get(pos);
        const argumentValue = argument.getArgumentValue();
        const tokensListSizeAfter = this.tokensList.size();
        if (tokensListSizeBefore === tokensListSizeAfter) {
            const tokenAfter = this.tokensList.get(pos);
            if ((tokenBefore.tokenTypeId === tokenAfter.tokenTypeId) && (tokenBefore.tokenId === tokenAfter.tokenId)) {
                this.setToNumber$int$double(pos, argumentValue);
            }
        }
        if (argumentVerboseMode === false)
            argument.setSilentMode();
    }
    /**
     * User functions handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ USER_FUNCTION(pos) {
        let __function;
        const fun = this.functionsList.get(this.tokensList.get(pos).tokenId);
        if (fun.getRecursiveMode() === true) {
            __function = /* clone */ ((o) => { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                let clone = Object.create(o);
                for (let p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(fun);
            __function.functionExpression.recursionCallsCounter = this.recursionCallsCounter;
        }
        else
            __function = fun;
        __function.functionExpression.UDFVariadicParamsAtRunTime = this.getNumbers(pos);
        const argsNumber = __function.getParametersNumber();
        if (__function.isVariadic === false)
            for (let argIdx = 0; argIdx < argsNumber; argIdx++) {
                __function.setArgumentValue(argIdx, this.tokensList.get(pos + argIdx + 1).tokenValue);
            }
        const functionVerboseMode = __function.getVerboseMode();
        if (this.verboseMode === true)
            __function.setVerboseMode();
        const tokensListSizeBefore = this.tokensList.size();
        const tokenBefore = this.tokensList.get(pos);
        let value;
        try {
            value = __function.calculate$();
        }
        catch (soe) {
            value = j4ts_2.javaemul.internal.DoubleHelper.NaN;
            this.errorMessage = soe.message;
        }
        const tokensListSizeAfter = this.tokensList.size();
        if (tokensListSizeBefore === tokensListSizeAfter) {
            const tokenAfter = this.tokensList.get(pos);
            if ((tokenBefore.tokenTypeId === tokenAfter.tokenTypeId) && (tokenBefore.tokenId === tokenAfter.tokenId)) {
                this.setToNumber$int$double(pos, value);
                this.tokensList.get(pos).tokenLevel--;
                for (let argIdx = argsNumber; argIdx > 0; argIdx--) {
                    this.tokensList.remove(pos + argIdx);
                }
            }
        }
        if (functionVerboseMode === false)
            __function.setSilentMode();
    }
    /**
     * User constants handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ USER_CONSTANT(pos) {
        const constant = this.constantsList.get(this.tokensList.get(pos).tokenId);
        this.setToNumber$int$double(pos, constant.getConstantValue());
    }
    /**
     * Recursive arguments handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ RECURSIVE_ARGUMENT(pos) {
        const index = this.tokensList.get(pos + 1).tokenValue;
        const argument = this.argumentsList.get(this.tokensList.get(pos).tokenId);
        const argumentVerboseMode = argument.getVerboseMode();
        if (this.verboseMode === true)
            argument.setVerboseMode();
        const result = argument.getArgumentValue$double(index);
        this.f1SetDecreaseRemove$int$double(pos, result);
        if (argumentVerboseMode === false)
            argument.setSilentMode();
    }
    /**
     * Constants handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CONSTANT(pos) {
        let constValue = j4ts_2.javaemul.internal.DoubleHelper.NaN;
        switch ((this.tokensList.get(pos).tokenId)) {
            case ConstantValue_1.ConstantValue.PI_ID:
                constValue = MathConstants_1.MathConstants.PI;
                break;
            case ConstantValue_1.ConstantValue.EULER_ID:
                constValue = MathConstants_1.MathConstants.E;
                break;
            case ConstantValue_1.ConstantValue.EULER_MASCHERONI_ID:
                constValue = MathConstants_1.MathConstants.EULER_MASCHERONI;
                break;
            case ConstantValue_1.ConstantValue.GOLDEN_RATIO_ID:
                constValue = MathConstants_1.MathConstants.GOLDEN_RATIO;
                break;
            case ConstantValue_1.ConstantValue.PLASTIC_ID:
                constValue = MathConstants_1.MathConstants.PLASTIC;
                break;
            case ConstantValue_1.ConstantValue.EMBREE_TREFETHEN_ID:
                constValue = MathConstants_1.MathConstants.EMBREE_TREFETHEN;
                break;
            case ConstantValue_1.ConstantValue.FEIGENBAUM_DELTA_ID:
                constValue = MathConstants_1.MathConstants.FEIGENBAUM_DELTA;
                break;
            case ConstantValue_1.ConstantValue.FEIGENBAUM_ALFA_ID:
                constValue = MathConstants_1.MathConstants.FEIGENBAUM_ALFA;
                break;
            case ConstantValue_1.ConstantValue.TWIN_PRIME_ID:
                constValue = MathConstants_1.MathConstants.TWIN_PRIME;
                break;
            case ConstantValue_1.ConstantValue.MEISSEL_MERTEENS_ID:
                constValue = MathConstants_1.MathConstants.MEISSEL_MERTEENS;
                break;
            case ConstantValue_1.ConstantValue.BRAUN_TWIN_PRIME_ID:
                constValue = MathConstants_1.MathConstants.BRAUN_TWIN_PRIME;
                break;
            case ConstantValue_1.ConstantValue.BRAUN_PRIME_QUADR_ID:
                constValue = MathConstants_1.MathConstants.BRAUN_PRIME_QUADR;
                break;
            case ConstantValue_1.ConstantValue.BRUIJN_NEWMAN_ID:
                constValue = MathConstants_1.MathConstants.BRUIJN_NEWMAN;
                break;
            case ConstantValue_1.ConstantValue.CATALAN_ID:
                constValue = MathConstants_1.MathConstants.CATALAN;
                break;
            case ConstantValue_1.ConstantValue.LANDAU_RAMANUJAN_ID:
                constValue = MathConstants_1.MathConstants.LANDAU_RAMANUJAN;
                break;
            case ConstantValue_1.ConstantValue.VISWANATH_ID:
                constValue = MathConstants_1.MathConstants.VISWANATH;
                break;
            case ConstantValue_1.ConstantValue.LEGENDRE_ID:
                constValue = MathConstants_1.MathConstants.LEGENDRE;
                break;
            case ConstantValue_1.ConstantValue.RAMANUJAN_SOLDNER_ID:
                constValue = MathConstants_1.MathConstants.RAMANUJAN_SOLDNER;
                break;
            case ConstantValue_1.ConstantValue.ERDOS_BORWEIN_ID:
                constValue = MathConstants_1.MathConstants.ERDOS_BORWEIN;
                break;
            case ConstantValue_1.ConstantValue.BERNSTEIN_ID:
                constValue = MathConstants_1.MathConstants.BERNSTEIN;
                break;
            case ConstantValue_1.ConstantValue.GAUSS_KUZMIN_WIRSING_ID:
                constValue = MathConstants_1.MathConstants.GAUSS_KUZMIN_WIRSING;
                break;
            case ConstantValue_1.ConstantValue.HAFNER_SARNAK_MCCURLEY_ID:
                constValue = MathConstants_1.MathConstants.HAFNER_SARNAK_MCCURLEY;
                break;
            case ConstantValue_1.ConstantValue.GOLOMB_DICKMAN_ID:
                constValue = MathConstants_1.MathConstants.GOLOMB_DICKMAN;
                break;
            case ConstantValue_1.ConstantValue.CAHEN_ID:
                constValue = MathConstants_1.MathConstants.CAHEN;
                break;
            case ConstantValue_1.ConstantValue.LAPLACE_LIMIT_ID:
                constValue = MathConstants_1.MathConstants.LAPLACE_LIMIT;
                break;
            case ConstantValue_1.ConstantValue.ALLADI_GRINSTEAD_ID:
                constValue = MathConstants_1.MathConstants.ALLADI_GRINSTEAD;
                break;
            case ConstantValue_1.ConstantValue.LENGYEL_ID:
                constValue = MathConstants_1.MathConstants.LENGYEL;
                break;
            case ConstantValue_1.ConstantValue.LEVY_ID:
                constValue = MathConstants_1.MathConstants.LEVY;
                break;
            case ConstantValue_1.ConstantValue.APERY_ID:
                constValue = MathConstants_1.MathConstants.APERY;
                break;
            case ConstantValue_1.ConstantValue.MILLS_ID:
                constValue = MathConstants_1.MathConstants.MILLS;
                break;
            case ConstantValue_1.ConstantValue.BACKHOUSE_ID:
                constValue = MathConstants_1.MathConstants.BACKHOUSE;
                break;
            case ConstantValue_1.ConstantValue.PORTER_ID:
                constValue = MathConstants_1.MathConstants.PORTER;
                break;
            case ConstantValue_1.ConstantValue.LIEB_QUARE_ICE_ID:
                constValue = MathConstants_1.MathConstants.LIEB_QUARE_ICE;
                break;
            case ConstantValue_1.ConstantValue.NIVEN_ID:
                constValue = MathConstants_1.MathConstants.NIVEN;
                break;
            case ConstantValue_1.ConstantValue.SIERPINSKI_ID:
                constValue = MathConstants_1.MathConstants.SIERPINSKI;
                break;
            case ConstantValue_1.ConstantValue.KHINCHIN_ID:
                constValue = MathConstants_1.MathConstants.KHINCHIN;
                break;
            case ConstantValue_1.ConstantValue.FRANSEN_ROBINSON_ID:
                constValue = MathConstants_1.MathConstants.FRANSEN_ROBINSON;
                break;
            case ConstantValue_1.ConstantValue.LANDAU_ID:
                constValue = MathConstants_1.MathConstants.LANDAU;
                break;
            case ConstantValue_1.ConstantValue.PARABOLIC_ID:
                constValue = MathConstants_1.MathConstants.PARABOLIC;
                break;
            case ConstantValue_1.ConstantValue.OMEGA_ID:
                constValue = MathConstants_1.MathConstants.OMEGA;
                break;
            case ConstantValue_1.ConstantValue.MRB_ID:
                constValue = MathConstants_1.MathConstants.MRB;
                break;
            case ConstantValue_1.ConstantValue.LI2_ID:
                constValue = MathConstants_1.MathConstants.LI2;
                break;
            case ConstantValue_1.ConstantValue.GOMPERTZ_ID:
                constValue = MathConstants_1.MathConstants.GOMPERTZ;
                break;
            case ConstantValue_1.ConstantValue.LIGHT_SPEED_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.LIGHT_SPEED_$LI$();
                break;
            case ConstantValue_1.ConstantValue.GRAVITATIONAL_CONSTANT_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.GRAVITATIONAL_CONSTANT_$LI$();
                break;
            case ConstantValue_1.ConstantValue.GRAVIT_ACC_EARTH_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.GRAVIT_ACC_EARTH_$LI$();
                break;
            case ConstantValue_1.ConstantValue.PLANCK_CONSTANT_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.PLANCK_CONSTANT_$LI$();
                break;
            case ConstantValue_1.ConstantValue.PLANCK_CONSTANT_REDUCED_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.PLANCK_CONSTANT_REDUCED_$LI$();
                break;
            case ConstantValue_1.ConstantValue.PLANCK_LENGTH_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.PLANCK_LENGTH_$LI$();
                break;
            case ConstantValue_1.ConstantValue.PLANCK_MASS_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.PLANCK_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.PLANCK_TIME_ID:
                constValue = PhysicalConstants_1.PhysicalConstants.PLANCK_TIME_$LI$();
                break;
            case ConstantValue_1.ConstantValue.LIGHT_YEAR_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.LIGHT_YEAR_$LI$();
                break;
            case ConstantValue_1.ConstantValue.ASTRONOMICAL_UNIT_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.ASTRONOMICAL_UNIT_$LI$();
                break;
            case ConstantValue_1.ConstantValue.PARSEC_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.PARSEC_$LI$();
                break;
            case ConstantValue_1.ConstantValue.KILOPARSEC_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.KILOPARSEC_$LI$();
                break;
            case ConstantValue_1.ConstantValue.EARTH_RADIUS_EQUATORIAL_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.EARTH_RADIUS_EQUATORIAL_$LI$();
                break;
            case ConstantValue_1.ConstantValue.EARTH_RADIUS_POLAR_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.EARTH_RADIUS_POLAR_$LI$();
                break;
            case ConstantValue_1.ConstantValue.EARTH_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.EARTH_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.EARTH_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.EARTH_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.EARTH_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.EARTH_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MOON_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MOON_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MOON_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MOON_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MONN_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MONN_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.SOLAR_RADIUS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.SOLAR_RADIUS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.SOLAR_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.SOLAR_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MERCURY_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MERCURY_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MERCURY_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MERCURY_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MERCURY_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MERCURY_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.VENUS_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.VENUS_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.VENUS_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.VENUS_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.VENUS_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.VENUS_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MARS_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MARS_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MARS_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MARS_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.MARS_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.MARS_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.JUPITER_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.JUPITER_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.JUPITER_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.JUPITER_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.JUPITER_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.JUPITER_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.SATURN_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.SATURN_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.SATURN_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.SATURN_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.SATURN_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.SATURN_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.URANUS_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.URANUS_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.URANUS_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.URANUS_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.URANUS_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.URANUS_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.NEPTUNE_RADIUS_MEAN_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.NEPTUNE_RADIUS_MEAN_$LI$();
                break;
            case ConstantValue_1.ConstantValue.NEPTUNE_MASS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.NEPTUNE_MASS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_ID:
                constValue = AstronomicalConstants_1.AstronomicalConstants.NEPTUNE_SEMI_MAJOR_AXIS_$LI$();
                break;
            case ConstantValue_1.ConstantValue.TRUE_ID:
                constValue = BooleanAlgebra_1.BooleanAlgebra.TRUE;
                break;
            case ConstantValue_1.ConstantValue.FALSE_ID:
                constValue = BooleanAlgebra_1.BooleanAlgebra.FALSE;
                break;
            case ConstantValue_1.ConstantValue.NAN_ID:
                constValue = MathConstants_1.MathConstants.NOT_A_NUMBER_$LI$();
                break;
            case ConstantValue_1.ConstantValue.NPAR_ID:
                constValue = this.UDFVariadicParamsAtRunTime.size();
                break;
        }
        this.setToNumber$int$double(pos, constValue);
    }
    /**
     * Constants handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ UNIT(pos) {
        let unitValue = j4ts_2.javaemul.internal.DoubleHelper.NaN;
        switch ((this.tokensList.get(pos).tokenId)) {
            case Unit_1.Unit.PERC_ID:
                unitValue = Units_1.Units.PERC;
                break;
            case Unit_1.Unit.PROMIL_ID:
                unitValue = Units_1.Units.PROMIL;
                break;
            case Unit_1.Unit.YOTTA_ID:
                unitValue = Units_1.Units.YOTTA;
                break;
            case Unit_1.Unit.ZETTA_ID:
                unitValue = Units_1.Units.ZETTA;
                break;
            case Unit_1.Unit.EXA_ID:
                unitValue = Units_1.Units.EXA;
                break;
            case Unit_1.Unit.PETA_ID:
                unitValue = Units_1.Units.PETA;
                break;
            case Unit_1.Unit.TERA_ID:
                unitValue = Units_1.Units.TERA;
                break;
            case Unit_1.Unit.GIGA_ID:
                unitValue = Units_1.Units.GIGA;
                break;
            case Unit_1.Unit.MEGA_ID:
                unitValue = Units_1.Units.MEGA;
                break;
            case Unit_1.Unit.KILO_ID:
                unitValue = Units_1.Units.KILO;
                break;
            case Unit_1.Unit.HECTO_ID:
                unitValue = Units_1.Units.HECTO;
                break;
            case Unit_1.Unit.DECA_ID:
                unitValue = Units_1.Units.DECA;
                break;
            case Unit_1.Unit.DECI_ID:
                unitValue = Units_1.Units.DECI;
                break;
            case Unit_1.Unit.CENTI_ID:
                unitValue = Units_1.Units.CENTI;
                break;
            case Unit_1.Unit.MILLI_ID:
                unitValue = Units_1.Units.MILLI;
                break;
            case Unit_1.Unit.MICRO_ID:
                unitValue = Units_1.Units.MICRO;
                break;
            case Unit_1.Unit.NANO_ID:
                unitValue = Units_1.Units.NANO;
                break;
            case Unit_1.Unit.PICO_ID:
                unitValue = Units_1.Units.PICO;
                break;
            case Unit_1.Unit.FEMTO_ID:
                unitValue = Units_1.Units.FEMTO;
                break;
            case Unit_1.Unit.ATTO_ID:
                unitValue = Units_1.Units.ATTO;
                break;
            case Unit_1.Unit.ZEPTO_ID:
                unitValue = Units_1.Units.ZEPTO;
                break;
            case Unit_1.Unit.YOCTO_ID:
                unitValue = Units_1.Units.YOCTO;
                break;
            case Unit_1.Unit.METRE_ID:
                unitValue = Units_1.Units.METRE;
                break;
            case Unit_1.Unit.KILOMETRE_ID:
                unitValue = Units_1.Units.KILOMETRE_$LI$();
                break;
            case Unit_1.Unit.CENTIMETRE_ID:
                unitValue = Units_1.Units.CENTIMETRE_$LI$();
                break;
            case Unit_1.Unit.MILLIMETRE_ID:
                unitValue = Units_1.Units.MILLIMETRE_$LI$();
                break;
            case Unit_1.Unit.INCH_ID:
                unitValue = Units_1.Units.INCH_$LI$();
                break;
            case Unit_1.Unit.YARD_ID:
                unitValue = Units_1.Units.YARD_$LI$();
                break;
            case Unit_1.Unit.FEET_ID:
                unitValue = Units_1.Units.FEET_$LI$();
                break;
            case Unit_1.Unit.MILE_ID:
                unitValue = Units_1.Units.MILE_$LI$();
                break;
            case Unit_1.Unit.NAUTICAL_MILE_ID:
                unitValue = Units_1.Units.NAUTICAL_MILE_$LI$();
                break;
            case Unit_1.Unit.METRE2_ID:
                unitValue = Units_1.Units.METRE2_$LI$();
                break;
            case Unit_1.Unit.CENTIMETRE2_ID:
                unitValue = Units_1.Units.CENTIMETRE2_$LI$();
                break;
            case Unit_1.Unit.MILLIMETRE2_ID:
                unitValue = Units_1.Units.MILLIMETRE2_$LI$();
                break;
            case Unit_1.Unit.ARE_ID:
                unitValue = Units_1.Units.ARE_$LI$();
                break;
            case Unit_1.Unit.HECTARE_ID:
                unitValue = Units_1.Units.HECTARE_$LI$();
                break;
            case Unit_1.Unit.ACRE_ID:
                unitValue = Units_1.Units.ACRE_$LI$();
                break;
            case Unit_1.Unit.KILOMETRE2_ID:
                unitValue = Units_1.Units.KILOMETRE2_$LI$();
                break;
            case Unit_1.Unit.MILLIMETRE3_ID:
                unitValue = Units_1.Units.MILLIMETRE3_$LI$();
                break;
            case Unit_1.Unit.CENTIMETRE3_ID:
                unitValue = Units_1.Units.CENTIMETRE3_$LI$();
                break;
            case Unit_1.Unit.METRE3_ID:
                unitValue = Units_1.Units.METRE3_$LI$();
                break;
            case Unit_1.Unit.KILOMETRE3_ID:
                unitValue = Units_1.Units.KILOMETRE3_$LI$();
                break;
            case Unit_1.Unit.MILLILITRE_ID:
                unitValue = Units_1.Units.MILLILITRE_$LI$();
                break;
            case Unit_1.Unit.LITRE_ID:
                unitValue = Units_1.Units.LITRE_$LI$();
                break;
            case Unit_1.Unit.GALLON_ID:
                unitValue = Units_1.Units.GALLON_$LI$();
                break;
            case Unit_1.Unit.PINT_ID:
                unitValue = Units_1.Units.PINT_$LI$();
                break;
            case Unit_1.Unit.SECOND_ID:
                unitValue = Units_1.Units.SECOND;
                break;
            case Unit_1.Unit.MILLISECOND_ID:
                unitValue = Units_1.Units.MILLISECOND_$LI$();
                break;
            case Unit_1.Unit.MINUTE_ID:
                unitValue = Units_1.Units.MINUTE_$LI$();
                break;
            case Unit_1.Unit.HOUR_ID:
                unitValue = Units_1.Units.HOUR_$LI$();
                break;
            case Unit_1.Unit.DAY_ID:
                unitValue = Units_1.Units.DAY_$LI$();
                break;
            case Unit_1.Unit.WEEK_ID:
                unitValue = Units_1.Units.WEEK_$LI$();
                break;
            case Unit_1.Unit.JULIAN_YEAR_ID:
                unitValue = Units_1.Units.JULIAN_YEAR_$LI$();
                break;
            case Unit_1.Unit.KILOGRAM_ID:
                unitValue = Units_1.Units.KILOGRAM;
                break;
            case Unit_1.Unit.GRAM_ID:
                unitValue = Units_1.Units.GRAM_$LI$();
                break;
            case Unit_1.Unit.MILLIGRAM_ID:
                unitValue = Units_1.Units.MILLIGRAM_$LI$();
                break;
            case Unit_1.Unit.DECAGRAM_ID:
                unitValue = Units_1.Units.DECAGRAM_$LI$();
                break;
            case Unit_1.Unit.TONNE_ID:
                unitValue = Units_1.Units.TONNE_$LI$();
                break;
            case Unit_1.Unit.OUNCE_ID:
                unitValue = Units_1.Units.OUNCE_$LI$();
                break;
            case Unit_1.Unit.POUND_ID:
                unitValue = Units_1.Units.POUND_$LI$();
                break;
            case Unit_1.Unit.BIT_ID:
                unitValue = Units_1.Units.BIT;
                break;
            case Unit_1.Unit.KILOBIT_ID:
                unitValue = Units_1.Units.KILOBIT_$LI$();
                break;
            case Unit_1.Unit.MEGABIT_ID:
                unitValue = Units_1.Units.MEGABIT_$LI$();
                break;
            case Unit_1.Unit.GIGABIT_ID:
                unitValue = Units_1.Units.GIGABIT_$LI$();
                break;
            case Unit_1.Unit.TERABIT_ID:
                unitValue = Units_1.Units.TERABIT_$LI$();
                break;
            case Unit_1.Unit.PETABIT_ID:
                unitValue = Units_1.Units.PETABIT_$LI$();
                break;
            case Unit_1.Unit.EXABIT_ID:
                unitValue = Units_1.Units.EXABIT_$LI$();
                break;
            case Unit_1.Unit.ZETTABIT_ID:
                unitValue = Units_1.Units.ZETTABIT_$LI$();
                break;
            case Unit_1.Unit.YOTTABIT_ID:
                unitValue = Units_1.Units.YOTTABIT_$LI$();
                break;
            case Unit_1.Unit.BYTE_ID:
                unitValue = Units_1.Units.BYTE_$LI$();
                break;
            case Unit_1.Unit.KILOBYTE_ID:
                unitValue = Units_1.Units.KILOBYTE_$LI$();
                break;
            case Unit_1.Unit.MEGABYTE_ID:
                unitValue = Units_1.Units.MEGABYTE_$LI$();
                break;
            case Unit_1.Unit.GIGABYTE_ID:
                unitValue = Units_1.Units.GIGABYTE_$LI$();
                break;
            case Unit_1.Unit.TERABYTE_ID:
                unitValue = Units_1.Units.TERABYTE_$LI$();
                break;
            case Unit_1.Unit.PETABYTE_ID:
                unitValue = Units_1.Units.PETABYTE_$LI$();
                break;
            case Unit_1.Unit.EXABYTE_ID:
                unitValue = Units_1.Units.EXABYTE_$LI$();
                break;
            case Unit_1.Unit.ZETTABYTE_ID:
                unitValue = Units_1.Units.ZETTABYTE_$LI$();
                break;
            case Unit_1.Unit.YOTTABYTE_ID:
                unitValue = Units_1.Units.YOTTABYTE_$LI$();
                break;
            case Unit_1.Unit.JOULE_ID:
                unitValue = Units_1.Units.JOULE_$LI$();
                break;
            case Unit_1.Unit.ELECTRONO_VOLT_ID:
                unitValue = Units_1.Units.ELECTRONO_VOLT_$LI$();
                break;
            case Unit_1.Unit.KILO_ELECTRONO_VOLT_ID:
                unitValue = Units_1.Units.KILO_ELECTRONO_VOLT_$LI$();
                break;
            case Unit_1.Unit.MEGA_ELECTRONO_VOLT_ID:
                unitValue = Units_1.Units.MEGA_ELECTRONO_VOLT_$LI$();
                break;
            case Unit_1.Unit.GIGA_ELECTRONO_VOLT_ID:
                unitValue = Units_1.Units.GIGA_ELECTRONO_VOLT_$LI$();
                break;
            case Unit_1.Unit.TERA_ELECTRONO_VOLT_ID:
                unitValue = Units_1.Units.TERA_ELECTRONO_VOLT_$LI$();
                break;
            case Unit_1.Unit.METRE_PER_SECOND_ID:
                unitValue = Units_1.Units.METRE_PER_SECOND_$LI$();
                break;
            case Unit_1.Unit.KILOMETRE_PER_HOUR_ID:
                unitValue = Units_1.Units.KILOMETRE_PER_HOUR_$LI$();
                break;
            case Unit_1.Unit.MILE_PER_HOUR_ID:
                unitValue = Units_1.Units.MILE_PER_HOUR_$LI$();
                break;
            case Unit_1.Unit.KNOT_ID:
                unitValue = Units_1.Units.KNOT_$LI$();
                break;
            case Unit_1.Unit.METRE_PER_SECOND2_ID:
                unitValue = Units_1.Units.METRE_PER_SECOND2_$LI$();
                break;
            case Unit_1.Unit.KILOMETRE_PER_HOUR2_ID:
                unitValue = Units_1.Units.KILOMETRE_PER_HOUR2_$LI$();
                break;
            case Unit_1.Unit.MILE_PER_HOUR2_ID:
                unitValue = Units_1.Units.MILE_PER_HOUR2_$LI$();
                break;
            case Unit_1.Unit.RADIAN_ARC_ID:
                unitValue = Units_1.Units.RADIAN_ARC;
                break;
            case Unit_1.Unit.DEGREE_ARC_ID:
                unitValue = Units_1.Units.DEGREE_ARC_$LI$();
                break;
            case Unit_1.Unit.MINUTE_ARC_ID:
                unitValue = Units_1.Units.MINUTE_ARC_$LI$();
                break;
            case Unit_1.Unit.SECOND_ARC_ID:
                unitValue = Units_1.Units.SECOND_ARC_$LI$();
                break;
        }
        this.setToNumber$int$double(pos, unitValue);
    }
    /**
     * Random Variables handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ RANDOM_VARIABLE(pos) {
        let rndVar = j4ts_2.javaemul.internal.DoubleHelper.NaN;
        switch ((this.tokensList.get(pos).tokenId)) {
            case RandomVariable_1.RandomVariable.UNIFORM_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndUniformContinuous$java_util_Random(ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$java_util_Random(ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT1_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-10, 10, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT2_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-100, 100, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT3_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-1000, 1000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT4_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-10000, 10000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT5_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-100000, 100000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT6_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-1000000, 1000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT7_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-10000000, 10000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT8_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-100000000, 100000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.INT9_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(-1000000000, 1000000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 2147483646, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_1_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 10, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_2_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 100, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_3_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 1000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_4_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 10000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_5_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 100000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_6_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 1000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_7_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 10000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_8_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 100000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT0_9_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(0, 1000000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 2147483646, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_1_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 10, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_2_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 100, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_3_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 1000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_4_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 10000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_5_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 100000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_6_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 1000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_7_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 10000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_8_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 100000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NAT1_9_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(1, 1000000000, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
            case RandomVariable_1.RandomVariable.NOR_ID:
                rndVar = ProbabilityDistributions_1.ProbabilityDistributions.rndNormal$double$double$java_util_Random(0.0, 1.0, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
                break;
        }
        this.setToNumber$int$double(pos, rndVar);
    }
    /**
     * Gets token value
     * @param      {number} tokenIndex          the token index
     *
     * @return     {number} the token value
     * @private
     */
    /*private*/ getTokenValue(tokenIndex) {
        return this.tokensList.get(tokenIndex).tokenValue;
    }
    /**
     * Tetration handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ TETRATION(pos) {
        const a = this.getTokenValue(pos - 1);
        const n = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double$boolean(pos, MathFunctions_1.MathFunctions.tetration(a, n), true);
    }
    /**
     * Power handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ POWER(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double$boolean(pos, MathFunctions_1.MathFunctions.power(a, b), true);
    }
    /**
     * Modulo handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MODULO(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.mod(a, b));
    }
    /**
     * Division handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ DIVIDE(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        if (this.disableRounding) {
            let result = j4ts_2.javaemul.internal.DoubleHelper.NaN;
            if (b !== 0)
                result = a / b;
            this.opSetDecreaseRemove$int$double$boolean(pos, result, true);
        }
        else
            this.opSetDecreaseRemove$int$double$boolean(pos, MathFunctions_1.MathFunctions.div(a, b), true);
    }
    /**
     * Multiplication handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MULTIPLY(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        if (this.disableRounding)
            this.opSetDecreaseRemove$int$double$boolean(pos, a * b, true);
        else
            this.opSetDecreaseRemove$int$double$boolean(pos, MathFunctions_1.MathFunctions.multiply(a, b), true);
    }
    /**
     * Addition handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ PLUS(pos) {
        const b = this.tokensList.get(pos + 1);
        if (pos > 0) {
            const a = this.tokensList.get(pos - 1);
            if ((a.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) && (b.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID))
                if (this.disableRounding)
                    this.opSetDecreaseRemove$int$double$boolean(pos, a.tokenValue + b.tokenValue, true);
                else
                    this.opSetDecreaseRemove$int$double$boolean(pos, MathFunctions_1.MathFunctions.plus(a.tokenValue, b.tokenValue), true);
            else if (b.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) {
                this.setToNumber$int$double(pos, b.tokenValue);
                this.tokensList.remove(pos + 1);
            }
        }
        else if (b.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) {
            this.setToNumber$int$double(pos, b.tokenValue);
            this.tokensList.remove(pos + 1);
        }
    }
    /**
     * Subtraction handling
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MINUS(pos) {
        const b = this.tokensList.get(pos + 1);
        if (pos > 0) {
            const a = this.tokensList.get(pos - 1);
            if ((a.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) && (b.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID))
                if (this.disableRounding)
                    this.opSetDecreaseRemove$int$double$boolean(pos, a.tokenValue - b.tokenValue, true);
                else
                    this.opSetDecreaseRemove$int$double$boolean(pos, MathFunctions_1.MathFunctions.minus(a.tokenValue, b.tokenValue), true);
            else if (b.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) {
                this.setToNumber$int$double(pos, -b.tokenValue);
                this.tokensList.remove(pos + 1);
            }
        }
        else if (b.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) {
            this.setToNumber$int$double(pos, -b.tokenValue);
            this.tokensList.remove(pos + 1);
        }
    }
    /**
     * Logical AND
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ AND(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.and(a, b));
    }
    /**
     * Logical OR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ OR(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.or(a, b));
    }
    /**
     * Logical NAND
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NAND(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.nand(a, b));
    }
    /**
     * Logical NOR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NOR(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.nor(a, b));
    }
    /**
     * Logical XOR
     *
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ XOR(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.xor(a, b));
    }
    /**
     * Logical IMP
     *
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ IMP(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.imp(a, b));
    }
    /**
     * Logical CIMP
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CIMP(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.cimp(a, b));
    }
    /**
     * Logical NIMP
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NIMP(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.nimp(a, b));
    }
    /**
     * Logical CNIMP
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CNIMP(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.cnimp(a, b));
    }
    /**
     * Logical EQV
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ EQV(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.eqv(a, b));
    }
    /**
     * Logical negation
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NEG(pos) {
        const a = this.getTokenValue(pos + 1);
        this.setToNumber$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.not(a));
        this.tokensList.remove(pos + 1);
    }
    /**
     * Equality relation.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ EQ(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BinaryRelations_1.BinaryRelations.eq(a, b));
    }
    /**
     * Not equals.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NEQ(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BinaryRelations_1.BinaryRelations.neq(a, b));
    }
    /**
     * Lower than.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LT(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BinaryRelations_1.BinaryRelations.lt(a, b));
    }
    /**
     * Greater than.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GT(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BinaryRelations_1.BinaryRelations.gt(a, b));
    }
    /**
     * Lower or equal.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LEQ(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BinaryRelations_1.BinaryRelations.leq(a, b));
    }
    /**
     * Greater or equal
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GEQ(pos) {
        const a = this.getTokenValue(pos - 1);
        const b = this.getTokenValue(pos + 1);
        this.opSetDecreaseRemove$int$double(pos, BinaryRelations_1.BinaryRelations.geq(a, b));
    }
    /**
     * Bitwise COMPL
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BITWISE_COMPL(pos) {
        const a = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos + 1));
        this.setToNumber$int$double(pos, ~a);
        this.tokensList.remove(pos + 1);
    }
    /**
     * Bitwise AND
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BITWISE_AND(pos) {
        const a = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos - 1));
        const b = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos + 1));
        this.opSetDecreaseRemove$int$double(pos, a & b);
    }
    /**
     * Bitwise OR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BITWISE_OR(pos) {
        const a = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos - 1));
        const b = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos + 1));
        this.opSetDecreaseRemove$int$double(pos, a | b);
    }
    /**
     * Bitwise XOR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BITWISE_XOR(pos) {
        const a = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos - 1));
        const b = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos + 1));
        this.opSetDecreaseRemove$int$double(pos, a ^ b);
    }
    /**
     * Bitwise LEFT SHIFT
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BITWISE_LEFT_SHIFT(pos) {
        const a = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos - 1));
        const b = (this.getTokenValue(pos + 1) | 0);
        this.opSetDecreaseRemove$int$double(pos, a << b);
    }
    /**
     * Bitwise RIGHT SHIFT
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BITWISE_RIGHT_SHIFT(pos) {
        const a = (n => n < 0 ? Math.ceil(n) : Math.floor(n))(this.getTokenValue(pos - 1));
        const b = (this.getTokenValue(pos + 1) | 0);
        this.opSetDecreaseRemove$int$double(pos, a >> b);
    }
    /**
     * Sine function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SIN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sin(a));
    }
    /**
     * Cosine / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ COS(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.cos(a));
    }
    /**
     * Tangent / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ TAN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.tan(a));
    }
    /**
     * Cotangent / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CTAN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.ctan(a));
    }
    /**
     * Secant / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SEC(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sec(a));
    }
    /**
     * Cosecant / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ COSEC(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.cosec(a));
    }
    /**
     * Arcus sine / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ASIN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.asin(a));
    }
    /**
     * Arcus cosine / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ACOS(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.acos(a));
    }
    /**
     * Arcus tangent / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ATAN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.atan(a));
    }
    /**
     * Arcus cotangent / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ACTAN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.actan(a));
    }
    /**
     * Natural logarithm (base e)
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.ln(a));
    }
    /**
     * Logarithm - base 2
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LOG2(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.log2(a));
    }
    /**
     * Logarithm - base 10
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LOG10(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.log10(a));
    }
    /**
     * Converts degrees to radius
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ RAD(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.rad(a));
    }
    /**
     * Exponential function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ EXP(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.exp(a));
    }
    /**
     * Square root
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SQRT(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sqrt(a));
    }
    /**
     * Hyperbolic sine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SINH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sinh(a));
    }
    /**
     * Hyperbolic cosine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ COSH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.cosh(a));
    }
    /**
     * Hyperbolic tangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ TANH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.tanh(a));
    }
    /**
     * Hyperbolic cotangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ COTH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.coth(a));
    }
    /**
     * Hyperbolic secant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SECH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sech(a));
    }
    /**
     * Hyperbolic cosecant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CSCH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.csch(a));
    }
    /**
     * Converts radians to degrees
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ DEG(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.deg(a));
    }
    /**
     * Absolut value
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ABS(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.abs(a));
    }
    /**
     * Signum function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SGN(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sgn(a));
    }
    /**
     * Floor function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ FLOOR(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.floor(a));
    }
    /**
     * Ceil function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CEIL(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.ceil(a));
    }
    /**
     * Arcus hyperbolic sine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARSINH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.arsinh(a));
    }
    /**
     * Arcus hyperbolic cosine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARCOSH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.arcosh(a));
    }
    /**
     * Arcus hyperbolic tangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARTANH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.artanh(a));
    }
    /**
     * Arcus hyperbolic cotangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARCOTH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.arcoth(a));
    }
    /**
     * Arcus hyperbolic secant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARSECH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.arsech(a));
    }
    /**
     * Arcus hyperbolic cosecant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARCSCH(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.arcsch(a));
    }
    /**
     * SA / sinc normalized
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SA(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sa(a));
    }
    /**
     * Sinc unnormalized
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SINC(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.sinc(a));
    }
    /**
     * Bell numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BELL_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.bellNumber$double(n));
    }
    /**
     * Lucas numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LUCAS_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.lucasNumber$double(n));
    }
    /**
     * Fibonacci numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ FIBONACCI_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.fibonacciNumber$double(n));
    }
    /**
     * Harmonic numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ HARMONIC_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.harmonicNumber$double(n));
    }
    /**
     * Prime test
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ IS_PRIME(pos) {
        const n = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.primeTest$double(n));
    }
    /**
     * Prime counting
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ PRIME_COUNT(pos) {
        const n = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.primeCount$double(n));
    }
    /**
     * Exponential integral function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ EXP_INT(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.exponentialIntegralEi(x));
    }
    /**
     * Logarithmic exponential integral function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LOG_INT(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.logarithmicIntegralLi(x));
    }
    /**
     * Offset logarithmic exponential integral function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ OFF_LOG_INT(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.offsetLogarithmicIntegralLi(x));
    }
    /**
     * Factorilal function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ FACT(pos) {
        const a = this.getTokenValue(pos - 1);
        this.setToNumber$int$double(pos, MathFunctions_1.MathFunctions.factorial$double(a));
        this.tokensList.remove(pos - 1);
    }
    /**
     * Percentage
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ PERC(pos) {
        const a = this.getTokenValue(pos - 1);
        this.setToNumber$int$double(pos, a * Units_1.Units.PERC);
        this.tokensList.remove(pos - 1);
    }
    /**
     * Negation
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NOT(pos) {
        const a = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.not(a));
    }
    /**
     * Gauss error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GAUSS_ERF(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.erf(x));
    }
    /**
     * Gauss complementary error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GAUSS_ERFC(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.erfc(x));
    }
    /**
     * Inverse of Gauss error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GAUSS_ERF_INV(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.erfInv(x));
    }
    /**
     * Inverse of Gauss complementary error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GAUSS_ERFC_INV(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.erfcInv(x));
    }
    /**
     * Unit in The Last Place
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ULP(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.ulp(x));
    }
    /**
     * Is Not-a-Number
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ISNAN(pos) {
        const x = this.getTokenValue(pos + 1);
        if ( /* isNaN */isNaN(x))
            this.f1SetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.TRUE);
        else
            this.f1SetDecreaseRemove$int$double(pos, BooleanAlgebra_1.BooleanAlgebra.FALSE);
    }
    /**
     * Number of digits in base 10
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NDIG10(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.numberOfDigits$double(x));
    }
    /**
     * Number of prime factors - distinct
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NFACT(pos) {
        const n = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.numberOfPrimeFactors(n));
    }
    /**
     * Arcuus secant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARCSEC(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.asec(x));
    }
    /**
     * Arcuus cosecant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARCCSC(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.acosec(x));
    }
    /**
     * Gamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GAMMA(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.gamma(x));
    }
    /**
     * Lambert-W special function, principal branch 0
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LAMBERT_W0(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.lambertW(x, 0));
    }
    /**
     * Lambert-W special function, branch = -1
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LAMBERT_W1(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.lambertW(x, -1));
    }
    /**
     * Signum of Gamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SGN_GAMMA(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.sgnGamma(x));
    }
    /**
     * Log Gamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LOG_GAMMA(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.logGamma(x));
    }
    /**
     * Digamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ DI_GAMMA(pos) {
        const x = this.getTokenValue(pos + 1);
        this.f1SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.diGamma(x));
    }
    /**
     * User Defined Variadic function param value
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ UDF_PARAM(pos) {
        let value = j4ts_2.javaemul.internal.DoubleHelper.NaN;
        const x = this.getTokenValue(pos + 1);
        const npar = this.UDFVariadicParamsAtRunTime.size();
        if (( /* isNaN */isNaN(x) === false) && (x !== j4ts_2.javaemul.internal.DoubleHelper.POSITIVE_INFINITY) && (x !== j4ts_2.javaemul.internal.DoubleHelper.NEGATIVE_INFINITY)) {
            const i = (MathFunctions_1.MathFunctions.integerPart(x) | 0);
            if (i === 0) {
                value = npar;
            }
            else if (Math.abs(i) <= npar) {
                if (i >= 1) {
                    value = this.UDFVariadicParamsAtRunTime.get(i - 1);
                }
                else if (i <= -1) {
                    value = this.UDFVariadicParamsAtRunTime.get(npar + i);
                }
            }
        }
        this.f1SetDecreaseRemove$int$double(pos, value);
    }
    /**
     * Logarithm
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LOG(pos) {
        const b = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.log(a, b));
    }
    /**
     * Creates ArraList<Double> containing function parameters
     *
     * @param      {number} pos                 the function position
     *
     * @return     {*} List of function parameters.
     * @private
     */
    /*private*/ getNumbers(pos) {
        const numbers = (new j4ts_1.java.util.ArrayList());
        let pn = pos;
        const lastIndex = this.tokensList.size() - 1;
        let isNumber;
        let end = false;
        do {
            {
                pn++;
                const t = this.tokensList.get(pn);
                isNumber = false;
                if ((t.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) && (t.tokenId === ParserSymbol_1.ParserSymbol.NUMBER_ID)) {
                    isNumber = true;
                    numbers.add(t.tokenValue);
                }
                if ((pn === lastIndex) || (!isNumber))
                    end = true;
            }
        } while ((end === false));
        return numbers;
    }
    /**
     * Modulo
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MOD(pos) {
        const a = this.getTokenValue(pos + 1);
        const b = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.mod(a, b));
    }
    /**
     * Binomial Coefficient
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BINOM_COEFF(pos) {
        const n = this.getTokenValue(pos + 1);
        const k = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.binomCoeff$double$double(n, k));
    }
    /**
     * Number of permutations
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ PERMUTATIONS(pos) {
        const n = this.getTokenValue(pos + 1);
        const k = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.numberOfPermutations$double$double(n, k));
    }
    /**
     * Beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BETA(pos) {
        const x = this.getTokenValue(pos + 1);
        const y = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.beta(x, y));
    }
    /**
     * Log beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LOG_BETA(pos) {
        const x = this.getTokenValue(pos + 1);
        const y = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.logBeta(x, y));
    }
    /**
     * Bernoulli Number
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BERNOULLI_NUMBER(pos) {
        const m = this.getTokenValue(pos + 1);
        const n = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.bernoulliNumber$double$double(m, n));
    }
    /**
     * Stirling number of the first kind
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ STIRLING1_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        const k = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.Stirling1Number$double$double(n, k));
    }
    /**
     * Stirling number of the second kind.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ STIRLING2_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        const k = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.Stirling2Number$double$double(n, k));
    }
    /**
     * Worpitzky number.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ WORPITZKY_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        const k = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.worpitzkyNumber$double$double(n, k));
    }
    /**
     * Euler number
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ EULER_NUMBER(pos) {
        const n = this.getTokenValue(pos + 1);
        const k = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.eulerNumber$double$double(n, k));
    }
    /**
     * Kronecker delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ KRONECKER_DELTA(pos) {
        const i = this.getTokenValue(pos + 1);
        const j = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.kroneckerDelta$double$double(i, j));
    }
    /**
     * Euler polynomial
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ EULER_POLYNOMIAL(pos) {
        const m = this.getTokenValue(pos + 1);
        const x = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.eulerPolynomial$double$double(m, x));
    }
    /**
     * Harmonic numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ HARMONIC2_NUMBER(pos) {
        const x = this.getTokenValue(pos + 1);
        const n = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.harmonicNumber$double$double(x, n));
    }
    /**
     * Decimal rounding
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ROUND(pos) {
        const value = this.getTokenValue(pos + 1);
        const places = (this.getTokenValue(pos + 2) | 0);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.round(value, places));
    }
    /**
     * Random number - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ RND_VAR_UNIFORM_CONT(pos) {
        const a = this.getTokenValue(pos + 1);
        const b = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.rndUniformContinuous$double$double$java_util_Random(a, b, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$()));
    }
    /**
     * Random number - Uniform Discrete distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ RND_VAR_UNIFORM_DISCR(pos) {
        const a = (this.getTokenValue(pos + 1) | 0);
        const b = (this.getTokenValue(pos + 2) | 0);
        this.f2SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.rndInteger$int$int$java_util_Random(a, b, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$()));
    }
    /**
     * Random number - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ RND_NORMAL(pos) {
        const mean = this.getTokenValue(pos + 1);
        const stddev = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.rndNormal$double$double$java_util_Random(mean, stddev, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$()));
    }
    /**
     * Number of digits in given numeral system
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NDIG(pos) {
        const number = this.getTokenValue(pos + 1);
        const numeralSystemBase = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.numberOfDigits$double$double(number, numeralSystemBase));
    }
    /**
     * Digit at position - base 10 numeral system
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ DIGIT10(pos) {
        const number = this.getTokenValue(pos + 1);
        const position = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.digitAtPosition$double$double(number, position));
    }
    /**
     * Prime factor value
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ FACTVAL(pos) {
        const number = this.getTokenValue(pos + 1);
        const id = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.primeFactorValue(number, id));
    }
    /**
     * Prime factor value exponent
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ FACTEXP(pos) {
        const number = this.getTokenValue(pos + 1);
        const id = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.primeFactorExponent(number, id));
    }
    /**
     * Nth order root
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ROOT(pos) {
        const n = this.getTokenValue(pos + 1);
        const x = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.root(n, x));
    }
    /**
     * Lower incomplete special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ INC_GAMMA_LOWER(pos) {
        const s = this.getTokenValue(pos + 1);
        const x = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.incompleteGammaLower(s, x));
    }
    /**
     * Upper incomplete special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ INC_GAMMA_UPPER(pos) {
        const s = this.getTokenValue(pos + 1);
        const x = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.incompleteGammaUpper(s, x));
    }
    /**
     * Lower regularized special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ REG_GAMMA_LOWER(pos) {
        const s = this.getTokenValue(pos + 1);
        const x = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.regularizedGammaLowerP(s, x));
    }
    /**
     * Lower regularized special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ REG_GAMMA_UPPER(pos) {
        const s = this.getTokenValue(pos + 1);
        const x = this.getTokenValue(pos + 2);
        this.f2SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.regularizedGammaUpperQ(s, x));
    }
    /**
     * IF function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ IF_CONDITION(pos) {
        const ifParams = this.getFunctionParameters(pos, this.tokensList);
        const ifParam = ifParams.get(0);
        const ifExp = new Expression(ifParam.paramStr, ifParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.KEEP_ROUNDING_SETTINGS, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        if (this.verboseMode === true)
            ifExp.setVerboseMode();
        this.ifSetRemove$int$double(pos, ifExp.calculate());
    }
    /**
     * IFF function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ IFF(pos) {
        const iffParams = this.getFunctionParameters(pos, this.tokensList);
        let iffParam = iffParams.get(0);
        const parametersNumber = iffParams.size();
        let trueParamNumber;
        let paramNumber;
        paramNumber = 1;
        let iffExp;
        let iffValue = 0;
        let iffCon = true;
        do {
            {
                iffExp = new Expression(iffParam.paramStr, iffParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.KEEP_ROUNDING_SETTINGS, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
                if (this.verboseMode === true)
                    iffExp.setVerboseMode();
                iffCon = true;
                iffValue = iffExp.calculate();
                if ((iffValue === 0) || ( /* isNaN */isNaN(iffValue))) {
                    paramNumber += 2;
                    iffCon = false;
                    if (paramNumber < parametersNumber)
                        iffParam = iffParams.get(paramNumber - 1);
                }
            }
        } while (((!iffCon) && (paramNumber < parametersNumber)));
        let from;
        let to;
        let p;
        if (iffCon) {
            trueParamNumber = paramNumber + 1;
            from = pos + 1;
            to = iffParams.get(parametersNumber - 1).toIndex + 1;
            this.tokensList.get(from).tokenLevel--;
            this.tokensList.get(to).tokenLevel--;
            if (trueParamNumber < parametersNumber) {
                to = iffParams.get(parametersNumber - 1).toIndex;
                from = iffParams.get(trueParamNumber).fromIndex - 1;
                for (p = to; p >= from; p--) {
                    this.tokensList.remove(p);
                }
            }
            from = iffParams.get(trueParamNumber - 1).fromIndex;
            to = iffParams.get(trueParamNumber - 1).toIndex;
            for (p = from; p <= to; p++) {
                this.tokensList.get(p).tokenLevel--;
            }
            to = from - 1;
            from = pos;
            for (p = to; p >= from; p--) {
                if (p !== pos + 1)
                    this.tokensList.remove(p);
                ;
            }
        }
        else {
            to = iffParams.get(parametersNumber - 1).toIndex + 1;
            from = pos + 1;
            for (p = to; p >= from; p--) {
                this.tokensList.remove(p);
            }
            this.setToNumber$int$double(pos, j4ts_2.javaemul.internal.DoubleHelper.NaN);
            this.tokensList.get(pos).tokenLevel--;
        }
    }
    /**
     * IF
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ IF(pos) {
        const ifCondition = this.tokensList.get(pos + 1).tokenValue;
        const ifTrue = this.tokensList.get(pos + 2).tokenValue;
        const ifFalse = this.tokensList.get(pos + 3).tokenValue;
        let result = ifFalse;
        if (ifCondition !== 0)
            result = ifTrue;
        if (ifCondition === j4ts_2.javaemul.internal.DoubleHelper.NaN)
            result = j4ts_2.javaemul.internal.DoubleHelper.NaN;
        this.f3SetDecreaseRemove$int$double(pos, result);
    }
    /**
     * Characteristic function (a,b)
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CHI(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.chi(x, a, b));
    }
    /**
     * Characteristic function [a,b]
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CHI_LR(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.chi_LR(x, a, b));
    }
    /**
     * Characteristic function [a,b)
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CHI_L(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.chi_L(x, a, b));
    }
    /**
     * Characteristic function (a,b]
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CHI_R(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, MathFunctions_1.MathFunctions.chi_R(x, a, b));
    }
    /**
     * Probability Distribution Function - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ PDF_UNIFORM_CONT(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.pdfUniformContinuous(x, a, b));
    }
    /**
     * Cumulative Distribution Function - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CDF_UNIFORM_CONT(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.cdfUniformContinuous(x, a, b));
    }
    /**
     * Quantile Function - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ QNT_UNIFORM_CONT(pos) {
        const q = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.qntUniformContinuous(q, a, b));
    }
    /**
     * Probability Distribution Function - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ PDF_NORMAL(pos) {
        const x = this.getTokenValue(pos + 1);
        const mean = this.getTokenValue(pos + 2);
        const stddev = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.pdfNormal(x, mean, stddev));
    }
    /**
     * Cumulative Distribution Function - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CDF_NORMAL(pos) {
        const x = this.getTokenValue(pos + 1);
        const mean = this.getTokenValue(pos + 2);
        const stddev = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.cdfNormal(x, mean, stddev));
    }
    /**
     * Quantile Function - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ QNT_NORMAL(pos) {
        const q = this.getTokenValue(pos + 1);
        const mean = this.getTokenValue(pos + 2);
        const stddev = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, ProbabilityDistributions_1.ProbabilityDistributions.qntNormal(q, mean, stddev));
    }
    /**
     * Digit at position - numeral system with given base
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ DIGIT(pos) {
        const number = this.getTokenValue(pos + 1);
        const position = this.getTokenValue(pos + 2);
        const numeralSystemBase = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, NumberTheory_1.NumberTheory.digitAtPosition$double$double$double(number, position, numeralSystemBase));
    }
    /**
     * Incomplete beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ INC_BETA(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.incompleteBeta(a, b, x));
    }
    /**
     * Regularized incomplete beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ REG_BETA(pos) {
        const x = this.getTokenValue(pos + 1);
        const a = this.getTokenValue(pos + 2);
        const b = this.getTokenValue(pos + 3);
        this.f3SetDecreaseRemove$int$double(pos, SpecialFunctions_1.SpecialFunctions.regularizedBeta(a, b, x));
    }
    updateMissingTokens$java_util_List$java_lang_String$int$int(tokens, keyWord, tokenId, tokenTypeId) {
        for (let index158 = tokens.iterator(); index158.hasNext();) {
            let t = index158.next();
            if ((t.tokenTypeId === ConstantValue_1.ConstantValue.NaN) && (t.tokenStr === keyWord)) {
                t.keyWord = keyWord;
                t.tokenId = tokenId;
                t.tokenTypeId = tokenTypeId;
            }
        }
    }
    /**
     * Updating missing tokens (i.e. indexes i sum operator). Used when creating
     * internal expressions based on the sublist of tokens.
     *
     *
     * @param      {*} tokens              the tokens list
     * @param      {string} keyWord             missing key word
     * @param      {number} tokenId             missing token id
     * @param      {number} tokenTypeId         missing token type id
     * @private
     */
    updateMissingTokens(tokens, keyWord, tokenId, tokenTypeId) {
        if (((tokens != null && (tokens.constructor != null && tokens.constructor["__interfaces"] != null && tokens.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || tokens === null) && ((typeof keyWord === 'string') || keyWord === null) && ((typeof tokenId === 'number') || tokenId === null) && ((typeof tokenTypeId === 'number') || tokenTypeId === null)) {
            return this.updateMissingTokens$java_util_List$java_lang_String$int$int(tokens, keyWord, tokenId, tokenTypeId);
        }
        else if (((tokens != null && tokens instanceof Miscellaneous_7.ArgumentParameter) || tokens === null) && ((keyWord != null && keyWord instanceof Miscellaneous_6.IterativeOperatorParameters) || keyWord === null) && tokenId === undefined && tokenTypeId === undefined) {
            return this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(tokens, keyWord);
        }
        else
            throw new Error('invalid overload');
    }
    /*private*/ updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams) {
        if (index.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(iterParams.indexParam.tokens, iterParams.indexParam.paramStr, index.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(iterParams.fromParam.tokens, iterParams.indexParam.paramStr, index.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(iterParams.toParam.tokens, iterParams.indexParam.paramStr, index.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(iterParams.funParam.tokens, iterParams.indexParam.paramStr, index.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
        }
    }
    /**
     * Evaluates ranges 'from', 'to', 'delta' for the iterative operator
     *
     * @param {ArgumentParameter} index      Index parameter of the iterative operator
     * @param {IterativeOperatorParameters} iterParams     Parameters list of the iterative operator
     * @private
     */
    /*private*/ evalFromToDeltaParameters(index, iterParams) {
        iterParams.fromExp = new Expression(iterParams.fromParam.paramStr, iterParams.fromParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.KEEP_ROUNDING_SETTINGS, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        iterParams.toExp = new Expression(iterParams.toParam.paramStr, iterParams.toParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.KEEP_ROUNDING_SETTINGS, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        iterParams.funExp = new Expression(iterParams.funParam.paramStr, iterParams.funParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        iterParams.deltaExp = null;
        if (this.verboseMode === true) {
            iterParams.fromExp.setVerboseMode();
            iterParams.toExp.setVerboseMode();
            iterParams.funExp.setVerboseMode();
        }
        iterParams.from = iterParams.fromExp.calculate();
        iterParams.to = iterParams.toExp.calculate();
        iterParams.delta = 1.0;
        if (iterParams.to < iterParams.from)
            iterParams.delta = -1.0;
        if (iterParams.withDelta === true) {
            iterParams.deltaExp = new Expression(iterParams.deltaParam.paramStr, iterParams.deltaParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            if (index.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
                this.updateMissingTokens$java_util_List$java_lang_String$int$int(iterParams.deltaParam.tokens, iterParams.indexParam.paramStr, index.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            }
            if (this.verboseMode === true)
                iterParams.deltaExp.setVerboseMode();
            iterParams.delta = iterParams.deltaExp.calculate();
        }
    }
    /**
     * Summation operator (SIGMA by)
     * sum(i,m,n,f(i),b) --> sum f(i) from i=m to i=n by delta
     * i - index (argument)
     * m, n - numbers or expressions
     * f(i) - function string
     * by delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SUM(pos) {
        const iterParams = new Miscellaneous_6.IterativeOperatorParameters(this.getFunctionParameters(pos, this.tokensList));
        const index = this.getParamArgument(iterParams.indexParam.paramStr);
        this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams);
        this.evalFromToDeltaParameters(index, iterParams);
        const sigma = NumberTheory_1.NumberTheory.sigmaSummation(iterParams.funExp, index.argument, iterParams.from, iterParams.to, iterParams.delta);
        this.clearParamArgument(index);
        this.calcSetDecreaseRemove$int$double$boolean(pos, sigma, true);
    }
    /**
     * Product operator (SIGMA by)
     * pord(i,m,n,f(i),b) --> prod f(i) from i=m to i=n by delta
     * i - index (argument)
     * m, n - numbers or expressions
     * f(i) - function string
     * by delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ PROD(pos) {
        const iterParams = new Miscellaneous_6.IterativeOperatorParameters(this.getFunctionParameters(pos, this.tokensList));
        const index = this.getParamArgument(iterParams.indexParam.paramStr);
        this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams);
        this.evalFromToDeltaParameters(index, iterParams);
        const product = NumberTheory_1.NumberTheory.piProduct(iterParams.funExp, index.argument, iterParams.from, iterParams.to, iterParams.delta);
        this.clearParamArgument(index);
        this.calcSetDecreaseRemove$int$double$boolean(pos, product, true);
    }
    /**
     * Minimum value - iterative operator
     * mini(i,m,n,f(i),b) --> min f(i) from i=m to i=n by delta
     * i - index (argument)
     * m, n - numbers or expressions
     * f(i) - function string
     * by delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MIN(pos) {
        const iterParams = new Miscellaneous_6.IterativeOperatorParameters(this.getFunctionParameters(pos, this.tokensList));
        const index = this.getParamArgument(iterParams.indexParam.paramStr);
        this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams);
        this.evalFromToDeltaParameters(index, iterParams);
        const min = NumberTheory_1.NumberTheory.min$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(iterParams.funExp, index.argument, iterParams.from, iterParams.to, iterParams.delta);
        this.clearParamArgument(index);
        this.calcSetDecreaseRemove$int$double(pos, min);
    }
    /**
     * Maximum value - iterative operator
     * maxi(i,m,n,f(i),b) --> max f(i) from i=m to i=n by delta
     * i - index (argument)
     * m, n - numbers or expressions
     * f(i) - function string
     * by delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MAX(pos) {
        const iterParams = new Miscellaneous_6.IterativeOperatorParameters(this.getFunctionParameters(pos, this.tokensList));
        const index = this.getParamArgument(iterParams.indexParam.paramStr);
        this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams);
        this.evalFromToDeltaParameters(index, iterParams);
        const max = NumberTheory_1.NumberTheory.max$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(iterParams.funExp, index.argument, iterParams.from, iterParams.to, iterParams.delta);
        this.clearParamArgument(index);
        this.calcSetDecreaseRemove$int$double(pos, max);
    }
    /**
     * Average function value - iterative operator
     * avg(i,m,n,f(i),b) --> avg f(i) from i=m to i=n by delta
     * i - index (argument)
     * m, n - numbers or expressions
     * f(i) - function string
     * by delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ AVG(pos) {
        const iterParams = new Miscellaneous_6.IterativeOperatorParameters(this.getFunctionParameters(pos, this.tokensList));
        const index = this.getParamArgument(iterParams.indexParam.paramStr);
        this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams);
        this.evalFromToDeltaParameters(index, iterParams);
        const avg = Statistics_1.Statistics.avg$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(iterParams.funExp, index.argument, iterParams.from, iterParams.to, iterParams.delta);
        this.clearParamArgument(index);
        this.calcSetDecreaseRemove$int$double$boolean(pos, avg, true);
    }
    /**
     * Variance from sample function values - iterative operator
     * vari(i,m,n,f(i),b) --> var f(i) from i=m to i=n by delta
     * i - index (argument)
     * m, n - numbers or expressions
     * f(i) - function string
     * by delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ VAR(pos) {
        const iterParams = new Miscellaneous_6.IterativeOperatorParameters(this.getFunctionParameters(pos, this.tokensList));
        const index = this.getParamArgument(iterParams.indexParam.paramStr);
        this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams);
        this.evalFromToDeltaParameters(index, iterParams);
        const __var = Statistics_1.Statistics.var$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(iterParams.funExp, index.argument, iterParams.from, iterParams.to, iterParams.delta);
        this.clearParamArgument(index);
        this.calcSetDecreaseRemove$int$double$boolean(pos, __var, true);
    }
    /**
     * Standard deviation from sample function values - iterative operator
     * stdi(i,m,n,f(i),b) --> std f(i) from i=m to i=n by delta
     * i - index (argument)
     * m, n - numbers or expressions
     * f(i) - function string
     * by delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ STD(pos) {
        const iterParams = new Miscellaneous_6.IterativeOperatorParameters(this.getFunctionParameters(pos, this.tokensList));
        const index = this.getParamArgument(iterParams.indexParam.paramStr);
        this.updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index, iterParams);
        this.evalFromToDeltaParameters(index, iterParams);
        const std = Statistics_1.Statistics.std$org_mariuszgromada_math_mxparser_Expression$org_mariuszgromada_math_mxparser_Argument$double$double$double(iterParams.funExp, index.argument, iterParams.from, iterParams.to, iterParams.delta);
        this.clearParamArgument(index);
        this.calcSetDecreaseRemove$int$double$boolean(pos, std, true);
    }
    /**
     * Function derivative
     *
     * @param      {number} pos                 the token position
     * @param      {number} derivativeType      the type of derivative (LEFT, RIGHT, ...)
     * @private
     */
    /*private*/ DERIVATIVE(pos, derivativeType) {
        const derParams = this.getFunctionParameters(pos, this.tokensList);
        const DEF_EPS = 1.0E-8;
        const DEF_MAX_STEPS = 20;
        const funParam = derParams.get(0);
        const xParam = derParams.get(1);
        const x = this.getParamArgument(xParam.paramStr);
        if (x.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(xParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(funParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
        }
        const funExp = new Expression(funParam.paramStr, funParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        let x0 = j4ts_2.javaemul.internal.DoubleHelper.NaN;
        if ((derParams.size() === 2) || (derParams.size() === 4))
            x0 = x.argument.getArgumentValue();
        if ((derParams.size() === 3) || (derParams.size() === 5)) {
            const x0Param = derParams.get(2);
            if (x.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$())
                this.updateMissingTokens$java_util_List$java_lang_String$int$int(x0Param.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            const x0Expr = new Expression(x0Param.paramStr, x0Param.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            x0 = x0Expr.calculate();
        }
        let eps = DEF_EPS;
        let maxSteps = DEF_MAX_STEPS;
        if ((derParams.size() === 4) || (derParams.size() === 5)) {
            let epsParam;
            let maxStepsParam;
            if (derParams.size() === 4) {
                epsParam = derParams.get(2);
                maxStepsParam = derParams.get(3);
            }
            else {
                epsParam = derParams.get(3);
                maxStepsParam = derParams.get(4);
            }
            if (x.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
                this.updateMissingTokens$java_util_List$java_lang_String$int$int(epsParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
                this.updateMissingTokens$java_util_List$java_lang_String$int$int(maxStepsParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            }
            const epsExpr = new Expression(epsParam.paramStr, epsParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            const maxStepsExp = new Expression(maxStepsParam.paramStr, maxStepsParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            eps = epsExpr.calculate();
            maxSteps = (Math.round(maxStepsExp.calculate()) | 0);
        }
        if (derivativeType === Calculus_1.Calculus.GENERAL_DERIVATIVE) {
            const general = Calculus_1.Calculus.derivative(funExp, x.argument, x0, Calculus_1.Calculus.GENERAL_DERIVATIVE, eps, maxSteps);
            this.calcSetDecreaseRemove$int$double(pos, general);
        }
        else if (derivativeType === Calculus_1.Calculus.LEFT_DERIVATIVE) {
            const left = Calculus_1.Calculus.derivative(funExp, x.argument, x0, Calculus_1.Calculus.LEFT_DERIVATIVE, eps, maxSteps);
            this.calcSetDecreaseRemove$int$double(pos, left);
        }
        else {
            const right = Calculus_1.Calculus.derivative(funExp, x.argument, x0, Calculus_1.Calculus.RIGHT_DERIVATIVE, eps, maxSteps);
            this.calcSetDecreaseRemove$int$double(pos, right);
        }
        this.clearParamArgument(x);
    }
    /**
     * Function derivative
     *
     * @param      {number} pos                 the token position
     * @param      {number} derivativeType      the type of derivative (left, right, etc...)
     * @private
     */
    /*private*/ DERIVATIVE_NTH(pos, derivativeType) {
        const DEF_EPS = 1.0E-6;
        const DEF_MAX_STEPS = 20;
        const derParams = this.getFunctionParameters(pos, this.tokensList);
        const funParam = derParams.get(0);
        const nParam = derParams.get(1);
        const xParam = derParams.get(2);
        const x = this.getParamArgument(xParam.paramStr);
        if (x.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(xParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(funParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(nParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
        }
        const funExp = new Expression(funParam.paramStr, funParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const nExp = new Expression(nParam.paramStr, nParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const n = nExp.calculate();
        const x0 = x.argument.getArgumentValue();
        let eps = DEF_EPS;
        let maxSteps = DEF_MAX_STEPS;
        if (derParams.size() === 5) {
            const epsParam = derParams.get(3);
            const maxStepsParam = derParams.get(4);
            if (x.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
                this.updateMissingTokens$java_util_List$java_lang_String$int$int(epsParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
                this.updateMissingTokens$java_util_List$java_lang_String$int$int(maxStepsParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            }
            const epsExpr = new Expression(epsParam.paramStr, epsParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            const maxStepsExp = new Expression(maxStepsParam.paramStr, maxStepsParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            eps = epsExpr.calculate();
            maxSteps = (Math.round(maxStepsExp.calculate()) | 0);
        }
        if (derivativeType === Calculus_1.Calculus.GENERAL_DERIVATIVE) {
            const left = Calculus_1.Calculus.derivativeNth(funExp, n, x.argument, x0, Calculus_1.Calculus.LEFT_DERIVATIVE, eps, maxSteps);
            const right = Calculus_1.Calculus.derivativeNth(funExp, n, x.argument, x0, Calculus_1.Calculus.RIGHT_DERIVATIVE, eps, maxSteps);
            this.calcSetDecreaseRemove$int$double(pos, (left + right) / 2.0);
        }
        else if (derivativeType === Calculus_1.Calculus.LEFT_DERIVATIVE) {
            const left = Calculus_1.Calculus.derivativeNth(funExp, n, x.argument, x0, Calculus_1.Calculus.LEFT_DERIVATIVE, eps, maxSteps);
            this.calcSetDecreaseRemove$int$double(pos, left);
        }
        else {
            const right = Calculus_1.Calculus.derivativeNth(funExp, n, x.argument, x0, Calculus_1.Calculus.RIGHT_DERIVATIVE, eps, maxSteps);
            this.calcSetDecreaseRemove$int$double(pos, right);
        }
        this.clearParamArgument(x);
    }
    /**
     * Function integral
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ INTEGRAL(pos) {
        const DEF_EPS = 1.0E-6;
        const DEF_MAX_STEPS = 20;
        const intParams = this.getFunctionParameters(pos, this.tokensList);
        const funParam = intParams.get(0);
        const xParam = intParams.get(1);
        const aParam = intParams.get(2);
        const bParam = intParams.get(3);
        const x = this.getParamArgument(xParam.paramStr);
        if (x.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(xParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(funParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(aParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(bParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
        }
        const funExp = new Expression(funParam.paramStr, funParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const aExp = new Expression(aParam.paramStr, aParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const bExp = new Expression(bParam.paramStr, bParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const eps = DEF_EPS;
        const maxSteps = DEF_MAX_STEPS;
        this.calcSetDecreaseRemove$int$double(pos, Calculus_1.Calculus.integralTrapezoid(funExp, x.argument, aExp.calculate(), bExp.calculate(), eps, maxSteps));
        this.clearParamArgument(x);
    }
    /**
     * Function SOLVE
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ SOLVE(pos) {
        const DEF_EPS = 1.0E-9;
        const DEF_MAX_STEPS = 100;
        const intParams = this.getFunctionParameters(pos, this.tokensList);
        const funParam = intParams.get(0);
        const xParam = intParams.get(1);
        const aParam = intParams.get(2);
        const bParam = intParams.get(3);
        const x = this.getParamArgument(xParam.paramStr);
        if (x.presence === ArgumentConstants_1.ArgumentConstants.NOT_FOUND_$LI$()) {
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(xParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(funParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(aParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
            this.updateMissingTokens$java_util_List$java_lang_String$int$int(bParam.tokens, xParam.paramStr, x.index, ArgumentConstants_1.ArgumentConstants.TYPE_ID);
        }
        const funExp = new Expression(funParam.paramStr, funParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const aExp = new Expression(aParam.paramStr, aParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const bExp = new Expression(bParam.paramStr, bParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        const eps = DEF_EPS;
        const maxSteps = DEF_MAX_STEPS;
        this.calcSetDecreaseRemove$int$double(pos, Calculus_1.Calculus.solveBrent(funExp, x.argument, aExp.calculate(), bExp.calculate(), eps, maxSteps));
        this.clearParamArgument(x);
    }
    /**
     * Forward difference operator
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ FORWARD_DIFFERENCE(pos) {
        const params = this.getFunctionParameters(pos, this.tokensList);
        const funParam = params.get(0);
        const xParam = params.get(1);
        const x = this.getParamArgument(xParam.paramStr);
        const funExp = new Expression(funParam.paramStr, funParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        if (this.verboseMode === true)
            funExp.setVerboseMode();
        let h = 1;
        if (params.size() === 3) {
            const hParam = params.get(2);
            const hExp = new Expression(hParam.paramStr, hParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            if (this.verboseMode === true)
                hExp.setVerboseMode();
            h = hExp.calculate();
        }
        this.calcSetDecreaseRemove$int$double(pos, Calculus_1.Calculus.forwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(funExp, h, x.argument));
        this.clearParamArgument(x);
    }
    /**
     * Backward diffrence operator
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BACKWARD_DIFFERENCE(pos) {
        const params = this.getFunctionParameters(pos, this.tokensList);
        const funParam = params.get(0);
        const xParam = params.get(1);
        const x = this.getParamArgument(xParam.paramStr);
        const funExp = new Expression(funParam.paramStr, funParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
        if (this.verboseMode === true)
            funExp.setVerboseMode();
        let h = 1;
        if (params.size() === 3) {
            const hParam = params.get(2);
            const hExp = new Expression(hParam.paramStr, hParam.tokens, this.argumentsList, this.functionsList, this.constantsList, Expression.DISABLE_ROUNDING, this.UDFExpression, this.UDFVariadicParamsAtRunTime);
            if (this.verboseMode === true)
                hExp.setVerboseMode();
            h = hExp.calculate();
        }
        this.calcSetDecreaseRemove$int$double(pos, Calculus_1.Calculus.backwardDifference$org_mariuszgromada_math_mxparser_Expression$double$org_mariuszgromada_math_mxparser_Argument(funExp, h, x.argument));
        this.clearParamArgument(x);
    }
    /**
     * Minimum variadic
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MIN_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.min$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * Maximum variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ MAX_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.max$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * Sum variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ SUM_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int$boolean(pos, NumberTheory_1.NumberTheory.sum.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size(), true);
    }
    /**
     * Sum variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ PROD_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int$boolean(pos, NumberTheory_1.NumberTheory.prod.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size(), true);
    }
    /**
     * Average variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ AVG_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int$boolean(pos, Statistics_1.Statistics.avg$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size(), true);
    }
    /**
     * Variance variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ VAR_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int$boolean(pos, Statistics_1.Statistics.var$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size(), true);
    }
    /**
     * Standard deviation variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ STD_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int$boolean(pos, Statistics_1.Statistics.std$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size(), true);
    }
    /**
     * Continued fraction
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CONTINUED_FRACTION(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, MathFunctions_1.MathFunctions.continuedFraction.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * Continued polynomial
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ CONTINUED_POLYNOMIAL(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, MathFunctions_1.MathFunctions.continuedPolynomial$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * Greates Common Divisor
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ GCD(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.gcd$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * Lowest Common Multiply
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ LCM(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.lcm$double_A.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * Random number from list
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ RND_LIST(pos) {
        const numbers = this.getNumbers(pos);
        const n = numbers.size();
        const i = ProbabilityDistributions_1.ProbabilityDistributions.rndIndex$int$java_util_Random(n, ProbabilityDistributions_1.ProbabilityDistributions.randomGenerator_$LI$());
        this.variadicSetDecreaseRemove$int$double$int(pos, numbers.get(i), numbers.size());
    }
    /**
     * Coalesce
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ COALESCE(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, MathFunctions_1.MathFunctions.coalesce(mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * OR_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ OR_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, BooleanAlgebra_1.BooleanAlgebra.orVariadic(mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * AND_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ AND_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, BooleanAlgebra_1.BooleanAlgebra.andVariadic(mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * XOR_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ XOR_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, BooleanAlgebra_1.BooleanAlgebra.xorVariadic(mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * ARGMIN_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARGMIN_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.argmin.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * ARGMAX_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ ARGMAX_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.argmax.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * MEDIAN_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MEDIAN_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, Statistics_1.Statistics.median.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * MODE_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ MODE_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, Statistics_1.Statistics.mode.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * BASE_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ BASE_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.convOthBase2Decimal$double_A(mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * NDIST_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    /*private*/ NDIST_VARIADIC(pos) {
        const numbers = this.getNumbers(pos);
        this.variadicSetDecreaseRemove$int$double$int(pos, NumberTheory_1.NumberTheory.numberOfDistValues.apply(null, mXparserConstants_1.mXparserConstants.arrayList2double(numbers)), numbers.size());
    }
    /**
     * Parser symbols
     * Removes comma
     *
     * @param {number} pos token index (position)
     * @private
     */
    /*private*/ COMMA(pos) {
        this.tokensList.remove(pos);
    }
    /**
     * Parser symbols
     * Removes parenthesis
     *
     * @param {number} lPos    left token index (position)
     * @param {number} rPos    roght token index (position)
     * @private
     */
    /*private*/ PARENTHESES(lPos, rPos) {
        for (let p = lPos; p <= rPos; p++) {
            this.tokensList.get(p).tokenLevel--;
        }
        this.tokensList.remove(rPos);
        this.tokensList.remove(lPos);
    }
    /**
     * Checks syntax of the expression string.
     *
     * @return     {boolean} true if syntax is ok
     */
    checkLexSyntax() {
        let syntax = ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
        this.recursionCallsCounter = 0;
        if (this.expressionString.length === 0) {
            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
            this.errorMessage = "Empty expression string\n";
            return syntax;
        }
        const syn = new SyntaxChecker_1.SyntaxChecker(new j4ts_1.java.io.ByteArrayInputStream(/* getBytes */ (this.expressionString).split('').map(s => s.charCodeAt(0))));
        try {
            syn.checkSyntax();
        }
        catch (e) {
            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
            this.errorMessage = "lexical error \n\n" + e.message + "\n";
        }
        return syntax;
    }
    checkSyntax$() {
        const syntax = this.checkSyntax$java_lang_String$boolean("[" + this.expressionString + "] ", false);
        return syntax;
    }
    /**
     * Checks syntax of the calculus parameter
     *
     * @return     {number} true if syntax is ok
     * @param {string} param
     * @private
     */
    /*private*/ checkCalculusParameter(param) {
        let errors = 0;
        for (let index159 = this.keyWordsList.iterator(); index159.hasNext();) {
            let kw = index159.next();
            if (kw.wordTypeId !== ArgumentConstants_1.ArgumentConstants.TYPE_ID)
                if (param === kw.wordString)
                    errors++;
        }
        return errors;
    }
    /**
     * Checks if argument given in the function parameter is known
     * in the expression.
     *
     * @param      {FunctionParameter} param               the function parameter
     *
     * @return     {boolean} true if argument is known,
     * otherwise returns false.
     * @private
     */
    /*private*/ checkIfKnownArgument(param) {
        if (param.tokens.size() > 1)
            return false;
        const t = param.tokens.get(0);
        if (t.tokenTypeId !== ArgumentConstants_1.ArgumentConstants.TYPE_ID)
            return false;
        return true;
    }
    /**
     * Checks if token is uknown
     *
     * @param      {FunctionParameter} param               the function parameter
     *
     * @return     {boolean} true if there is only 1 token with unknown type,
     * otherwise returns false.
     * @private
     */
    /*private*/ checkIfUnknownToken(param) {
        if (param.tokens.size() > 1)
            return false;
        const t = param.tokens.get(0);
        if (t.tokenTypeId !== ConstantValue_1.ConstantValue.NaN)
            return false;
        return true;
    }
    checkSyntax$java_lang_String$boolean(level, functionWithBodyExt) {
        if ((this.expressionWasModified === false) && (this.syntaxStatus === ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS) && (this.optionsChangesetNumber === mXparserConstants_1.mXparserConstants.optionsChangesetNumber)) {
            this.errorMessage = level + "already checked - no errors!\n";
            this.recursionCallPending = false;
            return ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
        }
        this.optionsChangesetNumber = mXparserConstants_1.mXparserConstants.optionsChangesetNumber;
        if (functionWithBodyExt) {
            this.syntaxStatus = ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
            this.recursionCallPending = false;
            this.expressionWasModified = false;
            this.errorMessage = this.errorMessage + level + "function with extended body - assuming no errors.\n";
            return ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
        }
        this.recursionCallPending = true;
        this.errorMessage = level + "checking ...\n";
        let syntax = ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
        if (this.expressionString.length === 0) {
            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
            this.errorMessage = this.errorMessage + level + "Empty expression string\n";
            this.syntaxStatus = syntax;
            this.recursionCallPending = false;
            return syntax;
        }
        const testBytes = this.expressionString.split('').map(s => s.charCodeAt(0));
        const syn = new SyntaxChecker_1.SyntaxChecker(new j4ts_1.java.io.ByteArrayInputStream(testBytes));
        try {
            syn.checkSyntax();
            this.tokenizeExpressionString();
            let kw1;
            let kw2;
            j4ts_1.java.util.Collections.sort(this.keyWordsList, ((funcInst) => { if (typeof funcInst == 'function') {
                return funcInst;
            } return (arg0, arg1) => (funcInst['compare'] ? funcInst['compare'] : funcInst).call(funcInst, arg0, arg1); })(new Miscellaneous_5.KwStrComparator()));
            for (let kwId = 1; kwId < this.keyWordsList.size(); kwId++) {
                {
                    kw1 = this.keyWordsList.get(kwId - 1).wordString;
                    kw2 = this.keyWordsList.get(kwId).wordString;
                    if (kw1 === kw2) {
                        syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                        this.errorMessage = this.errorMessage + level + "(" + kw1 + ") Duplicated <KEYWORD>.\n";
                    }
                }
                ;
            }
            const tokensNumber = this.initialTokens.size();
            const syntaxStack = (new j4ts_1.java.util.Stack());
            let stackElement;
            for (let tokenIndex = 0; tokenIndex < tokensNumber; tokenIndex++) {
                {
                    const t = this.initialTokens.get(tokenIndex);
                    const tokenStr = "(" + t.tokenStr + ", " + tokenIndex + ") ";
                    if (t.tokenTypeId === ArgumentConstants_1.ArgumentConstants.TYPE_ID) {
                        const arg = this.getArgument$int(t.tokenId);
                        if (this.getParametersNumber(tokenIndex) >= 0) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<ARGUMENT> was expected.\n";
                        }
                        else if (arg.getArgumentBodyType() === ArgumentConstants_1.ArgumentConstants.BODY_RUNTIME) {
                            if (arg.getArgumentType() === ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT) {
                                if ((arg.argumentExpression !== this) && (arg.argumentExpression.recursionCallPending === false)) {
                                    const syntaxRec = arg.argumentExpression.checkSyntax$java_lang_String$boolean(level + "-> [" + t.tokenStr + "] = [" + arg.argumentExpression.getExpressionString() + "] ", false);
                                    syntax = syntax && syntaxRec;
                                    this.errorMessage = this.errorMessage + level + tokenStr + "checking dependent argument ...\n" + arg.argumentExpression.getErrorMessage();
                                }
                            }
                        }
                        else {
                            this.errorMessage = this.errorMessage + level + tokenStr + "argument with extended body - assuming no errors.\n";
                        }
                    }
                    if (t.tokenTypeId === RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE) {
                        const arg = this.getArgument$int(t.tokenId);
                        if (this.getParametersNumber(tokenIndex) !== 1) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<RECURSIVE_ARGUMENT> expecting 1 parameter.\n";
                        }
                        else if ((arg.argumentExpression !== this) && (arg.argumentExpression.recursionCallPending === false)) {
                            const syntaxRec = arg.argumentExpression.checkSyntax$java_lang_String$boolean(level + "-> [" + t.tokenStr + "] = [" + arg.argumentExpression.getExpressionString() + "] ", false);
                            syntax = syntax && syntaxRec;
                            this.errorMessage = this.errorMessage + level + tokenStr + "checking recursive argument ...\n" + arg.argumentExpression.getErrorMessage();
                        }
                    }
                    if (t.tokenTypeId === Token_1.Token.NOT_MATCHED_$LI$()) {
                        let calculusToken = false;
                        for (let index160 = syntaxStack.iterator(); index160.hasNext();) {
                            let e = index160.next();
                            if (e.tokenStr === t.tokenStr)
                                calculusToken = true;
                        }
                        if (!calculusToken) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "invalid <TOKEN>.\n";
                        }
                    }
                    if (t.tokenTypeId === FunctionConstants_1.FunctionConstants.TYPE_ID) {
                        const fun = this.getFunction$int(t.tokenId);
                        fun.checkRecursiveMode();
                        const npar = this.getParametersNumber(tokenIndex);
                        const fpar = fun.getParametersNumber();
                        if (npar === 0) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<USER_DEFINED_FUNCTION> expecting at least one argument.\n";
                        }
                        else if ((fun.isVariadic === false) && (fpar !== npar)) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<USER_DEFINED_FUNCTION> expecting " + fpar + " arguments.\n";
                        }
                        else if ((fun.functionExpression !== this) && (fun.functionExpression.recursionCallPending === false)) {
                            let syntaxRec;
                            if (fun.getFunctionBodyType() === FunctionConstants_1.FunctionConstants.BODY_RUNTIME)
                                syntaxRec = fun.functionExpression.checkSyntax$java_lang_String$boolean(level + "-> [" + t.tokenStr + "] = [" + fun.functionExpression.getExpressionString() + "] ", false);
                            else
                                syntaxRec = fun.functionExpression.checkSyntax$java_lang_String$boolean(level + "-> [" + t.tokenStr + "] = [" + fun.functionExpression.getExpressionString() + "] ", true);
                            syntax = syntax && syntaxRec;
                            if (fun.isVariadic)
                                this.errorMessage = this.errorMessage + level + tokenStr + "checking variadic user defined function ...\n" + fun.functionExpression.getErrorMessage();
                            else
                                this.errorMessage = this.errorMessage + level + tokenStr + "checking user defined function ...\n" + fun.functionExpression.getErrorMessage();
                        }
                    }
                    if (t.tokenTypeId === ConstantValue_1.ConstantValue.TYPE_ID) {
                        if (this.getParametersNumber(tokenIndex) >= 0) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<CONSTANT> was expected.\n";
                        }
                    }
                    if (t.tokenTypeId === Constant_1.Constant.TYPE_ID) {
                        if (this.getParametersNumber(tokenIndex) >= 0) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<USER_DEFINED_CONSTANT> was expected.\n";
                        }
                    }
                    if (t.tokenTypeId === Function1Arg_1.Function1Arg.TYPE_ID) {
                        if (this.getParametersNumber(tokenIndex) !== 1) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<FUNCTION> expecting 1 argument.\n";
                        }
                    }
                    if (t.tokenTypeId === Function2Arg_1.Function2Arg.TYPE_ID) {
                        if (this.getParametersNumber(tokenIndex) !== 2) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<FUNCTION> expecting 2 arguments.\n";
                        }
                    }
                    if (t.tokenTypeId === Function3Arg_1.Function3Arg.TYPE_ID) {
                        if (this.getParametersNumber(tokenIndex) !== 3) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "<FUNCTION> expecting 3 arguments.\n";
                        }
                    }
                    if (t.tokenTypeId === CalculusOperator_1.CalculusOperator.TYPE_ID) {
                        const paramsNumber = this.getParametersNumber(tokenIndex);
                        let funParams = null;
                        if (paramsNumber > 0)
                            funParams = this.getFunctionParameters(tokenIndex, this.initialTokens);
                        if ((t.tokenId === CalculusOperator_1.CalculusOperator.DER_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.DER_LEFT_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.DER_RIGHT_ID)) {
                            if ((paramsNumber < 2) || (paramsNumber > 5)) {
                                syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                this.errorMessage = this.errorMessage + level + tokenStr + "<DERIVATIVE> expecting 2 or 3 or 4 or 5 calculus parameters.\n";
                            }
                            else {
                                if ((paramsNumber === 2) || (paramsNumber === 4)) {
                                    const argParam = funParams.get(1);
                                    if (this.checkIfKnownArgument(argParam) === false) {
                                        syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                        this.errorMessage = this.errorMessage + level + tokenStr + "<DERIVATIVE> argument was expected.\n";
                                    }
                                }
                                else {
                                    const argParam = funParams.get(1);
                                    stackElement = new Miscellaneous_4.SyntaxStackElement(argParam.paramStr, t.tokenLevel + 1);
                                    syntaxStack.push(stackElement);
                                    const errors = this.checkCalculusParameter(stackElement.tokenStr);
                                    if (errors > 0) {
                                        syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                        this.errorMessage = this.errorMessage + level + tokenStr + "<DERIVATIVE> Found duplicated key words for calculus parameter (" + stackElement.tokenStr + ", " + errors + ").\n";
                                    }
                                    if (!this.checkIfKnownArgument(argParam) && !this.checkIfUnknownToken(argParam)) {
                                        syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                        this.errorMessage = this.errorMessage + level + tokenStr + "<DERIVATIVE> One token (argument or unknown) was expected.\n";
                                    }
                                }
                            }
                        }
                        if (t.tokenId === CalculusOperator_1.CalculusOperator.DERN_ID) {
                            if ((paramsNumber !== 3) && (paramsNumber !== 5)) {
                                syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                this.errorMessage = this.errorMessage + level + tokenStr + "<NTH_DERIVATIVE> expecting 3 or 5 calculus arguments.\n";
                            }
                            else {
                                const argParam = funParams.get(2);
                                if (this.checkIfKnownArgument(argParam) === false) {
                                    syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                    this.errorMessage = this.errorMessage + level + tokenStr + "<DERIVATIVE> argument was expected.\n";
                                }
                            }
                        }
                        if ((t.tokenId === CalculusOperator_1.CalculusOperator.INT_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.SOLVE_ID)) {
                            if (paramsNumber !== 4) {
                                syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                this.errorMessage = this.errorMessage + level + tokenStr + "<INTEGRAL/SOLVE> expecting 4 calculus arguments.\n";
                            }
                            else {
                                const argParam = funParams.get(1);
                                stackElement = new Miscellaneous_4.SyntaxStackElement(argParam.paramStr, t.tokenLevel + 1);
                                syntaxStack.push(stackElement);
                                const errors = this.checkCalculusParameter(stackElement.tokenStr);
                                if (errors > 0) {
                                    syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                    this.errorMessage = this.errorMessage + level + tokenStr + "Found duplicated key words for calculus parameter (" + stackElement.tokenStr + ", " + errors + ").\n";
                                }
                                if (!this.checkIfKnownArgument(argParam) && !this.checkIfUnknownToken(argParam)) {
                                    syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                    this.errorMessage = this.errorMessage + level + tokenStr + "One token (argument or unknown) was expected.\n";
                                }
                            }
                        }
                        if ((t.tokenId === CalculusOperator_1.CalculusOperator.PROD_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.SUM_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.MIN_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.MAX_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.AVG_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.VAR_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.STD_ID)) {
                            if ((paramsNumber !== 4) && (paramsNumber !== 5)) {
                                syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                this.errorMessage = this.errorMessage + level + tokenStr + "<ITER_OPERATOR> expecting 4 or 5 calculus arguments.\n";
                            }
                            else {
                                const indexParam = funParams.get(0);
                                stackElement = new Miscellaneous_4.SyntaxStackElement(indexParam.paramStr, t.tokenLevel + 1);
                                syntaxStack.push(stackElement);
                                const errors = this.checkCalculusParameter(stackElement.tokenStr);
                                if (errors > 0) {
                                    syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                    this.errorMessage = this.errorMessage + level + tokenStr + "Found duplicated key words for calculus parameter (" + stackElement.tokenStr + ", " + errors + ").\n";
                                }
                                if (!this.checkIfKnownArgument(indexParam) && !this.checkIfUnknownToken(indexParam)) {
                                    syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                    this.errorMessage = this.errorMessage + level + tokenStr + "One token (argument or unknown) was expected.\n";
                                }
                            }
                        }
                        if ((t.tokenId === CalculusOperator_1.CalculusOperator.FORW_DIFF_ID) || (t.tokenId === CalculusOperator_1.CalculusOperator.BACKW_DIFF_ID)) {
                            if ((paramsNumber !== 2) && (paramsNumber !== 3)) {
                                syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                this.errorMessage = this.errorMessage + level + tokenStr + "<DIFF> expecting 2 or 3 arguments.\n";
                            }
                            else {
                                const xParam = funParams.get(1);
                                if (this.checkIfKnownArgument(xParam) === false) {
                                    syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                    this.errorMessage = this.errorMessage + level + tokenStr + "<DIFF> argument was expected.\n";
                                }
                            }
                        }
                    }
                    if (t.tokenTypeId === FunctionVariadic_1.FunctionVariadic.TYPE_ID) {
                        const paramsNumber = this.getParametersNumber(tokenIndex);
                        if (paramsNumber < 1) {
                            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                            this.errorMessage = this.errorMessage + level + tokenStr + "At least one argument was expected.\n";
                        }
                        if (t.tokenId === FunctionVariadic_1.FunctionVariadic.IFF_ID) {
                            if ((paramsNumber % 2 !== 0) || (paramsNumber < 2)) {
                                syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
                                this.errorMessage = this.errorMessage + level + tokenStr + "Expecting parity number of arguments.\n";
                            }
                        }
                    }
                    if ((t.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (t.tokenId === ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID)) {
                        if (syntaxStack.size() > 0)
                            if (t.tokenLevel === syntaxStack.lastElement().tokenLevel)
                                syntaxStack.pop();
                    }
                }
                ;
            }
        }
        catch (e) {
            syntax = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
            this.errorMessage = this.errorMessage + level + "lexical error \n\n" + e.message + "\n";
        }
        if (syntax === ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS) {
            this.errorMessage = this.errorMessage + level + "no errors.\n";
            this.expressionWasModified = false;
        }
        else {
            this.errorMessage = this.errorMessage + level + "errors were found.\n";
            this.expressionWasModified = true;
        }
        this.syntaxStatus = syntax;
        this.recursionCallPending = false;
        return syntax;
    }
    /**
     * Checking the syntax (recursively).
     *
     * @param      {string} level               string representing the recurssion level.
     * @return     {boolean} true if syntax was correct,
     * otherwise returns false.
     * @param {boolean} functionWithBodyExt
     * @private
     */
    checkSyntax(level, functionWithBodyExt) {
        if (((typeof level === 'string') || level === null) && ((typeof functionWithBodyExt === 'boolean') || functionWithBodyExt === null)) {
            return this.checkSyntax$java_lang_String$boolean(level, functionWithBodyExt);
        }
        else if (level === undefined && functionWithBodyExt === undefined) {
            return this.checkSyntax$();
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Calculates the expression value
     *
     * @return     {number} The expression value if syntax was ok,
     * otherwise returns Double.NaN.
     */
    calculate() {
        this.computingTime = 0;
        const startTime = j4ts_1.java.lang.System.currentTimeMillis();
        if (this.verboseMode === true) {
            this.printSystemInfo("\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
            this.printSystemInfo("\n", ExpressionConstants_1.ExpressionConstants.WITH_EXP_STR);
            this.printSystemInfo("Starting ...\n", ExpressionConstants_1.ExpressionConstants.WITH_EXP_STR);
            this.showArguments();
        }
        if ((this.expressionWasModified === true) || (this.syntaxStatus !== ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS)) {
            this.syntaxStatus = this.checkSyntax$();
        }
        if (this.syntaxStatus === ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN) {
            this.errorMessage = this.errorMessage + "Problem with expression syntax\n";
            if (this.verboseMode === true)
                this.printSystemInfo("syntaxStatus == SYNTAX_ERROR_OR_STATUS_UNKNOWN, returning Double.NaN\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
            this.recursionCallsCounter = 0;
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
        if ((this.recursionCallsCounter === 0) || (this.internalClone))
            this.copyInitialTokens();
        if (this.tokensList.size() === 0) {
            this.errorMessage = this.errorMessage + "Empty expression\n";
            if (this.verboseMode === true)
                this.printSystemInfo("tokensList.size() == 0, returning Double.NaN\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
            this.recursionCallsCounter = 0;
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
        if (this.recursionCallsCounter >= mXparserConstants_1.mXparserConstants.MAX_RECURSION_CALLS_$LI$()) {
            this.errorMessage = this.errorMessage + "recursionCallsCounter >= MAX_RECURSION_CALLS\n";
            if (this.verboseMode === true) {
                this.printSystemInfo("recursionCallsCounter >= mXparser.MAX_RECURSION_CALLS, returning Double.NaN\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
                this.printSystemInfo("recursionCallsCounter = " + this.recursionCallsCounter + "\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
                this.printSystemInfo("mXparser.MAX_RECURSION_CALLS = " + mXparserConstants_1.mXparserConstants.MAX_RECURSION_CALLS_$LI$() + "\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
            }
            this.recursionCallsCounter = 0;
            this.errorMessage = this.errorMessage + "\n[" + this.description + "][" + this.expressionString + "] Maximum recursion calls reached.\n";
            return j4ts_2.javaemul.internal.DoubleHelper.NaN;
        }
        this.recursionCallsCounter++;
        let calculusPos;
        let ifPos;
        let iffPos;
        let variadicFunPos;
        let depArgPos;
        let recArgPos;
        let f3ArgPos;
        let f2ArgPos;
        let f1ArgPos;
        let userFunPos;
        let plusPos;
        let minusPos;
        let multiplyPos;
        let dividePos;
        let powerPos;
        let tetrationPos;
        let powerNum;
        let factPos;
        let modPos;
        let percPos;
        let negPos;
        let andGroupPos;
        let orGroupPos;
        let implGroupPos;
        let bolPos;
        let eqPos;
        let neqPos;
        let ltPos;
        let gtPos;
        let leqPos;
        let geqPos;
        let commaPos;
        let lParPos;
        let rParPos;
        let bitwisePos;
        let bitwiseComplPos;
        let token;
        let tokenL;
        let tokenR;
        let argument;
        let tokensNumber;
        let maxPartLevel;
        let lPos;
        let rPos;
        let tokenIndex;
        let pos;
        let p;
        let commas = null;
        let emptyLoopCounter = 0;
        if (this.verboseMode === true)
            this.printSystemInfo("Starting calculation loop\n", ExpressionConstants_1.ExpressionConstants.WITH_EXP_STR);
        do {
            {
                if (mXparserConstants_1.mXparserConstants.isCurrentCalculationCancelled()) {
                    this.errorMessage = this.errorMessage + "\nCancel request - finishing";
                    return j4ts_2.javaemul.internal.DoubleHelper.NaN;
                }
                tokensNumber = this.tokensList.size();
                maxPartLevel = -1;
                lPos = -1;
                rPos = -1;
                calculusPos = -1;
                ifPos = -1;
                iffPos = -1;
                variadicFunPos = -1;
                recArgPos = -1;
                depArgPos = -1;
                f3ArgPos = -1;
                f2ArgPos = -1;
                f1ArgPos = -1;
                userFunPos = -1;
                plusPos = -1;
                minusPos = -1;
                multiplyPos = -1;
                dividePos = -1;
                powerPos = -1;
                tetrationPos = -1;
                factPos = -1;
                modPos = -1;
                percPos = -1;
                powerNum = 0;
                negPos = -1;
                andGroupPos = -1;
                orGroupPos = -1;
                implGroupPos = -1;
                bolPos = -1;
                eqPos = -1;
                neqPos = -1;
                ltPos = -1;
                gtPos = -1;
                leqPos = -1;
                geqPos = -1;
                commaPos = -1;
                lParPos = -1;
                rParPos = -1;
                bitwisePos = -1;
                bitwiseComplPos = -1;
                p = -1;
                do {
                    {
                        p++;
                        token = this.tokensList.get(p);
                        if (token.tokenTypeId === CalculusOperator_1.CalculusOperator.TYPE_ID)
                            calculusPos = p;
                        else if ((token.tokenTypeId === Function3Arg_1.Function3Arg.TYPE_ID) && (token.tokenId === Function3Arg_1.Function3Arg.IF_CONDITION_ID))
                            ifPos = p;
                        else if ((token.tokenTypeId === FunctionVariadic_1.FunctionVariadic.TYPE_ID) && (token.tokenId === FunctionVariadic_1.FunctionVariadic.IFF_ID))
                            iffPos = p;
                    }
                } while (((p < tokensNumber - 1) && (calculusPos < 0) && (ifPos < 0) && (iffPos < 0)));
                if ((calculusPos < 0) && (ifPos < 0) && (iffPos < 0)) {
                    for (tokenIndex = 0; tokenIndex < tokensNumber; tokenIndex++) {
                        {
                            token = this.tokensList.get(tokenIndex);
                            if (token.tokenLevel > maxPartLevel) {
                                maxPartLevel = this.tokensList.get(tokenIndex).tokenLevel;
                                lPos = tokenIndex;
                            }
                            if (token.tokenTypeId === ArgumentConstants_1.ArgumentConstants.TYPE_ID) {
                                argument = this.argumentsList.get(this.tokensList.get(tokenIndex).tokenId);
                                if (argument.argumentType === ArgumentConstants_1.ArgumentConstants.FREE_ARGUMENT)
                                    this.FREE_ARGUMENT(tokenIndex);
                                else
                                    depArgPos = tokenIndex;
                            }
                            else if (token.tokenTypeId === ConstantValue_1.ConstantValue.TYPE_ID)
                                this.CONSTANT(tokenIndex);
                            else if (token.tokenTypeId === Unit_1.Unit.TYPE_ID)
                                this.UNIT(tokenIndex);
                            else if (token.tokenTypeId === Constant_1.Constant.TYPE_ID)
                                this.USER_CONSTANT(tokenIndex);
                            else if (token.tokenTypeId === RandomVariable_1.RandomVariable.TYPE_ID)
                                this.RANDOM_VARIABLE(tokenIndex);
                        }
                        ;
                    }
                    if (lPos < 0) {
                        this.errorMessage = this.errorMessage + "\nInternal error / strange token level - finishing";
                        return j4ts_2.javaemul.internal.DoubleHelper.NaN;
                    }
                    if (depArgPos >= 0) {
                        let depArgFound;
                        do {
                            {
                                depArgFound = false;
                                const currentTokensNumber = this.tokensList.size();
                                for (tokenIndex = 0; tokenIndex < currentTokensNumber; tokenIndex++) {
                                    {
                                        token = this.tokensList.get(tokenIndex);
                                        if (token.tokenTypeId === ArgumentConstants_1.ArgumentConstants.TYPE_ID) {
                                            argument = this.argumentsList.get(this.tokensList.get(tokenIndex).tokenId);
                                            if (argument.argumentType === ArgumentConstants_1.ArgumentConstants.DEPENDENT_ARGUMENT) {
                                                this.DEPENDENT_ARGUMENT(tokenIndex);
                                                depArgFound = true;
                                                break;
                                            }
                                        }
                                    }
                                    ;
                                }
                            }
                        } while ((depArgFound));
                    }
                    else {
                        tokenIndex = lPos;
                        while (((tokenIndex < tokensNumber) && (maxPartLevel === this.tokensList.get(tokenIndex).tokenLevel))) {
                            tokenIndex++;
                        }
                        ;
                        rPos = tokenIndex - 1;
                        if (this.verboseMode === true) {
                            this.printSystemInfo("Parsing (" + lPos + ", " + rPos + ") ", ExpressionConstants_1.ExpressionConstants.WITH_EXP_STR);
                            this.showParsing(lPos, rPos);
                        }
                        let leftIsNumber;
                        let rigthIsNumber;
                        for (pos = lPos; pos <= rPos; pos++) {
                            {
                                leftIsNumber = false;
                                rigthIsNumber = false;
                                token = this.tokensList.get(pos);
                                if (pos - 1 >= 0) {
                                    tokenL = this.tokensList.get(pos - 1);
                                    if (tokenL.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID)
                                        leftIsNumber = true;
                                }
                                if (pos + 1 < tokensNumber) {
                                    tokenR = this.tokensList.get(pos + 1);
                                    if (tokenR.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID)
                                        rigthIsNumber = true;
                                }
                                if ((token.tokenTypeId === RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE) && (recArgPos < 0))
                                    recArgPos = pos;
                                else if ((token.tokenTypeId === FunctionVariadic_1.FunctionVariadic.TYPE_ID) && (variadicFunPos < 0))
                                    variadicFunPos = pos;
                                else if ((token.tokenTypeId === Function3Arg_1.Function3Arg.TYPE_ID) && (f3ArgPos < 0))
                                    f3ArgPos = pos;
                                else if ((token.tokenTypeId === Function2Arg_1.Function2Arg.TYPE_ID) && (f2ArgPos < 0))
                                    f2ArgPos = pos;
                                else if ((token.tokenTypeId === Function1Arg_1.Function1Arg.TYPE_ID) && (f1ArgPos < 0))
                                    f1ArgPos = pos;
                                else if ((token.tokenTypeId === FunctionConstants_1.FunctionConstants.TYPE_ID) && (userFunPos < 0))
                                    userFunPos = pos;
                                else if (token.tokenTypeId === Operator_1.Operator.TYPE_ID) {
                                    if ((token.tokenId === Operator_1.Operator.POWER_ID) && (leftIsNumber && rigthIsNumber)) {
                                        powerPos = pos;
                                        powerNum++;
                                    }
                                    else if ((token.tokenId === Operator_1.Operator.TETRATION_ID) && (leftIsNumber && rigthIsNumber)) {
                                        tetrationPos = pos;
                                    }
                                    else if ((token.tokenId === Operator_1.Operator.FACT_ID) && (factPos < 0) && (leftIsNumber)) {
                                        factPos = pos;
                                    }
                                    else if ((token.tokenId === Operator_1.Operator.PERC_ID) && (percPos < 0) && (leftIsNumber)) {
                                        percPos = pos;
                                    }
                                    else if ((token.tokenId === Operator_1.Operator.MOD_ID) && (modPos < 0) && (leftIsNumber && rigthIsNumber)) {
                                        modPos = pos;
                                    }
                                    else if ((token.tokenId === Operator_1.Operator.PLUS_ID) && (plusPos < 0) && (rigthIsNumber))
                                        plusPos = pos;
                                    else if ((token.tokenId === Operator_1.Operator.MINUS_ID) && (minusPos < 0) && (rigthIsNumber))
                                        minusPos = pos;
                                    else if ((token.tokenId === Operator_1.Operator.MULTIPLY_ID) && (multiplyPos < 0) && (leftIsNumber && rigthIsNumber))
                                        multiplyPos = pos;
                                    else if ((token.tokenId === Operator_1.Operator.DIVIDE_ID) && (dividePos < 0) && (leftIsNumber && rigthIsNumber))
                                        dividePos = pos;
                                }
                                else if (token.tokenTypeId === BooleanOperator_1.BooleanOperator.TYPE_ID) {
                                    if ((token.tokenId === BooleanOperator_1.BooleanOperator.NEG_ID) && (negPos < 0) && (rigthIsNumber))
                                        negPos = pos;
                                    else if (leftIsNumber && rigthIsNumber) {
                                        if ((token.tokenId === BooleanOperator_1.BooleanOperator.AND_ID || token.tokenId === BooleanOperator_1.BooleanOperator.NAND_ID) && (andGroupPos < 0))
                                            andGroupPos = pos;
                                        else if ((token.tokenId === BooleanOperator_1.BooleanOperator.OR_ID || token.tokenId === BooleanOperator_1.BooleanOperator.NOR_ID || token.tokenId === BooleanOperator_1.BooleanOperator.XOR_ID) && (orGroupPos < 0))
                                            orGroupPos = pos;
                                        else if ((token.tokenId === BooleanOperator_1.BooleanOperator.IMP_ID || token.tokenId === BooleanOperator_1.BooleanOperator.CIMP_ID || token.tokenId === BooleanOperator_1.BooleanOperator.NIMP_ID || token.tokenId === BooleanOperator_1.BooleanOperator.CNIMP_ID || token.tokenId === BooleanOperator_1.BooleanOperator.EQV_ID) && (implGroupPos < 0))
                                            implGroupPos = pos;
                                        else if (bolPos < 0)
                                            bolPos = pos;
                                    }
                                }
                                else if (token.tokenTypeId === BinaryRelation_1.BinaryRelation.TYPE_ID) {
                                    if ((token.tokenId === BinaryRelation_1.BinaryRelation.EQ_ID) && (eqPos < 0) && (leftIsNumber && rigthIsNumber))
                                        eqPos = pos;
                                    else if ((token.tokenId === BinaryRelation_1.BinaryRelation.NEQ_ID) && (neqPos < 0) && (leftIsNumber && rigthIsNumber))
                                        neqPos = pos;
                                    else if ((token.tokenId === BinaryRelation_1.BinaryRelation.LT_ID) && (ltPos < 0) && (leftIsNumber && rigthIsNumber))
                                        ltPos = pos;
                                    else if ((token.tokenId === BinaryRelation_1.BinaryRelation.GT_ID) && (gtPos < 0) && (leftIsNumber && rigthIsNumber))
                                        gtPos = pos;
                                    else if ((token.tokenId === BinaryRelation_1.BinaryRelation.LEQ_ID) && (leqPos < 0) && (leftIsNumber && rigthIsNumber))
                                        leqPos = pos;
                                    else if ((token.tokenId === BinaryRelation_1.BinaryRelation.GEQ_ID) && (geqPos < 0) && (leftIsNumber && rigthIsNumber))
                                        geqPos = pos;
                                }
                                else if (token.tokenTypeId === BitwiseOperator_1.BitwiseOperator.TYPE_ID) {
                                    if ((token.tokenId === BitwiseOperator_1.BitwiseOperator.COMPL_ID) && (bitwiseComplPos < 0) && (rigthIsNumber))
                                        bitwiseComplPos = pos;
                                    else if ((bitwisePos < 0) && (leftIsNumber && rigthIsNumber))
                                        bitwisePos = pos;
                                }
                                else if (token.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) {
                                    if ((token.tokenId === ParserSymbol_1.ParserSymbol.COMMA_ID)) {
                                        if (commaPos < 0)
                                            commas = (new j4ts_1.java.util.ArrayList());
                                        commas.add(pos);
                                        commaPos = pos;
                                    }
                                    else if ((token.tokenId === ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_ID) && (lParPos < 0))
                                        lParPos = pos;
                                    else if ((token.tokenId === ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID) && (rParPos < 0))
                                        rParPos = pos;
                                }
                            }
                            ;
                        }
                        if (powerNum > 1) {
                            powerPos = -1;
                            p = rPos + 1;
                            do {
                                {
                                    p--;
                                    token = this.tokensList.get(p);
                                    if ((token.tokenTypeId === Operator_1.Operator.TYPE_ID) && (token.tokenId === Operator_1.Operator.POWER_ID))
                                        powerPos = p;
                                }
                            } while (((p > lPos) && (powerPos === -1)));
                        }
                    }
                }
                if (calculusPos >= 0)
                    this.calculusCalc(calculusPos);
                else if (ifPos >= 0) {
                    this.IF_CONDITION(ifPos);
                }
                else if (iffPos >= 0) {
                    this.IFF(iffPos);
                }
                else if (recArgPos >= 0) {
                    this.RECURSIVE_ARGUMENT(recArgPos);
                }
                else if (variadicFunPos >= 0)
                    this.variadicFunCalc(variadicFunPos);
                else if (f3ArgPos >= 0)
                    this.f3ArgCalc(f3ArgPos);
                else if (f2ArgPos >= 0)
                    this.f2ArgCalc(f2ArgPos);
                else if (f1ArgPos >= 0)
                    this.f1ArgCalc(f1ArgPos);
                else if (userFunPos >= 0) {
                    this.USER_FUNCTION(userFunPos);
                }
                else if (tetrationPos >= 0) {
                    this.TETRATION(tetrationPos);
                }
                else if (powerPos >= 0) {
                    this.POWER(powerPos);
                }
                else if (factPos >= 0) {
                    this.FACT(factPos);
                }
                else if (percPos >= 0) {
                    this.PERC(percPos);
                }
                else if (modPos >= 0) {
                    this.MODULO(modPos);
                }
                else if (negPos >= 0) {
                    this.NEG(negPos);
                }
                else if (bitwiseComplPos >= 0) {
                    this.BITWISE_COMPL(bitwiseComplPos);
                }
                else if ((multiplyPos >= 0) || (dividePos >= 0)) {
                    if ((multiplyPos >= 0) && (dividePos >= 0))
                        if (multiplyPos <= dividePos)
                            this.MULTIPLY(multiplyPos);
                        else
                            this.DIVIDE(dividePos);
                    else if (multiplyPos >= 0)
                        this.MULTIPLY(multiplyPos);
                    else
                        this.DIVIDE(dividePos);
                }
                else if ((minusPos >= 0) || (plusPos >= 0)) {
                    if ((minusPos >= 0) && (plusPos >= 0))
                        if (minusPos <= plusPos)
                            this.MINUS(minusPos);
                        else
                            this.PLUS(plusPos);
                    else if (minusPos >= 0)
                        this.MINUS(minusPos);
                    else
                        this.PLUS(plusPos);
                }
                else if (neqPos >= 0) {
                    this.NEQ(neqPos);
                }
                else if (eqPos >= 0) {
                    this.EQ(eqPos);
                }
                else if (ltPos >= 0) {
                    this.LT(ltPos);
                }
                else if (gtPos >= 0) {
                    this.GT(gtPos);
                }
                else if (leqPos >= 0) {
                    this.LEQ(leqPos);
                }
                else if (geqPos >= 0) {
                    this.GEQ(geqPos);
                }
                else if (commaPos >= 0) {
                    for (let i = commas.size() - 1; i >= 0; i--) {
                        this.COMMA(commas.get(i));
                    }
                }
                else if (andGroupPos >= 0)
                    this.bolCalc(andGroupPos);
                else if (orGroupPos >= 0)
                    this.bolCalc(orGroupPos);
                else if (implGroupPos >= 0)
                    this.bolCalc(implGroupPos);
                else if (bolPos >= 0)
                    this.bolCalc(bolPos);
                else if (bitwisePos >= 0)
                    this.bitwiseCalc(bitwisePos);
                else if ((lParPos >= 0) && (rParPos > lParPos)) {
                    this.PARENTHESES(lParPos, rParPos);
                }
                else if (this.tokensList.size() > 1) {
                    this.errorMessage = this.errorMessage + "\n[" + this.description + "][" + this.expressionString + "] Fatal error - not know what to do with tokens while calculate().\n";
                }
                if (this.verboseMode === true) {
                    this.showParsing(0, this.tokensList.size() - 1);
                    this.printSystemInfo(" done\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
                }
                if (this.tokensList.size() === tokensNumber)
                    emptyLoopCounter++;
                else
                    emptyLoopCounter = 0;
                if (emptyLoopCounter > 10) {
                    this.errorMessage = this.errorMessage + "\nInternal error, do not know what to do with the token, probably mXparser bug, please report - finishing";
                    return j4ts_2.javaemul.internal.DoubleHelper.NaN;
                }
            }
        } while ((this.tokensList.size() > 1));
        if (this.verboseMode === true) {
            this.printSystemInfo("Calculated value: " + this.tokensList.get(0).tokenValue + "\n", ExpressionConstants_1.ExpressionConstants.WITH_EXP_STR);
            this.printSystemInfo("Exiting\n", ExpressionConstants_1.ExpressionConstants.WITH_EXP_STR);
            this.printSystemInfo("\n", ExpressionConstants_1.ExpressionConstants.NO_EXP_STR);
        }
        const endTime = j4ts_1.java.lang.System.currentTimeMillis();
        this.computingTime = (endTime - startTime) / 1000.0;
        this.recursionCallsCounter = 0;
        let result = this.tokensList.get(0).tokenValue;
        if (mXparserConstants_1.mXparserConstants.almostIntRounding) {
            const resultint = Math.round(result);
            if (Math.abs(result - resultint) <= BinaryRelations_1.BinaryRelations.getEpsilon())
                result = resultint;
        }
        return result;
    }
    /**
     * Calculates unary function
     * @param {number} pos    token position
     * @private
     */
    /*private*/ f1ArgCalc(pos) {
        switch ((this.tokensList.get(pos).tokenId)) {
            case Function1Arg_1.Function1Arg.SIN_ID:
                this.SIN(pos);
                break;
            case Function1Arg_1.Function1Arg.COS_ID:
                this.COS(pos);
                break;
            case Function1Arg_1.Function1Arg.TAN_ID:
                this.TAN(pos);
                break;
            case Function1Arg_1.Function1Arg.CTAN_ID:
                this.CTAN(pos);
                break;
            case Function1Arg_1.Function1Arg.SEC_ID:
                this.SEC(pos);
                break;
            case Function1Arg_1.Function1Arg.COSEC_ID:
                this.COSEC(pos);
                break;
            case Function1Arg_1.Function1Arg.ASIN_ID:
                this.ASIN(pos);
                break;
            case Function1Arg_1.Function1Arg.ACOS_ID:
                this.ACOS(pos);
                break;
            case Function1Arg_1.Function1Arg.ATAN_ID:
                this.ATAN(pos);
                break;
            case Function1Arg_1.Function1Arg.ACTAN_ID:
                this.ACTAN(pos);
                break;
            case Function1Arg_1.Function1Arg.LN_ID:
                this.LN(pos);
                break;
            case Function1Arg_1.Function1Arg.LOG2_ID:
                this.LOG2(pos);
                break;
            case Function1Arg_1.Function1Arg.LOG10_ID:
                this.LOG10(pos);
                break;
            case Function1Arg_1.Function1Arg.RAD_ID:
                this.RAD(pos);
                break;
            case Function1Arg_1.Function1Arg.EXP_ID:
                this.EXP(pos);
                break;
            case Function1Arg_1.Function1Arg.SQRT_ID:
                this.SQRT(pos);
                break;
            case Function1Arg_1.Function1Arg.SINH_ID:
                this.SINH(pos);
                break;
            case Function1Arg_1.Function1Arg.COSH_ID:
                this.COSH(pos);
                break;
            case Function1Arg_1.Function1Arg.TANH_ID:
                this.TANH(pos);
                break;
            case Function1Arg_1.Function1Arg.COTH_ID:
                this.COTH(pos);
                break;
            case Function1Arg_1.Function1Arg.SECH_ID:
                this.SECH(pos);
                break;
            case Function1Arg_1.Function1Arg.CSCH_ID:
                this.CSCH(pos);
                break;
            case Function1Arg_1.Function1Arg.DEG_ID:
                this.DEG(pos);
                break;
            case Function1Arg_1.Function1Arg.ABS_ID:
                this.ABS(pos);
                break;
            case Function1Arg_1.Function1Arg.SGN_ID:
                this.SGN(pos);
                break;
            case Function1Arg_1.Function1Arg.FLOOR_ID:
                this.FLOOR(pos);
                break;
            case Function1Arg_1.Function1Arg.CEIL_ID:
                this.CEIL(pos);
                break;
            case Function1Arg_1.Function1Arg.NOT_ID:
                this.NOT(pos);
                break;
            case Function1Arg_1.Function1Arg.ARSINH_ID:
                this.ARSINH(pos);
                break;
            case Function1Arg_1.Function1Arg.ARCOSH_ID:
                this.ARCOSH(pos);
                break;
            case Function1Arg_1.Function1Arg.ARTANH_ID:
                this.ARTANH(pos);
                break;
            case Function1Arg_1.Function1Arg.ARCOTH_ID:
                this.ARCOTH(pos);
                break;
            case Function1Arg_1.Function1Arg.ARSECH_ID:
                this.ARSECH(pos);
                break;
            case Function1Arg_1.Function1Arg.ARCSCH_ID:
                this.ARCSCH(pos);
                break;
            case Function1Arg_1.Function1Arg.SA_ID:
                this.SA(pos);
                break;
            case Function1Arg_1.Function1Arg.SINC_ID:
                this.SINC(pos);
                break;
            case Function1Arg_1.Function1Arg.BELL_NUMBER_ID:
                this.BELL_NUMBER(pos);
                break;
            case Function1Arg_1.Function1Arg.LUCAS_NUMBER_ID:
                this.LUCAS_NUMBER(pos);
                break;
            case Function1Arg_1.Function1Arg.FIBONACCI_NUMBER_ID:
                this.FIBONACCI_NUMBER(pos);
                break;
            case Function1Arg_1.Function1Arg.HARMONIC_NUMBER_ID:
                this.HARMONIC_NUMBER(pos);
                break;
            case Function1Arg_1.Function1Arg.IS_PRIME_ID:
                this.IS_PRIME(pos);
                break;
            case Function1Arg_1.Function1Arg.PRIME_COUNT_ID:
                this.PRIME_COUNT(pos);
                break;
            case Function1Arg_1.Function1Arg.EXP_INT_ID:
                this.EXP_INT(pos);
                break;
            case Function1Arg_1.Function1Arg.LOG_INT_ID:
                this.LOG_INT(pos);
                break;
            case Function1Arg_1.Function1Arg.OFF_LOG_INT_ID:
                this.OFF_LOG_INT(pos);
                break;
            case Function1Arg_1.Function1Arg.GAUSS_ERF_ID:
                this.GAUSS_ERF(pos);
                break;
            case Function1Arg_1.Function1Arg.GAUSS_ERFC_ID:
                this.GAUSS_ERFC(pos);
                break;
            case Function1Arg_1.Function1Arg.GAUSS_ERF_INV_ID:
                this.GAUSS_ERF_INV(pos);
                break;
            case Function1Arg_1.Function1Arg.GAUSS_ERFC_INV_ID:
                this.GAUSS_ERFC_INV(pos);
                break;
            case Function1Arg_1.Function1Arg.ULP_ID:
                this.ULP(pos);
                break;
            case Function1Arg_1.Function1Arg.ISNAN_ID:
                this.ISNAN(pos);
                break;
            case Function1Arg_1.Function1Arg.NDIG10_ID:
                this.NDIG10(pos);
                break;
            case Function1Arg_1.Function1Arg.NFACT_ID:
                this.NFACT(pos);
                break;
            case Function1Arg_1.Function1Arg.ARCSEC_ID:
                this.ARCSEC(pos);
                break;
            case Function1Arg_1.Function1Arg.ARCCSC_ID:
                this.ARCCSC(pos);
                break;
            case Function1Arg_1.Function1Arg.GAMMA_ID:
                this.GAMMA(pos);
                break;
            case Function1Arg_1.Function1Arg.LAMBERT_W0_ID:
                this.LAMBERT_W0(pos);
                break;
            case Function1Arg_1.Function1Arg.LAMBERT_W1_ID:
                this.LAMBERT_W1(pos);
                break;
            case Function1Arg_1.Function1Arg.SGN_GAMMA_ID:
                this.SGN_GAMMA(pos);
                break;
            case Function1Arg_1.Function1Arg.LOG_GAMMA_ID:
                this.LOG_GAMMA(pos);
                break;
            case Function1Arg_1.Function1Arg.DI_GAMMA_ID:
                this.DI_GAMMA(pos);
                break;
            case Function1Arg_1.Function1Arg.PARAM_ID:
                this.UDF_PARAM(pos);
                break;
        }
    }
    /**
     * Calculates binary function
     * @param {number} pos   Token position
     * @private
     */
    /*private*/ f2ArgCalc(pos) {
        switch ((this.tokensList.get(pos).tokenId)) {
            case Function2Arg_1.Function2Arg.LOG_ID:
                this.LOG(pos);
                break;
            case Function2Arg_1.Function2Arg.MOD_ID:
                this.MOD(pos);
                break;
            case Function2Arg_1.Function2Arg.BINOM_COEFF_ID:
                this.BINOM_COEFF(pos);
                break;
            case Function2Arg_1.Function2Arg.BERNOULLI_NUMBER_ID:
                this.BERNOULLI_NUMBER(pos);
                break;
            case Function2Arg_1.Function2Arg.STIRLING1_NUMBER_ID:
                this.STIRLING1_NUMBER(pos);
                break;
            case Function2Arg_1.Function2Arg.STIRLING2_NUMBER_ID:
                this.STIRLING2_NUMBER(pos);
                break;
            case Function2Arg_1.Function2Arg.WORPITZKY_NUMBER_ID:
                this.WORPITZKY_NUMBER(pos);
                break;
            case Function2Arg_1.Function2Arg.EULER_NUMBER_ID:
                this.EULER_NUMBER(pos);
                break;
            case Function2Arg_1.Function2Arg.KRONECKER_DELTA_ID:
                this.KRONECKER_DELTA(pos);
                break;
            case Function2Arg_1.Function2Arg.EULER_POLYNOMIAL_ID:
                this.EULER_POLYNOMIAL(pos);
                break;
            case Function2Arg_1.Function2Arg.HARMONIC_NUMBER_ID:
                this.HARMONIC2_NUMBER(pos);
                break;
            case Function2Arg_1.Function2Arg.RND_UNIFORM_CONT_ID:
                this.RND_VAR_UNIFORM_CONT(pos);
                break;
            case Function2Arg_1.Function2Arg.RND_UNIFORM_DISCR_ID:
                this.RND_VAR_UNIFORM_DISCR(pos);
                break;
            case Function2Arg_1.Function2Arg.ROUND_ID:
                this.ROUND(pos);
                break;
            case Function2Arg_1.Function2Arg.RND_NORMAL_ID:
                this.RND_NORMAL(pos);
                break;
            case Function2Arg_1.Function2Arg.NDIG_ID:
                this.NDIG(pos);
                break;
            case Function2Arg_1.Function2Arg.DIGIT10_ID:
                this.DIGIT10(pos);
                break;
            case Function2Arg_1.Function2Arg.FACTVAL_ID:
                this.FACTVAL(pos);
                break;
            case Function2Arg_1.Function2Arg.FACTEXP_ID:
                this.FACTEXP(pos);
                break;
            case Function2Arg_1.Function2Arg.ROOT_ID:
                this.ROOT(pos);
                break;
            case Function2Arg_1.Function2Arg.INC_GAMMA_LOWER_ID:
                this.INC_GAMMA_LOWER(pos);
                break;
            case Function2Arg_1.Function2Arg.INC_GAMMA_UPPER_ID:
                this.INC_GAMMA_UPPER(pos);
                break;
            case Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_ID:
                this.REG_GAMMA_LOWER(pos);
                break;
            case Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_ID:
                this.REG_GAMMA_UPPER(pos);
                break;
            case Function2Arg_1.Function2Arg.PERMUTATIONS_ID:
                this.PERMUTATIONS(pos);
                break;
            case Function2Arg_1.Function2Arg.BETA_ID:
                this.BETA(pos);
                break;
            case Function2Arg_1.Function2Arg.LOG_BETA_ID:
                this.LOG_BETA(pos);
                break;
        }
    }
    /**
     * Calculates function with 3 arguments
     * @param {number} pos   Token position
     * @private
     */
    /*private*/ f3ArgCalc(pos) {
        switch ((this.tokensList.get(pos).tokenId)) {
            case Function3Arg_1.Function3Arg.IF_ID:
                this.IF(pos);
                break;
            case Function3Arg_1.Function3Arg.CHI_ID:
                this.CHI(pos);
                break;
            case Function3Arg_1.Function3Arg.CHI_LR_ID:
                this.CHI_LR(pos);
                break;
            case Function3Arg_1.Function3Arg.CHI_L_ID:
                this.CHI_L(pos);
                break;
            case Function3Arg_1.Function3Arg.CHI_R_ID:
                this.CHI_R(pos);
                break;
            case Function3Arg_1.Function3Arg.PDF_UNIFORM_CONT_ID:
                this.PDF_UNIFORM_CONT(pos);
                break;
            case Function3Arg_1.Function3Arg.CDF_UNIFORM_CONT_ID:
                this.CDF_UNIFORM_CONT(pos);
                break;
            case Function3Arg_1.Function3Arg.QNT_UNIFORM_CONT_ID:
                this.QNT_UNIFORM_CONT(pos);
                break;
            case Function3Arg_1.Function3Arg.PDF_NORMAL_ID:
                this.PDF_NORMAL(pos);
                break;
            case Function3Arg_1.Function3Arg.CDF_NORMAL_ID:
                this.CDF_NORMAL(pos);
                break;
            case Function3Arg_1.Function3Arg.QNT_NORMAL_ID:
                this.QNT_NORMAL(pos);
                break;
            case Function3Arg_1.Function3Arg.DIGIT_ID:
                this.DIGIT(pos);
                break;
            case Function3Arg_1.Function3Arg.INC_BETA_ID:
                this.INC_BETA(pos);
                break;
            case Function3Arg_1.Function3Arg.REG_BETA_ID:
                this.REG_BETA(pos);
                break;
        }
    }
    /**
     * Calculates Variadic function
     * @param {number} pos   Token position
     * @private
     */
    /*private*/ variadicFunCalc(pos) {
        switch ((this.tokensList.get(pos).tokenId)) {
            case FunctionVariadic_1.FunctionVariadic.IFF_ID:
                this.IFF(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.MIN_ID:
                this.MIN_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.MAX_ID:
                this.MAX_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.SUM_ID:
                this.SUM_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.PROD_ID:
                this.PROD_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.AVG_ID:
                this.AVG_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.VAR_ID:
                this.VAR_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.STD_ID:
                this.STD_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.CONT_FRAC_ID:
                this.CONTINUED_FRACTION(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.CONT_POL_ID:
                this.CONTINUED_POLYNOMIAL(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.GCD_ID:
                this.GCD(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.LCM_ID:
                this.LCM(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.RND_LIST_ID:
                this.RND_LIST(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.COALESCE_ID:
                this.COALESCE(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.OR_ID:
                this.OR_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.AND_ID:
                this.AND_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.XOR_ID:
                this.XOR_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.ARGMIN_ID:
                this.ARGMIN_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.ARGMAX_ID:
                this.ARGMAX_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.MEDIAN_ID:
                this.MEDIAN_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.MODE_ID:
                this.MODE_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.BASE_ID:
                this.BASE_VARIADIC(pos);
                break;
            case FunctionVariadic_1.FunctionVariadic.NDIST_ID:
                this.NDIST_VARIADIC(pos);
                break;
        }
    }
    /**
     * Calculates calculus operators
     * @param {number} pos
     * @private
     */
    /*private*/ calculusCalc(pos) {
        switch ((this.tokensList.get(pos).tokenId)) {
            case CalculusOperator_1.CalculusOperator.SUM_ID:
                this.SUM(pos);
                break;
            case CalculusOperator_1.CalculusOperator.PROD_ID:
                this.PROD(pos);
                break;
            case CalculusOperator_1.CalculusOperator.MIN_ID:
                this.MIN(pos);
                break;
            case CalculusOperator_1.CalculusOperator.MAX_ID:
                this.MAX(pos);
                break;
            case CalculusOperator_1.CalculusOperator.AVG_ID:
                this.AVG(pos);
                break;
            case CalculusOperator_1.CalculusOperator.VAR_ID:
                this.VAR(pos);
                break;
            case CalculusOperator_1.CalculusOperator.STD_ID:
                this.STD(pos);
                break;
            case CalculusOperator_1.CalculusOperator.INT_ID:
                this.INTEGRAL(pos);
                break;
            case CalculusOperator_1.CalculusOperator.SOLVE_ID:
                this.SOLVE(pos);
                break;
            case CalculusOperator_1.CalculusOperator.DER_ID:
                this.DERIVATIVE(pos, Calculus_1.Calculus.GENERAL_DERIVATIVE);
                break;
            case CalculusOperator_1.CalculusOperator.DER_LEFT_ID:
                this.DERIVATIVE(pos, Calculus_1.Calculus.LEFT_DERIVATIVE);
                break;
            case CalculusOperator_1.CalculusOperator.DER_RIGHT_ID:
                this.DERIVATIVE(pos, Calculus_1.Calculus.RIGHT_DERIVATIVE);
                break;
            case CalculusOperator_1.CalculusOperator.DERN_ID:
                this.DERIVATIVE_NTH(pos, Calculus_1.Calculus.GENERAL_DERIVATIVE);
                break;
            case CalculusOperator_1.CalculusOperator.FORW_DIFF_ID:
                this.FORWARD_DIFFERENCE(pos);
                break;
            case CalculusOperator_1.CalculusOperator.BACKW_DIFF_ID:
                this.BACKWARD_DIFFERENCE(pos);
                break;
        }
    }
    /**
     * Calculates boolean operators
     * @param {number} pos
     * @private
     */
    /*private*/ bolCalc(pos) {
        switch ((this.tokensList.get(pos).tokenId)) {
            case BooleanOperator_1.BooleanOperator.AND_ID:
                this.AND(pos);
                break;
            case BooleanOperator_1.BooleanOperator.CIMP_ID:
                this.CIMP(pos);
                break;
            case BooleanOperator_1.BooleanOperator.CNIMP_ID:
                this.CNIMP(pos);
                break;
            case BooleanOperator_1.BooleanOperator.EQV_ID:
                this.EQV(pos);
                break;
            case BooleanOperator_1.BooleanOperator.IMP_ID:
                this.IMP(pos);
                break;
            case BooleanOperator_1.BooleanOperator.NAND_ID:
                this.NAND(pos);
                break;
            case BooleanOperator_1.BooleanOperator.NIMP_ID:
                this.NIMP(pos);
                break;
            case BooleanOperator_1.BooleanOperator.NOR_ID:
                this.NOR(pos);
                break;
            case BooleanOperator_1.BooleanOperator.OR_ID:
                this.OR(pos);
                break;
            case BooleanOperator_1.BooleanOperator.XOR_ID:
                this.XOR(pos);
                break;
        }
    }
    /**
     * Calculates Bitwise operators
     * @param {number} pos
     * @private
     */
    /*private*/ bitwiseCalc(pos) {
        switch ((this.tokensList.get(pos).tokenId)) {
            case BitwiseOperator_1.BitwiseOperator.AND_ID:
                this.BITWISE_AND(pos);
                break;
            case BitwiseOperator_1.BitwiseOperator.OR_ID:
                this.BITWISE_OR(pos);
                break;
            case BitwiseOperator_1.BitwiseOperator.XOR_ID:
                this.BITWISE_XOR(pos);
                break;
            case BitwiseOperator_1.BitwiseOperator.LEFT_SHIFT_ID:
                this.BITWISE_LEFT_SHIFT(pos);
                break;
            case BitwiseOperator_1.BitwiseOperator.RIGHT_SHIFT_ID:
                this.BITWISE_RIGHT_SHIFT(pos);
                break;
        }
    }
    /**
     * Class level method for adding specific automatic
     * parser keywords relates to User Defined Functions
     * i.e.: par(i), [npar]
     * @private
     */
    /*private*/ addUDFSpecificParserKeyWords() {
        this.addKeyWord(Function1Arg_1.Function1Arg.PARAM_STR, Function1Arg_1.Function1Arg.PARAM_DESC, Function1Arg_1.Function1Arg.PARAM_ID, Function1Arg_1.Function1Arg.PARAM_SYN_$LI$(), Function1Arg_1.Function1Arg.PARAM_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
        this.addKeyWord(ConstantValue_1.ConstantValue.NPAR_STR, ConstantValue_1.ConstantValue.NPAR_DESC, ConstantValue_1.ConstantValue.NPAR_ID, ConstantValue_1.ConstantValue.NPAR_SYN_$LI$(), ConstantValue_1.ConstantValue.NPAR_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
    }
    /**
     * Creates parser key words list
     * @private
     */
    /*private*/ addParserKeyWords() {
        this.addKeyWord(Operator_1.Operator.PLUS_STR, Operator_1.Operator.PLUS_DESC, Operator_1.Operator.PLUS_ID, Operator_1.Operator.PLUS_SYN, Operator_1.Operator.PLUS_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.MINUS_STR, Operator_1.Operator.MINUS_DESC, Operator_1.Operator.MINUS_ID, Operator_1.Operator.MINUS_SYN, Operator_1.Operator.MINUS_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.MULTIPLY_STR, Operator_1.Operator.MULTIPLY_DESC, Operator_1.Operator.MULTIPLY_ID, Operator_1.Operator.MULTIPLY_SYN, Operator_1.Operator.MULTIPLY_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.DIVIDE_STR, Operator_1.Operator.DIVIDE_DESC, Operator_1.Operator.DIVIDE_ID, Operator_1.Operator.DIVIDE_SYN, Operator_1.Operator.DIVIDE_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.POWER_STR, Operator_1.Operator.POWER_DESC, Operator_1.Operator.POWER_ID, Operator_1.Operator.POWER_SYN, Operator_1.Operator.POWER_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.FACT_STR, Operator_1.Operator.FACT_DESC, Operator_1.Operator.FACT_ID, Operator_1.Operator.FACT_SYN, Operator_1.Operator.FACT_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.MOD_STR, Operator_1.Operator.MOD_DESC, Operator_1.Operator.MOD_ID, Operator_1.Operator.MOD_SYN, Operator_1.Operator.MOD_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.PERC_STR, Operator_1.Operator.PERC_DESC, Operator_1.Operator.PERC_ID, Operator_1.Operator.PERC_SYN, Operator_1.Operator.PERC_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(Operator_1.Operator.TETRATION_STR, Operator_1.Operator.TETRATION_DESC, Operator_1.Operator.TETRATION_ID, Operator_1.Operator.TETRATION_SYN, Operator_1.Operator.TETRATION_SINCE_$LI$(), Operator_1.Operator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NEG_STR, BooleanOperator_1.BooleanOperator.NEG_DESC, BooleanOperator_1.BooleanOperator.NEG_ID, BooleanOperator_1.BooleanOperator.NEG_SYN, BooleanOperator_1.BooleanOperator.NEG_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.AND_STR, BooleanOperator_1.BooleanOperator.AND_DESC, BooleanOperator_1.BooleanOperator.AND_ID, BooleanOperator_1.BooleanOperator.AND_SYN, BooleanOperator_1.BooleanOperator.AND_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.AND1_STR, BooleanOperator_1.BooleanOperator.AND_DESC, BooleanOperator_1.BooleanOperator.AND_ID, BooleanOperator_1.BooleanOperator.AND1_SYN, BooleanOperator_1.BooleanOperator.AND_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.AND2_STR, BooleanOperator_1.BooleanOperator.AND_DESC, BooleanOperator_1.BooleanOperator.AND_ID, BooleanOperator_1.BooleanOperator.AND2_SYN, BooleanOperator_1.BooleanOperator.AND_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NAND_STR_$LI$(), BooleanOperator_1.BooleanOperator.NAND_DESC, BooleanOperator_1.BooleanOperator.NAND_ID, BooleanOperator_1.BooleanOperator.NAND_SYN_$LI$(), BooleanOperator_1.BooleanOperator.NAND_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NAND1_STR_$LI$(), BooleanOperator_1.BooleanOperator.NAND_DESC, BooleanOperator_1.BooleanOperator.NAND_ID, BooleanOperator_1.BooleanOperator.NAND1_SYN_$LI$(), BooleanOperator_1.BooleanOperator.NAND_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NAND2_STR_$LI$(), BooleanOperator_1.BooleanOperator.NAND_DESC, BooleanOperator_1.BooleanOperator.NAND_ID, BooleanOperator_1.BooleanOperator.NAND2_SYN_$LI$(), BooleanOperator_1.BooleanOperator.NAND_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.OR_STR, BooleanOperator_1.BooleanOperator.OR_DESC, BooleanOperator_1.BooleanOperator.OR_ID, BooleanOperator_1.BooleanOperator.OR_SYN, BooleanOperator_1.BooleanOperator.OR_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.OR1_STR, BooleanOperator_1.BooleanOperator.OR_DESC, BooleanOperator_1.BooleanOperator.OR_ID, BooleanOperator_1.BooleanOperator.OR1_SYN, BooleanOperator_1.BooleanOperator.OR_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.OR2_STR, BooleanOperator_1.BooleanOperator.OR_DESC, BooleanOperator_1.BooleanOperator.OR_ID, BooleanOperator_1.BooleanOperator.OR2_SYN, BooleanOperator_1.BooleanOperator.OR_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NOR_STR_$LI$(), BooleanOperator_1.BooleanOperator.NOR_DESC, BooleanOperator_1.BooleanOperator.NOR_ID, BooleanOperator_1.BooleanOperator.NOR_SYN_$LI$(), BooleanOperator_1.BooleanOperator.NOR_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NOR1_STR_$LI$(), BooleanOperator_1.BooleanOperator.NOR_DESC, BooleanOperator_1.BooleanOperator.NOR_ID, BooleanOperator_1.BooleanOperator.NOR1_SYN_$LI$(), BooleanOperator_1.BooleanOperator.NOR_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NOR2_STR_$LI$(), BooleanOperator_1.BooleanOperator.NOR_DESC, BooleanOperator_1.BooleanOperator.NOR_ID, BooleanOperator_1.BooleanOperator.NOR2_SYN_$LI$(), BooleanOperator_1.BooleanOperator.NOR_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.XOR_STR, BooleanOperator_1.BooleanOperator.XOR_DESC, BooleanOperator_1.BooleanOperator.XOR_ID, BooleanOperator_1.BooleanOperator.XOR_SYN, BooleanOperator_1.BooleanOperator.XOR_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.IMP_STR, BooleanOperator_1.BooleanOperator.IMP_DESC, BooleanOperator_1.BooleanOperator.IMP_ID, BooleanOperator_1.BooleanOperator.IMP_SYN, BooleanOperator_1.BooleanOperator.IMP_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.NIMP_STR, BooleanOperator_1.BooleanOperator.NIMP_DESC, BooleanOperator_1.BooleanOperator.NIMP_ID, BooleanOperator_1.BooleanOperator.NIMP_SYN, BooleanOperator_1.BooleanOperator.NIMP_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.CIMP_STR, BooleanOperator_1.BooleanOperator.CIMP_DESC, BooleanOperator_1.BooleanOperator.CIMP_ID, BooleanOperator_1.BooleanOperator.CIMP_SYN, BooleanOperator_1.BooleanOperator.CIMP_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.CNIMP_STR, BooleanOperator_1.BooleanOperator.CNIMP_DESC, BooleanOperator_1.BooleanOperator.CNIMP_ID, BooleanOperator_1.BooleanOperator.CNIMP_SYN, BooleanOperator_1.BooleanOperator.CNIMP_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BooleanOperator_1.BooleanOperator.EQV_STR, BooleanOperator_1.BooleanOperator.EQV_DESC, BooleanOperator_1.BooleanOperator.EQV_ID, BooleanOperator_1.BooleanOperator.EQV_SYN, BooleanOperator_1.BooleanOperator.EQV_SINCE_$LI$(), BooleanOperator_1.BooleanOperator.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.EQ_STR, BinaryRelation_1.BinaryRelation.EQ_DESC, BinaryRelation_1.BinaryRelation.EQ_ID, BinaryRelation_1.BinaryRelation.EQ_SYN, BinaryRelation_1.BinaryRelation.EQ_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.EQ1_STR, BinaryRelation_1.BinaryRelation.EQ_DESC, BinaryRelation_1.BinaryRelation.EQ_ID, BinaryRelation_1.BinaryRelation.EQ1_SYN, BinaryRelation_1.BinaryRelation.EQ_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.NEQ_STR, BinaryRelation_1.BinaryRelation.NEQ_DESC, BinaryRelation_1.BinaryRelation.NEQ_ID, BinaryRelation_1.BinaryRelation.NEQ_SYN, BinaryRelation_1.BinaryRelation.NEQ_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.NEQ1_STR, BinaryRelation_1.BinaryRelation.NEQ_DESC, BinaryRelation_1.BinaryRelation.NEQ_ID, BinaryRelation_1.BinaryRelation.NEQ1_SYN, BinaryRelation_1.BinaryRelation.NEQ_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.NEQ2_STR, BinaryRelation_1.BinaryRelation.NEQ_DESC, BinaryRelation_1.BinaryRelation.NEQ_ID, BinaryRelation_1.BinaryRelation.NEQ2_SYN, BinaryRelation_1.BinaryRelation.NEQ_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.LT_STR, BinaryRelation_1.BinaryRelation.LT_DESC, BinaryRelation_1.BinaryRelation.LT_ID, BinaryRelation_1.BinaryRelation.LT_SYN, BinaryRelation_1.BinaryRelation.LT_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.GT_STR, BinaryRelation_1.BinaryRelation.GT_DESC, BinaryRelation_1.BinaryRelation.GT_ID, BinaryRelation_1.BinaryRelation.GT_SYN, BinaryRelation_1.BinaryRelation.GT_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.LEQ_STR, BinaryRelation_1.BinaryRelation.LEQ_DESC, BinaryRelation_1.BinaryRelation.LEQ_ID, BinaryRelation_1.BinaryRelation.LEQ_SYN, BinaryRelation_1.BinaryRelation.LEQ_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        this.addKeyWord(BinaryRelation_1.BinaryRelation.GEQ_STR, BinaryRelation_1.BinaryRelation.GEQ_DESC, BinaryRelation_1.BinaryRelation.GEQ_ID, BinaryRelation_1.BinaryRelation.GEQ_SYN, BinaryRelation_1.BinaryRelation.GEQ_SINCE_$LI$(), BinaryRelation_1.BinaryRelation.TYPE_ID);
        if (this.parserKeyWordsOnly === false) {
            this.addKeyWord(Function1Arg_1.Function1Arg.SIN_STR, Function1Arg_1.Function1Arg.SIN_DESC, Function1Arg_1.Function1Arg.SIN_ID, Function1Arg_1.Function1Arg.SIN_SYN_$LI$(), Function1Arg_1.Function1Arg.SIN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.COS_STR, Function1Arg_1.Function1Arg.COS_DESC, Function1Arg_1.Function1Arg.COS_ID, Function1Arg_1.Function1Arg.COS_SYN_$LI$(), Function1Arg_1.Function1Arg.COS_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.TAN_STR, Function1Arg_1.Function1Arg.TAN_DESC, Function1Arg_1.Function1Arg.TAN_ID, Function1Arg_1.Function1Arg.TAN_SYN_$LI$(), Function1Arg_1.Function1Arg.TAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.TG_STR, Function1Arg_1.Function1Arg.TAN_DESC, Function1Arg_1.Function1Arg.TAN_ID, Function1Arg_1.Function1Arg.TG_SYN_$LI$(), Function1Arg_1.Function1Arg.TAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.CTAN_STR, Function1Arg_1.Function1Arg.CTAN_DESC, Function1Arg_1.Function1Arg.CTAN_ID, Function1Arg_1.Function1Arg.CTAN_SYN_$LI$(), Function1Arg_1.Function1Arg.CTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.CTG_STR, Function1Arg_1.Function1Arg.CTAN_DESC, Function1Arg_1.Function1Arg.CTAN_ID, Function1Arg_1.Function1Arg.CTG_SYN_$LI$(), Function1Arg_1.Function1Arg.CTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.COT_STR, Function1Arg_1.Function1Arg.CTAN_DESC, Function1Arg_1.Function1Arg.CTAN_ID, Function1Arg_1.Function1Arg.COT_SYN_$LI$(), Function1Arg_1.Function1Arg.CTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SEC_STR, Function1Arg_1.Function1Arg.SEC_DESC, Function1Arg_1.Function1Arg.SEC_ID, Function1Arg_1.Function1Arg.SEC_SYN_$LI$(), Function1Arg_1.Function1Arg.SEC_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.COSEC_STR, Function1Arg_1.Function1Arg.COSEC_DESC, Function1Arg_1.Function1Arg.COSEC_ID, Function1Arg_1.Function1Arg.COSEC_SYN_$LI$(), Function1Arg_1.Function1Arg.COSEC_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.CSC_STR, Function1Arg_1.Function1Arg.COSEC_DESC, Function1Arg_1.Function1Arg.COSEC_ID, Function1Arg_1.Function1Arg.CSC_SYN_$LI$(), Function1Arg_1.Function1Arg.COSEC_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ASIN_STR, Function1Arg_1.Function1Arg.ASIN_DESC, Function1Arg_1.Function1Arg.ASIN_ID, Function1Arg_1.Function1Arg.ASIN_SYN_$LI$(), Function1Arg_1.Function1Arg.ASIN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARSIN_STR, Function1Arg_1.Function1Arg.ASIN_DESC, Function1Arg_1.Function1Arg.ASIN_ID, Function1Arg_1.Function1Arg.ARSIN_SYN_$LI$(), Function1Arg_1.Function1Arg.ASIN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCSIN_STR, Function1Arg_1.Function1Arg.ASIN_DESC, Function1Arg_1.Function1Arg.ASIN_ID, Function1Arg_1.Function1Arg.ARCSIN_SYN_$LI$(), Function1Arg_1.Function1Arg.ASIN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACOS_STR, Function1Arg_1.Function1Arg.ACOS_DESC, Function1Arg_1.Function1Arg.ACOS_ID, Function1Arg_1.Function1Arg.ACOS_SYN_$LI$(), Function1Arg_1.Function1Arg.ACOS_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCOS_STR, Function1Arg_1.Function1Arg.ACOS_DESC, Function1Arg_1.Function1Arg.ACOS_ID, Function1Arg_1.Function1Arg.ARCOS_SYN_$LI$(), Function1Arg_1.Function1Arg.ACOS_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCOS_STR, Function1Arg_1.Function1Arg.ACOS_DESC, Function1Arg_1.Function1Arg.ACOS_ID, Function1Arg_1.Function1Arg.ARCCOS_SYN_$LI$(), Function1Arg_1.Function1Arg.ACOS_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ATAN_STR, Function1Arg_1.Function1Arg.ATAN_DESC, Function1Arg_1.Function1Arg.ATAN_ID, Function1Arg_1.Function1Arg.ATAN_SYN_$LI$(), Function1Arg_1.Function1Arg.ATAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCTAN_STR, Function1Arg_1.Function1Arg.ATAN_DESC, Function1Arg_1.Function1Arg.ATAN_ID, Function1Arg_1.Function1Arg.ARCTAN_SYN_$LI$(), Function1Arg_1.Function1Arg.ATAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ATG_STR, Function1Arg_1.Function1Arg.ATAN_DESC, Function1Arg_1.Function1Arg.ATAN_ID, Function1Arg_1.Function1Arg.ATG_SYN_$LI$(), Function1Arg_1.Function1Arg.ATAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCTG_STR, Function1Arg_1.Function1Arg.ATAN_DESC, Function1Arg_1.Function1Arg.ATAN_ID, Function1Arg_1.Function1Arg.ARCTG_SYN_$LI$(), Function1Arg_1.Function1Arg.ATAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACTAN_STR, Function1Arg_1.Function1Arg.ACTAN_DESC, Function1Arg_1.Function1Arg.ACTAN_ID, Function1Arg_1.Function1Arg.ACTAN_SYN_$LI$(), Function1Arg_1.Function1Arg.ACTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCTAN_STR, Function1Arg_1.Function1Arg.ACTAN_DESC, Function1Arg_1.Function1Arg.ACTAN_ID, Function1Arg_1.Function1Arg.ARCCTAN_SYN_$LI$(), Function1Arg_1.Function1Arg.ACTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACTG_STR, Function1Arg_1.Function1Arg.ACTAN_DESC, Function1Arg_1.Function1Arg.ACTAN_ID, Function1Arg_1.Function1Arg.ACTG_SYN_$LI$(), Function1Arg_1.Function1Arg.ACTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCTG_STR, Function1Arg_1.Function1Arg.ACTAN_DESC, Function1Arg_1.Function1Arg.ACTAN_ID, Function1Arg_1.Function1Arg.ARCCTG_SYN_$LI$(), Function1Arg_1.Function1Arg.ACTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACOT_STR, Function1Arg_1.Function1Arg.ACTAN_DESC, Function1Arg_1.Function1Arg.ACTAN_ID, Function1Arg_1.Function1Arg.ACOT_SYN_$LI$(), Function1Arg_1.Function1Arg.ACTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCOT_STR, Function1Arg_1.Function1Arg.ACTAN_DESC, Function1Arg_1.Function1Arg.ACTAN_ID, Function1Arg_1.Function1Arg.ARCCOT_SYN_$LI$(), Function1Arg_1.Function1Arg.ACTAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LN_STR, Function1Arg_1.Function1Arg.LN_DESC, Function1Arg_1.Function1Arg.LN_ID, Function1Arg_1.Function1Arg.LN_SYN_$LI$(), Function1Arg_1.Function1Arg.LN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LOG2_STR, Function1Arg_1.Function1Arg.LOG2_DESC, Function1Arg_1.Function1Arg.LOG2_ID, Function1Arg_1.Function1Arg.LOG2_SYN_$LI$(), Function1Arg_1.Function1Arg.LOG2_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LOG10_STR, Function1Arg_1.Function1Arg.LOG10_DESC, Function1Arg_1.Function1Arg.LOG10_ID, Function1Arg_1.Function1Arg.LOG10_SYN_$LI$(), Function1Arg_1.Function1Arg.LOG10_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.RAD_STR, Function1Arg_1.Function1Arg.RAD_DESC, Function1Arg_1.Function1Arg.RAD_ID, Function1Arg_1.Function1Arg.RAD_SYN_$LI$(), Function1Arg_1.Function1Arg.RAD_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.EXP_STR, Function1Arg_1.Function1Arg.EXP_DESC, Function1Arg_1.Function1Arg.EXP_ID, Function1Arg_1.Function1Arg.EXP_SYN_$LI$(), Function1Arg_1.Function1Arg.EXP_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SQRT_STR, Function1Arg_1.Function1Arg.SQRT_DESC, Function1Arg_1.Function1Arg.SQRT_ID, Function1Arg_1.Function1Arg.SQRT_SYN_$LI$(), Function1Arg_1.Function1Arg.SQRT_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SINH_STR, Function1Arg_1.Function1Arg.SINH_DESC, Function1Arg_1.Function1Arg.SINH_ID, Function1Arg_1.Function1Arg.SINH_SYN_$LI$(), Function1Arg_1.Function1Arg.SINH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.COSH_STR, Function1Arg_1.Function1Arg.COSH_DESC, Function1Arg_1.Function1Arg.COSH_ID, Function1Arg_1.Function1Arg.COSH_SYN_$LI$(), Function1Arg_1.Function1Arg.COSH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.TANH_STR, Function1Arg_1.Function1Arg.TANH_DESC, Function1Arg_1.Function1Arg.TANH_ID, Function1Arg_1.Function1Arg.TANH_SYN_$LI$(), Function1Arg_1.Function1Arg.TANH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.TGH_STR, Function1Arg_1.Function1Arg.TANH_DESC, Function1Arg_1.Function1Arg.TANH_ID, Function1Arg_1.Function1Arg.TGH_SYN_$LI$(), Function1Arg_1.Function1Arg.TANH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.CTANH_STR, Function1Arg_1.Function1Arg.COTH_DESC, Function1Arg_1.Function1Arg.COTH_ID, Function1Arg_1.Function1Arg.CTANH_SYN_$LI$(), Function1Arg_1.Function1Arg.COTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.COTH_STR, Function1Arg_1.Function1Arg.COTH_DESC, Function1Arg_1.Function1Arg.COTH_ID, Function1Arg_1.Function1Arg.COTH_SYN_$LI$(), Function1Arg_1.Function1Arg.COTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.CTGH_STR, Function1Arg_1.Function1Arg.COTH_DESC, Function1Arg_1.Function1Arg.COTH_ID, Function1Arg_1.Function1Arg.CTGH_SYN_$LI$(), Function1Arg_1.Function1Arg.COTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SECH_STR, Function1Arg_1.Function1Arg.SECH_DESC, Function1Arg_1.Function1Arg.SECH_ID, Function1Arg_1.Function1Arg.SECH_SYN_$LI$(), Function1Arg_1.Function1Arg.SECH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.CSCH_STR, Function1Arg_1.Function1Arg.CSCH_DESC, Function1Arg_1.Function1Arg.CSCH_ID, Function1Arg_1.Function1Arg.CSCH_SYN_$LI$(), Function1Arg_1.Function1Arg.CSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.COSECH_STR, Function1Arg_1.Function1Arg.CSCH_DESC, Function1Arg_1.Function1Arg.CSCH_ID, Function1Arg_1.Function1Arg.COSECH_SYN_$LI$(), Function1Arg_1.Function1Arg.CSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.DEG_STR, Function1Arg_1.Function1Arg.DEG_DESC, Function1Arg_1.Function1Arg.DEG_ID, Function1Arg_1.Function1Arg.DEG_SYN_$LI$(), Function1Arg_1.Function1Arg.DEG_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ABS_STR, Function1Arg_1.Function1Arg.ABS_DESC, Function1Arg_1.Function1Arg.ABS_ID, Function1Arg_1.Function1Arg.ABS_SYN_$LI$(), Function1Arg_1.Function1Arg.ABS_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SGN_STR, Function1Arg_1.Function1Arg.SGN_DESC, Function1Arg_1.Function1Arg.SGN_ID, Function1Arg_1.Function1Arg.SGN_SYN_$LI$(), Function1Arg_1.Function1Arg.SGN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.FLOOR_STR, Function1Arg_1.Function1Arg.FLOOR_DESC, Function1Arg_1.Function1Arg.FLOOR_ID, Function1Arg_1.Function1Arg.FLOOR_SYN_$LI$(), Function1Arg_1.Function1Arg.FLOOR_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.CEIL_STR, Function1Arg_1.Function1Arg.CEIL_DESC, Function1Arg_1.Function1Arg.CEIL_ID, Function1Arg_1.Function1Arg.CEIL_SYN_$LI$(), Function1Arg_1.Function1Arg.CEIL_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.NOT_STR, Function1Arg_1.Function1Arg.NOT_DESC, Function1Arg_1.Function1Arg.NOT_ID, Function1Arg_1.Function1Arg.NOT_SYN_$LI$(), Function1Arg_1.Function1Arg.NOT_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ASINH_STR, Function1Arg_1.Function1Arg.ARSINH_DESC, Function1Arg_1.Function1Arg.ARSINH_ID, Function1Arg_1.Function1Arg.ASINH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARSINH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARSINH_STR, Function1Arg_1.Function1Arg.ARSINH_DESC, Function1Arg_1.Function1Arg.ARSINH_ID, Function1Arg_1.Function1Arg.ARSINH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARSINH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCSINH_STR, Function1Arg_1.Function1Arg.ARSINH_DESC, Function1Arg_1.Function1Arg.ARSINH_ID, Function1Arg_1.Function1Arg.ARCSINH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARSINH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACOSH_STR, Function1Arg_1.Function1Arg.ARCOSH_DESC, Function1Arg_1.Function1Arg.ARCOSH_ID, Function1Arg_1.Function1Arg.ACOSH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOSH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCOSH_STR, Function1Arg_1.Function1Arg.ARCOSH_DESC, Function1Arg_1.Function1Arg.ARCOSH_ID, Function1Arg_1.Function1Arg.ARCOSH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOSH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCOSH_STR, Function1Arg_1.Function1Arg.ARCOSH_DESC, Function1Arg_1.Function1Arg.ARCOSH_ID, Function1Arg_1.Function1Arg.ARCCOSH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOSH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ATANH_STR, Function1Arg_1.Function1Arg.ARTANH_DESC, Function1Arg_1.Function1Arg.ARTANH_ID, Function1Arg_1.Function1Arg.ATANH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARTANH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCTANH_STR, Function1Arg_1.Function1Arg.ARTANH_DESC, Function1Arg_1.Function1Arg.ARTANH_ID, Function1Arg_1.Function1Arg.ARCTANH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARTANH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ATGH_STR, Function1Arg_1.Function1Arg.ARTANH_DESC, Function1Arg_1.Function1Arg.ARTANH_ID, Function1Arg_1.Function1Arg.ATGH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARTANH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCTGH_STR, Function1Arg_1.Function1Arg.ARTANH_DESC, Function1Arg_1.Function1Arg.ARTANH_ID, Function1Arg_1.Function1Arg.ARCTGH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARTANH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACTANH_STR, Function1Arg_1.Function1Arg.ARCOTH_DESC, Function1Arg_1.Function1Arg.ARCOTH_ID, Function1Arg_1.Function1Arg.ACTANH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCTANH_STR, Function1Arg_1.Function1Arg.ARCOTH_DESC, Function1Arg_1.Function1Arg.ARCOTH_ID, Function1Arg_1.Function1Arg.ARCCTANH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACOTH_STR, Function1Arg_1.Function1Arg.ARCOTH_DESC, Function1Arg_1.Function1Arg.ARCOTH_ID, Function1Arg_1.Function1Arg.ACOTH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCOTH_STR, Function1Arg_1.Function1Arg.ARCOTH_DESC, Function1Arg_1.Function1Arg.ARCOTH_ID, Function1Arg_1.Function1Arg.ARCOTH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCOTH_STR, Function1Arg_1.Function1Arg.ARCOTH_DESC, Function1Arg_1.Function1Arg.ARCOTH_ID, Function1Arg_1.Function1Arg.ARCCOTH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACTGH_STR, Function1Arg_1.Function1Arg.ARCOTH_DESC, Function1Arg_1.Function1Arg.ARCOTH_ID, Function1Arg_1.Function1Arg.ACTGH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCTGH_STR, Function1Arg_1.Function1Arg.ARCOTH_DESC, Function1Arg_1.Function1Arg.ARCOTH_ID, Function1Arg_1.Function1Arg.ARCCTGH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCOTH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ASECH_STR, Function1Arg_1.Function1Arg.ARSECH_DESC, Function1Arg_1.Function1Arg.ARSECH_ID, Function1Arg_1.Function1Arg.ASECH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARSECH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARSECH_STR, Function1Arg_1.Function1Arg.ARSECH_DESC, Function1Arg_1.Function1Arg.ARSECH_ID, Function1Arg_1.Function1Arg.ARSECH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARSECH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCSECH_STR, Function1Arg_1.Function1Arg.ARSECH_DESC, Function1Arg_1.Function1Arg.ARSECH_ID, Function1Arg_1.Function1Arg.ARCSECH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARSECH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACSCH_STR, Function1Arg_1.Function1Arg.ARCSCH_DESC, Function1Arg_1.Function1Arg.ARCSCH_ID, Function1Arg_1.Function1Arg.ACSCH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCSCH_STR, Function1Arg_1.Function1Arg.ARCSCH_DESC, Function1Arg_1.Function1Arg.ARCSCH_ID, Function1Arg_1.Function1Arg.ARCSCH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCSCH_STR, Function1Arg_1.Function1Arg.ARCSCH_DESC, Function1Arg_1.Function1Arg.ARCSCH_ID, Function1Arg_1.Function1Arg.ARCCSCH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ACOSECH_STR, Function1Arg_1.Function1Arg.ARCSCH_DESC, Function1Arg_1.Function1Arg.ARCSCH_ID, Function1Arg_1.Function1Arg.ACOSECH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCOSECH_STR, Function1Arg_1.Function1Arg.ARCSCH_DESC, Function1Arg_1.Function1Arg.ARCSCH_ID, Function1Arg_1.Function1Arg.ARCOSECH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCOSECH_STR, Function1Arg_1.Function1Arg.ARCSCH_DESC, Function1Arg_1.Function1Arg.ARCSCH_ID, Function1Arg_1.Function1Arg.ARCCOSECH_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCSCH_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SA_STR, Function1Arg_1.Function1Arg.SA_DESC, Function1Arg_1.Function1Arg.SA_ID, Function1Arg_1.Function1Arg.SA_SYN_$LI$(), Function1Arg_1.Function1Arg.SA_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SA1_STR, Function1Arg_1.Function1Arg.SA_DESC, Function1Arg_1.Function1Arg.SA_ID, Function1Arg_1.Function1Arg.SA1_SYN_$LI$(), Function1Arg_1.Function1Arg.SA_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SINC_STR, Function1Arg_1.Function1Arg.SINC_DESC, Function1Arg_1.Function1Arg.SINC_ID, Function1Arg_1.Function1Arg.SINC_SYN_$LI$(), Function1Arg_1.Function1Arg.SINC_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.BELL_NUMBER_STR, Function1Arg_1.Function1Arg.BELL_NUMBER_DESC, Function1Arg_1.Function1Arg.BELL_NUMBER_ID, Function1Arg_1.Function1Arg.BELL_NUMBER_SYN_$LI$(), Function1Arg_1.Function1Arg.BELL_NUMBER_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.FIBONACCI_NUMBER_STR, Function1Arg_1.Function1Arg.FIBONACCI_NUMBER_DESC, Function1Arg_1.Function1Arg.FIBONACCI_NUMBER_ID, Function1Arg_1.Function1Arg.FIBONACCI_NUMBER_SYN_$LI$(), Function1Arg_1.Function1Arg.FIBONACCI_NUMBER_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LUCAS_NUMBER_STR, Function1Arg_1.Function1Arg.LUCAS_NUMBER_DESC, Function1Arg_1.Function1Arg.LUCAS_NUMBER_ID, Function1Arg_1.Function1Arg.LUCAS_NUMBER_SYN_$LI$(), Function1Arg_1.Function1Arg.LUCAS_NUMBER_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.HARMONIC_NUMBER_STR, Function1Arg_1.Function1Arg.HARMONIC_NUMBER_DESC, Function1Arg_1.Function1Arg.HARMONIC_NUMBER_ID, Function1Arg_1.Function1Arg.HARMONIC_NUMBER_SYN_$LI$(), Function1Arg_1.Function1Arg.HARMONIC_NUMBER_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.IS_PRIME_STR, Function1Arg_1.Function1Arg.IS_PRIME_DESC, Function1Arg_1.Function1Arg.IS_PRIME_ID, Function1Arg_1.Function1Arg.IS_PRIME_SYN_$LI$(), Function1Arg_1.Function1Arg.IS_PRIME_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.PRIME_COUNT_STR, Function1Arg_1.Function1Arg.PRIME_COUNT_DESC, Function1Arg_1.Function1Arg.PRIME_COUNT_ID, Function1Arg_1.Function1Arg.PRIME_COUNT_SYN_$LI$(), Function1Arg_1.Function1Arg.PRIME_COUNT_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.EXP_INT_STR, Function1Arg_1.Function1Arg.EXP_INT_DESC, Function1Arg_1.Function1Arg.EXP_INT_ID, Function1Arg_1.Function1Arg.EXP_INT_SYN_$LI$(), Function1Arg_1.Function1Arg.EXP_INT_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LOG_INT_STR, Function1Arg_1.Function1Arg.LOG_INT_DESC, Function1Arg_1.Function1Arg.LOG_INT_ID, Function1Arg_1.Function1Arg.LOG_INT_SYN_$LI$(), Function1Arg_1.Function1Arg.LOG_INT_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.OFF_LOG_INT_STR, Function1Arg_1.Function1Arg.OFF_LOG_INT_DESC, Function1Arg_1.Function1Arg.OFF_LOG_INT_ID, Function1Arg_1.Function1Arg.OFF_LOG_INT_SYN_$LI$(), Function1Arg_1.Function1Arg.OFF_LOG_INT_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.GAUSS_ERF_STR, Function1Arg_1.Function1Arg.GAUSS_ERF_DESC, Function1Arg_1.Function1Arg.GAUSS_ERF_ID, Function1Arg_1.Function1Arg.GAUSS_ERF_SYN_$LI$(), Function1Arg_1.Function1Arg.GAUSS_ERF_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.GAUSS_ERFC_STR, Function1Arg_1.Function1Arg.GAUSS_ERFC_DESC, Function1Arg_1.Function1Arg.GAUSS_ERFC_ID, Function1Arg_1.Function1Arg.GAUSS_ERFC_SYN_$LI$(), Function1Arg_1.Function1Arg.GAUSS_ERFC_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.GAUSS_ERF_INV_STR, Function1Arg_1.Function1Arg.GAUSS_ERF_INV_DESC, Function1Arg_1.Function1Arg.GAUSS_ERF_INV_ID, Function1Arg_1.Function1Arg.GAUSS_ERF_INV_SYN_$LI$(), Function1Arg_1.Function1Arg.GAUSS_ERF_INV_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.GAUSS_ERFC_INV_STR, Function1Arg_1.Function1Arg.GAUSS_ERFC_INV_DESC, Function1Arg_1.Function1Arg.GAUSS_ERFC_INV_ID, Function1Arg_1.Function1Arg.GAUSS_ERFC_INV_SYN_$LI$(), Function1Arg_1.Function1Arg.GAUSS_ERFC_INV_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ULP_STR, Function1Arg_1.Function1Arg.ULP_DESC, Function1Arg_1.Function1Arg.ULP_ID, Function1Arg_1.Function1Arg.ULP_SYN_$LI$(), Function1Arg_1.Function1Arg.ULP_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ISNAN_STR, Function1Arg_1.Function1Arg.ISNAN_DESC, Function1Arg_1.Function1Arg.ISNAN_ID, Function1Arg_1.Function1Arg.ISNAN_SYN_$LI$(), Function1Arg_1.Function1Arg.ISNAN_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.NDIG10_STR, Function1Arg_1.Function1Arg.NDIG10_DESC, Function1Arg_1.Function1Arg.NDIG10_ID, Function1Arg_1.Function1Arg.NDIG10_SYN_$LI$(), Function1Arg_1.Function1Arg.NDIG10_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.NFACT_STR, Function1Arg_1.Function1Arg.NFACT_DESC, Function1Arg_1.Function1Arg.NFACT_ID, Function1Arg_1.Function1Arg.NFACT_SYN_$LI$(), Function1Arg_1.Function1Arg.NFACT_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCSEC_STR, Function1Arg_1.Function1Arg.ARCSEC_DESC, Function1Arg_1.Function1Arg.ARCSEC_ID, Function1Arg_1.Function1Arg.ARCSEC_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCSEC_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.ARCCSC_STR, Function1Arg_1.Function1Arg.ARCCSC_DESC, Function1Arg_1.Function1Arg.ARCCSC_ID, Function1Arg_1.Function1Arg.ARCCSC_SYN_$LI$(), Function1Arg_1.Function1Arg.ARCCSC_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.GAMMA_STR, Function1Arg_1.Function1Arg.GAMMA_DESC, Function1Arg_1.Function1Arg.GAMMA_ID, Function1Arg_1.Function1Arg.GAMMA_SYN_$LI$(), Function1Arg_1.Function1Arg.GAMMA_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LAMBERT_W0_STR, Function1Arg_1.Function1Arg.LAMBERT_W0_DESC, Function1Arg_1.Function1Arg.LAMBERT_W0_ID, Function1Arg_1.Function1Arg.LAMBERT_W0_SYN_$LI$(), Function1Arg_1.Function1Arg.LAMBERT_W0_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LAMBERT_W1_STR, Function1Arg_1.Function1Arg.LAMBERT_W1_DESC, Function1Arg_1.Function1Arg.LAMBERT_W1_ID, Function1Arg_1.Function1Arg.LAMBERT_W1_SYN_$LI$(), Function1Arg_1.Function1Arg.LAMBERT_W1_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.SGN_GAMMA_STR, Function1Arg_1.Function1Arg.SGN_GAMMA_DESC, Function1Arg_1.Function1Arg.SGN_GAMMA_ID, Function1Arg_1.Function1Arg.SGN_GAMMA_SYN_$LI$(), Function1Arg_1.Function1Arg.SGN_GAMMA_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.LOG_GAMMA_STR, Function1Arg_1.Function1Arg.LOG_GAMMA_DESC, Function1Arg_1.Function1Arg.LOG_GAMMA_ID, Function1Arg_1.Function1Arg.LOG_GAMMA_SYN_$LI$(), Function1Arg_1.Function1Arg.LOG_GAMMA_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function1Arg_1.Function1Arg.DI_GAMMA_STR, Function1Arg_1.Function1Arg.DI_GAMMA_DESC, Function1Arg_1.Function1Arg.DI_GAMMA_ID, Function1Arg_1.Function1Arg.DI_GAMMA_SYN_$LI$(), Function1Arg_1.Function1Arg.DI_GAMMA_SINCE_$LI$(), Function1Arg_1.Function1Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.LOG_STR, Function2Arg_1.Function2Arg.LOG_DESC, Function2Arg_1.Function2Arg.LOG_ID, Function2Arg_1.Function2Arg.LOG_SYN, Function2Arg_1.Function2Arg.LOG_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.MOD_STR, Function2Arg_1.Function2Arg.MOD_DESC, Function2Arg_1.Function2Arg.MOD_ID, Function2Arg_1.Function2Arg.MOD_SYN, Function2Arg_1.Function2Arg.MOD_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.BINOM_COEFF_STR, Function2Arg_1.Function2Arg.BINOM_COEFF_DESC, Function2Arg_1.Function2Arg.BINOM_COEFF_ID, Function2Arg_1.Function2Arg.BINOM_COEFF_SYN, Function2Arg_1.Function2Arg.BINOM_COEFF_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.BINOM_COEFF_NCK_STR, Function2Arg_1.Function2Arg.BINOM_COEFF_DESC, Function2Arg_1.Function2Arg.BINOM_COEFF_ID, Function2Arg_1.Function2Arg.BINOM_COEFF_NCK_SYN_$LI$(), Function2Arg_1.Function2Arg.BINOM_COEFF_NCK_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.BERNOULLI_NUMBER_STR, Function2Arg_1.Function2Arg.BERNOULLI_NUMBER_DESC, Function2Arg_1.Function2Arg.BERNOULLI_NUMBER_ID, Function2Arg_1.Function2Arg.BERNOULLI_NUMBER_SYN, Function2Arg_1.Function2Arg.BERNOULLI_NUMBER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.STIRLING1_NUMBER_STR, Function2Arg_1.Function2Arg.STIRLING1_NUMBER_DESC, Function2Arg_1.Function2Arg.STIRLING1_NUMBER_ID, Function2Arg_1.Function2Arg.STIRLING1_NUMBER_SYN, Function2Arg_1.Function2Arg.STIRLING1_NUMBER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.STIRLING2_NUMBER_STR, Function2Arg_1.Function2Arg.STIRLING2_NUMBER_DESC, Function2Arg_1.Function2Arg.STIRLING2_NUMBER_ID, Function2Arg_1.Function2Arg.STIRLING2_NUMBER_SYN, Function2Arg_1.Function2Arg.STIRLING2_NUMBER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.WORPITZKY_NUMBER_STR, Function2Arg_1.Function2Arg.WORPITZKY_NUMBER_DESC, Function2Arg_1.Function2Arg.WORPITZKY_NUMBER_ID, Function2Arg_1.Function2Arg.WORPITZKY_NUMBER_SYN, Function2Arg_1.Function2Arg.WORPITZKY_NUMBER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.EULER_NUMBER_STR, Function2Arg_1.Function2Arg.EULER_NUMBER_DESC, Function2Arg_1.Function2Arg.EULER_NUMBER_ID, Function2Arg_1.Function2Arg.EULER_NUMBER_SYN, Function2Arg_1.Function2Arg.EULER_NUMBER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.KRONECKER_DELTA_STR, Function2Arg_1.Function2Arg.KRONECKER_DELTA_DESC, Function2Arg_1.Function2Arg.KRONECKER_DELTA_ID, Function2Arg_1.Function2Arg.KRONECKER_DELTA_SYN, Function2Arg_1.Function2Arg.KRONECKER_DELTA_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.EULER_POLYNOMIAL_STR, Function2Arg_1.Function2Arg.EULER_POLYNOMIAL_DESC, Function2Arg_1.Function2Arg.EULER_POLYNOMIAL_ID, Function2Arg_1.Function2Arg.EULER_POLYNOMIAL_SYN, Function2Arg_1.Function2Arg.EULER_POLYNOMIAL_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.HARMONIC_NUMBER_STR, Function2Arg_1.Function2Arg.HARMONIC_NUMBER_DESC, Function2Arg_1.Function2Arg.HARMONIC_NUMBER_ID, Function2Arg_1.Function2Arg.HARMONIC_NUMBER_SYN, Function2Arg_1.Function2Arg.HARMONIC_NUMBER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.RND_UNIFORM_CONT_STR, Function2Arg_1.Function2Arg.RND_UNIFORM_CONT_DESC, Function2Arg_1.Function2Arg.RND_UNIFORM_CONT_ID, Function2Arg_1.Function2Arg.RND_UNIFORM_CONT_SYN, Function2Arg_1.Function2Arg.RND_UNIFORM_CONT_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.RND_UNIFORM_DISCR_STR, Function2Arg_1.Function2Arg.RND_UNIFORM_DISCR_DESC, Function2Arg_1.Function2Arg.RND_UNIFORM_DISCR_ID, Function2Arg_1.Function2Arg.RND_UNIFORM_DISCR_SYN, Function2Arg_1.Function2Arg.RND_UNIFORM_DISCR_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.ROUND_STR, Function2Arg_1.Function2Arg.ROUND_DESC, Function2Arg_1.Function2Arg.ROUND_ID, Function2Arg_1.Function2Arg.ROUND_SYN, Function2Arg_1.Function2Arg.ROUND_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.RND_NORMAL_STR, Function2Arg_1.Function2Arg.RND_NORMAL_DESC, Function2Arg_1.Function2Arg.RND_NORMAL_ID, Function2Arg_1.Function2Arg.RND_NORMAL_SYN, Function2Arg_1.Function2Arg.RND_NORMAL_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.NDIG_STR, Function2Arg_1.Function2Arg.NDIG_DESC, Function2Arg_1.Function2Arg.NDIG_ID, Function2Arg_1.Function2Arg.NDIG_SYN, Function2Arg_1.Function2Arg.NDIG_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.DIGIT10_STR, Function2Arg_1.Function2Arg.DIGIT10_DESC, Function2Arg_1.Function2Arg.DIGIT10_ID, Function2Arg_1.Function2Arg.DIGIT10_SYN, Function2Arg_1.Function2Arg.DIGIT10_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.FACTVAL_STR, Function2Arg_1.Function2Arg.FACTVAL_DESC, Function2Arg_1.Function2Arg.FACTVAL_ID, Function2Arg_1.Function2Arg.FACTVAL_SYN, Function2Arg_1.Function2Arg.FACTVAL_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.FACTEXP_STR, Function2Arg_1.Function2Arg.FACTEXP_DESC, Function2Arg_1.Function2Arg.FACTEXP_ID, Function2Arg_1.Function2Arg.FACTEXP_SYN, Function2Arg_1.Function2Arg.FACTEXP_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.ROOT_STR, Function2Arg_1.Function2Arg.ROOT_DESC, Function2Arg_1.Function2Arg.ROOT_ID, Function2Arg_1.Function2Arg.ROOT_SYN, Function2Arg_1.Function2Arg.ROOT_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.INC_GAMMA_LOWER_STR, Function2Arg_1.Function2Arg.INC_GAMMA_LOWER_DESC, Function2Arg_1.Function2Arg.INC_GAMMA_LOWER_ID, Function2Arg_1.Function2Arg.INC_GAMMA_LOWER_SYN_$LI$(), Function2Arg_1.Function2Arg.INC_GAMMA_LOWER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.INC_GAMMA_UPPER_STR, Function2Arg_1.Function2Arg.INC_GAMMA_UPPER_DESC, Function2Arg_1.Function2Arg.INC_GAMMA_UPPER_ID, Function2Arg_1.Function2Arg.INC_GAMMA_UPPER_SYN_$LI$(), Function2Arg_1.Function2Arg.INC_GAMMA_UPPER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_STR, Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_DESC, Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_ID, Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_SYN_$LI$(), Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_STR, Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_DESC, Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_ID, Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_SYN_$LI$(), Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_P_STR, Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_DESC, Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_ID, Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_P_SYN_$LI$(), Function2Arg_1.Function2Arg.REG_GAMMA_LOWER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_Q_STR, Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_DESC, Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_ID, Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_Q_SYN_$LI$(), Function2Arg_1.Function2Arg.REG_GAMMA_UPPER_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.PERMUTATIONS_STR, Function2Arg_1.Function2Arg.PERMUTATIONS_DESC, Function2Arg_1.Function2Arg.PERMUTATIONS_ID, Function2Arg_1.Function2Arg.PERMUTATIONS_SYN_$LI$(), Function2Arg_1.Function2Arg.PERMUTATIONS_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.BETA_STR, Function2Arg_1.Function2Arg.BETA_DESC, Function2Arg_1.Function2Arg.BETA_ID, Function2Arg_1.Function2Arg.BETA_SYN_$LI$(), Function2Arg_1.Function2Arg.BETA_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function2Arg_1.Function2Arg.LOG_BETA_STR, Function2Arg_1.Function2Arg.LOG_BETA_DESC, Function2Arg_1.Function2Arg.LOG_BETA_ID, Function2Arg_1.Function2Arg.LOG_BETA_SYN_$LI$(), Function2Arg_1.Function2Arg.LOG_BETA_SINCE_$LI$(), Function2Arg_1.Function2Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.IF_STR, Function3Arg_1.Function3Arg.IF_DESC, Function3Arg_1.Function3Arg.IF_CONDITION_ID, Function3Arg_1.Function3Arg.IF_SYN, Function3Arg_1.Function3Arg.IF_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.CHI_STR, Function3Arg_1.Function3Arg.CHI_DESC, Function3Arg_1.Function3Arg.CHI_ID, Function3Arg_1.Function3Arg.CHI_SYN, Function3Arg_1.Function3Arg.CHI_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.CHI_LR_STR, Function3Arg_1.Function3Arg.CHI_LR_DESC, Function3Arg_1.Function3Arg.CHI_LR_ID, Function3Arg_1.Function3Arg.CHI_LR_SYN, Function3Arg_1.Function3Arg.CHI_LR_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.CHI_L_STR, Function3Arg_1.Function3Arg.CHI_L_DESC, Function3Arg_1.Function3Arg.CHI_L_ID, Function3Arg_1.Function3Arg.CHI_L_SYN, Function3Arg_1.Function3Arg.CHI_L_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.CHI_R_STR, Function3Arg_1.Function3Arg.CHI_R_DESC, Function3Arg_1.Function3Arg.CHI_R_ID, Function3Arg_1.Function3Arg.CHI_R_SYN, Function3Arg_1.Function3Arg.CHI_R_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.PDF_UNIFORM_CONT_STR, Function3Arg_1.Function3Arg.PDF_UNIFORM_CONT_DESC, Function3Arg_1.Function3Arg.PDF_UNIFORM_CONT_ID, Function3Arg_1.Function3Arg.PDF_UNIFORM_CONT_SYN, Function3Arg_1.Function3Arg.PDF_UNIFORM_CONT_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.CDF_UNIFORM_CONT_STR, Function3Arg_1.Function3Arg.CDF_UNIFORM_CONT_DESC, Function3Arg_1.Function3Arg.CDF_UNIFORM_CONT_ID, Function3Arg_1.Function3Arg.CDF_UNIFORM_CONT_SYN, Function3Arg_1.Function3Arg.CDF_UNIFORM_CONT_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.QNT_UNIFORM_CONT_STR, Function3Arg_1.Function3Arg.QNT_UNIFORM_CONT_DESC, Function3Arg_1.Function3Arg.QNT_UNIFORM_CONT_ID, Function3Arg_1.Function3Arg.QNT_UNIFORM_CONT_SYN, Function3Arg_1.Function3Arg.QNT_UNIFORM_CONT_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.PDF_NORMAL_STR, Function3Arg_1.Function3Arg.PDF_NORMAL_DESC, Function3Arg_1.Function3Arg.PDF_NORMAL_ID, Function3Arg_1.Function3Arg.PDF_NORMAL_SYN, Function3Arg_1.Function3Arg.PDF_NORMAL_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.CDF_NORMAL_STR, Function3Arg_1.Function3Arg.CDF_NORMAL_DESC, Function3Arg_1.Function3Arg.CDF_NORMAL_ID, Function3Arg_1.Function3Arg.CDF_NORMAL_SYN, Function3Arg_1.Function3Arg.CDF_NORMAL_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.QNT_NORMAL_STR, Function3Arg_1.Function3Arg.QNT_NORMAL_DESC, Function3Arg_1.Function3Arg.QNT_NORMAL_ID, Function3Arg_1.Function3Arg.QNT_NORMAL_SYN, Function3Arg_1.Function3Arg.QNT_NORMAL_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.DIGIT_STR, Function3Arg_1.Function3Arg.DIGIT_DESC, Function3Arg_1.Function3Arg.DIGIT_ID, Function3Arg_1.Function3Arg.DIGIT_SYN, Function3Arg_1.Function3Arg.DIGIT_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.INC_BETA_STR, Function3Arg_1.Function3Arg.INC_BETA_DESC, Function3Arg_1.Function3Arg.INC_BETA_ID, Function3Arg_1.Function3Arg.INC_BETA_SYN_$LI$(), Function3Arg_1.Function3Arg.INC_BETA_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.REG_BETA_STR, Function3Arg_1.Function3Arg.REG_BETA_DESC, Function3Arg_1.Function3Arg.REG_BETA_ID, Function3Arg_1.Function3Arg.REG_BETA_SYN_$LI$(), Function3Arg_1.Function3Arg.REG_BETA_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(Function3Arg_1.Function3Arg.REG_BETA_I_STR, Function3Arg_1.Function3Arg.REG_BETA_DESC, Function3Arg_1.Function3Arg.REG_BETA_ID, Function3Arg_1.Function3Arg.REG_BETA_I_SYN_$LI$(), Function3Arg_1.Function3Arg.REG_BETA_I_SINCE_$LI$(), Function3Arg_1.Function3Arg.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.IFF_STR, FunctionVariadic_1.FunctionVariadic.IFF_DESC, FunctionVariadic_1.FunctionVariadic.IFF_ID, FunctionVariadic_1.FunctionVariadic.IFF_SYN, FunctionVariadic_1.FunctionVariadic.IFF_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.MIN_STR, FunctionVariadic_1.FunctionVariadic.MIN_DESC, FunctionVariadic_1.FunctionVariadic.MIN_ID, FunctionVariadic_1.FunctionVariadic.MIN_SYN, FunctionVariadic_1.FunctionVariadic.MIN_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.MAX_STR, FunctionVariadic_1.FunctionVariadic.MAX_DESC, FunctionVariadic_1.FunctionVariadic.MAX_ID, FunctionVariadic_1.FunctionVariadic.MAX_SYN, FunctionVariadic_1.FunctionVariadic.MAX_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.CONT_FRAC_STR, FunctionVariadic_1.FunctionVariadic.CONT_FRAC_DESC, FunctionVariadic_1.FunctionVariadic.CONT_FRAC_ID, FunctionVariadic_1.FunctionVariadic.CONT_FRAC_SYN, FunctionVariadic_1.FunctionVariadic.CONT_FRAC_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.CONT_POL_STR, FunctionVariadic_1.FunctionVariadic.CONT_POL_DESC, FunctionVariadic_1.FunctionVariadic.CONT_POL_ID, FunctionVariadic_1.FunctionVariadic.CONT_POL_SYN, FunctionVariadic_1.FunctionVariadic.CONT_POL_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.GCD_STR, FunctionVariadic_1.FunctionVariadic.GCD_DESC, FunctionVariadic_1.FunctionVariadic.GCD_ID, FunctionVariadic_1.FunctionVariadic.GCD_SYN, FunctionVariadic_1.FunctionVariadic.GCD_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.LCM_STR, FunctionVariadic_1.FunctionVariadic.LCM_DESC, FunctionVariadic_1.FunctionVariadic.LCM_ID, FunctionVariadic_1.FunctionVariadic.LCM_SYN, FunctionVariadic_1.FunctionVariadic.LCM_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.SUM_STR, FunctionVariadic_1.FunctionVariadic.SUM_DESC, FunctionVariadic_1.FunctionVariadic.SUM_ID, FunctionVariadic_1.FunctionVariadic.SUM_SYN, FunctionVariadic_1.FunctionVariadic.SUM_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.PROD_STR, FunctionVariadic_1.FunctionVariadic.PROD_DESC, FunctionVariadic_1.FunctionVariadic.PROD_ID, FunctionVariadic_1.FunctionVariadic.PROD_SYN, FunctionVariadic_1.FunctionVariadic.PROD_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.AVG_STR, FunctionVariadic_1.FunctionVariadic.AVG_DESC, FunctionVariadic_1.FunctionVariadic.AVG_ID, FunctionVariadic_1.FunctionVariadic.AVG_SYN, FunctionVariadic_1.FunctionVariadic.AVG_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.VAR_STR, FunctionVariadic_1.FunctionVariadic.VAR_DESC, FunctionVariadic_1.FunctionVariadic.VAR_ID, FunctionVariadic_1.FunctionVariadic.VAR_SYN, FunctionVariadic_1.FunctionVariadic.VAR_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.STD_STR, FunctionVariadic_1.FunctionVariadic.STD_DESC, FunctionVariadic_1.FunctionVariadic.STD_ID, FunctionVariadic_1.FunctionVariadic.STD_SYN, FunctionVariadic_1.FunctionVariadic.STD_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.RND_LIST_STR, FunctionVariadic_1.FunctionVariadic.RND_LIST_DESC, FunctionVariadic_1.FunctionVariadic.RND_LIST_ID, FunctionVariadic_1.FunctionVariadic.RND_LIST_SYN, FunctionVariadic_1.FunctionVariadic.RND_LIST_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.COALESCE_STR, FunctionVariadic_1.FunctionVariadic.COALESCE_DESC, FunctionVariadic_1.FunctionVariadic.COALESCE_ID, FunctionVariadic_1.FunctionVariadic.COALESCE_SYN, FunctionVariadic_1.FunctionVariadic.COALESCE_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.OR_STR, FunctionVariadic_1.FunctionVariadic.OR_DESC, FunctionVariadic_1.FunctionVariadic.OR_ID, FunctionVariadic_1.FunctionVariadic.OR_SYN, FunctionVariadic_1.FunctionVariadic.OR_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.AND_STR, FunctionVariadic_1.FunctionVariadic.AND_DESC, FunctionVariadic_1.FunctionVariadic.AND_ID, FunctionVariadic_1.FunctionVariadic.AND_SYN, FunctionVariadic_1.FunctionVariadic.AND_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.XOR_STR, FunctionVariadic_1.FunctionVariadic.XOR_DESC, FunctionVariadic_1.FunctionVariadic.XOR_ID, FunctionVariadic_1.FunctionVariadic.XOR_SYN, FunctionVariadic_1.FunctionVariadic.XOR_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.ARGMIN_STR, FunctionVariadic_1.FunctionVariadic.ARGMIN_DESC, FunctionVariadic_1.FunctionVariadic.ARGMIN_ID, FunctionVariadic_1.FunctionVariadic.ARGMIN_SYN, FunctionVariadic_1.FunctionVariadic.ARGMIN_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.ARGMAX_STR, FunctionVariadic_1.FunctionVariadic.ARGMAX_DESC, FunctionVariadic_1.FunctionVariadic.ARGMAX_ID, FunctionVariadic_1.FunctionVariadic.ARGMAX_SYN, FunctionVariadic_1.FunctionVariadic.ARGMAX_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.MEDIAN_STR, FunctionVariadic_1.FunctionVariadic.MEDIAN_DESC, FunctionVariadic_1.FunctionVariadic.MEDIAN_ID, FunctionVariadic_1.FunctionVariadic.MEDIAN_SYN, FunctionVariadic_1.FunctionVariadic.MEDIAN_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.MODE_STR, FunctionVariadic_1.FunctionVariadic.MODE_DESC, FunctionVariadic_1.FunctionVariadic.MODE_ID, FunctionVariadic_1.FunctionVariadic.MODE_SYN, FunctionVariadic_1.FunctionVariadic.MODE_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.BASE_STR, FunctionVariadic_1.FunctionVariadic.BASE_DESC, FunctionVariadic_1.FunctionVariadic.BASE_ID, FunctionVariadic_1.FunctionVariadic.BASE_SYN, FunctionVariadic_1.FunctionVariadic.BASE_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(FunctionVariadic_1.FunctionVariadic.NDIST_STR, FunctionVariadic_1.FunctionVariadic.NDIST_DESC, FunctionVariadic_1.FunctionVariadic.NDIST_ID, FunctionVariadic_1.FunctionVariadic.NDIST_SYN, FunctionVariadic_1.FunctionVariadic.NDIST_SINCE_$LI$(), FunctionVariadic_1.FunctionVariadic.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.SUM_STR, CalculusOperator_1.CalculusOperator.SUM_DESC, CalculusOperator_1.CalculusOperator.SUM_ID, CalculusOperator_1.CalculusOperator.SUM_SYN, CalculusOperator_1.CalculusOperator.SUM_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.PROD_STR, CalculusOperator_1.CalculusOperator.PROD_DESC, CalculusOperator_1.CalculusOperator.PROD_ID, CalculusOperator_1.CalculusOperator.PROD_SYN, CalculusOperator_1.CalculusOperator.PROD_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.INT_STR, CalculusOperator_1.CalculusOperator.INT_DESC, CalculusOperator_1.CalculusOperator.INT_ID, CalculusOperator_1.CalculusOperator.INT_SYN, CalculusOperator_1.CalculusOperator.INT_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.DER_STR, CalculusOperator_1.CalculusOperator.DER_DESC, CalculusOperator_1.CalculusOperator.DER_ID, CalculusOperator_1.CalculusOperator.DER_SYN, CalculusOperator_1.CalculusOperator.DER_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.DER_LEFT_STR, CalculusOperator_1.CalculusOperator.DER_LEFT_DESC, CalculusOperator_1.CalculusOperator.DER_LEFT_ID, CalculusOperator_1.CalculusOperator.DER_LEFT_SYN, CalculusOperator_1.CalculusOperator.DER_LEFT_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.DER_RIGHT_STR, CalculusOperator_1.CalculusOperator.DER_RIGHT_DESC, CalculusOperator_1.CalculusOperator.DER_RIGHT_ID, CalculusOperator_1.CalculusOperator.DER_RIGHT_SYN, CalculusOperator_1.CalculusOperator.DER_RIGHT_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.DERN_STR, CalculusOperator_1.CalculusOperator.DERN_DESC, CalculusOperator_1.CalculusOperator.DERN_ID, CalculusOperator_1.CalculusOperator.DERN_SYN, CalculusOperator_1.CalculusOperator.DERN_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.FORW_DIFF_STR, CalculusOperator_1.CalculusOperator.FORW_DIFF_DESC, CalculusOperator_1.CalculusOperator.FORW_DIFF_ID, CalculusOperator_1.CalculusOperator.FORW_DIFF_SYN, CalculusOperator_1.CalculusOperator.FORW_DIFF_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.BACKW_DIFF_STR, CalculusOperator_1.CalculusOperator.BACKW_DIFF_DESC, CalculusOperator_1.CalculusOperator.BACKW_DIFF_ID, CalculusOperator_1.CalculusOperator.BACKW_DIFF_SYN, CalculusOperator_1.CalculusOperator.BACKW_DIFF_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.AVG_STR, CalculusOperator_1.CalculusOperator.AVG_DESC, CalculusOperator_1.CalculusOperator.AVG_ID, CalculusOperator_1.CalculusOperator.AVG_SYN, CalculusOperator_1.CalculusOperator.AVG_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.VAR_STR, CalculusOperator_1.CalculusOperator.VAR_DESC, CalculusOperator_1.CalculusOperator.VAR_ID, CalculusOperator_1.CalculusOperator.VAR_SYN, CalculusOperator_1.CalculusOperator.VAR_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.STD_STR, CalculusOperator_1.CalculusOperator.STD_DESC, CalculusOperator_1.CalculusOperator.STD_ID, CalculusOperator_1.CalculusOperator.STD_SYN, CalculusOperator_1.CalculusOperator.STD_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.MIN_STR, CalculusOperator_1.CalculusOperator.MIN_DESC, CalculusOperator_1.CalculusOperator.MIN_ID, CalculusOperator_1.CalculusOperator.MIN_SYN, CalculusOperator_1.CalculusOperator.MIN_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.MAX_STR, CalculusOperator_1.CalculusOperator.MAX_DESC, CalculusOperator_1.CalculusOperator.MAX_ID, CalculusOperator_1.CalculusOperator.MAX_SYN, CalculusOperator_1.CalculusOperator.MAX_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(CalculusOperator_1.CalculusOperator.SOLVE_STR, CalculusOperator_1.CalculusOperator.SOLVE_DESC, CalculusOperator_1.CalculusOperator.SOLVE_ID, CalculusOperator_1.CalculusOperator.SOLVE_SYN, CalculusOperator_1.CalculusOperator.SOLVE_SINCE_$LI$(), CalculusOperator_1.CalculusOperator.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PI_STR, ConstantValue_1.ConstantValue.PI_DESC, ConstantValue_1.ConstantValue.PI_ID, ConstantValue_1.ConstantValue.PI_SYN_$LI$(), ConstantValue_1.ConstantValue.PI_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EULER_STR, ConstantValue_1.ConstantValue.EULER_DESC, ConstantValue_1.ConstantValue.EULER_ID, ConstantValue_1.ConstantValue.EULER_SYN_$LI$(), ConstantValue_1.ConstantValue.EULER_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EULER_MASCHERONI_STR, ConstantValue_1.ConstantValue.EULER_MASCHERONI_DESC, ConstantValue_1.ConstantValue.EULER_MASCHERONI_ID, ConstantValue_1.ConstantValue.EULER_MASCHERONI_SYN_$LI$(), ConstantValue_1.ConstantValue.EULER_MASCHERONI_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.GOLDEN_RATIO_STR, ConstantValue_1.ConstantValue.GOLDEN_RATIO_DESC, ConstantValue_1.ConstantValue.GOLDEN_RATIO_ID, ConstantValue_1.ConstantValue.GOLDEN_RATIO_SYN_$LI$(), ConstantValue_1.ConstantValue.GOLDEN_RATIO_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PLASTIC_STR, ConstantValue_1.ConstantValue.PLASTIC_DESC, ConstantValue_1.ConstantValue.PLASTIC_ID, ConstantValue_1.ConstantValue.PLASTIC_SYN_$LI$(), ConstantValue_1.ConstantValue.PLASTIC_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EMBREE_TREFETHEN_STR, ConstantValue_1.ConstantValue.EMBREE_TREFETHEN_DESC, ConstantValue_1.ConstantValue.EMBREE_TREFETHEN_ID, ConstantValue_1.ConstantValue.EMBREE_TREFETHEN_SYN_$LI$(), ConstantValue_1.ConstantValue.EMBREE_TREFETHEN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.FEIGENBAUM_DELTA_STR, ConstantValue_1.ConstantValue.FEIGENBAUM_DELTA_DESC, ConstantValue_1.ConstantValue.FEIGENBAUM_DELTA_ID, ConstantValue_1.ConstantValue.FEIGENBAUM_DELTA_SYN_$LI$(), ConstantValue_1.ConstantValue.FEIGENBAUM_DELTA_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.FEIGENBAUM_ALFA_STR, ConstantValue_1.ConstantValue.FEIGENBAUM_ALFA_DESC, ConstantValue_1.ConstantValue.FEIGENBAUM_ALFA_ID, ConstantValue_1.ConstantValue.FEIGENBAUM_ALFA_SYN_$LI$(), ConstantValue_1.ConstantValue.FEIGENBAUM_ALFA_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.TWIN_PRIME_STR, ConstantValue_1.ConstantValue.TWIN_PRIME_DESC, ConstantValue_1.ConstantValue.TWIN_PRIME_ID, ConstantValue_1.ConstantValue.TWIN_PRIME_SYN_$LI$(), ConstantValue_1.ConstantValue.TWIN_PRIME_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MEISSEL_MERTEENS_STR, ConstantValue_1.ConstantValue.MEISSEL_MERTEENS_DESC, ConstantValue_1.ConstantValue.MEISSEL_MERTEENS_ID, ConstantValue_1.ConstantValue.MEISSEL_MERTEENS_SYN_$LI$(), ConstantValue_1.ConstantValue.MEISSEL_MERTEENS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.BRAUN_TWIN_PRIME_STR, ConstantValue_1.ConstantValue.BRAUN_TWIN_PRIME_DESC, ConstantValue_1.ConstantValue.BRAUN_TWIN_PRIME_ID, ConstantValue_1.ConstantValue.BRAUN_TWIN_PRIME_SYN_$LI$(), ConstantValue_1.ConstantValue.BRAUN_TWIN_PRIME_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.BRAUN_PRIME_QUADR_STR, ConstantValue_1.ConstantValue.BRAUN_PRIME_QUADR_DESC, ConstantValue_1.ConstantValue.BRAUN_PRIME_QUADR_ID, ConstantValue_1.ConstantValue.BRAUN_PRIME_QUADR_SYN_$LI$(), ConstantValue_1.ConstantValue.BRAUN_PRIME_QUADR_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.BRUIJN_NEWMAN_STR, ConstantValue_1.ConstantValue.BRUIJN_NEWMAN_DESC, ConstantValue_1.ConstantValue.BRUIJN_NEWMAN_ID, ConstantValue_1.ConstantValue.BRUIJN_NEWMAN_SYN_$LI$(), ConstantValue_1.ConstantValue.BRUIJN_NEWMAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.CATALAN_STR, ConstantValue_1.ConstantValue.CATALAN_DESC, ConstantValue_1.ConstantValue.CATALAN_ID, ConstantValue_1.ConstantValue.CATALAN_SYN_$LI$(), ConstantValue_1.ConstantValue.CATALAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LANDAU_RAMANUJAN_STR, ConstantValue_1.ConstantValue.LANDAU_RAMANUJAN_DESC, ConstantValue_1.ConstantValue.LANDAU_RAMANUJAN_ID, ConstantValue_1.ConstantValue.LANDAU_RAMANUJAN_SYN_$LI$(), ConstantValue_1.ConstantValue.LANDAU_RAMANUJAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.VISWANATH_STR, ConstantValue_1.ConstantValue.VISWANATH_DESC, ConstantValue_1.ConstantValue.VISWANATH_ID, ConstantValue_1.ConstantValue.VISWANATH_SYN_$LI$(), ConstantValue_1.ConstantValue.VISWANATH_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LEGENDRE_STR, ConstantValue_1.ConstantValue.LEGENDRE_DESC, ConstantValue_1.ConstantValue.LEGENDRE_ID, ConstantValue_1.ConstantValue.LEGENDRE_SYN_$LI$(), ConstantValue_1.ConstantValue.LEGENDRE_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.RAMANUJAN_SOLDNER_STR, ConstantValue_1.ConstantValue.RAMANUJAN_SOLDNER_DESC, ConstantValue_1.ConstantValue.RAMANUJAN_SOLDNER_ID, ConstantValue_1.ConstantValue.RAMANUJAN_SOLDNER_SYN_$LI$(), ConstantValue_1.ConstantValue.RAMANUJAN_SOLDNER_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.ERDOS_BORWEIN_STR, ConstantValue_1.ConstantValue.ERDOS_BORWEIN_DESC, ConstantValue_1.ConstantValue.ERDOS_BORWEIN_ID, ConstantValue_1.ConstantValue.ERDOS_BORWEIN_SYN_$LI$(), ConstantValue_1.ConstantValue.ERDOS_BORWEIN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.BERNSTEIN_STR, ConstantValue_1.ConstantValue.BERNSTEIN_DESC, ConstantValue_1.ConstantValue.BERNSTEIN_ID, ConstantValue_1.ConstantValue.BERNSTEIN_SYN_$LI$(), ConstantValue_1.ConstantValue.BERNSTEIN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.GAUSS_KUZMIN_WIRSING_STR, ConstantValue_1.ConstantValue.GAUSS_KUZMIN_WIRSING_DESC, ConstantValue_1.ConstantValue.GAUSS_KUZMIN_WIRSING_ID, ConstantValue_1.ConstantValue.GAUSS_KUZMIN_WIRSING_SYN_$LI$(), ConstantValue_1.ConstantValue.GAUSS_KUZMIN_WIRSING_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.HAFNER_SARNAK_MCCURLEY_STR, ConstantValue_1.ConstantValue.HAFNER_SARNAK_MCCURLEY_DESC, ConstantValue_1.ConstantValue.HAFNER_SARNAK_MCCURLEY_ID, ConstantValue_1.ConstantValue.HAFNER_SARNAK_MCCURLEY_SYN_$LI$(), ConstantValue_1.ConstantValue.HAFNER_SARNAK_MCCURLEY_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.GOLOMB_DICKMAN_STR, ConstantValue_1.ConstantValue.GOLOMB_DICKMAN_DESC, ConstantValue_1.ConstantValue.GOLOMB_DICKMAN_ID, ConstantValue_1.ConstantValue.GOLOMB_DICKMAN_SYN_$LI$(), ConstantValue_1.ConstantValue.GOLOMB_DICKMAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.CAHEN_STR, ConstantValue_1.ConstantValue.CAHEN_DESC, ConstantValue_1.ConstantValue.CAHEN_ID, ConstantValue_1.ConstantValue.CAHEN_SYN_$LI$(), ConstantValue_1.ConstantValue.CAHEN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LAPLACE_LIMIT_STR, ConstantValue_1.ConstantValue.LAPLACE_LIMIT_DESC, ConstantValue_1.ConstantValue.LAPLACE_LIMIT_ID, ConstantValue_1.ConstantValue.LAPLACE_LIMIT_SYN_$LI$(), ConstantValue_1.ConstantValue.LAPLACE_LIMIT_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.ALLADI_GRINSTEAD_STR, ConstantValue_1.ConstantValue.ALLADI_GRINSTEAD_DESC, ConstantValue_1.ConstantValue.ALLADI_GRINSTEAD_ID, ConstantValue_1.ConstantValue.ALLADI_GRINSTEAD_SYN_$LI$(), ConstantValue_1.ConstantValue.ALLADI_GRINSTEAD_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LENGYEL_STR, ConstantValue_1.ConstantValue.LENGYEL_DESC, ConstantValue_1.ConstantValue.LENGYEL_ID, ConstantValue_1.ConstantValue.LENGYEL_SYN_$LI$(), ConstantValue_1.ConstantValue.LENGYEL_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LEVY_STR, ConstantValue_1.ConstantValue.LEVY_DESC, ConstantValue_1.ConstantValue.LEVY_ID, ConstantValue_1.ConstantValue.LEVY_SYN_$LI$(), ConstantValue_1.ConstantValue.LEVY_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.APERY_STR, ConstantValue_1.ConstantValue.APERY_DESC, ConstantValue_1.ConstantValue.APERY_ID, ConstantValue_1.ConstantValue.APERY_SYN_$LI$(), ConstantValue_1.ConstantValue.APERY_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MILLS_STR, ConstantValue_1.ConstantValue.MILLS_DESC, ConstantValue_1.ConstantValue.MILLS_ID, ConstantValue_1.ConstantValue.MILLS_SYN_$LI$(), ConstantValue_1.ConstantValue.MILLS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.BACKHOUSE_STR, ConstantValue_1.ConstantValue.BACKHOUSE_DESC, ConstantValue_1.ConstantValue.BACKHOUSE_ID, ConstantValue_1.ConstantValue.BACKHOUSE_SYN_$LI$(), ConstantValue_1.ConstantValue.BACKHOUSE_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PORTER_STR, ConstantValue_1.ConstantValue.PORTER_DESC, ConstantValue_1.ConstantValue.PORTER_ID, ConstantValue_1.ConstantValue.PORTER_SYN_$LI$(), ConstantValue_1.ConstantValue.PORTER_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LIEB_QUARE_ICE_STR, ConstantValue_1.ConstantValue.LIEB_QUARE_ICE_DESC, ConstantValue_1.ConstantValue.LIEB_QUARE_ICE_ID, ConstantValue_1.ConstantValue.LIEB_QUARE_ICE_SYN_$LI$(), ConstantValue_1.ConstantValue.LIEB_QUARE_ICE_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.NIVEN_STR, ConstantValue_1.ConstantValue.NIVEN_DESC, ConstantValue_1.ConstantValue.NIVEN_ID, ConstantValue_1.ConstantValue.NIVEN_SYN_$LI$(), ConstantValue_1.ConstantValue.NIVEN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.SIERPINSKI_STR, ConstantValue_1.ConstantValue.SIERPINSKI_DESC, ConstantValue_1.ConstantValue.SIERPINSKI_ID, ConstantValue_1.ConstantValue.SIERPINSKI_SYN_$LI$(), ConstantValue_1.ConstantValue.SIERPINSKI_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.KHINCHIN_STR, ConstantValue_1.ConstantValue.KHINCHIN_DESC, ConstantValue_1.ConstantValue.KHINCHIN_ID, ConstantValue_1.ConstantValue.KHINCHIN_SYN_$LI$(), ConstantValue_1.ConstantValue.KHINCHIN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.FRANSEN_ROBINSON_STR, ConstantValue_1.ConstantValue.FRANSEN_ROBINSON_DESC, ConstantValue_1.ConstantValue.FRANSEN_ROBINSON_ID, ConstantValue_1.ConstantValue.FRANSEN_ROBINSON_SYN_$LI$(), ConstantValue_1.ConstantValue.FRANSEN_ROBINSON_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LANDAU_STR, ConstantValue_1.ConstantValue.LANDAU_DESC, ConstantValue_1.ConstantValue.LANDAU_ID, ConstantValue_1.ConstantValue.LANDAU_SYN_$LI$(), ConstantValue_1.ConstantValue.LANDAU_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PARABOLIC_STR, ConstantValue_1.ConstantValue.PARABOLIC_DESC, ConstantValue_1.ConstantValue.PARABOLIC_ID, ConstantValue_1.ConstantValue.PARABOLIC_SYN_$LI$(), ConstantValue_1.ConstantValue.PARABOLIC_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.OMEGA_STR, ConstantValue_1.ConstantValue.OMEGA_DESC, ConstantValue_1.ConstantValue.OMEGA_ID, ConstantValue_1.ConstantValue.OMEGA_SYN_$LI$(), ConstantValue_1.ConstantValue.OMEGA_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MRB_STR, ConstantValue_1.ConstantValue.MRB_DESC, ConstantValue_1.ConstantValue.MRB_ID, ConstantValue_1.ConstantValue.MRB_SYN_$LI$(), ConstantValue_1.ConstantValue.MRB_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LI2_STR, ConstantValue_1.ConstantValue.LI2_DESC, ConstantValue_1.ConstantValue.LI2_ID, ConstantValue_1.ConstantValue.LI2_SYN_$LI$(), ConstantValue_1.ConstantValue.LI2_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.GOMPERTZ_STR, ConstantValue_1.ConstantValue.GOMPERTZ_DESC, ConstantValue_1.ConstantValue.GOMPERTZ_ID, ConstantValue_1.ConstantValue.GOMPERTZ_SYN_$LI$(), ConstantValue_1.ConstantValue.GOMPERTZ_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LIGHT_SPEED_STR, ConstantValue_1.ConstantValue.LIGHT_SPEED_DESC, ConstantValue_1.ConstantValue.LIGHT_SPEED_ID, ConstantValue_1.ConstantValue.LIGHT_SPEED_SYN_$LI$(), ConstantValue_1.ConstantValue.LIGHT_SPEED_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.GRAVITATIONAL_CONSTANT_STR, ConstantValue_1.ConstantValue.GRAVITATIONAL_CONSTANT_DESC, ConstantValue_1.ConstantValue.GRAVITATIONAL_CONSTANT_ID, ConstantValue_1.ConstantValue.GRAVITATIONAL_CONSTANT_SYN_$LI$(), ConstantValue_1.ConstantValue.GRAVITATIONAL_CONSTANT_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.GRAVIT_ACC_EARTH_STR, ConstantValue_1.ConstantValue.GRAVIT_ACC_EARTH_DESC, ConstantValue_1.ConstantValue.GRAVIT_ACC_EARTH_ID, ConstantValue_1.ConstantValue.GRAVIT_ACC_EARTH_SYN_$LI$(), ConstantValue_1.ConstantValue.GRAVIT_ACC_EARTH_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PLANCK_CONSTANT_STR, ConstantValue_1.ConstantValue.PLANCK_CONSTANT_DESC, ConstantValue_1.ConstantValue.PLANCK_CONSTANT_ID, ConstantValue_1.ConstantValue.PLANCK_CONSTANT_SYN_$LI$(), ConstantValue_1.ConstantValue.PLANCK_CONSTANT_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PLANCK_CONSTANT_REDUCED_STR, ConstantValue_1.ConstantValue.PLANCK_CONSTANT_REDUCED_DESC, ConstantValue_1.ConstantValue.PLANCK_CONSTANT_REDUCED_ID, ConstantValue_1.ConstantValue.PLANCK_CONSTANT_REDUCED_SYN_$LI$(), ConstantValue_1.ConstantValue.PLANCK_CONSTANT_REDUCED_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PLANCK_LENGTH_STR, ConstantValue_1.ConstantValue.PLANCK_LENGTH_DESC, ConstantValue_1.ConstantValue.PLANCK_LENGTH_ID, ConstantValue_1.ConstantValue.PLANCK_LENGTH_SYN_$LI$(), ConstantValue_1.ConstantValue.PLANCK_LENGTH_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PLANCK_MASS_STR, ConstantValue_1.ConstantValue.PLANCK_MASS_DESC, ConstantValue_1.ConstantValue.PLANCK_MASS_ID, ConstantValue_1.ConstantValue.PLANCK_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.PLANCK_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PLANCK_TIME_STR, ConstantValue_1.ConstantValue.PLANCK_TIME_DESC, ConstantValue_1.ConstantValue.PLANCK_TIME_ID, ConstantValue_1.ConstantValue.PLANCK_TIME_SYN_$LI$(), ConstantValue_1.ConstantValue.PLANCK_TIME_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.LIGHT_YEAR_STR, ConstantValue_1.ConstantValue.LIGHT_YEAR_DESC, ConstantValue_1.ConstantValue.LIGHT_YEAR_ID, ConstantValue_1.ConstantValue.LIGHT_YEAR_SYN_$LI$(), ConstantValue_1.ConstantValue.LIGHT_YEAR_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.ASTRONOMICAL_UNIT_STR, ConstantValue_1.ConstantValue.ASTRONOMICAL_UNIT_DESC, ConstantValue_1.ConstantValue.ASTRONOMICAL_UNIT_ID, ConstantValue_1.ConstantValue.ASTRONOMICAL_UNIT_SYN_$LI$(), ConstantValue_1.ConstantValue.ASTRONOMICAL_UNIT_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.PARSEC_STR, ConstantValue_1.ConstantValue.PARSEC_DESC, ConstantValue_1.ConstantValue.PARSEC_ID, ConstantValue_1.ConstantValue.PARSEC_SYN_$LI$(), ConstantValue_1.ConstantValue.PARSEC_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.KILOPARSEC_STR, ConstantValue_1.ConstantValue.KILOPARSEC_DESC, ConstantValue_1.ConstantValue.KILOPARSEC_ID, ConstantValue_1.ConstantValue.KILOPARSEC_SYN_$LI$(), ConstantValue_1.ConstantValue.KILOPARSEC_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EARTH_RADIUS_EQUATORIAL_STR, ConstantValue_1.ConstantValue.EARTH_RADIUS_EQUATORIAL_DESC, ConstantValue_1.ConstantValue.EARTH_RADIUS_EQUATORIAL_ID, ConstantValue_1.ConstantValue.EARTH_RADIUS_EQUATORIAL_SYN_$LI$(), ConstantValue_1.ConstantValue.EARTH_RADIUS_EQUATORIAL_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EARTH_RADIUS_POLAR_STR, ConstantValue_1.ConstantValue.EARTH_RADIUS_POLAR_DESC, ConstantValue_1.ConstantValue.EARTH_RADIUS_POLAR_ID, ConstantValue_1.ConstantValue.EARTH_RADIUS_POLAR_SYN_$LI$(), ConstantValue_1.ConstantValue.EARTH_RADIUS_POLAR_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EARTH_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.EARTH_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.EARTH_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.EARTH_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.EARTH_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EARTH_MASS_STR, ConstantValue_1.ConstantValue.EARTH_MASS_DESC, ConstantValue_1.ConstantValue.EARTH_MASS_ID, ConstantValue_1.ConstantValue.EARTH_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.EARTH_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.EARTH_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.EARTH_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.EARTH_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.EARTH_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.EARTH_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MOON_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.MOON_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.MOON_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.MOON_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.MOON_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MOON_MASS_STR, ConstantValue_1.ConstantValue.MOON_MASS_DESC, ConstantValue_1.ConstantValue.MOON_MASS_ID, ConstantValue_1.ConstantValue.MOON_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.MOON_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MONN_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.MONN_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.MONN_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.MONN_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.MONN_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.SOLAR_RADIUS_STR, ConstantValue_1.ConstantValue.SOLAR_RADIUS_DESC, ConstantValue_1.ConstantValue.SOLAR_RADIUS_ID, ConstantValue_1.ConstantValue.SOLAR_RADIUS_SYN_$LI$(), ConstantValue_1.ConstantValue.SOLAR_RADIUS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.SOLAR_MASS_STR, ConstantValue_1.ConstantValue.SOLAR_MASS_DESC, ConstantValue_1.ConstantValue.SOLAR_MASS_ID, ConstantValue_1.ConstantValue.SOLAR_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.SOLAR_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MERCURY_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.MERCURY_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.MERCURY_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.MERCURY_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.MERCURY_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MERCURY_MASS_STR, ConstantValue_1.ConstantValue.MERCURY_MASS_DESC, ConstantValue_1.ConstantValue.MERCURY_MASS_ID, ConstantValue_1.ConstantValue.MERCURY_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.MERCURY_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MERCURY_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.MERCURY_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.MERCURY_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.MERCURY_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.VENUS_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.VENUS_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.VENUS_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.VENUS_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.VENUS_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.VENUS_MASS_STR, ConstantValue_1.ConstantValue.VENUS_MASS_DESC, ConstantValue_1.ConstantValue.VENUS_MASS_ID, ConstantValue_1.ConstantValue.VENUS_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.VENUS_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.VENUS_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.VENUS_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.VENUS_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.VENUS_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.VENUS_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MARS_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.MARS_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.MARS_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.MARS_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.MARS_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MARS_MASS_STR, ConstantValue_1.ConstantValue.MARS_MASS_DESC, ConstantValue_1.ConstantValue.MARS_MASS_ID, ConstantValue_1.ConstantValue.MARS_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.MARS_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.MARS_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.MARS_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.MARS_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.MARS_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.MARS_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.JUPITER_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.JUPITER_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.JUPITER_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.JUPITER_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.JUPITER_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.JUPITER_MASS_STR, ConstantValue_1.ConstantValue.JUPITER_MASS_DESC, ConstantValue_1.ConstantValue.JUPITER_MASS_ID, ConstantValue_1.ConstantValue.JUPITER_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.JUPITER_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.JUPITER_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.JUPITER_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.JUPITER_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.JUPITER_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.SATURN_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.SATURN_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.SATURN_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.SATURN_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.SATURN_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.SATURN_MASS_STR, ConstantValue_1.ConstantValue.SATURN_MASS_DESC, ConstantValue_1.ConstantValue.SATURN_MASS_ID, ConstantValue_1.ConstantValue.SATURN_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.SATURN_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.SATURN_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.SATURN_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.SATURN_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.SATURN_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.SATURN_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.URANUS_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.URANUS_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.URANUS_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.URANUS_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.URANUS_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.URANUS_MASS_STR, ConstantValue_1.ConstantValue.URANUS_MASS_DESC, ConstantValue_1.ConstantValue.URANUS_MASS_ID, ConstantValue_1.ConstantValue.URANUS_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.URANUS_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.URANUS_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.URANUS_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.URANUS_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.URANUS_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.URANUS_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.NEPTUNE_RADIUS_MEAN_STR, ConstantValue_1.ConstantValue.NEPTUNE_RADIUS_MEAN_DESC, ConstantValue_1.ConstantValue.NEPTUNE_RADIUS_MEAN_ID, ConstantValue_1.ConstantValue.NEPTUNE_RADIUS_MEAN_SYN_$LI$(), ConstantValue_1.ConstantValue.NEPTUNE_RADIUS_MEAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.NEPTUNE_MASS_STR, ConstantValue_1.ConstantValue.NEPTUNE_MASS_DESC, ConstantValue_1.ConstantValue.NEPTUNE_MASS_ID, ConstantValue_1.ConstantValue.NEPTUNE_MASS_SYN_$LI$(), ConstantValue_1.ConstantValue.NEPTUNE_MASS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_STR, ConstantValue_1.ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_DESC, ConstantValue_1.ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_ID, ConstantValue_1.ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SYN_$LI$(), ConstantValue_1.ConstantValue.NEPTUNE_SEMI_MAJOR_AXIS_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.TRUE_STR, ConstantValue_1.ConstantValue.TRUE_DESC, ConstantValue_1.ConstantValue.TRUE_ID, ConstantValue_1.ConstantValue.TRUE_SYN_$LI$(), ConstantValue_1.ConstantValue.TRUE_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.FALSE_STR, ConstantValue_1.ConstantValue.FALSE_DESC, ConstantValue_1.ConstantValue.FALSE_ID, ConstantValue_1.ConstantValue.FALSE_SYN_$LI$(), ConstantValue_1.ConstantValue.FALSE_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(ConstantValue_1.ConstantValue.NAN_STR, ConstantValue_1.ConstantValue.NAN_DESC, ConstantValue_1.ConstantValue.NAN_ID, ConstantValue_1.ConstantValue.NAN_SYN_$LI$(), ConstantValue_1.ConstantValue.NAN_SINCE_$LI$(), ConstantValue_1.ConstantValue.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.UNIFORM_STR, RandomVariable_1.RandomVariable.UNIFORM_DESC, RandomVariable_1.RandomVariable.UNIFORM_ID, RandomVariable_1.RandomVariable.UNIFORM_SYN_$LI$(), RandomVariable_1.RandomVariable.UNIFORM_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT_STR, RandomVariable_1.RandomVariable.INT_DESC, RandomVariable_1.RandomVariable.INT_ID, RandomVariable_1.RandomVariable.INT_SYN_$LI$(), RandomVariable_1.RandomVariable.INT_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT1_STR, RandomVariable_1.RandomVariable.INT1_DESC, RandomVariable_1.RandomVariable.INT1_ID, RandomVariable_1.RandomVariable.INT1_SYN_$LI$(), RandomVariable_1.RandomVariable.INT1_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT2_STR, RandomVariable_1.RandomVariable.INT2_DESC, RandomVariable_1.RandomVariable.INT2_ID, RandomVariable_1.RandomVariable.INT2_SYN_$LI$(), RandomVariable_1.RandomVariable.INT2_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT3_STR, RandomVariable_1.RandomVariable.INT3_DESC, RandomVariable_1.RandomVariable.INT3_ID, RandomVariable_1.RandomVariable.INT3_SYN_$LI$(), RandomVariable_1.RandomVariable.INT3_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT4_STR, RandomVariable_1.RandomVariable.INT4_DESC, RandomVariable_1.RandomVariable.INT4_ID, RandomVariable_1.RandomVariable.INT4_SYN_$LI$(), RandomVariable_1.RandomVariable.INT4_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT5_STR, RandomVariable_1.RandomVariable.INT5_DESC, RandomVariable_1.RandomVariable.INT5_ID, RandomVariable_1.RandomVariable.INT5_SYN_$LI$(), RandomVariable_1.RandomVariable.INT5_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT6_STR, RandomVariable_1.RandomVariable.INT6_DESC, RandomVariable_1.RandomVariable.INT6_ID, RandomVariable_1.RandomVariable.INT6_SYN_$LI$(), RandomVariable_1.RandomVariable.INT6_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT7_STR, RandomVariable_1.RandomVariable.INT7_DESC, RandomVariable_1.RandomVariable.INT7_ID, RandomVariable_1.RandomVariable.INT7_SYN_$LI$(), RandomVariable_1.RandomVariable.INT7_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT8_STR, RandomVariable_1.RandomVariable.INT8_DESC, RandomVariable_1.RandomVariable.INT8_ID, RandomVariable_1.RandomVariable.INT8_SYN_$LI$(), RandomVariable_1.RandomVariable.INT8_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.INT9_STR, RandomVariable_1.RandomVariable.INT9_DESC, RandomVariable_1.RandomVariable.INT9_ID, RandomVariable_1.RandomVariable.INT9_SYN_$LI$(), RandomVariable_1.RandomVariable.INT9_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_STR, RandomVariable_1.RandomVariable.NAT0_DESC, RandomVariable_1.RandomVariable.NAT0_ID, RandomVariable_1.RandomVariable.NAT0_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_1_STR, RandomVariable_1.RandomVariable.NAT0_1_DESC, RandomVariable_1.RandomVariable.NAT0_1_ID, RandomVariable_1.RandomVariable.NAT0_1_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_1_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_2_STR, RandomVariable_1.RandomVariable.NAT0_2_DESC, RandomVariable_1.RandomVariable.NAT0_2_ID, RandomVariable_1.RandomVariable.NAT0_2_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_2_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_3_STR, RandomVariable_1.RandomVariable.NAT0_3_DESC, RandomVariable_1.RandomVariable.NAT0_3_ID, RandomVariable_1.RandomVariable.NAT0_3_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_3_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_4_STR, RandomVariable_1.RandomVariable.NAT0_4_DESC, RandomVariable_1.RandomVariable.NAT0_4_ID, RandomVariable_1.RandomVariable.NAT0_4_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_4_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_5_STR, RandomVariable_1.RandomVariable.NAT0_5_DESC, RandomVariable_1.RandomVariable.NAT0_5_ID, RandomVariable_1.RandomVariable.NAT0_5_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_5_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_6_STR, RandomVariable_1.RandomVariable.NAT0_6_DESC, RandomVariable_1.RandomVariable.NAT0_6_ID, RandomVariable_1.RandomVariable.NAT0_6_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_6_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_7_STR, RandomVariable_1.RandomVariable.NAT0_7_DESC, RandomVariable_1.RandomVariable.NAT0_7_ID, RandomVariable_1.RandomVariable.NAT0_7_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_7_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_8_STR, RandomVariable_1.RandomVariable.NAT0_8_DESC, RandomVariable_1.RandomVariable.NAT0_8_ID, RandomVariable_1.RandomVariable.NAT0_8_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_8_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT0_9_STR, RandomVariable_1.RandomVariable.NAT0_9_DESC, RandomVariable_1.RandomVariable.NAT0_9_ID, RandomVariable_1.RandomVariable.NAT0_9_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT0_9_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_STR, RandomVariable_1.RandomVariable.NAT1_DESC, RandomVariable_1.RandomVariable.NAT1_ID, RandomVariable_1.RandomVariable.NAT1_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_1_STR, RandomVariable_1.RandomVariable.NAT1_1_DESC, RandomVariable_1.RandomVariable.NAT1_1_ID, RandomVariable_1.RandomVariable.NAT1_1_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_1_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_2_STR, RandomVariable_1.RandomVariable.NAT1_2_DESC, RandomVariable_1.RandomVariable.NAT1_2_ID, RandomVariable_1.RandomVariable.NAT1_2_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_2_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_3_STR, RandomVariable_1.RandomVariable.NAT1_3_DESC, RandomVariable_1.RandomVariable.NAT1_3_ID, RandomVariable_1.RandomVariable.NAT1_3_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_3_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_4_STR, RandomVariable_1.RandomVariable.NAT1_4_DESC, RandomVariable_1.RandomVariable.NAT1_4_ID, RandomVariable_1.RandomVariable.NAT1_4_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_4_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_5_STR, RandomVariable_1.RandomVariable.NAT1_5_DESC, RandomVariable_1.RandomVariable.NAT1_5_ID, RandomVariable_1.RandomVariable.NAT1_5_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_5_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_6_STR, RandomVariable_1.RandomVariable.NAT1_6_DESC, RandomVariable_1.RandomVariable.NAT1_6_ID, RandomVariable_1.RandomVariable.NAT1_6_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_6_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_7_STR, RandomVariable_1.RandomVariable.NAT1_7_DESC, RandomVariable_1.RandomVariable.NAT1_7_ID, RandomVariable_1.RandomVariable.NAT1_7_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_7_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_8_STR, RandomVariable_1.RandomVariable.NAT1_8_DESC, RandomVariable_1.RandomVariable.NAT1_8_ID, RandomVariable_1.RandomVariable.NAT1_8_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_8_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NAT1_9_STR, RandomVariable_1.RandomVariable.NAT1_9_DESC, RandomVariable_1.RandomVariable.NAT1_9_ID, RandomVariable_1.RandomVariable.NAT1_9_SYN_$LI$(), RandomVariable_1.RandomVariable.NAT1_9_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(RandomVariable_1.RandomVariable.NOR_STR, RandomVariable_1.RandomVariable.NOR_DESC, RandomVariable_1.RandomVariable.NOR_ID, RandomVariable_1.RandomVariable.NOR_SYN_$LI$(), RandomVariable_1.RandomVariable.NOR_SINCE_$LI$(), RandomVariable_1.RandomVariable.TYPE_ID);
            this.addKeyWord(BitwiseOperator_1.BitwiseOperator.COMPL_STR, BitwiseOperator_1.BitwiseOperator.COMPL_DESC, BitwiseOperator_1.BitwiseOperator.COMPL_ID, BitwiseOperator_1.BitwiseOperator.COMPL_SYN, BitwiseOperator_1.BitwiseOperator.COMPL_SINCE_$LI$(), BitwiseOperator_1.BitwiseOperator.TYPE_ID);
            this.addKeyWord(BitwiseOperator_1.BitwiseOperator.AND_STR, BitwiseOperator_1.BitwiseOperator.AND_DESC, BitwiseOperator_1.BitwiseOperator.AND_ID, BitwiseOperator_1.BitwiseOperator.AND_SYN, BitwiseOperator_1.BitwiseOperator.AND_SINCE_$LI$(), BitwiseOperator_1.BitwiseOperator.TYPE_ID);
            this.addKeyWord(BitwiseOperator_1.BitwiseOperator.XOR_STR, BitwiseOperator_1.BitwiseOperator.XOR_DESC, BitwiseOperator_1.BitwiseOperator.XOR_ID, BitwiseOperator_1.BitwiseOperator.XOR_SYN, BitwiseOperator_1.BitwiseOperator.XOR_SINCE_$LI$(), BitwiseOperator_1.BitwiseOperator.TYPE_ID);
            this.addKeyWord(BitwiseOperator_1.BitwiseOperator.OR_STR, BitwiseOperator_1.BitwiseOperator.OR_DESC, BitwiseOperator_1.BitwiseOperator.OR_ID, BitwiseOperator_1.BitwiseOperator.OR_SYN, BitwiseOperator_1.BitwiseOperator.OR_SINCE_$LI$(), BitwiseOperator_1.BitwiseOperator.TYPE_ID);
            this.addKeyWord(BitwiseOperator_1.BitwiseOperator.LEFT_SHIFT_STR, BitwiseOperator_1.BitwiseOperator.LEFT_SHIFT_DESC, BitwiseOperator_1.BitwiseOperator.LEFT_SHIFT_ID, BitwiseOperator_1.BitwiseOperator.LEFT_SHIFT_SYN, BitwiseOperator_1.BitwiseOperator.LEFT_SHIFT_SINCE_$LI$(), BitwiseOperator_1.BitwiseOperator.TYPE_ID);
            this.addKeyWord(BitwiseOperator_1.BitwiseOperator.RIGHT_SHIFT_STR, BitwiseOperator_1.BitwiseOperator.RIGHT_SHIFT_DESC, BitwiseOperator_1.BitwiseOperator.RIGHT_SHIFT_ID, BitwiseOperator_1.BitwiseOperator.RIGHT_SHIFT_SYN, BitwiseOperator_1.BitwiseOperator.RIGHT_SHIFT_SINCE_$LI$(), BitwiseOperator_1.BitwiseOperator.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PERC_STR, Unit_1.Unit.PERC_DESC, Unit_1.Unit.PERC_ID, Unit_1.Unit.PERC_SYN_$LI$(), Unit_1.Unit.PERC_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PROMIL_STR, Unit_1.Unit.PROMIL_DESC, Unit_1.Unit.PROMIL_ID, Unit_1.Unit.PROMIL_SYN_$LI$(), Unit_1.Unit.PROMIL_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.YOTTA_STR, Unit_1.Unit.YOTTA_DESC, Unit_1.Unit.YOTTA_ID, Unit_1.Unit.YOTTA_SYN_$LI$(), Unit_1.Unit.YOTTA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.YOTTA_SEPT_STR, Unit_1.Unit.YOTTA_DESC, Unit_1.Unit.YOTTA_ID, Unit_1.Unit.YOTTA_SEPT_SYN_$LI$(), Unit_1.Unit.YOTTA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ZETTA_STR, Unit_1.Unit.ZETTA_DESC, Unit_1.Unit.ZETTA_ID, Unit_1.Unit.ZETTA_SYN_$LI$(), Unit_1.Unit.ZETTA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ZETTA_SEXT_STR, Unit_1.Unit.ZETTA_DESC, Unit_1.Unit.ZETTA_ID, Unit_1.Unit.ZETTA_SEXT_SYN_$LI$(), Unit_1.Unit.ZETTA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.EXA_STR, Unit_1.Unit.EXA_DESC, Unit_1.Unit.EXA_ID, Unit_1.Unit.EXA_SYN_$LI$(), Unit_1.Unit.EXA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.EXA_QUINT_STR, Unit_1.Unit.EXA_DESC, Unit_1.Unit.EXA_ID, Unit_1.Unit.EXA_QUINT_SYN_$LI$(), Unit_1.Unit.EXA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PETA_STR, Unit_1.Unit.PETA_DESC, Unit_1.Unit.PETA_ID, Unit_1.Unit.PETA_SYN_$LI$(), Unit_1.Unit.PETA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PETA_QUAD_STR, Unit_1.Unit.PETA_DESC, Unit_1.Unit.PETA_ID, Unit_1.Unit.PETA_QUAD_SYN_$LI$(), Unit_1.Unit.PETA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.TERA_STR, Unit_1.Unit.TERA_DESC, Unit_1.Unit.TERA_ID, Unit_1.Unit.TERA_SYN_$LI$(), Unit_1.Unit.TERA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.TERA_TRIL_STR, Unit_1.Unit.TERA_DESC, Unit_1.Unit.TERA_ID, Unit_1.Unit.TERA_TRIL_SYN_$LI$(), Unit_1.Unit.TERA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.GIGA_STR, Unit_1.Unit.GIGA_DESC, Unit_1.Unit.GIGA_ID, Unit_1.Unit.GIGA_SYN_$LI$(), Unit_1.Unit.GIGA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.GIGA_BIL_STR, Unit_1.Unit.GIGA_DESC, Unit_1.Unit.GIGA_ID, Unit_1.Unit.GIGA_BIL_SYN_$LI$(), Unit_1.Unit.GIGA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MEGA_STR, Unit_1.Unit.MEGA_DESC, Unit_1.Unit.MEGA_ID, Unit_1.Unit.MEGA_SYN_$LI$(), Unit_1.Unit.MEGA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MEGA_MIL_STR, Unit_1.Unit.MEGA_DESC, Unit_1.Unit.MEGA_ID, Unit_1.Unit.MEGA_MIL_SYN_$LI$(), Unit_1.Unit.MEGA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILO_STR, Unit_1.Unit.KILO_DESC, Unit_1.Unit.KILO_ID, Unit_1.Unit.KILO_SYN_$LI$(), Unit_1.Unit.KILO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILO_TH_STR, Unit_1.Unit.KILO_DESC, Unit_1.Unit.KILO_ID, Unit_1.Unit.KILO_TH_SYN_$LI$(), Unit_1.Unit.KILO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.HECTO_STR, Unit_1.Unit.HECTO_DESC, Unit_1.Unit.HECTO_ID, Unit_1.Unit.HECTO_SYN_$LI$(), Unit_1.Unit.HECTO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.HECTO_HUND_STR, Unit_1.Unit.HECTO_DESC, Unit_1.Unit.HECTO_ID, Unit_1.Unit.HECTO_HUND_SYN_$LI$(), Unit_1.Unit.HECTO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.DECA_STR, Unit_1.Unit.DECA_DESC, Unit_1.Unit.DECA_ID, Unit_1.Unit.DECA_SYN_$LI$(), Unit_1.Unit.DECA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.DECA_TEN_STR, Unit_1.Unit.DECA_DESC, Unit_1.Unit.DECA_ID, Unit_1.Unit.DECA_TEN_SYN_$LI$(), Unit_1.Unit.DECA_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.DECI_STR, Unit_1.Unit.DECI_DESC, Unit_1.Unit.DECI_ID, Unit_1.Unit.DECI_SYN_$LI$(), Unit_1.Unit.DECI_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.CENTI_STR, Unit_1.Unit.CENTI_DESC, Unit_1.Unit.CENTI_ID, Unit_1.Unit.CENTI_SYN_$LI$(), Unit_1.Unit.CENTI_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILLI_STR, Unit_1.Unit.MILLI_DESC, Unit_1.Unit.MILLI_ID, Unit_1.Unit.MILLI_SYN_$LI$(), Unit_1.Unit.MILLI_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MICRO_STR, Unit_1.Unit.MICRO_DESC, Unit_1.Unit.MICRO_ID, Unit_1.Unit.MICRO_SYN_$LI$(), Unit_1.Unit.MICRO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.NANO_STR, Unit_1.Unit.NANO_DESC, Unit_1.Unit.NANO_ID, Unit_1.Unit.NANO_SYN_$LI$(), Unit_1.Unit.NANO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PICO_STR, Unit_1.Unit.PICO_DESC, Unit_1.Unit.PICO_ID, Unit_1.Unit.PICO_SYN_$LI$(), Unit_1.Unit.PICO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.FEMTO_STR, Unit_1.Unit.FEMTO_DESC, Unit_1.Unit.FEMTO_ID, Unit_1.Unit.FEMTO_SYN_$LI$(), Unit_1.Unit.FEMTO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ATTO_STR, Unit_1.Unit.ATTO_DESC, Unit_1.Unit.ATTO_ID, Unit_1.Unit.ATTO_SYN_$LI$(), Unit_1.Unit.ATTO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ZEPTO_STR, Unit_1.Unit.ZEPTO_DESC, Unit_1.Unit.ZEPTO_ID, Unit_1.Unit.ZEPTO_SYN_$LI$(), Unit_1.Unit.ZEPTO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.YOCTO_STR, Unit_1.Unit.YOCTO_DESC, Unit_1.Unit.YOCTO_ID, Unit_1.Unit.YOCTO_SYN_$LI$(), Unit_1.Unit.YOCTO_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.METRE_STR, Unit_1.Unit.METRE_DESC, Unit_1.Unit.METRE_ID, Unit_1.Unit.METRE_SYN_$LI$(), Unit_1.Unit.METRE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOMETRE_STR, Unit_1.Unit.KILOMETRE_DESC, Unit_1.Unit.KILOMETRE_ID, Unit_1.Unit.KILOMETRE_SYN_$LI$(), Unit_1.Unit.KILOMETRE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.CENTIMETRE_STR, Unit_1.Unit.CENTIMETRE_DESC, Unit_1.Unit.CENTIMETRE_ID, Unit_1.Unit.CENTIMETRE_SYN_$LI$(), Unit_1.Unit.CENTIMETRE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILLIMETRE_STR, Unit_1.Unit.MILLIMETRE_DESC, Unit_1.Unit.MILLIMETRE_ID, Unit_1.Unit.MILLIMETRE_SYN_$LI$(), Unit_1.Unit.MILLIMETRE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.INCH_STR, Unit_1.Unit.INCH_DESC, Unit_1.Unit.INCH_ID, Unit_1.Unit.INCH_SYN_$LI$(), Unit_1.Unit.INCH_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.YARD_STR, Unit_1.Unit.YARD_DESC, Unit_1.Unit.YARD_ID, Unit_1.Unit.YARD_SYN_$LI$(), Unit_1.Unit.YARD_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.FEET_STR, Unit_1.Unit.FEET_DESC, Unit_1.Unit.FEET_ID, Unit_1.Unit.FEET_SYN_$LI$(), Unit_1.Unit.FEET_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILE_STR, Unit_1.Unit.MILE_DESC, Unit_1.Unit.MILE_ID, Unit_1.Unit.MILE_SYN_$LI$(), Unit_1.Unit.MILE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.NAUTICAL_MILE_STR, Unit_1.Unit.NAUTICAL_MILE_DESC, Unit_1.Unit.NAUTICAL_MILE_ID, Unit_1.Unit.NAUTICAL_MILE_SYN_$LI$(), Unit_1.Unit.NAUTICAL_MILE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.METRE2_STR, Unit_1.Unit.METRE2_DESC, Unit_1.Unit.METRE2_ID, Unit_1.Unit.METRE2_SYN_$LI$(), Unit_1.Unit.METRE2_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.CENTIMETRE2_STR, Unit_1.Unit.CENTIMETRE2_DESC, Unit_1.Unit.CENTIMETRE2_ID, Unit_1.Unit.CENTIMETRE2_SYN_$LI$(), Unit_1.Unit.CENTIMETRE2_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILLIMETRE2_STR, Unit_1.Unit.MILLIMETRE2_DESC, Unit_1.Unit.MILLIMETRE2_ID, Unit_1.Unit.MILLIMETRE2_SYN_$LI$(), Unit_1.Unit.MILLIMETRE2_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ARE_STR, Unit_1.Unit.ARE_DESC, Unit_1.Unit.ARE_ID, Unit_1.Unit.ARE_SYN_$LI$(), Unit_1.Unit.ARE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.HECTARE_STR, Unit_1.Unit.HECTARE_DESC, Unit_1.Unit.HECTARE_ID, Unit_1.Unit.HECTARE_SYN_$LI$(), Unit_1.Unit.HECTARE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ACRE_STR, Unit_1.Unit.ACRE_DESC, Unit_1.Unit.ACRE_ID, Unit_1.Unit.ACRE_SYN_$LI$(), Unit_1.Unit.ACRE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOMETRE2_STR, Unit_1.Unit.KILOMETRE2_DESC, Unit_1.Unit.KILOMETRE2_ID, Unit_1.Unit.KILOMETRE2_SYN_$LI$(), Unit_1.Unit.KILOMETRE2_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILLIMETRE3_STR, Unit_1.Unit.MILLIMETRE3_DESC, Unit_1.Unit.MILLIMETRE3_ID, Unit_1.Unit.MILLIMETRE3_SYN_$LI$(), Unit_1.Unit.MILLIMETRE3_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.CENTIMETRE3_STR, Unit_1.Unit.CENTIMETRE3_DESC, Unit_1.Unit.CENTIMETRE3_ID, Unit_1.Unit.CENTIMETRE3_SYN_$LI$(), Unit_1.Unit.CENTIMETRE3_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.METRE3_STR, Unit_1.Unit.METRE3_DESC, Unit_1.Unit.METRE3_ID, Unit_1.Unit.METRE3_SYN_$LI$(), Unit_1.Unit.METRE3_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOMETRE3_STR, Unit_1.Unit.KILOMETRE3_DESC, Unit_1.Unit.KILOMETRE3_ID, Unit_1.Unit.KILOMETRE3_SYN_$LI$(), Unit_1.Unit.KILOMETRE3_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILLILITRE_STR, Unit_1.Unit.MILLILITRE_DESC, Unit_1.Unit.MILLILITRE_ID, Unit_1.Unit.MILLILITRE_SYN_$LI$(), Unit_1.Unit.MILLILITRE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.LITRE_STR, Unit_1.Unit.LITRE_DESC, Unit_1.Unit.LITRE_ID, Unit_1.Unit.LITRE_SYN_$LI$(), Unit_1.Unit.LITRE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.GALLON_STR, Unit_1.Unit.GALLON_DESC, Unit_1.Unit.GALLON_ID, Unit_1.Unit.GALLON_SYN_$LI$(), Unit_1.Unit.GALLON_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PINT_STR, Unit_1.Unit.PINT_DESC, Unit_1.Unit.PINT_ID, Unit_1.Unit.PINT_SYN_$LI$(), Unit_1.Unit.PINT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.SECOND_STR, Unit_1.Unit.SECOND_DESC, Unit_1.Unit.SECOND_ID, Unit_1.Unit.SECOND_SYN_$LI$(), Unit_1.Unit.SECOND_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILLISECOND_STR, Unit_1.Unit.MILLISECOND_DESC, Unit_1.Unit.MILLISECOND_ID, Unit_1.Unit.MILLISECOND_SYN_$LI$(), Unit_1.Unit.MILLISECOND_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MINUTE_STR, Unit_1.Unit.MINUTE_DESC, Unit_1.Unit.MINUTE_ID, Unit_1.Unit.MINUTE_SYN_$LI$(), Unit_1.Unit.MINUTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.HOUR_STR, Unit_1.Unit.HOUR_DESC, Unit_1.Unit.HOUR_ID, Unit_1.Unit.HOUR_SYN_$LI$(), Unit_1.Unit.HOUR_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.DAY_STR, Unit_1.Unit.DAY_DESC, Unit_1.Unit.DAY_ID, Unit_1.Unit.DAY_SYN_$LI$(), Unit_1.Unit.DAY_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.WEEK_STR, Unit_1.Unit.WEEK_DESC, Unit_1.Unit.WEEK_ID, Unit_1.Unit.WEEK_SYN_$LI$(), Unit_1.Unit.WEEK_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.JULIAN_YEAR_STR, Unit_1.Unit.JULIAN_YEAR_DESC, Unit_1.Unit.JULIAN_YEAR_ID, Unit_1.Unit.JULIAN_YEAR_SYN_$LI$(), Unit_1.Unit.JULIAN_YEAR_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOGRAM_STR, Unit_1.Unit.KILOGRAM_DESC, Unit_1.Unit.KILOGRAM_ID, Unit_1.Unit.KILOGRAM_SYN_$LI$(), Unit_1.Unit.KILOGRAM_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.GRAM_STR, Unit_1.Unit.GRAM_DESC, Unit_1.Unit.GRAM_ID, Unit_1.Unit.GRAM_SYN_$LI$(), Unit_1.Unit.GRAM_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILLIGRAM_STR, Unit_1.Unit.MILLIGRAM_DESC, Unit_1.Unit.MILLIGRAM_ID, Unit_1.Unit.MILLIGRAM_SYN_$LI$(), Unit_1.Unit.MILLIGRAM_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.DECAGRAM_STR, Unit_1.Unit.DECAGRAM_DESC, Unit_1.Unit.DECAGRAM_ID, Unit_1.Unit.DECAGRAM_SYN_$LI$(), Unit_1.Unit.DECAGRAM_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.TONNE_STR, Unit_1.Unit.TONNE_DESC, Unit_1.Unit.TONNE_ID, Unit_1.Unit.TONNE_SYN_$LI$(), Unit_1.Unit.TONNE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.OUNCE_STR, Unit_1.Unit.OUNCE_DESC, Unit_1.Unit.OUNCE_ID, Unit_1.Unit.OUNCE_SYN_$LI$(), Unit_1.Unit.OUNCE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.POUND_STR, Unit_1.Unit.POUND_DESC, Unit_1.Unit.POUND_ID, Unit_1.Unit.POUND_SYN_$LI$(), Unit_1.Unit.POUND_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.BIT_STR, Unit_1.Unit.BIT_DESC, Unit_1.Unit.BIT_ID, Unit_1.Unit.BIT_SYN_$LI$(), Unit_1.Unit.BIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOBIT_STR, Unit_1.Unit.KILOBIT_DESC, Unit_1.Unit.KILOBIT_ID, Unit_1.Unit.KILOBIT_SYN_$LI$(), Unit_1.Unit.KILOBIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MEGABIT_STR, Unit_1.Unit.MEGABIT_DESC, Unit_1.Unit.MEGABIT_ID, Unit_1.Unit.MEGABIT_SYN_$LI$(), Unit_1.Unit.MEGABIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.GIGABIT_STR, Unit_1.Unit.GIGABIT_DESC, Unit_1.Unit.GIGABIT_ID, Unit_1.Unit.GIGABIT_SYN_$LI$(), Unit_1.Unit.GIGABIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.TERABIT_STR, Unit_1.Unit.TERABIT_DESC, Unit_1.Unit.TERABIT_ID, Unit_1.Unit.TERABIT_SYN_$LI$(), Unit_1.Unit.TERABIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PETABIT_STR, Unit_1.Unit.PETABIT_DESC, Unit_1.Unit.PETABIT_ID, Unit_1.Unit.PETABIT_SYN_$LI$(), Unit_1.Unit.PETABIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.EXABIT_STR, Unit_1.Unit.EXABIT_DESC, Unit_1.Unit.EXABIT_ID, Unit_1.Unit.EXABIT_SYN_$LI$(), Unit_1.Unit.EXABIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ZETTABIT_STR, Unit_1.Unit.ZETTABIT_DESC, Unit_1.Unit.ZETTABIT_ID, Unit_1.Unit.ZETTABIT_SYN_$LI$(), Unit_1.Unit.ZETTABIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.YOTTABIT_STR, Unit_1.Unit.YOTTABIT_DESC, Unit_1.Unit.YOTTABIT_ID, Unit_1.Unit.YOTTABIT_SYN_$LI$(), Unit_1.Unit.YOTTABIT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.BYTE_STR, Unit_1.Unit.BYTE_DESC, Unit_1.Unit.BYTE_ID, Unit_1.Unit.BYTE_SYN_$LI$(), Unit_1.Unit.BYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOBYTE_STR, Unit_1.Unit.KILOBYTE_DESC, Unit_1.Unit.KILOBYTE_ID, Unit_1.Unit.KILOBYTE_SYN_$LI$(), Unit_1.Unit.KILOBYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MEGABYTE_STR, Unit_1.Unit.MEGABYTE_DESC, Unit_1.Unit.MEGABYTE_ID, Unit_1.Unit.MEGABYTE_SYN_$LI$(), Unit_1.Unit.MEGABYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.GIGABYTE_STR, Unit_1.Unit.GIGABYTE_DESC, Unit_1.Unit.GIGABYTE_ID, Unit_1.Unit.GIGABYTE_SYN_$LI$(), Unit_1.Unit.GIGABYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.TERABYTE_STR, Unit_1.Unit.TERABYTE_DESC, Unit_1.Unit.TERABYTE_ID, Unit_1.Unit.TERABYTE_SYN_$LI$(), Unit_1.Unit.TERABYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.PETABYTE_STR, Unit_1.Unit.PETABYTE_DESC, Unit_1.Unit.PETABYTE_ID, Unit_1.Unit.PETABYTE_SYN_$LI$(), Unit_1.Unit.PETABYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.EXABYTE_STR, Unit_1.Unit.EXABYTE_DESC, Unit_1.Unit.EXABYTE_ID, Unit_1.Unit.EXABYTE_SYN_$LI$(), Unit_1.Unit.EXABYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ZETTABYTE_STR, Unit_1.Unit.ZETTABYTE_DESC, Unit_1.Unit.ZETTABYTE_ID, Unit_1.Unit.ZETTABYTE_SYN_$LI$(), Unit_1.Unit.ZETTABYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.YOTTABYTE_STR, Unit_1.Unit.YOTTABYTE_DESC, Unit_1.Unit.YOTTABYTE_ID, Unit_1.Unit.YOTTABYTE_SYN_$LI$(), Unit_1.Unit.YOTTABYTE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.JOULE_STR, Unit_1.Unit.JOULE_DESC, Unit_1.Unit.JOULE_ID, Unit_1.Unit.JOULE_SYN_$LI$(), Unit_1.Unit.JOULE_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.ELECTRONO_VOLT_STR, Unit_1.Unit.ELECTRONO_VOLT_DESC, Unit_1.Unit.ELECTRONO_VOLT_ID, Unit_1.Unit.ELECTRONO_VOLT_SYN_$LI$(), Unit_1.Unit.ELECTRONO_VOLT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILO_ELECTRONO_VOLT_STR, Unit_1.Unit.KILO_ELECTRONO_VOLT_DESC, Unit_1.Unit.KILO_ELECTRONO_VOLT_ID, Unit_1.Unit.KILO_ELECTRONO_VOLT_SYN_$LI$(), Unit_1.Unit.KILO_ELECTRONO_VOLT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MEGA_ELECTRONO_VOLT_STR, Unit_1.Unit.MEGA_ELECTRONO_VOLT_DESC, Unit_1.Unit.MEGA_ELECTRONO_VOLT_ID, Unit_1.Unit.MEGA_ELECTRONO_VOLT_SYN_$LI$(), Unit_1.Unit.MEGA_ELECTRONO_VOLT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.GIGA_ELECTRONO_VOLT_STR, Unit_1.Unit.GIGA_ELECTRONO_VOLT_DESC, Unit_1.Unit.GIGA_ELECTRONO_VOLT_ID, Unit_1.Unit.GIGA_ELECTRONO_VOLT_SYN_$LI$(), Unit_1.Unit.GIGA_ELECTRONO_VOLT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.TERA_ELECTRONO_VOLT_STR, Unit_1.Unit.TERA_ELECTRONO_VOLT_DESC, Unit_1.Unit.TERA_ELECTRONO_VOLT_ID, Unit_1.Unit.TERA_ELECTRONO_VOLT_SYN_$LI$(), Unit_1.Unit.TERA_ELECTRONO_VOLT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.METRE_PER_SECOND_STR, Unit_1.Unit.METRE_PER_SECOND_DESC, Unit_1.Unit.METRE_PER_SECOND_ID, Unit_1.Unit.METRE_PER_SECOND_SYN_$LI$(), Unit_1.Unit.METRE_PER_SECOND_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOMETRE_PER_HOUR_STR, Unit_1.Unit.KILOMETRE_PER_HOUR_DESC, Unit_1.Unit.KILOMETRE_PER_HOUR_ID, Unit_1.Unit.KILOMETRE_PER_HOUR_SYN_$LI$(), Unit_1.Unit.KILOMETRE_PER_HOUR_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILE_PER_HOUR_STR, Unit_1.Unit.MILE_PER_HOUR_DESC, Unit_1.Unit.MILE_PER_HOUR_ID, Unit_1.Unit.MILE_PER_HOUR_SYN_$LI$(), Unit_1.Unit.MILE_PER_HOUR_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KNOT_STR, Unit_1.Unit.KNOT_DESC, Unit_1.Unit.KNOT_ID, Unit_1.Unit.KNOT_SYN_$LI$(), Unit_1.Unit.KNOT_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.METRE_PER_SECOND2_STR, Unit_1.Unit.METRE_PER_SECOND2_DESC, Unit_1.Unit.METRE_PER_SECOND2_ID, Unit_1.Unit.METRE_PER_SECOND2_SYN_$LI$(), Unit_1.Unit.METRE_PER_SECOND2_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.KILOMETRE_PER_HOUR2_STR, Unit_1.Unit.KILOMETRE_PER_HOUR2_DESC, Unit_1.Unit.KILOMETRE_PER_HOUR2_ID, Unit_1.Unit.KILOMETRE_PER_HOUR2_SYN_$LI$(), Unit_1.Unit.KILOMETRE_PER_HOUR2_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MILE_PER_HOUR2_STR, Unit_1.Unit.MILE_PER_HOUR2_DESC, Unit_1.Unit.MILE_PER_HOUR2_ID, Unit_1.Unit.MILE_PER_HOUR2_SYN_$LI$(), Unit_1.Unit.MILE_PER_HOUR2_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.RADIAN_ARC_STR, Unit_1.Unit.RADIAN_ARC_DESC, Unit_1.Unit.RADIAN_ARC_ID, Unit_1.Unit.RADIAN_ARC_SYN_$LI$(), Unit_1.Unit.RADIAN_ARC_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.DEGREE_ARC_STR, Unit_1.Unit.DEGREE_ARC_DESC, Unit_1.Unit.DEGREE_ARC_ID, Unit_1.Unit.DEGREE_ARC_SYN_$LI$(), Unit_1.Unit.DEGREE_ARC_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.MINUTE_ARC_STR, Unit_1.Unit.MINUTE_ARC_DESC, Unit_1.Unit.MINUTE_ARC_ID, Unit_1.Unit.MINUTE_ARC_SYN_$LI$(), Unit_1.Unit.MINUTE_ARC_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            this.addKeyWord(Unit_1.Unit.SECOND_ARC_STR, Unit_1.Unit.SECOND_ARC_DESC, Unit_1.Unit.SECOND_ARC_ID, Unit_1.Unit.SECOND_ARC_SYN_$LI$(), Unit_1.Unit.SECOND_ARC_SINCE_$LI$(), Unit_1.Unit.TYPE_ID);
            if (this.UDFExpression)
                this.addUDFSpecificParserKeyWords();
        }
        this.addKeyWord(ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_STR, ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_DESC, ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_ID, ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_SYN, ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_SINCE_$LI$(), ParserSymbol_1.ParserSymbol.TYPE_ID);
        this.addKeyWord(ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_STR, ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_DESC, ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID, ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_SYN, ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_SINCE_$LI$(), ParserSymbol_1.ParserSymbol.TYPE_ID);
        this.addKeyWord(ParserSymbol_1.ParserSymbol.COMMA_STR, ParserSymbol_1.ParserSymbol.COMMA_DESC, ParserSymbol_1.ParserSymbol.COMMA_ID, ParserSymbol_1.ParserSymbol.COMMA_SYN, ParserSymbol_1.ParserSymbol.COMMA_SINCE_$LI$(), ParserSymbol_1.ParserSymbol.TYPE_ID);
        this.addKeyWord(ParserSymbol_1.ParserSymbol.SEMI_STR, ParserSymbol_1.ParserSymbol.SEMI_DESC, ParserSymbol_1.ParserSymbol.COMMA_ID, ParserSymbol_1.ParserSymbol.SEMI_SYN, ParserSymbol_1.ParserSymbol.COMMA_SINCE_$LI$(), ParserSymbol_1.ParserSymbol.TYPE_ID);
        this.addKeyWord(ParserSymbol_1.ParserSymbol.DECIMAL_REG_EXP_$LI$(), ParserSymbol_1.ParserSymbol.NUMBER_REG_DESC, ParserSymbol_1.ParserSymbol.NUMBER_ID, ParserSymbol_1.ParserSymbol.NUMBER_SYN, ParserSymbol_1.ParserSymbol.NUMBER_SINCE_$LI$(), ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID);
        this.addKeyWord(ParserSymbol_1.ParserSymbol.BLANK_STR, ParserSymbol_1.ParserSymbol.BLANK_DESC, ParserSymbol_1.ParserSymbol.BLANK_ID, ParserSymbol_1.ParserSymbol.BLANK_SYN, ParserSymbol_1.ParserSymbol.BLANK_SINCE_$LI$(), ParserSymbol_1.ParserSymbol.TYPE_ID);
    }
    /**
     * Adds arguments key words to the keywords list
     * @private
     */
    /*private*/ addArgumentsKeyWords() {
        const argumentsNumber = this.argumentsList.size();
        for (let argumentIndex = 0; argumentIndex < argumentsNumber; argumentIndex++) {
            {
                const arg = this.argumentsList.get(argumentIndex);
                if (arg.getArgumentType() !== ArgumentConstants_1.ArgumentConstants.RECURSIVE_ARGUMENT)
                    this.addKeyWord(arg.getArgumentName(), arg.getDescription(), argumentIndex, arg.getArgumentName(), "", ArgumentConstants_1.ArgumentConstants.TYPE_ID);
                else
                    this.addKeyWord(arg.getArgumentName(), arg.getDescription(), argumentIndex, arg.getArgumentName() + "(n)", "", RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE);
            }
            ;
        }
    }
    /**
     * Adds functions key words to the keywords list
     * @private
     */
    /*private*/ addFunctionsKeyWords() {
        const functionsNumber = this.functionsList.size();
        for (let functionIndex = 0; functionIndex < functionsNumber; functionIndex++) {
            {
                const fun = this.functionsList.get(functionIndex);
                let syntax = fun.getFunctionName() + "(";
                const paramsNum = fun.getParametersNumber();
                for (let i = 0; i < paramsNum; i++) {
                    {
                        syntax = syntax + fun.getParameterName(i);
                        if ((paramsNum > 1) && (i < paramsNum - 1))
                            syntax = syntax + ",";
                    }
                    ;
                }
                syntax = syntax + ")";
                this.addKeyWord(fun.getFunctionName(), fun.getDescription(), functionIndex, syntax, "", FunctionConstants_1.FunctionConstants.TYPE_ID);
            }
            ;
        }
    }
    /**
     * Adds constants key words to the keywords list
     * @private
     */
    /*private*/ addConstantsKeyWords() {
        const constantsNumber = this.constantsList.size();
        for (let constantIndex = 0; constantIndex < constantsNumber; constantIndex++) {
            {
                const c = this.constantsList.get(constantIndex);
                this.addKeyWord(c.getConstantName(), c.getDescription(), constantIndex, c.getConstantName(), "", Constant_1.Constant.TYPE_ID);
            }
            ;
        }
    }
    /**
     * Final validation of key words
     * @private
     */
    /*private*/ validateParserKeyWords() {
        if (mXparserConstants_1.mXparserConstants.overrideBuiltinTokens) {
            const userDefinedTokens = (new j4ts_1.java.util.ArrayList());
            for (let index161 = this.argumentsList.iterator(); index161.hasNext();) {
                let arg = index161.next();
                userDefinedTokens.add(arg.getArgumentName());
            }
            for (let index162 = this.functionsList.iterator(); index162.hasNext();) {
                let fun = index162.next();
                userDefinedTokens.add(fun.getFunctionName());
            }
            for (let index163 = this.constantsList.iterator(); index163.hasNext();) {
                let cons = index163.next();
                userDefinedTokens.add(cons.getConstantName());
            }
            if (userDefinedTokens.isEmpty())
                return;
            const keyWordsToOverride = (new j4ts_1.java.util.ArrayList());
            for (let index164 = this.keyWordsList.iterator(); index164.hasNext();) {
                let kw = index164.next();
                if (userDefinedTokens.contains(kw.wordString))
                    keyWordsToOverride.add(kw);
            }
            if (keyWordsToOverride.isEmpty())
                return;
            for (let index165 = keyWordsToOverride.iterator(); index165.hasNext();) {
                let kw = index165.next();
                this.keyWordsList.remove(kw);
            }
        }
    }
    /**
     * Adds key word to the keyWords list
     *
     * @param {string} wordString
     * @param {string} wordDescription
     * @param {number} wordId
     * @param {number} wordTypeId
     * @param {string} wordSyntax
     * @param {string} wordSince
     * @private
     */
    /*private*/ addKeyWord(wordString, wordDescription, wordId, wordSyntax, wordSince, wordTypeId) {
        if ((mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().size() > 0) || (mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().size() > 0))
            if ((wordTypeId === Function1Arg_1.Function1Arg.TYPE_ID) || (wordTypeId === Function2Arg_1.Function2Arg.TYPE_ID) || (wordTypeId === Function3Arg_1.Function3Arg.TYPE_ID) || (wordTypeId === FunctionVariadic_1.FunctionVariadic.TYPE_ID) || (wordTypeId === CalculusOperator_1.CalculusOperator.TYPE_ID) || (wordTypeId === ConstantValue_1.ConstantValue.TYPE_ID) || (wordTypeId === RandomVariable_1.RandomVariable.TYPE_ID) || (wordTypeId === Unit_1.Unit.TYPE_ID)) {
                if (mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().size() > 0)
                    if (mXparserConstants_1.mXparserConstants.tokensToRemove_$LI$().contains(wordString))
                        return;
                if (mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().size() > 0) {
                    for (let index166 = mXparserConstants_1.mXparserConstants.tokensToModify_$LI$().iterator(); index166.hasNext();) {
                        let tm = index166.next();
                        if (tm.currentToken === wordString) {
                            wordString = tm.newToken;
                            if (tm.newTokenDescription != null)
                                wordDescription = tm.newTokenDescription;
                            wordSyntax = /* replace */ wordSyntax.split(tm.currentToken).join(tm.newToken);
                        }
                    }
                }
            }
        this.keyWordsList.add(new KeyWord_1.KeyWord(wordString, wordDescription, wordId, wordSyntax, wordSince, wordTypeId));
    }
    /**
     * Checks whether unknown token represents number literal
     * provided in different numeral base system, where
     * base is between 1 and 36.
     *
     * @param {Token} token   The token not know to the parser
     * @private
     */
    /*private*/ checkOtherNumberBases(token) {
        let dotPos = 0;
        const tokenStrLength = token.tokenStr.length;
        if (tokenStrLength >= 2) {
            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(token.tokenStr.charAt(1)) == '.'.charCodeAt(0))
                dotPos = 1;
        }
        if ((dotPos === 0) && (tokenStrLength >= 3)) {
            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(token.tokenStr.charAt(2)) == '.'.charCodeAt(0))
                dotPos = 2;
        }
        if ((dotPos === 0) && (tokenStrLength >= 4)) {
            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(token.tokenStr.charAt(3)) == '.'.charCodeAt(0))
                dotPos = 3;
        }
        if (dotPos === 0)
            return;
        const baseInd = token.tokenStr.substring(0, dotPos).toLowerCase();
        let numberLiteral = "";
        if (tokenStrLength > dotPos + 1)
            numberLiteral = token.tokenStr.substring(dotPos + 1);
        let numeralSystemBase = 0;
        if (baseInd === ("b"))
            numeralSystemBase = 2;
        else if (baseInd === ("o"))
            numeralSystemBase = 8;
        else if (baseInd === ("h"))
            numeralSystemBase = 16;
        else if (baseInd === ("b1"))
            numeralSystemBase = 1;
        else if (baseInd === ("b2"))
            numeralSystemBase = 2;
        else if (baseInd === ("b3"))
            numeralSystemBase = 3;
        else if (baseInd === ("b4"))
            numeralSystemBase = 4;
        else if (baseInd === ("b5"))
            numeralSystemBase = 5;
        else if (baseInd === ("b6"))
            numeralSystemBase = 6;
        else if (baseInd === ("b7"))
            numeralSystemBase = 7;
        else if (baseInd === ("b8"))
            numeralSystemBase = 8;
        else if (baseInd === ("b9"))
            numeralSystemBase = 9;
        else if (baseInd === ("b10"))
            numeralSystemBase = 10;
        else if (baseInd === ("b11"))
            numeralSystemBase = 11;
        else if (baseInd === ("b12"))
            numeralSystemBase = 12;
        else if (baseInd === ("b13"))
            numeralSystemBase = 13;
        else if (baseInd === ("b14"))
            numeralSystemBase = 14;
        else if (baseInd === ("b15"))
            numeralSystemBase = 15;
        else if (baseInd === ("b16"))
            numeralSystemBase = 16;
        else if (baseInd === ("b17"))
            numeralSystemBase = 17;
        else if (baseInd === ("b18"))
            numeralSystemBase = 18;
        else if (baseInd === ("b19"))
            numeralSystemBase = 19;
        else if (baseInd === ("b20"))
            numeralSystemBase = 20;
        else if (baseInd === ("b21"))
            numeralSystemBase = 21;
        else if (baseInd === ("b22"))
            numeralSystemBase = 22;
        else if (baseInd === ("b23"))
            numeralSystemBase = 23;
        else if (baseInd === ("b24"))
            numeralSystemBase = 24;
        else if (baseInd === ("b25"))
            numeralSystemBase = 25;
        else if (baseInd === ("b26"))
            numeralSystemBase = 26;
        else if (baseInd === ("b27"))
            numeralSystemBase = 27;
        else if (baseInd === ("b28"))
            numeralSystemBase = 28;
        else if (baseInd === ("b29"))
            numeralSystemBase = 29;
        else if (baseInd === ("b30"))
            numeralSystemBase = 30;
        else if (baseInd === ("b31"))
            numeralSystemBase = 31;
        else if (baseInd === ("b32"))
            numeralSystemBase = 32;
        else if (baseInd === ("b33"))
            numeralSystemBase = 33;
        else if (baseInd === ("b34"))
            numeralSystemBase = 34;
        else if (baseInd === ("b35"))
            numeralSystemBase = 35;
        else if (baseInd === ("b36"))
            numeralSystemBase = 36;
        if ((numeralSystemBase > 0) && (numeralSystemBase <= 36)) {
            token.tokenTypeId = ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID;
            token.tokenId = ParserSymbol_1.ParserSymbol.NUMBER_ID;
            token.tokenValue = NumberTheory_1.NumberTheory.convOthBase2Decimal$java_lang_String$int(numberLiteral, numeralSystemBase);
        }
    }
    /**
     * Checks whether unknown token represents fraction
     * provided as fraction or mixed fraction
     *
     * @param {Token} token   The token not know to the parser
     * @private
     */
    /*private*/ checkFraction(token) {
        const tokenStrLength = token.tokenStr.length;
        if (tokenStrLength < 3)
            return;
        if (!mXparserConstants_1.mXparserConstants.regexMatch(token.tokenStr, ParserSymbol_1.ParserSymbol.FRACTION_$LI$()))
            return;
        const underscore1stPos = token.tokenStr.indexOf('_');
        const underscore2ndPos = token.tokenStr.indexOf('_', underscore1stPos + 1);
        let mixedFraction = false;
        if (underscore2ndPos > 0)
            mixedFraction = true;
        let fractionValue;
        if (mixedFraction) {
            const wholeStr = token.tokenStr.substring(0, underscore1stPos);
            const numeratorStr = token.tokenStr.substring(underscore1stPos + 1, underscore2ndPos);
            const denominatorStr = token.tokenStr.substring(underscore2ndPos + 1);
            const whole = j4ts_2.javaemul.internal.DoubleHelper.parseDouble(wholeStr);
            const numerator = j4ts_2.javaemul.internal.DoubleHelper.parseDouble(numeratorStr);
            const denominator = j4ts_2.javaemul.internal.DoubleHelper.parseDouble(denominatorStr);
            if (denominator === 0)
                fractionValue = j4ts_2.javaemul.internal.DoubleHelper.NaN;
            else {
                fractionValue = whole + numerator / denominator;
            }
        }
        else {
            const numeratorStr = token.tokenStr.substring(0, underscore1stPos);
            const denominatorStr = token.tokenStr.substring(underscore1stPos + 1);
            const numerator = j4ts_2.javaemul.internal.DoubleHelper.parseDouble(numeratorStr);
            const denominator = j4ts_2.javaemul.internal.DoubleHelper.parseDouble(denominatorStr);
            if (denominator === 0)
                fractionValue = j4ts_2.javaemul.internal.DoubleHelper.NaN;
            else {
                fractionValue = numerator / denominator;
            }
        }
        token.tokenTypeId = ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID;
        token.tokenId = ParserSymbol_1.ParserSymbol.NUMBER_ID;
        token.tokenValue = fractionValue;
    }
    /**
     * Adds expression token
     * Method is called by the tokenExpressionString()
     * while parsing string expression
     *
     * @param      {string} tokenStr            the token string
     * @param      {KeyWord} keyWord             the key word
     * @private
     */
    /*private*/ addToken(tokenStr, keyWord) {
        const token = new Token_1.Token();
        this.initialTokens.add(token);
        token.tokenStr = tokenStr;
        token.keyWord = keyWord.wordString;
        token.tokenTypeId = keyWord.wordTypeId;
        token.tokenId = keyWord.wordId;
        if (token.tokenTypeId === ArgumentConstants_1.ArgumentConstants.TYPE_ID)
            token.tokenValue = this.argumentsList.get(token.tokenId).argumentValue;
        else if (token.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID) {
            token.tokenValue = j4ts_2.javaemul.internal.DoubleHelper.valueOf(token.tokenStr);
            token.keyWord = ParserSymbol_1.ParserSymbol.NUMBER_STR;
        }
        else if (token.tokenTypeId === Token_1.Token.NOT_MATCHED_$LI$()) {
            this.checkOtherNumberBases(token);
            if (token.tokenTypeId === Token_1.Token.NOT_MATCHED_$LI$())
                this.checkFraction(token);
        }
    }
    /*private*/ isNotSpecialChar(c) {
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '+'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '-'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '+'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '*'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '/'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '^'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == ','.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == ';'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '('.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == ')'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '|'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '&'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '='.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '>'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '<'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '~'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '\\'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '#'.charCodeAt(0))
            return false;
        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '@'.charCodeAt(0))
            return false;
        return true;
    }
    /**
     * Tokenizing expression string
     * @private
     */
    /*private*/ tokenizeExpressionString() {
        this.keyWordsList = (new j4ts_1.java.util.ArrayList());
        this.addParserKeyWords();
        this.validateParserKeyWords();
        if (this.parserKeyWordsOnly === false) {
            this.addArgumentsKeyWords();
            this.addFunctionsKeyWords();
            this.addConstantsKeyWords();
        }
        j4ts_1.java.util.Collections.sort(this.keyWordsList, ((funcInst) => { if (typeof funcInst == 'function') {
            return funcInst;
        } return (arg0, arg1) => (funcInst['compare'] ? funcInst['compare'] : funcInst).call(funcInst, arg0, arg1); })(new Miscellaneous_3.DescKwLenComparator()));
        let numberKwId = ConstantValue_1.ConstantValue.NaN;
        let plusKwId = ConstantValue_1.ConstantValue.NaN;
        let minusKwId = ConstantValue_1.ConstantValue.NaN;
        for (let kwId = 0; kwId < this.keyWordsList.size(); kwId++) {
            {
                if (this.keyWordsList.get(kwId).wordTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID)
                    numberKwId = kwId;
                if (this.keyWordsList.get(kwId).wordTypeId === Operator_1.Operator.TYPE_ID) {
                    if (this.keyWordsList.get(kwId).wordId === Operator_1.Operator.PLUS_ID)
                        plusKwId = kwId;
                    if (this.keyWordsList.get(kwId).wordId === Operator_1.Operator.MINUS_ID)
                        minusKwId = kwId;
                }
            }
            ;
        }
        this.initialTokens = (new j4ts_1.java.util.ArrayList());
        const expLen = this.expressionString.length;
        if (expLen === 0)
            return;
        let newExpressionString = "";
        let c;
        let clag1 = 'a';
        let blankCnt = 0;
        let newExpLen = 0;
        for (let i = 0; i < expLen; i++) {
            {
                c = this.expressionString.charAt(i);
                if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == ' '.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '\t'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '\f'.charCodeAt(0))) {
                    blankCnt++;
                }
                else if (blankCnt > 0) {
                    if (newExpLen > 0) {
                        if (this.isNotSpecialChar(clag1))
                            newExpressionString = newExpressionString + " ";
                    }
                    blankCnt = 0;
                }
                if (blankCnt === 0) {
                    newExpressionString = newExpressionString + c;
                    clag1 = c;
                    newExpLen++;
                }
            }
            ;
        }
        if (newExpressionString.length === 0)
            return;
        let lastPos = 0;
        let pos = 0;
        let tokenStr = "";
        let matchStatusPrev = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
        let matchStatus = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
        let kw = null;
        let sub = "";
        let kwStr = "";
        let precedingChar;
        let followingChar;
        let firstChar;
        do {
            {
                let numEnd = -1;
                firstChar = newExpressionString.charAt(pos);
                if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '+'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '-'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '.'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '0'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '1'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '2'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '3'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '4'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '5'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '6'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '7'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '8'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '9'.charCodeAt(0))) {
                    for (let i = pos; i < newExpressionString.length; i++) {
                        {
                            if (i > pos) {
                                c = newExpressionString.charAt(i);
                                if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '+'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '-'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '0'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '1'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '2'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '3'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '4'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '5'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '6'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '7'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '8'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '9'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != '.'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != 'e'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) != 'E'.charCodeAt(0)))
                                    break;
                            }
                            const str = newExpressionString.substring(pos, i + 1);
                            if (mXparserConstants_1.mXparserConstants.regexMatch(str, ParserSymbol_1.ParserSymbol.DECIMAL_REG_EXP_$LI$()))
                                numEnd = i;
                        }
                        ;
                    }
                }
                if (numEnd >= 0)
                    if (pos > 0) {
                        precedingChar = newExpressionString.charAt(pos - 1);
                        if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ' '.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ','.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ';'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '|'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '&'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '+'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '-'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '*'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '\\'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '/'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '('.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ')'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '='.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '>'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '<'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '~'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '^'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '#'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '%'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '@'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '!'.charCodeAt(0)))
                            numEnd = -1;
                    }
                if (numEnd >= 0)
                    if (numEnd < newExpressionString.length - 1) {
                        followingChar = newExpressionString.charAt(numEnd + 1);
                        if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ' '.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ','.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ';'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '|'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '&'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '+'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '-'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '*'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '\\'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '/'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '('.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ')'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '='.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '>'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '<'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '~'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '^'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '#'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '%'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '@'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '!'.charCodeAt(0)))
                            numEnd = -1;
                    }
                if (numEnd >= 0) {
                    if ((matchStatusPrev === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()) && (pos > 0)) {
                        tokenStr = newExpressionString.substring(lastPos, pos);
                        this.addToken(tokenStr, new KeyWord_1.KeyWord());
                    }
                    firstChar = newExpressionString.charAt(pos);
                    let leadingOp = true;
                    if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '-'.charCodeAt(0)) || ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '+'.charCodeAt(0))) {
                        if (this.initialTokens.size() > 0) {
                            const lastToken = this.initialTokens.get(this.initialTokens.size() - 1);
                            if (((lastToken.tokenTypeId === Operator_1.Operator.TYPE_ID) && (lastToken.tokenId !== Operator_1.Operator.FACT_ID) && (lastToken.tokenId !== Operator_1.Operator.PERC_ID)) || (lastToken.tokenTypeId === BinaryRelation_1.BinaryRelation.TYPE_ID) || (lastToken.tokenTypeId === BooleanOperator_1.BooleanOperator.TYPE_ID) || (lastToken.tokenTypeId === BitwiseOperator_1.BitwiseOperator.TYPE_ID) || ((lastToken.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (lastToken.tokenId === ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_ID)))
                                leadingOp = false;
                            else
                                leadingOp = true;
                        }
                        else
                            leadingOp = false;
                    }
                    else
                        leadingOp = false;
                    if (leadingOp === true) {
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '-'.charCodeAt(0))
                            this.addToken("-", this.keyWordsList.get(minusKwId));
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(firstChar) == '+'.charCodeAt(0))
                            this.addToken("+", this.keyWordsList.get(plusKwId));
                        pos++;
                    }
                    tokenStr = newExpressionString.substring(pos, numEnd + 1);
                    this.addToken(tokenStr, this.keyWordsList.get(numberKwId));
                    pos = numEnd + 1;
                    lastPos = pos;
                    matchStatus = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
                    matchStatusPrev = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
                }
                else {
                    let kwId = -1;
                    matchStatus = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
                    do {
                        {
                            kwId++;
                            kw = this.keyWordsList.get(kwId);
                            kwStr = kw.wordString;
                            if (pos + kwStr.length <= newExpressionString.length) {
                                sub = newExpressionString.substring(pos, pos + kwStr.length);
                                if (sub === kwStr)
                                    matchStatus = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
                                if (matchStatus === ExpressionConstants_1.ExpressionConstants.FOUND_$LI$()) {
                                    if ((kw.wordTypeId === ArgumentConstants_1.ArgumentConstants.TYPE_ID) || (kw.wordTypeId === RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE) || (kw.wordTypeId === Function1Arg_1.Function1Arg.TYPE_ID) || (kw.wordTypeId === Function2Arg_1.Function2Arg.TYPE_ID) || (kw.wordTypeId === Function3Arg_1.Function3Arg.TYPE_ID) || (kw.wordTypeId === FunctionVariadic_1.FunctionVariadic.TYPE_ID) || (kw.wordTypeId === ConstantValue_1.ConstantValue.TYPE_ID) || (kw.wordTypeId === Constant_1.Constant.TYPE_ID) || (kw.wordTypeId === RandomVariable_1.RandomVariable.TYPE_ID) || (kw.wordTypeId === Unit_1.Unit.TYPE_ID) || (kw.wordTypeId === FunctionConstants_1.FunctionConstants.TYPE_ID) || (kw.wordTypeId === CalculusOperator_1.CalculusOperator.TYPE_ID)) {
                                        if (pos > 0) {
                                            precedingChar = newExpressionString.charAt(pos - 1);
                                            if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ' '.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ','.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ';'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '|'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '&'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '+'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '-'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '*'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '\\'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '/'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '('.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != ')'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '='.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '>'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '<'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '~'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '^'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '#'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '%'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '@'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(precedingChar) != '!'.charCodeAt(0)))
                                                matchStatus = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
                                        }
                                        if ((matchStatus === ExpressionConstants_1.ExpressionConstants.FOUND_$LI$()) && (pos + kwStr.length < newExpressionString.length)) {
                                            followingChar = newExpressionString.charAt(pos + kwStr.length);
                                            if (((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ' '.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ','.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ';'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '|'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '&'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '+'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '-'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '*'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '\\'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '/'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '('.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != ')'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '='.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '>'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '<'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '~'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '^'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '#'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '%'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '@'.charCodeAt(0)) && ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(followingChar) != '!'.charCodeAt(0)))
                                                matchStatus = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
                                        }
                                    }
                                }
                            }
                        }
                    } while (((kwId < this.keyWordsList.size() - 1) && (matchStatus === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$())));
                    if (matchStatus === ExpressionConstants_1.ExpressionConstants.FOUND_$LI$()) {
                        if ((matchStatusPrev === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()) && (pos > 0)) {
                            tokenStr = newExpressionString.substring(lastPos, pos);
                            this.addToken(tokenStr, new KeyWord_1.KeyWord());
                        }
                        matchStatusPrev = ExpressionConstants_1.ExpressionConstants.FOUND_$LI$();
                        tokenStr = newExpressionString.substring(pos, pos + kwStr.length);
                        if (!((kw.wordTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (kw.wordId === ParserSymbol_1.ParserSymbol.BLANK_ID)))
                            this.addToken(tokenStr, kw);
                        lastPos = pos + kwStr.length;
                        pos = pos + kwStr.length;
                    }
                    else {
                        matchStatusPrev = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
                        if (pos < newExpressionString.length)
                            pos++;
                    }
                }
            }
        } while ((pos < newExpressionString.length));
        if (matchStatus === ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$()) {
            tokenStr = newExpressionString.substring(lastPos, pos);
            this.addToken(tokenStr, new KeyWord_1.KeyWord());
        }
        this.evaluateTokensLevels();
    }
    /**
     * Evaluates tokens levels
     * @private
     */
    /*private*/ evaluateTokensLevels() {
        let tokenLevel = 0;
        const tokenStack = (new j4ts_1.java.util.Stack());
        let precedingFunction = false;
        if (this.initialTokens.size() > 0)
            for (let tokenIndex = 0; tokenIndex < this.initialTokens.size(); tokenIndex++) {
                {
                    const token = this.initialTokens.get(tokenIndex);
                    if ((token.tokenTypeId === Function1Arg_1.Function1Arg.TYPE_ID) || (token.tokenTypeId === Function2Arg_1.Function2Arg.TYPE_ID) || (token.tokenTypeId === Function3Arg_1.Function3Arg.TYPE_ID) || (token.tokenTypeId === FunctionConstants_1.FunctionConstants.TYPE_ID) || (token.tokenTypeId === CalculusOperator_1.CalculusOperator.TYPE_ID) || (token.tokenTypeId === RecursiveArgument_1.RecursiveArgument.TYPE_ID_RECURSIVE) || (token.tokenTypeId === FunctionVariadic_1.FunctionVariadic.TYPE_ID)) {
                        tokenLevel++;
                        precedingFunction = true;
                    }
                    else if ((token.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (token.tokenId === ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_ID)) {
                        tokenLevel++;
                        const stackEl = new Miscellaneous_2.TokenStackElement();
                        stackEl.tokenId = token.tokenId;
                        stackEl.tokenIndex = tokenIndex;
                        stackEl.tokenLevel = tokenLevel;
                        stackEl.tokenTypeId = token.tokenTypeId;
                        stackEl.precedingFunction = precedingFunction;
                        tokenStack.push(stackEl);
                        precedingFunction = false;
                    }
                    else
                        precedingFunction = false;
                    token.tokenLevel = tokenLevel;
                    if ((token.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (token.tokenId === ParserSymbol_1.ParserSymbol.RIGHT_PARENTHESES_ID)) {
                        tokenLevel--;
                        if (!tokenStack.isEmpty()) {
                            const stackEl = tokenStack.pop();
                            if (stackEl.precedingFunction === true)
                                tokenLevel--;
                        }
                    }
                }
                ;
            }
    }
    /**
     * copy initial tokens lito to tokens list
     * @private
     */
    /*private*/ copyInitialTokens() {
        this.tokensList = (new j4ts_1.java.util.ArrayList());
        for (let index167 = this.initialTokens.iterator(); index167.hasNext();) {
            let token = index167.next();
            {
                this.tokensList.add(/* clone */ ((o) => { if (o.clone != undefined) {
                    return o.clone();
                }
                else {
                    let clone = Object.create(o);
                    for (let p in o) {
                        if (o.hasOwnProperty(p))
                            clone[p] = o[p];
                    }
                    return clone;
                } })(token));
            }
        }
    }
    /**
     * Tokenizes expression string and returns tokens list,
     * including: string, type, level.
     *
     * @return {*} Copy of initial tokens.
     *
     * @see Token
     * @see mXparser#consolePrintTokens(List)
     */
    getCopyOfInitialTokens() {
        const tokensListCopy = (new j4ts_1.java.util.ArrayList());
        if (this.expressionString.length === 0)
            return tokensListCopy;
        this.tokenizeExpressionString();
        if (this.initialTokens.size() === 0)
            return tokensListCopy;
        let token;
        for (let i = 0; i < this.initialTokens.size(); i++) {
            {
                token = this.initialTokens.get(i);
                if (token.tokenTypeId === Token_1.Token.NOT_MATCHED_$LI$()) {
                    if (mXparserConstants_1.mXparserConstants.regexMatch(token.tokenStr, ParserSymbol_1.ParserSymbol.unitOnlyTokenRegExp_$LI$())) {
                        token.looksLike = this.UNITCONST;
                    }
                    else if (mXparserConstants_1.mXparserConstants.regexMatch(token.tokenStr, ParserSymbol_1.ParserSymbol.nameOnlyTokenRegExp)) {
                        token.looksLike = this.ARGUMENT;
                        if (i < this.initialTokens.size() - 1) {
                            const tokenNext = this.initialTokens.get(i + 1);
                            if ((tokenNext.tokenTypeId === ParserSymbol_1.ParserSymbol.TYPE_ID) && (tokenNext.tokenId === ParserSymbol_1.ParserSymbol.LEFT_PARENTHESES_ID))
                                token.looksLike = this.FUNCTION;
                        }
                    }
                    else {
                        token.looksLike = this.ERROR;
                    }
                }
                tokensListCopy.add(/* clone */ ((o) => { if (o.clone != undefined) {
                    return o.clone();
                }
                else {
                    let clone = Object.create(o);
                    for (let p in o) {
                        if (o.hasOwnProperty(p))
                            clone[p] = o[p];
                    }
                    return clone;
                } })(token));
            }
            ;
        }
        return tokensListCopy;
    }
    /**
     * Returns missing user defined arguments names, i.e.
     * sin(x) + cos(y) where x and y are not defined
     * function will return x and y.
     *
     * @return {java.lang.String[]} Array of missing user defined arguments names
     * - distinct strings.
     */
    getMissingUserDefinedArguments() {
        const tokens = this.getCopyOfInitialTokens();
        const missingArguments = (new j4ts_1.java.util.ArrayList());
        for (let index168 = tokens.iterator(); index168.hasNext();) {
            let t = index168.next();
            if (t.looksLike === this.ARGUMENT)
                if (!missingArguments.contains(t.tokenStr))
                    missingArguments.add(t.tokenStr);
        }
        const n = missingArguments.size();
        const missArgs = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(n);
        for (let i = 0; i < n; i++) {
            missArgs[i] = missingArguments.get(i);
        }
        return missArgs;
    }
    /**
     * Returns missing user defined units names, i.e.
     * 2*[w] + [q] where [w] and [q] are not defined
     * function will return [w] and [q].
     *
     * @return {java.lang.String[]} Array of missing user defined units names
     * - distinct strings.
     */
    getMissingUserDefinedUnits() {
        const tokens = this.getCopyOfInitialTokens();
        const missingUnits = (new j4ts_1.java.util.ArrayList());
        for (let index169 = tokens.iterator(); index169.hasNext();) {
            let t = index169.next();
            if (t.looksLike === this.UNITCONST)
                if (!missingUnits.contains(t.tokenStr))
                    missingUnits.add(t.tokenStr);
        }
        const n = missingUnits.size();
        const missUnits = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(n);
        for (let i = 0; i < n; i++) {
            missUnits[i] = missingUnits.get(i);
        }
        return missUnits;
    }
    /**
     * Returns missing user defined functions names, i.e.
     * sin(x) + fun(x,y) where fun is not defined
     * function will return fun.
     *
     * @return {java.lang.String[]} Array of missing user defined functions names
     * - distinct strings.
     */
    getMissingUserDefinedFunctions() {
        const tokens = this.getCopyOfInitialTokens();
        const missingFunctions = (new j4ts_1.java.util.ArrayList());
        for (let index170 = tokens.iterator(); index170.hasNext();) {
            let t = index170.next();
            if (t.looksLike === this.FUNCTION)
                if (!missingFunctions.contains(t.tokenStr))
                    missingFunctions.add(t.tokenStr);
        }
        const n = missingFunctions.size();
        const missFun = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(n);
        for (let i = 0; i < n; i++) {
            missFun[i] = missingFunctions.get(i);
        }
        return missFun;
    }
    /**
     * Gets initial tokens and returns copied list
     *
     * @see Function
     * @return {*}
     */
    getInitialTokens() {
        return this.initialTokens;
    }
    /*private*/ static getLeftSpaces(maxStr, str) {
        let spc = "";
        for (let i = 0; i < maxStr.length - str.length; i++) {
            spc = spc + " ";
        }
        return spc + str;
    }
    /*private*/ static getRightSpaces(maxStr, str) {
        let spc = "";
        for (let i = 0; i < maxStr.length - str.length; i++) {
            spc = " " + spc;
        }
        return str + spc;
    }
    /**
     * Shows parsing (verbose mode purposes).
     * @param {number} lPos
     * @param {number} rPos
     * @private
     */
    /*private*/ showParsing(lPos, rPos) {
        mXparserConstants_1.mXparserConstants.consolePrint(" ---> ");
        for (let i = lPos; i <= rPos; i++) {
            {
                const token = this.tokensList.get(i);
                if (token.tokenTypeId === ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID)
                    mXparserConstants_1.mXparserConstants.consolePrint(token.tokenValue + " ");
                else
                    mXparserConstants_1.mXparserConstants.consolePrint(token.tokenStr + " ");
            }
            ;
        }
        mXparserConstants_1.mXparserConstants.consolePrint(" ... ");
    }
    /**
     * shows known keywords
     */
    showKeyWords() {
        const keyWordsNumber = this.keyWordsList.size();
        const maxStr = "KEY_WORD";
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object("KEY WORDS:");
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object(" -------------------------------------------");
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object("|      IDX | KEY_WORD |       ID |  TYPE_ID |");
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object(" -------------------------------------------");
        for (let keyWordIndex = 0; keyWordIndex < keyWordsNumber; keyWordIndex++) {
            {
                const keyWord = this.keyWordsList.get(keyWordIndex);
                const idxStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (keyWordIndex)));
                const wordStr = Expression.getLeftSpaces(maxStr, keyWord.wordString);
                const idStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (keyWord.wordId)));
                const typeIdStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (keyWord.wordTypeId)));
                mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object("| " + idxStr + " | " + wordStr + " | " + idStr + " | " + typeIdStr + " |");
            }
            ;
        }
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object(" -------------------------------------------");
    }
    getHelp$() {
        return this.getHelp$java_lang_String("");
    }
    getHelp$java_lang_String(word) {
        this.keyWordsList = (new j4ts_1.java.util.ArrayList());
        let helpStr = "Help content: \n\n";
        this.addParserKeyWords();
        this.validateParserKeyWords();
        if (this.parserKeyWordsOnly === false) {
            this.addArgumentsKeyWords();
            this.addFunctionsKeyWords();
            this.addConstantsKeyWords();
        }
        helpStr = helpStr + Expression.getLeftSpaces("12345", "#") + "  " + Expression.getRightSpaces("01234567890123456789", "key word") + Expression.getRightSpaces("                        ", "type") + Expression.getRightSpaces("0123456789012345678901234567890123456789012345", "syntax") + Expression.getRightSpaces("012345", "since") + "description\n";
        helpStr = helpStr + Expression.getLeftSpaces("12345", "-") + "  " + Expression.getRightSpaces("01234567890123456789", "--------") + Expression.getRightSpaces("                        ", "----") + Expression.getRightSpaces("0123456789012345678901234567890123456789012345", "------") + Expression.getRightSpaces("012345", "-----") + "-----------\n";
        j4ts_1.java.util.Collections.sort(this.keyWordsList, ((funcInst) => { if (typeof funcInst == 'function') {
            return funcInst;
        } return (arg0, arg1) => (funcInst['compare'] ? funcInst['compare'] : funcInst).call(funcInst, arg0, arg1); })(new Miscellaneous_1.KwTypeComparator()));
        const keyWordsNumber = this.keyWordsList.size();
        let type;
        let kw;
        let line;
        for (let keyWordIndex = 0; keyWordIndex < keyWordsNumber; keyWordIndex++) {
            {
                const keyWord = this.keyWordsList.get(keyWordIndex);
                type = "";
                kw = keyWord.wordString;
                switch ((keyWord.wordTypeId)) {
                    case ParserSymbol_1.ParserSymbol.TYPE_ID:
                        type = ParserSymbol_1.ParserSymbol.TYPE_DESC;
                        break;
                    case ParserSymbol_1.ParserSymbol.NUMBER_TYPE_ID:
                        type = "number";
                        kw = "_number_";
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
                line = Expression.getLeftSpaces("12345", /* toString */ ('' + (keyWordIndex + 1))) + ". " + Expression.getRightSpaces("01234567890123456789", kw) + Expression.getRightSpaces("                        ", "<" + type + ">") + Expression.getRightSpaces("0123456789012345678901234567890123456789012345", keyWord.syntax) + Expression.getRightSpaces("012345", keyWord.since) + keyWord.description + "\n";
                if ((line.toLowerCase().indexOf(word.toLowerCase()) >= 0)) {
                    helpStr = helpStr + line;
                }
            }
            ;
        }
        return helpStr;
    }
    /**
     * Searching help content.
     *
     * @param      {string} word                searching key word
     *
     * @return     {string} The help content.
     */
    getHelp(word) {
        if (((typeof word === 'string') || word === null)) {
            return this.getHelp$java_lang_String(word);
        }
        else if (word === undefined) {
            return this.getHelp$();
        }
        else
            throw new Error('invalid overload');
    }
    getKeyWords$() {
        return this.getKeyWords$java_lang_String("");
    }
    getKeyWords$java_lang_String(query) {
        this.keyWordsList = (new j4ts_1.java.util.ArrayList());
        const kwyWordsToReturn = (new j4ts_1.java.util.ArrayList());
        this.addParserKeyWords();
        this.validateParserKeyWords();
        if (this.parserKeyWordsOnly === false) {
            this.addArgumentsKeyWords();
            this.addFunctionsKeyWords();
            this.addConstantsKeyWords();
        }
        j4ts_1.java.util.Collections.sort(this.keyWordsList, ((funcInst) => { if (typeof funcInst == 'function') {
            return funcInst;
        } return (arg0, arg1) => (funcInst['compare'] ? funcInst['compare'] : funcInst).call(funcInst, arg0, arg1); })(new Miscellaneous_1.KwTypeComparator()));
        let line;
        for (let index171 = this.keyWordsList.iterator(); index171.hasNext();) {
            let kw = index171.next();
            {
                line = "str=" + kw.wordString + " desc=" + kw.description + " syn=" + kw.syntax + " sin=" + kw.since + " wid=" + kw.wordId + " tid=" + kw.wordTypeId;
                if ((line.toLowerCase().indexOf(query.toLowerCase()) >= 0))
                    kwyWordsToReturn.add(kw);
            }
        }
        return kwyWordsToReturn;
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
     * @see Expression#getHelp(String)
     */
    getKeyWords(query) {
        if (((typeof query === 'string') || query === null)) {
            return this.getKeyWords$java_lang_String(query);
        }
        else if (query === undefined) {
            return this.getKeyWords$();
        }
        else
            throw new Error('invalid overload');
    }
    showTokens() {
        Expression.showTokens(this.tokensList);
    }
    static showTokens(tokensList) {
        const maxStr = "TokenTypeId";
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object(" --------------------");
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object("| Expression tokens: |");
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object(" ---------------------------------------------------------------------------------------------------------------");
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object("|    TokenIdx |       Token |        KeyW |     TokenId | TokenTypeId |  TokenLevel |  TokenValue |   LooksLike |");
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object(" ---------------------------------------------------------------------------------------------------------------");
        if (tokensList == null) {
            mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object("NULL tokens list");
            return;
        }
        const tokensNumber = tokensList.size();
        for (let tokenIndex = 0; tokenIndex < tokensNumber; tokenIndex++) {
            {
                const tokenIndexStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (tokenIndex)));
                const tokenStr = Expression.getLeftSpaces(maxStr, tokensList.get(tokenIndex).tokenStr);
                const keyWordStr = Expression.getLeftSpaces(maxStr, tokensList.get(tokenIndex).keyWord);
                const tokenIdStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (tokensList.get(tokenIndex).tokenId)));
                const tokenTypeIdStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (tokensList.get(tokenIndex).tokenTypeId)));
                const tokenLevelStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (tokensList.get(tokenIndex).tokenLevel)));
                const tokenValueStr = Expression.getLeftSpaces(maxStr, /* toString */ ('' + (tokensList.get(tokenIndex).tokenValue)));
                const tokenLooksLikeStr = Expression.getLeftSpaces(maxStr, tokensList.get(tokenIndex).looksLike);
                mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object("| " + tokenIndexStr + " | " + tokenStr + " | " + keyWordStr + " | " + tokenIdStr + " | " + tokenTypeIdStr + " | " + tokenLevelStr + " | " + tokenValueStr + " | " + tokenLooksLikeStr + " |");
            }
            ;
        }
        mXparserConstants_1.mXparserConstants.consolePrintln$java_lang_Object(" ---------------------------------------------------------------------------------------------------------------");
    }
    /**
     * shows initial tokens
     */
    showInitialTokens() {
        Expression.showTokens(this.initialTokens);
    }
    /*private*/ showArguments() {
        for (let index172 = this.argumentsList.iterator(); index172.hasNext();) {
            let a = index172.next();
            {
                const vMode = a.getVerboseMode();
                a.setSilentMode();
                this.printSystemInfo(a.getArgumentName() + " = " + a.getArgumentValue() + "\n", ExpressionConstants_1.ExpressionConstants.WITH_EXP_STR);
                if (vMode === true)
                    a.setVerboseMode();
            }
        }
    }
    /**
     *
     * @param {string} info
     * @param {boolean} withExpressionString
     * @private
     */
    /*private*/ printSystemInfo(info, withExpressionString) {
        if (withExpressionString)
            mXparserConstants_1.mXparserConstants.consolePrint("[" + this.description + "][" + this.expressionString + "] " + info);
        else
            mXparserConstants_1.mXparserConstants.consolePrint(info);
    }
    /**
     * Expression cloning.
     * @return {Expression}
     */
    clone() {
        const newExp = new Expression(this);
        if ((this.initialTokens != null) && (this.initialTokens.size() > 0))
            newExp.initialTokens = this.createInitialTokens(0, this.initialTokens.size() - 1, this.initialTokens);
        return newExp;
    }
    static create() {
        return Expression.createWithExpression(null);
    }
    static createWithExpression(expression) {
        return new Expression(expression !== null ? expression.split(' ').join('') : expression, null, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    static createWithExpressionAndArgumentValues(expression, ...argumentValues) {
        let retVal = Expression.create();
        retVal.setExpressionString(expression.split(' ').join(''));
        retVal.addArguments(...argumentValues);
        return retVal;
    }
}
exports.Expression = Expression;
Expression.DISABLE_ROUNDING = true;
Expression.KEEP_ROUNDING_SETTINGS = false;
Expression["__class"] = "org.mariuszgromada.math.mxparser.Expression";
var __Function = Function_1.Function;
//# sourceMappingURL=Expression.js.map