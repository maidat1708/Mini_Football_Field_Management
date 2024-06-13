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
import BackupIcon from '@mui/icons-material/Backup';
import Pagination from '@mui/material/Pagination';
import {useLocation, useNavigate,useParams} from "react-router-dom";
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

export default function TablePhieuDatDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {tenKH,tenSB} = useLocation().state
  const [search, setSearch] = useState("")
  const [listPDDetail, setListPDDetail] = useState(null)
  const [stateDelete,setStateDelete] = useState(false)

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

  const checkDate = (date) => {
    const currentDate = new Date();

    if (date > currentDate) {
      return false;
    } else if (date < currentDate) {
      return true;
    } else {
      return true;
    }
  }
  const mapDaysToText = (day) => {
    const daysOfWeek = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy','Chủ nhật'];
    return daysOfWeek[day];
  }

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/getphieudatdetailbyid/${id}`);
                if (!response.ok) {
                throw new Error('Failed to fetch data san bong');
                }
                const jsonData = await response.json()
                // console.log(jsonData)
                setListPDDetail(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
      }, [stateDelete]);
      // console.log(listPDDetail)
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
            setListPDDetail(jsonData);
        } catch (error) {
            console.log(error);
        };
    }
    fetchData();
  }
  const handleClickEdit = async(phieuDat) => {
    // console.log("check click UpdatePD")
    navigate("/addphieudat",{state: {id:phieuDat.id}});
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
        navigate('/dscheckout')
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
              <StyledTableCell align="right">Bắt đầu</StyledTableCell>
              <StyledTableCell align="right">Kết thúc</StyledTableCell>
              <StyledTableCell align="right">Ngày đặt</StyledTableCell>
              <StyledTableCell sx={{width: 350}}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listPDDetail && listPDDetail.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell  component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{tenKH}</StyledTableCell>
                <StyledTableCell align="right">{tenSB}</StyledTableCell>
                <StyledTableCell align="right">
                {row.ca && row.ca}
                </StyledTableCell>
                <StyledTableCell align="right">
                {row.thu != null && mapDaysToText(row.thu)}
                </StyledTableCell>
                <StyledTableCell align="right">{formatDate(new Date(row.batDau),1)}{checkDate((new Date(row.batDau)))}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(new Date(row.ketThuc),1)}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(new Date(row.ngayDat),2)}</StyledTableCell>
                {(checkDate(new Date(row.batDau)))?
                (<StyledTableCell >
                  <IconButton onClick={() => handleClickEdit(row)} sx={{ backgroundColor: '#76ff03', marginRight: 10 }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickDelete(row)} sx={{ backgroundColor: '#ff1744', marginRight: 10}}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickSubmit(row)} sx={{ backgroundColor: '#2196f3',}}>
                    <BackupIcon />
                  </IconButton>
                </StyledTableCell>
                ):(<StyledTableCell ></StyledTableCell>)}
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
