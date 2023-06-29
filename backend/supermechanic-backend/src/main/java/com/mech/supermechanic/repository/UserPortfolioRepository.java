package com.mech.supermechanic.repository;

import com.mech.supermechanic.model.MechanicServ;
import com.mech.supermechanic.model.UserPortfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserPortfolioRepository extends JpaRepository<UserPortfolio, Integer> {
    @Modifying
    @Query("UPDATE UserPortfolio up SET up.status = :newStatus WHERE up.uid.id = :userId AND up.sid.sid = :serviceId")
    int updateStatusByUidAndSid(@Param("newStatus") String newStatus, @Param("userId") Integer userId, @Param("serviceId") Integer serviceId);

    List<UserPortfolio> findByUidId(Integer userId);

    void deleteBySid(MechanicServ sid);

}
