import axios from "axios";
import _ from "lodash";
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
  isNullOrEmpty(obj) {
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
  }
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
  getHttp(path, dispatch) {
    let _axios = axios.create({
      baseURL: process.env.REACT_APP_KEY_URLAPI,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      timeout: process.env.REACT_APP_KEY_TIMEOUT,
    });
    return _axios
      .get(path)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status === false && res.data.isExpired === true) {
            localStorage.removeItem("token");
            if (dispatch !== undefined) {
              dispatch(setAuthUser(null));
            }
          }
          return { status: true, data: res.data };
        } else {
          return { status: false };
        }
      })
      .catch(() => {
        return { status: false };
      });
  }
  postHttp(path, data) {
    let _axios = axios.create({
      baseURL: process.env.REACT_APP_KEY_URLAPI, //YOUR_API_URL HERE
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    return window.location.href.indexOf(url) > -1;
  }
}

const service = new Service();
export default service;
