package com.qlsb.start.Controller.SanPham;

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

import com.qlsb.start.Model.SanPham.SanPham;
import com.qlsb.start.Service.SanPham.SanPhamService;


@CrossOrigin
@Controller
public class SanPhamController {
    @Autowired
    private SanPhamService service;

    @ResponseBody
    @GetMapping("/sanphams")
    public List<SanPham> getAllSanPham(){
        return service.getAllSanPham();
    }

    @ResponseBody
    @GetMapping("/getsanphambyid/{id}")
    public SanPham getSanPhamByID(@PathVariable int id){
        return service.getSanPhamByID(id);
    }

    @ResponseBody
    @GetMapping("/getsanphambyten")
    public SanPham getSanPhamByTen(@RequestBody String ten){
        return service.getSanPhamByTen(ten);
    }

    @ResponseBody
    @PostMapping("/addsanpham")
    public String addSanPham(@RequestBody SanPham sanPham){
        return service.addSanPham(sanPham);
    }

    @ResponseBody
    @PutMapping("/updatesanpham")
    public String updateSanPham(@RequestBody SanPham sanPham){
        return service.updateSanPham(sanPham);
    }

    @ResponseBody
    @DeleteMapping("/deletesanpham")
    public String deleteSanPham(@RequestBody SanPham sanPham){
        return service.deleteSanPham(sanPham.getId());
    }

}
