"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCharStream = void 0;
const j4ts_1 = require("j4ts/j4ts");
/**
 * Constructor.
 * @param {java.io.InputStream} dstream
 * @param {string} encoding
 * @param {number} startline
 * @param {number} startcolumn
 * @param {number} buffersize
 * @class
 */
class SimpleCharStream {
    setTabSize(i) {
        this.tabSize = i;
    }
    getTabSize() {
        return this.tabSize;
    }
    ExpandBuff(wrapAround) {
        const newbuffer = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(this.bufsize + 2048);
        const newbufline = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(this.bufsize + 2048);
        const newbufcolumn = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(this.bufsize + 2048);
        try {
            if (wrapAround) {
                j4ts_1.java.lang.System.arraycopy(this.buffer, this.tokenBegin, newbuffer, 0, this.bufsize - this.tokenBegin);
                j4ts_1.java.lang.System.arraycopy(this.buffer, 0, newbuffer, this.bufsize - this.tokenBegin, this.bufpos);
                this.buffer = newbuffer;
                j4ts_1.java.lang.System.arraycopy(this.bufline, this.tokenBegin, newbufline, 0, this.bufsize - this.tokenBegin);
                j4ts_1.java.lang.System.arraycopy(this.bufline, 0, newbufline, this.bufsize - this.tokenBegin, this.bufpos);
                this.bufline = newbufline;
                j4ts_1.java.lang.System.arraycopy(this.bufcolumn, this.tokenBegin, newbufcolumn, 0, this.bufsize - this.tokenBegin);
                j4ts_1.java.lang.System.arraycopy(this.bufcolumn, 0, newbufcolumn, this.bufsize - this.tokenBegin, this.bufpos);
                this.bufcolumn = newbufcolumn;
                this.maxNextCharInd = (this.bufpos += (this.bufsize - this.tokenBegin));
            }
            else {
                j4ts_1.java.lang.System.arraycopy(this.buffer, this.tokenBegin, newbuffer, 0, this.bufsize - this.tokenBegin);
                this.buffer = newbuffer;
                j4ts_1.java.lang.System.arraycopy(this.bufline, this.tokenBegin, newbufline, 0, this.bufsize - this.tokenBegin);
                this.bufline = newbufline;
                j4ts_1.java.lang.System.arraycopy(this.bufcolumn, this.tokenBegin, newbufcolumn, 0, this.bufsize - this.tokenBegin);
                this.bufcolumn = newbufcolumn;
                this.maxNextCharInd = (this.bufpos -= this.tokenBegin);
            }
        }
        catch (t) {
            throw new Error(t.message);
        }
        this.bufsize += 2048;
        this.available = this.bufsize;
        this.tokenBegin = 0;
    }
    FillBuff() {
        if (this.maxNextCharInd === this.available) {
            if (this.available === this.bufsize) {
                if (this.tokenBegin > 2048) {
                    this.bufpos = this.maxNextCharInd = 0;
                    this.available = this.tokenBegin;
                }
                else if (this.tokenBegin < 0)
                    this.bufpos = this.maxNextCharInd = 0;
                else
                    this.ExpandBuff(false);
            }
            else if (this.available > this.tokenBegin)
                this.available = this.bufsize;
            else if ((this.tokenBegin - this.available) < 2048)
                this.ExpandBuff(true);
            else
                this.available = this.tokenBegin;
        }
        let i;
        try {
            if ((i = this.inputStream.read(this.buffer, this.maxNextCharInd, this.available - this.maxNextCharInd)) === -1) {
                this.inputStream.close();
                throw new j4ts_1.java.io.IOException();
            }
            else
                this.maxNextCharInd += i;
            return;
        }
        catch (e) {
            --this.bufpos;
            this.backup(0);
            if (this.tokenBegin === -1)
                this.tokenBegin = this.bufpos;
            throw e;
        }
    }
    /**
     * Start.
     * @return {string}
     */
    BeginToken() {
        this.tokenBegin = -1;
        const c = this.readChar();
        this.tokenBegin = this.bufpos;
        return c;
    }
    UpdateLineColumn(c) {
        this.column++;
        if (this.prevCharIsLF) {
            this.prevCharIsLF = false;
            this.line += (this.column = 1);
        }
        else if (this.prevCharIsCR) {
            this.prevCharIsCR = false;
            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                this.prevCharIsLF = true;
            }
            else
                this.line += (this.column = 1);
        }
        switch ((c).charCodeAt(0)) {
            case 13 /* '\r' */:
                this.prevCharIsCR = true;
                break;
            case 10 /* '\n' */:
                this.prevCharIsLF = true;
                break;
            case 9 /* '\t' */:
                this.column--;
                this.column += (this.tabSize - (this.column % this.tabSize));
                break;
            default:
                break;
        }
        this.bufline[this.bufpos] = this.line;
        this.bufcolumn[this.bufpos] = this.column;
    }
    /**
     * Read a character.
     * @return {string}
     */
    readChar() {
        if (this.inBuf > 0) {
            --this.inBuf;
            if (++this.bufpos === this.bufsize)
                this.bufpos = 0;
            return this.buffer[this.bufpos];
        }
        if (++this.bufpos >= this.maxNextCharInd)
            this.FillBuff();
        const c = this.buffer[this.bufpos];
        this.UpdateLineColumn(c);
        return c;
    }
    getColumn() {
        return this.bufcolumn[this.bufpos];
    }
    getLine() {
        return this.bufline[this.bufpos];
    }
    /**
     * Get token end column number.
     * @return {number}
     */
    getEndColumn() {
        return this.bufcolumn[this.bufpos];
    }
    /**
     * Get token end line number.
     * @return {number}
     */
    getEndLine() {
        return this.bufline[this.bufpos];
    }
    /**
     * Get token beginning column number.
     * @return {number}
     */
    getBeginColumn() {
        return this.bufcolumn[this.tokenBegin];
    }
    /**
     * Get token beginning line number.
     * @return {number}
     */
    getBeginLine() {
        return this.bufline[this.tokenBegin];
    }
    /**
     * Backup a number of characters.
     * @param {number} amount
     */
    backup(amount) {
        this.inBuf += amount;
        if ((this.bufpos -= amount) < 0)
            this.bufpos += this.bufsize;
    }
    ReInit$java_io_Reader$int$int$int(dstream, startline, startcolumn, buffersize) {
        this.inputStream = dstream;
        this.line = startline;
        this.column = startcolumn - 1;
        if (this.buffer == null || buffersize !== this.buffer.length) {
            this.available = this.bufsize = buffersize;
            this.buffer = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })(buffersize);
            this.bufline = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(buffersize);
            this.bufcolumn = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(buffersize);
        }
        this.prevCharIsLF = this.prevCharIsCR = false;
        this.tokenBegin = this.inBuf = this.maxNextCharInd = 0;
        this.bufpos = -1;
    }
    ReInit$java_io_Reader$int$int(dstream, startline, startcolumn) {
        this.ReInit$java_io_Reader$int$int$int(dstream, startline, startcolumn, 4096);
    }
    ReInit$java_io_Reader(dstream) {
        this.ReInit$java_io_Reader$int$int$int(dstream, 1, 1, 4096);
    }
    constructor(dstream, encoding, startline, startcolumn, buffersize) {
        if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && ((typeof buffersize === 'number') || buffersize === null)) {
            let __args = arguments;
            {
                let __args = arguments;
                let dstream = encoding == null ? new j4ts_1.java.io.InputStreamReader(__args[0]) : new j4ts_1.java.io.InputStreamReader(__args[0], encoding);
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
                this.inputStream = dstream;
                this.line = startline;
                this.column = startcolumn - 1;
                this.available = this.bufsize = buffersize;
                this.buffer = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(buffersize);
                this.bufline = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
                this.bufcolumn = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && buffersize === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let buffersize = 4096;
                {
                    let __args = arguments;
                    let dstream = encoding == null ? new j4ts_1.java.io.InputStreamReader(__args[0]) : new j4ts_1.java.io.InputStreamReader(__args[0], encoding);
                    if (this.bufsize === undefined) {
                        this.bufsize = 0;
                    }
                    if (this.available === undefined) {
                        this.available = 0;
                    }
                    if (this.tokenBegin === undefined) {
                        this.tokenBegin = 0;
                    }
                    if (this.bufline === undefined) {
                        this.bufline = null;
                    }
                    if (this.bufcolumn === undefined) {
                        this.bufcolumn = null;
                    }
                    if (this.inputStream === undefined) {
                        this.inputStream = null;
                    }
                    if (this.buffer === undefined) {
                        this.buffer = null;
                    }
                    this.bufpos = -1;
                    this.column = 0;
                    this.line = 1;
                    this.prevCharIsCR = false;
                    this.prevCharIsLF = false;
                    this.maxNextCharInd = 0;
                    this.inBuf = 0;
                    this.tabSize = 8;
                    this.trackLineColumn = true;
                    this.inputStream = dstream;
                    this.line = startline;
                    this.column = startcolumn - 1;
                    this.available = this.bufsize = buffersize;
                    this.buffer = (s => { let a = []; while (s-- > 0)
                        a.push(null); return a; })(buffersize);
                    this.bufline = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                    this.bufcolumn = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                }
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.Reader) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && buffersize === undefined) {
            let __args = arguments;
            let startline = __args[1];
            let startcolumn = __args[2];
            let buffersize = __args[3];
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
            this.inputStream = dstream;
            this.line = startline;
            this.column = startcolumn - 1;
            this.available = this.bufsize = buffersize;
            this.buffer = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })(buffersize);
            this.bufline = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(buffersize);
            this.bufcolumn = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(buffersize);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && buffersize === undefined) {
            let __args = arguments;
            let startline = __args[1];
            let startcolumn = __args[2];
            let buffersize = __args[3];
            {
                let __args = arguments;
                let dstream = new j4ts_1.java.io.InputStreamReader(__args[0]);
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
                this.inputStream = dstream;
                this.line = startline;
                this.column = startcolumn - 1;
                this.available = this.bufsize = buffersize;
                this.buffer = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(buffersize);
                this.bufline = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
                this.bufcolumn = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.Reader) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && startcolumn === undefined && buffersize === undefined) {
            let __args = arguments;
            let startline = __args[1];
            let startcolumn = __args[2];
            {
                let __args = arguments;
                let buffersize = 4096;
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
                this.inputStream = dstream;
                this.line = startline;
                this.column = startcolumn - 1;
                this.available = this.bufsize = buffersize;
                this.buffer = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(buffersize);
                this.bufline = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
                this.bufcolumn = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && startcolumn === undefined && buffersize === undefined) {
            let __args = arguments;
            let startline = __args[1];
            let startcolumn = __args[2];
            {
                let __args = arguments;
                let buffersize = 4096;
                {
                    let __args = arguments;
                    let dstream = new j4ts_1.java.io.InputStreamReader(__args[0]);
                    if (this.bufsize === undefined) {
                        this.bufsize = 0;
                    }
                    if (this.available === undefined) {
                        this.available = 0;
                    }
                    if (this.tokenBegin === undefined) {
                        this.tokenBegin = 0;
                    }
                    if (this.bufline === undefined) {
                        this.bufline = null;
                    }
                    if (this.bufcolumn === undefined) {
                        this.bufcolumn = null;
                    }
                    if (this.inputStream === undefined) {
                        this.inputStream = null;
                    }
                    if (this.buffer === undefined) {
                        this.buffer = null;
                    }
                    this.bufpos = -1;
                    this.column = 0;
                    this.line = 1;
                    this.prevCharIsCR = false;
                    this.prevCharIsLF = false;
                    this.maxNextCharInd = 0;
                    this.inBuf = 0;
                    this.tabSize = 8;
                    this.trackLineColumn = true;
                    this.inputStream = dstream;
                    this.line = startline;
                    this.column = startcolumn - 1;
                    this.available = this.bufsize = buffersize;
                    this.buffer = (s => { let a = []; while (s-- > 0)
                        a.push(null); return a; })(buffersize);
                    this.bufline = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                    this.bufcolumn = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                }
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'string') || encoding === null) && startline === undefined && startcolumn === undefined && buffersize === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let startline = 1;
                let startcolumn = 1;
                let buffersize = 4096;
                {
                    let __args = arguments;
                    let dstream = encoding == null ? new j4ts_1.java.io.InputStreamReader(__args[0]) : new j4ts_1.java.io.InputStreamReader(__args[0], encoding);
                    if (this.bufsize === undefined) {
                        this.bufsize = 0;
                    }
                    if (this.available === undefined) {
                        this.available = 0;
                    }
                    if (this.tokenBegin === undefined) {
                        this.tokenBegin = 0;
                    }
                    if (this.bufline === undefined) {
                        this.bufline = null;
                    }
                    if (this.bufcolumn === undefined) {
                        this.bufcolumn = null;
                    }
                    if (this.inputStream === undefined) {
                        this.inputStream = null;
                    }
                    if (this.buffer === undefined) {
                        this.buffer = null;
                    }
                    this.bufpos = -1;
                    this.column = 0;
                    this.line = 1;
                    this.prevCharIsCR = false;
                    this.prevCharIsLF = false;
                    this.maxNextCharInd = 0;
                    this.inBuf = 0;
                    this.tabSize = 8;
                    this.trackLineColumn = true;
                    this.inputStream = dstream;
                    this.line = startline;
                    this.column = startcolumn - 1;
                    this.available = this.bufsize = buffersize;
                    this.buffer = (s => { let a = []; while (s-- > 0)
                        a.push(null); return a; })(buffersize);
                    this.bufline = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                    this.bufcolumn = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                }
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.Reader) || dstream === null) && encoding === undefined && startline === undefined && startcolumn === undefined && buffersize === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let startline = 1;
                let startcolumn = 1;
                let buffersize = 4096;
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
                this.inputStream = dstream;
                this.line = startline;
                this.column = startcolumn - 1;
                this.available = this.bufsize = buffersize;
                this.buffer = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(buffersize);
                this.bufline = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
                this.bufcolumn = (s => { let a = []; while (s-- > 0)
                    a.push(0); return a; })(buffersize);
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && encoding === undefined && startline === undefined && startcolumn === undefined && buffersize === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let startline = 1;
                let startcolumn = 1;
                let buffersize = 4096;
                {
                    let __args = arguments;
                    let dstream = new j4ts_1.java.io.InputStreamReader(__args[0]);
                    if (this.bufsize === undefined) {
                        this.bufsize = 0;
                    }
                    if (this.available === undefined) {
                        this.available = 0;
                    }
                    if (this.tokenBegin === undefined) {
                        this.tokenBegin = 0;
                    }
                    if (this.bufline === undefined) {
                        this.bufline = null;
                    }
                    if (this.bufcolumn === undefined) {
                        this.bufcolumn = null;
                    }
                    if (this.inputStream === undefined) {
                        this.inputStream = null;
                    }
                    if (this.buffer === undefined) {
                        this.buffer = null;
                    }
                    this.bufpos = -1;
                    this.column = 0;
                    this.line = 1;
                    this.prevCharIsCR = false;
                    this.prevCharIsLF = false;
                    this.maxNextCharInd = 0;
                    this.inBuf = 0;
                    this.tabSize = 8;
                    this.trackLineColumn = true;
                    this.inputStream = dstream;
                    this.line = startline;
                    this.column = startcolumn - 1;
                    this.available = this.bufsize = buffersize;
                    this.buffer = (s => { let a = []; while (s-- > 0)
                        a.push(null); return a; })(buffersize);
                    this.bufline = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                    this.bufcolumn = (s => { let a = []; while (s-- > 0)
                        a.push(0); return a; })(buffersize);
                }
                if (this.bufsize === undefined) {
                    this.bufsize = 0;
                }
                if (this.available === undefined) {
                    this.available = 0;
                }
                if (this.tokenBegin === undefined) {
                    this.tokenBegin = 0;
                }
                if (this.bufline === undefined) {
                    this.bufline = null;
                }
                if (this.bufcolumn === undefined) {
                    this.bufcolumn = null;
                }
                if (this.inputStream === undefined) {
                    this.inputStream = null;
                }
                if (this.buffer === undefined) {
                    this.buffer = null;
                }
                this.bufpos = -1;
                this.column = 0;
                this.line = 1;
                this.prevCharIsCR = false;
                this.prevCharIsLF = false;
                this.maxNextCharInd = 0;
                this.inBuf = 0;
                this.tabSize = 8;
                this.trackLineColumn = true;
            }
            if (this.bufsize === undefined) {
                this.bufsize = 0;
            }
            if (this.available === undefined) {
                this.available = 0;
            }
            if (this.tokenBegin === undefined) {
                this.tokenBegin = 0;
            }
            if (this.bufline === undefined) {
                this.bufline = null;
            }
            if (this.bufcolumn === undefined) {
                this.bufcolumn = null;
            }
            if (this.inputStream === undefined) {
                this.inputStream = null;
            }
            if (this.buffer === undefined) {
                this.buffer = null;
            }
            this.bufpos = -1;
            this.column = 0;
            this.line = 1;
            this.prevCharIsCR = false;
            this.prevCharIsLF = false;
            this.maxNextCharInd = 0;
            this.inBuf = 0;
            this.tabSize = 8;
            this.trackLineColumn = true;
        }
        else
            throw new Error('invalid overload');
    }
    ReInit$java_io_InputStream$java_lang_String$int$int$int(dstream, encoding, startline, startcolumn, buffersize) {
        this.ReInit$java_io_Reader$int$int$int(encoding == null ? new j4ts_1.java.io.InputStreamReader(dstream) : new j4ts_1.java.io.InputStreamReader(dstream, encoding), startline, startcolumn, buffersize);
    }
    /**
     * Reinitialise.
     * @param {java.io.InputStream} dstream
     * @param {string} encoding
     * @param {number} startline
     * @param {number} startcolumn
     * @param {number} buffersize
     */
    ReInit(dstream, encoding, startline, startcolumn, buffersize) {
        if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && ((typeof buffersize === 'number') || buffersize === null)) {
            return this.ReInit$java_io_InputStream$java_lang_String$int$int$int(dstream, encoding, startline, startcolumn, buffersize);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && buffersize === undefined) {
            return this.ReInit$java_io_InputStream$java_lang_String$int$int(dstream, encoding, startline, startcolumn);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.Reader) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && buffersize === undefined) {
            return this.ReInit$java_io_Reader$int$int$int(dstream, encoding, startline, startcolumn);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && ((typeof startcolumn === 'number') || startcolumn === null) && buffersize === undefined) {
            return this.ReInit$java_io_InputStream$int$int$int(dstream, encoding, startline, startcolumn);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.Reader) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && startcolumn === undefined && buffersize === undefined) {
            return this.ReInit$java_io_Reader$int$int(dstream, encoding, startline);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'number') || encoding === null) && ((typeof startline === 'number') || startline === null) && startcolumn === undefined && buffersize === undefined) {
            return this.ReInit$java_io_InputStream$int$int(dstream, encoding, startline);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && ((typeof encoding === 'string') || encoding === null) && startline === undefined && startcolumn === undefined && buffersize === undefined) {
            return this.ReInit$java_io_InputStream$java_lang_String(dstream, encoding);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.Reader) || dstream === null) && encoding === undefined && startline === undefined && startcolumn === undefined && buffersize === undefined) {
            return this.ReInit$java_io_Reader(dstream);
        }
        else if (((dstream != null && dstream instanceof j4ts_1.java.io.InputStream) || dstream === null) && encoding === undefined && startline === undefined && startcolumn === undefined && buffersize === undefined) {
            return this.ReInit$java_io_InputStream(dstream);
        }
        else
            throw new Error('invalid overload');
    }
    ReInit$java_io_InputStream$int$int$int(dstream, startline, startcolumn, buffersize) {
        this.ReInit$java_io_Reader$int$int$int(new j4ts_1.java.io.InputStreamReader(dstream), startline, startcolumn, buffersize);
    }
    ReInit$java_io_InputStream$java_lang_String(dstream, encoding) {
        this.ReInit$java_io_InputStream$java_lang_String$int$int$int(dstream, encoding, 1, 1, 4096);
    }
    ReInit$java_io_InputStream(dstream) {
        this.ReInit$java_io_InputStream$int$int$int(dstream, 1, 1, 4096);
    }
    ReInit$java_io_InputStream$java_lang_String$int$int(dstream, encoding, startline, startcolumn) {
        this.ReInit$java_io_InputStream$java_lang_String$int$int$int(dstream, encoding, startline, startcolumn, 4096);
    }
    ReInit$java_io_InputStream$int$int(dstream, startline, startcolumn) {
        this.ReInit$java_io_InputStream$int$int$int(dstream, startline, startcolumn, 4096);
    }
    /**
     * Get token literal value.
     * @return {string}
     */
    GetImage() {
        if (this.bufpos >= this.tokenBegin)
            return ((str, index, len) => str.substring(index, index + len))((this.buffer).join(''), this.tokenBegin, this.bufpos - this.tokenBegin + 1);
        else
            return ((str, index, len) => str.substring(index, index + len))((this.buffer).join(''), this.tokenBegin, this.bufsize - this.tokenBegin) + ((str, index, len) => str.substring(index, index + len))((this.buffer).join(''), 0, this.bufpos + 1);
    }
    /**
     * Get the suffix.
     * @param {number} len
     * @return {char[]}
     */
    GetSuffix(len) {
        const ret = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(len);
        if ((this.bufpos + 1) >= len)
            j4ts_1.java.lang.System.arraycopy(this.buffer, this.bufpos - len + 1, ret, 0, len);
        else {
            j4ts_1.java.lang.System.arraycopy(this.buffer, this.bufsize - (len - this.bufpos - 1), ret, 0, len - this.bufpos - 1);
            j4ts_1.java.lang.System.arraycopy(this.buffer, 0, ret, len - this.bufpos - 1, this.bufpos + 1);
        }
        return ret;
    }
    /**
     * Reset buffer when finished.
     */
    Done() {
        this.buffer = null;
        this.bufline = null;
        this.bufcolumn = null;
    }
    /**
     * Method to adjust line and column numbers for the start of a token.
     * @param {number} newLine
     * @param {number} newCol
     */
    adjustBeginLineColumn(newLine, newCol) {
        let start = this.tokenBegin;
        let len;
        if (this.bufpos >= this.tokenBegin) {
            len = this.bufpos - this.tokenBegin + this.inBuf + 1;
        }
        else {
            len = this.bufsize - this.tokenBegin + this.bufpos + 1 + this.inBuf;
        }
        let i = 0;
        let j = 0;
        let k = 0;
        let nextColDiff = 0;
        let columnDiff = 0;
        while ((i < len && this.bufline[j = start % this.bufsize] === this.bufline[k = ++start % this.bufsize])) {
            {
                this.bufline[j] = newLine;
                nextColDiff = columnDiff + this.bufcolumn[k] - this.bufcolumn[j];
                this.bufcolumn[j] = newCol + columnDiff;
                columnDiff = nextColDiff;
                i++;
            }
        }
        ;
        if (i < len) {
            this.bufline[j] = newLine++;
            this.bufcolumn[j] = newCol + columnDiff;
            while ((i++ < len)) {
                {
                    if (this.bufline[j = start % this.bufsize] !== this.bufline[++start % this.bufsize])
                        this.bufline[j] = newLine++;
                    else
                        this.bufline[j] = newLine;
                }
            }
            ;
        }
        this.line = this.bufline[j];
        this.column = this.bufcolumn[j];
    }
    getTrackLineColumn() {
        return this.trackLineColumn;
    }
    setTrackLineColumn(tlc) {
        this.trackLineColumn = tlc;
    }
}
exports.SimpleCharStream = SimpleCharStream;
/**
 * Whether parser is static.
 */
SimpleCharStream.staticFlag = false;
SimpleCharStream["__class"] = "org.mariuszgromada.math.mxparser.syntaxchecker.SimpleCharStream";
//# sourceMappingURL=SimpleCharStream.js.map