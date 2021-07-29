import React, { useState } from "react";
import ReactDOM from "react-dom";
import { InputBase, IconButton, Paper, Box, Grid } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import "fontsource-roboto";
import "./popup.css";
import WeatherCard from "./WeatherCard";

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([
    "Toronto",
    "New York",
    "Error",
  ]);

  const [cityInput, setCityInput] = useState<string>("");

  const handleCityButtonClick = () => {
    if (cityInput === "") {
      return;
    }

    setCities([...cities, cityInput]);
    setCityInput("");
  };

  const handleCityButtonDeleteClick = (index:number) => {
    cities.splice(index, 1);
    setCities([...cities]);
  }

  return (
    <Box mx={"8px"} my={"16px"}>
      <Grid container>
        <Grid item>
          <Paper>
            <Box mx={"15px"} my={"5px"}>
              <InputBase
                onChange={(event) => setCityInput(event.target.value)}
                placeholder="Add City"
                value={cityInput}
              />
              <IconButton onClick={handleCityButtonClick}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((city, index) => (
        <WeatherCard city={city} key={index} onDelete={() => handleCityButtonDeleteClick(index)} />
      ))}
      <Box height="16px"/>
    </Box>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
