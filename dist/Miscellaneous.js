"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModification = exports.HeadEqBody = exports.KwTypeComparator = exports.DescKwLenComparator = exports.KwStrComparator = exports.SyntaxStackElement = exports.TokenStackElement = exports.ArgumentParameter = exports.IterativeOperatorParameters = exports.FunctionParameter = void 0;
const ConstantValue_1 = require("./parsertokens/ConstantValue");
const j4ts_1 = require("j4ts/j4ts");
const mXparserConstants_1 = require("./mXparserConstants");
const Expression_1 = require("./Expression");
const ExpressionConstants_1 = require("./ExpressionConstants");
/**
 * Package level class for handling function parameters.
 * @class
 */
class FunctionParameter {
    constructor(tokens, paramStr, fromIndex, toIndex) {
        if (this.tokens === undefined) {
            this.tokens = null;
        }
        if (this.paramStr === undefined) {
            this.paramStr = null;
        }
        if (this.fromIndex === undefined) {
            this.fromIndex = 0;
        }
        if (this.toIndex === undefined) {
            this.toIndex = 0;
        }
        this.tokens = tokens;
        this.paramStr = paramStr;
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
    }
}
exports.FunctionParameter = FunctionParameter;
FunctionParameter["__class"] = "org.mariuszgromada.math.mxparser.FunctionParameter";
/**
 * Package level class for generating iterative operator parameters
 * @class
 */
class IterativeOperatorParameters {
    constructor(functionParameters) {
        if (this.indexParam === undefined) {
            this.indexParam = null;
        }
        if (this.fromParam === undefined) {
            this.fromParam = null;
        }
        if (this.toParam === undefined) {
            this.toParam = null;
        }
        if (this.funParam === undefined) {
            this.funParam = null;
        }
        if (this.deltaParam === undefined) {
            this.deltaParam = null;
        }
        if (this.fromExp === undefined) {
            this.fromExp = null;
        }
        if (this.toExp === undefined) {
            this.toExp = null;
        }
        if (this.funExp === undefined) {
            this.funExp = null;
        }
        if (this.deltaExp === undefined) {
            this.deltaExp = null;
        }
        if (this.from === undefined) {
            this.from = 0;
        }
        if (this.to === undefined) {
            this.to = 0;
        }
        if (this.delta === undefined) {
            this.delta = 0;
        }
        if (this.withDelta === undefined) {
            this.withDelta = false;
        }
        this.indexParam = functionParameters.get(0);
        this.fromParam = functionParameters.get(1);
        this.toParam = functionParameters.get(2);
        this.funParam = functionParameters.get(3);
        this.deltaParam = null;
        this.withDelta = false;
        if (functionParameters.size() === 5) {
            this.deltaParam = functionParameters.get(4);
            this.withDelta = true;
        }
    }
}
exports.IterativeOperatorParameters = IterativeOperatorParameters;
IterativeOperatorParameters["__class"] = "org.mariuszgromada.math.mxparser.IterativeOperatorParameters";
/**
 * Handling argument parameters
 * @class
 */
class ArgumentParameter {
    constructor() {
        if (this.argument === undefined) {
            this.argument = null;
        }
        if (this.initialValue === undefined) {
            this.initialValue = 0;
        }
        if (this.initialType === undefined) {
            this.initialType = 0;
        }
        if (this.presence === undefined) {
            this.presence = 0;
        }
        if (this.index === undefined) {
            this.index = 0;
        }
        this.argument = null;
        this.initialValue = j4ts_1.javaemul.internal.DoubleHelper.NaN;
        this.initialType = ConstantValue_1.ConstantValue.NaN;
        this.presence = ExpressionConstants_1.ExpressionConstants.NOT_FOUND_$LI$();
    }
}
exports.ArgumentParameter = ArgumentParameter;
ArgumentParameter["__class"] = "org.mariuszgromada.math.mxparser.ArgumentParameter";
/**
 * Internal token class
 * which is used with stack while
 * evaluation of tokens levels
 * @class
 */
class TokenStackElement {
    constructor() {
        if (this.tokenIndex === undefined) {
            this.tokenIndex = 0;
        }
        if (this.tokenId === undefined) {
            this.tokenId = 0;
        }
        if (this.tokenTypeId === undefined) {
            this.tokenTypeId = 0;
        }
        if (this.tokenLevel === undefined) {
            this.tokenLevel = 0;
        }
        if (this.precedingFunction === undefined) {
            this.precedingFunction = false;
        }
    }
}
exports.TokenStackElement = TokenStackElement;
TokenStackElement["__class"] = "org.mariuszgromada.math.mxparser.TokenStackElement";
class SyntaxStackElement {
    constructor(tokenStr, tokenLevel) {
        if (this.tokenStr === undefined) {
            this.tokenStr = null;
        }
        if (this.tokenLevel === undefined) {
            this.tokenLevel = 0;
        }
        this.tokenStr = tokenStr;
        this.tokenLevel = tokenLevel;
    }
}
exports.SyntaxStackElement = SyntaxStackElement;
SyntaxStackElement["__class"] = "org.mariuszgromada.math.mxparser.SyntaxStackElement";
/**
 * Comparator for key word list sorting by key word string.
 * This king of sorting is used while checking the syntax
 * (duplicated key word error)
 * @class
 */
