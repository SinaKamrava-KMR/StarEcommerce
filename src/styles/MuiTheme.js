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
    },
    content: {
      fontSize: 15,
      "fontWeight": 600,
    },
    content_li: {
      fontSize: 14,
      "fontWeight": 500,
      
    },
    sub_content: {
      fontSize: 13,
      "fontWeight": 400,
      color: "#999",
      

    }
  }
  
});

export default theme;
