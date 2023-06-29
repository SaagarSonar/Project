package com.mech.supermechanic.dto;

import com.mech.supermechanic.model.User;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginResponse {
    User user;
    String token;
}
