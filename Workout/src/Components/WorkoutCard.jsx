import React from "react";
import { useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const WorkoutCard = ({
  name,
  type,
  muscle,
  equipment,
  instructions,
  onAdd,
}) => {
  const [isClicked, setIsClicked] = useState({
    text: "Add to Plan",
    color: "success",
  });

  const handleClick = () => {
    onAdd(isClicked.text, name);
    if (isClicked.text === "Add to Plan") {
      setIsClicked({ text: "Remove", color: "error" });
    } else {
      setIsClicked({ text: "Add to Plan", color: "success" });
    }
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {name}
        </Typography>
        <Typography variant="body1" align="center">
          Type: {type}
        </Typography>
        <Typography variant="body1" align="center">
          Muscle Group: {muscle}
        </Typography>
        <Typography variant="body1" align="center">
          Equipment: {equipment}
        </Typography>
        <Box
          sx={{
            maxHeight: 100,
            overflow: "auto",
            mt: 2,
            mb: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">{instructions}</Typography>
        </Box>
        <Button
          size="small"
          variant="contained"
          color={isClicked?.color}
          fullWidth
          onClick={handleClick}
        >
          {isClicked?.text}
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
