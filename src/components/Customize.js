import React, { useState } from 'react';
import { Select, FormControl, MenuItem, Dialog, DialogContent, DialogContentText, IconButton, OutlinedInput } from '@material-ui/core';
import {
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  InsertEmoticon as InsertEmoticonIcon,
  HelpOutline as HelpOutlineIcon
} from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';
import construction from '../assets/art/construction.gif';

const useStyles = makeStyles((props) => createStyles({
  root: props => ({
    marginTop: 15,
    color: theme.palette.primary.main,
    '& .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  }),
  icon: props => ({
    fill: theme.palette.primary.main,
  }),
  input: props => ({
    color: theme.palette.primary.main,
    padding: '5px 14px',
  }),
  dropdown: {
    border: '2px solid black',
  },
  button: props => ({
    padding: 5,
    color: theme.palette.primary.main,
  }),
  dialog: props => ({
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.secondary.main,
  }),
  dialogText: props => ({
    color: theme.palette.primary.main,
    whiteSpace: 'pre-line',
  }),
}));

function Customize(props){
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const { state, changeState, changeSecondary, setState } = props;

  function handleStateChange(event) {
    const newKey = event.target.name;
    const newValue = event.target.value;
    if (newKey === 'pageTheme') changeSecondary(newValue);
    let newState = { ...state };
    newState[newKey] = newValue;
    setState(newState);
  }

  function formatText(key) {
    changeState(key, !state[key]);
  }

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getForm = (key, width, margin, items) => (
    <FormControl variant="outlined" style={{ marginRight: margin }}>
      <Select
        value={state[key]}
        onChange={handleStateChange}
        inputProps={{ name: key, classes: { icon: classes.icon } }}
        style={{ width: width }}
        input={<OutlinedInput classes={{ input: classes.input }} />}
        MenuProps={{ classes: { paper: classes.dropdown } }}
      >
        {Object.keys(items).map((v, index) => (
          <MenuItem value={items[v]} key={index}>{v}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const pageThemes = {
    Newspaper: 'newspaper',
    Daylight: 'daylight',
    Strawberry: 'strawberry',
    Midnight: 'midnight'
  }

  const fontSizes = {
    '18 px': 18,
    '24 px': 24,
    '36 px': 36,
    '48 px': 48,
    '64 px': 64
  }

  return (
    <div className={classes.root}>
      <div style={{ marginTop: 20 }}>
        {getForm('pageTheme', 225, 10, pageThemes)}
        {getForm('fontSize', undefined, undefined, fontSizes)}
      </div>
      <div style={{ marginTop: 5 }}>
        <IconButton className={classes.button} onClick={() => { formatText('bold'); }}>
          <FormatBoldIcon />
        </IconButton>
        <IconButton className={classes.button} onClick={() => { formatText('italic'); }}>
          <FormatItalicIcon />
        </IconButton>
        <IconButton className={classes.button} onClick={() => { formatText('emoticon'); }}>
          <InsertEmoticonIcon />
        </IconButton>
        <div style={{ float: 'right' }}>
          <IconButton className={classes.button} onClick={handleOpenDialog}>
            <HelpOutlineIcon />
          </IconButton>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent className={classes.dialog}>
          <DialogContentText className={classes.dialogText}>
            <img width='90%' src={construction} alt="website under construction" />
            <br />
            Ever since high school, I've been redesigning my site every handful of months to test out new technologies and styles. This particular version was inspired by Google Docs and (I think?) the old version of ArmorGames where you could change the site's color scheme on the sidebar. It was built in Figma, Material UI, and React. Customize as you'd like!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Customize;