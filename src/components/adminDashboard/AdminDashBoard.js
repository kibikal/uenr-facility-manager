import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
export const AdminDashBoard = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <Box>
      <Stack direction="row">
          <Sidebar
            onClick={() => {
              setOpenMenu(false);
            }}
            openMenu ={openMenu}
            setOpenMenu ={setOpenMenu}
          /> 
        <Content openMenu={openMenu}/>
       
      </Stack>
    </Box>
  );
};
