package com.qlsb.start.Controller.SanBong;

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

import com.qlsb.start.Model.SanBong.SanBong;
import com.qlsb.start.Service.SanBong.SanBongService;


@CrossOrigin
@Controller
public class SanBongController {
    @Autowired
    private SanBongService service;

    @ResponseBody
    @GetMapping("/sanbongs")
    public List<SanBong> getAllSanBong(){
        return service.getAllSanBong();
    }
    
    @ResponseBody
    @GetMapping("/getsanbongbyid/{id}")
    public SanBong getSanPhamByID(@PathVariable int id){
        return service.getSanBongById(id);
    }

    @ResponseBody
    @PostMapping("/addsanbong")
    public String addSanBong(@RequestBody SanBong sanBong){
        // System.out.println("check 1 "+ sanBong.getTen());
        return service.addSanBong(sanBong);
    } 
    
    @ResponseBody
    @PutMapping("/updatesanbong")
    public String updateSanbong(@RequestBody SanBong sanBong){
        System.out.println("check update");
        return service.updateSanBong(sanBong);
    }

    @ResponseBody
    @DeleteMapping("/deletesanbong")
    public String deleteSanBong(@RequestBody SanBong sanBong){
        System.out.println("check delete");
        return service.deleteSanBong(sanBong.getId());
    }
}
