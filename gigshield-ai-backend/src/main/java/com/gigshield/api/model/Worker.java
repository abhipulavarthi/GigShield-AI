package com.gigshield.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Worker {
    
    @Id
    private String id;
    private String name;
    private String phone;
    private String city;
    private String pincode;
    private String zone;
    private int tier;
    private int weeklyEarnings;
    private int trustScore;
    private int premium;
    private boolean safetyValveActive;

    public Worker() {}

    public Worker(String id, String name, String phone, String city, String pincode, String zone, int tier, int weeklyEarnings, int trustScore, int premium, boolean safetyValveActive) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.city = city;
        this.pincode = pincode;
        this.zone = zone;
        this.tier = tier;
        this.weeklyEarnings = weeklyEarnings;
        this.trustScore = trustScore;
        this.premium = premium;
        this.safetyValveActive = safetyValveActive;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }

    public String getZone() { return zone; }
    public void setZone(String zone) { this.zone = zone; }

    public int getTier() { return tier; }
    public void setTier(int tier) { this.tier = tier; }

    public int getWeeklyEarnings() { return weeklyEarnings; }
    public void setWeeklyEarnings(int weeklyEarnings) { this.weeklyEarnings = weeklyEarnings; }

    public int getTrustScore() { return trustScore; }
    public void setTrustScore(int trustScore) { this.trustScore = trustScore; }

    public int getPremium() { return premium; }
    public void setPremium(int premium) { this.premium = premium; }

    public boolean isSafetyValveActive() { return safetyValveActive; }
    public void setSafetyValveActive(boolean safetyValveActive) { this.safetyValveActive = safetyValveActive; }
}
