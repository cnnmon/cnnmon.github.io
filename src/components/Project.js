import { Typography, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    color: theme.palette.primary.main,
    margin: '20px 0px',
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
  container: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    top: 0,
    paddingTop: '30vh',
    paddingBottom: '20vh',
  },
  content: props => ({
    margin: '20px 0px',
    width: window.innerWidth < theme.breakpoints.values.tablet ? '80vw' : '60vw',
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

function Content(props) {
  const { file, goBack } = props;
  const classes = useStyles(props);

  const getTitle = () => (
    props.state.emoticon ?
      <span>{file.emoticon}‍</span> : <span>{file.name}</span>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h1">{getTitle()}</Typography>
      <div className={classes.link}>
        <Link onClick={() => { goBack(); }}>
          <u><b>back</b></u>
        </Link>
      </div>
      <div className={classes.details}>{file.details}</div>
      <div className={classes.content}>{file.body}</div>
      <br />
      <Link onClick={() => { goBack(); }}><u>back to all projects</u></Link>
    </div>
  );
}

function Project(props){
  const { state, file, goBack } = props;
  const classes = useStyles(props);

  return (
    <div id='project'>
      <div className={classes.container}>
        <Content state={state} file={file} goBack={goBack} />
      </div>
    </div>
  );
}

export default Project;
