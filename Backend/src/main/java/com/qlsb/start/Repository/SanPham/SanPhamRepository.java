package com.qlsb.start.Repository.SanPham;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.SanPham.SanPham;

@Repository
public interface SanPhamRepository extends JpaRepository<SanPham,Integer>{
    SanPham getSanPhamByTen(String ten);
    SanPham getSanPhamByid(int id);
}
