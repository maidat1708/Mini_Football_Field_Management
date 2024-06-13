package com.qlsb.start.Repository.SanBong;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.SanBong.SanBong;


@Repository
public interface SanBongRepository extends JpaRepository<SanBong,Integer>{
    SanBong getSanBongByTen(String ten);
    SanBong getSanBongById(int id);

    @Query(value = "Select co.id as id, pdd.id as idPDDetail, pd.idKH as idKH, pd.idSB as idSB, pd.ca as ca, pd.ngayDat as ngayDat, kh.ten as tenKH, kh.sdt as sdt , sb.ten as tenSan, sb.gia as gia, pdd.batdau as ngayBatDau,pdd.ketthuc as ngayKetThuc, pd.thu as thu from checkout co join phieudatdetail pdd on co.idPD = pdd.id join phieudat pd on pdd.idPD = pd.id join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id Where idSB = ?1 and pdd.batDau >= STR_TO_DATE(?2, '%Y-%m-%d %H:%i:%s') and pdd.ketThuc <= STR_TO_DATE(?3, '%Y-%m-%d %H:%i:%s')", nativeQuery = true)
    List<Object[]> thongKeSanBong(int id,LocalDateTime tuNgay,LocalDateTime denNgay);
    @Query(value = "Select pdd.id as idPDDetail, pd.idKH as idKH, pd.idSB as idSB, pd.ca as ca, pd.ngayDat as ngayDat, kh.ten as tenKH, kh.sdt as sdt , sb.ten as tenSan, sb.gia as gia, pdd.batdau as ngayBatDau,pdd.ketthuc as ngayKetThuc, pd.thu as thu from phieudatdetail pdd join phieudat pd on pdd.idPD = pd.id join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id Where idSB = ?1 and pdd.batDau >= STR_TO_DATE(?2, '%Y-%m-%d %H:%i:%s')  and pdd.ketThuc <= STR_TO_DATE(?3, '%Y-%m-%d %H:%i:%s') ", nativeQuery = true)
    List<Object[]> thongKeSanBongChuaCO(int id,LocalDateTime tuNgay,LocalDateTime denNgay);
}
