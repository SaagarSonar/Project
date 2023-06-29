package com.mech.supermechanic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPortfolioStatusUpdateDto {
    Integer userId;
    Integer serviceId;
    String newStatus;
}
