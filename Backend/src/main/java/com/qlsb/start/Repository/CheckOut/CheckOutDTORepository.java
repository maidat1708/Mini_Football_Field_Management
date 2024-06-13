package com.qlsb.start.Repository.CheckOut;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.CheckOut.CheckOutDTO;

@Repository
public interface CheckOutDTORepository extends JpaRepository<CheckOutDTO,Integer>{
    @Query(value = "Select co.id as id, pdd.id as idPDDetail, pd.idKH as idKH, pd.idSB as idSB, pd.ca as ca, pd.ngayDat as ngayDat, kh.ten as tenKH, kh.sdt as sdt , sb.ten as tenSan, sb.gia as gia, pdd.batdau as ngayBatDau,pdd.ketthuc as ngayKetThuc, pd.thu as thu from checkout co join phieudatdetail pdd on co.idPD = pdd.id join phieudat pd on pdd.idPD = pd.id join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id Where co.id = ?1", nativeQuery = true)
    CheckOutDTO getCheckOutDetailById(int idCO);
}
