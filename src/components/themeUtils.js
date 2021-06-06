import { createMuiTheme } from '@material-ui/core/styles';
import gradient from '../assets/gradient.gif';

export const palette = {
  solids: {
    black: 'rgba(0, 0, 0, 1)',
    white: 'rgba(214, 211, 219, 1)',
    gray: 'rgba(107, 71, 79, 1)',
  },
  themes: {
    newspaper: 'rgba(245, 239, 230, 1)',
    daylight: 'rgba(214, 211, 219, 1)',
    strawberry: 'rgba(255, 215, 216, 1)',
    midnight: 'rgba(44, 44, 46, 1)',
  },
  gradients: {
    midnight: 'linear-gradient(to right, #fc5c7d, #6a82fb)',
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
    subtitle1: {
      fontSize: 'max(1.2vw, 14px)',
      fontFamily: 'Playfair Display',
      opacity: 0.5,
    },
    subtitle2: {
      fontSize: 'max(0.8vw, 11px)',
      fontFamily: 'Heebo',
      opacity: 0.5,
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
      smallWidth: '55vw',
      largeWidth: '80vw',
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
      document.body.style.backgroundImage = `url("${gradient}")`;
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.backgroundSize = 'cover';
      style.style.setProperty('--primary', palette.solids.black);
      break;
    case 'strawberry':
      theme.palette.primary.main = palette.solids.gray;
      document.body.style.backgroundImage = 'none';
      style.style.setProperty('--primary', palette.solids.gray);
      break;
    default:
      theme.palette.primary.main = palette.solids.black;
      document.body.style.backgroundImage = 'none';
      style.style.setProperty('--primary', palette.solids.black);
  }
}
