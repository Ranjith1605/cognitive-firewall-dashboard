import { useState, useEffect } from 'react';

const FOCUSED_URL = 'https://raw.githubusercontent.com/enricovaccari/cognitive-firewall/main/data/processed/U_FOCUSED_FLOW_by_day.json';

/**
 * Custom hook that fetches real cognitive load data from GitHub.
 * Returns { data, loading, error }.
 */
export function useDataLoader() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function loadData() {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(FOCUSED_URL);
                if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);
                const json = await res.json();
                if (!cancelled) setData(json);
            } catch (err) {
                if (!cancelled) setError(err.message);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadData();
        return () => { cancelled = true; };
    }, []);

    return { data, loading, error };
}

/**
 * Computes the 3 pillar scores from real JSON day data.
 * All outputs are normalized 0-1 for consistent comparison.
 */
export function computePillarScores(dayData, hourlyData = []) {
    // Pillar 1: Attention Fragmentation (tab switches + interruptions)
    const attentionFragmentation = Math.min(
        (dayData.avg_tab_switches_per_day / 30) * 0.5 +
        (dayData.total_interruptions_per_day / 300) * 0.5,
        1
    );

    // Pillar 2: Interaction Effort (interruption lag + hourly AF average)
    const avgAF = hourlyData.length > 0
        ? hourlyData.reduce((sum, h) => sum + (h.AF || 0), 0) / hourlyData.length
        : dayData.avg_interruption_lag_min_per_day / 1.0;
    const interactionEffort = Math.min(avgAF * 2, 1);

    // Pillar 3: Context Pressure (open tabs + notifications)
    const contextPressure = Math.min(
        (dayData.avg_open_tabs / 20) * 0.5 +
        (dayData.browser_notifications_total / 100) * 0.5,
        1
    );

    return { attentionFragmentation, interactionEffort, contextPressure };
}

/**
 * Derives the best recommendation tip based on the highest pillar score.
 */
export function getDynamicRecommendation(dayData, hourlyData) {
    // Use the one_thing_to_try from real JSON if available
    if (dayData.one_thing_to_try) return dayData.one_thing_to_try;

    const { attentionFragmentation, interactionEffort, contextPressure } =
        computePillarScores(dayData, hourlyData);

    const pillars = [
        { score: attentionFragmentation, tip: "Try a 25-minute single-task sprint with notifications paused to reduce switching." },
        { score: interactionEffort, tip: "Your interaction patterns show high friction. Consider batching repetitive tasks to reduce hesitation." },
        { score: contextPressure, tip: "Closing unused tabs and clearing notification queues will lower your cognitive baseline significantly." }
    ];

    return [...pillars].sort((a, b) => b.score - a.score)[0].tip;
}
