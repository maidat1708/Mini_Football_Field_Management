import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton } from '@mui/material';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { TextField } from "@mui/material";

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



export default function ThongKeSanBong() {

    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [requestTime, setRequetTime] = useState({
        tuNgay:"",
        toiNgay:""
    });
    const [listTKSB, setListTKSB] = useState(null);
    const handleDateChange1 = (newDate) => {
        setSelectedDate1(newDate);
        console.log(newDate ? dayjs(newDate).format('YYYY-MM-DD HH:mm:ss') : '');
        setRequetTime({
            ...requestTime,
            tuNgay:dayjs(newDate).format('YYYY-MM-DD HH:mm:ss'),
        })
    };

    const handleDateChange2 = (newDate) => {
        setSelectedDate2(newDate);
        console.log(newDate ? dayjs(newDate).format('YYYY-MM-DD HH:mm:ss') : '');
        setRequetTime({
            ...requestTime,
            toiNgay: dayjs(newDate).format('YYYY-MM-DD HH:mm:ss')
        })
    };

    const handleClickThongKe = async(e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestTime)
        };

        try {
            const res = await fetch(`http://localhost:8080/thongkesanbong`, requestOptions);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setListTKSB(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    // useEffect(() =>{
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8080/checkouts');
    //             if (!response.ok) {
    //             throw new Error('Failed to fetch data san bong');
    //             }
    //             const jsonData = await response.json()
    //             // console.log(jsonData)
    //             setListCO(jsonData);
    //         } catch (error) {
    //             console.log(error);
    //         };
    //     }
    //     fetchData();
    // })
    return (
        <>
            <br /><br />
            <h1>Thống kê Sân bóng</h1>
            <br /><br />
            <Box style={{
                // width: 200,
                display: 'flex'
            }}>

                <Box style={{
                    // width: 200,
                    paddingRight: 20,
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Chọn ngày bắt đầu"
                            value={selectedDate1}
                            onChange={handleDateChange1}
                            renderInput={(params) => <TextField {...params} />} />
                    </LocalizationProvider>
                </Box>

                <Box style={{
                    // width: 200,
                    paddingRight: 20
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Chọn ngày kết thúc"
                            value={selectedDate2}
                            // minDate={selectedDate1.dayjs}
                            onChange={handleDateChange2}
                            renderInput={(params) => <TextField {...params} />} />
                    </LocalizationProvider>
                </Box>
                    <Button onClick = {(e) => handleClickThongKe(e)} sx={{backgroundColor:'#76ff03', width: 200 , height: 60, color:'black',fontWeight:'bold'} }>Thống kê</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Mã Sân Bóng</StyledTableCell>
                            <StyledTableCell align="right">Sân bóng</StyledTableCell>
                            <StyledTableCell align="right">Đã CheckOut</StyledTableCell>
                            <StyledTableCell align="right">Chưa CheckOut</StyledTableCell>
                            <StyledTableCell align="right">Doanh Thu</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listTKSB && listTKSB.map((row) => (
              <StyledTableRow key={row.idSB}>
                <StyledTableCell  component="th" scope="row">
                  {row.idSB}
                </StyledTableCell>
                <StyledTableCell align="right">{row.tenSan}</StyledTableCell>
                <StyledTableCell align="right">{row.soLanDat}</StyledTableCell>
                <StyledTableCell align="right">{row.soLanDatChuaCO}</StyledTableCell>
                <StyledTableCell align="right">{row.doanhThu}</StyledTableCell>
            </StyledTableRow>
            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
