import numpy as np
import pandas as pd
from datetime import datetime, timedelta

np.random.seed(42)

N_SAMPLES = 2000
START = datetime(2026, 8, 1)

PROTOCOLS = ["TCP", "UDP", "ICMP", "HTTP", "HTTPS"]
THREAT_TYPES = ["Aucune", "Malware", "Phishing", "DDoS", "Intrusion", "Exfiltration"]

def generate_logs(n=N_SAMPLES):
    rows = []
    for i in range(n):
        timestamp = START + timedelta(seconds=int(np.random.exponential(30)) * i)
        src_ip = f"192.168.{np.random.randint(0,255)}.{np.random.randint(0,255)}"
        dst_ip = f"10.0.{np.random.randint(0,255)}.{np.random.randint(0,255)}"
        packet_size = max(40, int(np.random.normal(500, 200)))
        duration_ms = max(1, np.random.exponential(50))
        protocol = np.random.choice(PROTOCOLS, p=[0.35, 0.15, 0.05, 0.25, 0.20])

        is_anomaly = np.random.rand() < 0.08
        if is_anomaly:
            packet_size *= np.random.uniform(3, 8)
            duration_ms *= np.random.uniform(0.1, 0.3)
            threat_type = np.random.choice(THREAT_TYPES[1:])
        else:
            threat_type = "Aucune"

        rows.append({
            "timestamp": timestamp,
            "src_ip": src_ip,
            "dst_ip": dst_ip,
            "protocol": protocol,
            "packet_size": round(packet_size, 1),
            "duration_ms": round(duration_ms, 2),
            "is_anomaly": int(is_anomaly),
            "threat_type": threat_type,
        })
    return pd.DataFrame(rows)


if __name__ == "__main__":
    df = generate_logs()
    df.to_csv("data/network_logs.csv", index=False)
    print(f"{len(df)} logs générés -> data/network_logs.csv")
    print(df["threat_type"].value_counts())