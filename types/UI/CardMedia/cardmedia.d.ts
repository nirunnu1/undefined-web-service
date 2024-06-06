export default CardMediaUC;
declare function CardMediaUC(props: any): React.JSX.Element;
declare namespace CardMediaUC {
    namespace propTypes {
        let src: PropTypes.Requireable<string>;
        let name: PropTypes.Requireable<string>;
        let alt: PropTypes.Requireable<string>;
        let width: PropTypes.Requireable<any>;
        let height: PropTypes.Requireable<any>;
        let borderRadius: PropTypes.Requireable<any>;
        let onError: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
