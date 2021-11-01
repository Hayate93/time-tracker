import { Box } from "@mui/material";

const ActivityColorBox = ({ color, icon }) => {
    return (
        <Box sx={ActivityColorBoxStyling} backgroundColor={color}>
            <img style={ActivityIconStyling} src={`/images/${icon}`} />
        </Box>
    );
};

const ActivityIconStyling = {
    position: "absolute",
    right: "20px",
    height: "80px",
    top: "-10px",
    width: "auto",
};

const ActivityColorBoxStyling = {
    position: "relative",
    borderRadius: "14px",
    height: "48px",
    overflow: "hidden",
};

export default ActivityColorBox;