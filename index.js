import axios from "axios";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { setAuthUser } from "./redux/actions";
const isNumeric = (input) => {
  var RE =
    /^-?(0|INF|(0[1-7][0-7]*)|(0x[0-9a-fA-F]+)|((0|[1-9][0-9]*|(?=[\\.,]))([\\.,][0-9]+)?([eE]-?\d+)?))$/;
  return RE.test(input);
};
const isNullOrEmpty = (obj) => {
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
const isEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const isThaiNationalID = (id) => {
  if (!isNumeric(id)) return false;
  if (id.substring(0, 1) === 0) return false;
  if (id.length !== 13) return false;
  let sum = 0;
  for (let i = 0; i < 12; i++) sum += parseFloat(id.charAt(i)) * (13 - i);
  if ((11 - (sum % 11)) % 10 !== parseFloat(id.charAt(12))) return false;
  return true;
};
const getHttp = async (path, dispatch) => {
  let _axios = axios.create({
    baseURL: process.env.REACT_APP_KEY_URLAPI,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "X-PNAME": process.env.REACT_APP_KEY_NAME,
    },
    timeout: process.env.REACT_APP_KEY_TIMEOUT,
  });
  return _axios
    .get(path)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.status === false && res.data.isExpired === true) {
          localStorage.removeItem("token");
          if (dispatch != undefined) {
            dispatch(setAuthUser(null));
          }
        }
        return res.data;
      } else {
        return { status: false };
      }
    })
    .catch(() => {
      return { status: false };
    });
};
class Service {
  constructor(options) {
    this._options = options;
  }
  getAuthState() {
    return {
      userToken: localStorage.getItem("token"),
    };
  }
  /**
   * Returns true ถ้าไม่เท่ากับ undefined '' "" null
   * @param obj  string int list
   */
  isNullOrEmpty = isNullOrEmpty;
  isEmail = isEmail;
  isThaiNationalID = isThaiNationalID;
  isNumeric = isNumeric;
  lodash = _;
  getBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      callback(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
      return { status: false, error: error };
    };
  }
  getHttp = getHttp;
  postHttp(path, data) {
    let _axios = axios.create({
      baseURL: process.env.REACT_APP_KEY_URLAPI, //YOUR_API_URL HERE
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "X-PNAME": process.env.REACT_APP_KEY_NAME,
      },
      timeout: process.env.REACT_APP_KEY_TIMEOUT,
    });
    return _axios
      .post(path, data)
      .then((res) => {
        if (res.status === 200) {
          return { status: true, data: res.data };
        } else {
          return { status: false };
        }
      })
      .catch((error) => {
        return { status: false };
      });
  }
  UrlDetect(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  FormatPhone(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
  FormatThaiNationalID(value) {
    if (!value) return value;
    const Identity = value.replace(/[^\d]/g, "");
    const IdentityLength = Identity.length;
    if (IdentityLength == 1) return Identity;
    if (IdentityLength < 6) {
      return `${Identity.slice(0, 1)}-${Identity.slice(1)}`;
    }
    if (Identity < 11) {
      return `${Identity.slice(0, 1)}-${Identity.slice(1, 5)}-${Identity.slice(
        5,
        10
      )}`;
    }
    if (IdentityLength < 13) {
      return `${Identity.slice(0, 1)}-${Identity.slice(1, 5)}-${Identity.slice(
        5,
        10
      )}-${Identity.slice(10, 12)}`;
    }
    return `${Identity.slice(0, 1)}-${Identity.slice(1, 5)}-${Identity.slice(
      5,
      10
    )}-${Identity.slice(10, 12)}-${Identity.slice(12, 13)}`;
  }
  CalculateAge(DateofBirth) {
    const ageDifMs = Date.now() - DateofBirth;
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  ValidateFrom(from, schema) {
    let isValidate = true;
    let error = {};
    Object.keys(schema).map((e) => {
      let name = e;
      let _isValidate = true;
      let _schema = schema[name];
      if (!isNullOrEmpty(_schema["isNull"])) {
        if (isNullOrEmpty(from[name])) {
          _isValidate = false;
          isValidate = false;
          error[name] = _schema["isNull"];
        }
      }
      if (!isNullOrEmpty(_schema["isPhoneLength"]) && _isValidate) {
        let PhoneNo = from[name].replace(/[^\d]/g, "");
        if (PhoneNo.length != 10) {
          _isValidate = false;
          isValidate = false;
          error[name] = _schema["isPhoneLength"]["text"];
        }
      }
      if (!isNullOrEmpty(_schema["isEmail"]) && _isValidate) {
        if (!isEmail(from[name])) {
          _isValidate = false;
          isValidate = false;
          error[name] = _schema["isEmail"];
        }
      }
      if (!isNullOrEmpty(_schema["isThaiNationalID"]) && _isValidate) {
        if (!isThaiNationalID(from[name].replace(/[^\d]/g, ""))) {
          _isValidate = false;
          isValidate = false;
          error[name] = _schema["isThaiNationalID"];
        }
      }
    });
    return {
      isValidate,
      error,
    };
  }
}

const service = new Service();
export default service;
