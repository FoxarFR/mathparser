"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = void 0;
const ParserSymbol_1 = require("./parsertokens/ParserSymbol");
const PrimitiveElement_1 = require("./PrimitiveElement");
const Expression_1 = require("./Expression");
const ExpressionConstants_1 = require("./ExpressionConstants");
const j4ts_1 = require("j4ts/j4ts");
const Miscellaneous_1 = require("./Miscellaneous");
const mXparserConstants_1 = require("./mXparserConstants");
/**
 * Constructor - creates constant with a given name and given value.
 * Additionally description is being set.
 *
 * @param      {string} constantName        the constant name
 * @param      {number} constantValue       the constant value
 * @param      {string} description         the constant description
 * @class
 * @extends PrimitiveElement
 */
class Constant extends PrimitiveElement_1.PrimitiveElement {
    static NOT_FOUND_$LI$() { if (Constant.NOT_FOUND == null) {
        Constant.NOT_FOUND = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
    } return Constant.NOT_FOUND; }
    static NO_SYNTAX_ERRORS_$LI$() { if (Constant.NO_SYNTAX_ERRORS == null) {
        Constant.NO_SYNTAX_ERRORS = ExpressionConstants_1.ExpressionConstants.NO_SYNTAX_ERRORS;
    } return Constant.NO_SYNTAX_ERRORS; }
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$() { if (Constant.SYNTAX_ERROR_OR_STATUS_UNKNOWN == null) {
        Constant.SYNTAX_ERROR_OR_STATUS_UNKNOWN = ExpressionConstants_1.ExpressionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN;
    } return Constant.SYNTAX_ERROR_OR_STATUS_UNKNOWN; }
    constructor(constantName, constantValue, description) {
        if (((typeof constantName === 'string') || constantName === null) && ((typeof constantValue === 'number') || constantValue === null) && ((typeof description === 'string') || description === null)) {
            let __args = arguments;
            super(Constant.TYPE_ID);
            if (this.constantName === undefined) {
                this.constantName = null;
            }
            if (this.constantValue === undefined) {
                this.constantValue = 0;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            this.relatedExpressionsList = (new j4ts_1.java.util.ArrayList());
            if (mXparserConstants_1.mXparserConstants.regexMatch(constantName, ParserSymbol_1.ParserSymbol.nameOnlyTokenOptBracketsRegExp_$LI$())) {
                this.constantName = constantName;
                this.constantValue = constantValue;
                this.description = description;
                this.syntaxStatus = Constant.NO_SYNTAX_ERRORS_$LI$();
                this.errorMessage = Constant.NO_SYNTAX_ERROR_MSG;
            }
            else {
                this.syntaxStatus = Constant.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$();
                this.errorMessage = "[" + constantName + "] --> invalid constant name, pattern not mathes: " + ParserSymbol_1.ParserSymbol.nameOnlyTokenOptBracketsRegExp_$LI$();
            }
        }
        else if (((typeof constantName === 'string') || constantName === null) && ((constantValue != null && constantValue instanceof Array && (constantValue.length == 0 || constantValue[0] == null || (constantValue[0] != null && constantValue[0] instanceof PrimitiveElement_1.PrimitiveElement))) || constantValue === null) && description === undefined) {
            let __args = arguments;
            let constantDefinitionString = __args[0];
            let elements = __args[1];
            super(Constant.TYPE_ID);
            if (this.constantName === undefined) {
                this.constantName = null;
            }
            if (this.constantValue === undefined) {
                this.constantValue = 0;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            this.description = "";
            this.syntaxStatus = Constant.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$();
            this.relatedExpressionsList = (new j4ts_1.java.util.ArrayList());
            if (mXparserConstants_1.mXparserConstants.regexMatch(constantDefinitionString, ParserSymbol_1.ParserSymbol.constUnitgDefStrRegExp_$LI$())) {
                const headEqBody = new Miscellaneous_1.HeadEqBody(constantDefinitionString);
                this.constantName = headEqBody.headTokens.get(0).tokenStr;
                const bodyExpression = new (__Function.prototype.bind.apply(Expression_1.Expression, [null, headEqBody.bodyStr].concat(elements)));
                this.constantValue = bodyExpression.calculate();
                this.syntaxStatus = bodyExpression.getSyntaxStatus();
                this.errorMessage = bodyExpression.getErrorMessage();
            }
            else
                this.errorMessage = "[" + constantDefinitionString + "] --> pattern not mathes: " + ParserSymbol_1.ParserSymbol.constUnitgDefStrRegExp_$LI$();
        }
        else if (((typeof constantName === 'string') || constantName === null) && ((typeof constantValue === 'number') || constantValue === null) && description === undefined) {
            let __args = arguments;
            super(Constant.TYPE_ID);
            if (this.constantName === undefined) {
                this.constantName = null;
            }
            if (this.constantValue === undefined) {
                this.constantValue = 0;
            }
            if (this.description === undefined) {
                this.description = null;
            }
            if (this.relatedExpressionsList === undefined) {
                this.relatedExpressionsList = null;
            }
            if (this.syntaxStatus === undefined) {
                this.syntaxStatus = false;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            this.relatedExpressionsList = (new j4ts_1.java.util.ArrayList());
            if (mXparserConstants_1.mXparserConstants.regexMatch(constantName, ParserSymbol_1.ParserSymbol.nameOnlyTokenOptBracketsRegExp_$LI$())) {
                this.constantName = constantName;
                this.constantValue = constantValue;
                this.description = "";
                this.syntaxStatus = Constant.NO_SYNTAX_ERRORS_$LI$();
                this.errorMessage = Constant.NO_SYNTAX_ERROR_MSG;
            }
            else {
                this.syntaxStatus = Constant.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$();
                this.errorMessage = "[" + constantName + "] --> invalid constant name, pattern not mathes: " + ParserSymbol_1.ParserSymbol.nameOnlyTokenOptBracketsRegExp_$LI$();
            }
        }
        else
            throw new Error('invalid overload');
    }
    /**
     * Gets constant name
     *
     * @return     {string} the constant name as string.
     */
    getConstantName() {
        return this.constantName;
    }
    /**
     * Sets constant name. If constant is associated with any expression
     * then this operation will set modified flag to each related expression.
     *
     * @param      {string} constantName        the constant name
     */
    setConstantName(constantName) {
        if (mXparserConstants_1.mXparserConstants.regexMatch(constantName, ParserSymbol_1.ParserSymbol.nameOnlyTokenOptBracketsRegExp_$LI$())) {
            this.constantName = constantName;
            this.setExpressionModifiedFlags();
        }
        else {
            this.syntaxStatus = Constant.SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$();
            this.errorMessage = "[" + constantName + "] --> invalid constant name, pattern not mathes: " + ParserSymbol_1.ParserSymbol.nameOnlyTokenOptBracketsRegExp_$LI$();
        }
    }
    /**
     * Sets constant value
     * @param {number} constantValue   constant value
     */
    setConstantValue(constantValue) {
        this.constantValue = constantValue;
    }
    /**
     * Gets constant value.
     *
     * @return     {number} constant value as double
     */
    getConstantValue() {
        return this.constantValue;
    }
    /**
     * Gets constant description.
     *
     * @return     {string} constant description as string.
     */
    getDescription() {
        return this.description;
    }
    /**
     * Sets constant description.
     *
     * @param      {string} description         the constant description
     */
    setDescription(description) {
        this.description = description;
    }
    /**
     * Method return error message after
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage() {
        return this.errorMessage;
    }
    /**
     * Gets syntax status of the expression.
     *
     * @return     {boolean} Constant.NO_SYNTAX_ERRORS if there are no syntax errors,
     * Const.SYNTAX_ERROR_OR_STATUS_UNKNOWN when syntax error was found or
     * syntax status is unknown
     */
    getSyntaxStatus() {
        return this.syntaxStatus;
    }
    /**
     * Adds related expression.
     *
     * @param      {Expression} expression          the related expression.
     */
    addRelatedExpression(expression) {
        if (expression != null)
            if (!this.relatedExpressionsList.contains(expression))
                this.relatedExpressionsList.add(expression);
    }
    /**
     * Removes related expression.
     *
     * @param      {Expression} expression          the related expression.
     */
    removeRelatedExpression(expression) {
        if (expression != null)
            this.relatedExpressionsList.remove(expression);
    }
    /**
     * Sets expression modified flag to each related expression.
     */
    setExpressionModifiedFlags() {
        for (let index121 = this.relatedExpressionsList.iterator(); index121.hasNext();) {
            let e = index121.next();
            e.setExpressionModifiedFlag();
        }
    }
}
exports.Constant = Constant;
/**
 * Type identifier for constants
 */
Constant.TYPE_ID = 104;
Constant.TYPE_DESC = "User defined constant";
Constant.NO_SYNTAX_ERROR_MSG = "Constant - no syntax errors.";
Constant["__class"] = "org.mariuszgromada.math.mxparser.Constant";
var __Function = Function;
//# sourceMappingURL=Constant.js.map