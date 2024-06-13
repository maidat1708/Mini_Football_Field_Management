package com.qlsb.start.Service.SanPham;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.SanPham.SanPham;
import com.qlsb.start.Repository.SanPham.SanPhamRepository;

@Service
public class SanPhamService {
    @Autowired 
    private SanPhamRepository repo;

    public List<SanPham> getAllSanPham(){
        return repo.findAll();
    }

    public SanPham getSanPhamByID(int id){
        return repo.getSanPhamByid(id);
    }

    public SanPham getSanPhamByTen(String ten){
        return repo.getSanPhamByTen(ten);
    }

    public String addSanPham(SanPham sanPham){

        SanPham sp = repo.getSanPhamByTen(sanPham.getTen());
        if(sp != null){
            return "Sản phẩm đã tồn tại";
        }
        else{
            repo.save(sanPham);
            return "OK add SanPham";
        }
    }


    public String updateSanPham(SanPham sanPham){
        repo.save(sanPham);
        return "OK update SanPham";
    }

     public String deleteSanPham(int id){
        repo.deleteById(id);
        return "OK delete SanPham";
     }
}
