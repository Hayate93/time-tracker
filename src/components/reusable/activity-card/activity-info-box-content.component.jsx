import { Box, Typography } from "@mui/material";
import useDateType from "../../../custom-hooks/date-type.hook";

import { DATE_TYPE_STRING } from "../user-card/date-types";

const ActivityInfoBoxContent = ({ timeframes }) => {
    const [dateType,] = useDateType();
    const dateTypeString = DATE_TYPE_STRING[dateType];

    const { current, previous } = timeframes[dateTypeString];

    return (
        <Box sx={ContentBoxStyling}>
            <Typography sx={CurrentHoursStyling}>{current}hrs</Typography>
            <Typography sx={LastHoursStyling}>Last {dateTypeString} - {previous}hrs</Typography>
        </Box>
    );
};

const ContentBoxStyling = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "> *": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
};

const CurrentHoursStyling = {
    fontSize: "36px",
    fontWeight: 200,
    color: "white",
};

const LastHoursStyling = {
    fontSize: "14px",
    color: "#6062A0",
    float: "right",
    opacity: 0.85,

};

export default ActivityInfoBoxContent;