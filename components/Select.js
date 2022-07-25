import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({...rest}) {
  const [year, setYear] = useState('2021');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className='flex justify-center'>
        <div className='bg-theme-white p-2 m-4 rounded-md'>
        <Box sx={{ minWidth: 120 }} className='w-40'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="2021"
                onChange={handleChange}
                {...rest}
                >
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </div>
    </div>
    
    
  );
}
