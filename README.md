# Cognitive Firewall // Cyber-Security Command Center

A high-fidelity React-based dashboard that transforms mental well-being monitoring into a robust **Security Operations Center (SOC) for the mind**. It visualizes "Cognitive Load" metrics as defensive perimeters, protecting users from digital fragmentation and mental breaches.

## 🛡️ Project Overview

The **Cognitive Firewall** is a real-time behavioral monitoring system. Its primary mission is to protect users from cognitive overload by passively tracking digital behavior and providing actionable insights. It aligns with UN Sustainable Development Goals for Health (SDG 3), Decent Work (SDG 8), and Digital Innovation (SDG 9).

### Core Features
- **Security-First UI:** Premium dark/light hybrid aesthetic with a "Command Center" feel.
- **Identity Confidence:** continuous behavioral biometric verification with reliability scoring.
- **Multi-View Navigation:** Switch between Dashboard, Security Center, Deep Focus, and Risk Analytics.
- **Adaptive Recommendations:** Forensic observations (e.g., "Critical fragmentation detected") triggered by load thresholds.
- **Persona Demo Mode:** Switch between "Focused Flow" and "Fragmented Load" to simulate security postures.

## 📊 Cognitive Metrics & Scoring

The system calculates a comprehensive **Cognitive Load Score** based on several key drivers:

### 1. Attention Fragmentation (AF)
Measures focus continuity by tracking tab-switching and application/window shifting frequency.
- **Formula:** $AF = 0.6 \times \text{normalized\_tab\_switch} + 0.4 \times \text{normalized\_context\_switch}$

### 2. Cognitive Friction (CF)
Captures behavioral hesitation or inefficiency (e.g., decision latency, scroll erraticness).
- **Formula:** $CF = 0.5 \times \text{Task Resumption Time} + 0.3 \times \text{Decision Latency} + 0.2 \times \text{Error Recovery}$

### 3. Context Pressure (CP)
Reflects environment complexity (open tabs, meeting density, task complexity).
- **Formula:** $CP = 0.4 \times \text{Open Tab Count} + 0.35 \times \text{Meeting Density} + 0.25 \times \text{Notification Rate}$

## 🚀 Advanced Capabilities

### 1. Security Center
- **Behavioral Biometrics**: Continuous identity verification based on interaction patterns.
- **Cognitive Perimeter**: Real-time monitoring of scan rates and logic engine performance.
- **Threat Hunt Log**: Forensic tracing of cognitive breaches and focus leaks.

### 2. Risk Analytics
- **Cognitive Profiling**: Radar chart analysis of across Attention, Decision, and Friction.
- **Historical Benchmarking**: Weekly efficiency trends and baseline comparisons.

### 3. Deep Focus (Mental Shield)
- **Firewall Engagement**: One-click activation of automated distraction-blocking policies.
- **Visual Shield Range**: Animated gauge reflecting current focus depth.

## 💻 Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4
- **Visualization:** Recharts & SVG (Radar, Area, Bar, and Gauge charts)
- **Icons:** Lucide-React
- **Animations:** Framer Motion (Implicit via Tailwind)

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/Ranjith1605/cognitive-firewall-dashboard.git

# Install dependencies
npm install

# Start the command center
npm run dev
```

---
*Built with ❤️ for digital well-being.*
