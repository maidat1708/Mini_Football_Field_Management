package com.qlsb.start.Service.PhieuDat;

import java.util.ArrayList;
// import java.sql.Date;
// import java.sql.Timestamp;
// import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qlsb.start.Model.PhieuDat.PhieuDat;
import com.qlsb.start.Model.PhieuDat.PhieuDatDTO;
import com.qlsb.start.Repository.PhieuDat.PhieuDatRepository;

@Service
public class PhieuDatService {
    
    @Autowired
    private PhieuDatRepository repo;

    // public List<PhieuDat> getAllPhieuDat(){
    //     List<Object[]> list = repo.getAllPhieuDat();
    //     List<PhieuDat> listPD = new ArrayList<>();
    //     for(int i = 0 ; i < list.size();i++){
    //         PhieuDat pd = new PhieuDat();
    //             pd.setId(Integer.parseInt(list.get(i)[0].toString()));
    //             pd.setTenKH(list.get(i)[1].toString());
    //             pd.setTenSan(list.get(i)[2].toString());
    //             pd.setCa(Integer.parseInt(list.get(i)[3].toString()));
    //             pd.setNgayDat((Date)list.get(i)[4]);
    //         listPD.add(pd);
    //         System.out.println(pd);
    //     }
    //     return listPD;
    // }
    // private Integer id;
    // private Integer idKH,idSB;
    // private String ca,thu;
    // private Float gia;
    // private String tenKH,tenSan,sdt;
    // private Date ngayDat,ngayBatDau,ngayKetThuc;
    public List<PhieuDatDTO> getAllPhieuDat(){
        List<PhieuDat> listPD = repo.getAllPhieuDat();
        List<PhieuDatDTO> listPDDTO = new ArrayList<>();
        for(PhieuDat pd : listPD){
            PhieuDatDTO pDatDTO = new PhieuDatDTO(pd.getId(),pd.getIdKH(),pd.getIdSB(),null,null,pd.getGia(),pd.getTenKH(),pd.getTenSan(),pd.getSdt(),pd.getNgayDat(),pd.getNgayBatDau(),pd.getNgayKetThuc());
            String[] arrCa = pd.getCa().split(",");
            String[] arrThu = pd.getThu().split(",");
            List<Integer> ca = new ArrayList<>();
            List<Integer> thu = new ArrayList<>();
            for(String s : arrCa){
                ca.add(Integer.parseInt(s));
            }
            for(String s : arrThu){
                thu.add(Integer.parseInt(s));
            }
            pDatDTO.setCa(ca);
            pDatDTO.setThu(thu);
            listPDDTO.add(pDatDTO);
        }
        return listPDDTO;
    }
    
    public PhieuDat getAllPhieuDatById(int id){
        return repo.getPhieuDatById(id);
    }
    public List<PhieuDatDTO> getAllPhieuDatByTenKH(String ten){
        List<PhieuDat> listPD = repo.getAllPhieuDatByTenKH(ten);
        List<PhieuDatDTO> listPDDTO = new ArrayList<>();
        for(PhieuDat pd : listPD){
            PhieuDatDTO pDatDTO = new PhieuDatDTO(pd.getId(),pd.getIdKH(),pd.getIdSB(),null,null,pd.getGia(),pd.getTenKH(),pd.getTenSan(),pd.getSdt(),pd.getNgayDat(),pd.getNgayBatDau(),pd.getNgayKetThuc());
            String[] arrCa = pd.getCa().split(",");
            String[] arrThu = pd.getThu().split(",");
            List<Integer> ca = new ArrayList<>();
            List<Integer> thu = new ArrayList<>();
            for(String s : arrCa){
                ca.add(Integer.parseInt(s));
            }
            for(String s : arrThu){
                thu.add(Integer.parseInt(s));
            }
            pDatDTO.setCa(ca);
            pDatDTO.setThu(thu);
            listPDDTO.add(pDatDTO);
        }
        return listPDDTO;
    }
    public String addPhieuDat(PhieuDat phieuDat){
        repo.save(phieuDat);
        return "OK add PhieuDat";
    }

    public String updatePhieuDat(PhieuDat phieuDat){
        repo.save(phieuDat);
        return "OK update PhieuDat";
    }

    public String deletePhieuDat(int id){
        repo.deleteById(id);
        return "OK delete PhieuDat";
    }
}
