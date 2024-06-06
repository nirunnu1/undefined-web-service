export namespace store {
    let colors: {};
    namespace styles {
        let cardmedia: {};
        namespace card {
            let boxShadow: string;
            let borderRadius: string;
        }
        let button: {};
        let checkbox: {};
        let label: {};
    }
    namespace images {
        let error: string;
    }
}
export const UndefinedUIContext: React.Context<{
    colors: {};
    styles: {
        cardmedia: {};
        card: {
            boxShadow: string;
            borderRadius: string;
        };
        button: {};
        checkbox: {};
        label: {};
    };
    images: {
        error: string;
    };
}>;
export default UndefinedUIProvider;
import React from "react";
declare class UndefinedUIProvider extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        colors: any;
        styles: any;
        images: any;
    };
    render(): React.JSX.Element;
}
declare namespace UndefinedUIProvider {
    namespace propTypes {
        export let children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let colors_1: PropTypes.Requireable<object>;
        export { colors_1 as colors };
        let styles_1: PropTypes.Requireable<object>;
        export { styles_1 as styles };
        let images_1: PropTypes.Requireable<object>;
        export { images_1 as images };
    }
}
import PropTypes from "prop-types";
