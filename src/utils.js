import ActivityCard from "./components/reusable/activity-card/activity-card.component";
import { Grid } from "@mui/material";

// Data imports
import ACTIVITY_CARD_DATA from "./data/activity-card.data";

export const generateActivityCards = () => {
    return (
        <>
            {
                ACTIVITY_CARD_DATA.map(
                    cardData => (
                        <ActivityCard
                            title={cardData.title}
                            color={cardData.color}
                            icon={cardData.icon}
                            timeframes={cardData.timeframes}
                        />
                    )
                )
            }
        </>
    );
};
