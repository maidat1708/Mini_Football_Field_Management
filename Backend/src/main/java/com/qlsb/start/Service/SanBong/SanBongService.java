package com.qlsb.start.Service.SanBong;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.SanBong.SanBong;
import com.qlsb.start.Repository.SanBong.SanBongRepository;

@Service
public class SanBongService {

    @Autowired
    private SanBongRepository repo;

    public List<SanBong> getAllSanBong(){
        return repo.findAll();
    }

    public SanBong getSanBongById(int id){
        return repo.getSanBongById(id);
    }

    public SanBong getSanBongByTen(String ten){
        return repo.getSanBongByTen(ten);
    }

    public String addSanBong(SanBong sanBong){
        SanBong sb = repo.getSanBongByTen(sanBong.getTen());
        if(sb != null){
            return "Sân bóng đã tồn tại";
        }
        else{
            repo.save(sanBong);
            return "OK success addSanBong";
        }
    }
    public String updateSanBong(SanBong sanBong){
        repo.save(sanBong);
        return  "OK";
    }
    public String deleteSanBong(int id){
        repo.deleteById(id);
        return "OK";
    }
}
