# Cognitive Firewall MVP Dashboard

A high-fidelity React-based dashboard that visualizes "Cognitive Load" metrics, designed as a security-first but human-centered monitoring tool for mental well-being.

## 🛡️ Project Overview

The **Cognitive Firewall** is a real-time behavioral monitoring system. Its primary mission is to protect users from cognitive overload by passively tracking digital behavior and providing actionable insights. It aligns with UN Sustainable Development Goals for Health (SDG 3), Decent Work (SDG 8), and Digital Innovation (SDG 9).

### Core Features
- **Real-time Monitoring:** Passively tracks digital behavior signals.
- **High-Fidelity Visualization:** Calm, professional UI using Deep Navy (#1A2238), Soft Slate (#F8FAFC), and Cyber Green (#10B981).
- **Adaptive Recommendations:** Gentle observations (e.g., "Consider a 2-minute focus break") triggered by load thresholds.
- **Persona Demo Mode:** Switch between "Focused Flow" and "Fragmented Load" to see the system in action.

## 📊 Cognitive Metrics & Scoring

The system calculates a comprehensive **Cognitive Load Score** based on several key drivers:

### 1. Attention Fragmentation (AF)
Measures focus continuity by tracking tab-switching and application/window shifting frequency.
- **Formula:** $AF = 0.6 \times \text{normalized\_tab\_switch} + 0.4 \times \text{normalized\_context\_switch}$
- **Indicators:** Tab Switch Rate (TSR), Context Switch Rate (CSR).

### 2. Cognitive Friction (CF)
Captures behavioral hesitation or inefficiency (e.g., decision latency, scroll erraticness).
- **Formula:** $CF = 0.5 \times \text{Task Resumption Time} + 0.3 \times \text{Decision Latency} + 0.2 \times \text{Error Recovery}$
- **Indicators:** Decision Latency (DL), Scroll Variance (SV).

### 3. Context Pressure (CP)
Reflects environment complexity (open tabs, meeting density, task complexity).
- **Formula:** $CP = 0.4 \times \text{Open Tab Count} + 0.35 \times \text{Meeting Density} + 0.25 \times \text{Notification Rate}$

### 4. Overall Cognitive Load Score
A weighted aggregate of all components:
- **Weights:** Fragmentation (25%), Interaction Effort (25%), Pressure (25%), Sustained Load (25%), and Friction (15%).
- **Adaptivity:** Uses an **Exponentially Weighted Moving Average (EWMA)** to create a personalized baseline for each user.

## 💻 Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4
- **Visualization:** Recharts & SVG (Custom Gauges)
- **Icons:** Lucide-React

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Ranjith1605/cognitive-firewall-dashboard.git

# Navigate to the project directory
cd cognitive-firewall-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠️ Dashboard Components

- **Hero Section:** Large circular "Daily Cognitive Score" Gauge with dynamic color logic (Green/Stable, Yellow/Caution, Red/Overload).
- **Metric Triplets:** Cards for Attention Fragmentation, Interaction Friction, and Context Pressure with interactive help tooltips.
- **Trend Analysis:** Sleek Area Chart showing cognitive load over the last 24 hours.
- **Insight Box:** Toast-style "One Gentle Recommendation" for reducing pressure.

---
*Built with ❤️ for digital well-being.*
