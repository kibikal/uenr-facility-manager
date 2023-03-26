import {
  AddHomeWork,
  AdminPanelSettings,
  Campaign,
  CheckCircle,
  Home,
  KeyboardDoubleArrowLeft,
  Logout,
  Menu,
} from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import uenrLogo from "../../assets/uenr-logo.png";
import { Box } from "@mui/system";
import React from "react";

const Logo = styled("img")({
  width: "90%",
});

export const Sidebar = (props) => {
  const StyledListItemText = styled(ListItemText)({
    color: "#555",
  });

  return props.openMenu ? (
    <Box
      flex={0.1}
      p={0}
      bgcolor="primary.light"
      color="secondary"
      minHeight="100vh"
      display={props.openMenu ? "block" : "none"}
      sx={{ transition: "display 2s" }}
    >
      <Stack direction="column" p="0,2" spacing={2}>
        <Logo src={uenrLogo} alt="uenr-logo" />
        <Typography variant="h6" sx={{ fontWeight: "700", color: "#fff" }}>
          Facility Manager
        </Typography>
      </Stack>

      <List sx={{ height: "80vh", display: "flex", flexDirection: "column" }}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AdminPanelSettings sx={{ color: "secondary.main" }} />
            </ListItemIcon>
            <StyledListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home sx={{ color: "secondary.main" }} />
            </ListItemIcon>
            <StyledListItemText primary="Facilities" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AddHomeWork sx={{ color: "secondary.main" }} />
            </ListItemIcon>
            <StyledListItemText primary="Add Facility" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Campaign sx={{ color: "secondary.main" }} />
            </ListItemIcon>
            <StyledListItemText primary="Announcements" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <CheckCircle sx={{ color: "secondary.main" }} />
            </ListItemIcon>
            <StyledListItemText primary="Approve Facilities" />
          </ListItemButton>
        </ListItem>

        <IconButton
          sx={{ width: "100%", borderRadius: "0", marginTop: "10px" }}
          onClick={props.onClick}
        >
          <KeyboardDoubleArrowLeft />
          <Typography>Close Menu</Typography>
        </IconButton>

        <Stack
          direction="row"
          spacing={2}
          margin="20px 0"
          sx={{
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.08)",
              cursor: "pointer",
            },
            padding: "5px 0",
          }}
        >
          <Avatar
            sx={{ marginLeft: "5px" }}
            alt="user-profile"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />

          <Stack
            direction="column"
            sx={{ padding: "0 5px", textAlign: "left" }}
          >
            <Typography color="#fff">Kibikal Nimoak</Typography>
            <Typography variant="body2" fontWeight={100} color="#555">
              view profile
            </Typography>
          </Stack>
        </Stack>

        <ListItem disablePadding sx={{ marginTop: "auto" }}>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Logout sx={{ color: "error.main" }} />
            </ListItemIcon>
            <StyledListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  ) : (
    <Box
      onClick={() => {
        props.setOpenMenu(true);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 10px 0px 5px",
      }}
      bgcolor="secondary.main"
    >
      <Menu sx={{ color: "#fff", fontSize: "2rem" }} />
    </Box>
  );
};
