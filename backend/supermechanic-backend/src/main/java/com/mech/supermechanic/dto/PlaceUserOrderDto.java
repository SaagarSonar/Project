package com.mech.supermechanic.dto;

import com.mech.supermechanic.model.UserPortfolio;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PlaceUserOrderDto {
    List<UserPortfolioDto> userPortfolioDtoList;
}
