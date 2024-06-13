import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';


export default function AddSanPham() {
    const {id} = useLocation().state;
    const navigate = useNavigate();
    const [sanPham, setSanPham] = React.useState({
        ten: "",
        gia: "",
        donViTinh: ""
    })
    console.log(id)
    const [err, setErr] = React.useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/getsanphambyid/${id}`);
                if (!response.ok) {
                throw new Error('Failed to fetch data san bong');
                }
                const jsonData = await response.json()
                console.log(jsonData)
                setSanPham(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
      }, [id]);
 
    const handleChangeTen = (e) => {
        // console.log(e.target.value)
        setSanPham({
            ...sanPham,
            ten: e.target.value
        })
    }

    const handleChangeGia = (e) => {
        // console.log(e.target.value)
        setSanPham({
            ...sanPham,
            gia: e.target.value
        })
    }

    const handleChangeDonViTinh = (e) => {
        // console.log(e.target.value)
        setSanPham({
            ...sanPham,
            donViTinh: e.target.value
        })
    }

    const handleClickHuy = (e) => {
        e.preventDefault();
        navigate('/dssanpham')
    }

    const handleClickLuu = async (e) => {
        e.preventDefault();
        let str = id === "0"? "addsanpham" : "updatesanpham"
        const requestOptions = {
            method: id === "0" ?'POST': "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sanPham)
        };
        console.log(sanPham)

        try {
            const res = await fetch(`http://localhost:8080/${str}`, requestOptions);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.text();
            console.log(data)
            if (data === "Sản phẩm đã tồn tại") {
                setErr("Sản phẩm đã tồn tại")
                setSanPham({
                    ten: "",
                    gia: "",
                    donViTinh: ""
                })
            }
            else {
                setErr("")
                navigate('/dssanpham')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1 style={{ margin: 100 }}>Thêm sản phẩm</h1>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h3 style={{ flex: 2, marginTop: 10 }}>Tên sản phẩm:</h3>
                    <TextField onChange={handleChangeTen} value={sanPham.ten} style={{ flex: 5, marginBottom: 100 }} id="outlined-basic" label="Tên sản phẩm" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h3 style={{ flex: 2, marginTop: 10 }}>Giá tiền (đ):</h3>
                    <TextField onChange={handleChangeGia} type = "number" value={sanPham.gia} style={{ flex: 5, marginBottom: 100 }} id="outlined-basic" label="Giá tiền (đ)" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h3 style={{ flex: 2, marginTop: 10 }}>Đơn vị tính:</h3>
                    <TextField onChange={handleChangeDonViTinh} value={sanPham.donViTinh} style={{ flex: 5, marginBottom: 50 }} id="outlined-basic" label="Đơn vị tính" variant="outlined" />
                </Box>
                <Typography sx={{color: "red",fontSize:20,textAlign:'center'}}>{err}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between',paddingTop:5}}>
                    <Button onClick={(e) => handleClickHuy(e)} sx={{ width: 100 }} variant="contained" color="error">
                        Quay lại
                    </Button>
                    <Button onClick={(e) => handleClickLuu(e)} sx={{ width: 100 }} variant="contained" color="success">
                        {id !== 0 ? "Lưu" : "Thêm"}
                    </Button>
                </Box>
            </Box>

        </div>
    );
}