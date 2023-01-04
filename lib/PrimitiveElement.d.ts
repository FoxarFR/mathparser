/**
 * Default constructor setting element type id
 *
 * @param {number} typeId     Element type id
 *
 * @see     Argument#TYPE_ID
 * @see     Constant#TYPE_ID
 * @see     Function#TYPE_ID
 * @class
 */
export declare class PrimitiveElement {
    /**
     * Element type id
     *
     * @see     Argument#TYPE_ID
     * @see     Constant#TYPE_ID
     * @see     Function#TYPE_ID
     */
    myTypeId: number;
    constructor(typeId: number);
    /**
     * Returns element type id
     *
     * @return  {number} Element type id as int Function.TYPE_ID, Argument.TYPE_ID, Function.TYPE_ID
     *
     * @see     Argument#TYPE_ID
     * @see     Constant#TYPE_ID
     * @see     Function#TYPE_ID
     */
    getMyTypeId(): number;
}
