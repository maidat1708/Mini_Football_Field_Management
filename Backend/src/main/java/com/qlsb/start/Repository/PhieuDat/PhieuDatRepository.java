package com.qlsb.start.Repository.PhieuDat;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.PhieuDat.PhieuDat;


@Repository
public interface  PhieuDatRepository extends JpaRepository<PhieuDat,Integer>{
    // @Query(value="SELECT pd.id as id,kh.ten as tenKH,sb.ten as tenSan,pd.ca as ca,pd.ngayDat as ngayDat FROM phieudat pd join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id", nativeQuery = true)
    // List<Object[]> getAllPhieuDat();
    // @Query(value="SELECT pd.id as id,kh.ten as tenKH,sb.ten as tenSan,pd.ca as ca,pd.ngayDat as ngayDat FROM phieudat pd join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id", nativeQuery = true)
    // List<PD> getAllPhieuDat();
    @Query(value="SELECT pd.id as id, pd.idKH as idKH,pd.idSB as idSB,pd.ca as ca,pd.ngayDat as ngayDat, kh.ten as tenKH, kh.sdt as sdt , sb.ten as tenSan,sb.gia as gia , pd.ngayBatDau as ngayBatDau,pd.ngayKetThuc as ngayKetThuc, pd.thu as thu FROM phieudat pd join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id", nativeQuery = true)
    List<PhieuDat> getAllPhieuDat();
    @Query(value="SELECT pd.id as id, pd.idKH as idKH,pd.idSB as idSB,pd.ca as ca,pd.ngayDat as ngayDat, kh.ten as tenKH, kh.sdt as sdt , sb.ten as tenSan,sb.gia as gia , pd.ngayBatDau as ngayBatDau,pd.ngayKetThuc as ngayKetThuc, pd.thu as thu FROM phieudat pd join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id where kh.ten like %?1%", nativeQuery = true)
    List<PhieuDat> getAllPhieuDatByTenKH(String ten);
    PhieuDat getPhieuDatById(int id);
}
