package com.gigshield.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "zones")
public class Zone {
    
    @Id
    private String id;
    private String pincode;
    private String city;
    private int tier;
    private String riskLevel;
    private int basePremium;
    private int disruptionProbability;

    public Zone() {}

    public Zone(String id, String pincode, String city, int tier, String riskLevel, int basePremium, int disruptionProbability) {
        this.id = id;
        this.pincode = pincode;
        this.city = city;
        this.tier = tier;
        this.riskLevel = riskLevel;
        this.basePremium = basePremium;
        this.disruptionProbability = disruptionProbability;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public int getTier() { return tier; }
    public void setTier(int tier) { this.tier = tier; }

    public String getRiskLevel() { return riskLevel; }
    public void setRiskLevel(String riskLevel) { this.riskLevel = riskLevel; }

    public int getBasePremium() { return basePremium; }
    public void setBasePremium(int basePremium) { this.basePremium = basePremium; }

    public int getDisruptionProbability() { return disruptionProbability; }
    public void setDisruptionProbability(int disruptionProbability) { this.disruptionProbability = disruptionProbability; }
}
