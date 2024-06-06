import React, { Component } from "react";
import PropTypes from "prop-types";
export const store = {
    colors: {},
    styles: {
        cardmedia: {},
        card: {
            ///default
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
            borderRadius: "10px",
        },
        button: {},
        checkbox: {},
        label: {}
    },
    images: {
        error: "/images/error.png"
    }
}
export const UndefinedUIContext = React.createContext(store);

class UndefinedUIProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: this.props.colors,
            styles: this?.props?.styles || store.styles,
            images: this?.props?.images || store.images,
        };

    }
    render() {
        return (
            <UndefinedUIContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </UndefinedUIContext.Provider>
        )
    }
}
UndefinedUIProvider.propTypes = {
    children: PropTypes.node,
    colors: PropTypes.object,
    styles: PropTypes.object,
    images: PropTypes.object,
};
export default UndefinedUIProvider