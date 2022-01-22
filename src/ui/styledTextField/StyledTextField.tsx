import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    textAlign: 'end',
  },
});
