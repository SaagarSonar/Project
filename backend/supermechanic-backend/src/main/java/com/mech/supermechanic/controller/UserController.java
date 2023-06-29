package com.mech.supermechanic.controller;

import com.mech.supermechanic.configuration.JavawebtokenUtility;
import com.mech.supermechanic.dto.LoginResponse;
import com.mech.supermechanic.dto.SigninDto;
import com.mech.supermechanic.dto.UserFetchDto;
import com.mech.supermechanic.model.User;
import com.mech.supermechanic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JavawebtokenUtility jwtUtility;

    @PostMapping("/register")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/fetchallusers")
    public List<User> fetchAllUsers() {
        return userService.fetchAllUsers();
    }

    @PostMapping("/fetchuser")
    public User fetchUser(@RequestBody UserFetchDto userFetchDto) {
        return userService.fetchUser(userFetchDto.getId());
    }

    @PostMapping("/signin")
    public LoginResponse signin(@RequestBody SigninDto signinDto) throws Exception {
        User user = userService.signIn(signinDto);

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            signinDto.getEmail(),
                            signinDto.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

        final UserDetails userDetails
                = userService.loadUserByUsername(signinDto.getEmail());

        final String token =
                jwtUtility.generateToken(userDetails);

        return new LoginResponse(user,token);
    }
}
