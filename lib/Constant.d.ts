import { PrimitiveElement } from './PrimitiveElement';
import { Expression } from './Expression';
import { java } from 'j4ts/j4ts';
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
export declare class Constant extends PrimitiveElement {
    /**
     * When constant could not be found
     */
    static NOT_FOUND: number;
    static NOT_FOUND_$LI$(): number;
    /**
     * Type identifier for constants
     */
    static TYPE_ID: number;
    static TYPE_DESC: string;
    /**
     * Status of the Expression syntax
     */
    static NO_SYNTAX_ERRORS: boolean;
    static NO_SYNTAX_ERRORS_$LI$(): boolean;
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN: boolean;
    static SYNTAX_ERROR_OR_STATUS_UNKNOWN_$LI$(): boolean;
    static NO_SYNTAX_ERROR_MSG: string;
    /**
     * Name of the constant
     */
    constantName: string;
    /**
     * COnstant value
     */
    constantValue: number;
    /**
     * Constant description
     */
    description: string;
    /**
     * Dependent expression list
     */
    relatedExpressionsList: java.util.List<Expression>;
    /**
     * Status of the expression syntax
     *
     * Please referet to the:
     * - NO_SYNTAX_ERRORS
     * - SYNTAX_ERROR_OR_STATUS_UNKNOWN
     */
    syntaxStatus: boolean;
    /**
     * Message after checking the syntax
     */
    errorMessage: string;
    constructor(constantName?: any, constantValue?: any, description?: any);
    /**
     * Gets constant name
     *
     * @return     {string} the constant name as string.
     */
    getConstantName(): string;
    /**
     * Sets constant name. If constant is associated with any expression
     * then this operation will set modified flag to each related expression.
     *
     * @param      {string} constantName        the constant name
     */
    setConstantName(constantName: string): void;
    /**
     * Sets constant value
     * @param {number} constantValue   constant value
     */
    setConstantValue(constantValue: number): void;
    /**
     * Gets constant value.
     *
     * @return     {number} constant value as double
     */
    getConstantValue(): number;
    /**
     * Gets constant description.
     *
     * @return     {string} constant description as string.
     */
    getDescription(): string;
    /**
     * Sets constant description.
     *
     * @param      {string} description         the constant description
     */
    setDescription(description: string): void;
    /**
     * Method return error message after
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage(): string;
    /**
     * Gets syntax status of the expression.
     *
     * @return     {boolean} Constant.NO_SYNTAX_ERRORS if there are no syntax errors,
     * Const.SYNTAX_ERROR_OR_STATUS_UNKNOWN when syntax error was found or
     * syntax status is unknown
     */
    getSyntaxStatus(): boolean;
    /**
     * Adds related expression.
     *
     * @param      {Expression} expression          the related expression.
     */
    addRelatedExpression(expression: Expression): void;
    /**
     * Removes related expression.
     *
     * @param      {Expression} expression          the related expression.
     */
    removeRelatedExpression(expression: Expression): void;
    /**
     * Sets expression modified flag to each related expression.
     */
    setExpressionModifiedFlags(): void;
}
