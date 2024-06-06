function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useContext } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Label from "../Label";
import CheckInformation from "../../check_information";
import { UndefinedUIContext } from "../Provider";
const Card = props => {
  const {
    children,
    title,
    border = true,
    subTitle
  } = props;
  const {
    colors,
    styles
  } = useContext(UndefinedUIContext);
  return /*#__PURE__*/React.createElement(Box, _extends({}, props, {
    sx: {
      // ..._default,
      ...styles.card
    },
    onClick: props.onClick
  }), CheckInformation.isNullOrEmpty(title) ? null : /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: "flex",
      borderBottom: border ? "1px solid var(--nuetral-gray-7, #D6D6D8)" : "none",
      paddingBottom: "14px",
      flexDirection: "column"
    },
    mb: 2
  }, /*#__PURE__*/React.createElement(Label, {
    text: title,
    size: 32,
    color: "#000"
  }), /*#__PURE__*/React.createElement(Label, {
    text: subTitle,
    size: 16,
    color: "#000"
  })), children);
};
Card.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.any,
  border: PropTypes.bool
};
export default Card;