package com.mech.supermechanic.controller;

import com.mech.supermechanic.dto.ServiceDeleteRequestDto;
import com.mech.supermechanic.dto.ServiceFetchCategoryDto;
import com.mech.supermechanic.dto.ServiceFetchDto;
import com.mech.supermechanic.model.MechanicServ;
import com.mech.supermechanic.service.MechanicServService;
import com.mech.supermechanic.service.UserPortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class MechanicServiceController {

    @Autowired
    MechanicServService mechanicServService;

    @Autowired
    UserPortfolioService userPortfolioService;

    @PostMapping("/registerservice")
    public MechanicServ addService(@RequestBody MechanicServ mechanicServ) {
        return mechanicServService.addMechanicService(mechanicServ);
    }

    @PostMapping("/updateService")
    public MechanicServ updateService(@RequestBody MechanicServ mechanicServ) {
        return mechanicServService.updateServiceDetails(mechanicServ);
    }

    @PostMapping("/fetchcategoryservice")
    public List<MechanicServ> fetchallServicesOfCategory(@RequestBody ServiceFetchCategoryDto serviceFetchCategoryDto) {
        return mechanicServService.fetchallServicesOfCategory(serviceFetchCategoryDto.getCategory());
    }

    @GetMapping("/fetchallservices")
    public List<MechanicServ> fetchallServices() {
        return mechanicServService.fetchallServices();
    }

    @PostMapping("/deleteservice")
    public List<MechanicServ> deleteservice(@RequestBody ServiceDeleteRequestDto serviceDeleteRequestDto) {
        MechanicServ mechanicServ = mechanicServService.findById(serviceDeleteRequestDto.getSid());
        userPortfolioService.deleteServiceOrders(mechanicServ);
        mechanicServService.deleteService(serviceDeleteRequestDto.getSid());
        return mechanicServService.fetchallServices();
    }

    @PostMapping("/fetchservice")
    public MechanicServ fetchService(@RequestBody ServiceFetchDto serviceFetchDto){
        return mechanicServService.findById(serviceFetchDto.getSid());
    }
}
