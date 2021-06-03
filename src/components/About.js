import { Typography, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';
import profile from '../assets/profile.png';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    color: theme.palette.primary.main,
    width: window.innerWidth < theme.breakpoints.values.tablet ? '80vw' : '60vw',
    paddingTop: theme.breakpoints.values.top,
    paddingBottom: theme.breakpoints.values.bottom,
  }),
  title: props => ({
    fontSize: props.state.fontSize,
    fontWeight: props.state.bold ? 'bold' : 'normal',
    fontStyle: props.state.italic ? 'italic' : 'normal',
  }),
}));

export default function About(props){
  const classes = useStyles(props);

  const getTitle = () => (
    props.state.emoticon ?
      <span>🗨️🏃🏻‍♀️</span> : <span>a little about me</span>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {getTitle()}
      </Typography>
      <Typography variant="body2">
        <img src={profile} width={200} alt="me & kiiroitori"></img>
        <br /><br />
        Hi there! I'm Tiffany Wang (she/her). I was born and raised in the cornfields of Ohio. Now escaped, I’m a rising sophomore at <Link target="_blank" rel="noopener noreferrer" href="https://www.berkeley.edu/">UC Berkeley</Link> studying computer science and design.
        <br /><br />
        I do software engineering, game development, UI/UX design, and art. I got my start in programming dress up games in Flash, and I want to continue making stuff that's equally interactive, colorful, and fun. Along those lines, I'm eager to learn more about tech, people, and how tech can make people happy.
        <br /><br />
        Currently, I develop software for nonprofits with <Link target="_blank" rel="noopener noreferrer" href="https://calblueprint.org/">Blueprint</Link> and direct collegiate hackathons at <Link target="_blank" rel="noopener noreferrer" href="https://calhacks.io/">Cal Hacks</Link>. This summer, I’ll be joining <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">Facebook</Link> as a University Engineering Intern doing Android development.
        <br /><br />
        Previously, I worked at <Link target="_blank" rel="noopener noreferrer" href="http://www.playseelife.com/">SeeLife</Link> building prototypes to gamify biofeedback therapy. I also built projects under the mentorship of industry engineers at <Link target="_blank" rel="noopener noreferrer" href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/">Google CSSI</Link> and exhibited video games at Scholastic's <Link target="_blank" rel="noopener noreferrer" href="https://www.artandwriting.org/">Art.Write.Now</Link> gallery in NYC.
        <br /><br />
        When Atom isn’t open, you can find me queuing up for League of Legends (specifically, Teamfight Tactics), binging anime, tending to my fake plants, and steeping tea.
        <br /><br />
        Let’s chat! Email me anytime at <Link target="_blank" rel="noopener noreferrer" href="mailto:tiffanywang@berkeley.edu">tiffanywang@berkeley.edu</Link>.
      </Typography>
      <br />
    </div>
  );
}
