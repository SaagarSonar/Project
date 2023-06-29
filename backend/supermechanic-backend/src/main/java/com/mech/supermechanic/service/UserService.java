package com.mech.supermechanic.service;

import com.mech.supermechanic.dto.SigninDto;
import com.mech.supermechanic.model.User;
import com.mech.supermechanic.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    public void authenticate() {

    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User fetchUser(Integer id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            return userOptional.get();
        }
        return null;
    }

    public List<User> fetchAllUsers() {
        return userRepository.findAll();
    }

    public User signIn(SigninDto signinDto){
        return userRepository.findByEmailAndPassword(signinDto.getEmail(),signinDto.getPassword());
    }

    @Override
    public UserDetails loadUserByUsername(String email){
        User user = userRepository.findByEmail(email);
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),new ArrayList<>());
    }
}

