import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    padding: '30px',
    color: theme.palette.primary.main,
    '& p': {
      fontWeight: props.state.bold ? 'bold' : 'normal',
      fontStyle: props.state.italic ? 'italic' : 'normal',
    },
  }),
}));

function Footer(props){
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">
        <span style={{ display: 'inline-flex' }}>
          made with ♡ in Cleveland, OH.<br />
          © 2021 — Tiffany Wang
        </span>
        <span style={{ float: 'right', textAlign: 'right' }}>
          let's connect!<br />
          <b>tiffanywang@berkeley.edu</b>
        </span>
      </Typography>
    </div>
  );
}

export default Footer;
