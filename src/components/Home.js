import { Typography, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';
import sparkles from '../assets/sparkles.svg';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    color: theme.palette.primary.main,
    width: window.innerWidth < theme.breakpoints.values.tablet ? theme.breakpoints.values.largeWidth : theme.breakpoints.values.smallWidth,
    paddingTop: '30vh',
    paddingBottom: '20vh',
  }),
  title: props => ({
    fontSize: props.state.fontSize,
    fontWeight: props.state.bold ? 'bold' : 'normal',
    fontStyle: props.state.italic ? 'italic' : 'normal',
  }),
  image: props => ({
    filter: props.state.pageTheme === 'midnight' ? 'brightness(0) invert(1)' : undefined,
  }),
  body: {
    width:  window.innerWidth < theme.breakpoints.values.tablet ? undefined : '70%',
  }
}));

export function Home(props){
  const classes = useStyles(props);

  const getTitle = () => (
    props.state.emoticon ?
      <span>👋👩🏻💻️🎨🖌️!</span> : <span>hi, i'm tiffany wang!</span>
  )

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">00. home</Typography>
      <Typography variant="h1" className={classes.title}>
        {getTitle()}
      </Typography>
      <Typography variant="body2" className={classes.body}>
        — developer and designer building software to spark joy. I'm interested in human-computer interaction, creative coding, and social good.
        <br /><br />
        Currently developing @Facebook, studying @Berkeley.
        <br /><br />
        <Link target="_blank" rel="noopener noreferrer" href="mailto:tiffanywang@berkeley.edu">[mailto]</Link> <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wtiffany/">[linkedin]</Link> <Link target="_blank" rel="noopener noreferrer" href="https://github.com/cnnmon">[github]</Link> <Link target="_blank" rel="noopener noreferrer" href="https://cnnmon.itch.io/">[itch.io]</Link> <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/cnnmonsugar">[twitter]</Link>
      </Typography>
      <br />
      <object data={sparkles} width="40vw" height="40vw" className={classes.image} aria-label="sparkles-deco"></object>
    </div>
  );
}

export default Home;
