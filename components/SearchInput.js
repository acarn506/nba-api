import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function SearchInput({ ...rest }) {
    return (
        <div className='flex justify-center mt-6 mb-2'>
            <TextField 
                className="w-80"
                placeholder="Enter Specific Team" 
                variant='filled'
                size='large' 
                color='warning'
                {...rest}
                
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