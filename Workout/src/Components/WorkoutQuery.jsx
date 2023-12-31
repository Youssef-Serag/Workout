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
import WorkoutContainer from "./WorkoutContainer";
import EmptyPage from "./EmptyPage";

const token = import.meta.env.VITE_SOME_KEY;

const WorkoutQuery = () => {
  const [type, setType] = useState("");
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.api-ninjas.com/v1/exercises?type=${type}&muscle=${muscle}&difficulty=${difficulty}`,
      {
        headers: {
          "X-Api-Key": token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Request failed:", error));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 3,
          borderRadius: 2,
          display: "flex",
        }}
      >
        <form className="form" style={{ width: "100%" }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
                <InputLabel id="dropdown2-label">Type</InputLabel>
                <Select
                  labelId="Type-label"
                  value={type}
                  label="Type"
                  onChange={(e) => setType(e.target.value)}
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
                  value={muscle}
                  label="Muscle"
                  onChange={(e) => setMuscle(e.target.value)}
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
                  value={difficulty}
                  label="Difficulty"
                  onChange={(e) => setDifficulty(e.target.value)}
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
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      {data.length > 0 ? <WorkoutContainer data={data} /> : <EmptyPage />}
    </>
  );
};

export default WorkoutQuery;
