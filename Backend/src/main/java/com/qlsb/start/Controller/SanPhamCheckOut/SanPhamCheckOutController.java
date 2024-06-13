package com.qlsb.start.Controller.SanPhamCheckOut;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qlsb.start.Model.SanPhamCheckOut.SanPhamCheckOut;
import com.qlsb.start.Model.SanPhamCheckOut.SanPhamCheckOutDTO;
import com.qlsb.start.Service.SanPhamCheckOut.SanPhamCheckOutService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@CrossOrigin
@Controller
public class SanPhamCheckOutController {
    
    @Autowired
    private SanPhamCheckOutService service;

    @ResponseBody
    @GetMapping("/getsanphamcheckoutbyidcheckout/{id}")
    public List<SanPhamCheckOutDTO> getSanPhamCheckOutByIdCheckOut(@PathVariable int id){
        return service.getSanPhamCheckOutByIdCheckOut(id);
    }

    @ResponseBody
    @GetMapping("/getsanphamcheckoutbyid/{id}")
    public SanPhamCheckOutDTO getSanPhamCheckOutById(@PathVariable int id){
        return service.getSanPhamCheckOutById(id);
    }

    @ResponseBody
    @PostMapping("/addsanphamcheckout")
    public String addSanPhamCheckOut(@RequestBody SanPhamCheckOut sanPhamCheckOut) {
        return service.addSanPhamCheckOut(sanPhamCheckOut);
    }
    @ResponseBody
    @DeleteMapping("/deletesanphamcheckout")
    public String deleteSanPhamCheckOut(@RequestBody SanPhamCheckOut sanPhamCheckOut){
        return service.deleteSanPhamCheckOut(sanPhamCheckOut.getId());
    }
}
