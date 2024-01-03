import { Container, Typography } from "@mui/material";
import WorkoutQuery from "../Components/WorkoutQuery";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleData = (buttonText, workoutName) => {
    if (buttonText === "Remove") {
      setData(data.filter((name) => name !== workoutName));
    } else {
      setData([...data, workoutName]);
    }
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Workout Page
      </Typography>
      <WorkoutQuery onAdd={handleData} />
    </Container>
  );
};

export default MainPage;
