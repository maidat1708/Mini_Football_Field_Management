package com.qlsb.start.Service.ThongKe;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.SanBong.SanBong;
import com.qlsb.start.Model.SanPhamCheckOut.SanPhamCheckOutDTO;
import com.qlsb.start.Model.ThongKe.ThongKeRequest;
import com.qlsb.start.Model.ThongKe.ThongKeSanBong;
import com.qlsb.start.Repository.SanBong.SanBongRepository;
import com.qlsb.start.Repository.SanPhamCheckOut.SanPhamCheckOutDTORepository;

@Service
public class ThongKeService {
    @Autowired
    private SanBongRepository repo;
    @Autowired
    private SanPhamCheckOutDTORepository repoSPCO;
    public List<ThongKeSanBong> thongKeSanBong1(){
        List<ThongKeSanBong> listTK = new ArrayList<>();
        List<SanBong> listSB = repo.findAll();
        for(SanBong sb : listSB){
            List<Object[]> list = repo.thongKeSanBong(sb.getId(),null,null);
            List<Object[]> list2 = repo.thongKeSanBongChuaCO(sb.getId(), null, null);
            long sumTienThueSP = 0;
            for(int i = 0 ; i < list.size(); i++){
                List<SanPhamCheckOutDTO> listSPCO = repoSPCO.getSanPhamCheckOutByIdCheckOut(Integer.parseInt(String.valueOf(list.get(i)[0])));
                for(SanPhamCheckOutDTO spco : listSPCO){
                    sumTienThueSP += spco.getSoLuong()*spco.getGia();
                } 
            }
            long tienThueSan = 0;
            if(list.size()> 0){
                tienThueSan = 2*list.size()*(long)(Double.parseDouble(String.valueOf(list.get(0)[9])));
            }
            ThongKeSanBong thongKeSanBong = new ThongKeSanBong();
            thongKeSanBong.setIdSB(sb.getId());
            thongKeSanBong.setTenSan(sb.getTen());
            thongKeSanBong.setSoLanDatChuaCO(list2.size()- list.size());
            thongKeSanBong.setSoLanDat(list.size());
            thongKeSanBong.setDoanhThu(tienThueSan+sumTienThueSP);
            listTK.add(thongKeSanBong);
        }
        return listTK;
    }
    public List<ThongKeSanBong> thongKeSanBong(ThongKeRequest thongKeRequest){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime tuNgay = LocalDateTime.parse(thongKeRequest.getTuNgay(),formatter);
        LocalDateTime toiNgay = LocalDateTime.parse(thongKeRequest.getToiNgay(),formatter);
        List<ThongKeSanBong> listTK = new ArrayList<>();
        List<SanBong> listSB = repo.findAll();
        for(SanBong sb : listSB){
            List<Object[]> list = repo.thongKeSanBong(sb.getId(),tuNgay,toiNgay);
            List<Object[]> list2 = repo.thongKeSanBongChuaCO(sb.getId(), tuNgay, toiNgay);
            long sumTienThueSP = 0;
            for(int i = 0 ; i < list.size(); i++){
                List<SanPhamCheckOutDTO> listSPCO = repoSPCO.getSanPhamCheckOutByIdCheckOut(Integer.parseInt(String.valueOf(list.get(i)[0])));
                for(SanPhamCheckOutDTO spco : listSPCO){
                    sumTienThueSP += spco.getSoLuong()*spco.getGia();
                } 
            }
            long tienThueSan = 0;
            if(list.size()> 0){
                tienThueSan = 2*list.size()*(long)(Double.parseDouble(String.valueOf(list.get(0)[9])));
            }
            ThongKeSanBong thongKeSanBong = new ThongKeSanBong();
            thongKeSanBong.setIdSB(sb.getId());
            thongKeSanBong.setTenSan(sb.getTen());
            thongKeSanBong.setSoLanDatChuaCO(list2.size()- list.size());
            thongKeSanBong.setSoLanDat(list.size());
            thongKeSanBong.setDoanhThu(tienThueSan+sumTienThueSP);
            thongKeSanBong.setTuNgay(tuNgay);
            thongKeSanBong.setToiNgay(toiNgay);
            listTK.add(thongKeSanBong);
        }
        return listTK;
    }
}
