import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
const Label = (props) => {
    const {
        text,
        id,
        name,
        color,
        size,
        fontWeight,
        numberOfLine,
        onClick,
    } = props;
    const styleOverrides = {
        fontSize: size || 14,
        color: color || "#000000",
        fontWeight: fontWeight || 400,
        WebkitLineClamp: numberOfLine,

        WebkitWserSelect: "none",
        MsUserSelect: "none",
        userSelect: "none",

        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",

    }
    return (
        <Box
            {...props}
            component={"span"}
            id={id}
            name={name}
            sx={{
                ...styleOverrides,
            }}
            onClick={onClick}
            data-testid={`label-${name || id}`}
        >
            {text}
        </Box >
    );
};
Label.propTypes = {
    text: PropTypes.any,
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    fontWeight: PropTypes.oneOf([
        "bold",
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]),
    mt: PropTypes.number,
    mb: PropTypes.number,
    numberOfLine: PropTypes.number,
    textAlign: PropTypes.string,
};

export default Label