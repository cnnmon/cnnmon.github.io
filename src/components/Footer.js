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
        <a href="https://github.com/cnnmon/cnnmon.github.io" target="_blank" rel="noreferrer" className="footer-text">made with ♡ by tiffany wang</a>
      </div>
    </div>
  );
}

export default Footer;
