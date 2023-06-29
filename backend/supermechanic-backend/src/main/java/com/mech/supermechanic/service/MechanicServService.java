package com.mech.supermechanic.service;

import com.mech.supermechanic.model.MechanicServ;
import com.mech.supermechanic.repository.MechanicServiceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class MechanicServService {
    @Autowired
    MechanicServiceRepository mechanicServiceRepository;

    public MechanicServ addMechanicService(MechanicServ mechanicServ) {
        try {
            return mechanicServiceRepository.save(mechanicServ);
        }catch (Exception e){
            log.error("Exception in addMechanicService with "+e.getCause());
        }
        return null;
    }

    public MechanicServ findById(Integer sid){
        Optional<MechanicServ> optionalMechanicServ = mechanicServiceRepository.findById(sid);
        return optionalMechanicServ.orElse(null);
    }

    public MechanicServ updateServiceDetails(MechanicServ mechanicServ) {
        Optional<MechanicServ> optionalMechanicServ =
                mechanicServiceRepository.findById(mechanicServ.getSid());
        if (optionalMechanicServ.isPresent()) {
            return mechanicServiceRepository.save(mechanicServ);
        }
        return null;
    }

    public List<MechanicServ> fetchallServicesOfCategory(String cateogry) {
        return mechanicServiceRepository.findByCategory(cateogry);
    }

    public List<MechanicServ> fetchallServices() {
        return mechanicServiceRepository.findAll();
    }

    @Transactional
    public void deleteService(Integer sid){
         mechanicServiceRepository.deleteById(sid);
    }
}
