import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { CardMedia } from "@mui/material";
import CheckInformation from "../../check_information";
import { UndefinedUIContext } from "../Provider";
const CardMediaUC = props => {
  const {
    src,
    name,
    alt = "Card-img",
    width = "60px",
    height = "60px",
    borderRadius = "4px",
    onError
  } = props;
  const {
    images
  } = useContext(UndefinedUIContext);
  const [URI, setURI] = useState(src);
  return /*#__PURE__*/React.createElement(CardMedia, {
    alt: alt,
    "data-testid": `image-${name || alt}`,
    sx: {
      width,
      height,
      borderRadius
    },
    loading: "lazy",
    component: "img",
    src: URI,
    onError: CheckInformation.isNullOrEmpty(onError) ? () => setURI(images.error) : onError
  });
};
CardMediaUC.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
  borderRadius: PropTypes.any,
  onError: PropTypes.func
};
export default CardMediaUC;