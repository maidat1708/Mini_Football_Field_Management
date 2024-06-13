package com.qlsb.start.Service.CheckOut;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.CheckOut.CheckOut;
import com.qlsb.start.Model.CheckOut.CheckOutDTO;
import com.qlsb.start.Repository.CheckOut.CheckOutDTORepository;
import com.qlsb.start.Repository.CheckOut.CheckOutRepository;

@Service
public class CheckOutService {

    @Autowired
    private CheckOutRepository repo;
    @Autowired
    private CheckOutDTORepository repoDTO;

    public List<CheckOut> getAllCheckOut() {
        return repo.findAll();
    }

    public CheckOutDTO getCheckOutDetailById(int id) {
        return repoDTO.getCheckOutDetailById(id);
    }

    public String addCheckOut(CheckOut co) {
        repo.save(co);
        return "OK";
    }

    public String deleteCheckOut(int id) {
        repo.deleteById(id);
        return "OK";
    }
}
