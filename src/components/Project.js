import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    color: theme.palette.primary.main,
    margin: '20px 0px',
    paddingTop: '30vh',
    paddingBottom: '20vh',
    '& h1': {
      fontSize: props.state.fontSize,
      fontWeight: props.state.bold ? 'bold' : 'normal',
      fontStyle: props.state.italic ? 'italic' : 'normal',
    },
  }),
  link: {
    margin: '10px 0px',
  },
  details: props => ({
    borderLeft: `2px solid ${theme.palette.primary.main}`,
  }),
  content: props => ({
    margin: '20px 0px',
    width: window.innerWidth < theme.breakpoints.values.tablet ? theme.breakpoints.values.largeWidth : theme.breakpoints.values.smallWidth,
    '& img': {
      margin: '10px',
    },
    '& h2': {
      fontWeight: props.state.bold ? 'bold' : 'normal',
      fontStyle: props.state.italic ? 'italic' : 'normal',
      margin: '20px 0px 10px',
    },
    '& p': {
      marginBottom: '30px',
    },
    '& iframe': {
      width: 450,
      height: 253.5,
      margin: '30px 10px',
    }
  }),
}));

function Project(props){
  const { file } = props;
  const classes = useStyles(props);

  const getTitle = () => (
    props.state.emoticon ?
      <span>{file.emoticon}‍</span> : <span>{file.name}</span>
  );

  const getDetails = () => (
    <span>
      {Object.keys(file.details).map((d, index) => (
        <span key={index}>
          <b>{d}</b> {file.details[d]}<br />
        </span>
      ))}
    </span>
  );

  const getLinks = () => (
    <span>
      <b>links </b>
      {Object.keys(file.links).map((l, index) => (
        <span key={index}>
          <a href={file.links[l]} target="_blank" rel="noreferrer">{l}</a> </span>
      ))}
      <br />
    </span>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h1">{getTitle()}</Typography>
      <div className={classes.link}>
        <Link to={"/projects"}><u><b>back</b></u></Link>
      </div>
      <Typography variant="body2">
        {getDetails()}
        {file.links !== null ? getLinks() : null}
      </Typography>
      <div className={classes.content}>{file.body}</div>
      <br />
      <Link to={"/projects"}><u>back to all projects</u></Link>
    </div>
  );
}

export default Project;
