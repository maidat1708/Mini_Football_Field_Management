import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { Button } from '@mui/material';
import { Box,Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import { useState,useEffect } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00FFFF',
    color: theme.palette.common.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    border: '1px solid black'
  },
  [`&.${tableCellClasses.body}`]: {
    textAlign: 'center',
    fontSize: 16,
    border: '1px solid black'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: '1px solid black',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableKhachHang() {
  
  const [listKH, setListKH] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/khachhangs');
            if (!response.ok) {
            throw new Error('Failed to fetch data san bong');
            }
            const jsonData = await response.json()
            // console.log(jsonData)
            setListKH(jsonData);
        } catch (error) {
            console.log(error);
        };
    }
    fetchData();
  }, []);
  return (
    <Box>
      <br/><br/>
      <h1>Danh sách khách hàng</h1>
      <br/><br/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{width: 200}}>Mã khách hàng</StyledTableCell>
              <StyledTableCell align="right">Tên khách hàng</StyledTableCell>
              <StyledTableCell align="right">Số điện thoại</StyledTableCell>
              <StyledTableCell sx={{width: 400}}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listKH && listKH.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell  component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.ten}</StyledTableCell>
                <StyledTableCell align="right">{row.sdt}</StyledTableCell>
                <StyledTableCell>
                  <IconButton sx={{ backgroundColor: '#76ff03', marginRight: 10 }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: '#ff1744' }}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <Pagination sx={{display:'flex', justifyContent:'center'}} count={10} variant="outlined" shape="rounded" />
    </Box>
  );
}
