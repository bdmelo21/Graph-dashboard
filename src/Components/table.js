import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "day", label: "Day", minWidth: 170 },
  { id: "accepted", label: "Accepted", minWidth: 170, align: "left" },
  { id: "declined", label: "Declined", minWidth: 170, align: "left" },
];

function createData(day, accepted, declined) {
  return { day, accepted, declined };
}

const rows = [
  createData("2020-07-21", 380, 40),
  createData("2020-07-22", 70, 20),
  createData("2020-07-23", 50, 10),
  createData("2020-07-24", 50, 30),
  createData("2020-07-25", 60, 90),
  createData("2020-07-26", 10, 50),
  createData("2020-07-27", 30, 40),
  createData("2020-07-28", 40, 20),
];

const useStyles = makeStyles({
  root: {
    width: "95%",
    marginLeft: "30px",
    marginTop: "50px",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className="buttons-search">
        <div className="buttons-table">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<FileCopyIcon />}
          >
            Copy
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<EqualizerIcon />}
          >
            Excel
          </Button>
        </div>
        <div className="search-bar">
          <form>
            <TextField
              id="outlined-secondary"
              label="Search"
              variant="outlined"
              color="indigo"
            />
          </form>
        </div>
      </div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
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
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
