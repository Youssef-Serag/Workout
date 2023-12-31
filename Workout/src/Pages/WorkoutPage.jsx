import { Container, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import WorkoutQuery from '../Components/WorkoutQuery';

const MainPage = () => {

  return (
    <Container container >
      <Typography variant="h2" align="center" gutterBottom>
        Page Title
      </Typography>
      <WorkoutQuery/>
    </Container>
  );
};

export default MainPage;
