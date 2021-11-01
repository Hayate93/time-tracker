import { Typography, Box, IconButton } from "@mui/material";

const ActivityInfoBoxTitle = ({ title, option, optionImg }) => {
    return (
        <Box sx={ActivityInfoBoxStyling}>
            <Typography sx={TitleStyling}>{title}</Typography>
            {option}
            {
                optionImg && (
                    <IconButton sx={ImageStyling}>
                        <img src={optionImg} />
                    </IconButton>
                )
            }
        </Box>
    );
};

const TitleStyling = {
    color: "white",
    opacity: 0.9,
    fontWeight: 600,
};

const ImageStyling = {
    cursor: "pointer",
};

const ActivityInfoBoxStyling = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
};

export default ActivityInfoBoxTitle;