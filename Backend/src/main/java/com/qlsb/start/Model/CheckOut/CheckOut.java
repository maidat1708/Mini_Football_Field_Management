package com.qlsb.start.Model.CheckOut;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CheckOut {
    @Id
    private Integer id;
    private Integer idPD;

    public CheckOut() {

    }

    public CheckOut(Integer id, Integer idPD) {
        this.id = id;
        this.idPD = idPD;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdPD() {
        return idPD;
    }

    public void setIdPD(Integer idPD) {
        this.idPD = idPD;
    }


}
