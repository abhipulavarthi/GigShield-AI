package com.gigshield.api.controller;

import com.gigshield.api.model.Claim;
import com.gigshield.api.model.Disruption;
import com.gigshield.api.model.Worker;
import com.gigshield.api.model.Zone;
import com.gigshield.api.repository.ClaimRepository;
import com.gigshield.api.repository.DisruptionRepository;
import com.gigshield.api.repository.WorkerRepository;
import com.gigshield.api.repository.ZoneRepository;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.Collections;

@RestController
@CrossOrigin(origins = "*") // Allow React Frontend to connect
public class ApiController {

    private final WorkerRepository workerRepository;
    private final ZoneRepository zoneRepository;
    private final DisruptionRepository disruptionRepository;
    private final ClaimRepository claimRepository;

    public ApiController(WorkerRepository workerRepository, ZoneRepository zoneRepository, DisruptionRepository disruptionRepository, ClaimRepository claimRepository) {
        this.workerRepository = workerRepository;
        this.zoneRepository = zoneRepository;
        this.disruptionRepository = disruptionRepository;
        this.claimRepository = claimRepository;
    }

    @GetMapping("/workers")
    public List<Worker> getWorkers(@RequestParam(required = false) String id) {
        if (id != null) {
            Optional<Worker> worker = workerRepository.findById(id);
            return worker.map(Collections::singletonList).orElse(Collections.emptyList());
        }
        return workerRepository.findAll();
    }

    @GetMapping("/zones")
    public List<Zone> getZones(@RequestParam(required = false) String pincode) {
        if (pincode != null) {
            return zoneRepository.findByPincode(pincode);
        }
        return zoneRepository.findAll();
    }

    @GetMapping("/disruptions")
    public List<Disruption> getDisruptions(@RequestParam(required = false) String zone) {
        if (zone != null) {
            return disruptionRepository.findByZone(zone);
        }
        return disruptionRepository.findAll();
    }

    @GetMapping("/claims")
    public List<Claim> getClaims(@RequestParam(required = false) String worker_id) {
        if (worker_id != null) {
            return claimRepository.findByWorkerIdOrderByTimestampDesc(worker_id);
        }
        return claimRepository.findAll();
    }

    @PostMapping("/claims")
    public Claim submitClaim(@RequestBody Claim claim) {
        if (claim.getId() == null) {
            claim.setId(UUID.randomUUID().toString());
        }
        if (claim.getTimestamp() == null) {
            claim.setTimestamp(Instant.now());
        }
        claim.setStatus("FLAGGED"); // Always send to fraud queue for manual claims
        return claimRepository.save(claim);
    }
}
