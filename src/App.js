import "./App.css";
import { Grid } from "@mui/material";

import UserCard from "./components/reusable/user-card/user-card.component";

import { generateActivityCards } from "./utils.js"

const App = () => {
  return (
    <Grid
      container
      sx={MainAppContainerStyling}
      spacing={3}
    >
      <Grid item md={3} xs={12}>
        <UserCard />
      </Grid>
      <Grid item md={9} xs={12}>
        {
          generateActivityCards()
        }
      </Grid>
    </Grid>
  );
};

const MainAppContainerStyling = {
  padding: "24px",
};

export default App;