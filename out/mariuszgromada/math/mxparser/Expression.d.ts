import { KeyWord } from './parsertokens/KeyWord';
import { Token } from './parsertokens/Token';
import { PrimitiveElement } from './PrimitiveElement';
import { java } from 'j4ts/j4ts';
import { IterativeOperatorParameters } from './Miscellaneous';
import { ArgumentParameter } from './Miscellaneous';
import { FunctionParameter } from './Miscellaneous';
import { Constant } from './Constant';
import { Function } from './Function';
import { Argument } from './Argument';
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
export declare class Expression extends PrimitiveElement {
    /**
     * Expression string (for example: "sin(x)+cos(y)")
     */
    expressionString: string;
    description: string;
    /**
     * List of arguments
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    argumentsList: java.util.List<Argument>;
    /**
     * List of user defined functions
     *
     * @see        Function
     */
    functionsList: java.util.List<Function>;
    /**
     * List of user defined constants
     *
     * @see        Constant
     */
    constantsList: java.util.List<Constant>;
    /**
     * List of key words known by the parser
     */
    keyWordsList: java.util.List<KeyWord>;
    /**
     * List of expression tokens (words).
     * Token class defines all needed
     * attributes for recognizing the structure of
     * arithmetic expression. This is the key result when
     * initial parsing is finished (tokenizeExpressionString() - method).
     * Token keeps information about:
     * - token type (for example: function, operator, argument, number, etc...)
     * - token identifier within given type (sin, cos, operaotr, etc...)
     * - token value (if token is a number)
     * - token level - key information regarding sequence (order) of further parsing
     */
    initialTokens: java.util.List<Token>;
    /**
     * the initialTokens list keeps unchanged information about
     * found tokens.
     *
     * While parsing the tokensList is used. The tokensList is the same
     * as initialTokens list at the beginning of the calculation process.
     * Each math operation changes tokens list - it means that
     * tokens are parameters when performing math operation
     * and the result is also presented as token (usually as a number token)
     * At the end of the calculation the tokensList should contain only one
     * element - the result of all calculations.
     */
    tokensList: java.util.List<Token>;
    /**
     * List of related expressions, for example when
     * user defined function is used in the expression
     * or dependent argument was defined. Modification of
     * function expression calls the method expression modified
     * flag method to all related expressions.
     *
     * Related expression usually are used for
     * - dependent arguments
     * - recursive arguments
     * - user functions
     */
    relatedExpressionsList: java.util.List<Expression>;
    /**
     * Keeps computing time
     */
    computingTime: number;
    /**
     * if true then new tokenizing is required
     * (the initialTokens list needs to be updated)
     */
    expressionWasModified: boolean;
    /**
     * If recursive mode is on the recursive calls are permitted.
     * It means there will be no null pointer exceptions
     * due to expression, and functions cloning.
     */
    recursiveMode: boolean;
    /**
     * Verbose mode prints processing info
     * calls System.out.print* methods
     */
    verboseMode: boolean;
    /**
     * Internal parameter for calculus expressions
     * to avoid decrease in accuracy.
     */
    disableRounding: boolean;
    static DISABLE_ROUNDING: boolean;
    static KEEP_ROUNDING_SETTINGS: boolean;
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
    /**
     * Flag used internally to mark started recursion
     * call on the current object, necessary to
     * avoid infinite loops while recursive syntax
     * checking (i.e. f -> g and g -> f)
     * or marking modified flags on the expressions
     * related to this expression.
     *
     * @see setExpressionModifiedFlag()
     * @see checkSyntax()
     */
    recursionCallPending: boolean;
    /**
     * Internal counter to avoid infinite loops while calculating
     * expression defined in the way shown by below examples
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
     */
    recursionCallsCounter: number;
    /**
     * Internal indicator for tokenization process
     * if true, then keywords such as constants
     * functions etc.. will not be recognized
     * during tokenization
     */
    parserKeyWordsOnly: boolean;
    /**
     * Indicator whether expression was
     * automatically built for user defined
     * functions purpose
     *
     * @see Function
     */
    UDFExpression: boolean;
    /**
     * List of parameters provided by the user at run-time
     *
     * @see Function
     */
    UDFVariadicParamsAtRunTime: java.util.List<number>;
    /**
     * Internal indicator for calculation process
     * ExpressionConstants.Calculate() method
     * It show whether to build again tokens list
     * if clone - build again
     * if not clone - build only at the beginning
     *
     * Indicator helps to solve the problem with
     * above definitions
     *
     * Function f = new Function("f(x) = 2*g(x)");
     * Function g = new Function("g(x) = 2*f(x)");
     * f.addDefinitions(g);
     * g.addDefinitions(f);
     */
    internalClone: boolean;
    /**
     * mXparser options changeset
     * used in checkSyntax() method
     */
    optionsChangesetNumber: number;
    /**
     * Adds related expression
     * The same expression could be added more than once
     * For example when
     *
     * @param      {Expression} expression          the expression
     */
    addRelatedExpression(expression: Expression): void;
    /**
     * Removes related expression
     *
     * @param      {Expression} expression          the expression
     */
    removeRelatedExpression(expression: Expression): void;
    /**
     * Prints related expression list
     */
    showRelatedExpressions(): void;
    /**
     * Method return error message after
     * calling checkSyntax() method or
     * calculate().
     *
     * @return     {string} Error message as string.
     */
    getErrorMessage(): string;
    /**
     * Gets syntax status of the expression.
     *
     * @return     {boolean} true if there are no syntax errors,
     * false when syntax error was found or
     * syntax status is unknown
     */
    getSyntaxStatus(): boolean;
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
    setSyntaxStatus(syntaxStatus: boolean, errorMessage: string): void;
    /**
     * Sets expression status to modified
     * Calls setExpressionModifiedFlag() method
     * to all related expressions.
     */
    setExpressionModifiedFlag(): void;
    /**
     * Common variables while expression initializing
     * @private
     */
    expressionInternalVarsInit(): void;
    /**
     * Common elements while expression initializing
     * @private
     */
    expressionInit(): void;
    constructor(expressionString?: any, initialTokens?: any, argumentsList?: any, functionsList?: any, constantsList?: any, disableUlpRounding?: any, UDFExpression?: any, UDFVariadicParamsAtRunTime?: any);
    /**
     * Sets (modifies expression) expression string.
     *
     * @param      {string} expressionString    the expression string
     */
    setExpressionString(expressionString: string): void;
    /**
     * Returns expression string
     *
     * @return {string} Expression string definition.
     */
    getExpressionString(): string;
    /**
     * Clears expression string
     */
    clearExpressionString(): void;
    /**
     * Sets expression description.
     *
     * @param      {string} description         the description string
     */
    setDescription(description: string): void;
    /**
     * Gets expression description.
     *
     * @return     {string} String description.
     */
    getDescription(): string;
    /**
     * Clears expression description
     */
    clearDescription(): void;
    /**
     * Enables verbose mode.
     */
    setVerboseMode(): void;
    /**
     * Disables verbose mode (default silent mode).
     */
    setSilentMode(): void;
    /**
     * Returns verbose mode status.
     *
     * @return     {boolean} true if verbose mode is on,
     * otherwise returns false.
     */
    getVerboseMode(): boolean;
    /**
     * Sets recursive mode
     */
    setRecursiveMode(): void;
    /**
     * Disables recursive mode
     */
    disableRecursiveMode(): void;
    /**
     * Gets recursive mode status
     *
     * @return     {boolean} true if recursive mode is enabled,
     * otherwise returns false.
     */
    getRecursiveMode(): boolean;
    /**
     * Gets computing time.
     *
     * @return     {number} computing time in seconds.
     */
    getComputingTime(): number;
    /**
     * Adds user defined elements (such as: Arguments, Constants, Functions)
     * to the expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    addDefinitions(...elements: PrimitiveElement[]): void;
    /**
     * Removes user defined elements (such as: Arguments, Constants, Functions)
     * to the expressions.
     *
     * @param {org.mariuszgromada.math.mxparser.PrimitiveElement[]} elements Elements list (variadic), where Argument, Constant, Function
     * extend the same class PrimitiveElement
     *
     * @see PrimitiveElement
     */
    removeDefinitions(...elements: PrimitiveElement[]): void;
    /**
     * Adds arguments (variadic) to the expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Argument[]} arguments           the arguments list
     * (comma separated list)
     * @see        Argument
     * @see        RecursiveArgument
     */
    addArguments(...__arguments: Argument[]): void;
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
    defineArguments(...argumentsNames: string[]): void;
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
    defineArgument(argumentName: string, argumentValue: number): void;
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
    getArgumentIndex(argumentName: string): number;
    getArgument$java_lang_String(argumentName: string): Argument;
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
    getArgument(argumentName?: any): any;
    getArgument$int(argumentIndex: number): Argument;
    /**
     * Gets number of arguments associated with the expression.
     *
     * @return     {number} The number of arguments (int &gt;= 0)
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    getArgumentsNumber(): number;
    /**
     * Sets argument value.
     *
     * @param      {string} argumentName        the argument name
     * @param      {number} argumentValue       the argument value
     */
    setArgumentValue(argumentName: string, argumentValue: number): void;
    /**
     * Gets argument vale.
     *
     * @param      {string} argumentName        the argument name
     *
     * @return     {number} Argument value if argument name was found,
     * otherwise return Double.NaN.
     */
    getArgumentValue(argumentName: string): number;
    removeArguments$java_lang_String_A(...argumentsNames: string[]): void;
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
    removeArguments(...argumentsNames: any[]): any;
    removeArguments$org_mariuszgromada_math_mxparser_Argument_A(...__arguments: Argument[]): void;
    /**
     * Removes all arguments associated with the expression.
     *
     * @see        Argument
     * @see        RecursiveArgument
     */
    removeAllArguments(): void;
    addConstants$org_mariuszgromada_math_mxparser_Constant_A(...constants: Constant[]): void;
    /**
     * Adds constants (variadic parameters) to the expression definition.
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
     * the expression) based on the constant name and
     * constant value.
     *
     * @param      {string} constantName        the constant name
     * @param      {number} constantValue       the constant value
     *
     * @see        Constant
     */
    defineConstant(constantName: string, constantValue: number): void;
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
    getConstantIndex(constantName: string): number;
    getConstant$java_lang_String(constantName: string): Constant;
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
    getConstant(constantName?: any): any;
    getConstant$int(constantIndex: number): Constant;
    /**
     * Gets number of constants associated with the expression.
     *
     * @return     {number} number of constants (int &gt;= 0)
     *
     * @see        Constant
     */
    getConstantsNumber(): number;
    removeConstants$java_lang_String_A(...constantsNames: string[]): void;
    /**
     * Removes first occurrences of the constants
     * associated with the expression.
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
     * associated with the expression
     *
     * @see        Constant
     */
    removeAllConstants(): void;
    /**
     * Adds functions (variadic parameters) to the expression definition.
     *
     * @param      {org.mariuszgromada.math.mxparser.Function[]} functions           the functions
     * (variadic parameters) comma separated list
     *
     * @see        Function
     */
    addFunctions(...functions: Function[]): void;
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
    defineFunction(functionName: string, functionExpressionString: string, ...argumentsNames: string[]): void;
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
    getFunctionIndex(functionName: string): number;
    getFunction$java_lang_String(functionName: string): Function;
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
    getFunction(functionName?: any): any;
    getFunction$int(functionIndex: number): Function;
    /**
     * Gets number of functions associated with the expression.
     *
     * @return     {number} number of functions (int &gt;= 0)
     *
     * @see        Function
     */
    getFunctionsNumber(): number;
    removeFunctions$java_lang_String_A(...functionsNames: string[]): void;
    /**
     * Removes first occurrences of the functions
     * associated with the expression.
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
     * associated with the expression.
     *
     * @see        Function
     */
    removeAllFunctions(): void;
    setToNumber$int$double$boolean(pos: number, number: number, ulpRound: boolean): void;
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
    setToNumber(pos?: any, number?: any, ulpRound?: any): any;
    setToNumber$int$double(pos: number, number: number): void;
    f1SetDecreaseRemove$int$double$boolean(pos: number, result: number, ulpRound: boolean): void;
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
    f1SetDecreaseRemove(pos?: any, result?: any, ulpRound?: any): any;
    f1SetDecreaseRemove$int$double(pos: number, result: number): void;
    f2SetDecreaseRemove$int$double$boolean(pos: number, result: number, ulpRound: boolean): void;
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
    f2SetDecreaseRemove(pos?: any, result?: any, ulpRound?: any): any;
    f2SetDecreaseRemove$int$double(pos: number, result: number): void;
    f3SetDecreaseRemove$int$double$boolean(pos: number, result: number, ulpRound: boolean): void;
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
    f3SetDecreaseRemove(pos?: any, result?: any, ulpRound?: any): any;
    f3SetDecreaseRemove$int$double(pos: number, result: number): void;
    opSetDecreaseRemove$int$double$boolean(pos: number, result: number, ulpRound: boolean): void;
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
    opSetDecreaseRemove(pos?: any, result?: any, ulpRound?: any): any;
    opSetDecreaseRemove$int$double(pos: number, result: number): void;
    calcSetDecreaseRemove$int$double$boolean(pos: number, result: number, ulpRound: boolean): void;
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
    calcSetDecreaseRemove(pos?: any, result?: any, ulpRound?: any): any;
    calcSetDecreaseRemove$int$double(pos: number, result: number): void;
    variadicSetDecreaseRemove$int$double$int$boolean(pos: number, value: number, length: number, ulpRound: boolean): void;
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
    variadicSetDecreaseRemove(pos?: any, value?: any, length?: any, ulpRound?: any): any;
    variadicSetDecreaseRemove$int$double$int(pos: number, value: number, length: number): void;
    ifSetRemove$int$double$boolean(pos: number, ifCondition: number, ulpRound: boolean): void;
    /**
     * If set remove method for the if function.
     *
     * @param      {number} pos                 the position
     * @param      {number} ifCondition         the result of if condition
     * @param      {boolean} ulpRound            If true, then if {@link mXparser#ulpRounding} = true
     * intelligent ULP rounding is applied.
     * @private
     */
    ifSetRemove(pos?: any, ifCondition?: any, ulpRound?: any): any;
    removeTokens(from: number, to: number): void;
    ifSetRemove$int$double(pos: number, ifCondition: number): void;
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
    createInitialTokens(startPos: number, endPos: number, tokensList: java.util.List<Token>): java.util.List<Token>;
    /**
     * Return number of functions parameters.
     *
     * @param      {number} pos                 the function position
     * @return {number}
     * @private
     */
    getParametersNumber(pos: number): number;
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
    getFunctionParameters(pos: number, tokensList: java.util.List<Token>): java.util.List<FunctionParameter>;
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
    getParamArgument(argumentName: string): ArgumentParameter;
    /**
     * Clears argument parameter.
     *
     * @param      {ArgumentParameter} argParam            the argument parameter.
     * @private
     */
    clearParamArgument(argParam: ArgumentParameter): void;
    /**
     * Free Arguments handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    FREE_ARGUMENT(pos: number): void;
    /**
     * Dependent Arguments handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    DEPENDENT_ARGUMENT(pos: number): void;
    /**
     * User functions handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    USER_FUNCTION(pos: number): void;
    /**
     * User constants handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    USER_CONSTANT(pos: number): void;
    /**
     * Recursive arguments handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    RECURSIVE_ARGUMENT(pos: number): void;
    /**
     * Constants handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CONSTANT(pos: number): void;
    /**
     * Constants handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    UNIT(pos: number): void;
    /**
     * Random Variables handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    RANDOM_VARIABLE(pos: number): void;
    /**
     * Gets token value
     * @param      {number} tokenIndex          the token index
     *
     * @return     {number} the token value
     * @private
     */
    getTokenValue(tokenIndex: number): number;
    /**
     * Tetration handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    TETRATION(pos: number): void;
    /**
     * Power handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    POWER(pos: number): void;
    /**
     * Modulo handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    MODULO(pos: number): void;
    /**
     * Division handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    DIVIDE(pos: number): void;
    /**
     * Multiplication handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    MULTIPLY(pos: number): void;
    /**
     * Addition handling.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    PLUS(pos: number): void;
    /**
     * Subtraction handling
     *
     * @param      {number} pos                 the token position
     * @private
     */
    MINUS(pos: number): void;
    /**
     * Logical AND
     *
     * @param      {number} pos                 the token position
     * @private
     */
    AND(pos: number): void;
    /**
     * Logical OR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    OR(pos: number): void;
    /**
     * Logical NAND
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NAND(pos: number): void;
    /**
     * Logical NOR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NOR(pos: number): void;
    /**
     * Logical XOR
     *
     *
     * @param      {number} pos                 the token position
     * @private
     */
    XOR(pos: number): void;
    /**
     * Logical IMP
     *
     *
     * @param      {number} pos                 the token position
     * @private
     */
    IMP(pos: number): void;
    /**
     * Logical CIMP
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CIMP(pos: number): void;
    /**
     * Logical NIMP
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NIMP(pos: number): void;
    /**
     * Logical CNIMP
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CNIMP(pos: number): void;
    /**
     * Logical EQV
     *
     * @param      {number} pos                 the token position
     * @private
     */
    EQV(pos: number): void;
    /**
     * Logical negation
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NEG(pos: number): void;
    /**
     * Equality relation.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    EQ(pos: number): void;
    /**
     * Not equals.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NEQ(pos: number): void;
    /**
     * Lower than.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LT(pos: number): void;
    /**
     * Greater than.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GT(pos: number): void;
    /**
     * Lower or equal.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LEQ(pos: number): void;
    /**
     * Greater or equal
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GEQ(pos: number): void;
    /**
     * Bitwise COMPL
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BITWISE_COMPL(pos: number): void;
    /**
     * Bitwise AND
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BITWISE_AND(pos: number): void;
    /**
     * Bitwise OR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BITWISE_OR(pos: number): void;
    /**
     * Bitwise XOR
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BITWISE_XOR(pos: number): void;
    /**
     * Bitwise LEFT SHIFT
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BITWISE_LEFT_SHIFT(pos: number): void;
    /**
     * Bitwise RIGHT SHIFT
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BITWISE_RIGHT_SHIFT(pos: number): void;
    /**
     * Sine function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SIN(pos: number): void;
    /**
     * Cosine / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    COS(pos: number): void;
    /**
     * Tangent / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    TAN(pos: number): void;
    /**
     * Cotangent / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CTAN(pos: number): void;
    /**
     * Secant / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SEC(pos: number): void;
    /**
     * Cosecant / Trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    COSEC(pos: number): void;
    /**
     * Arcus sine / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ASIN(pos: number): void;
    /**
     * Arcus cosine / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ACOS(pos: number): void;
    /**
     * Arcus tangent / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ATAN(pos: number): void;
    /**
     * Arcus cotangent / Inverse trigonometric functions
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ACTAN(pos: number): void;
    /**
     * Natural logarithm (base e)
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LN(pos: number): void;
    /**
     * Logarithm - base 2
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LOG2(pos: number): void;
    /**
     * Logarithm - base 10
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LOG10(pos: number): void;
    /**
     * Converts degrees to radius
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    RAD(pos: number): void;
    /**
     * Exponential function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    EXP(pos: number): void;
    /**
     * Square root
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SQRT(pos: number): void;
    /**
     * Hyperbolic sine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SINH(pos: number): void;
    /**
     * Hyperbolic cosine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    COSH(pos: number): void;
    /**
     * Hyperbolic tangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    TANH(pos: number): void;
    /**
     * Hyperbolic cotangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    COTH(pos: number): void;
    /**
     * Hyperbolic secant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SECH(pos: number): void;
    /**
     * Hyperbolic cosecant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CSCH(pos: number): void;
    /**
     * Converts radians to degrees
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    DEG(pos: number): void;
    /**
     * Absolut value
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ABS(pos: number): void;
    /**
     * Signum function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SGN(pos: number): void;
    /**
     * Floor function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    FLOOR(pos: number): void;
    /**
     * Ceil function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CEIL(pos: number): void;
    /**
     * Arcus hyperbolic sine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARSINH(pos: number): void;
    /**
     * Arcus hyperbolic cosine
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARCOSH(pos: number): void;
    /**
     * Arcus hyperbolic tangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARTANH(pos: number): void;
    /**
     * Arcus hyperbolic cotangent
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARCOTH(pos: number): void;
    /**
     * Arcus hyperbolic secant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARSECH(pos: number): void;
    /**
     * Arcus hyperbolic cosecant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARCSCH(pos: number): void;
    /**
     * SA / sinc normalized
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SA(pos: number): void;
    /**
     * Sinc unnormalized
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SINC(pos: number): void;
    /**
     * Bell numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BELL_NUMBER(pos: number): void;
    /**
     * Lucas numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LUCAS_NUMBER(pos: number): void;
    /**
     * Fibonacci numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    FIBONACCI_NUMBER(pos: number): void;
    /**
     * Harmonic numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    HARMONIC_NUMBER(pos: number): void;
    /**
     * Prime test
     *
     * @param      {number} pos                 the token position
     * @private
     */
    IS_PRIME(pos: number): void;
    /**
     * Prime counting
     *
     * @param      {number} pos                 the token position
     * @private
     */
    PRIME_COUNT(pos: number): void;
    /**
     * Exponential integral function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    EXP_INT(pos: number): void;
    /**
     * Logarithmic exponential integral function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LOG_INT(pos: number): void;
    /**
     * Offset logarithmic exponential integral function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    OFF_LOG_INT(pos: number): void;
    /**
     * Factorilal function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    FACT(pos: number): void;
    /**
     * Percentage
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    PERC(pos: number): void;
    /**
     * Negation
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NOT(pos: number): void;
    /**
     * Gauss error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GAUSS_ERF(pos: number): void;
    /**
     * Gauss complementary error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GAUSS_ERFC(pos: number): void;
    /**
     * Inverse of Gauss error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GAUSS_ERF_INV(pos: number): void;
    /**
     * Inverse of Gauss complementary error function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GAUSS_ERFC_INV(pos: number): void;
    /**
     * Unit in The Last Place
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ULP(pos: number): void;
    /**
     * Is Not-a-Number
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ISNAN(pos: number): void;
    /**
     * Number of digits in base 10
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NDIG10(pos: number): void;
    /**
     * Number of prime factors - distinct
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NFACT(pos: number): void;
    /**
     * Arcuus secant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARCSEC(pos: number): void;
    /**
     * Arcuus cosecant
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARCCSC(pos: number): void;
    /**
     * Gamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GAMMA(pos: number): void;
    /**
     * Lambert-W special function, principal branch 0
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LAMBERT_W0(pos: number): void;
    /**
     * Lambert-W special function, branch = -1
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LAMBERT_W1(pos: number): void;
    /**
     * Signum of Gamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SGN_GAMMA(pos: number): void;
    /**
     * Log Gamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LOG_GAMMA(pos: number): void;
    /**
     * Digamma special function
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    DI_GAMMA(pos: number): void;
    /**
     * User Defined Variadic function param value
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    UDF_PARAM(pos: number): void;
    /**
     * Logarithm
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LOG(pos: number): void;
    /**
     * Creates ArraList<Double> containing function parameters
     *
     * @param      {number} pos                 the function position
     *
     * @return     {*} List of function parameters.
     * @private
     */
    getNumbers(pos: number): java.util.List<number>;
    /**
     * Modulo
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    MOD(pos: number): void;
    /**
     * Binomial Coefficient
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BINOM_COEFF(pos: number): void;
    /**
     * Number of permutations
     *
     * @param      {number} pos                 the token position
     * @private
     */
    PERMUTATIONS(pos: number): void;
    /**
     * Beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    BETA(pos: number): void;
    /**
     * Log beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    LOG_BETA(pos: number): void;
    /**
     * Bernoulli Number
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BERNOULLI_NUMBER(pos: number): void;
    /**
     * Stirling number of the first kind
     *
     * @param      {number} pos                 the token position
     * @private
     */
    STIRLING1_NUMBER(pos: number): void;
    /**
     * Stirling number of the second kind.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    STIRLING2_NUMBER(pos: number): void;
    /**
     * Worpitzky number.
     *
     * @param      {number} pos                 the token position
     * @private
     */
    WORPITZKY_NUMBER(pos: number): void;
    /**
     * Euler number
     *
     * @param      {number} pos                 the token position
     * @private
     */
    EULER_NUMBER(pos: number): void;
    /**
     * Kronecker delta
     *
     * @param      {number} pos                 the token position
     * @private
     */
    KRONECKER_DELTA(pos: number): void;
    /**
     * Euler polynomial
     *
     * @param      {number} pos                 the token position
     * @private
     */
    EULER_POLYNOMIAL(pos: number): void;
    /**
     * Harmonic numbers
     *
     * @param      {number} pos                 the token position
     * @private
     */
    HARMONIC2_NUMBER(pos: number): void;
    /**
     * Decimal rounding
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ROUND(pos: number): void;
    /**
     * Random number - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    RND_VAR_UNIFORM_CONT(pos: number): void;
    /**
     * Random number - Uniform Discrete distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    RND_VAR_UNIFORM_DISCR(pos: number): void;
    /**
     * Random number - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    RND_NORMAL(pos: number): void;
    /**
     * Number of digits in given numeral system
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NDIG(pos: number): void;
    /**
     * Digit at position - base 10 numeral system
     *
     * @param      {number} pos                 the token position
     * @private
     */
    DIGIT10(pos: number): void;
    /**
     * Prime factor value
     *
     * @param      {number} pos                 the token position
     * @private
     */
    FACTVAL(pos: number): void;
    /**
     * Prime factor value exponent
     *
     * @param      {number} pos                 the token position
     * @private
     */
    FACTEXP(pos: number): void;
    /**
     * Nth order root
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ROOT(pos: number): void;
    /**
     * Lower incomplete special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    INC_GAMMA_LOWER(pos: number): void;
    /**
     * Upper incomplete special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    INC_GAMMA_UPPER(pos: number): void;
    /**
     * Lower regularized special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    REG_GAMMA_LOWER(pos: number): void;
    /**
     * Lower regularized special Gamma function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    REG_GAMMA_UPPER(pos: number): void;
    /**
     * IF function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    IF_CONDITION(pos: number): void;
    /**
     * IFF function
     *
     * @param      {number} pos                 the token position
     * @private
     */
    IFF(pos: number): void;
    /**
     * IF
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    IF(pos: number): void;
    /**
     * Characteristic function (a,b)
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CHI(pos: number): void;
    /**
     * Characteristic function [a,b]
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CHI_LR(pos: number): void;
    /**
     * Characteristic function [a,b)
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CHI_L(pos: number): void;
    /**
     * Characteristic function (a,b]
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CHI_R(pos: number): void;
    /**
     * Probability Distribution Function - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    PDF_UNIFORM_CONT(pos: number): void;
    /**
     * Cumulative Distribution Function - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CDF_UNIFORM_CONT(pos: number): void;
    /**
     * Quantile Function - Uniform Continuous distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    QNT_UNIFORM_CONT(pos: number): void;
    /**
     * Probability Distribution Function - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    PDF_NORMAL(pos: number): void;
    /**
     * Cumulative Distribution Function - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CDF_NORMAL(pos: number): void;
    /**
     * Quantile Function - Normal distribution
     *
     * @param      {number} pos                 the token position
     * @private
     */
    QNT_NORMAL(pos: number): void;
    /**
     * Digit at position - numeral system with given base
     *
     * @param      {number} pos                 the token position
     * @private
     */
    DIGIT(pos: number): void;
    /**
     * Incomplete beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    INC_BETA(pos: number): void;
    /**
     * Regularized incomplete beta special function
     * @param      {number} pos                 the token position
     * @private
     */
    REG_BETA(pos: number): void;
    updateMissingTokens$java_util_List$java_lang_String$int$int(tokens: java.util.List<Token>, keyWord: string, tokenId: number, tokenTypeId: number): void;
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
    updateMissingTokens(tokens?: any, keyWord?: any, tokenId?: any, tokenTypeId?: any): any;
    updateMissingTokens$org_mariuszgromada_math_mxparser_ArgumentParameter$org_mariuszgromada_math_mxparser_IterativeOperatorParameters(index: ArgumentParameter, iterParams: IterativeOperatorParameters): void;
    /**
     * Evaluates ranges 'from', 'to', 'delta' for the iterative operator
     *
     * @param {ArgumentParameter} index      Index parameter of the iterative operator
     * @param {IterativeOperatorParameters} iterParams     Parameters list of the iterative operator
     * @private
     */
    evalFromToDeltaParameters(index: ArgumentParameter, iterParams: IterativeOperatorParameters): void;
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
    SUM(pos: number): void;
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
    PROD(pos: number): void;
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
    MIN(pos: number): void;
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
    MAX(pos: number): void;
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
    AVG(pos: number): void;
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
    VAR(pos: number): void;
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
    STD(pos: number): void;
    /**
     * Function derivative
     *
     * @param      {number} pos                 the token position
     * @param      {number} derivativeType      the type of derivative (LEFT, RIGHT, ...)
     * @private
     */
    DERIVATIVE(pos: number, derivativeType: number): void;
    /**
     * Function derivative
     *
     * @param      {number} pos                 the token position
     * @param      {number} derivativeType      the type of derivative (left, right, etc...)
     * @private
     */
    DERIVATIVE_NTH(pos: number, derivativeType: number): void;
    /**
     * Function integral
     *
     * @param      {number} pos                 the token position
     * @private
     */
    INTEGRAL(pos: number): void;
    /**
     * Function SOLVE
     *
     * @param      {number} pos                 the token position
     * @private
     */
    SOLVE(pos: number): void;
    /**
     * Forward difference operator
     *
     * @param      {number} pos                 the token position
     * @private
     */
    FORWARD_DIFFERENCE(pos: number): void;
    /**
     * Backward diffrence operator
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BACKWARD_DIFFERENCE(pos: number): void;
    /**
     * Minimum variadic
     * Sets tokens to number token
     *
     * @param      {number} pos                 the token position
     * @private
     */
    MIN_VARIADIC(pos: number): void;
    /**
     * Maximum variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    MAX_VARIADIC(pos: number): void;
    /**
     * Sum variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    SUM_VARIADIC(pos: number): void;
    /**
     * Sum variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    PROD_VARIADIC(pos: number): void;
    /**
     * Average variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    AVG_VARIADIC(pos: number): void;
    /**
     * Variance variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    VAR_VARIADIC(pos: number): void;
    /**
     * Standard deviation variadic
     * Sets tokens to number token
     *
     * @param {number} pos token index (position)
     * @private
     */
    STD_VARIADIC(pos: number): void;
    /**
     * Continued fraction
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CONTINUED_FRACTION(pos: number): void;
    /**
     * Continued polynomial
     *
     * @param      {number} pos                 the token position
     * @private
     */
    CONTINUED_POLYNOMIAL(pos: number): void;
    /**
     * Greates Common Divisor
     *
     * @param      {number} pos                 the token position
     * @private
     */
    GCD(pos: number): void;
    /**
     * Lowest Common Multiply
     *
     * @param      {number} pos                 the token position
     * @private
     */
    LCM(pos: number): void;
    /**
     * Random number from list
     *
     * @param      {number} pos                 the token position
     * @private
     */
    RND_LIST(pos: number): void;
    /**
     * Coalesce
     *
     * @param      {number} pos                 the token position
     * @private
     */
    COALESCE(pos: number): void;
    /**
     * OR_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    OR_VARIADIC(pos: number): void;
    /**
     * AND_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    AND_VARIADIC(pos: number): void;
    /**
     * XOR_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    XOR_VARIADIC(pos: number): void;
    /**
     * ARGMIN_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARGMIN_VARIADIC(pos: number): void;
    /**
     * ARGMAX_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    ARGMAX_VARIADIC(pos: number): void;
    /**
     * MEDIAN_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    MEDIAN_VARIADIC(pos: number): void;
    /**
     * MODE_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    MODE_VARIADIC(pos: number): void;
    /**
     * BASE_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    BASE_VARIADIC(pos: number): void;
    /**
     * NDIST_VARIADIC
     *
     * @param      {number} pos                 the token position
     * @private
     */
    NDIST_VARIADIC(pos: number): void;
    /**
     * Parser symbols
     * Removes comma
     *
     * @param {number} pos token index (position)
     * @private
     */
    COMMA(pos: number): void;
    /**
     * Parser symbols
     * Removes parenthesis
     *
     * @param {number} lPos    left token index (position)
     * @param {number} rPos    roght token index (position)
     * @private
     */
    PARENTHESES(lPos: number, rPos: number): void;
    /**
     * Checks syntax of the expression string.
     *
     * @return     {boolean} true if syntax is ok
     */
    checkLexSyntax(): boolean;
    checkSyntax$(): boolean;
    /**
     * Checks syntax of the calculus parameter
     *
     * @return     {number} true if syntax is ok
     * @param {string} param
     * @private
     */
    checkCalculusParameter(param: string): number;
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
    checkIfKnownArgument(param: FunctionParameter): boolean;
    /**
     * Checks if token is uknown
     *
     * @param      {FunctionParameter} param               the function parameter
     *
     * @return     {boolean} true if there is only 1 token with unknown type,
     * otherwise returns false.
     * @private
     */
    checkIfUnknownToken(param: FunctionParameter): boolean;
    checkSyntax$java_lang_String$boolean(level: string, functionWithBodyExt: boolean): boolean;
    /**
     * Checking the syntax (recursively).
     *
     * @param      {string} level               string representing the recurssion level.
     * @return     {boolean} true if syntax was correct,
     * otherwise returns false.
     * @param {boolean} functionWithBodyExt
     * @private
     */
    checkSyntax(level?: any, functionWithBodyExt?: any): any;
    /**
     * Calculates the expression value
     *
     * @return     {number} The expression value if syntax was ok,
     * otherwise returns Double.NaN.
     */
    calculate(): number;
    /**
     * Calculates unary function
     * @param {number} pos    token position
     * @private
     */
    f1ArgCalc(pos: number): void;
    /**
     * Calculates binary function
     * @param {number} pos   Token position
     * @private
     */
    f2ArgCalc(pos: number): void;
    /**
     * Calculates function with 3 arguments
     * @param {number} pos   Token position
     * @private
     */
    f3ArgCalc(pos: number): void;
    /**
     * Calculates Variadic function
     * @param {number} pos   Token position
     * @private
     */
    variadicFunCalc(pos: number): void;
    /**
     * Calculates calculus operators
     * @param {number} pos
     * @private
     */
    calculusCalc(pos: number): void;
    /**
     * Calculates boolean operators
     * @param {number} pos
     * @private
     */
    bolCalc(pos: number): void;
    /**
     * Calculates Bitwise operators
     * @param {number} pos
     * @private
     */
    bitwiseCalc(pos: number): void;
    /**
     * Class level method for adding specific automatic
     * parser keywords relates to User Defined Functions
     * i.e.: par(i), [npar]
     * @private
     */
    addUDFSpecificParserKeyWords(): void;
    /**
     * Creates parser key words list
     * @private
     */
    addParserKeyWords(): void;
    /**
     * Adds arguments key words to the keywords list
     * @private
     */
    addArgumentsKeyWords(): void;
    /**
     * Adds functions key words to the keywords list
     * @private
     */
    addFunctionsKeyWords(): void;
    /**
     * Adds constants key words to the keywords list
     * @private
     */
    addConstantsKeyWords(): void;
    /**
     * Final validation of key words
     * @private
     */
    validateParserKeyWords(): void;
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
    addKeyWord(wordString: string, wordDescription: string, wordId: number, wordSyntax: string, wordSince: string, wordTypeId: number): void;
    /**
     * Checks whether unknown token represents number literal
     * provided in different numeral base system, where
     * base is between 1 and 36.
     *
     * @param {Token} token   The token not know to the parser
     * @private
     */
    checkOtherNumberBases(token: Token): void;
    /**
     * Checks whether unknown token represents fraction
     * provided as fraction or mixed fraction
     *
     * @param {Token} token   The token not know to the parser
     * @private
     */
    checkFraction(token: Token): void;
    /**
     * Adds expression token
     * Method is called by the tokenExpressionString()
     * while parsing string expression
     *
     * @param      {string} tokenStr            the token string
     * @param      {KeyWord} keyWord             the key word
     * @private
     */
    addToken(tokenStr: string, keyWord: KeyWord): void;
    isNotSpecialChar(c: string): boolean;
    /**
     * Tokenizing expression string
     * @private
     */
    tokenizeExpressionString(): void;
    /**
     * Evaluates tokens levels
     * @private
     */
    evaluateTokensLevels(): void;
    /**
     * copy initial tokens lito to tokens list
     * @private
     */
    copyInitialTokens(): void;
    FUNCTION: string;
    ARGUMENT: string;
    UNITCONST: string;
    ERROR: string;
    /**
     * Tokenizes expression string and returns tokens list,
     * including: string, type, level.
     *
     * @return {*} Copy of initial tokens.
     *
     * @see Token
     * @see mXparser#consolePrintTokens(List)
     */
    getCopyOfInitialTokens(): java.util.List<Token>;
    /**
     * Returns missing user defined arguments names, i.e.
     * sin(x) + cos(y) where x and y are not defined
     * function will return x and y.
     *
     * @return {java.lang.String[]} Array of missing user defined arguments names
     * - distinct strings.
     */
    getMissingUserDefinedArguments(): string[];
    /**
     * Returns missing user defined units names, i.e.
     * 2*[w] + [q] where [w] and [q] are not defined
     * function will return [w] and [q].
     *
     * @return {java.lang.String[]} Array of missing user defined units names
     * - distinct strings.
     */
    getMissingUserDefinedUnits(): string[];
    /**
     * Returns missing user defined functions names, i.e.
     * sin(x) + fun(x,y) where fun is not defined
     * function will return fun.
     *
     * @return {java.lang.String[]} Array of missing user defined functions names
     * - distinct strings.
     */
    getMissingUserDefinedFunctions(): string[];
    /**
     * Gets initial tokens and returns copied list
     *
     * @see Function
     * @return {*}
     */
    getInitialTokens(): java.util.List<Token>;
    static getLeftSpaces(maxStr: string, str: string): string;
    static getRightSpaces(maxStr: string, str: string): string;
    /**
     * Shows parsing (verbose mode purposes).
     * @param {number} lPos
     * @param {number} rPos
     * @private
     */
    showParsing(lPos: number, rPos: number): void;
    /**
     * shows known keywords
     */
    showKeyWords(): void;
    getHelp$(): string;
    getHelp$java_lang_String(word: string): string;
    /**
     * Searching help content.
     *
     * @param      {string} word                searching key word
     *
     * @return     {string} The help content.
     */
    getHelp(word?: any): any;
    getKeyWords$(): java.util.List<KeyWord>;
    getKeyWords$java_lang_String(query: string): java.util.List<KeyWord>;
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
    getKeyWords(query?: any): any;
    showTokens(): void;
    static showTokens(tokensList: java.util.List<Token>): void;
    /**
     * shows initial tokens
     */
    showInitialTokens(): void;
    showArguments(): void;
    /**
     *
     * @param {string} info
     * @param {boolean} withExpressionString
     * @private
     */
    printSystemInfo(info: string, withExpressionString: boolean): void;
    /**
     * Expression cloning.
     * @return {Expression}
     */
    clone(): Expression;
    static create(): Expression;
    static createWithExpression(expression: string): Expression;
    static createWithExpressionAndArgumentValues(expression: string, ...argumentValues: Argument[]): Expression;
}
