import {
  AccountCircle,
  Campaign,
  CheckCircle,
  Dashboard,
  Home,
  KeyboardDoubleArrowLeft,
  Logout,
  Menu,
  PendingActions,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
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

import { Box } from "@mui/system";
import React from "react";


export const Sidebar = (props) => {
  const StyledListItemText = styled(ListItemText)({
    color: "#F6F9F9F6",
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
        <Divider />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "0 5px",
          }}
        >
          <Dashboard />
          Dashboard
        </Typography>
      </Stack>

      <List sx={{ height: "80vh", display: "flex", flexDirection: "column" }}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AccountCircle sx={{ color: "#F6F9F9F6" }} />
            </ListItemIcon>
            <StyledListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home sx={{ color: "#F6F9F9F6" }} />
            </ListItemIcon>
            <StyledListItemText primary="Facilities" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <CheckCircle sx={{ color: "#F6F9F9F6" }} />
            </ListItemIcon>
            <StyledListItemText primary="Approve Facilities" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <PendingActions sx={{ color: "#F6F9F9F6" }} />
            </ListItemIcon>
            <StyledListItemText primary="Schedules" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Campaign sx={{ color: "#F6F9F9F6" }} />
            </ListItemIcon>
            <StyledListItemText primary="Announcements" />
          </ListItemButton>
        </ListItem>

        <IconButton
          sx={{
            width: "100%",
            borderRadius: "0",
            marginTop: "10px",
            color: "#F6F9F9F6",
          }}
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
            <Typography variant="body2" fontWeight={100} color="#F6F9F9F6">
              view profile...
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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 10px 0px 5px",
        height: "100vh",
      }}
      bgcolor="primary.main"
    >
      <Menu
        onClick={() => {
          props.setOpenMenu(true);
        }}
        sx={{ color: "#fff", cursor: "pointer", fontSize: "2.3rem" }}
      />
    </Box>
  );
};
