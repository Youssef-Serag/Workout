import React from "react";
import WorkoutCard from "./WorkoutCard";
import { Grid } from "@mui/material";

const WorkoutContainer = ({ data, onAdd }) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop={5}
      >
        {data.map((workout, index) => (
          <Grid item key={index}>
            <WorkoutCard
              name={workout.name}
              type={workout.type}
              muscle={workout.muscle}
              equipment={workout.equipment}
              instructions={workout.instructions}
              onAdd={onAdd}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WorkoutContainer;
