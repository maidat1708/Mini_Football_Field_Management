import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function AddSanPhamCheckOut() {
    const { idCheckOut,id ,sanPhamCheckOutDetail,listSPCOO} = useLocation().state;
    const navigate = useNavigate();
    const [listSP, setListSP] = useState(null)
    const [sanPham, setSanPham] = useState(sanPhamCheckOutDetail? {
        id: sanPhamCheckOutDetail.idSP,
        ten: sanPhamCheckOutDetail.tenSP,
        gia: sanPhamCheckOutDetail.gia,
        anh:sanPhamCheckOutDetail.anh,
        donViTinh: sanPhamCheckOutDetail.donViTinh
    }:{
        id: "",
        ten: "",
        gia: "",
        anh:"",
        donViTinh: ""
    })
    console.log(id)
    console.log(listSPCOO)
    const [sanPhamCheckOut, setSanPhamCheckOut] = React.useState({
        id:"",
        idSP: "",
        soLuong: "",
        idCO: "",
    })

    console.log(idCheckOut)
    const [err, setErr] = React.useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/sanphams');
                if (!response.ok) {
                    throw new Error('Failed to fetch data san pham');
                }
                const jsonData = await response.json()
                console.log("check data SP")
                console.log(jsonData)
                setListSP(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/getsanphamcheckoutbyid/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data san pham check out');
                }
                const jsonData = await response.json()
                console.log(jsonData)
                setSanPhamCheckOut(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
    }, [id]);

    const handleChangeRow = (event) => {
        setSanPham(event.target.value);
        setSanPhamCheckOut({
            ...sanPhamCheckOut,
            id: id,
            idSP: event.target.value.id,
            idCO: idCheckOut,
        })
    };


    const handleChangeSoLuong = (e) => {
        // console.log(e.target.value)
        setSanPhamCheckOut({
            ...sanPhamCheckOut,
            soLuong: e.target.value
        })
    }

    const handleClickHuy = (e) => {
        e.preventDefault();
        navigate('/dssanpham')
    }

    const handleClickLuu = async (e) => {
        e.preventDefault();
        if(sanPham.id === "") return
        setSanPhamCheckOut({
            ...sanPhamCheckOut,
            id: id,
            idSP: sanPham.id,
            idCO: idCheckOut,
        })
        let spCO = listSPCOO.filter(sp => sp.idSP === sanPhamCheckOut.idSP);
        if(spCO.length > 0){
            sanPhamCheckOut.id = spCO[0].id
            console.log(spCO[0].soLuong)
            sanPhamCheckOut.soLuong = (parseInt(sanPhamCheckOut.soLuong) + parseInt(spCO[0].soLuong)).toString();
            console.log(spCO)
        }
        // Kiểm tra giá trị ban đầu
        // console.log(`sanPhamCheckOut.soLuong (initial): ${sanPhamCheckOut.soLuong}`);
        // console.log(`spCO.soLuong (initial): ${spCO.soLuong}`);

        // // Chuyển đổi các giá trị sang số nguyên
        // const soLuongSanPhamCheckOut = parseInt(sanPhamCheckOut.soLuong, 10);
        // const soLuongSPCO = parseInt(spCO.soLuong, 10);

        // // Kiểm tra các giá trị sau khi chuyển đổi
        // console.log(`soLuongSanPhamCheckOut (parsed): ${soLuongSanPhamCheckOut}`);
        // console.log(`soLuongSPCO (parsed): ${soLuongSPCO}`);

        // // Kiểm tra nếu giá trị sau khi chuyển đổi là số hợp lệ
        // if (!isNaN(soLuongSanPhamCheckOut) && !isNaN(soLuongSPCO)) {
        //     sanPhamCheckOut.soLuong = (soLuongSanPhamCheckOut + soLuongSPCO).toString();
        //     console.log(`sanPhamCheckOut.soLuong (after): ${sanPhamCheckOut.soLuong}`);
        // } else {
        //     console.error("One of the values is not a valid number");
        // }

        let str ="addsanphamcheckout"; 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sanPhamCheckOut)
        };
        console.log(sanPhamCheckOut)
        console.log(JSON.stringify(sanPhamCheckOut))
        try {
            const res = await fetch(`http://localhost:8080/${str}`, requestOptions);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.text();
            console.log(data)
            navigate('/checkoutdetail',{state : {id : idCheckOut}})
        }
        catch (error) {
            console.log(error);
        }
    }

    console.log(listSP)
    return (
        <div>
            <h1 style={{ margin: 100 }}>Thêm sản phẩm thuê</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60%' },
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 20
                }}
                noValidate
                autoComplete="off"
            >
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h3 style={{ flex: 2, marginTop: 10 }}>Tên sản phẩm:</h3>
                    <TextField onChange={handleChangeTen} value={sanPhamCheckOut.ten} style={{ flex: 5, marginBottom: 100 }} id="outlined-basic" label="Tên sản phẩm" variant="outlined" />
                </Box> */}
                <Box sx={{ display:'flex' , minWidth: 120,paddingBottom:12}}>
                    <h3 style={{ flex: 3, marginTop: 10 }}>Tên sản phẩm:</h3>
                    <FormControl sx={{ flex: 8, marginLeft: 2}} fullWidth>
                        <InputLabel id="demo-simple-select-label">Tên sản phẩm</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sanPham}
                            // displayEmpty
                            // renderValue={(v)=>{
                            //     return v || null;
                            // }}
                            label="Tên sản phẩm"
                            onChange={handleChangeRow}
                        >
                            <MenuItem value = {sanPham}>
                                <em>{sanPhamCheckOutDetail ? sanPham.ten : "None"}</em>
                            </MenuItem>
                            {listSP && listSP.map((row) =>(
                                // <MenuItem selected = {row.id === sanPhamCheckOutDetail.idSP ? true : false} key={row.id} value={row}>
                                <MenuItem key={row.id} value={row}>
                                    {console.log(row)}
                                    {row.ten}
                                </MenuItem>
                            ))}
                             {/* {filteredPhuongList.map((phuongItem) => (
                            <MenuItem key={phuongItem.idBHYT} value={phuongItem.idBHYT}>
                                {phuongItem.ten}
                            </MenuItem>
                            ))} */}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop:100}}>
                    <h3 style={{ flex: 2, marginTop: 10 }}>Giá tiền (đ):</h3>
                    <TextField disabled value={sanPham? sanPham.gia : ""} type = 'number' style={{ flex: 5, marginBottom: 100 }} id="outlined-basic" label="Giá tiền (đ)" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h3 style={{ flex: 2, marginTop: 10 }}>Đơn vị tính:</h3>
                    <TextField disabled value={sanPham? sanPham.donViTinh : ""} style={{ flex: 5, marginBottom: 50 }} id="outlined-basic" label="Đơn vị tính" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h3 style={{ flex: 2, marginTop: 10 }}>Số lượng:</h3>
                    <TextField onChange={handleChangeSoLuong} type = 'number' value={sanPhamCheckOut? sanPhamCheckOut.soLuong : ""} style={{ flex: 5, marginBottom: 50 }} id="outlined-basic" label="Số lượng" variant="outlined" />
                </Box>
                <Typography sx={{ color: "red", fontSize: 20, textAlign: 'center' }}>{err}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: 5 }}>
                    <Button onClick={(e) => handleClickHuy(e)} sx={{ width: 100 }} variant="contained" color="error">
                        Quay lại
                    </Button>
                    <Button onClick={(e) => handleClickLuu(e)} sx={{ width: 100 }} variant="contained" color="success">
                        {idCheckOut !== 0 ? "Lưu" : "Thêm"}
                    </Button>
                </Box>
            </Box>
            

        </div>
    );
}