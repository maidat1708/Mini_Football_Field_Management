package com.qlsb.start.Repository.KhachHang;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.KhachHang.KhachHang;


@Repository
public interface KhachHangRepository extends JpaRepository<KhachHang,Integer>{
    KhachHang getKhachHangByTen(String ten);
    KhachHang getKhachHangById(int id);
}
