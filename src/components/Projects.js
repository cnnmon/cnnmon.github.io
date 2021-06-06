import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';
import { highlights, more } from '../assets/projectData.js';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    display: 'block !important',
    color: theme.palette.primary.main,
    width: window.innerWidth < theme.breakpoints.values.tablet ? theme.breakpoints.values.largeWidth : theme.breakpoints.values.smallWidth,
    paddingTop: '30vh',
    paddingBottom: '20vh',
    '& h1': {
      fontSize: props.state.fontSize,
      fontWeight: props.state.bold ? 'bold' : 'normal',
      fontStyle: props.state.italic ? 'italic' : 'normal',
    },
  }),
  image: props => ({
    display: 'flex',
    alignItems: 'center',
    objectFit: 'cover',
    width: window.innerWidth < theme.breakpoints.values.tablet ? '80vw' : '35vw',
    height: window.innerWidth < theme.breakpoints.values.tablet ? '30vw' : '16vw',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  }),
  description: {
    width: window.innerWidth < theme.breakpoints.values.tablet ? undefined : '40vw',
  },
  date: {
    opacity: 0.5,
    marginBottom: 20,
  },
  featuredLink: props => ({
    display: 'inline-block',
    overflow: 'hidden',
    margin: 10,
    width: window.innerWidth < theme.breakpoints.values.tablet ? '80vw' : '35vw',
    height: window.innerWidth < theme.breakpoints.values.tablet ? '30vw' : '16vw',
    transition: '0.3s',
    '&:hover': {
      background: 'none',
      opacity: 1,
      transform: 'scale(0.98)',
    }
  }),
}));

function FeaturedPreview(props) {
  const { classes, project } = props;

  return (
    <div>
      <Typography variant="h2">
        <b>{project.name}</b>
      </Typography>
      <Link to={"/projects/" + project.url} className={classes.featuredLink}>
        <img src={project.img} className={classes.image} alt="" />
      </Link>
      <div className={classes.description}>
        <Typography variant="body2" style={{ marginBottom: 10 }}>
          {project.description}
        </Typography>
        <Typography variant="body2" className={classes.date}>
          <i>{project.details.date}</i>
          <span style={{ float: 'right' }}>
            <i>{project.details.tags}</i>
          </span>
        </Typography>
      </div>
    </div>
  );
}

function MiscPreview(props) {
  const { classes, project } = props;

  return (
    <div>
      <Typography variant="body2" style={{ marginBottom: 5 }}>
        <a target="_blank" rel="noopener noreferrer" href={project.link}>
          <b>{project.name}</b>
        </a>
      </Typography>
      <div className={classes.description}>
        <Typography variant="body2" style={{ marginBottom: 10 }}>
          {project.description}
        </Typography>
        <Typography variant="body2" className={classes.date}>
          <i>{project.details.date}</i>
          <span style={{ float: 'right' }}>
            <i>{project.details.tags}</i>
          </span>
        </Typography>
      </div>
    </div>
  );
}

function Projects(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">02. projects</Typography>
      <Typography variant="h1">{props.state.emoticon ?
        <span>✨📁</span> : <span>highlighted projects</span>}
      </Typography>
      <Typography variant="body1">
        A handful of projects I wanted to talk a little about. Click to learn more!
      </Typography>
      <br />
      {highlights.map((project, index) => (
        <div key={index}>
          <FeaturedPreview classes={classes} project={project} />
        </div>
      ))}
      <Typography variant="h1">{props.state.emoticon ?
        <span>🗄️📁</span> : <span>more</span>}
      </Typography>
      <Typography variant="body1">
        A running directory of all the other projects I've worked on.
      </Typography>
      <br />
      {more.map((project, index) => (
        <div key={index}>
          <MiscPreview classes={classes} project={project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
