/**
 * Constructor - creates key words form wordString wordId
 * wordTypId syntax since
 *
 * @param {string} wordString   the word string (refers to below interfaces)
 * @param {number} wordId       the word identifier (refers to below interfaces)
 * @param {number} wordTypeId   the word type (refers to below interfaces)
 * @param {string} description  the word description
 * @param {string} syntax       the word syntax
 * @param {string} since        the word version since
 * @class
 */
export declare class KeyWord {
    static NO_DEFINITION: number;
    static NO_DEFINITION_$LI$(): number;
    wordString: string;
    wordId: number;
    wordTypeId: number;
    description: string;
    syntax: string;
    since: string;
    constructor(wordString?: any, description?: any, wordId?: any, syntax?: any, since?: any, wordTypeId?: any);
}
