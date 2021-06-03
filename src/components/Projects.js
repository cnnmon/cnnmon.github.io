import React, { useState } from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';
import { highlights, more } from '../assets/projectData.js';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    color: theme.palette.primary.main,
    width: window.innerWidth < theme.breakpoints.values.tablet ? '80vw' : '60vw',
    paddingTop: '30vh',
    paddingBottom: '20vh',
    '& h1': {
      fontSize: props.state.fontSize,
      fontWeight: props.state.bold ? 'bold' : 'normal',
      fontStyle: props.state.italic ? 'italic' : 'normal',
    },
  }),
  title: {
    marginBottom: 20,
  },
  image: {
    width: '16vw',
    position: 'fixed',
    top: '25%',
    right: '20%',
    zIndex: -1,
    opacity: 0.5,
  },
  description: {
    marginLeft: 30,
    marginBottom: 20,
  },
  archive: {
    marginBottom: 10,
  },
}));


function Projects(props) {
  const classes = useStyles(props);
  const { handleFileClick } = props;
  const [image, setImage] = useState(null);

  function showImage(project) {
    setImage(project.img);
  }

  function hideImage() {
    setImage(null);
  }

  return (
    <div className={classes.root}>
      <img className={classes.image} style={{ display: image !== null ? 'block' : 'none' }} src={image} alt="project cover" />
      <Typography variant="h1" className={classes.title}>{props.state.emoticon ?
        <span>✨📁</span> : <span>highlights</span>}
      </Typography>
      {highlights.map((project, index) => (
        <div key={index}>
          <Typography variant="body2">
            <Link
              onClick={() => { handleFileClick(project); }}
              onMouseEnter={() => { showImage(project); }}
              onMouseLeave={() => { hideImage(); }}
            >
              <b>[{project.name}]</b>
            </Link><br />
            <i>{project.tags}</i><br />
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {project.description}
          </Typography>
        </div>
      ))}
      <Typography variant="h1" className={classes.title}>{props.state.emoticon ?
        <span>🗄️📁</span> : <span>archive</span>}
      </Typography>
      <Typography variant="body2">
        {more.map((project, index) => (
          <span key={index} className={classes.archive}>
            <Link target="_blank" rel="noopener noreferrer" href={project.link}>
              <b>[{project.name}]</b>
            </Link> {project.description}
            <br /><br />
          </span>
        ))}
      </Typography>
    </div>
  );
}

export default Projects;
