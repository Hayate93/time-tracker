import { Box, Avatar } from "@mui/material";
import AvatarInfoBox from "./avatar-info-box.component";

const UserInfoBox = () => {
    return (
        <Box sx={UserInfoBoxStyling}>
            <Avatar
                src="/images/image-jeremy.png"
                sx={AvatarStyling}
            />
            <AvatarInfoBox />
        </Box>
    );
};

const UserInfoBoxStyling = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#5746EA",
    borderRadius: "14px",
    height: "auto",
    padding: "30px 30px 30px 30px",
};

const AvatarStyling = {
    width: "70px",
    height: "70px",
    border: "3px solid white",
};

export default UserInfoBox;