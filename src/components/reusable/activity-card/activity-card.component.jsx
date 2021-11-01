import { Box } from "@mui/material";

import ActivityColorBox from "./activity-color-box.component";
import ActivityInfoBox from "./activity-info-box.component";

const ActivityCard = ({ color, title, icon, timeframes }) => {
    return (
        <Box sx={ActivityCardStyling} backgroundColor={color}>
            <ActivityColorBox
                color={color}
                icon={icon}
            />
            <ActivityInfoBox
                title={title}
                timeframes={timeframes}
            />
        </Box>
    );
};

const ActivityCardStyling = {
    borderRadius: "14px",
    position: "relative",
    mb: "25px",
};

export default ActivityCard;