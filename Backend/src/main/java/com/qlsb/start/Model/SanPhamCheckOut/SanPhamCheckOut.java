package com.qlsb.start.Model.SanPhamCheckOut;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class SanPhamCheckOut {
    @Id
    private Integer id;
    private Integer soLuong,idSP,idCO;

    public SanPhamCheckOut(){
            
    }

    

    public SanPhamCheckOut(Integer id, Integer soLuong, Integer idSP, Integer idCO) {
        this.id = id;
        this.soLuong = soLuong;
        this.idSP = idSP;
        this.idCO = idCO;
    }



    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
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

    
}
