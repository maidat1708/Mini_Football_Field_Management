package com.qlsb.start.Controller.ThongKe;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qlsb.start.Model.ThongKe.ThongKeRequest;
import com.qlsb.start.Model.ThongKe.ThongKeSanBong;
import com.qlsb.start.Service.ThongKe.ThongKeService;

@CrossOrigin
@RestController
public class ThongKeController {
    @Autowired
    private ThongKeService service;

    @GetMapping("/thongkesanbong")
    public List<ThongKeSanBong> thongKeSanBongs(){
        return service.thongKeSanBong1();
    }

    @PostMapping("/thongkesanbong")
    public List<ThongKeSanBong> thongKeSanBong(@RequestBody ThongKeRequest thongKeRequest){
        return service.thongKeSanBong(thongKeRequest);
    }
}
