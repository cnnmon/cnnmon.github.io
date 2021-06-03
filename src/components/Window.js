import Draggable from 'react-draggable';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';

const useStyles = makeStyles((props) => createStyles({
  window: props => ({
    position: 'fixed',
    width: props.scale.width,
    height: props.scale.height,
    zIndex: 10,
  }),
  handle: props => ({
    width: '100%',
    height: '30px',
    border: `2px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    cursor: 'move',
    color: theme.palette.primary.main,
  }),
  title: {
    position: 'absolute',
    padding: '4px 8px',
  },
  circles: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '4px 8px',
  },
  body: props => ({
    width: '100%',
    height: 'calc(100% - 28px)',
    marginTop: '-2px',
    border: `2px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    padding: '0px 25px',
    overflowY: 'scroll',
    '& a': {
      cursor: 'pointer',
      color: 'black',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
    '&::-webkit-scrollbar': {
      background: 'transparent',
    }
  }),
}));

function Window(props){
  const classes = useStyles(props);
  const { position, style, title, content } = props;

  return (
    <Draggable
      handle='.handle'
      defaultPosition={position ? position : undefined}
    >
      <div className={classes.window} style={style ? style : undefined}>
        <div className={`handle ${classes.handle}`}>
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
         <div className={classes.circles}>
           <FiberManualRecordOutlinedIcon fontSize="small" />
           <FiberManualRecordOutlinedIcon fontSize="small" />
           <FiberManualRecordOutlinedIcon fontSize="small" />
         </div>
        </div>
        <div className={classes.body}>
          {content}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
