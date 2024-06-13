package com.qlsb.start.Service.SanPhamCheckOut;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.SanPhamCheckOut.SanPhamCheckOut;
import com.qlsb.start.Model.SanPhamCheckOut.SanPhamCheckOutDTO;
import com.qlsb.start.Repository.SanPhamCheckOut.SanPhamCheckOutDTORepository;
import com.qlsb.start.Repository.SanPhamCheckOut.SanPhamCheckOutRepository;


@Service
public class SanPhamCheckOutService {

    @Autowired
    private SanPhamCheckOutRepository repo;
    @Autowired
    private SanPhamCheckOutDTORepository repoDTO;

    public List<SanPhamCheckOutDTO> getSanPhamCheckOutByIdCheckOut(int id){
        return repoDTO.getSanPhamCheckOutByIdCheckOut(id);
    }

    public SanPhamCheckOutDTO getSanPhamCheckOutById(int id){
        return repoDTO.getSanPhamCheckOutById(id);
    }

    public String addSanPhamCheckOut(SanPhamCheckOut sanPhamCheckOut){
        repo.save(sanPhamCheckOut);
        return "OK";
    }

    public String deleteSanPhamCheckOut(int id){
        repo.deleteById(id);
        return "OK";
    }
}
