import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Grid,
} from "@mui/material";

const token = import.meta.env.VITE_SOME_KEY;
console.log(token);

const WorkoutQuery = () => {
  const [dropdownValue2, setDropdownValue2] = useState("");
  const [dropdownValue3, setDropdownValue3] = useState("");
  const [dropdownValue4, setDropdownValue4] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dropdownValue2, dropdownValue3, dropdownValue4);

    fetch(
      `https://api.api-ninjas.com/v1/exercises?type=${dropdownValue2}&muscle=${dropdownValue3}&difficulty=${dropdownValue4}`,
      {
        headers: {
          "X-Api-Key": "token",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Request failed:", error));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: 3,
        borderRadius: 2,
        display: "flex",
      }}
    >
      <form>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
              <InputLabel id="dropdown2-label">Type</InputLabel>
              <Select
                labelId="Type-label"
                value={dropdownValue2}
                label="Type"
                onChange={(e) => setDropdownValue2(e.target.value)}
              >
                <MenuItem disabled value="">
                  <em>Type</em>
                </MenuItem>
                <MenuItem value={"cardio"}>Cardio</MenuItem>
                <MenuItem value={"olympic_weightlifting"}>
                  Olmpic Weightlifting
                </MenuItem>
                <MenuItem value={"plyometrics"}>Ploymetrics</MenuItem>
                <MenuItem value={"powerlifting"}>Powerlifting</MenuItem>
                <MenuItem value={"strength"}>Strength</MenuItem>
                <MenuItem value={"stretching"}>Stretching</MenuItem>
                <MenuItem value={"strongman"}>Strongman</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
              <InputLabel id="muscle-label">Muscle</InputLabel>
              <Select
                labelId="muscle-label"
                value={dropdownValue3}
                label="Muscle"
                onChange={(e) => setDropdownValue3(e.target.value)}
              >
                <MenuItem disabled value="">
                  <em>Muscle</em>
                </MenuItem>
                <MenuItem value={"abdominals"}>Abdominals</MenuItem>
                <MenuItem value={"abductors"}>Abductors</MenuItem>
                <MenuItem value={"adductors"}>Adductors</MenuItem>
                <MenuItem value={"biceps"}>Biceps</MenuItem>
                <MenuItem value={"calves"}>Calves</MenuItem>
                <MenuItem value={"chest"}>Chest</MenuItem>
                <MenuItem value={"forearms"}>Forearms</MenuItem>
                <MenuItem value={"glutes"}>Glutes</MenuItem>
                <MenuItem value={"hamstrings"}>Hamstrings</MenuItem>
                <MenuItem value={"lats"}>Lats</MenuItem>
                <MenuItem value={"lower_back"}>Lower Back</MenuItem>
                <MenuItem value={"middle_back"}>Middle Back</MenuItem>
                <MenuItem value={"neck"}>Neck</MenuItem>
                <MenuItem value={"quadriceps"}>Quadriceps</MenuItem>
                <MenuItem value={"traps"}>Traps</MenuItem>
                <MenuItem value={"triceps"}>Triceps</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
              <InputLabel id="difficulty-label">Difficulty</InputLabel>
              <Select
                labelId="difficulty-label"
                value={dropdownValue4}
                label="Difficulty"
                onChange={(e) => setDropdownValue4(e.target.value)}
              >
                <MenuItem disabled value="">
                  <em>Difficulty</em>
                </MenuItem>
                <MenuItem value={"beginner"}>Beginner</MenuItem>
                <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                <MenuItem value={"expert"}>Expert</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default WorkoutQuery;
