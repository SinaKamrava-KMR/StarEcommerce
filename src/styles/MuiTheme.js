import { createTheme } from "@material-ui/core";

const theme = createTheme({
  direction: 'rtl',
  status: {
    secondary: "#f3f4f6",
    primary: '#223',
    danger: "#4faa99",
  },

  typography: {
    DashboardTitle: {
      fontSize: 24,
      "fontWeight": 600,
    }
  }
  
});

export default theme;
