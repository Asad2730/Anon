import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

export const CustomInput = () => (
  <Box sx={{ flex: 1, display: 'flex' }}>
    <TextField
      fullWidth
      variant="standard"
      sx={{ backgroundColor: 'white' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </Box>
);
