import { java } from 'j4ts/j4ts';
import { Token } from './Token';
import { SimpleCharStream } from './SimpleCharStream';
import { SyntaxCheckerTokenManager } from './SyntaxCheckerTokenManager';
import { ParseException } from './ParseException';
import { SyntaxCheckerConstants } from './SyntaxCheckerConstants';
/**
 * Constructor with InputStream and supplied encoding
 * @param {InputStream} stream
 * @param {string} encoding
 * @class
 */
export declare class SyntaxChecker implements SyntaxCheckerConstants {
    static __static_initialized: boolean;
    static __static_initialize(): void;
    checkSyntax(): void;
    start(): void;
    expression(): void;
    binaryExpression(): void;
    unaryRigthExpression(): void;
    unaryLeftExpression(): void;
    itemExpression(): void;
    argumentList(): void;
    identifier(): void;
    /**
     * Generated Token Manager.
     */
    token_source: SyntaxCheckerTokenManager;
    jj_input_stream: SimpleCharStream;
    /**
     * Current token.
     */
    token: Token;
    /**
     * Next token.
     */
    jj_nt: Token;
    jj_ntk: number;
    jj_gen: number;
    jj_la1: number[];
    static jj_la1_0: number[];
    static jj_la1_0_$LI$(): number[];
    static jj_la1_1: number[];
    static jj_la1_1_$LI$(): number[];
    static jj_la1_2: number[];
    static jj_la1_2_$LI$(): number[];
    static jj_la1_3: number[];
    static jj_la1_3_$LI$(): number[];
    static jj_la1_4: number[];
    static jj_la1_4_$LI$(): number[];
    static __static_initializer_0(): void;
    static jj_la1_init_0(): void;
    static jj_la1_init_1(): void;
    static jj_la1_init_2(): void;
    static jj_la1_init_3(): void;
    static jj_la1_init_4(): void;
    constructor(stream?: any, encoding?: any);
    ReInit$java_io_InputStream(stream: java.io.InputStream): void;
    ReInit$java_io_InputStream$java_lang_String(stream: java.io.InputStream, encoding: string): void;
    /**
     * Reinitialise.
     * @param {InputStream} stream
     * @param {string} encoding
     */
    ReInit(stream?: any, encoding?: any): any;
    ReInit$java_io_Reader(stream: java.io.Reader): void;
    ReInit$org_mariuszgromada_math_mxparser_syntaxchecker_SyntaxCheckerTokenManager(tm: SyntaxCheckerTokenManager): void;
    jj_consume_token(kind: number): Token;
    /**
     * Get the next Token.
     * @return {Token}
     */
    getNextToken(): Token;
    /**
     * Get the specific Token.
     * @param {number} index
     * @return {Token}
     */
    getToken(index: number): Token;
    jj_ntk_f(): number;
    jj_expentries: java.util.List<number[]>;
    jj_expentry: number[];
    jj_kind: number;
    /**
     * Generate ParseException.
     * @return {ParseException}
     */
    generateParseException(): ParseException;
    /**
     * Enable tracing.
     */
    enable_tracing(): void;
    /**
     * Disable tracing.
     */
    disable_tracing(): void;
}
