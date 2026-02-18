// Mock data personas for the Cognitive Firewall MVP Dashboard

export const focusedFlowData = {
    daily_score: 28,
    fragmentation_score: 22,
    friction_score: 18,
    pressure_score: 31,
    tab_count: 6,
    insight: "Great focus session! You've maintained deep work for 2.5 hours. Keep your current tab count low to sustain this flow.",
    fragmentation_details: {
        tab_switches: 8,
        interruptions: 2,
        formula: "AF = 0.45 × Tab Switches + 0.30 × Interruptions + 0.25 × Context Shifts",
    },
    friction_details: {
        task_resumption_ms: 1200,
        decision_latency_ms: 800,
        formula: "CF = 0.50 × Task Resumption Time + 0.30 × Decision Latency + 0.20 × Error Recovery",
    },
    pressure_details: {
        open_tabs: 6,
        meeting_density: 0.15,
        formula: "CP = 0.40 × Open Tab Count + 0.35 × Meeting Density + 0.25 × Notification Rate",
    },
    hourly_trends: [
        { hour: "12 AM", score: 15 }, { hour: "1 AM", score: 10 },
        { hour: "2 AM", score: 8 }, { hour: "3 AM", score: 5 },
        { hour: "4 AM", score: 5 }, { hour: "5 AM", score: 7 },
        { hour: "6 AM", score: 10 }, { hour: "7 AM", score: 15 },
        { hour: "8 AM", score: 20 }, { hour: "9 AM", score: 25 },
        { hour: "10 AM", score: 30 }, { hour: "11 AM", score: 28 },
        { hour: "12 PM", score: 32 }, { hour: "1 PM", score: 27 },
        { hour: "2 PM", score: 24 }, { hour: "3 PM", score: 22 },
        { hour: "4 PM", score: 26 }, { hour: "5 PM", score: 30 },
        { hour: "6 PM", score: 25 }, { hour: "7 PM", score: 20 },
        { hour: "8 PM", score: 18 }, { hour: "9 PM", score: 15 },
        { hour: "10 PM", score: 12 }, { hour: "11 PM", score: 10 },
    ],
};

export const fragmentedLoadData = {
    daily_score: 78,
    fragmentation_score: 82,
    friction_score: 65,
    pressure_score: 74,
    tab_count: 34,
    insight: "You've switched tabs 45 times this hour. Try closing 5 tabs to reduce context pressure and regain focus.",
    fragmentation_details: {
        tab_switches: 45,
        interruptions: 12,
        formula: "AF = 0.45 × Tab Switches + 0.30 × Interruptions + 0.25 × Context Shifts",
    },
    friction_details: {
        task_resumption_ms: 8500,
        decision_latency_ms: 4200,
        formula: "CF = 0.50 × Task Resumption Time + 0.30 × Decision Latency + 0.20 × Error Recovery",
    },
    pressure_details: {
        open_tabs: 34,
        meeting_density: 0.72,
        formula: "CP = 0.40 × Open Tab Count + 0.35 × Meeting Density + 0.25 × Notification Rate",
    },
    hourly_trends: [
        { hour: "12 AM", score: 30 }, { hour: "1 AM", score: 25 },
        { hour: "2 AM", score: 20 }, { hour: "3 AM", score: 15 },
        { hour: "4 AM", score: 12 }, { hour: "5 AM", score: 18 },
        { hour: "6 AM", score: 25 }, { hour: "7 AM", score: 35 },
        { hour: "8 AM", score: 50 }, { hour: "9 AM", score: 62 },
        { hour: "10 AM", score: 70 }, { hour: "11 AM", score: 75 },
        { hour: "12 PM", score: 80 }, { hour: "1 PM", score: 78 },
        { hour: "2 PM", score: 72 }, { hour: "3 PM", score: 68 },
        { hour: "4 PM", score: 74 }, { hour: "5 PM", score: 82 },
        { hour: "6 PM", score: 85 }, { hour: "7 PM", score: 78 },
        { hour: "8 PM", score: 70 }, { hour: "9 PM", score: 60 },
        { hour: "10 PM", score: 50 }, { hour: "11 PM", score: 40 },
    ],
};
