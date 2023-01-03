import { PrimitiveElement } from './PrimitiveElement';
import { Expression } from './Expression';
import { java } from 'j4ts/j4ts';
import { Constant } from './Constant';
import { Argument } from './Argument';
import { FunctionExtensionVariadic } from './FunctionExtensionVariadic';
import { FunctionExtension } from './FunctionExtension';
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
export declare class Function extends PrimitiveElement {
    static createWithFunctionDefinition(functionDefinition: string): Function;
    /**
     * Function body type.
     *
     * @see Function#BODY_RUNTIME
     * @see Function#BODY_EXTENDED
     * @see Function#getFunctionBodyType()
     */
    functionBodyType: number;
    /**
     * function expression
     */
    functionExpression: Expression;
    /**
     * function name
     */
    functionName: string;
    /**
     * function description
     */
    description: string;
    /**
     * Indicates whether UDF is variadic
     */
    isVariadic: boolean;
    /**
     * The number of function parameters
     */
    parametersNumber: number;
    /**
     * Function extension (body based in code)
     *
     * @see FunctionExtension
     * @see FunctionExtensionVariadic
     * @see Function#Function(String, FunctionExtension)
     */
    functionExtension: FunctionExtension;
    /**
     * Function extension variadic (body based in code)
     *
     * @see FunctionExtension
     * @see FunctionExtensionVariadic
     * @see Function#Function(String, FunctionExtension)
     */
    functionExtensionVariadic: FunctionExtensionVariadic;
    constructor(functionName?: any, functionExpressionString?: any, ...elements: any[]);
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
    setFunction(functionDefinitionString: string, ...elements: PrimitiveElement[]): void;
    /**
     * Sets function description.
     *
     * @param      {string} description         the function description
     */
    setDescription(description: string): void;
    /**
     * Gets function description
     *
     * @return     {string} Function description as string
     */
    getDescription(): string;
    /**
     * Gets function name.
     *
     * @return     {string} Function name as string.
     */
    getFunctionName(): string;
    /**
     * Gets function expression string
     *
     * @return     {string} Function expression as string.
     */
    getFunctionExpressionString(): string;
    /**
     * Sets function name.
     *
     * @param      {string} functionName        the function name
     */
    setFunctionName(functionName: string): void;
    /**
     * Sets value of function argument (function parameter).
     *
     * @param      {number} argumentIndex   the argument index (in accordance to
     * arguments declaration sequence)
     * @param      {number} argumentValue   the argument value
     */
    setArgumentValue(argumentIndex: number, argumentValue: number): void;
    /**
     * Returns function body type: {@link Function#BODY_RUNTIME} {@link Function#BODY_EXTENDED}
     * @return {number} Returns function body type: {@link Function#BODY_RUNTIME} {@link Function#BODY_EXTENDED}
     */
    getFunctionBodyType(): number;
    /**
     * Checks function syntax
     *
     * @return     {boolean} syntax status: FunctionConstants.NO_SYNTAX_ERRORS,
     * FunctionConstants.SYNTAX_ERROR_OR_STATUS_UNKNOWN
     */
    checkSyntax(): boolean;
    /**
     * Returns error message after checking the syntax.
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage(): string;
    /**
     * clone method
     * @return {Function}
     */
    clone(): Function;
    calculate$(): number;
    calculate$double_A(...parameters: number[]): number;
    /**
     * Calculates function value
     *
     * @param      {double[]} parameters              the function parameters values (as doubles)
     *
     * @return     {number} function value as double.
     */
    calculate(...parameters: any[]): any;
    calculate$org_mariuszgromada_math_mxparser_Argument_A(...__arguments: Argument[]): number;
    /**
     * Adds user defined elements (such as: Arguments, Constants, Functions)
     * to the function expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    addDefinitions(...elements: PrimitiveElement[]): void;
    /**
     * Removes user defined elements (such as: Arguments, Constants, Functions)
     * from the function expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    removeDefinitions(...elements: PrimitiveElement[]): void;
    countRecursiveArguments(): number;
    /**
     * Adds arguments (variadic) to the function expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Argument[]} arguments           the arguments list
     * (comma separated list)
     * @see        Argument
     * @see        RecursiveArgument
     */
    addArguments(...__arguments: Argument[]): void;
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
    defineArguments(...argumentsNames: string[]): void;
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
    defineArgument(argumentName: string, argumentValue: number): void;
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
    getArgumentIndex(argumentName: string): number;
    getArgument$java_lang_String(argumentName: string): Argument;
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
    getArgument(argumentName?: any): any;
    getArgument$int(argumentIndex: number): Argument;
    /**
     * Gets number of parameters associated with the function expression.
     *
     * @return     {number} The number of function parameters (int &gt;= 0)
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getParametersNumber(): number;
    /**
     * Set parameters number.
     *
     * @param      {number} parametersNumber    the number of function parameters (default = number of arguments
     * (less number might be specified).
     */
    setParametersNumber(parametersNumber: number): void;
    /**
     * Gets user defined function parameter name
     *
     * @param {number} parameterIndex  Parameter index between 0 and n-1
     * @return {string} If parameter exists returns parameters name, otherwise empty string is returned.
     */
    getParameterName(parameterIndex: number): string;
    /**
     * Gets number of arguments associated with the function expression.
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
     * associated with the function expression.
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
     * Removes all arguments associated with the function expression.
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    removeAllArguments(): void;
    addConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants: Constant[]): void;
    /**
     * Adds constants (variadic parameters) to the function expression definition.
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
     * the function expression) based on the constant name and
     * constant value.
     *
     * @param      {string} constantName        the constant name
     * @param      {number} constantValue       the constant value
     *
     * @see        Constant
     */
    defineConstant(constantName: string, constantValue: number): void;
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
    getConstantIndex(constantName: string): number;
    getConstant$java_lang_String(constantName: string): Constant;
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
    getConstant(constantName?: any): any;
    getConstant$int(constantIndex: number): Constant;
    /**
     * Gets number of constants associated with the function expression.
     *
     * @return     {number} number of constants (int &gt;= 0)
     *
     * @see        Constant
     */
    getConstantsNumber(): number;
    removeConstants$java_lang_String_A(...constantsNames: string[]): void;
    /**
     * Removes first occurrences of the constants
     * associated with the function expression.
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
     * associated with the function expression
     *
     * @see        Constant
     */
    removeAllConstants(): void;
    /**
     * Adds functions (variadic parameters) to the function expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Function[]} functions           the functions
     * (variadic parameters) comma separated list
     *
     * @see        Function
     */
    addFunctions(...functions: Function[]): void;
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
    defineFunction(functionName: string, functionExpressionString: string, ...argumentsNames: string[]): void;
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
    getFunctionIndex(functionName: string): number;
    getFunction$java_lang_String(functionName: string): Function;
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
    getFunction(functionName?: any): any;
    getFunction$int(functionIndex: number): Function;
    /**
     * Gets number of functions associated with the function expression.
     *
     * @return     {number} number of functions (int &gt;= 0)
     *
     * @see        Function
     */
    getFunctionsNumber(): number;
    removeFunctions$java_lang_String_A(...functionsNames: string[]): void;
    /**
     * Removes first occurrences of the functions
     * associated with the function expression.
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
     * associated with the function expression.
     *
     * @see        Function
     */
    removeAllFunctions(): void;
    /**
     * Enables verbose function mode
     */
    setVerboseMode(): void;
    /**
     * Disables function verbose mode (sets default silent mode)
     */
    setSilentMode(): void;
    /**
     * Returns verbose mode status
     *
     * @return     {boolean} true if verbose mode is on,
     * otherwise returns false
     */
    getVerboseMode(): boolean;
    /**
     * Checks whether function name appears in function body
     * if yes the recursive mode is being set
     */
    checkRecursiveMode(): void;
    /**
     * Gets recursive mode status
     *
     * @return     {boolean} true if recursive mode is enabled,
     * otherwise returns false
     */
    getRecursiveMode(): boolean;
    /**
     * Gets computing time
     *
     * @return     {number} computing time in seconds.
     */
    getComputingTime(): number;
    /**
     * Adds related expression.
     *
     * @param      {Expression} expression          the related expression
     */
    addRelatedExpression(expression: Expression): void;
    /**
     * Removes related expression.
     *
     * @param      {Expression} expression          the related expression
     */
    removeRelatedExpression(expression: Expression): void;
    /**
     * Set expression modified flags in the related expressions.
     */
    setExpressionModifiedFlags(): void;
}
