export default Card;
declare function Card(props: any): React.JSX.Element;
declare namespace Card {
    namespace propTypes {
        let onClick: PropTypes.Requireable<(...args: any[]) => any>;
        let title: PropTypes.Requireable<any>;
        let border: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
