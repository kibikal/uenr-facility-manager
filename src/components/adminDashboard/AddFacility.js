import { Add, Image } from "@mui/icons-material";
import {
  Button,
  Container,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import React from "react";

export const AddFacility = () => {
  return (
    <Container sx={{ width: "100%" }}>
      <form style={{ flex: "1" }}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            textAlign: "left",
            color: "#555",
            margin: "10px 0 10px 55px",
          }}
          variant="h5"
        >
          New Facility
        </Typography>

        <Stack direction="row" spacing={2}>
          <Stack
            sx={{ justifyContent: "center", alignItems: "center" }}
            flex={0.5}
            direction="column"
            spacing={5}
          >
            <TextField
              sx={{ color: "secondary", width: "80%" }}
              InputProps={{
                style: {
                  "&.MuiFocused": {
                    borderColor: "secondary.main",
                  },
                },
              }}
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
              required
            />

            <Divider/>

            <TextField
              sx={{ color: "secondary", width: "80%" }}
              InputProps={{
                style: {
                  "&.MuiFocused": {
                    borderColor: "secondary.main",
                  },
                },
              }}
              label="Location"
              variant="outlined"
              size="small"
              required
            />

            <Box width="80%" textAlign="center">
              <InputLabel sx={{ textAlign: "left" }} id="select-block">
                Block
              </InputLabel>
              <Select
                labelId="select-block"
                value="sh"
                placeholder="Select Block"
                sx={{ width: "100%" }}
                size="small"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="app-lab">App Lab</MenuItem>
                <MenuItem value="sh">Syndicate Hall(SH)</MenuItem>
                <MenuItem value="pav">Pavilion</MenuItem>
              </Select>
            </Box>
            <TextField
              sx={{ color: "secondary", width: "80%" }}
              InputProps={{
                style: {
                  "&.MuiFocused": {
                    borderColor: "secondary.main",
                  },
                },
              }}
              type="number"
              label="Latitude"
              variant="outlined"
              size="small"
              required
            />

            <TextField
              sx={{ color: "secondary", width: "80%" }}
              type="number"
              InputProps={{
                style: {
                  "&.MuiFocused": {
                    borderColor: "secondary.main",
                  },
                },
              }}
              label="Longitude"
              variant="outlined"
              size="small"
              required
            />
          </Stack>

          <Stack flex={0.5} direction="column" spacing={5}>
            <TextField
              sx={{ outline: "none", border: "none", display: "none" }}
              size="small"
              labelid="upload-image"
              type="file"
              inputProps={{
                accept: "image/*",
                multiple: true,
              }}
              helperText="Upload multiple images(jpg is preferred)"
              required
            />

            <InputLabel
              id="upload-image"
              sx={{ border: "1px dotted secondary" }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="div"
              >
                <Image sx={{ fontSize: "3rem" }} />
              </IconButton>
            </InputLabel>

            <TextField
              multiline
              type="text"
              rows={4}
              variant="outlined"
              helperText="Leave a comprehensive description of the facility here"
              label="Description"
            />

            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "#fff",
                width: "30%",
                borderRadius: "25px",
              }}
              startIcon={<Add />}
              type="submit"
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};
