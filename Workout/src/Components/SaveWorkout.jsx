import React from "react";
import { useState } from "react";
import {
  Box,
  CardContent,
  Typography,
  Button,
  TextField,
  Stack,
  Chip,
  Grid,
} from "@mui/material";

const SaveWorkout = ({ data }) => {
  const [workoutName, setWorkoutName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workoutName, data);
  };
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", // allows items to wrap to the next line if needed
        }}
      >
        <form className="form" style={{ width: "100%" }}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <TextField
              required
              id="Workout-name"
              label="Workout Name"
              variant="filled"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              sx={{ flexGrow: 1 }} // allows the TextField to grow
            />
            <Box
              bgcolor="#f0f0f0"
              p={1}
              borderRadius={2}
              sx={{
                flexGrow: 4, // Allow this Box to grow more
                display: "flex",
                flexWrap: "wrap", // Allow chips to wrap to the next line
                gap: 0.5, // Gap between chips
                overflow: "hidden", // Handle overflow
              }}
            >
              {data.length > 0 ? (
                data.map((workout, index) => (
                  <Chip key={index} label={workout} />
                ))
              ) : (
                <Typography color="black" variant="body1">
                  No Workouts Added
                </Typography>
              )}
            </Box>

            <Button
              color="success"
              variant="contained"
              onClick={handleSubmit}
              disabled={data.length === 0 || workoutName === ""}
            >
              Save Workout
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default SaveWorkout;