class KwStrComparator {
    /**
     * @param {KeyWord} kw1
     * @param {KeyWord} kw2
     * @return {number}
     */
    compare(kw1, kw2) {
        const s1 = kw1.wordString;
        const s2 = kw2.wordString;
        return /* compareTo */ s1.localeCompare(s2);
    }
    constructor() {
    }
}
exports.KwStrComparator = KwStrComparator;
KwStrComparator["__class"] = "org.mariuszgromada.math.mxparser.KwStrComparator";
KwStrComparator["__interfaces"] = ["java.util.Comparator"];
/**
 * Comparator for key word list sorting by
 * descending key word length
 * .
 * This king of sorting is used while tokenizing
 * (best match)
 * @class
 */
class DescKwLenComparator {
    /**
     * @param {KeyWord} kw1
     * @param {KeyWord} kw2
     * @return {number}
     */
    compare(kw1, kw2) {
        const l1 = kw1.wordString.length;
        const l2 = kw2.wordString.length;
        return l2 - l1;
    }
    constructor() {
    }
}
exports.DescKwLenComparator = DescKwLenComparator;
DescKwLenComparator["__class"] = "org.mariuszgromada.math.mxparser.DescKwLenComparator";
DescKwLenComparator["__interfaces"] = ["java.util.Comparator"];
/**
 * Comparator for key word list sorting by
 * type of the key word
 * @class
 */
class KwTypeComparator {
    /**
     * @param {KeyWord} kw1
     * @param {KeyWord} kw2
     * @return {number}
     */
    compare(kw1, kw2) {
        const t1 = kw1.wordTypeId * 1000000 + kw1.wordId * 1000 + kw1.wordString.length;
        const t2 = kw2.wordTypeId * 1000000 + kw2.wordId * 1000 + kw2.wordString.length;
        return t1 - t2;
    }
    constructor() {
    }
}
exports.KwTypeComparator = KwTypeComparator;
KwTypeComparator["__class"] = "org.mariuszgromada.math.mxparser.KwTypeComparator";
KwTypeComparator["__interfaces"] = ["java.util.Comparator"];
class HeadEqBody {
    constructor(definitionString) {
        this.ONLY_PARSER_KEYWORDS = true;
        if (this.headStr === undefined) {
            this.headStr = null;
        }
        if (this.bodyStr === undefined) {
            this.bodyStr = null;
        }
        if (this.eqPos === undefined) {
            this.eqPos = 0;
        }
        if (this.headTokens === undefined) {
            this.headTokens = null;
        }
        if (this.definitionError === undefined) {
            this.definitionError = false;
        }
        let c;
        this.eqPos = 0;
        let matchStatus = mXparserConstants_1.mXparserConstants.NOT_FOUND;
        this.definitionError = false;
        do {
            {
                c = definitionString.charAt(this.eqPos);
                if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '='.charCodeAt(0))
                    matchStatus = mXparserConstants_1.mXparserConstants.FOUND;
                else
                    this.eqPos++;
            }
        } while (((this.eqPos < definitionString.length) && (matchStatus === mXparserConstants_1.mXparserConstants.NOT_FOUND)));
        if ((matchStatus === mXparserConstants_1.mXparserConstants.FOUND) && (this.eqPos > 0) && (this.eqPos <= definitionString.length - 2)) {
            this.headStr = definitionString.substring(0, this.eqPos);
            this.bodyStr = definitionString.substring(this.eqPos + 1);
            const headExpression = new Expression_1.Expression(this.headStr, this.ONLY_PARSER_KEYWORDS);
            this.headTokens = headExpression.getCopyOfInitialTokens();
        }
        else {
            this.definitionError = true;
            this.headStr = "";
            this.bodyStr = "";
            this.headTokens = null;
            this.eqPos = -1;
        }
    }
}
exports.HeadEqBody = HeadEqBody;
HeadEqBody["__class"] = "org.mariuszgromada.math.mxparser.HeadEqBody";
/**
 * Data structure used internally for token to be modified list
 * @class
 */
class TokenModification {
    constructor() {
        if (this.currentToken === undefined) {
            this.currentToken = null;
        }
        if (this.newToken === undefined) {
            this.newToken = null;
        }
        if (this.newTokenDescription === undefined) {
            this.newTokenDescription = null;
        }
    }
}
exports.TokenModification = TokenModification;
TokenModification["__class"] = "org.mariuszgromada.math.mxparser.TokenModification";
//# sourceMappingURL=Miscellaneous.js.map