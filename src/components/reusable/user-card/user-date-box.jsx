import { Box, Button } from "@mui/material";

import DATE_TYPE from "./date-types";
import useDateType from "../../../custom-hooks/date-type.hook";

const UserDateBox = () => {
    const [dateType, setDateType] = useDateType();

    const isDaily = dateType === DATE_TYPE.DAILY && 'active';
    const isWeekly = dateType === DATE_TYPE.WEEKLY && 'active';
    const isMonthly = dateType === DATE_TYPE.MONTHLY && 'active';

    return (
        <Box sx={UserDateBoxStyling}>
            <Button
                variant="text"
                className={isDaily}
                onClick={() => setDateType(DATE_TYPE.DAILY)}
            >Daily</Button>

            <Button
                variant="text"
                className={isWeekly}
                onClick={() => setDateType(DATE_TYPE.WEEKLY)}
            >Weekly</Button>

            <Button
                variant="text"
                className={isMonthly}
                onClick={() => setDateType(DATE_TYPE.MONTHLY)}
            >Monthly</Button>
        </Box>
    );
};

const UserDateBoxStyling = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "14px",
    backgroundColor: "#1D204B",
    padding: "18px 23px 16px 23px",
    "> *": {
        color: "#6062A0 !important",
        opacity: 0.85,
    },
    "> *.active": {
        color: "white !important",
        opacity: 0.9,
    },
};

export default UserDateBox;