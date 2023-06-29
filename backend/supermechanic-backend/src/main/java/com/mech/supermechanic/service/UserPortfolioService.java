package com.mech.supermechanic.service;

import com.mech.supermechanic.dto.PlaceUserOrderDto;
import com.mech.supermechanic.dto.UserPortfolioDto;
import com.mech.supermechanic.dto.UserPortfolioFetchDto;
import com.mech.supermechanic.dto.UserPortfolioStatusUpdateDto;
import com.mech.supermechanic.model.MechanicServ;
import com.mech.supermechanic.model.User;
import com.mech.supermechanic.model.UserPortfolio;
import com.mech.supermechanic.repository.MechanicServiceRepository;
import com.mech.supermechanic.repository.UserPortfolioRepository;
import com.mech.supermechanic.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserPortfolioService {

    @Autowired
    UserPortfolioRepository userPortfolioRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MechanicServiceRepository mechanicServiceRepository;


    public UserPortfolio addServicetoUser(UserPortfolioDto userPortfolioDto) {
        Optional<User> optionalUser = userRepository.findById(userPortfolioDto.getSid());
        User user = null;
        if (optionalUser.isPresent()) {
            user = optionalUser.get();
        }

        Optional<MechanicServ> optionalMechanicServ =
                mechanicServiceRepository.findById(userPortfolioDto.getSid());
        MechanicServ mechanicServ = null;
        if (optionalMechanicServ.isPresent()) {
            mechanicServ = optionalMechanicServ.get();
        }

        if (user == null || mechanicServ == null) {
            return null;
        }
        UserPortfolio userPortfolio = new UserPortfolio();
        userPortfolio.setStatus("pending");
        userPortfolio.setUid(user);
        userPortfolio.setSid(mechanicServ);
        return userPortfolioRepository.save(userPortfolio);

    }

    public List<UserPortfolio> fetchServicesOfUser(UserPortfolioFetchDto userPortfolioFetchDto) {
        return userPortfolioRepository.findByUidId(userPortfolioFetchDto.getUserId());
    }

    public List<UserPortfolio> fetchAllUserPortfolioRecords() {
        return userPortfolioRepository.findAll();
    }

    public List<UserPortfolio> fetchMyUserPortfolioRecords() {
        return userPortfolioRepository.findAll();
    }

    @Transactional
    public Integer updateStatusOfUserAvailedService(UserPortfolioStatusUpdateDto userPortfolioStatusUpdateDto) {
        return userPortfolioRepository.updateStatusByUidAndSid
                (userPortfolioStatusUpdateDto.getNewStatus(), userPortfolioStatusUpdateDto.getUserId(), userPortfolioStatusUpdateDto.getServiceId());
    }

    public void addListOfOrders(@RequestBody PlaceUserOrderDto placeUserOrderDto) {
        for(UserPortfolioDto userPortfolioDto: placeUserOrderDto.getUserPortfolioDtoList()){
            UserPortfolio userPortfolio = new UserPortfolio();

            Integer uid = userPortfolioDto.getUid();
            Optional<User> userOptional = userRepository.findById(uid);
            userOptional.ifPresent(userPortfolio::setUid);

            Integer sid = userPortfolioDto.getSid();
            Optional<MechanicServ> optionalMechanicServ = mechanicServiceRepository.findById(sid);
            optionalMechanicServ.ifPresent(userPortfolio::setSid);

            userPortfolio.setStatus(userPortfolioDto.getStatus());

            userPortfolioRepository.save(userPortfolio);
        }
    }

    @Transactional
    public void deleteServiceOrders(MechanicServ sid){
        userPortfolioRepository.deleteBySid(sid);

    }
}
