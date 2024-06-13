package com.qlsb.start.Model.KhachHang;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class KhachHang {
    @Id
    private int id;
    private String ten;
    private String sdt;
    
    public KhachHang() {
    }

    
    public KhachHang(int id, String ten, String sdt) {
        this.id = id;
        this.ten = ten;
        this.sdt = sdt;
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


    public String getSdt() {
        return sdt;
    }


    public void setSdt(String sdt) {
        this.sdt = sdt;
    }
 
}
