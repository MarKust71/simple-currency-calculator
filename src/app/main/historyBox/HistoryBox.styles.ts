import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: '4px',
    padding: theme.spacing(1),
    border: '1px solid',
    borderColor: theme.palette.grey.A400,
    minHeight: '2.5rem',
    maxHeight: '22rem',
    overflowY: 'auto',
  },
}));
