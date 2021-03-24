import { makeStyles, createStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from "history";
import { ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import circle from './assets/circle.png';
import circles from './assets/circles.png';
import grid from './assets/grid.png';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import projects from './assets/projectData.js';

const theme = {
  background: 'rgb(255,215,216)',
  yellow: '#FFC6AE',
  orange: '#FCA4B4',
  pink: '#DB81C5',
  blue: '#AF95ED',
};

const useStyles = makeStyles((theme) => createStyles({
  circle: {
    position: 'absolute',
    zIndex: -1,
    top: -120,
    left: -300,
  },
  circles: {
    width: 20,
    position: 'fixed',
    right: 20,
    bottom: 20,
    zIndex: 2,
  },
  grid: {
    position: 'absolute',
    top: -110,
    left: -300,
    zIndex: -2,
    width: 500,
  }
}));

function App() {
  const classes = useStyles();

  const history = createBrowserHistory();
  history.listen(_ => {
      window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.doodle}>
        <img src={circle} className={classes.circle} alt=""></img>
        <img src={grid} className={classes.grid} alt=""></img>
      </div>
      <img src={circles} className={classes.circles} alt=""></img>
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <div className="navbar">
          <NavLink activeClassName="active-title" className="title orange" exact to="/">home</NavLink>
          <NavLink activeClassName="active-title" className="title pink" exact to="/about">about</NavLink>
          <NavLink activeClassName="active-title" className="title purple" exact to="/projects">projects</NavLink>
          <a className="title blue" href="https://drive.google.com/file/d/1NeHy2jHa8lU5K4xvPF1ZfdQDSuvbMm76/view?usp=sharing" target="_blank" rel="noreferrer">resume</a>
        </div>
        <AnimatedSwitch
          atEnter={{ offset: -25, opacity: 0 }}
          atLeave={{ offset: 25, opacity: 0 }}
          atActive={{ offset: 0, opacity: 1 }}
          mapStyles={(styles) => ({
            transform: `translateY(${styles.offset}%)`,
            opacity: styles.opacity
          })}
          className="route-wrapper"
        >
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/projects" component={Projects} />
          {projects.map((project, index) => (
            <Route exact={true} path={"/projects/" + project.url} key={index} component={project.component} />
          ))}
        </AnimatedSwitch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
