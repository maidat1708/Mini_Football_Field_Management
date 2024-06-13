package com.qlsb.start.Controller.PhieuDat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qlsb.start.Model.PhieuDat.PhieuDat;
import com.qlsb.start.Model.PhieuDat.PhieuDatDTO;
import com.qlsb.start.Service.PhieuDat.PhieuDatService;


@CrossOrigin
@Controller
public class PhieuDatController {
    @Autowired
    private PhieuDatService service;
    // @Autowired
    // private KhachHangService 
    @ResponseBody
    @GetMapping("/phieudats")
    public List<PhieuDatDTO> getAllPhieuDat(){
       return service.getAllPhieuDat();
    }

    @ResponseBody
    @GetMapping("/getphieudatbyid/{id}")
    public PhieuDat getPhieuDatNById(@PathVariable int id){
        return service.getAllPhieuDatById(id);
    }
    @ResponseBody
    @GetMapping("/getphieudatbytenKH/{search}")
    public List<PhieuDatDTO> getAllPhieuDatByTenKH(@PathVariable String search){
        return service.getAllPhieuDatByTenKH(search);
    }

    @ResponseBody
    @PostMapping("/addphieudat")
    public String addPhieuDat(@RequestBody PhieuDat phieuDat){
        return service.addPhieuDat(phieuDat);
    }

    @ResponseBody
    @PutMapping("/updatephieudat")
    public String updatePhieuDat(@RequestBody PhieuDat phieuDat){
        return service.updatePhieuDat(phieuDat);
    }

    @ResponseBody
    @DeleteMapping("/deletephieudat")
    public String deleltePhieuDat(@RequestBody PhieuDat phieuDat){
        return service.deletePhieuDat(phieuDat.getId());
    }
}
