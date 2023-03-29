import { AddHome, Edit } from "@mui/icons-material";

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  styled,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import hostel from "../../assets/hostel.jpg";
import React from "react";

const columns = [
  { id: "name", label: "Name", minWidth: 170, align: "center" },
  { id: "location", label: "Location", minWidth: 100, align: "center" },
  {
    id: "coordinates",
    label: "Coordinates",
    minWidth: 170,
    align: "center",
  },
  {
    id: "photo",
    label: "Photo",
    minWidth: 170,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    maxWidth: 100,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    maxWidth: "100",
    align: "center",
  },
];

function createData(name, location, coordinates, photo, status, action) {
  return { name, location, coordinates, photo, status, action };
}

const FacilityThumbnail = styled("img")({
  width: "100px",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
});

const rows = [
  createData(
    "LT1",
    "School of Sciences",
    "140350, 4546",
    <FacilityThumbnail src={hostel} alt="logo" />,
    "free",
    <Edit />
  ),
  createData(
    "LT1",
    "School of Sciences",
    "140350, 4546",
    <FacilityThumbnail src={hostel} alt="logo" />,
    "free",
    <Edit />
  ),
  createData(
    "LT1",
    "School of Sciences",
    "140350, 4546",
    <FacilityThumbnail src={hostel} alt="logo" />,
    "free",
    <Edit />
  ),
  createData(
    "LT1",
    "School of Sciences",
    "140350, 4546",
    <FacilityThumbnail src={hostel} alt="logo" />,
    "free",
    <Edit />
  ),
  createData(
    "LT1",
    "School of Sciences",
    "140350, 4546",
    <FacilityThumbnail src={hostel} alt="logo" />,
    "free",
    <Edit />
  ),
  createData(
    "LT1",
    "School of Sciences",
    "140350, 4546",
    <FacilityThumbnail src={hostel} alt="logo" />,
    "free",
    <Edit />
  ),
  createData(
    "LT1",
    "School of Sciences",
    "140350, 4546",
    <FacilityThumbnail src={hostel} alt="logo" />,
    "free",
    <Edit />
  ),
];

export const Facilities = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: "600",
          textAlign: "center",
          padding: "5px 0",
        }}
        variant="h5"
      >
        All facilities
      </Typography>
      <Button
        sx={{ color: "#fff", margin: "5px 0", borderRadius: "25px" }}
        size="medium"
        startIcon={<AddHome />}
        variant="contained"
      >
        Add new
      </Button>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
