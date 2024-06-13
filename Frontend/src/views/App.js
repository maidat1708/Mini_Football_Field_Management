import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import AddSanBong from '../components/AddSanBong';
import TableSanBong from '../components/TableSanBong';
import TableKhachHang from '../components/TableKhachHang';
import AddSanPham from '../components/AddSanPham';
import TablePhieuDat from '../components/TablePhieuDat';
import TableSanPham from '../components/TableSanPham';
import Nav from './Nav/Nav';
import CheckoutDetail from '../components/CheckoutDetail';
import TableCheckOut from '../components/TablleCheckOut';
import AddSanPhamCheckOut from '../components/AddSanPhamCheckOut';
import HoaDonDetail from '../components/HoaDonDetail';
import TablePhieuDatDetail from '../components/TablePhieuDatDetail';
import ThongKe from '../components/ThongKe';
import ThongKeSanBong from '../components/ThongKeSanBong';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <Routes>
          <Route path='/' element = {<TableKhachHang/>}></Route>
          <Route path='/addsanbong' element = {<AddSanBong/>}></Route>
          <Route path='/addsanpham' element = {<AddSanPham/>}></Route>
          <Route path='/dssanbong' element = {<TableSanBong/>}></Route>
          <Route path='/dsPhieuDat' element ={<TablePhieuDat/>}></Route>
          <Route path='/dsdhieudatdetail/:id' element ={<TablePhieuDatDetail/>}></Route>
          <Route path='/dssanpham' element = {<TableSanPham/>}></Route>
          <Route path='/dscheckout' element = {<TableCheckOut/>}></Route>
          <Route path='/checkoutdetail' element = {<CheckoutDetail/>}></Route>
          <Route path='/addsanphamcheckout' element = {<AddSanPhamCheckOut/>}></Route>
          <Route path='/dshoadon' element = {<TableSanPham/>}></Route>
          <Route path='/hoadondetail' element = {<HoaDonDetail/>}></Route>
          <Route path='/thongke' element = {<ThongKe/>}></Route>
          <Route path='/thongkesanbong' element = {<ThongKeSanBong/>}></Route>
        </Routes> 
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
