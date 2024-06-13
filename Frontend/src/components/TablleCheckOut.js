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
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box,Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import {useNavigate} from "react-router-dom";
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

export default function TableCheckOut() {
  const navigate = useNavigate();
  const [listCO, setListCO] = useState(null)
  const [stateDelete,setStateDelete] = useState(false)

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/checkouts');
                if (!response.ok) {
                throw new Error('Failed to fetch data san bong');
                }
                const jsonData = await response.json()
                // console.log(jsonData)
                setListCO(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
      }, [stateDelete]);
      // console.log(listCO)
  const handleClickEdit = async(checkOut) => {
    // console.log("check click UpdateCO")
    navigate("/checkoutdetail",{state: {id:checkOut.id}});
  }
  const handleClickDelete = async (checkOut) => {
    // console.log(checkOut)
    setStateDelete(!stateDelete)
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(checkOut)
    };
    try {
      const res = await fetch('http://localhost:8080/deletecheckout', requestOptions);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.text();
      console.log(data)
      navigate('/dscheckout')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <br/><br/>
      <h1>Danh sách Checkout</h1>
      <br/><br/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{width: 200}}>Mã Checkout</StyledTableCell>
              <StyledTableCell align="right">Mã phiếu đặt</StyledTableCell>
              {/* <StyledTableCell align="right">Trạng thái thanh toán</StyledTableCell> */}
              <StyledTableCell sx={{width: 400}}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCO && listCO.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell  component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.idPD}</StyledTableCell>
                {/* {row.state === 1 ? (<StyledTableCell align="right">Đã thanh toán</StyledTableCell>): 
                (<StyledTableCell align="right">Chưa thanh toán</StyledTableCell>)} */}
                <StyledTableCell>
                  <IconButton onClick={() => handleClickEdit(row)} sx={{ backgroundColor: '#76ff03', marginRight: 10 }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickDelete(row)} sx={{ backgroundColor: '#ff1744' }}>
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
