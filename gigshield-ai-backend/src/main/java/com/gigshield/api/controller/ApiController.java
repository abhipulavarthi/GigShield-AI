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
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.HashMap;
import java.util.Collections;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
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

    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@RequestBody Worker worker) {
        try {
            if (worker.getPhone() == null || worker.getPhone().isEmpty()) {
                Map<String, String> err = new HashMap<>();
                err.put("message", "Phone number is required");
                return ResponseEntity.badRequest().body(err);
            }

            if (workerRepository.findByPhone(worker.getPhone()).isPresent()) {
                Map<String, String> err = new HashMap<>();
                err.put("message", "Phone number already registered");
                return ResponseEntity.status(409).body(err);
            }

            if (worker.getId() == null) {
                worker.setId(UUID.randomUUID().toString());
            }

            // Set default values for new workers if not provided
            if (worker.getTier() == null || worker.getTier() == 0) worker.setTier(1);
            if (worker.getTrustScore() == null || worker.getTrustScore() == 0) worker.setTrustScore(85);
            if (worker.getWeeklyEarnings() == null) worker.setWeeklyEarnings(0);
            if (worker.getPremium() == null) worker.setPremium(0);
            if (worker.isSafetyValveActive() == null) worker.setSafetyValveActive(true);
            
            Worker savedUser = workerRepository.save(worker);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            Map<String, String> err = new HashMap<>();
            err.put("message", "Signup error: " + e.getMessage());
            return ResponseEntity.status(500).body(err);
        }
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody Worker loginRequest) {
        try {
            Optional<Worker> workerOpt = workerRepository.findByPhone(loginRequest.getPhone());
            
            if (workerOpt.isPresent()) {
                Worker worker = workerOpt.get();
                if (worker.getPin().equals(loginRequest.getPin()) && 
                    worker.getRole().equalsIgnoreCase(loginRequest.getRole())) {
                    return ResponseEntity.ok(worker);
                }
            }
            Map<String, String> err = new HashMap<>();
            err.put("message", "Invalid credentials or unauthorized role");
            return ResponseEntity.status(401).body(err);
        } catch (Exception e) {
            Map<String, String> err = new HashMap<>();
            err.put("message", "Login error: " + e.getMessage());
            return ResponseEntity.status(500).body(err);
        }
    }

    @GetMapping("/workers")
    public List<Worker> getWorkers(@RequestParam(required = false) String id) {
        if (id != null) {
            Optional<Worker> worker = workerRepository.findById(id);
            return worker.map(Collections::singletonList).orElse(Collections.emptyList());
        }
        return workerRepository.findAll();
    }

    @PatchMapping("/workers/{id}")
    public ResponseEntity<?> patchWorker(@PathVariable String id, @RequestBody Map<String, Object> updates) {
        Optional<Worker> workerOpt = workerRepository.findById(id);
        if (workerOpt.isEmpty()) return ResponseEntity.notFound().build();
        
        Worker worker = workerOpt.get();
        if (updates.containsKey("tier")) worker.setTier((Integer) updates.get("tier"));
        if (updates.containsKey("premium")) worker.setPremium((Integer) updates.get("premium"));
        if (updates.containsKey("trustScore")) worker.setTrustScore((Integer) updates.get("trustScore"));
        if (updates.containsKey("weeklyEarnings")) worker.setWeeklyEarnings((Integer) updates.get("weeklyEarnings"));
        if (updates.containsKey("paymentStatus")) worker.setPaymentStatus((String) updates.get("paymentStatus"));
        if (updates.containsKey("lastPaymentDate")) worker.setLastPaymentDate((String) updates.get("lastPaymentDate"));
        
        workerRepository.save(worker);
        return ResponseEntity.ok(worker);
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
