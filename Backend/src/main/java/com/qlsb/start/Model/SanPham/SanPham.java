package com.qlsb.start.Model.SanPham;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class SanPham {
    @Id
    private int id;
    private String ten;
    private Float gia;
    private String anh,donViTinh;
    

    public SanPham() {
    }

    
    public SanPham(int id, String ten, Float gia, String anh, String donViTinh) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.anh = anh;
        this.donViTinh = donViTinh;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public Float getGia() {
        return gia;
    }

    public void setGia(Float gia) {
        this.gia = gia;
    }

    public String getAnh() {
        return anh;
    }

    public void setAnh(String anh) {
        this.anh = anh;
    }


    public String getDonViTinh() {
        return donViTinh;
    }


    public void setDonViTinh(String donViTinh) {
        this.donViTinh = donViTinh;
    }

    
}
