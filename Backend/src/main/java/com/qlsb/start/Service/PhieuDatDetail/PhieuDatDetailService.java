package com.qlsb.start.Service.PhieuDatDetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.PhieuDat.PhieuDat;
import com.qlsb.start.Model.PhieuDatDetail.PhieuDatDetail;
import com.qlsb.start.Repository.PhieuDatDetail.PhieuDatDetailRepository;

@Service
public class PhieuDatDetailService {
    @Autowired
    private PhieuDatDetailRepository repo;

    public List<PhieuDatDetail> createPDDetail(PhieuDat phieuDat){
        List<PhieuDatDetail> listPDDetail = PhieuDatConvertToPhieuDatDetail.convertToPhieuDatDetail(phieuDat);
        repo.saveAll(listPDDetail);
        return listPDDetail;
    }
    public List<PhieuDatDetail> getPhieuDatDetailById(int id){
        return repo.getPhieuDatDetailByIdPD(id);
    }
}
