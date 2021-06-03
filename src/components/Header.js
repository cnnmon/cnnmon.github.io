import React from 'react';
import { Link, Typography, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { theme } from './themeUtils.js';
import logo_1 from '../assets/logo_1.svg';
import logo_2 from '../assets/logo_2.svg';

const useStyles = makeStyles((props) => createStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  link: props => ({
    color: theme.palette.primary.main,
    margin: '0px 10px',
  }),
  menu: {
    padding: '40px 0px 0px 40px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  hamburger: props => ({
    color: theme.palette.primary.main,
  }),
}));

const StyledMenu = withStyles({ paper: { border: `2px solid ${theme.palette.primary.main}` }})
  (props => (
    <Menu
      getContentAnchorEl={null}
      {...props}
    />
  ));

function Header(props){
  const classes = useStyles();
  const { state, changeState } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handlePageChange(newPage) {
    changeState('page', newPage);
    window.scrollTo(0, 0);
    if (newPage === 'projects' && state.projectState.open) {
      changeState('projectState', { open: false, project: undefined });
    }
  }

  const getHamburger = () => {
    const handleHamburgerClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleHamburgerClose = (newPage) => {
      setAnchorEl(null);
      handlePageChange(newPage);
    };

    return (
      <div>
        <IconButton onClick={handleHamburgerClick}>
          <MenuIcon className={classes.hamburger} />
        </IconButton>
        <StyledMenu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => { setAnchorEl(null); }}
        >
          <MenuItem onClick={() => { handleHamburgerClose('home'); }}>home</MenuItem>
          <MenuItem onClick={() => { handleHamburgerClose('about'); }}>about</MenuItem>
          <MenuItem onClick={() => { handleHamburgerClose('projects'); }}>projects</MenuItem>
          <MenuItem onClick={() => { window.open("https://drive.google.com/file/d/1eLelGRhX6h65sQhYiB_LqCli2UL2U-wW/view?usp=sharing"); }}>resume</MenuItem>
        </StyledMenu>
      </div>
    );
  }

  const getLogo = () => (
    state.pageTheme === 'midnight' ? logo_2 : logo_1
  );

  const getLinks = () => (
    <Typography variant="h2">
      <Link className={classes.link} onClick={() => { handlePageChange('home'); }}>home</Link>
      <Link className={classes.link} onClick={() => { handlePageChange('about'); }}>about</Link>
      <Link className={classes.link} onClick={() => { handlePageChange('projects'); }}>projects</Link>
      <Link className={classes.link} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1eLelGRhX6h65sQhYiB_LqCli2UL2U-wW/view?usp=sharing">resume</Link>
    </Typography>
  );

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <object data={getLogo()} width="60px" height="60px" aria-label="weather-logo" style={{ marginRight: 10 }}></object>
        { window.innerWidth < theme.breakpoints.values.tablet ? getHamburger() : getLinks() }
      </div>
    </div>
  );
}

export default Header;
