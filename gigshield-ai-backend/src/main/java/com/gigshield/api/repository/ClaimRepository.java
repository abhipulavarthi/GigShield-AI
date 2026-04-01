package com.gigshield.api.repository;

import com.gigshield.api.model.Claim;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClaimRepository extends JpaRepository<Claim, String> {
    List<Claim> findByWorkerIdOrderByTimestampDesc(String workerId);
    List<Claim> findByWorkerId(String workerId);
}
