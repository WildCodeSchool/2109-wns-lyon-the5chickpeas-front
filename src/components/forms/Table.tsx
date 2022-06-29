import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { ProjectType } from "../ProjectsTable";

export default function TableList({
  data,
  titles,
  onClickClear,
}: {
  data: ProjectType[];
  titles: { title: string }[];
  onClickClear: (e: any) => void;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>{titles[0].title}</TableCell>
            <TableCell align='right'>{titles[1].title}</TableCell>
            <TableCell align='right'>{titles[2].title}</TableCell>
            <TableCell align='right'>{titles[3].title}</TableCell>
            <TableCell align='right'>{titles[4].title}</TableCell>
            <TableCell align='center' colSpan={2}>
              {titles[5].title}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((project: ProjectType) => (
            <TableRow
              key={project.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {project.name}
              </TableCell>
              <TableCell align='right'>{project.status_id}</TableCell>
              <TableCell align='right'>{project.due_date}</TableCell>
              <TableCell align='right'>{project.description}</TableCell>
              <TableCell align='right'>
                {project.inititial_time_estimee}
              </TableCell>
              <TableCell>
                <ClearIcon onClick={() => onClickClear(project.id)} />
              </TableCell>
              {/* <TableCell>
                <EditIcon onClick={() => onClickEdit()} />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
