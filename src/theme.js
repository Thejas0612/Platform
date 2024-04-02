import { createTheme } from "@mui/material/styles";
import { checkboxClasses } from "@mui/material/Checkbox";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00805a",
      dark: "#00573d"
    },
    secondary: {
      main: "#f3f3f3"
    }
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`&.${checkboxClasses.checked}`]: {
            color: theme.palette.primary.dark
          }
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 14,
          fontWeight: "bold"
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 18
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          minWidth: 140,
          backgroundColor: theme.palette.secondary.main,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: ownerState.required && theme.palette.primary.main,
            borderRadius: 0
          }
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          "& fieldset": {
            borderRadius: 0
          }
        })
      }
    }
  }
});

export default theme;
