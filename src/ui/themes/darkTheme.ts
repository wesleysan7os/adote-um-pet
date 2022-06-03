import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#C74B50",
    },
    secondary: {
      main: "#AE0FEA",
    },
    text: {
      primary: "#FFF",
      secondary: "#C996CC",
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shape: {
    borderRadius: "3px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          fontWeight: "normal",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          required: false,
        },
        required: true,
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "1px solid #D8D8D8",
        },
      },
    },
  },
});
