import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableKhachHang from './TableKhachHang';
import TableSanBong from './TableSanBong';
import { useEffect,useState } from 'react';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function ListQL() {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8080/sanbongs');
    //             if (!response.ok) {
    //             throw new Error('Failed to fetch data san bong');
    //             }
    //             const jsonData = await response.json()
    //             console.log(jsonData)
    //             setListSB(jsonData);
    //         } catch (error) {
    //             console.log(error);
    //         };
    //     }
    //     fetchData();
    //   }, []);
    //   console.log(listSB)
    // }
    // const handelClickTab1 = async (e) => {
    //     e.preventDefault()
    //     console.log("check tab1")
    //     try {
    //         const response = await fetch('http://localhost:8080/sanbongs');
    //         if (!response.ok) {
    //         throw new Error('Failed to fetch data san bong');
    //         }
    //         const jsonData = await response.json()
    //         console.log(jsonData)
    //         setListSB(jsonData);
    //     } catch (error) {
    //         console.log(error);
    //     };
    // }
    return (
        <Box sx={{width: '100%' }}>
            <Box sx={{ borderBottom: 1,backgroundColor:'#C0C0C0' , borderColor: 'gray',display: "flex", justifyContent: 'center'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{color:'white'}} label="Item One" {...a11yProps(0)} />
                    <Tab sx={{color:'white'}} label="Item Two" {...a11yProps(1)} />
                    <Tab sx={{color:'white'}} label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box>
                <CustomTabPanel value={value} index={0}>
                    <TableKhachHang></TableKhachHang>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                   {/* {listSB&&( */}
                   <TableSanBong></TableSanBong>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
export default ListQL