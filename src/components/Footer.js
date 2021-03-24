import { makeStyles, createStyles } from '@material-ui/core/styles';
import { RiLinkedinBoxLine, RiGithubLine, RiTwitterLine, RiMailLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    paddingTop: 120,
    paddingBottom: 10,
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: -10,
    color: 'rgba(217, 95, 116, 0.6)',
    fontWeight: 700,
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.icons}>
        <a href="https://www.linkedin.com/in/wtiffany/" target="_blank" rel="noreferrer">
          <RiLinkedinBoxLine className="icon" />
        </a>
        <a href="https://github.com/cnnmon" target="_blank" rel="noreferrer">
          <RiGithubLine className="icon" />
        </a>
        <a href="https://twitter.com/cnnmonsugar" target="_blank" rel="noreferrer">
          <RiTwitterLine className="icon" />
        </a>
        <a href="mailto:tiffanywang@berkeley.edu" target="_blank" rel="noreferrer">
          <RiMailLine className="icon" />
        </a>
      </div>
      <div className={classes.text}>
        <p>made with ♡ by tiffany wang</p>
      </div>
    </div>
  );
}

export default Footer;
