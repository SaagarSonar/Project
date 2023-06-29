package com.mech.supermechanic.controller;

import com.mech.supermechanic.dto.PlaceUserOrderDto;
import com.mech.supermechanic.dto.UserPortfolioDto;
import com.mech.supermechanic.dto.UserPortfolioFetchDto;
import com.mech.supermechanic.dto.UserPortfolioStatusUpdateDto;
import com.mech.supermechanic.model.UserPortfolio;
import com.mech.supermechanic.service.UserPortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserPortfolioController {
    @Autowired
    UserPortfolioService userPortfolioService;

    @PostMapping("/addservicetouser")
    public UserPortfolio addServicetoUser(@RequestBody UserPortfolioDto userPortfolio) {
        return userPortfolioService.addServicetoUser(userPortfolio);
    }

    @PostMapping("/fetchserviceofuser")
    public List<UserPortfolio> fetchServicesOfUser(@RequestBody UserPortfolioFetchDto userPortfolioFetchDto) {
        return userPortfolioService.fetchServicesOfUser(userPortfolioFetchDto);
    }

    @GetMapping("/fetchallorderedservices")
    public List<UserPortfolio> fetchAllUserPortfolioRecords() {
        return userPortfolioService.fetchAllUserPortfolioRecords();
    }

    @PostMapping("/updateuserservicestatus")
    public Integer updateStatusOfUserAvailedService(@RequestBody UserPortfolioStatusUpdateDto userPortfolioStatusUpdateDto) {
        return userPortfolioService.updateStatusOfUserAvailedService(userPortfolioStatusUpdateDto);
    }

    @PostMapping("/submitorder")
    public void addListOfOrders(@RequestBody PlaceUserOrderDto placeUserOrderDto){
        userPortfolioService.addListOfOrders(placeUserOrderDto);
    }
}
