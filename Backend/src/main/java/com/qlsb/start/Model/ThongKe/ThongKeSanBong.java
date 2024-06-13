package com.qlsb.start.Model.ThongKe;

import java.time.LocalDateTime;

public class ThongKeSanBong {
    private int idSB;
    private String tenSan;
    private int soLanDat;
    private int soLanDatChuaCO;
    private Long doanhThu;
    private LocalDateTime tuNgay, toiNgay;
    
    public ThongKeSanBong() {
    }
    
    

    public ThongKeSanBong(int idSB, String tenSan, int soLanDat, int soLanDatChuaCO, Long doanhThu,
            LocalDateTime tuNgay, LocalDateTime toiNgay) {
        this.idSB = idSB;
        this.tenSan = tenSan;
        this.soLanDat = soLanDat;
        this.soLanDatChuaCO = soLanDatChuaCO;
        this.doanhThu = doanhThu;
        this.tuNgay = tuNgay;
        this.toiNgay = toiNgay;
    }



    public String getTenSan() {
        return tenSan;
    }
    public void setTenSan(String tenSan) {
        this.tenSan = tenSan;
    }
    public int getSoLanDat() {
        return soLanDat;
    }
    public void setSoLanDat(int soLanDat) {
        this.soLanDat = soLanDat;
    }
    public Long getDoanhThu() {
        return doanhThu;
    }
    public void setDoanhThu(Long doanhThu) {
        this.doanhThu = doanhThu;
    }
    public LocalDateTime getTuNgay() {
        return tuNgay;
    }
    public void setTuNgay(LocalDateTime tuNgay) {
        this.tuNgay = tuNgay;
    }
    public LocalDateTime getToiNgay() {
        return toiNgay;
    }
    public void setToiNgay(LocalDateTime toiNgay) {
        this.toiNgay = toiNgay;
    }

    public int getIdSB() {
        return idSB;
    }

    public void setIdSB(int idSB) {
        this.idSB = idSB;
    }



    public int getSoLanDatChuaCO() {
        return soLanDatChuaCO;
    }



    public void setSoLanDatChuaCO(int soLanDatChuaCO) {
        this.soLanDatChuaCO = soLanDatChuaCO;
    }

    
}
