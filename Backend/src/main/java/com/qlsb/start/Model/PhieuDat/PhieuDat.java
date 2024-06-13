package com.qlsb.start.Model.PhieuDat;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class PhieuDat {
    @Id
    private Integer id;
    private Integer idKH,idSB;
    private String ca,thu;
    private Float gia;
    private String tenKH,tenSan,sdt;
    private Date ngayDat,ngayBatDau,ngayKetThuc;



    
    @Override
    public String toString() {
        return "PhieuDat [id=" + id + ", idKH=" + idKH + ", idSB=" + idSB + ", ca=" + ca + ", gia=" + gia + ", tenKH="
                + tenKH + ", tenSan=" + tenSan + ", sdt=" + sdt + ", ngayDat=" + ngayDat + "]";
    }


    public PhieuDat() {
    }

    public PhieuDat(Integer id, Integer idKH, Integer idSB, String ca, String thu, Float gia, String tenKH,
            String tenSan, String sdt, Date ngayDat, Date ngayBatDau, Date ngayKetThuc) {
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


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }

    public Date getNgayDat() {
        return ngayDat;
    }


    public void setNgayDat(Date ngayDat) {
        this.ngayDat = ngayDat;
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

    public Float getGia() {
        return gia;
    }

    public void setGia(Float gia) {
        this.gia = gia;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
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


    public String getCa() {
        return ca;
    }


    public void setCa(String ca) {
        this.ca = ca;
    }


    public String getThu() {
        return thu;
    }


    public void setThu(String thu) {
        this.thu = thu;
    }
    
}
