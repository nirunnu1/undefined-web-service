export default Label;
declare function Label(props: any): React.JSX.Element;
declare namespace Label {
    namespace propTypes {
        let text: PropTypes.Requireable<any>;
        let id: PropTypes.Requireable<string>;
        let name: PropTypes.Requireable<string>;
        let color: PropTypes.Requireable<string>;
        let size: PropTypes.Requireable<number>;
        let fontWeight: PropTypes.Requireable<string | number>;
        let mt: PropTypes.Requireable<number>;
        let mb: PropTypes.Requireable<number>;
        let numberOfLine: PropTypes.Requireable<number>;
        let textAlign: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
