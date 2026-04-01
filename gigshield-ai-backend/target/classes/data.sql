INSERT IGNORE INTO worker (id, name, phone, city, pincode, zone, tier, weekly_earnings, trust_score, premium, safety_valve_active) 
VALUES ('W1001', 'Ravi Kumar', '9876543210', 'Bengaluru', '560001', 'Central', 3, 1800, 85, 25, TRUE);

INSERT IGNORE INTO zones (id, pincode, city, tier, risk_level, base_premium, disruption_probability) 
VALUES ('Z1', '560001', 'Bengaluru', 3, 'Moderate', 25, 35);
INSERT IGNORE INTO zones (id, pincode, city, tier, risk_level, base_premium, disruption_probability) 
VALUES ('Z2', '560034', 'Bengaluru', 1, 'Low', 15, 10);
INSERT IGNORE INTO zones (id, pincode, city, tier, risk_level, base_premium, disruption_probability) 
VALUES ('Z3', '560068', 'Bengaluru', 5, 'Severe', 35, 80);

INSERT IGNORE INTO disruption (id, zone, type, disruption_value, threshold, triggered, timestamp) 
VALUES ('D101', '560001', 'Heavy Rain', '45mm', '> 40mm', TRUE, NOW());
INSERT IGNORE INTO disruption (id, zone, type, disruption_value, threshold, triggered, timestamp) 
VALUES ('D102', '560001', 'Heatwave', '38°C', '> 42°C', FALSE, NOW());
INSERT IGNORE INTO disruption (id, zone, type, disruption_value, threshold, triggered, timestamp) 
VALUES ('D103', '560001', 'AQI', '150', '> 350', FALSE, NOW());
INSERT IGNORE INTO disruption (id, zone, type, disruption_value, threshold, triggered, timestamp) 
VALUES ('D104', '560001', 'Traffic', '8 km/h', '< 10 km/h', TRUE, NOW());

INSERT IGNORE INTO claim (id, worker_id, disruption_type, amount, ccss_score, status, timestamp) 
VALUES ('C2041', 'W1001', 'Heavy Rain', 300, 25, 'APPROVED', NOW() - INTERVAL 24 HOUR);
INSERT IGNORE INTO claim (id, worker_id, disruption_type, amount, ccss_score, status, timestamp) 
VALUES ('C2042', 'W1001', 'Traffic', 150, 65, 'FLAGGED', NOW() - INTERVAL 7 DAY);
