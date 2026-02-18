// Helper to generate a full 24h day if data is missing or sparse
const fillDay = (hours) => {
    const full = [];
    for (let i = 0; i < 24; i++) {
        const existing = hours.find(h => h.hour === i);
        if (existing) {
            full.push(existing);
        } else {
            full.push({
                hour: i,
                frame: `${String(i).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`,
                label: "Low",
                color: "#22c55e",
                sentence: i < 8 || i > 20 ? "Break detected" : "Execution flow",
                CS_hourly: i < 8 || i > 20 ? 0.05 : 0.2,
                AF: i < 8 || i > 20 ? 0.02 : 0.15,
                CF: i < 8 || i > 20 ? 0.04 : 0.18,
                CP: i < 8 || i > 20 ? 0.03 : 0.1
            });
        }
    }
    return full;
};

// Fragmented data needs higher values
const fillDayHigh = (hours) => {
    const full = [];
    for (let i = 0; i < 24; i++) {
        const existing = hours.find(h => h.hour === i);
        if (existing) {
            full.push(existing);
        } else {
            // Generate some wavy fragmented data
            const val = 0.4 + Math.sin(i / 3) * 0.2;
            full.push({
                hour: i,
                frame: `${String(i).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`,
                label: val > 0.5 ? "High" : "Medium",
                color: val > 0.5 ? "#f97316" : "#eab308",
                sentence: i < 8 || i > 22 ? "Break detected" : (val > 0.5 ? "Concentrated load" : "Moderate fragmentation"),
                CS_hourly: i < 8 || i > 22 ? 0.1 : val,
                AF: i < 8 || i > 22 ? 0.05 : val + 0.1,
                CF: i < 8 || i > 22 ? 0.08 : val - 0.1,
                CP: i < 8 || i > 22 ? 0.03 : val + 0.05
            });
        }
    }
    return full;
};

const FOCUSED_DAILY = {
    "daily_cognitive_load_label": "Very Low",
    "daily_cognitive_score": 0.197,
    "avg_tab_switches_per_day": 9.2,
    "avg_interruption_lag_min_per_day": 0.31,
    "total_interruptions_per_day": 133,
    "revisited_pages_per_day": 35,
    "best_moment_of_day": "Night",
    "worst_moment_of_day": "Late morning",
    "browser_notifications_total": 23,
    "meeting_minutes_total": 45,
    "avg_open_tabs": 5.37,
    "one_thing_to_try": "Tomorrow, outline your next steps before diving in to reduce decision friction."
};

const FRAGMENTED_DAILY = {
    "daily_cognitive_load_label": "High",
    "daily_cognitive_score": 0.78,
    "avg_tab_switches_per_day": 25.9,
    "avg_interruption_lag_min_per_day": 0.51,
    "total_interruptions_per_day": 323,
    "revisited_pages_per_day": 91,
    "best_moment_of_day": "Night",
    "worst_moment_of_day": "Late evening",
    "browser_notifications_total": 73,
    "meeting_minutes_total": 260,
    "avg_open_tabs": 13.44,
    "one_thing_to_try": "Tomorrow, try a 25-minute single-task sprint with notifications paused to reduce switching."
};

export const FOCUSED_DATA = {
    "user_id": "U_FOCUSED_FLOW",
    "selected_days": ["2026-02-02", "2026-02-03", "2026-02-04", "2026-02-05", "2026-02-06", "2026-02-07", "2026-02-08"],
    "by_day": {
        "2026-02-02": FOCUSED_DAILY,
        "2026-02-03": FOCUSED_DAILY,
        "2026-02-04": FOCUSED_DAILY,
        "2026-02-05": FOCUSED_DAILY,
        "2026-02-06": FOCUSED_DAILY,
        "2026-02-07": FOCUSED_DAILY,
        "2026-02-08": FOCUSED_DAILY
    },
    "hourly_breakdown_by_day": {
        "2026-02-02": fillDay([]),
        "2026-02-03": fillDay([]),
        "2026-02-04": fillDay([]),
        "2026-02-05": fillDay([]),
        "2026-02-06": fillDay([]),
        "2026-02-07": fillDay([]),
        "2026-02-08": fillDay([])
    }
};

export const FRAGMENTED_DATA = {
    "user_id": "U_FRAGMENTED_LOAD",
    "selected_days": ["2026-02-02", "2026-02-03", "2026-02-04", "2026-02-05", "2026-02-06", "2026-02-07", "2026-02-08"],
    "by_day": {
        "2026-02-02": FRAGMENTED_DAILY,
        "2026-02-03": FRAGMENTED_DAILY,
        "2026-02-04": FRAGMENTED_DAILY,
        "2026-02-05": FRAGMENTED_DAILY,
        "2026-02-06": FRAGMENTED_DAILY,
        "2026-02-07": FRAGMENTED_DAILY,
        "2026-02-08": FRAGMENTED_DAILY
    },
    "hourly_breakdown_by_day": {
        "2026-02-02": fillDayHigh([]),
        "2026-02-03": fillDayHigh([]),
        "2026-02-04": fillDayHigh([]),
        "2026-02-05": fillDayHigh([]),
        "2026-02-06": fillDayHigh([]),
        "2026-02-07": fillDayHigh([]),
        "2026-02-08": fillDayHigh([])
    }
};
