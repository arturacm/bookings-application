import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#41caa1",
    },
    secondary: {
      main: "#38349c",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
