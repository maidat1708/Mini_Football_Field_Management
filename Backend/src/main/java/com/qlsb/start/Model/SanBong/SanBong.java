package com.qlsb.start.Model.SanBong;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class SanBong {
    @Id
    private int id;
    private String ten;
    private Float gia;
    
    public SanBong() {
    }

    public SanBong(int id, String ten, Float gia) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
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
 
}
