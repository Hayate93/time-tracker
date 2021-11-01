import { Box } from "@mui/material";
import ActivityInfoBoxContent from "./activity-info-box-content.component";
import ActivityInfoBoxTitle from "./activity-info-box-title.component";

const ActivityInfoBox = ({ title, timeframes }) => {
    return (
        <Box sx={ActivityInfoBoxStyling}>
            <ActivityInfoBoxTitle
                title={title}
                optionImg={"/images/icon-ellipsis.svg"}
            />
            <ActivityInfoBoxContent timeframes={timeframes} />
        </Box>
    );
};

const ActivityInfoBoxStyling = {
    position: "relative",
    backgroundColor: "#1D204B",
    padding: "30px 30px 22px 30px",
    borderRadius: "14px",
    border: "1px solid #1D204B",
};

export default ActivityInfoBox;