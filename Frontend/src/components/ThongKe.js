import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom";
import '../styles/thongke.css';

const ThongKe = () => {

  const navigate = useNavigate();
  const handleCustomerStats = () => {
    console.log('Thống kê theo khách hàng');
    // Thêm logic xử lý ở đây
  };

  const handleFieldStats = () => {
    navigate('/thongkesanbong')
  };

  const handleRevenueStats = () => {
    console.log('Thống kê doanh thu');
    // Thêm logic xử lý ở đây
  };

  return (
    <div className="container">
      <Stack spacing={2} direction="row">
        <Button 
          className="button button-primary" 
          variant="contained" 
          onClick={handleCustomerStats}
        >
          Thống kê theo khách hàng
        </Button>
        <Button 
          className="button button-secondary" 
          variant="contained" 
          onClick={handleFieldStats}
        >
          Thống kê theo sân bóng
        </Button>
        <Button 
          className="button button-success" 
          variant="contained" 
          onClick={handleRevenueStats}
        >
          Thống kê doanh thu
        </Button>
      </Stack>
    </div>
  );
};

export default ThongKe;
