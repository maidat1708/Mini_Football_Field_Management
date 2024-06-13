package com.qlsb.start.Model.ThongKe;

import java.time.LocalDateTime;

public class ThongKeRequest {
    private String tuNgay,toiNgay;
    
    public ThongKeRequest() {
    }
    
    public ThongKeRequest(String tuNgay, String toiNgay) {
        this.tuNgay = tuNgay;
        this.toiNgay = toiNgay;
    }
    public String getTuNgay() {
        return tuNgay;
    }
    public void setTuNgay(String tuNgay) {
        this.tuNgay = tuNgay;
    }
    public String getToiNgay() {
        return toiNgay;
    }
    public void setToiNgay(String toiNgay) {
        this.toiNgay = toiNgay;
    }
    
}
