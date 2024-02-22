import axios from "axios";
import _ from "lodash";
// import { useDispatch } from "react-redux";
import { setAuthUser } from "./redux/actions";
import CheckInformation from "./check_information";
import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist";
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.js`;

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
    .catch((error) => {
      return { status: false, error };
    });
};
const postHttp = async (path, data) => {
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
      return { status: false, error };
    });
};

const KerryPayment = async (file, callback) => {
  var pdf = await getDocument(await file.arrayBuffer()).promise;
  const numPages = pdf.numPages;
  var countPromises = []; // collecting all page promises
  for (var j = 1; j <= numPages; j++) {
    var page = pdf.getPage(j);

    var txt = "";
    countPromises.push(
      page.then(function (page) {
        // add page promise
        var textContent = page.getTextContent();
        return textContent;
      })
    );
  }
  Promise.all(countPromises).then(function (texts) {
    const items = [];
    texts.map((p) => {
      let item = {};
      p.items.map((e) => {
        item[parseInt(e.transform[5])] = {
          ...item[parseInt(e.transform[5])],
          [parseInt(e.transform[4])]: e.str,
        };
      });
      Object.keys(item).map((key) => {
        if (Object.keys(item[key]).length > 10) {
          // console.log(item[key]);
          let ischeck = true;

          Object.keys(item[key]).map((c) => {
            if (
              item[key][c].toLowerCase().includes("con no") ||
              item[key][c].toLowerCase().includes("total")
            ) {
              ischeck = false;
            }
          });
          if (ischeck) {
            let _item = {};
            let i = 0;
            Object.keys(item[key]).map((c) => {
              if (!isNullOrEmpty(item[key][c].trim())) {
                _item = { ..._item, [i]: item[key][c] };
                i = i + 1;
              }
            });
            items.push(_item);
          }
        }
      });
    });
    //  console.log(item)
    callback(items);
  });
};
const isNullOrEmpty = CheckInformation.isNullOrEmpty;
const isEmail = CheckInformation.isEmail;
const isNumeric = CheckInformation.isNumeric;
const isThaiNationalID = CheckInformation.isThaiNationalID;
class Service {
  constructor(options) {
    this._options = options;
  }
  getAuthState() {
    return {
      userToken: localStorage.getItem("token"),
    };
  }
  isNullOrEmpty = isNullOrEmpty;
  isEmail = isEmail;
  isNumeric = isNumeric;
  isThaiNationalID = isThaiNationalID;
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
  postHttp = postHttp;
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
    try {
      const _error = Object.keys(error)[0];
      Object.keys(error).map((e) => {
        console.warn(`[undefined service] : An error occurred ${e} ${error[e]}`);
      });
      document.getElementById(_error).focus();
      document.getElementById(_error).click();
    } catch {
      console.warn(`[undefined service] : An error occurred func[FocusError]`);
    }
    return {
      isValidate,
      error,
    };
  }
  Kerry = {
    KerryPayment: KerryPayment,
  };
}

const service = new Service();
export default service;
