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

export default function TableSanBong() {
  const navigate = useNavigate();
  const [listSB, setListSB] = useState(null)
  const [stateDelete,setStateDelete] = useState(false)

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/sanbongs');
                if (!response.ok) {
                throw new Error('Failed to fetch data san bong');
                }
                const jsonData = await response.json()
                // console.log(jsonData)
                setListSB(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
      }, [stateDelete]);
      // console.log(listSB)
  const handleClickAddSB = (e) =>{
    e.preventDefault()
    // console.log("check click AddSB")
    navigate("/addsanbong",{state: {id:0}});
  }
  const handleClickEdit = async(sanPham) => {
    // console.log("check click UpdateSB")
    navigate("/addsanbong",{state: {id:sanPham.id}});
  }
  const handleClickDelete = async (sanBong) => {
    // console.log(sanBong)
    setStateDelete(!stateDelete)
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanBong)
    };
    try {
      const res = await fetch('http://localhost:8080/deletesanbong', requestOptions);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.text();
      console.log(data)
      navigate('/dssanbong')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <br/><br/>
      <h1>Danh sách sân bóng</h1>
      <br/><br/>
      <Button onClick = {(e) => handleClickAddSB(e)} sx={{backgroundColor:'#76ff03', width: 200 , height: 60, color:'black',fontWeight:'bold'} }>Thêm sân bóng</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{width: 200}}>Mã sân bóng</StyledTableCell>
              <StyledTableCell align="right">Tên sân bóng</StyledTableCell>
              <StyledTableCell align="right">Giá thuê (đ/giờ)</StyledTableCell>
              <StyledTableCell sx={{width: 400}}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listSB && listSB.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell  component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.ten}</StyledTableCell>
                <StyledTableCell align="right">{row.gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</StyledTableCell>
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
