package com.qlsb.start.Model.CheckOut;

import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CheckOutDTO {
    @Id
    private Integer id;
    private Integer idPDDetail,idKH,idSB;
    private String ca,thu;
    private Float gia;
    private String tenKH,tenSan,sdt;
    private Date ngayDat;
    private LocalDateTime ngayBatDau,ngayKetThuc;

    public CheckOutDTO() {

    }
   

    public CheckOutDTO(Integer id, Integer idPDDetail, Integer idKH, Integer idSB, String ca, String thu, Float gia,
            String tenKH, String tenSan, String sdt, Date ngayDat, LocalDateTime ngayBatDau, LocalDateTime ngayKetThuc) {
        this.id = id;
        this.idPDDetail = idPDDetail;
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

    public Integer getIdPDDetail() {
        return idPDDetail;
    }

    public void setIdPDDetail(Integer idPDDetail) {
        this.idPDDetail = idPDDetail;
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


    public void setCa(String ca) {
        this.ca = ca;
    }


    public String getThu() {
        return thu;
    }


    public void setThu(String thu) {
        this.thu = thu;
    }


   


    public String getCa() {
        return ca;
    }


    @Override
    public String toString() {
        return "CheckOutDTO [id=" + id + ", idPDDetail=" + idPDDetail + ", idKH=" + idKH + ", idSB=" + idSB + ", ca=" + ca
                + ", thu=" + thu + ", gia=" + gia + ", tenKH=" + tenKH + ", tenSan=" + tenSan + ", sdt=" + sdt
                + ", ngayDat=" + ngayDat + ", ngayBatDau=" + ngayBatDau + ", ngayKetThuc=" + ngayKetThuc + "]";
    }


    public LocalDateTime getNgayBatDau() {
        return ngayBatDau;
    }


    public void setNgayBatDau(LocalDateTime ngayBatDau) {
        this.ngayBatDau = ngayBatDau;
    }


    public LocalDateTime getNgayKetThuc() {
        return ngayKetThuc;
    }


    public void setNgayKetThuc(LocalDateTime ngayKetThuc) {
        this.ngayKetThuc = ngayKetThuc;
    }
    
    
}
