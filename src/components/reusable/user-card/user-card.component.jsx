import { Box } from "@mui/material";

import UserDateBox from "./user-date-box";
import UserInfoBox from "./user-info-box.component";

const UserCard = () => {
    return (
        <Box className="user-card" sx={UserCardStyling}>
            <UserInfoBox />
            <UserDateBox />
        </Box>
    );
};

const UserCardStyling = {
    backgroundColor: "#1D204B",
    borderRadius: "14px",
};

export default UserCard;