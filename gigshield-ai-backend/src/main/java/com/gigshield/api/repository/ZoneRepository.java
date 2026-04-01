package com.gigshield.api.repository;

import com.gigshield.api.model.Zone;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ZoneRepository extends JpaRepository<Zone, String> {
    List<Zone> findByPincode(String pincode);
}
