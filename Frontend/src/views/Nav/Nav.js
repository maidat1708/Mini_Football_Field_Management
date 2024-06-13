import React from "react"; 
import './Nav.scss'
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component{
    render() {
        return (
            <div className="topnav">
                <NavLink to = '/' exact = {'true'}>Khách hàng</NavLink>
                <NavLink to = '/dssanbong' >Sân bóng</NavLink>
                <NavLink to = '/dsphieudat' >Phiếu đặt sân</NavLink>
                <NavLink to = '/dssanpham' >Sản phẩm</NavLink>
                <NavLink to = '/dscheckout' >Checkout</NavLink>
                <NavLink to = '/dshoadon' >Hóa đơn</NavLink>
                <NavLink to = '/thongke' >Thống kê</NavLink>
                {/* <Link to = "/">Home</Link>
                <Link to = "/todo">Todos</Link>
                <Link to = "/about">About</Link> */}
                {/* <a class="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a> */}
            </div>
        )
    }
}
export default Nav