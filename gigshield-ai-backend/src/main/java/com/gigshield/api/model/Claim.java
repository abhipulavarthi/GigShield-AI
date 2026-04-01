package com.gigshield.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.time.Instant;

@Entity
public class Claim {
    
    @Id
    private String id;
    private String workerId;
    private String disruptionType;
    private int amount;
    private int ccssScore;
    private String status;
    private Instant timestamp;

    public Claim() {}

    public Claim(String id, String workerId, String disruptionType, int amount, int ccssScore, String status, Instant timestamp) {
        this.id = id;
        this.workerId = workerId;
        this.disruptionType = disruptionType;
        this.amount = amount;
        this.ccssScore = ccssScore;
        this.status = status;
        this.timestamp = timestamp;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getWorkerId() { return workerId; }
    public void setWorkerId(String workerId) { this.workerId = workerId; }

    public String getDisruptionType() { return disruptionType; }
    public void setDisruptionType(String disruptionType) { this.disruptionType = disruptionType; }

    public int getAmount() { return amount; }
    public void setAmount(int amount) { this.amount = amount; }

    public int getCcssScore() { return ccssScore; }
    public void setCcssScore(int ccssScore) { this.ccssScore = ccssScore; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Instant getTimestamp() { return timestamp; }
    public void setTimestamp(Instant timestamp) { this.timestamp = timestamp; }
}
