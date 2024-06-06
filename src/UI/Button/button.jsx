import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";
import AnimateButton from "../@extended";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { UndefinedUIContext } from "../Provider";
const ButtonUC = (props) => {
    const {
        id = "bt",
        name,
        label = "",
        sx,
        onClick,
        component,
        to,
        variant = "contained",
        isSelect = 0,
        type = "button",
        disableElevation,
        disabled = false,
        fullWidth,
        minWidth = "6rem",
        startIcon,
        endIcon,
        loading,
        isOutlined = false
    } = props
    const { colors, styles } = useContext(UndefinedUIContext);

    const { isLoading } = useSelector(({ loading }) => loading)
    return (
        <AnimateButton>
            <LoadingButton
                id={id}
                type={type}
                fullWidth={fullWidth}
                sx={{
                    minWidth,
                    color: isOutlined ? colors.main : colors.white,
                    borderColor:
                        isOutlined ? colors.main : colors.main,
                    bgcolor: isOutlined ? colors.white : colors.main,
                    border: "1px solid " + (disabled ? colors.disabled : colors.main),
                    borderRadius: "40px",
                    height: "42px",
                    "&.MuiButtonBase-root:hover": {
                        bgcolor:
                            isOutlined ? colors.white : colors.main,
                    },
                    "&.Mui-disabled": {
                        border: "1px solid " + colors.disabled
                    },
                    ...styles.button,
                    ...sx,
                }}
                disableElevation={disableElevation}
                disabled={disabled}
                onClick={onClick ? onClick : null}
                component={component}
                to={to}
                variant={
                    variant === "outlined"
                        ? isSelect === 1
                            ? "contained"
                            : "outlined"
                        : variant
                }
                startIcon={startIcon}
                endIcon={endIcon}
                loading={(loading || false) || isLoading}
                data-testid={`button-${name || id}`}
            >
                {label}
            </LoadingButton>
        </AnimateButton>
    );
}
ButtonUC.propTypes = {
    id: PropTypes.string,
    label: PropTypes.any,
    name: PropTypes.string,
    onClick: PropTypes.func,
    component: PropTypes.any,
    to: PropTypes.any,
    variant: PropTypes.string,
    isSelect: PropTypes.any,
    type: PropTypes.string,
    disableElevation: PropTypes.any,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.any,
    minWidth: PropTypes.string,
    startIcon: PropTypes.any,
    endIcon: PropTypes.any,
    style: PropTypes.any,
    loading: PropTypes.any,
    isOutlined: PropTypes.bool
};

export default ButtonUC