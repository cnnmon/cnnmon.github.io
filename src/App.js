import React, { useState } from 'react';
import { createBrowserHistory } from "history";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme, changeSecondary } from './components/themeUtils.js';
import Window from './components/Window.js';
import Customize from './components/Customize.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  const history = createBrowserHistory();
  history.listen(_ => {
      window.scrollTo(0, 0);
  });

  /* Customization */
  const [state, setState] = useState({
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
      <Header
        state={state}
        changeState={changeState}
      />
      <Footer state={state} />
      <div style={{ display: window.innerWidth < theme.breakpoints.values.tablet ? 'none' : 'block' }}>
        {getCustomization()}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
