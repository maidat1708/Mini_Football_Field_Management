package com.qlsb.start.Controller.PhieuDatDetail;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qlsb.start.Model.PhieuDat.PhieuDat;
import com.qlsb.start.Model.PhieuDatDetail.PhieuDatDetail;
import com.qlsb.start.Service.PhieuDatDetail.PhieuDatConvertToPhieuDatDetail;
import com.qlsb.start.Service.PhieuDatDetail.PhieuDatDetailService;

@CrossOrigin
@RestController
public class PhieuDatDetailController {
    @Autowired
    private PhieuDatDetailService service;

    // @GetMapping("/createphieudatdetail")
    // public List<PhieuDatDetail> createPDDetail(@RequestBody PhieuDat phieuDat){
    //     return service.createPDDetail(phieuDat);
    // }
    @GetMapping("/getphieudatdetailbyid/{id}")
    public List<PhieuDatDetail> getPhieuDatDetailById(@PathVariable int id){
        return service.getPhieuDatDetailById(id);
    }
}
