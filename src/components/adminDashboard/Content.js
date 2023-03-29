
import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link,styled, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AddFacility } from "./AddFacility";
import uenrLogo from "../../assets/uenr-logo.png";
// import { Facilities } from "./Facilities";

export const Content = (props) => {
  const handleClick = () => {};

  const breadcrumbs = [
    <Link underline="hover" key="1" color="#fff" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#fff"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Facilities
    </Link>,
    <Typography key="3" color="#fff">
      All
    </Typography>,
  ];

  const Logo = styled("img")({
    width: "20%",
  });

  return (
    <Box flex={props.openMenu ? 0.9 : 1}>
      <Stack direction="column">
        <Logo src={uenrLogo} alt="uenr-logo" />

        <Breadcrumbs
          separator={<NavigateNext fontSize="medium" color="secondary" />}
          aria-label="breadcrumb"
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            padding: "5px 10px",
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>

        <Stack direction="row">
          <Box sx={{ width: "100%", padding: "0 20px" }}>
            {/* <Facilities/> */}
            <AddFacility />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
