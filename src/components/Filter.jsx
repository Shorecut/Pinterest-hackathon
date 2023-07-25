import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const Filter = () => {
  return (
    <ToggleButtonGroup
      color="primary"
      // value={category}
      exclusive
      // onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="cars">Cars</ToggleButton>
      <ToggleButton value="animal">Animal</ToggleButton>
      <ToggleButton value="anime">Anime</ToggleButton>
      <ToggleButton value="videogames">VideoGames</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
