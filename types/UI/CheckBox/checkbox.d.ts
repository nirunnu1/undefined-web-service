export default CheckboxUC;
declare function CheckboxUC(props: any): React.JSX.Element;
declare namespace CheckboxUC {
    namespace propTypes {
        let title: PropTypes.Requireable<string>;
        let name: PropTypes.Requireable<string>;
        let value: PropTypes.Requireable<boolean>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let disabled: PropTypes.Requireable<boolean>;
        let labelPlacement: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
