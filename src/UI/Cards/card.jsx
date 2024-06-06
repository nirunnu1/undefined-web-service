
import React, { useContext } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Label from "../Label";
import CheckInformation from "../../check_information";
import { UndefinedUIContext } from "../Provider";
const Card = (props) => {
  const { children, title, border = true, subTitle } = props;
  const { colors, styles } = useContext(UndefinedUIContext);
  return (
    <Box
      {...props}
      sx={{
        // ..._default,
        ...styles.card,
      }}
      onClick={props.onClick}
    >
      {CheckInformation.isNullOrEmpty(title) ? null : (
        <Box
          sx={{
            display: "flex",
            borderBottom: border
              ? "1px solid var(--nuetral-gray-7, #D6D6D8)"
              : "none",
            paddingBottom: "14px",

            flexDirection: "column",
          }}
          mb={2}
        >
          <Label text={title} size={32} color="#000" />
          <Label text={subTitle} size={16} color="#000" />
        </Box>
      )}
      {children}
    </Box>
  );
};
Card.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.any,
  border: PropTypes.bool,
};
export default Card;
