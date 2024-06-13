package com.qlsb.start.Service.KhachHang;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.KhachHang.KhachHang;
import com.qlsb.start.Repository.KhachHang.KhachHangRepository;

@Service
public class KhachHangService {

    @Autowired
    private KhachHangRepository repo;

    public List<KhachHang> getAllKhachHang(){
        return repo.findAll();
    }

    public KhachHang getKhachHangById(int id){
        return repo.getKhachHangById(id);
    }

    public KhachHang getKhachHangByTen(String ten){
        return repo.getKhachHangByTen(ten);
    }

    public String addKhachHang(KhachHang sanBong){
        KhachHang sb = repo.getKhachHangByTen(sanBong.getTen());
        if(sb != null){
            return "Sân bóng đã tồn tại";
        }
        else{
            repo.save(sanBong);
            return "OK success addKhachHang";
        }
    }
    public String updateKhachHang(KhachHang sanBong){
        repo.save(sanBong);
        return  "OK";
    }
    public String deleteKhachHang(int id){
        repo.deleteById(id);
        return "OK";
    }
}
