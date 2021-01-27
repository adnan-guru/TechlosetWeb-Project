import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#f6f6f6',
    // color: '#747474'
  },
  iconGrid: {
    textAlign: 'center',
    // fontSize: '30px'
  },
  icon: {
    fontSize: '100px',
  }
}));