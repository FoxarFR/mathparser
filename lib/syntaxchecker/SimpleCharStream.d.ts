import { java } from 'j4ts/j4ts';
/**
 * Constructor.
 * @param {java.io.InputStream} dstream
 * @param {string} encoding
 * @param {number} startline
 * @param {number} startcolumn
 * @param {number} buffersize
 * @class
 */
export declare class SimpleCharStream {
    /**
     * Whether parser is static.
     */
    static staticFlag: boolean;
    bufsize: number;
    available: number;
    tokenBegin: number;
    /**
     * Position in buffer.
     */
    bufpos: number;
    bufline: number[];
    bufcolumn: number[];
    column: number;
    line: number;
    prevCharIsCR: boolean;
    prevCharIsLF: boolean;
    inputStream: java.io.Reader;
    buffer: string[];
    maxNextCharInd: number;
    inBuf: number;
    tabSize: number;
    trackLineColumn: boolean;
    setTabSize(i: number): void;
    getTabSize(): number;
    ExpandBuff(wrapAround: boolean): void;
    FillBuff(): void;
    /**
     * Start.
     * @return {string}
     */
    BeginToken(): string;
    UpdateLineColumn(c: string): void;
    /**
     * Read a character.
     * @return {string}
     */
    readChar(): string;
    getColumn(): number;
    getLine(): number;
    /**
     * Get token end column number.
     * @return {number}
     */
    getEndColumn(): number;
    /**
     * Get token end line number.
     * @return {number}
     */
    getEndLine(): number;
    /**
     * Get token beginning column number.
     * @return {number}
     */
    getBeginColumn(): number;
    /**
     * Get token beginning line number.
     * @return {number}
     */
    getBeginLine(): number;
    /**
     * Backup a number of characters.
     * @param {number} amount
     */
    backup(amount: number): void;
    ReInit$java_io_Reader$int$int$int(dstream: java.io.Reader, startline: number, startcolumn: number, buffersize: number): void;
    ReInit$java_io_Reader$int$int(dstream: java.io.Reader, startline: number, startcolumn: number): void;
    ReInit$java_io_Reader(dstream: java.io.Reader): void;
    constructor(dstream?: any, encoding?: any, startline?: any, startcolumn?: any, buffersize?: any);
    ReInit$java_io_InputStream$java_lang_String$int$int$int(dstream: java.io.InputStream, encoding: string, startline: number, startcolumn: number, buffersize: number): void;
    /**
     * Reinitialise.
     * @param {java.io.InputStream} dstream
     * @param {string} encoding
     * @param {number} startline
     * @param {number} startcolumn
     * @param {number} buffersize
     */
    ReInit(dstream?: any, encoding?: any, startline?: any, startcolumn?: any, buffersize?: any): any;
    ReInit$java_io_InputStream$int$int$int(dstream: java.io.InputStream, startline: number, startcolumn: number, buffersize: number): void;
    ReInit$java_io_InputStream$java_lang_String(dstream: java.io.InputStream, encoding: string): void;
    ReInit$java_io_InputStream(dstream: java.io.InputStream): void;
    ReInit$java_io_InputStream$java_lang_String$int$int(dstream: java.io.InputStream, encoding: string, startline: number, startcolumn: number): void;
    ReInit$java_io_InputStream$int$int(dstream: java.io.InputStream, startline: number, startcolumn: number): void;
    /**
     * Get token literal value.
     * @return {string}
     */
    GetImage(): string;
    /**
     * Get the suffix.
     * @param {number} len
     * @return {char[]}
     */
    GetSuffix(len: number): string[];
    /**
     * Reset buffer when finished.
     */
    Done(): void;
    /**
     * Method to adjust line and column numbers for the start of a token.
     * @param {number} newLine
     * @param {number} newCol
     */
    adjustBeginLineColumn(newLine: number, newCol: number): void;
    getTrackLineColumn(): boolean;
    setTrackLineColumn(tlc: boolean): void;
}
