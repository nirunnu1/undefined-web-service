declare namespace _default {
    export { isNumeric };
    export { isNullOrEmpty };
    export { isEmail };
    export { isThaiNationalID };
}
export default _default;
declare function isNumeric(input: any): boolean;
/**
  * Returns true ถ้าไม่เท่ากับ undefined '' "" null
  * @param obj  string int list
  */
declare function isNullOrEmpty(obj: any): boolean;
declare function isEmail(email: any): boolean;
declare function isThaiNationalID(id: any): boolean;
