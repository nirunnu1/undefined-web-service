export default service;
declare const service: Service;
declare class Service {
    constructor(options: any);
    _options: any;
    getAuthState(): {
        userToken: string;
    };
    isNullOrEmpty: (obj: any) => boolean;
    isEmail: (email: any) => boolean;
    isNumeric: (input: any) => boolean;
    isThaiNationalID: (id: any) => boolean;
    lodash: any;
    moment: typeof moment;
    getBase64(file: any, callback: any): void;
    getHttp: (path: any, headers?: {}, params?: {}) => Promise<any>;
    postHttp: (path: any, data: any, headers?: {}, params?: {}) => Promise<{
        status: boolean;
        data: any;
    } | {
        status: boolean;
        data?: undefined;
    } | {
        status: boolean;
        error: any;
    }>;
    UrlDetect(url: any): boolean;
    FormatPhone(value: any): any;
    FormatThaiNationalID(value: any): any;
    CalculateAge(DateofBirth: any): number;
    ValidateFrom(from: any, schema: any): {
        isValidate: boolean;
        error: {};
    };
    Kerry: {
        KerryPayment: (file: any, callback: any) => Promise<void>;
    };
    UI: {
        AnimateButton: {
            ({ children, type }: {
                children: any;
                type: any;
            }): import("react").JSX.Element;
            propTypes: {
                children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
                type: import("prop-types").Requireable<string>;
            };
        };
        Button: import("@emotion/styled").StyledComponent<import("prop-types").InferPropsInner<Pick<{
            id: import("prop-types").Requireable<string>;
            label: import("prop-types").Requireable<any>;
            name: import("prop-types").Requireable<string>;
            onClick: import("prop-types").Requireable<(...args: any[]) => any>;
            component: import("prop-types").Requireable<any>;
            to: import("prop-types").Requireable<any>;
            variant: import("prop-types").Requireable<string>;
            isSelect: import("prop-types").Requireable<any>;
            type: import("prop-types").Requireable<string>;
            disableElevation: import("prop-types").Requireable<any>;
            disabled: import("prop-types").Requireable<boolean>;
            fullWidth: import("prop-types").Requireable<any>;
            minWidth: import("prop-types").Requireable<string>;
            startIcon: import("prop-types").Requireable<any>;
            endIcon: import("prop-types").Requireable<any>;
            style: import("prop-types").Requireable<any>;
            loading: import("prop-types").Requireable<any>;
            isOutlined: import("prop-types").Requireable<boolean>;
        }, never>> & Partial<import("prop-types").InferPropsInner<Pick<{
            id: import("prop-types").Requireable<string>;
            label: import("prop-types").Requireable<any>;
            name: import("prop-types").Requireable<string>;
            onClick: import("prop-types").Requireable<(...args: any[]) => any>;
            component: import("prop-types").Requireable<any>;
            to: import("prop-types").Requireable<any>;
            variant: import("prop-types").Requireable<string>;
            isSelect: import("prop-types").Requireable<any>;
            type: import("prop-types").Requireable<string>;
            disableElevation: import("prop-types").Requireable<any>;
            disabled: import("prop-types").Requireable<boolean>;
            fullWidth: import("prop-types").Requireable<any>;
            minWidth: import("prop-types").Requireable<string>;
            startIcon: import("prop-types").Requireable<any>;
            endIcon: import("prop-types").Requireable<any>;
            style: import("prop-types").Requireable<any>;
            loading: import("prop-types").Requireable<any>;
            isOutlined: import("prop-types").Requireable<boolean>;
        }, "variant" | "type" | "id" | "name" | "minWidth" | "loading" | "label" | "style" | "disabled" | "onClick" | "component" | "to" | "isSelect" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "isOutlined">>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
        Card: import("@emotion/styled").StyledComponent<import("prop-types").InferPropsInner<Pick<{
            onClick: import("prop-types").Requireable<(...args: any[]) => any>;
            title: import("prop-types").Requireable<any>;
            border: import("prop-types").Requireable<boolean>;
        }, never>> & Partial<import("prop-types").InferPropsInner<Pick<{
            onClick: import("prop-types").Requireable<(...args: any[]) => any>;
            title: import("prop-types").Requireable<any>;
            border: import("prop-types").Requireable<boolean>;
        }, "border" | "title" | "onClick">>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
        CardMedia: import("@emotion/styled").StyledComponent<import("prop-types").InferPropsInner<Pick<{
            src: import("prop-types").Requireable<string>;
            name: import("prop-types").Requireable<string>;
            alt: import("prop-types").Requireable<string>;
            width: import("prop-types").Requireable<any>;
            height: import("prop-types").Requireable<any>;
            borderRadius: import("prop-types").Requireable<any>;
            onError: import("prop-types").Requireable<(...args: any[]) => any>;
        }, never>> & Partial<import("prop-types").InferPropsInner<Pick<{
            src: import("prop-types").Requireable<string>;
            name: import("prop-types").Requireable<string>;
            alt: import("prop-types").Requireable<string>;
            width: import("prop-types").Requireable<any>;
            height: import("prop-types").Requireable<any>;
            borderRadius: import("prop-types").Requireable<any>;
            onError: import("prop-types").Requireable<(...args: any[]) => any>;
        }, "height" | "width" | "name" | "borderRadius" | "src" | "alt" | "onError">>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
        CheckBox: import("@emotion/styled").StyledComponent<import("prop-types").InferPropsInner<Pick<{
            title: import("prop-types").Requireable<string>;
            name: import("prop-types").Requireable<string>;
            value: import("prop-types").Requireable<boolean>;
            onChange: import("prop-types").Requireable<(...args: any[]) => any>;
            disabled: import("prop-types").Requireable<boolean>;
            labelPlacement: import("prop-types").Requireable<string>;
        }, never>> & Partial<import("prop-types").InferPropsInner<Pick<{
            title: import("prop-types").Requireable<string>;
            name: import("prop-types").Requireable<string>;
            value: import("prop-types").Requireable<boolean>;
            onChange: import("prop-types").Requireable<(...args: any[]) => any>;
            disabled: import("prop-types").Requireable<boolean>;
            labelPlacement: import("prop-types").Requireable<string>;
        }, "name" | "value" | "title" | "disabled" | "onChange" | "labelPlacement">>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
        Divider: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").DividerTypeMap<{}, "hr">>;
        Label: import("@emotion/styled").StyledComponent<import("prop-types").InferPropsInner<Pick<{
            text: import("prop-types").Requireable<any>;
            id: import("prop-types").Requireable<string>;
            name: import("prop-types").Requireable<string>;
            color: import("prop-types").Requireable<string>;
            size: import("prop-types").Requireable<number>;
            fontWeight: import("prop-types").Requireable<string | number>;
            mt: import("prop-types").Requireable<number>;
            mb: import("prop-types").Requireable<number>;
            numberOfLine: import("prop-types").Requireable<number>;
            textAlign: import("prop-types").Requireable<string>;
        }, never>> & Partial<import("prop-types").InferPropsInner<Pick<{
            text: import("prop-types").Requireable<any>;
            id: import("prop-types").Requireable<string>;
            name: import("prop-types").Requireable<string>;
            color: import("prop-types").Requireable<string>;
            size: import("prop-types").Requireable<number>;
            fontWeight: import("prop-types").Requireable<string | number>;
            mt: import("prop-types").Requireable<number>;
            mb: import("prop-types").Requireable<number>;
            numberOfLine: import("prop-types").Requireable<number>;
            textAlign: import("prop-types").Requireable<string>;
        }, "id" | "name" | "color" | "fontWeight" | "textAlign" | "text" | "size" | "mt" | "mb" | "numberOfLine">>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
        UndefinedUIProvider: typeof import("./UI/Provider").default;
        UndefinedUIContext: import("react").Context<{
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
    };
}
import moment from './Moment';
