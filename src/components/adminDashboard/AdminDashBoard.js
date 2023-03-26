import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
export const AdminDashBoard = () => {
  return (
    <Box>
        <Stack direction="row">
            <Sidebar />
            <Content/>
        </Stack>
    </Box>
  );
};
