package com.qlsb.start.Model.PhieuDatDetail;

import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PhieuDatDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int idPD,ca,thu;
    private LocalDateTime batDau,ketThuc;
    private Date ngayDat;
    
    public PhieuDatDetail() {
    }
    
    public PhieuDatDetail(int id, int idPD, int ca, int thu, LocalDateTime batDau, LocalDateTime ketThuc, Date ngayDat) {
        this.id = id;
        this.idPD = idPD;
        this.ca = ca;
        this.thu = thu;
        this.batDau = batDau;
        this.ketThuc = ketThuc;
        this.ngayDat = ngayDat;
    }

    public PhieuDatDetail( int idPD, int ca, int thu, LocalDateTime batDau, LocalDateTime ketThuc, Date ngayDat) {
        this.idPD = idPD;
        this.ca = ca;
        this.thu = thu;
        this.batDau = batDau;
        this.ketThuc = ketThuc;
        this.ngayDat = ngayDat;
    }

    public int getIdPD() {
        return idPD;
    }
    public void setIdPD(int idPD) {
        this.idPD = idPD;
    }
    public int getCa() {
        return ca;
    }
    public void setCa(int ca) {
        this.ca = ca;
    }
    public int getThu() {
        return thu;
    }
    public void setThu(int thu) {
        this.thu = thu;
    }
   
    public Date getNgayDat() {
        return ngayDat;
    }
    public void setNgayDat(Date ngayDat) {
        this.ngayDat = ngayDat;
    }

    public LocalDateTime getBatDau() {
        return batDau;
    }

    public void setBatDau(LocalDateTime batDau) {
        this.batDau = batDau;
    }

    public LocalDateTime getKetThuc() {
        return ketThuc;
    }

    public void setKetThuc(LocalDateTime ketThuc) {
        this.ketThuc = ketThuc;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }  
}
