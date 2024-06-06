/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import Label from "../Label";
import { UndefinedUIContext } from "../Provider";
const CheckboxUC = props => {
  const {
    title,
    name,
    indeterminate = false,
    form,
    onChange,
    disabled,
    labelPlacement = "end"
  } = props;
  const {
    colors,
    styles
  } = useContext(UndefinedUIContext);
  const [check, setCheck] = useState(false);
  const handleChange = event => {
    onChange({
      name: name,
      value: event.target.checked
    });
  };
  useEffect(() => {
    setCheck(form[name] || false);
  }, [form[name]]);
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      minWidth: 120,
      "& svg": {
        width: "20px",
        height: "20px"
      },
      "& .MuiCheckbox-root.Mui-checked": {
        color: colors.main
      }
    }
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    onChange: handleChange,
    disabled: disabled || false,
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: check,
      indeterminate: indeterminate
    }),
    label: /*#__PURE__*/React.createElement(Label, {
      text: title,
      size: 14,
      color: colors.black
    }),
    labelPlacement: labelPlacement,
    sx: {
      ...styles.checkbox
    }
  }));
};
CheckboxUC.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(["start", "end", "top", "bottom"])
};
export default CheckboxUC;