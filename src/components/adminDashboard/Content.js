import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

export const Content = (props) => {

  const handleClick = ()=>{}

   const breadcrumbs = [
     <Link
       underline="hover"
       key="1"
       color="#fff"
       href="/"
       onClick={handleClick}
     >
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
  return (
    <Box flex={ props.openMenu ? 0.9 : 1}>
      <Stack direction="column">
        <Breadcrumbs
          separator={<NavigateNext fontSize="medium" color="primary" />}
          aria-label="breadcrumb"
          sx={{
            backgroundColor: "secondary.main",
            width: "100%",
            padding: "5px 10px",
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>

        <Stack direction="row">

        </Stack>
      </Stack>
    </Box>
  );
}
