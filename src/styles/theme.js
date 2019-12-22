import { createMuiTheme } from '@material-ui/core/styles';
import { lighten } from 'material-ui/utils/colorManipulator';

export const theme = createMuiTheme({
  type: 'dark',
  palette: {
    primary: {
      light: '#FE4585',
      main: '#FB1565',
      dark: '#E5125C',
      contrastText: '#070707'
    },
    secondary: {
      light: '#ED9547',
      main: '#ED8428',
      dark: '#EF7912',
      contrastText: '#070707'
    },

    textColor: '#E0E0E0',
    backgroundColor: '#070707'
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Didact Gothic', sans-serif",

    // THE BASE FONT SIZE IN HTML HAS TO BE SET TO 16px

    h1: {
      fontSize: '4rem',
      fontWeight: '400',
      lineHeight: '1.25',
      fontFamily: "'Exo 2', sans-serif"
    },
    h2: {
      fontSize: '3rem',
      fontWeight: '600',
      lineHeight: '1.25',
      fontFamily: "'Exo 2', sans-serif"
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: '600',
      lineHeight: '1.25',
      fontFamily: "'Exo 2', sans-serif"
    },
    h4: {
      fontSize: '2rem',
      fontWeight: '800',
      lineHeight: '1.25'
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '1.20',
      fontFamily: "'Exo 2', sans-serif"
    },
    h6: {
      fontSize: '1rem',
      fontWeight: '600',
      color: 'inherit',
      lineHeight: '1.20'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    body2: {
      fontSize: '1rem',
      fontWeight: '600',
      lineHeight: '1.5'
    },

    button: {
      fontSize: '1rem',
      fontWeight: '600',
      textTransform: 'none'
    },

    caption: {
      fontSize: '0.75rem',
      fontWeight: '600'
    },

    overline: {
      fontSize: '0.75rem',
      fontWeight: '400',
      textTransform: 'none'
    }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '& > $notchedOutline': {
          borderColor: lighten('#070707', 0.7),
          backgroundColor: lighten('#070707', 0.3),
          zIndex: '-1',
          color: 'white'
        },
        '& > .MuiInputBase-input': {
          color: '#FB1565'
        },
        ' MuiCardMedia-media': {
          height: '250px'
        }
      }
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiGrid: {
      root: {
        justifyContent: 'space-around'
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        '& > .MuiExpansionPanelSummary-content': {
          flexGrow: '0',
          display: 'inline'
        }
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        // '& > .MuiExpansionPanelDetails-content': {
        justifyContent: 'space-around',
        backgroundColor: '#070707'
      }
    }
  }
});
