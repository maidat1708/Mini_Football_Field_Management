import React from 'react'
import { Box, Button, TextField, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';


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


export default function CheckoutDetail() {
  const { id } = useLocation().state;
  const navigate = useNavigate();
  let tongSPThue = 0;
  const [cODetail, setcODetail] = useState(null)
  const [listSPCO, setListSPCO] = useState(null)
  const [stateDelete, setStateDelete] = useState(false)



  function formatDate(date,option) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
  
    const timeString = `${hours}:${minutes}`;
    const dateString = `${day}-${month}-${year}`;
    if(option === 1){
      return `${timeString} ${dateString}`;
    }
    return `${dateString}`;
  }

  const mapDaysToText = (day) => {
    const daysOfWeek = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy','Chủ nhật'];
    return daysOfWeek[day];
  }

  console.log(id)
  useEffect(() => {
    console.log("Check coDetail")
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getcheckoutdetail/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data san pham');
        }
        const jsonData = await response.json()
        console.log(jsonData)
        setcODetail(jsonData);
      } catch (error) {
        console.log(error);
      };
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("Check listSPCO")
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getsanphamcheckoutbyidcheckout/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data san pham');
        }
        const jsonData = await response.json()
        console.log(jsonData)
        setListSPCO(jsonData);
      } catch (error) {
        console.log(error);
      };
    }
    fetchData();
  }, [stateDelete]);
  //   console.log(listSPCO)
  const handleClickAddSB = (e) => {
    e.preventDefault()
    navigate("/addsanphamcheckout", { state: { idCheckOut: id, id: 0 ,sanPhamCheckOutDetail:null, listSPCOO : listSPCO} });
  }
  const handleClickEdit = async (sanPhamCheckOut) => {
    navigate("/addsanphamcheckout", { state: { idCheckOut: id, id: sanPhamCheckOut.id, sanPhamCheckOutDetail: sanPhamCheckOut ,listSPCOO:listSPCO} });
  }
  const handleClickDelete = async (sanPham) => {
    console.log(sanPham)
    setStateDelete(!stateDelete)
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanPham)
    };
    try {
      const res = await fetch('http://localhost:8080/deletesanphamcheckout', requestOptions);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.text();
      console.log(data)
      navigate('/checkoutdetail',{state: {id: id}})
    } catch (error) {
      console.log(error);
    }
  }
  const onPlayGia = (s) => {
    tongSPThue += s
  }
  const handleClickHuyCOD = (e) => {
    navigate("/dscheckout")
  }

  const handleClickXuatHoaDon = (e) => {
    navigate("/hoadondetail")
  }

  return (
    <>
      <h1 style={{ margin: 100 }}>Chi tiết Checkout</h1>
      <div style={{ display: 'flex' }}>
        {cODetail && (<div style={{ flex: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: -5 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Khách hàng:</h3>
            <TextField value={cODetail.tenKH} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Khách hàng:" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Số điện thoại</h3>
            <TextField value={cODetail.sdt} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Số điện thoại" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Sân bóng:</h3>
            <TextField value={cODetail.tenSan} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Sân bóng" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Ca:</h3>
            <TextField value={cODetail.ca} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Ca" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Thứ:</h3>
            <TextField value={mapDaysToText(cODetail.thu)} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Thứ" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Bắt đầu:</h3>
            <TextField value={formatDate(new Date(cODetail.ngayBatDau),1)} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Bắt đầu" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Kết thúc:</h3>
            <TextField value={formatDate(new Date(cODetail.ngayKetThuc),1)} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Kết thúc" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Ngày đặt sân:</h3>
            <TextField value={formatDate(new Date(cODetail.ngayDat),2)} id="outlined-basic" style={{ flex: 8, marginRight: 50 }} label="Ngày đặt sân" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', marginTop: 6 }}>
            <h3 style={{ flex: 3, marginLeft: 30 }}>Tổng:</h3>
            <Typography sx={{ flex: 8, fontSize: 20, textAlign: 'center', marginRight: 20, marginTop: 0.5 }}>{(cODetail.gia * 2).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</Typography>
          </Box>
        </div>)}
        <div style={{ flex: 6, marginTop: -100 }}>
          <Box>
            <br /><br />
            <h1>Danh sách sản phẩm thuê</h1>
            <br /><br />
            <Button onClick={(e) => handleClickAddSB(e)} sx={{ backgroundColor: '#76ff03', width: 200, height: 60, color: 'black', fontWeight: 'bold', marginTop: -4 }}>Thêm sản phẩm thuê</Button>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell sx={{ width: 150 }}>Mã sản phẩm</StyledTableCell>
                    <StyledTableCell align="right">Tên sản phẩm</StyledTableCell>
                    <StyledTableCell align="right">Số lượng (/Đơn vị tính)</StyledTableCell>
                    <StyledTableCell align="right">Tổng tiền</StyledTableCell>
                    <StyledTableCell sx={{ width: 160 }}></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listSPCO && listSPCO.map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.tenSP}</StyledTableCell>
                      <StyledTableCell align="right">{row.soLuong}</StyledTableCell>
                      <StyledTableCell onPlay={onPlayGia(row.soLuong * row.gia)} align="right">{(row.soLuong * row.gia).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</StyledTableCell>
                      <StyledTableCell>
                        <IconButton onClick={() => handleClickEdit(row)} sx={{ backgroundColor: '#76ff03', marginRight: 5 }}>
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
            <br />
            <Pagination sx={{ display: 'flex', justifyContent: 'center' }} count={10} variant="outlined" shape="rounded" />
            <Box sx={{ display: 'flex', marginTop: 6 }}>
              <h3 style={{ flex: 4, marginLeft: 250 }}>Tổng:</h3>
              <Typography sx={{ flex: 7, fontSize: 22, alignItems: 'center', textAlign: 'center', marginRight: -5, marginTop: 0.5 }}>{tongSPThue.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</Typography>
            </Box>
          </Box>
        </div>
      </div>
      <div style={{ alignContent: 'center', textAlign: 'center', marginTop: 10 }}>-------------------------------------------------------------------------------------------------------------------</div>
      {cODetail && (<Box sx={{ display: 'flex', marginTop: 6 }}>
        <h3 style={{ flex: 5, textAlign: 'end' }}>Tổng:</h3>
        <Typography sx={{ flex: 5, fontSize: 22, alignItems: 'center', textAlign: 'start', marginLeft: 10, marginTop: 0.5 }}>{(tongSPThue + cODetail.gia * 2).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</Typography>
      </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: 5 }}>
        <Button onClick={(e) => handleClickHuyCOD(e)} sx={{ width: 120 }} variant="contained" color="error">
          Quay lại
        </Button>
        <Button onClick={(e) => handleClickXuatHoaDon(e)} sx={{ width: 120 }} variant="contained" color="success">
          Xuất Hóa Đơn
        </Button>
      </Box>
    </>
  )
}
