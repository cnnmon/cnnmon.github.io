import { createMuiTheme } from '@material-ui/core/styles';
import gradient from '../assets/gradient.gif';

const palette = {
  solids: {
    black: 'rgba(0, 0, 0, 1)',
    white: 'rgba(214, 211, 219, 1)',
  },
  themes: {
    newspaper: 'rgba(245, 239, 230, 1)',
    daylight: 'rgba(214, 211, 219, 1)',
    strawberry: 'rgba(255, 215, 216, 1)',
    midnight: 'rgba(44, 44, 46, 1)',
  }
};

export let theme = createMuiTheme({
  shadows: Array(25).fill("none"),
  palette: {
    primary: {
      main: palette.solids.black,
      light: palette.solids.white,
      dark: palette.solids.black,
    },
    secondary: {
      main: palette.themes['newspaper'],
    },
  },
  typography: {
    h1: {
      fontFamily: 'Playfair Display',
      margin: '10px 0px',
    },
    h2: {
      fontSize: 24,
      fontFamily: 'Playfair Display',
    },
    body1: {
      fontSize: '14px',
      fontFamily: 'Heebo',
    },
    body2: {
      fontSize: 'max(1.1vw, 14px)',
      fontFamily: 'Heebo',
      marginLeft: '10px',
      lineHeight: 1.3,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tablet: 640,
      top: '30vh',
      bottom: '20vh',
    }
  },
});

export function changeSecondary(newTheme) {
  const color = palette.themes[newTheme];
  const style = document.querySelector(':root');
  theme.palette.secondary.main = color;
  style.style.setProperty('--secondary', color);

  switch (newTheme) {
    case 'midnight':
      theme.palette.primary.main = palette.solids.white;
      document.body.style.backgroundImage = 'none';
      style.style.setProperty('--primary', palette.solids.white);
      break;
    case 'daylight':
      theme.palette.primary.main = palette.solids.black;
      style.style.setProperty('--primary', palette.solids.black);
      document.body.style.backgroundImage = `url("${gradient}")`;
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.backgroundSize = 'cover';
      break;
    case 'strawberry':
      theme.palette.primary.main = palette.solids.black;
      document.body.style.backgroundImage = 'none';
      style.style.setProperty('--primary', palette.solids.black);
      break;
    default:
      theme.palette.primary.main = palette.solids.black;
      document.body.style.backgroundImage = 'none';
      style.style.setProperty('--primary', palette.solids.black);
  }
}
