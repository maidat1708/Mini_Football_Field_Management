package com.qlsb.start.Repository.PhieuDatDetail;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qlsb.start.Model.PhieuDatDetail.PhieuDatDetail;

@Repository
public interface PhieuDatDetailRepository extends JpaRepository<PhieuDatDetail,Integer>{
    List<PhieuDatDetail> getPhieuDatDetailByIdPD(int id);
}
