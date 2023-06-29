package com.mech.supermechanic.repository;

import com.mech.supermechanic.model.MechanicServ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MechanicServiceRepository extends JpaRepository<MechanicServ, Integer> {
    List<MechanicServ> findByCategory(String category);
}
