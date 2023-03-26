import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { AdminDashBoard } from "./components/adminDashboard/AdminDashBoard";
import theme from "./themes/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{overflowX:"hidden"}}>
        <AdminDashBoard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
