package com.qlsb.start.Service.PhieuDatDetail;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.qlsb.start.Model.PhieuDat.PhieuDat;
import com.qlsb.start.Model.PhieuDatDetail.PhieuDatDetail;
import com.qlsb.start.Service.CheckOut.TimeSlot;

public class PhieuDatConvertToPhieuDatDetail {
    public static List<PhieuDatDetail> convertToPhieuDatDetail(PhieuDat phieuDat){
        List<PhieuDatDetail> listPhieuDatDetails = new ArrayList<>();
        List<TimeSlot> listTimeSlots = new ArrayList<>();
        // DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        listTimeSlots = TimeSlot.getTimeSlots1(phieuDat.getNgayBatDau().toLocalDate(),phieuDat.getNgayKetThuc().toLocalDate(),Integer.parseInt(phieuDat.getCa()),Integer.parseInt(phieuDat.getThu()));
        for(TimeSlot t : listTimeSlots){
            LocalDateTime x = null;
            LocalDateTime y = null;
            if(Integer.parseInt(phieuDat.getCa()) == 1){
                x = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),8,0);
                y = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),10,0);
            }
            if(Integer.parseInt(phieuDat.getCa()) == 2){
                x = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),10,0);
                y = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),12,0);
            }
            if(Integer.parseInt(phieuDat.getCa()) == 3){
                x = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),14,0);
                y = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),16,0);
            }
            if(Integer.parseInt(phieuDat.getCa()) == 4){
                x = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),16,0);
                y = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),18,0);
            }
            if(Integer.parseInt(phieuDat.getCa()) == 5){
                x = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),18,0);
                y = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),20,0);
            }
            if(Integer.parseInt(phieuDat.getCa()) == 6){
                x = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),20,0);
                y = LocalDateTime.of(t.getDate().getYear(),t.getDate().getMonth(),t.getDate().getDayOfMonth(),22,0);
            }
            PhieuDatDetail phieuDatDetail = new PhieuDatDetail(phieuDat.getId(),Integer.parseInt(phieuDat.getCa()),Integer.parseInt(phieuDat.getThu()),x,y,phieuDat.getNgayDat());
            listPhieuDatDetails.add(phieuDatDetail);
        }
        return listPhieuDatDetails;
    }
    // public static void main(String[] args) {
    //     // convertToPhieuDatDetail(LocalDate.of(2024, 5, 21), LocalDate.of(2024, 7, 1), 1, 0);
    // }
}
