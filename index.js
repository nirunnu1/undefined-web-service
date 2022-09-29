function Service() {}
Service.prototype.isNullOrEmpty = (obj) => {
  if ("undefined" === typeof obj || obj == null) {
    return true;
  } else if (
    typeof obj != "undefined" &&
    obj != null &&
    obj.length !== null &&
    obj.length === 0
  ) {
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
const service = new Service();
module.exports = service;
