import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function SearchInput({ ...rest }) {
    return (
        <div className='flex justify-center'>
            <TextField 
                className="w-80"
                placeholder="Enter Specific Team" 
                variant='filled'
                size='large' 
                color='warning'
                
               InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                }} 
            />
        </div>
    )
}