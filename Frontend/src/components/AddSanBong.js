import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function AddSanBong() {
    const {id} = useLocation().state;
    const navigate = useNavigate();
    const [sanBong, setSanBong] = React.useState({
        ten:"",
        gia:""
    })
    console.log(id)
    const [err, setErr] = React.useState("")
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/getsanbongbyid/${id}`);
                if (!response.ok) {
                throw new Error('Failed to fetch data san bong');
                }
                const jsonData = await response.json()
                console.log(jsonData)
                setSanBong(jsonData);
            } catch (error) {
                console.log(error);
            };
        }
        fetchData();
      }, [id]);

    const handleChangeTen = (e) => {
        console.log(e.target.value)
        setSanBong({
            ...sanBong,
            ten: e.target.value
        })
    }

    const handleChangeGia = (e) => {
        console.log(e.target.value)
        setSanBong({
            ...sanBong,
            gia: e.target.value
        })
    }
    const handleClickHuy = (e) => {
        e.preventDefault();
        navigate('/dssanbong')
    }
    
    const handleClickLuu = async (e) => {
        e.preventDefault();
        let str = id === "0"? "addsanbong" : "updatesanbong"
        const requestOptions = {
            method: id === "0" ?'POST': "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sanBong)
        };
        try {
            const res = await fetch(`http://localhost:8080/${str}`, requestOptions);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.text();
            console.log(data)
            if (data === "Sân bóng đã tồn tại") {
                setErr("Sân bóng đã tồn tại")
                setSanBong({
                    ten: "",
                    gia: "",
                })
            }
            else {
                setErr("")
                navigate('/dssanbong')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1 style={{margin: 100}}>Thêm sân bóng</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60%'},
                    display:'flex',
                    alignItems:'center',
                    flexDirection:'column',
                    marginTop: 20
                }}
                noValidate
                autoComplete="off"
                >
                <Box sx={{display:'flex', justifyContent:'space-around'}}>
                    <h3 style={{flex: 2, marginTop:10}}>Tên sân bóng:</h3>
                    <TextField onChange={handleChangeTen} value={sanBong.ten} style={{flex: 5,marginBottom: 100}} id="outlined-basic" label="Tên sân bóng" variant="outlined" />
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-around'}}>
                    <h3 style={{flex: 2, marginTop:10}}>Giá thuê (đ/giờ):</h3>
                    <TextField onChange={handleChangeGia} type = 'number' value={sanBong.gia} style={{flex: 5,marginBottom: 50}} id="outlined-basic" label="Giá thuê (đ/giờ)" variant="outlined" />
                </Box>
                <Typography sx={{color: "red",fontSize:20,textAlign:'center'}}>{err}</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between',paddingTop:10}}>
                    <Button onClick={(e)=>handleClickHuy(e)} sx={{width:100}} variant="contained" color="error">
                        Quay lại
                    </Button>
                    <Button onClick={(e)=>handleClickLuu(e)}sx={{width:100}} variant="contained" color="success">
                        {id !== 0 ? "Lưu" : "Thêm"}
                    </Button>
                </Box>
            </Box>

        </div>
      );
}