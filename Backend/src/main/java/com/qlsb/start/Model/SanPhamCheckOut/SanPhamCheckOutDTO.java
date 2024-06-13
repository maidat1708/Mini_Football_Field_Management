package com.qlsb.start.Model.SanPhamCheckOut;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class SanPhamCheckOutDTO {
    @Id
    private Integer id;
    private String tenSP,donViTinh;
    private Integer soLuong,idSP,idCO;
    private Float gia;

    public SanPhamCheckOutDTO(){
        
    }
    
    public SanPhamCheckOutDTO(Integer id, String tenSP, String donViTinh, Integer soLuong, Integer idSP, Integer idCO,
            Float gia) {
        this.id = id;
        this.tenSP = tenSP;
        this.donViTinh = donViTinh;
        this.soLuong = soLuong;
        this.idSP = idSP;
        this.idCO = idCO;
        this.gia = gia;
    }


    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }


    public String getTenSP() {
        return tenSP;
    }


    public void setTenSP(String tenSP) {
        this.tenSP = tenSP;
    }


    public String getDonViTinh() {
        return donViTinh;
    }


    public void setDonViTinh(String donViTinh) {
        this.donViTinh = donViTinh;
    }


    public Integer getSoLuong() {
        return soLuong;
    }


    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }


    public Integer getIdSP() {
        return idSP;
    }


    public void setIdSP(Integer idSP) {
        this.idSP = idSP;
    }


    public Integer getIdCO() {
        return idCO;
    }


    public void setIdCO(Integer idCO) {
        this.idCO = idCO;
    }


    public Float getGia() {
        return gia;
    }


    public void setGia(Float gia) {
        this.gia = gia;
    }

    
}
