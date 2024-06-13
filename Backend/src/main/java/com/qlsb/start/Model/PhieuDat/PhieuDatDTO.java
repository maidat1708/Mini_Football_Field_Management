package com.qlsb.start.Model.PhieuDat;

import java.sql.Date;
import java.util.List;

public class PhieuDatDTO {
    private Integer id;
    private Integer idKH,idSB;
    private List<Integer> ca; List<Integer> thu; 
    private Float gia;
    private String tenKH,tenSan,sdt;
    private Date ngayDat,ngayBatDau,ngayKetThuc;

    
    public PhieuDatDTO() {
    }

    
    public PhieuDatDTO(Integer id, Integer idKH, Integer idSB, List<Integer> ca, List<Integer> thu, Float gia,
            String tenKH, String tenSan, String sdt, Date ngayDat, Date ngayBatDau, Date ngayKetThuc) {
        this.id = id;
        this.idKH = idKH;
        this.idSB = idSB;
        this.ca = ca;
        this.thu = thu;
        this.gia = gia;
        this.tenKH = tenKH;
        this.tenSan = tenSan;
        this.sdt = sdt;
        this.ngayDat = ngayDat;
        this.ngayBatDau = ngayBatDau;
        this.ngayKetThuc = ngayKetThuc;
    }


    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Integer getIdKH() {
        return idKH;
    }
    public void setIdKH(Integer idKH) {
        this.idKH = idKH;
    }
    public Integer getIdSB() {
        return idSB;
    }
    public void setIdSB(Integer idSB) {
        this.idSB = idSB;
    }
    public List<Integer> getCa() {
        return ca;
    }
    public void setCa(List<Integer> ca) {
        this.ca = ca;
    }
    public List<Integer> getThu() {
        return thu;
    }
    public void setThu(List<Integer> thu) {
        this.thu = thu;
    }
    public Float getGia() {
        return gia;
    }
    public void setGia(Float gia) {
        this.gia = gia;
    }
    public String getTenKH() {
        return tenKH;
    }
    public void setTenKH(String tenKH) {
        this.tenKH = tenKH;
    }
    public String getTenSan() {
        return tenSan;
    }
    public void setTenSan(String tenSan) {
        this.tenSan = tenSan;
    }
    public String getSdt() {
        return sdt;
    }
    public void setSdt(String sdt) {
        this.sdt = sdt;
    }
    public Date getNgayDat() {
        return ngayDat;
    }
    public void setNgayDat(Date ngayDat) {
        this.ngayDat = ngayDat;
    }
    public Date getNgayBatDau() {
        return ngayBatDau;
    }
    public void setNgayBatDau(Date ngayBatDau) {
        this.ngayBatDau = ngayBatDau;
    }
    public Date getNgayKetThuc() {
        return ngayKetThuc;
    }
    public void setNgayKetThuc(Date ngayKetThuc) {
        this.ngayKetThuc = ngayKetThuc;
    }

    
}
