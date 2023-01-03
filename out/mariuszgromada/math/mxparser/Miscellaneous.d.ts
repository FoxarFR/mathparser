import { KeyWord } from './parsertokens/KeyWord';
import { Token } from './parsertokens/Token';
import { java } from 'j4ts/j4ts';
import { Argument } from './Argument';
import { Expression } from './Expression';
/**
 * Package level class for handling function parameters.
 * @class
 */
export declare class FunctionParameter {
    tokens: java.util.List<Token>;
    paramStr: string;
    fromIndex: number;
    toIndex: number;
    constructor(tokens: java.util.List<Token>, paramStr: string, fromIndex: number, toIndex: number);
}
/**
 * Package level class for generating iterative operator parameters
 * @class
 */
export declare class IterativeOperatorParameters {
    indexParam: FunctionParameter;
    fromParam: FunctionParameter;
    toParam: FunctionParameter;
    funParam: FunctionParameter;
    deltaParam: FunctionParameter;
    fromExp: Expression;
    toExp: Expression;
    funExp: Expression;
    deltaExp: Expression;
    from: number;
    to: number;
    delta: number;
    withDelta: boolean;
    constructor(functionParameters: java.util.List<FunctionParameter>);
}
/**
 * Handling argument parameters
 * @class
 */
export declare class ArgumentParameter {
    argument: Argument;
    initialValue: number;
    initialType: number;
    presence: number;
    index: number;
    constructor();
}
/**
 * Internal token class
 * which is used with stack while
 * evaluation of tokens levels
 * @class
 */
export declare class TokenStackElement {
    tokenIndex: number;
    tokenId: number;
    tokenTypeId: number;
    tokenLevel: number;
    precedingFunction: boolean;
    constructor();
}
export declare class SyntaxStackElement {
    tokenStr: string;
    tokenLevel: number;
    constructor(tokenStr: string, tokenLevel: number);
}
/**
 * Comparator for key word list sorting by key word string.
 * This king of sorting is used while checking the syntax
 * (duplicated key word error)
 * @class
 */
export declare class KwStrComparator {
    /**
     * @param {KeyWord} kw1
     * @param {KeyWord} kw2
     * @return {number}
     */
    compare(kw1: KeyWord, kw2: KeyWord): number;
    constructor();
}
/**
 * Comparator for key word list sorting by
 * descending key word length
 * .
 * This king of sorting is used while tokenizing
 * (best match)
 * @class
 */
export declare class DescKwLenComparator {
    /**
     * @param {KeyWord} kw1
     * @param {KeyWord} kw2
     * @return {number}
     */
    compare(kw1: KeyWord, kw2: KeyWord): number;
    constructor();
}
/**
 * Comparator for key word list sorting by
 * type of the key word
 * @class
 */
export declare class KwTypeComparator {
    /**
     * @param {KeyWord} kw1
     * @param {KeyWord} kw2
     * @return {number}
     */
    compare(kw1: KeyWord, kw2: KeyWord): number;
    constructor();
}
export declare class HeadEqBody {
    ONLY_PARSER_KEYWORDS: boolean;
    headStr: string;
    bodyStr: string;
    eqPos: number;
    headTokens: java.util.List<Token>;
    definitionError: boolean;
    constructor(definitionString: string);
}
/**
 * Data structure used internally for token to be modified list
 * @class
 */
export declare class TokenModification {
    currentToken: string;
    newToken: string;
    newTokenDescription: string;
    constructor();
}
