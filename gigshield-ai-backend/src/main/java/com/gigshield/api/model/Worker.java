package com.gigshield.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Worker {
    
    @Id
    private String id;
    private String name;
    private String lastName;
    private String phone;
    private String city;
    private String pincode;
    private String zone;
    private String platform;
    private String pin;
    private String role; // 'WORKER' or 'ADMIN'
    private Integer tier;
    private Integer weeklyEarnings;
    private Integer trustScore;
    private Integer premium;
    private Boolean safetyValveActive;
    private String paymentStatus; // 'PENDING', 'PAID', or null
    private String lastPaymentDate;

    public Worker() {}

    public Worker(String id, String name, String lastName, String phone, String city, String pincode, String zone, String platform, String pin, String role, Integer tier, Integer weeklyEarnings, Integer trustScore, Integer premium, Boolean safetyValveActive) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.city = city;
        this.pincode = pincode;
        this.zone = zone;
        this.platform = platform;
        this.pin = pin;
        this.role = role;
        this.tier = tier;
        this.weeklyEarnings = weeklyEarnings;
        this.trustScore = trustScore;
        this.premium = premium;
        this.safetyValveActive = safetyValveActive;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getPincode() { return pincode; }
    public void setPincode(String pincode) { this.pincode = pincode; }

    public String getZone() { return zone; }
    public void setZone(String zone) { this.zone = zone; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public String getPin() { return pin; }
    public void setPin(String pin) { this.pin = pin; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public Integer getTier() { return tier; }
    public void setTier(Integer tier) { this.tier = tier; }

    public Integer getWeeklyEarnings() { return weeklyEarnings; }
    public void setWeeklyEarnings(Integer weeklyEarnings) { this.weeklyEarnings = weeklyEarnings; }

    public Integer getTrustScore() { return trustScore; }
    public void setTrustScore(Integer trustScore) { this.trustScore = trustScore; }

    public Integer getPremium() { return premium; }
    public void setPremium(Integer premium) { this.premium = premium; }

    public Boolean isSafetyValveActive() { return safetyValveActive; }
    public void setSafetyValveActive(Boolean safetyValveActive) { this.safetyValveActive = safetyValveActive; }

    public String getPaymentStatus() { return paymentStatus; }
    public void setPaymentStatus(String paymentStatus) { this.paymentStatus = paymentStatus; }

    public String getLastPaymentDate() { return lastPaymentDate; }
    public void setLastPaymentDate(String lastPaymentDate) { this.lastPaymentDate = lastPaymentDate; }
}
