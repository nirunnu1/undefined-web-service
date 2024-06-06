export default AnimateButton;
declare function AnimateButton({ children, type }: {
    children: any;
    type: any;
}): React.JSX.Element;
declare namespace AnimateButton {
    namespace propTypes {
        let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let type: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from 'prop-types';
