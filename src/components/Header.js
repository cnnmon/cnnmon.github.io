import React from 'react';
import { Link, Typography, Menu, MenuItem, IconButton } from '@material-ui/core';
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Home from './Home.js';
import About from './About.js';
import Project from './Project.js';
import Projects from './Projects.js';
import { theme } from './themeUtils.js';
import logo_1 from '../assets/logo_1.svg';
import logo_2 from '../assets/logo_2.svg';
import { highlights } from '../assets/projectData.js';

const useStyles = makeStyles((props) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: props => ({
    fontWeight: 900,
    margin: '0px 10px',
    textDecoration: 'none !important',
    opacity: 0.3,
    transition: '0.2s',
    background: 'none !important',
    '&:hover': {
      opacity: 1,
      filter: props.state.pageTheme === 'midnight' ? 'brightness(0) invert(1)' : 'brightness(0) invert(0)',
    }
  }),
  menuLink: {
    textDecoration: 'none !important',
    '&:hover': {
      color: 'black !important',
    }
  },
  activeLink: props => ({
    pointerEvents: 'none',
    textDecoration: 'none !important',
    opacity: 1,
  }),
  menu: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    padding: '40px 0px 0px 40px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  hamburger: props => ({
    color: theme.palette.primary.main,
  }),
  left: {
    padding: 10,
    display: 'inline-flex',
    alignItems: 'center',
    '& img': {
      padding: '5px 0px',
      width: 50,
      paddingRight: 10,
    },
  },
  right: props => ({
    marginTop: window.innerWidth < theme.breakpoints.values.tablet ? 5 : undefined,
    position: window.innerWidth < theme.breakpoints.values.tablet ? 'relative' : 'absolute',
    right: window.innerWidth < theme.breakpoints.values.tablet ? undefined : '8%',
  }),
  page: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    left: 0,
  },
}));

const StyledMenu = withStyles({ paper: { border: `2px solid ${theme.palette.primary.main}` }})
  (props => (
    <Menu
      getContentAnchorEl={null}
      {...props}
    />
  ));

function Header(props){
  const classes = useStyles(props);
  const { state } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const getHamburger = () => {
    const handleHamburgerClick = (event) => {
      setAnchorEl(event.currentTarget);
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
          <NavLink
            className={classes.menuLink}
            exact to="/about"
          >
            <MenuItem>about</MenuItem>
          </NavLink>
          <NavLink
            className={classes.menuLink}
            exact to="/projects"
          >
            <MenuItem>projects</MenuItem>
          </NavLink>
          <Link
            className={classes.menuLink}
            target="_blank" rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1eLelGRhX6h65sQhYiB_LqCli2UL2U-wW/view?usp=sharing"
          >
            <MenuItem>resume</MenuItem>
          </Link>
        </StyledMenu>
      </div>
    );
  }

  const getLogo = () => (
    state.pageTheme === 'midnight' ? logo_2 : logo_1
  );

  const getLinks = () => (
    <Typography variant="h2">
      <NavLink
        className={classes.link}
        activeClassName={classes.activeLink}
        exact to="/about"
      >
        about
      </NavLink>
      <NavLink
        className={classes.link}
        activeClassName={classes.activeLink}
        exact to="/projects"
      >
        projects
      </NavLink>
      <Link
        className={classes.link}
        target="_blank" rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1eLelGRhX6h65sQhYiB_LqCli2UL2U-wW/view?usp=sharing"
      >
        resume
      </Link>
    </Typography>
  );

  return (
    <div className={classes.root}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className={classes.menu}>
          <div className={classes.left}>
            <img src={getLogo()} alt=""></img>
            <Typography variant="h2">
              <NavLink
                className={classes.link}
                activeClassName={classes.activeLink}
                exact to="/"
              >
                tiffanywang
              </NavLink>
            </Typography>
          </div>
          <div className={classes.right}>
            { window.innerWidth < theme.breakpoints.values.tablet ?
              getHamburger() : getLinks() }
          </div>
        </div>
        <Switch className={classes.page}>
          <Route exact={true} path="/">
            <Home state={state} />
          </Route>
          <Route exact={true} path="/about">
            <About state={state} />
          </Route>
          <Route exact={true} path="/projects">
            <Projects state={state} />
          </Route>
          {highlights.map((project, index) => (
            <Route exact={true} path={"/projects/" + project.url} key={index}>
              <Project state={state} file={project} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
