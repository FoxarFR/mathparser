import { SimpleCharStream } from './SimpleCharStream';
import { Token } from './Token';
import { SyntaxCheckerConstants } from './SyntaxCheckerConstants';
import { java } from 'j4ts/j4ts';
/**
 * Constructor.
 * @param {SimpleCharStream} stream
 * @param {number} lexState
 * @class
 */
export declare class SyntaxCheckerTokenManager implements SyntaxCheckerConstants {
    /**
     * Debug output.
     */
    debugStream: java.io.PrintStream;
    /**
     * Set debug output.
     * @param {PrintStream} ds
     */
    setDebugStream(ds: java.io.PrintStream): void;
    jjStopStringLiteralDfa_0(pos: number, active0: bigint, active1: bigint): number;
    jjStartNfa_0(pos: number, active0: bigint, active1: bigint): bigint;
    jjStopAtPos(pos: bigint, kind: bigint): bigint;
    jjMoveStringLiteralDfa0_0(): bigint;
    jjMoveStringLiteralDfa1_0(active0: bigint, active1: bigint): bigint;
    jjMoveStringLiteralDfa2_0(old0: bigint, active0: bigint, old1: bigint, active1: bigint): bigint;
    jjStartNfaWithStates_0(pos: number, kind: bigint, state: number): bigint;
    jjMoveNfa_0(startState: number, curPos: number): bigint;
    static jjnextStates: number[];
    static jjnextStates_$LI$(): number[];
    /**
     * Token literal values.
     */
    static jjstrLiteralImages: string[];
    static jjstrLiteralImages_$LI$(): string[];
    jjFillToken(): Token;
    curLexState: bigint;
    defaultLexState: bigint;
    jjnewStateCnt: number;
    jjround: bigint;
    jjmatchedPos: bigint;
    jjmatchedKind: bigint;
    /**
     * Get the next Token.
     * @return {Token}
     */
    getNextToken(): Token;
    jjCheckNAdd(state: number): void;
    jjAddStates(start: number, end: number): void;
    jjCheckNAddTwoStates(state1: number, state2: number): void;
    jjCheckNAddStates(start: number, end: number): void;
    constructor(stream?: any, lexState?: any);
    ReInit$org_mariuszgromada_math_mxparser_syntaxchecker_SimpleCharStream(stream: SimpleCharStream): void;
    ReInitRounds(): void;
    ReInit$org_mariuszgromada_math_mxparser_syntaxchecker_SimpleCharStream$int(stream: SimpleCharStream, lexState: bigint): void;
    /**
     * Reinitialise parser.
     * @param {SimpleCharStream} stream
     * @param {number} lexState
     */
    ReInit(stream?: any, lexState?: any): any;
    /**
     * Switch to specified lex state.
     * @param {bigint} lexState
     */
    SwitchTo(lexState: bigint): void;
    /**
     * Lexer state names.
     */
    static lexStateNames: string[];
    static lexStateNames_$LI$(): string[];
    static jjtoToken: bigint[];
    static jjtoToken_$LI$(): bigint[];
    static jjtoSkip: bigint[];
    static jjtoSkip_$LI$(): bigint[];
    input_stream: SimpleCharStream;
    jjrounds: bigint[];
    jjstateSet: number[];
    curChar: string;
}
