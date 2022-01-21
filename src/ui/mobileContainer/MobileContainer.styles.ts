import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(14, 2, 2),
  },
  appBar: {
    padding: theme.spacing(2),
  },
}));
