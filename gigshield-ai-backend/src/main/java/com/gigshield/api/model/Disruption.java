package com.gigshield.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.time.Instant;

@Entity
public class Disruption {
    
    @Id
    private String id;
    private String zone;
    private String type;
    @jakarta.persistence.Column(name = "disruption_value")
    private String value;
    private String threshold;
    private boolean triggered;
    private Instant timestamp;

    public Disruption() {}

    public Disruption(String id, String zone, String type, String value, String threshold, boolean triggered, Instant timestamp) {
        this.id = id;
        this.zone = zone;
        this.type = type;
        this.value = value;
        this.threshold = threshold;
        this.triggered = triggered;
        this.timestamp = timestamp;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getZone() { return zone; }
    public void setZone(String zone) { this.zone = zone; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }

    public String getThreshold() { return threshold; }
    public void setThreshold(String threshold) { this.threshold = threshold; }

    public boolean isTriggered() { return triggered; }
    public void setTriggered(boolean triggered) { this.triggered = triggered; }

    public Instant getTimestamp() { return timestamp; }
    public void setTimestamp(Instant timestamp) { this.timestamp = timestamp; }
}
