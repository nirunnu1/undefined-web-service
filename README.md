# [undefined-service-web](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) 

undefined-service-web is a JavaScript library for building user interfaces.

#install
### `Using npm:`
```
 npm install undefined-service-web -save
```
### `import:`
```
 import service from 'undefined-service-web'
```
### `In .env:`
```
REACT_APP_KEY_URLAPI="strig"
REACT_APP_KEY_TIMEOUT=INT
```
### `Usage:`
```
  //retrun boolean
  service.isNullOrEmpty(obj)
  //retrun res
  service.getHttp(path)
  //retrun res
  service.postHttp(string)
  //retrun lodash
  service.lodash
  
```
# Support
Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.
Automated browser & CI test runs are available.
