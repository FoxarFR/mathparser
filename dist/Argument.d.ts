import { PrimitiveElement } from './PrimitiveElement';
import { Expression } from './Expression';
import { java } from 'j4ts/j4ts';
import { Function } from './Function';
import { Constant } from './Constant';
import { ArgumentExtension } from './ArgumentExtension';
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
export declare class Argument extends PrimitiveElement {
    /**
     * Argument with body based on the extended code.
     *
     * @see ArgumentExtension
     * @see Argument#getArgumentBodyType()
     */
    static BODY_EXTENDED: number;
    static createArgumentWithExpression(argumentExpression: string): Argument;
    static createArgumentWithName(argumentName: string): Argument;
    static createArgumentWithNameAndValue(argumentName: string, argumentValue: number): Argument;
    private static createArgumentWithExpressionArgumentAndValue;
    /**
     * Argument body type.
     *
     * @see Argument#BODY_RUNTIME
     * @see Argument#BODY_EXTENDED
     * @see Argument#getArgumentBodyType()
     */
    argumentBodyType: number;
    /**
     * Argument extension (body based in code)
     *
     * @see ArgumentExtension
     * @see Argument#Argument(String, ArgumentExtension)
     */
    argumentExtension: ArgumentExtension;
    /**
     * Description of the argument.
     */
    description: string;
    /**
     * Argument expression for dependent and recursive
     * arguments.
     */
    argumentExpression: Expression;
    /**
     * Argument name (x, y, arg1, my_argument, etc...)
     */
    argumentName: string;
    /**
     * Argument type (free, dependent)
     */
    argumentType: number;
    /**
     * Argument value (for free arguments).
     */
    argumentValue: number;
    /**
     * Index argument.
     *
     * @see RecursiveArgument
     */
    n: Argument;
    constructor(argumentName?: any, argumentExpressionString?: any, ...elements: any[]);
    /**
     * Sets argument description.
     *
     * @param      {string} description         the argument description.
     */
    setDescription(description: string): void;
    /**
     * Gets argument description.
     *
     * @return     {string} The argument description string.
     */
    getDescription(): string;
    /**
     * Enables argument verbose mode
     */
    setVerboseMode(): void;
    /**
     * Disables argument verbose mode (sets default silent mode)
     */
    setSilentMode(): void;
    /**
     * Returns verbose mode status
     *
     * @return     {boolean} true if verbose mode is on,
     * otherwise returns false.
     */
    getVerboseMode(): boolean;
    /**
     * Gets recursive mode status
     *
     * @return      {boolean} true if recursive mode is enabled,
     * otherwise returns false
     */
    getRecursiveMode(): boolean;
    /**
     * Gets computing time
     *
     * @return     {number} Computing time in seconds.
     */
    getComputingTime(): number;
    /**
     * Sets (modifies) argument name.
     * Each expression / function / dependent argument associated
     * with this argument will be marked as modified
     * (requires new syntax checking).
     *
     * @param      {string} argumentName        the argument name
     */
    setArgumentName(argumentName: string): void;
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
    setArgumentExpressionString(argumentExpressionString: string): void;
    /**
     * Gets argument name
     *
     * @return     {string} the argument name as string
     */
    getArgumentName(): string;
    /**
     * Gets argument expression string
     *
     * @return {string} the argument expression string
     */
    getArgumentExpressionString(): string;
    /**
     * Gets argument type
     *
     * @return     {number} Argument type: ArgumentConstants.FREE_ARGUMENT,
     * ArgumentConstants.DEPENDENT_ARGUMENT,
     * ArgumentConstants.RECURSIVE_ARGUMENT
     */
    getArgumentType(): number;
    /**
     * Sets argument value, if DEPENDENT_ARGUMENT then argument type
     * is set to FREE_ARGUMENT.
     * If BODY_EXTENDED argument the BODY_RUNTIME argument is set.
     *
     * @param  {number} argumentValue       the value of argument
     */
    setArgumentValue(argumentValue: number): void;
    /**
     * Returns argument body type: {@link Argument#BODY_RUNTIME} {@link Argument#BODY_EXTENDED}
     * @return {number} Returns argument body type: {@link Argument#BODY_RUNTIME} {@link Argument#BODY_EXTENDED}
     */
    getArgumentBodyType(): number;
    /**
     * Checks argument syntax
     *
     * @return    {boolean} syntax status: ArgumentConstants.NO_SYNTAX_ERRORS,
     * ArgumentConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN
     */
    checkSyntax(): boolean;
    /**
     * Returns error message after checking the syntax
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage(): string;
    /**
     * Gets argument value.
     *
     * @return     {number} direct argument value for free argument,
     * otherwise returns calculated argument value
     * based on the argument expression.
     */
    getArgumentValue(): number;
    /**
     * Adds user defined elements (such as: Arguments, Constants, Functions)
     * to the argument expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic - comma separated) of types: Argument, Constant, Function
     *
     * @see PrimitiveElement
     */
    addDefinitions(...elements: PrimitiveElement[]): void;
    /**
     * Removes user defined elements (such as: Arguments, Constants, Functions)
     * from the argument expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic - comma separated) of types: Argument, Constant, Function
     *
     * @see PrimitiveElement
     */
    removeDefinitions(...elements: PrimitiveElement[]): void;
    /**
     * Adds arguments (variadic) to the argument expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Argument[]} arguments           the arguments list
     * (comma separated list)
     * @see        Argument
     * @see        RecursiveArgument
     */
    addArguments(...__arguments: Argument[]): void;
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
    defineArguments(...argumentsNames: string[]): void;
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
    defineArgument(argumentName: string, argumentValue: number): void;
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
    getArgumentIndex(argumentName: string): number;
    getArgument$java_lang_String(argumentName: string): Argument;
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
    getArgument(argumentName?: any): any;
    getArgument$int(argumentIndex: number): Argument;
    /**
     * Gets number of arguments associated with the argument expression.
     *
     * @return     {number} The number of arguments (int &gt;= 0)
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgumentsNumber(): number;
    removeArguments$java_lang_String_A(...argumentsNames: string[]): void;
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
    removeArguments(...argumentsNames: any[]): any;
    removeArguments$org_mariuszgromada_math_mxparser_Argument_A(...__arguments: Argument[]): void;
    /**
     * Removes all arguments associated with the argument expression.
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    removeAllArguments(): void;
    addConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants: Constant[]): void;
    /**
     * Adds constants (variadic parameters) to the argument expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Constant[]} constants           the constants
     * (comma separated list)
     *
     * @see        Constant
     */
    addConstants(...constants: any[]): any;
    addConstants$java_util_List(constantsList: java.util.List<Constant>): void;
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
    defineConstant(constantName: string, constantValue: number): void;
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
    getConstantIndex(constantName: string): number;
    getConstant$java_lang_String(constantName: string): Constant;
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
    getConstant(constantName?: any): any;
    getConstant$int(constantIndex: number): Constant;
    /**
     * Gets number of constants associated with the argument expression.
     *
     * @return     {number} number of constants (int &gt;= 0)
     *
     * @see        Constant
     */
    getConstantsNumber(): number;
    removeConstants$java_lang_String_A(...constantsNames: string[]): void;
    /**
     * Removes first occurrences of the constants
     * associated with the argument expression.
     *
     * @param      {java.lang.String[]} constantsNames      the constants names (variadic parameters)
     * comma separated list
     *
     * @see        Constant
     */
    removeConstants(...constantsNames: any[]): any;
    removeConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants: Constant[]): void;
    /**
     * Removes all constants
     * associated with the argument expression
     *
     * @see        Constant
     */
    removeAllConstants(): void;
    /**
     * Adds functions (variadic parameters) to the argument expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Function[]} functions           the functions
     * (variadic parameters) comma separated list
     *
     * @see        Function
     */
    addFunctions(...functions: Function[]): void;
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
    defineFunction(functionName: string, functionExpressionString: string, ...argumentsNames: string[]): void;
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
    getFunctionIndex(functionName: string): number;
    getFunction$java_lang_String(functionName: string): Function;
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
    getFunction(functionName?: any): any;
    getFunction$int(functionIndex: number): Function;
    /**
     * Gets number of functions associated with the argument expression.
     *
     * @return     {number} number of functions (int &gt;= 0)
     *
     * @see        Function
     */
    getFunctionsNumber(): number;
    removeFunctions$java_lang_String_A(...functionsNames: string[]): void;
    /**
     * Removes first occurrences of the functions
     * associated with the argument expression.
     *
     * @param      {java.lang.String[]} functionsNames      the functions names (variadic parameters)
     * comma separated list
     *
     * @see        Function
     */
    removeFunctions(...functionsNames: any[]): any;
    removeFunctions$org_mariuszgromada_math_mxparser_Function_A(...functions: Function[]): void;
    /**
     * Removes all functions
     * associated with the argument expression.
     *
     * @see        Function
     */
    removeAllFunctions(): void;
    /**
     * Adds related expression to the argumentExpression
     *
     * @param      {Expression} expression          the related expression
     * @see        Expression
     */
    addRelatedExpression(expression: Expression): void;
    /**
     * Adds related expression form the argumentExpression
     *
     * @param      {Expression} expression          related expression
     *
     * @see        Expression
     */
    removeRelatedExpression(expression: Expression): void;
    /**
     * Sets expression was modified flag to all related expressions
     * to the argumentExpression.
     *
     * @see        Expression
     */
    setExpressionModifiedFlags(): void;
    /**
     * Creates cloned object of the this argument.''
     *
     * @return     {Argument} clone of the argument.
     */
    clone(): Argument;
}
