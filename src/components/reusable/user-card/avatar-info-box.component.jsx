import { Box, Typography } from "@mui/material";

const AvatarInfoBox = () => {
    return (
        <Box sx={AvatarInfoBoxStyling}>
            <Typography sx={SHStyling}>
                Report for
            </Typography>
            <Typography sx={NameStyling}>
                Jeremy Robson
            </Typography>
        </Box>
    );
};

const AvatarInfoBoxStyling = {
    margin: "10px 20px 0px 20px",
    "*": { color: "white", },
};

const NameStyling = {
    fontSize: "21px",
    width: "150%",
    opacity: 0.95,
    fontWeight: 300,
};

const SHStyling = {
    fontSize: "12px",
    opacity: 0.7
};

export default AvatarInfoBox;