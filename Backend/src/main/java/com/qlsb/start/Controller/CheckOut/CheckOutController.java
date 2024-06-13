package com.qlsb.start.Controller.CheckOut;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qlsb.start.Model.CheckOut.CheckOut;
import com.qlsb.start.Model.CheckOut.CheckOutDTO;
import com.qlsb.start.Model.CheckOut.CheckOutDTO2;
import com.qlsb.start.Service.CheckOut.CheckOutService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@CrossOrigin
@Controller
public class CheckOutController {

   @Autowired 
    private CheckOutService service;

    @ResponseBody
    @GetMapping("/checkouts")   
    public List<CheckOut> getAllCheckOut() {
        return service.getAllCheckOut() ;
    }

    @ResponseBody
    @GetMapping("/getcheckoutdetail/{id}")
    public CheckOutDTO getCheckOutDetailById(@PathVariable int id) {
        return service.getCheckOutDetailById(id);
    }

    @ResponseBody
    @PostMapping("/addcheckout")
    public String addCheckOut(@RequestBody CheckOut co){
        return service.addCheckOut(co);
    }

    @ResponseBody
    @DeleteMapping("/deletecheckout")
    public String deleteCheckOut(@RequestBody CheckOut co){
        return service.deleteCheckOut(co.getId());
    }
}
