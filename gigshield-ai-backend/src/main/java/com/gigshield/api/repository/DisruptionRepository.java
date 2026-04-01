package com.gigshield.api.repository;

import com.gigshield.api.model.Disruption;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DisruptionRepository extends JpaRepository<Disruption, String> {
    List<Disruption> findByZone(String zone);
}
