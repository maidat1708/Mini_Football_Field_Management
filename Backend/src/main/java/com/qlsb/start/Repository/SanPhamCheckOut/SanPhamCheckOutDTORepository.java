package com.qlsb.start.Repository.SanPhamCheckOut;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.SanPhamCheckOut.SanPhamCheckOutDTO;


@Repository
public interface SanPhamCheckOutDTORepository extends JpaRepository<SanPhamCheckOutDTO,Integer>{
    @Query(value = "Select spco.id as id, spco.idSP as idSP,spco.soLuong as soLuong,spco.idCO as idCO,sp.ten as tenSP, sp.gia as gia,sp.donviTinh as donViTinh from sanphamcheckout spco join sanpham sp on spco.idSP = sp.id  Where spco.idCO = ?1", nativeQuery = true)
    List<SanPhamCheckOutDTO> getSanPhamCheckOutByIdCheckOut(int id);
    @Query(value = "Select spco.id as id, spco.idSP as idSP,spco.soLuong as soLuong,spco.idCO as idCO,sp.ten as tenSP, sp.gia as gia,sp.donviTinh as donViTinh from sanphamcheckout spco join sanpham sp on spco.idSP = sp.id  Where spco.id = ?1", nativeQuery = true)
    SanPhamCheckOutDTO getSanPhamCheckOutById(int id);
}
