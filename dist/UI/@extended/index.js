import React from "react";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
const AnimateButton = ({
  children,
  type
}) => {
  switch (type) {
    case 'rotate': // only available in paid version
    case 'slide': // only available in paid version
    case 'scale': // only available in paid version
    default:
      return /*#__PURE__*/React.createElement(motion.div, {
        whileHover: {
          scale: 1
        },
        whileTap: {
          scale: 0.9
        }
      }, children);
  }
};
AnimateButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['slide', 'scale', 'rotate'])
};
export default AnimateButton;