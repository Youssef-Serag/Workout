import React, { useState } from 'react';
import { Container, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const MainPage = () => {
  const [dropdownValue1, setDropdownValue1] = useState('');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [dropdownValue3, setDropdownValue3] = useState('');
  const [dropdownValue4, setDropdownValue4] = useState('');
  const [dropdownValue5, setDropdownValue5] = useState('');

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Page Title
      </Typography>

      <Box sx={{ backgroundColor: '#f5f5f5', padding: 3, borderRadius: 2, display: 'flex'}} autoWidth>
        <FormControl  sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
          <InputLabel id="dropdown1-label">Name</InputLabel>
          <Select
            labelId="dropdown1-label"
            value={dropdownValue1}
            label="Dropdown 1"
            onChange={(e) => setDropdownValue1(e.target.value)}
            autoWidth
          >
            {/* Populate with menu items */}
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl  sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
          <InputLabel id="dropdown2-label">Type</InputLabel>
          <Select
            labelId="dropdown2-label"
            value={dropdownValue2}
            label="Dropdown 2"
            onChange={(e) => setDropdownValue2(e.target.value)}
            autoWidth
          >
            {/* Populate with menu items */}
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl  sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
          <InputLabel id="dropdown3-label">Muscle</InputLabel>
          <Select
            labelId="dropdown3-label"
            value={dropdownValue3}
            label="Dropdown 3"
            onChange={(e) => setDropdownValue3(e.target.value)}
            autoWidth
          >
            {/* Populate with menu items */}
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl  sx={{ m: 1, minWidth: 100, flexGrow: 1 }}>
          <InputLabel id="dropdown4-label">Difficulty</InputLabel>
          <Select
            labelId="dropdown4-label"
            value={dropdownValue4}
            label="Dropdown 4"
            onChange={(e) => setDropdownValue4(e.target.value)}
            autoWidth
          >
            {/* Populate with menu items */}
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={dropdownValue5}
          onChange={(e) => setDropdownValue5(e.target.value)}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
    </Container>
  );
};

export default MainPage;
