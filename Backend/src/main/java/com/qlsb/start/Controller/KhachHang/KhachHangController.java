package com.qlsb.start.Controller.KhachHang;

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

import com.qlsb.start.Model.KhachHang.KhachHang;
import com.qlsb.start.Service.KhachHang.KhachHangService;


@CrossOrigin
@Controller
public class KhachHangController {
    @Autowired
    private KhachHangService service;

    @ResponseBody
    @GetMapping("/khachhangs")
    public List<KhachHang> getAllKhachHang(){
        return service.getAllKhachHang();
    }
    
    @ResponseBody
    @GetMapping("/getkhachhangbyid/{id}")
    public KhachHang getSanPhamByID(@PathVariable int id){
        return service.getKhachHangById(id);
    }

    @ResponseBody
    @PostMapping("/addkhachhang")
    public String addKhachHang(@RequestBody KhachHang sanBong){
        // System.out.println("check 1 "+ sanBong.getTen());
        return service.addKhachHang(sanBong);
    } 
    
    @ResponseBody
    @PutMapping("/updatekhachhang")
    public String updateSanbong(@RequestBody KhachHang sanBong){
        System.out.println("check update");
        return service.updateKhachHang(sanBong);
    }

    @ResponseBody
    @DeleteMapping("/deletekhachhang")
    public String deleteKhachHang(@RequestBody KhachHang sanBong){
        System.out.println("check delete");
        return service.deleteKhachHang(sanBong.getId());
    }
}
