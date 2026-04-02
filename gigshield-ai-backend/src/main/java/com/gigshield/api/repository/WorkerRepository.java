package com.gigshield.api.repository;

import com.gigshield.api.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WorkerRepository extends JpaRepository<Worker, String> {
    Optional<Worker> findByPhone(String phone);
}
