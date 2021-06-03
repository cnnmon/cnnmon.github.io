import React, { useState } from 'react';
import { makeStyles, createStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { theme, changeSecondary } from './components/themeUtils.js';
import Window from './components/Window.js';
import Home from './components/Home.js';
import Customize from './components/Customize.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Projects from './components/Projects.js';
import Header from './components/Header.js';

const useStyles = makeStyles((props) => createStyles({
  header: {
    position: 'fixed',
    width: '100%',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    left: 0,
  },
}));

function ProjectsPage(props) {
  const { state, changeState } = props;

  function handleFileClick(file) {
    changeState('projectState', { open: true, project: file });
    window.scrollTo(0, 0);
  }

  function goBack() {
    changeState('projectState', { ...state.projectState, open: false });
    window.scrollTo(0, 0);
  }

  return (
    <div>
      { state.projectState.open ? <Project state={state} file={state.projectState.project} goBack={goBack} /> : <Projects state={state} handleFileClick={handleFileClick} /> }
    </div>
  );
}

function App() {
  const classes = useStyles();

  /* Customization */
  const [state, setState] = useState({
    page: 'home',
    pageTheme: 'newspaper',
    fontSize: 36,
    bold: false,
    italic: false,
    emoticon: false,
    projectState: {
      open: false,
      project: undefined,
    }
  });

  function changeState(newKey, newValue) {
    if (newKey === 'pageTheme') changeSecondary(newValue);
    let newState = { ...state };
    newState[newKey] = newValue;
    setState(newState);
  }

  const getPage = () => {
    switch (state.page) {
      case 'home':
        return ( <div className={classes.container}><Home state={state} /></div> );
      case 'about':
        return ( <div className={classes.container}><About state={state} /></div> );
      case 'projects':
        return ( <div className={classes.container}><ProjectsPage name='projects' state={state} changeState={changeState} classes={classes} /></div> );
      default:
        break;
    }
  }

  const getCustomization = () => (
    <Window
      content={
        <Customize
          state={state}
          changeState={changeState}
          setState={setState}
        />
      }
      scale={{ width: '380px', height: '140px' }}
      style={{ bottom: '10%', left: '90%' }}
      title="drag me ✧・ﾟ:*"
    />
  );

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.body}>
        {getPage()}
      </div>
      <div className={classes.header}>
        <Header state={state} changeState={changeState} />
      </div>
      <div style={{ display: window.innerWidth < theme.breakpoints.values.tablet ? 'none' : 'block' }}>
        {getCustomization()}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
