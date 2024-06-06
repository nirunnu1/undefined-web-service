const isNumeric = input => {
  var RE = /^-?(0|INF|(0[1-7][0-7]*)|(0x[0-9a-fA-F]+)|((0|[1-9][0-9]*|(?=[\\.,]))([\\.,][0-9]+)?([eE]-?\d+)?))$/;
  return RE.test(input);
};
/**
  * Returns true ถ้าไม่เท่ากับ undefined '' "" null
  * @param obj  string int list
  */
const isNullOrEmpty = obj => {
  if ("undefined" === typeof obj || obj == null) {
    return true;
  } else if (typeof obj != "undefined" && obj != null && obj.length !== null && obj.length === 0) {
    return true; //array
  } else if ("number" === typeof obj) {
    return obj !== obj; //NaN

    // return false;
  } else if ("string" === typeof obj) {
    return obj.length < 1 ? true : false;
  } else {
    return false;
  }
};
const isEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const isThaiNationalID = id => {
  if (!isNumeric(id)) return false;
  if (id.substring(0, 1) === 0) return false;
  if (id.length !== 13) return false;
  let sum = 0;
  for (let i = 0; i < 12; i++) sum += parseFloat(id.charAt(i)) * (13 - i);
  if ((11 - sum % 11) % 10 !== parseFloat(id.charAt(12))) return false;
  return true;
};
export default {
  isNumeric,
  isNullOrEmpty,
  isEmail,
  isThaiNationalID
};