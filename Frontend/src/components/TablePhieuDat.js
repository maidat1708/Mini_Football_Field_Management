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
import BackupIcon from '@mui/icons-material/Backup';
import Pagination from '@mui/material/Pagination';
import {useNavigate} from "react-router-dom";
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';

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

export default function TablePhieuDat() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [listPD, setListPD] = useState(null)
  const [stateDelete,setStateDelete] = useState(false)

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const mapDaysToText = (daysList) => {
    const daysOfWeek = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy','Chủ nhật'];
    return daysList.map(dayNumber => daysOfWeek[dayNumber]).join(', ');
  }

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/phieudats');
                if (!response.ok) {
                throw new Error('Failed to fetch data san bong');
                }
                const jsonData = await response.json()
                // console.log(jsonData)
                setListPD(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
      }, [stateDelete]);
      // console.log(listPD)
  const handleClickAddPD = (e) =>{
    e.preventDefault()
    // console.log("check click AddPD")
    navigate("/addphieudat",{state: {id:0}});
  }
  const handelOnChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleClickSearchPD = () => {
      const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/getphieudatbytenKH/'+search);
            if (!response.ok) {
            throw new Error('Failed to fetch data san bong');
            }
            const jsonData = await response.json()
            // console.log(jsonData)
            setListPD(jsonData);
        } catch (error) {
            console.log(error);
        };
    }
    fetchData();
  }
  const handleClickEdit = async(phieuDat) => {
    // console.log("check click UpdatePD")
    navigate(`/dsdhieudatdetail/${phieuDat.id}`,  {state: {tenKH: phieuDat.tenKH, tenSB: phieuDat.tenSan}});
  }

  const handleClickDelete = async (phieuDat) => {
    // console.log(phieuDat)
    setStateDelete(!stateDelete)
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(phieuDat)
    };
    try {
      const res = await fetch('http://localhost:8080/deletephieudat', requestOptions);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.text();
      console.log(data)
      navigate('/dsphieudat')
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickSubmit = async(phieuDat) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id:0,
          idPD: phieuDat.id
        })
    };

    try {
        const res = await fetch(`http://localhost:8080/addcheckout`, requestOptions);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.text();
        console.log(data)
        navigate('/checkoutdetail', {state: {id:phieuDat.id+42}})
        console.log(2)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <Box>
      <br/><br/>
      <h1>Danh sách phiếu đặt sân</h1>
      <br/><br/>
      <Box sx={{display: 'flex' , justifyContent:'space-between'}}>
        <Button onClick = {(e) => handleClickAddPD(e)} sx={{backgroundColor:'#76ff03', width: 200 , height: 60, color:'black',fontWeight:'bold'} }>Thêm phiếu đặt sân</Button>
        <Box>
          <TextField id="outlined-basic" onChange={handelOnChangeSearch} sx={{alignItems:'right', width: 400 , height: 60}} label="Tên khách hàng" variant="outlined" />
          <Button onClick = {() => handleClickSearchPD()} sx={{backgroundColor:'#76ff03', width: 200 , height: 60, color:'black',fontWeight:'bold'} }>Tìm kiếm</Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{width: 100}}>Mã phiếu đặt</StyledTableCell>
              <StyledTableCell align="right">Tên khách hàng</StyledTableCell>
              <StyledTableCell align="right">Sân bóng</StyledTableCell>
              <StyledTableCell align="right">Ca</StyledTableCell>
              <StyledTableCell align="right">Thứ</StyledTableCell>
              <StyledTableCell align="right">Ngày bắt đầu</StyledTableCell>
              <StyledTableCell align="right">Ngày kết thúc</StyledTableCell>
              <StyledTableCell align="right">Ngày đặt</StyledTableCell>
              <StyledTableCell sx={{width: 350}}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listPD && listPD.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell  component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.tenKH}</StyledTableCell>
                <StyledTableCell align="right">{row.tenSan}</StyledTableCell>
                <StyledTableCell align="right">
                {row.ca && row.ca.join(', ')}
                </StyledTableCell>
                <StyledTableCell align="right">
                {row.thu && mapDaysToText(row.thu)}
                </StyledTableCell>
                <StyledTableCell align="right">{formatDate(new Date(row.ngayBatDau))}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(new Date(row.ngayKetThuc))}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(new Date(row.ngayDat))}</StyledTableCell>
                <StyledTableCell>
                  <IconButton onClick={() => handleClickEdit(row)} sx={{ backgroundColor: '#76ff03', marginRight: 10 }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickDelete(row)} sx={{ backgroundColor: '#ff1744', marginRight: 10}}>
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
