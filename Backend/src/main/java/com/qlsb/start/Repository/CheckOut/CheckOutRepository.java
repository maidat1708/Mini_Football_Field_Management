package com.qlsb.start.Repository.CheckOut;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.CheckOut.CheckOut;
import com.qlsb.start.Model.CheckOut.CheckOutDTO;

@Repository
public interface CheckOutRepository extends JpaRepository<CheckOut,Integer>{
    @Query(value = "Select co.id as id, co.idPD as idPD, pd.idKH as idKH, pd.idSB as idSB, pd.ca as ca, pd.ngayDat as ngayDat, kh.ten as tenKH, kh.sdt as sdt , sb.ten as tenSan, sb.gia as gia from checkout co join phieudat pd on co.idPD = pd.id join khachhang kh on pd.idKH = kh.id join sanbong sb on pd.idSB = sb.id Where co.id = ?1", nativeQuery = true)
    CheckOutDTO getCheckOutDetailById(int id);
}
